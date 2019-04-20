import {ISODateTimeString} from '../../../../../web/js/metadata/ISODateTimeStrings';
import {assert} from 'chai';
import {Rule} from './Rule';
import {RuleFactPair} from './Rule';
import {RuleMap} from './Engine';
import {Engine} from './Engine';
import {RuleOrder} from './Engine';
import {NULL_FUNCTION} from '../../../../../web/js/util/Functions';
import {EventMaps} from './Engine';
import {isPresent} from '../../../../../web/js/Preconditions';
import {TestingTime} from '../../../../../web/js/test/TestingTime';
import {assertJSON} from '../../../../../web/js/test/Assertions';
import {EventMap} from './Engine';
import {EventHandlers} from './Engine';
import {TimeDurations} from '../../../../../web/js/util/TimeDurations';
import {ISODateTimeStrings} from '../../../../../web/js/metadata/ISODateTimeStrings';
import {DurationStr} from '../../../../../web/js/util/TimeDurations';

describe('Engine', function() {

    beforeEach(function() {
        TestingTime.freeze();
    });

    afterEach(function() {
        TestingTime.unfreeze();
    });

    it('basic', function() {


        interface SplashEventHandlers extends EventHandlers {
            readonly onWhatsNew: () => void;
            readonly onNetPromoter: () => void;
        }


        /**
         * Stores a time for each of our event handlers to verify that events
         * do not occur too often and are ordered properly.
         */
        type SplashEventTimes = {
            [id in keyof SplashEventHandlers]: ISODateTimeString | undefined
        };

        interface UserFacts {

            /**
             * The time the datastore was created.
             */
            datastoreCreated: ISODateTimeString;

            /**
             * The currently running version.
             */
            version: string;

            eventTimes: SplashEventTimes;

        }

        interface WhatsNewState {

            version: string;

        }

        class WhatsNewRule implements Rule<UserFacts, SplashEventHandlers, WhatsNewState> {

            public run(facts: Readonly<UserFacts>,
                       eventMap: EventMap<SplashEventHandlers>,
                       state?: Readonly<WhatsNewState>): RuleFactPair<UserFacts, WhatsNewState> {

                const updated = state && state.version !== facts.version;

                if (updated) {
                    eventMap.onWhatsNew.handler();
                }

                state = {version: facts.version};

                return [facts, state];

            }

        }

        interface NetPromoterState {

        }

        class NetPromoterRule implements Rule<UserFacts, SplashEventHandlers, NetPromoterState> {

            public run(facts: Readonly<UserFacts>,
                       eventMap: EventMap<SplashEventHandlers>,
                       state?: Readonly<NetPromoterState>): RuleFactPair<UserFacts, NetPromoterState> {

                if (! state) {
                    state = {};
                }

                const hasExistingAgedDatastore = () => {

                    // datastore should be created for at least 7 days.

                    if (facts.datastoreCreated) {

                        const since = ISODateTimeStrings.parse(facts.datastoreCreated);

                        if (TimeDurations.hasElapsed(since, '1w')) {
                            return true;
                        }

                    }

                    return false;

                };

                const hasMinimumTimeSince = (epoch: ISODateTimeString | undefined,
                                             duration: DurationStr,
                                             defaultValue: boolean = true) => {

                    if (epoch) {

                        const since = ISODateTimeStrings.parse(epoch);
                        return TimeDurations.hasElapsed(since, duration);

                    } else {
                        // our epoch hasn't happened yet so it's ok to send out this message.
                        return defaultValue;
                    }

                };

                const hasMinimumTimeSinceLastEvent = () => {

                    const epoch = EventMaps.earliestExecution(eventMap);

                    return hasMinimumTimeSince(epoch, '15m');

                };

                const hasMinimumTimeSinceLastNPS = () => {
                    const epoch = eventMap.onNetPromoter.lastExecuted;
                    return hasMinimumTimeSince(epoch, '7d');
                };

                const canShow = () => {

                    if (! hasExistingAgedDatastore()) {
                        return false;
                    }

                    if (! hasMinimumTimeSinceLastEvent()) {
                        return false;
                    }

                    if (! hasMinimumTimeSinceLastNPS()) {
                        return false;
                    }

                    return true;

                };

                if (canShow()) {
                    eventMap.onNetPromoter.handler();
                }

                return [facts, state];

            }

        }

        const facts: UserFacts = {

            datastoreCreated: "2012-02-02T11:38:49.321Z",

            version: "1.0.0",

            eventTimes: {
                onWhatsNew: undefined,
                onNetPromoter: undefined,

            }

        };

        let whatsNewCalled: number = 0;
        let netPromoterCalled: number = 0;

        const rules: RuleMap<UserFacts, SplashEventHandlers> = {
            whatsNew: new WhatsNewRule(),
            netPromoter: new NetPromoterRule()
        };

        const eventHandlers: SplashEventHandlers = {
            onWhatsNew: () => ++whatsNewCalled,
            onNetPromoter: () => ++netPromoterCalled,
        };

        const engine: Engine<UserFacts, SplashEventHandlers>
            = new Engine(facts, rules, eventHandlers);

        engine.run();

        assert.equal(whatsNewCalled, 0);
        assert.equal(netPromoterCalled, 1);

        engine.run();

        assert.equal(whatsNewCalled, 0);
        assert.equal(netPromoterCalled, 1);

        facts.version = "1.1.0";

        engine.run();

        assert.equal(whatsNewCalled, 1);
        assert.equal(netPromoterCalled, 1);

        // FIXME: test 15 minutes too ... after an upgrade where we were never
        //  called before.

        TestingTime.forward('8d');

        engine.run();
        assert.equal(whatsNewCalled, 1);
        assert.equal(netPromoterCalled, 2);

        // FIXME: we need an event emit engine to emit only named events
        // like 'whats-new' and 'net-promoter-score' which I can tie code to
        // and display messages.


        // "2019-04-20T14:38:55.825Z"


        // FIXME: tests to perform
        //
        //  - new user, no initial "whats new" splash, then 7 days later ,
        //    first NPS score prompted, then another 7 days, then new NPS score,
        //    requested.
        //
        //  - new user, 3 days, then new version, then 4 more days, then 'what's new'

        // - existing usser

    });

    describe('EventHandlers', function() {

        it('basic', function() {

            const myEventHandlers = {
                onFoo: NULL_FUNCTION
            };

            const myEventMap = EventMaps.create(myEventHandlers, {});

            assert.isTrue(isPresent(myEventMap.onFoo));
            assert.isTrue(isPresent(myEventMap.onFoo.handler));
            assert.isTrue(myEventMap.onFoo.lastExecuted === undefined);
            myEventMap.onFoo.handler();
            assert.isTrue(myEventMap.onFoo.lastExecuted !== undefined);

            assert.equal(myEventMap.onFoo.lastExecuted, "2012-03-02T11:38:49.321Z");

        });


        it('withExistingTime', function() {

            const myEventHandlers = {
                onFoo: NULL_FUNCTION
            };

            const myEventMap = EventMaps.create(myEventHandlers, {onFoo: "2012-03-01T00:00:00.000Z"});

            assert.isTrue(isPresent(myEventMap.onFoo));
            assert.isTrue(isPresent(myEventMap.onFoo.handler));
            assert.isTrue(myEventMap.onFoo.lastExecuted !== undefined);
            assert.equal(myEventMap.onFoo.lastExecuted, "2012-03-01T00:00:00.000Z");
            myEventMap.onFoo.handler();
            assert.isTrue(myEventMap.onFoo.lastExecuted !== undefined);
            assert.equal(myEventMap.onFoo.lastExecuted, "2012-03-02T11:38:49.321Z");

            assertJSON(EventMaps.toEventTimes(myEventMap), {
                "onFoo": "2012-03-02T11:38:49.321Z"
            });


        });

    });

});