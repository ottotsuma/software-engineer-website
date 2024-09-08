export interface Skill {
    name: string;
    level: number;
  }
  
  export interface Stats {
    name: string;
    level: number;
    class: string;
    species: string;
    spells: number;
    passives: number;
    spellPoints: number;
    statPoints: number;
    vitality: number;
    strength: number;
    endurance: number;
    magic: number;
    willpower: number;
    dexterity: number;
    sense: number;
    charisma: number;
  }
  
  export interface Item {
    name: string;
    description: string;
    image?: string;
  }
  
  export interface Person {
    name: string;
    description?: string;
    species: string; // representing one species
    class: string; // representing one class
    items?: string[]; // list of item names or IDs
    skills?: Skill[]; // list of skills
    nickname?: string; // optional list of nicknames
    showTitles?: boolean; // optional
    equippedTitle?: string; // optional
    titles?: string[]; // optional list of titles
    showSkills?: boolean; // optional
    showItems?: boolean; // optional
    notes?: string; // optional notes
    font: string
    getByChapter?(chapter: string): Person[];
  }
  


export const Otto: Person = {
    name: "Otto",
    description: "",
    species: "Human",
    class: "Mage",
    items: ["Sword", "Shield"],
    skills: [{
        level: 1,
        "name": "Whip"
    }],
    font: "'Charm', cursive"
};

export const PersonsList = {
    Otto: Otto
}
// Tsuma: {}, Kaja: {}, Noah: {}, Sarah: {}, Josh: {}, Hitori: {}, Linhart: {}, Beke: {}, Effi: {}, Nils: {}
