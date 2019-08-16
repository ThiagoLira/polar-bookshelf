import {Preconditions} from '../Preconditions';
import {Image} from './Image';
import {ISODateTimeString} from './ISODateTimeStrings';
import {IThumbnail} from "./IThumbnail";

export class Thumbnail extends Image implements IThumbnail {

    public readonly id: string;

    public created: ISODateTimeString;

    constructor(opts: any) {

        super(opts);

        this.id = opts.id;
        this.created = opts.created;

        this.init(opts);

    }

    validate() {

        super.validate();

        Preconditions.assertPresent(this.id, "id");
        Preconditions.assertPresent(this.created, "created");

    }

}

