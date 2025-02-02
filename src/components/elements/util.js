import Empty from "./../../assets/empty.gif";
import { monadColors } from "./colors";
import { spellList } from "./spells";
import { racesList } from "./species";
import { classList } from "./classes";
import { ItemList } from "./item";
import { placeList } from "./places";
// import { titlesList } from "./titles"
// import { PersonsList } from "./people"
// const { PersonsList } = await import('./PersonsList');

// PersonsList => All lists
// spellList
// racesList => spellList / placeList
// ItemList => placeList, spellList
// classList => spellList
// placeList

// function populateReferences() {
//   // Populate references in spellList
//   for (const spell of Object.values(spellList)) {
//     spell.places = Object.values(placeList).filter(place => place.spells.includes(spell));
//     spell.items = Object.values(ItemList).filter(item => item.spells.includes(spell));
//   }

//   // Populate references in placeList
//   for (const place of Object.values(placeList)) {
//     place.spells = Object.values(spellList).filter(spell => spell.places.includes(place));
//     place.items = Object.values(ItemList).filter(item => item.places.includes(place));
//   }

//   // Populate references in ItemList
//   for (const item of Object.values(ItemList)) {
//     item.spells = Object.values(spellList).filter(spell => item.spells.includes(spell));
//     item.places = Object.values(placeList).filter(place => item.places.includes(place));
//   }
// }

// Find key in an object ignoring case
export function findKeyIgnoreCase(obj, name) {
  if (!obj || typeof obj !== 'object' || !name || typeof name !== 'string') {
    return undefined;
  }
  const searchName = name.toLowerCase();
  const key = Object.keys(obj).find(key => key.toLowerCase() === searchName);
  return key ? obj[key] : undefined;
}

// Get all keys in an object, including nested ones
export function getDeepKeys(obj) {
  let keys = [];
  for (let key in obj) {
    keys.push(key);
    if (typeof obj[key] === "object" && obj[key] !== null) {
      keys = keys.concat(getDeepKeys(obj[key]).map(subkey => `${key}.${subkey}`));
    }
  }
  return keys;
}

// Convert all string values in an object to lowercase
export function lowerObjectValues(obj) {
  for (let prop in obj) {
    if (typeof obj[prop] === 'string') {
      obj[prop] = obj[prop].toLowerCase();
    }
    if (typeof obj[prop] === 'object' && obj[prop] !== null) {
      lowerObjectValues(obj[prop]);
    }
  }
  return obj;
}

// Get parameter value case-insensitively
export function getParameterCaseInsensitive(object = {}, key = '') {
  if (object && key && typeof object === 'object' && key.length > 0) {
    const asLowercase = key.toLowerCase();
    return object[Object.keys(object).find(k => k.toLowerCase() === asLowercase)];
  }
}

// Search for a place by name
export function searchPlaces(name) {
  name = name.toLowerCase();
  const placeListLower = keysToLowercase(possiblePlacesObject());
  return placeListLower[name] || false;
}

// List possible places
export function possiblePlacesList() {
  const possiblePlaces = Object.keys(placeList);
  possiblePlaces.forEach(place => {
    const countriesData = placeList[place]?.countries;
    if (countriesData) {
      Object.keys(countriesData).forEach(country => {
        possiblePlaces.push(country);
        const citiesData = countriesData[country]?.cities;
        if (citiesData) {
          possiblePlaces.push(...Object.keys(citiesData));
        }
      });
    }
  });
  return possiblePlaces;
}

// Create an object with all places, countries, and cities
export function possiblePlacesObject() {
  const placesObject = {};
  const possiblePlaces = Object.keys(placeList);
  possiblePlaces.forEach(place => {
    placesObject[place] = placeList[place];
    const countriesData = placeList[place]?.countries;
    if (countriesData) {
      Object.keys(countriesData).forEach(country => {
        placesObject[country] = countriesData[country];
        const citiesData = countriesData[country]?.cities;
        if (citiesData) {
          Object.assign(placesObject, citiesData);
        }
      });
    }
  });
  return placesObject;
}

// Search for a spell by name
export function searchSpells(name) {
  name = name.toLowerCase();
  const spellListLower = keysToLowercase(spellList);
  return spellListLower[name] || false;
}

// Search for an item by name
export function searchItem(name) {
  name = name.toLowerCase();
  const itemListLower = keysToLowercase(ItemList);
  return itemListLower[name] || false;
}

// Search for a species by name
export function searchSpecies(name) {
  name = name.toLowerCase();
  const speciesLower = keysToLowercase(racesList);
  return speciesLower[name] || false;
}

// Search for a class by name
export function searchClass(name) {
  name = name.toLowerCase();
  const classListLower = keysToLowercase(classList);
  return classListLower[name] || false;
}

// Search for class skills by name
export function searchClassSkills(name) {
  name = name.toLowerCase();
  const spellListLower = lowerObjectValues(spellList);
  return Object.values(spellListLower).filter(skill => skill.classes?.includes(name));
}

// Search for species skills by name
export function searchSpeciesSkills(name) {
  name = name.toLowerCase();
  const spellListLower = lowerObjectValues(spellList);
  return Object.values(spellListLower).filter(skill => skill.species?.includes(name));
}

// Convert all keys in an object to lowercase
export function keysToLowercase(obj) {
  return Object.keys(obj).reduce((acc, key) => {
    acc[key.toLowerCase()] = obj[key];
    return acc;
  }, {});
}

// Try a function and return a fallback value if it fails
export function _try(func, fallbackValue) {
  try {
    const value = func();
    return value == null ? fallbackValue : value;
  } catch {
    return fallbackValue;
  }
}

export function mergeObjects(obj1, obj2) {
  const merged = { ...obj1 }; // Start with obj1's values

  Object.keys(obj2).forEach(key => {
    if (merged[key] !== undefined) {
      // If the key exists in both, add the values
      merged[key] += obj2[key];
    } else {
      // Otherwise, just set the value from obj2
      merged[key] = obj2[key];
    }
  });

  return merged;
}
// Handle image load error
export function imageError(ev) {
  ev.target.src = Empty;
}

// Convert percentage to color
export function perc2color(perc) {
  perc = Math.max(0, Math.min(perc, 100));
  const r = perc < 50 ? 255 : Math.round(510 - 5.1 * perc);
  const g = perc < 50 ? Math.round(5.1 * perc) : 255;
  const h = (r << 16) | (g << 8);
  return `#${h.toString(16).padStart(6, '0')}`;
}

// Round down to the nearest 10
export function roundDownToNearest10(num) {
  return Math.floor(num / 10) * 10;
}

// Get color for rank
export function RankColour(Rank) {
  const colorMap = {
    "F": monadColors.junk,
    "D": monadColors.common,
    "C": monadColors.intermediate,
    "B": monadColors.advanced,
    "A": monadColors.rare,
    "S": monadColors.epic
  };
  return colorMap[Rank] || "";
}

// Search origin by skill name
export function searchOrigin(initialSkill) {
  const data = searchSpells(initialSkill) ||
    searchClass(initialSkill) ||
    searchSpecies(initialSkill) ||
    searchItem(initialSkill) ||
    searchPlaces(initialSkill);
  return data || {};
}
