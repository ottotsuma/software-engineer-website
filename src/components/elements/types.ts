import { spellList } from "./spells";
import { racesList } from "./species";
import { classList } from "./classes";
import { ItemList } from "./item";
import { placeList } from "./places";

export interface Spell {
  note: string;                 // Additional notes about the spell
  name: string;                 // Name of the spell
  element: string[];            // Array of elements associated with the spell
  image: string;                // URL or path to an image representing the spell
  negative: boolean;            // Indicates if the spell has negative effects
  passive: boolean;             // Indicates if the spell is passive
  stats: Record<string, any>;   // Object to store various stats
  links: {                      // Links to other related data
    spells: string[];           // Array of related spells
    classes: string[];          // Array of related classes
    species: string[];          // Array of related species
  }
}


export interface Race {
  name: string;
  description: string;
  [key: string]: any;
}

export interface Class {
  name: string;
  description: string;
  [key: string]: any;
}

export interface Item {
  name: string;
  description: string;
  image?: string;
  [key: string]: any;
}

export interface Place {
  name: string;
  description: string;
  [key: string]: any;
}

export interface Person {
  name: string;
  description: string;
  species: string; // assuming species is a string representing one species
  class: string; // assuming class is a string representing one class
  items: string[]; // list of item names or IDs
  skills: string[]; // list of skill names or IDs
  getItemsByChapter(chapter: string): string[]; // method to get items based on chapter
  getSkillsByChapter(chapter: string): string[]; // method to get skills based on chapter
}

const person: Person = {
  name: "John Doe",
  description: "A brave adventurer.",
  species: "Human",
  class: "Warrior",
  items: ["Sword", "Shield"],
  skills: ["Attack", "Defense"],
  getItemsByChapter(chapter: string): string[] {
    // Implement logic to return items based on the chapter
    return this.items; // Example implementation
  },
  getSkillsByChapter(chapter: string): string[] {
    // Implement logic to return skills based on the chapter
    return this.skills; // Example implementation
  }
};


// const test: Spell = spellList.Absorption
// console.log(test)