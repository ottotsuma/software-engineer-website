import { spellList } from "./spells";
import { racesList } from "./species";
import { classList } from "./classes";
import { ItemList } from "./item";
import { placeList } from "./places";
import { titlesList } from "./titles"
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
  "spell points": number;
  "stat points": number;
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

export interface Class {

}
export interface Species {

}

export interface Title {

}
export interface Person {
  name: string;
  description?: string;
  species: Species | string; // representing one species
  class: Class | string; // representing one class
  items?: Item[] | string[];// list of item names or IDs
  skills?: Skill[]; // list of skills
  nickname?: string; // optional list of nicknames
  showTitles?: boolean; // optional
  equippedTitle?: Title; // optional
  titles?: Title[]; // optional list of titles
  notes?: string; // optional notes
  font: string;
  born: any;
  level: number;
  stats: Stats;
  getByChapter?(Chapter: number): Person;
}

export const Otto: Person = {
  name: "Otto",
  level: 1,
  description: "",
  species: racesList.Human,
  class: classList.Mage,
  items: [ItemList["Academy Robe (Black/Yellow)"]],
  skills: [{
    level: 1,
    "name": spellList["Mana Ball"].name
  }],
  font: "'Charm', cursive",
  born: placeList.Charia.countries.Alden.cities.Steinauhau,
  notes: "",
  stats: {
    name: "Otto",
    level: 10,
    class: "Kʼawiil",
    species: "Human",
    spells: 8,
    passives: 2,
    "spell points": 20 - 20, // from class 4 per level (normal/rare/epic/legendary), Increase Free Ability Points received for every increase in Level by 2 points.
    "stat points": 22 - 22, // from species 2 per level
    vitality: 0,
    strength: 0,
    endurance: 0,
    magic: 10, // 10 from leveling
    willpower: 0,
    dexterity: 2, // 2 from the level 1 & 10
    sense: 0,
    charisma: 10, // 10 from leveling
  },
  equippedTitle: titlesList["Back to School"],
  titles: [titlesList["Back to School"], titlesList.Apprentice],
  getByChapter: (Chapter: number) => {
    const chapters = {
      1: {
        level: 1,
        titles: [],
        class: classList.Mage,
        species: racesList.Human,
        skills: [{
          level: 1,
          "name": spellList["Mana Ball"].name
        }],
        "spell points": 20 - 20, // from class 4 per level (normal/rare/epic/legendary), Increase Free Ability Points received for every increase in Level by 2 points.
        "stat points": 22 - 22, // from species 2 per level
        stats: {
          vitality: 0,
          strength: 0,
          endurance: 0,
          magic: 10, // 10 from leveling
          willpower: 0,
          dexterity: 2, // 2 from the level 1 & 10
          sense: 0,
          charisma: 10, // 10 from leveling
        }
      }
    }
    // @ts-ignore
    while (Chapter > 0 && !chapters[Chapter]) {
      Chapter -= 1;
    }  
    // @ts-ignore
    if (chapters[Chapter]) { // @ts-ignore
      return chapters[Chapter];
    } else {
      return Otto
    }
  }
};

export const PersonsList = {
  Otto: Otto
}
// Tsuma: {}, Kaja: {}, Noah: {}, Sarah: {}, Josh: {}, Hitori: {}, Linhart: {}, Beke: {}, Effi: {}, Nils: {}
