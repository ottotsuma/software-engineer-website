import Empty from "./../../assets/empty.gif";
import { monadColors } from "./colors";
import { spellList } from "./spells";
import { racesList } from "./species"
import { classList } from "./classes"
import { ItemList } from "./item"
import { placeList } from "./places"

export function getDeepKeys(obj) {
  var keys = [];
  for(var key in obj) {
      keys.push(key);
      if(typeof obj[key] === "object") {
          var subkeys = getDeepKeys(obj[key]);
          keys = keys.concat(subkeys.map(function(subkey) {
              return key + "." + subkey;
          }));
      }
  }
  return keys;
}

export function lowerObjectValues(obj) {
  // not converting keys...
  for (var prop in obj) {
      if (typeof obj[prop] === 'string') {
          obj[prop] = obj[prop].toLowerCase();
      }
      if (typeof obj[prop] === 'object') {
        lowerObjectValues(obj[prop]);
      }
  }
  return obj;
}

export function getParameterCaseInsensitive(object = {}, key = '') {
  if(object && key && typeof(object) === 'object' && key.length > 0) {
    const asLowercase = key.toLowerCase();
    return object[Object.keys(object).filter(function(k) {
      return k.toLowerCase() === asLowercase;
    })[0]]; 
  }
}

export function searchPlaces (name){
  name = name.toLowerCase()
  const placeListLower = keysToLowercase(possiblePlacesObject())
  return placeListLower[name] ? placeListLower[name] : false
}

export function possiblePlacesList () {
  const PossiblePlaces = Object.keys(placeList)
  for (let j = 0; j < PossiblePlaces.length; j++) {
    if (placeList[PossiblePlaces[j]] && placeList[PossiblePlaces[j]].countries) {
      const countriesData = Object.keys(placeList[PossiblePlaces[j]].countries)
      for (let index = 0; index < countriesData.length; index++) {
        PossiblePlaces.push(countriesData[index])
        const countryData = placeList[PossiblePlaces[j]].countries[countriesData[index]]
        if (countryData && countryData.cities) {
          Object.keys(countryData.cities).map(city => PossiblePlaces.push(city))
        }
      }
    }
  }
  return PossiblePlaces
}

export function possiblePlacesObject () {
  const placesObject = {}
  const PossiblePlaces = Object.keys(placeList)
  for (let j = 0; j < PossiblePlaces.length; j++) {
    placesObject[PossiblePlaces[j]] = placeList[PossiblePlaces[j]]
    if (placeList[PossiblePlaces[j]] && placeList[PossiblePlaces[j]].countries) {
      const countriesData = Object.keys(placeList[PossiblePlaces[j]].countries)
      for (let index = 0; index < countriesData.length; index++) {
        const countryData = placeList[PossiblePlaces[j]].countries[countriesData[index]]
        placesObject[countriesData[index]] = countryData
        if (countryData && countryData.cities) {
          const cityData = Object.keys(countryData.cities)
          for (let q = 0; q < cityData.length; q++) {
            placesObject[cityData[q]] = countryData.cities[cityData[q]]
          }
        }
      }
    }
  }
  return placesObject
}

export function searchSpells (name){
  name = name.toLowerCase()
  const spellListLower = keysToLowercase(spellList)
  return spellListLower[name] ? spellListLower[name] : false
}

export function searchItem (name){
  name = name.toLowerCase()
  const speciesLower = keysToLowercase(ItemList)
  return speciesLower[name] ? speciesLower[name] : false
}

export function searchSpecies (name){
  name = name.toLowerCase()
  const speciesLower = keysToLowercase(racesList)
  return speciesLower[name] ? speciesLower[name] : false
}

export function searchClass (name){
  name = name.toLowerCase()
  const speciesLower = keysToLowercase(classList)
  return speciesLower[name] ? speciesLower[name] : false
}

export function searchClassSkills (name){
  const listOfSpeciesSkills = []
  name = name.toLowerCase()
  const speciesLower = lowerObjectValues(spellList)
  for (const key in speciesLower) {
    if(speciesLower[key].classes?.includes(name)) {
      listOfSpeciesSkills.push(speciesLower[key])
    }
  }
  for (let index = 0; index < speciesLower.length; index++) {
    if(speciesLower[index].classes){
      if(speciesLower[index].classes.includes(name)){
        listOfSpeciesSkills.push(speciesLower[index])
      }
    }
  }
  return listOfSpeciesSkills
}

export function searchSpeciesSkills (name){
  const listOfSpeciesSkills = []
  name = name.toLowerCase()
  const speciesLower = lowerObjectValues(spellList)
  for (const key in speciesLower) {
    if(speciesLower[key].species?.includes(name)) {
      listOfSpeciesSkills.push(speciesLower[key])
    }
  }
  for (let index = 0; index < speciesLower.length; index++) {
    if(speciesLower[index].species){
      if(speciesLower[index].species.includes(name)){
        listOfSpeciesSkills.push(speciesLower[index])
      }
    }
  }
  return listOfSpeciesSkills
}

export function keysToLowercase (obj) {
  var key, keys = Object.keys(obj);
  var n = keys.length;
  var newObject={}
  while (n--) {
    key = keys[n];
    newObject[key.toLowerCase()] = obj[key];
  }
  return newObject
}

export function _try(func, fallbackValue) {
  try {
    var value = func();
    return value === null || value === undefined ? fallbackValue : value;
  } catch (e) {
    return fallbackValue;
  }
}

export function imageError(ev) {
  ev.target.src = Empty;
}

export function perc2color(perc) {
  if (perc < 0) perc = 0;
  if (perc > 100) return "rgb(36, 255, 0)";
  var r,
    g,
    b = 0;
  if (perc < 50) {
    r = 255;
    g = Math.round(5.1 * perc);
  } else {
    g = 255;
    r = Math.round(510 - 5.1 * perc);
  }
  var h = r * 0x10000 + g * 0x100 + b * 0x1;
  return "#" + ("000000" + h.toString(16)).slice(-6);
}

export function roundDownToNearest10(num) {
  return Math.floor(num / 10) * 10;
}

export function RankColour(Rank) {
  if (!Rank) {
    return "";
  } else if (Rank === "F") {
    return `${monadColors.junk}`;
  } else if (Rank === "D") {
    return `${monadColors.common}`;
  } else if (Rank === "C") {
    return `${monadColors.intermediate}`;
  } else if (Rank === "B") {
    return `${monadColors.advanced}`;
  } else if (Rank === "A") {
    return `${monadColors.rare}`;
  } else if (Rank === "S") {
    return `${monadColors.epic}`;
  }
}

export function searchOrigin(initialSkill) {
  let data = {}
  const skillData = searchSpells(initialSkill)
  const classData = searchClass(initialSkill)
  const speciesData = searchSpecies(initialSkill)
  const itemData = searchItem(initialSkill)
  const placeData = searchPlaces(initialSkill)
  skillData ? data = skillData : classData ? data = classData : speciesData ? data = speciesData : itemData ? data = itemData : placeData ? data = placeData : data = {}
  return data
}