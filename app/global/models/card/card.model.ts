export class Card {
    id: string;
    layout: string;
    name: string;
    names: string[];
    manaCost: string;
    cmc: number;
    colors: string[];
    colorIdentity: string[];
    type: string;
    supertypes: string[];
    types: string[];
    subtypes: string[];
    rarity: string;
    text: string;
    flavor: string;
    artist: string;
    number: string;
    power: string;
    toughness: string;
    loyalty: number;
    multiverseid: number;
    variations: number[];
    imageName: string;
    watermark: string;
    border: string;
    timeshifted: boolean;
    hand: number;
    life: number;
    reserved: boolean;
    releaseDate: string;
    starter: boolean;
    mciNumber: number;

    //Extras
    rulings: Object[];
    foreignName: Object[];
    printings: string[];
    originalText: string;
    originalType: string;
    legalities: Object[];
    source: string;
}