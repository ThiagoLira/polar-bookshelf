import {assert} from 'chai';
import {Spectron} from '../../js/test/Spectron';
import {SpectronSpec} from '../../js/test/SpectronSpec';
import {PolarDataDir} from '../../js/test/PolarDataDir';

// we can change the polar data dir with the following
// PolarDataDir.useFreshDirectory('.polar-persistent-error-logger');

describe('injector', function() {

    Spectron.setup(__dirname);
    this.timeout(30000);

    it('test', async function() {

        await SpectronSpec.create(this.app).waitFor(true);

    });

});





