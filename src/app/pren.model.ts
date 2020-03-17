import { Stanza } from './stanza.model';

export class Pren
{
    public suspendedClass : string = "text-primary"
    constructor(
        public stanza : Stanza,
        public from: Date,
        public to : Date,
        public name : String,
        public surname : String

    ) {}

}
