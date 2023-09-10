import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import Item from "./../elements/item";
// import Equipment from "./../elements/equipment";
import Stats from "./../elements/stats";
import Spells, { spellList, ListOfMagicTypes } from "./../elements/spells";
import { colors, monadColors, textColors } from "./../elements/colors";
import { _try, imageError, possiblePlacesList } from "./../elements/util";
import { racesList } from "./../elements/species";
import { classList } from "./../elements/classes";
import { PeopleList } from "./People";
import { placeList } from "../elements/places";
import Tree from "./../elements/tree";
import Hover from "./../elements/hover";

import Empty from "./../../assets/empty.gif";

export const MageTypes = [
  "mana", // All non elemental magic
  "fire", // Fire, Lava (earth), Combustion, Heat, Volcano (earth), Inferno
  "metal", // Metal, Magnetic, Crystal, Gems (With corresponding element, E.g. Fire + Metal = Ruby)
  "plant", // Plants, Wood,
  "water", // Water, Tsunami,
  "earth", // Rocks, Solid, Dust, Sand, Mud (water), Growth (plant)
  "lightning", // Lightning, Electric, Electro-magnetic, Plasma
  "ice", // Ice, Frost, Cold,
  "wind", // Wind, Flight, Clouds (water), Hurricane, storm (water)
  "shadow", // Shadow, Darkness, Unholy, nightmare
  "light", // Light, Holy, Illumination, cleansing
  "sound", // Sound, Echo, Fear (mental)?
  "toxic", // Poison, Venom, Acid, Corrosion
  "time", // time, Vision, future
  "gravity", // gravity
  "portal", // portal, teleport, space?
  "spirit", // Spiritual, Ghosts?
  "blood", // Blood
  "beast", // Beast specific skills
  "mental", // Mental, Mind, Illusion (Sound, Light, Shadow. Good and bad mental.)
  "curse", // Curses
  "none", // No idea.
];
export function SpellFinder() {
  const [chosenElement, SetChosenElement] = useState("");
  const [chosenClass, SetChosenClass] = useState("");
  const [chosenSpecies, SetChosenSpecies] = useState("");
  const [chosenPlace, SetChosenPlace] = useState("");
  const [shownSpells, SetShownSpells] = useState([]);
  const [elementalsArray, SetElementalsArray] = useState([]);
  const [classesArray, SetClassesArray] = useState([]);
  const [speciesArray, SetSpeciesArray] = useState([]);
  const [placesArray, SetPlacesArray] = useState([]);
  const entries = Object.entries(spellList);
  const [personButtons, SetPersonButtons] = useState([]);
  const [chapter, SetChapter] = useState(1);
  const [person, SetPerson] = useState(PeopleList[4](chapter));
  // .sort((a, b) => a[0].localeCompare(b[0]))
  useEffect(() => {
    const ElementTypesArray = [];
    const ClassButtonsArray = [];
    const SpeciesButtonsArray = [];
    const PlacesButtonsArray = [];
    // List out all the buttons of MageTypes
    ElementTypesArray.push(
      <ElementalButton
        selected={chosenElement === ""}
        key={"Reset Element"}
        onClick={() => SetChosenElement("")}
      >
        Reset Element
      </ElementalButton>
    );
    for (let index = 0; index < MageTypes.length; index++) {
      ElementTypesArray.push(
        <ElementalButton
          selected={chosenElement === MageTypes[index]}
          color={monadColors[MageTypes[index]]}
          key={MageTypes[index] + "button"}
          onClick={() => SetChosenElement(MageTypes[index])}
        >
          {MageTypes[index]}
        </ElementalButton>
      );
    }

    // List out all the buttons of Classes
    ClassButtonsArray.push(
      <ElementalButton
        selected={chosenClass === ""}
        key={"Reset Classes"}
        onClick={() => SetChosenClass("")}
      >
        Reset Class
      </ElementalButton>
    );
    const PossibleClasses = Object.keys(classList).sort((a, b) => a[0].localeCompare(b[0]));
    for (let index = 0; index < PossibleClasses.length; index++) {
      ClassButtonsArray.push(
        <ElementalButton
          selected={chosenClass === PossibleClasses[index]}
          color={monadColors[PossibleClasses[index]]}
          key={PossibleClasses[index] + "button"}
          onClick={() => SetChosenClass(PossibleClasses[index])}
        >
          {PossibleClasses[index]}
        </ElementalButton>
      );
    }

    // List out all the buttons of Classes
    SpeciesButtonsArray.push(
      <ElementalButton
        selected={chosenSpecies === ""}
        key={"Reset Species"}
        onClick={() => SetChosenSpecies("")}
      >
        Reset Species
      </ElementalButton>
    );
    const PossibleSpecies = Object.keys(racesList).sort((a, b) => a[0].localeCompare(b[0]));
    for (let index = 0; index < PossibleSpecies.length; index++) {
      SpeciesButtonsArray.push(
        <ElementalButton
          selected={chosenSpecies === PossibleSpecies[index]}
          color={monadColors[PossibleSpecies[index]]}
          key={PossibleSpecies[index] + "button"}
          onClick={() => SetChosenSpecies(PossibleSpecies[index])}
        >
          {PossibleSpecies[index]}
        </ElementalButton>
      );
    }

    PlacesButtonsArray.push(<ElementalButton
      selected={chosenPlace === ""}
      key={"Reset Place"}
      onClick={() => SetChosenPlace("")}
    >
      Reset Place
    </ElementalButton>
    );
    const PossiblePlaces = possiblePlacesList()
    for (let index = 0; index < PossiblePlaces.length; index++) {
      PlacesButtonsArray.push(
        <ElementalButton
          selected={chosenPlace === PossiblePlaces[index]}
          color={monadColors[PossiblePlaces[index]]}
          key={PossiblePlaces[index] + "button"}
          onClick={() => SetChosenPlace(PossiblePlaces[index])}
        >
          {PossiblePlaces[index]}
        </ElementalButton>
      );
    }
    SetPlacesArray(PlacesButtonsArray)
    SetElementalsArray(ElementTypesArray);
    SetClassesArray(ClassButtonsArray);
    SetSpeciesArray(SpeciesButtonsArray);

    // Find all the spells with the 'chosenElement'
    const savedElements = [];
    const savedClasses = [];
    const savedSpecies = [];

    for (let index = 0; index < entries.length; index++) {
      const elementArray = _try(() => entries[index][1].element, ["none"]);
      if (elementArray.includes(chosenElement)) {
        savedElements.push({ name: entries[index][0], level: 1 });
      }
      const classArray = _try(() => entries[index][1].classes, ["none"]);
      if (classArray.includes(chosenClass)) {
        savedClasses.push({ name: entries[index][0], level: 1 });
      }
      const SpeciesArray = _try(() => entries[index][1].species, ["none"]);
      if (SpeciesArray.includes(chosenSpecies)) {
        savedSpecies.push({ name: entries[index][0], level: 1 });
      }
    }
    if (chosenElement && chosenClass && chosenSpecies) {
      const temp = [];
      for (let index = 0; index < savedElements.length; index++) {
        for (let j = 0; j < savedSpecies.length; j++) {
          if (
            _try(() => savedElements[index].name) ===
            _try(() => savedSpecies[j].name)
          ) {
            for (let x = 0; x < savedClasses.length; x++) {
              if (
                _try(() => savedElements[index].name) ===
                _try(() => savedClasses[j].name)
              ) {
                temp.push(savedElements[index]);
              }
            }
          }
        }
      }
      SetShownSpells(temp);
    } else if (chosenElement && chosenSpecies && !chosenClass) {
      const temp = [];
      for (let index = 0; index < savedElements.length; index++) {
        for (let j = 0; j < savedSpecies.length; j++) {
          if (savedElements[index].name === savedSpecies[j].name) {
            temp.push(savedElements[index]);
          }
        }
      }
      SetShownSpells(temp);
    } else if (chosenElement && !chosenSpecies && chosenClass) {
      const temp = [];
      for (let index = 0; index < savedElements.length; index++) {
        for (let j = 0; j < savedClasses.length; j++) {
          if (savedElements[index].name === savedClasses[j].name) {
            temp.push(savedElements[index]);
          }
        }
      }
      SetShownSpells(temp);
    } else if (!chosenElement && chosenSpecies && chosenClass) {
      const temp = [];
      for (let index = 0; index < savedSpecies.length; index++) {
        for (let j = 0; j < savedClasses.length; j++) {
          if (savedSpecies[index].name === savedClasses[j].name) {
            temp.push(savedSpecies[index]);
          }
        }
      }
      SetShownSpells(temp);
    } else if (chosenElement && !chosenSpecies && !chosenClass) {
      SetShownSpells(savedElements);
    } else if (chosenClass && !chosenElement && !chosenSpecies) {
      SetShownSpells(savedClasses);
    } else if (chosenSpecies && !chosenElement && !chosenClass) {
      SetShownSpells(savedSpecies);
    } else if (!chosenSpecies && !chosenElement && !chosenClass) {
      SetShownSpells([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chosenElement, chosenClass, chosenSpecies, chosenPlace]);
  useEffect(() => {
    function HandleChange(e) {
      SetChapter(e.target.value);
    }
    const PersonList = [];
    for (let index = 0; index < PeopleList.length; index++) {
      PersonList.push(
        <ElementalButton
          selected={PeopleList[index].name === _try(() => person.props.stats.name)}
          key={index + "Person"}
          onClick={() => SetPerson(PeopleList[index](chapter))}
        >
          {PeopleList[index].name}
        </ElementalButton>
      );
    }
    PersonList.unshift(
      <input
        value={chapter}
        onChange={HandleChange}
        key={"input person"}
        type="number"
      ></input>
    );
    SetPersonButtons(PersonList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapter, person]); // The person tag is only for the red highlight.

  return (
    <Wrap>
      <div>
        <h4>A generic player will have:</h4>
        <ul>
          <li>1 clearing skill</li>
          <li>1 single target skill</li>
          <li>1/2 movement skill(s)</li>
          <li>1 main defensive skill</li>
          <li>other defensive skills</li>
          <li>Auras/Stances</li>
          <li>Passive skills</li>
          <li>Utility skills</li>
          <li>Skills that link to the main skills in the tree, e.g. when summoning plant monsters you need to be able to germinate, grow and harvest seeds.</li>
        </ul>
        <div>
          With that in mind, the starting three classes:
          Fighter:
          Attacks:
          Headbutt - No weapon route
          impalement - Stabbing
          Heavy blow - bashing
          Sharp slash - slashing
          [These are the basic weapon skills, fighters know them from the start and can learn more advanced moves.]
          Mage:
          Attacks:
          Mana-strike - Above
          Mana-ball - Ranged Aoe
          Mana-Missile - Ranged Single
          Mana-burst - close
          Rouge:
          All skills come from the beast souls.
          Basic pre-soul skills include:
          Trap Beast
          Absorb Beast Soul
          Hop
          Fleet of Foot
          + Passives
          + Weapon basic [and only basic] skills learned through using the weapon.
        </div>
        <div>Pre-Dao, Dao-era, Immortal-era, (Huge beats, men struggling, the island is cleansed of men), (Foundation of empires in the east and this continent is invaded by the humans for the first time since the immortals), (Men overcome beasts and empires start here and in the east the religious wars start), Pyramid (Kʼawiil) Empires of men, Pocotcotcan (The one empire), Witch (Rebellion), Now.
          Pre-Dao, Dao, Immortal, Dark-Age, (Dawn Age) Great Migration, Warning Kingdoms Period, Pyramid (The One Kingdom), Pocotcotcan Empire, Witch, Now.</div>
        <div>
          ### Tiers / Ranks:

          Junk (Grey) / Common(Light grey) / Basic (Blue) / intermediate(Light blue)/ Advanced(Cyan) / Rare (Green) / Epic (Red) / Legendary (Orange) / Unique (Purple) / God (Gold)

          Basic, Intermediate, Advanced.

          The classes and species could be catabolized into tiers [1, 2, 3] or ranks [bronze, silver, gold], [junk, common, normal, intermediate, advanced rare, elite, epic, legendary, unique]

          E D C B A S

          team bonus for fighter/rogue/mage

          <li>Classes/Species</li>
          Blue - 0 - 50 +2, 51 - 100 + 3
          Green - 0 - 50 + 3, 51 - 100 +2
          Red - 0-50 +3, 51 - 100 +3
          Orange - 0-50 + 4, 51 - 100 +3
        </div>
        <div>

          ### Parties & Raids
          Half party / Light party = 4
          Party / Full party = 8
          Full Raid or Alliance = 3 parties or 24 players
          After that you can do the Army size of 50, 100 +
        </div>
        <div>
          ### Stats:
          <li>Vitality</li> Increases the recovery rate of HP. Total HP. Basic resistances.
          <li>Endurance</li> Increases resistance to physical damage, reduces physical damage taken (%), increases stamina.
          <li>Willpower</li> Increases resistance to magic, reduces magic damage taken (%), resistance to mental attacks. [spell duration (efficiency? Duration max?)]

          <li>Magic</li> increases Magical Attack Power and maximum MP and recovery rate.
          <li>Strength</li> Increased Physical Attack Power and the weight behind each attack. Minor: Increased storage capacity. Reduce damage taken during a successful block. Increased resistance to falling. Increased movement speed.

          <li>Dexterity (Reflexes)</li>Increases Attack Speed, dodge change, movement on rough terrain. Reduces skills cool down.

          <li>Sense</li> Range of attacks, accuracy. Trap Detect (All of the senses, hearing, taste, touch, smell.) Seeing through smoke screens and illusions. Seeing weakness and injuries in your opponent (CRIT), Range of summons / familia can move from you.

          <li>Charisma</li> Increases NPC likability, command points
        </div>
        <div>
          ### Levels:

          Human body: Stats 0 - 10, 5 is normal and 10 is the best a human can get. (This is without mana.)

          0 - Basic mana spells unlocked, mana flow, cap raised to 1.
          10 - Picked first element, Mix first element with basic mana spells, Cap Raised to 2
          20 - Extra Stat points, Cap Raised to 3
          30 - Extra Stat points, Intermediate Spells, Cap Raised to 4
          40 - Extra Stat points, Cap Raised to 5
          50 - Unlock familia, Cap Raised to 6
          60 - Extra Stat points, Cap Raised to 7
          70 - Picked 2nd element, Cap Raised to 8
          80 - Extra Stat points, Advanced spells, Cap Raised to 9
          90 - Extra Stat points, Cap Raised to 10
          100 - Class Advancement, Increase other properties of skills +3 times

        </div>
      </div>
      <h4>Types of stuff:</h4>
      <p>
        Mages rely on Elements for versatility. Rouges, beast souls. Fighters, Jobs.
      </p>
      <ChoiceButtonWrap>{elementalsArray}</ChoiceButtonWrap>
      <ChoiceButtonWrap>{classesArray}</ChoiceButtonWrap>
      <ChoiceButtonWrap>{speciesArray}</ChoiceButtonWrap>
      <ChoiceButtonWrap>{placesArray}</ChoiceButtonWrap>
      <Spells spells={shownSpells} type={"mage"} />
      {chosenClass ? <BeastPage name={chosenClass} /> : <div />}
      <div style={{ margin: "10px 0px" }} />
      {chosenSpecies ? <BeastPage name={chosenSpecies} /> : <div />}
      <div style={{ marginBottom: "50px" }} />
      {chosenPlace ? <PlacePage name={chosenPlace} /> : <div />}
      <div style={{ marginBottom: "50px" }} />
      <ChoiceButtonWrap>{personButtons}</ChoiceButtonWrap>
      {person}
    </Wrap>
  );
}
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const ChoiceButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const ElementalButton = styled.button`
  width: fit-content;
  padding: 2px;
  background: ${(props) => (props.color ? props.color : "")};
  ${(props) => (props.selected ? "border: solid red" : "")};
`;

function BreakArray(array) {
  const NewArray = []
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (index === array.length - 1) {
      NewArray.push(element)
    } else {
      NewArray.push(element + ', ')
    }
  }
  return (
    <div>
      {NewArray}
    </div>
  )
}

export default function Vampire() {
  // All actions that would reveal the vampire would either heal (HP) or gain them EXP or blood points to be used to improve their strength.
  // That way younger vampires are more likely to do these things then the older ones who don't need strength as badly.
  // Combined with the starving yourself (lower hp) increases you strength.

  // Weaknesses: Hunger level, Fire (element), Light (element), Silver (only lesser vampires), Sunlight. Strengths: Ice-resistance, Weapon Resistance, Create lesser species (Skill), life absorption (heal on hit? Skill?), fast regeneration (Normal HP regen + % of that. Not total HP %. So 100HP and regen 10HP/S a 10% increase is 11HP/S.).
  // Misc: Vampires can gain experience by trying new blood. And unlock a higher level of blood skills.
  const [treeSearch, setTreeSearch] = React.useState('');
  const [query, setQuery] = React.useState('Vampire'); // Succubus
  const [tree, setTree] = React.useState('');

  useEffect(() => {
    setTree(Tree(query));
  }, [query]);

  const updateTreeSearch = e => {
    setTreeSearch(e.target.value);
  }
  const getSearch = e => {
    e.preventDefault();
    setQuery(treeSearch);
    setTreeSearch('');
  }
  // Auto complete start

  const arr1 = Object.keys(spellList)
  const arr2 = Object.keys(racesList)
  const arr3 = Object.keys(classList)
  const countries = arr1.concat(arr2, arr3);
  function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false; }
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() === val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function (e) {
            /*insert the value for the autocomplete text field:*/
            inp.value = this.getElementsByTagName("input")[0].value;
            /*close the list of autocompleted values,
            (or any other open lists of autocompleted values:*/
            setTreeSearch(inp.value)
            setQuery(inp.value)
            closeAllLists();
          });
          a.appendChild(b);
        }
      }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode === 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode === 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode === 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt !== x[i] && elmnt !== inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
      closeAllLists(e.target);
    });
  }
  useEffect(() => {
    autocomplete(document.getElementById("myInput"), countries);
  }, []);
  // Auto complete end
  return (
    <div>
      <Hover word={"Vampire"} />
      <Hover word={"Training Health Potion"} />
      <Hover word={"mana ball"} />
      <Hover word={"Knight"} />
      <Hover word={"Charia"} />
      <Hover word={"Lith eru"} />
      <Hover word={"Alden"} />
      <Hover word={"Steinauhau"} />

      <h1>Species / Class / Spell Search</h1>
      <form onSubmit={getSearch} className="search-form">
        <div class="autocomplete">
          <div style={{ "display": "flex" }}>
            <input id="myInput" className="search-bar" type="text" value={treeSearch} onChange={updateTreeSearch} name="myCountry" placeholder="Vampire" />
            {/* <button className="search-button" type="submit">
          Search
        </button> */}
          </div>
        </div>
      </form>
      <div>{tree}</div>
      <SpellFinder />
      <SchoolSchedule />
      <h4>Clubs</h4>
      {BreakArray(Object.keys(SchoolClubs))}
      <h4>Lesson Options</h4>
      {BreakArray(Object.keys(LessonOptions))}
      <h4>Magic Types</h4>
      {BreakArray(ListOfMagicTypes)}
      {/* 
      https://my-vampire-system.fandom.com/wiki/Quinn_Talen/Abilities
      */}
      <h1>Vampire Ranks</h1>
      <SubTitle>Vampires</SubTitle>
      <ul>
        <li><Hover word={"Vampire Noble"} /></li>
        <li><Hover word={"Vampire Knight"} /></li>
        <li><Hover word={"Dhampir"} /></li>
        <li><Hover word={"Vampire Halfling"} /></li>
        <li><Hover word={"Vampire"} /></li>
        <li><Hover word={"Vampire Fledgling"} /></li>
        <li><Hover word={"Blooded Vampire"} /></li>
        <li><Hover word={"Vampire Nightstalker"} /></li>
        <li><Hover word={"Vampire Lord"} /></li>
        <li><Hover word={"Vampire Progenitor"} /></li>
        <li><Hover word={"Vampire Princess"} /></li>
        <li><Hover word={"Vampire Prince"} /></li>
        <li><Hover word={"Vampire Bride"} /></li>
      </ul>
      <SubTitle>Sub-classes</SubTitle>
      <ul>
        <li><Hover word={"Ghoul"} /></li>
        <li><Hover word={"Wight"} /></li>
        <li><Hover word={"Blood Fairy"} /></li>
        <li><Hover word={"Strigoi"} /></li>
        <li><Hover word={"Hannya"} /></li>
        <li><Hover word={"Draugr"} /></li>
        <li><Hover word={"Banshee"} /></li>
        <li><Hover word={"vampiric beasts"} /></li>
        <li><Hover word={"Thrall"} /></li>
        <li><Hover word={"Lurker"} /></li>
      </ul>
    </div>
  );
}
// Nahual - eagle warriors
const SubTitle = styled.h4`
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  color: red;
  text-decoration: underline;
`;

export function SchoolSchedule() {
  // Add maths, Aldenese, foreign language, 
  return (
    <ScheduleWrapper>
      <ScheduleDay>
        {/* Times */}
        <DayTitle>
          <h4>Times</h4>
        </DayTitle>
        <Block style={{ gridRow: "time-0800" }}>
          <p>8:00 - 9:00</p>
        </Block>
        <Block style={{ gridRow: "time-0900" }}>
          <p>9:00 - 10:00</p>
        </Block>
        <Block style={{ gridRow: "time-1000" }}>
          <p>10:00 - 11:00</p>
        </Block>
        <Block style={{ gridRow: "time-1100" }}>
          <p>11:00 - 12:00</p>
        </Block>
        <Block style={{ gridRow: "time-1200" }}>
          <p>12:00 - 13:00</p>
        </Block>
        <Block style={{ gridRow: "time-1300" }}>
          <p>13:00 - 14:00</p>
        </Block>
        <Block style={{ gridRow: "time-1400" }}>
          <p>14:00 - 15:00</p>
        </Block>
        <Block style={{ gridRow: "time-1500" }}>
          <p>15:00 - 16:00</p>
        </Block>
        <Block style={{ gridRow: "time-1600" }}>
          <p>16:00 - 17:00</p>
        </Block>
        {/* Day 1 */}
        <DayTitle style={{ gridColumn: "track-1" }}>
          <h4>Day 1</h4>
        </DayTitle>
        <Block
          style={{
            gridColumn: "track-1",
            gridRow: "time-0800",
            background: colors.purple.normal,
          }}
        >
          <p>Basics of being a mage</p>
          <span>Classroom</span>
          <span>Lubin</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-1",
            gridRow: "time-0900",
            background: colors.yellow.electric,
          }}
        >
          <p>Elemental class - Lightning</p>
          <span>Classroom</span>
          <span>Edgar</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-1",
            gridRow: "time-1000",
            background: colors.grey.light,
          }}
        >
          <p>Practice Period</p>
        </Block>
        <Block
          style={{
            gridColumn: "track-1",
            gridRow: "time-1100",
            background: colors.red.normal,
          }}
        >
          <p>Dueling</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-1",
            gridRow: "time-1200",
            background: colors.grey.light,
          }}
        >
          <p>Lunch</p>
        </Block>
        <Block
          style={{
            gridColumn: "track-1",
            gridRow: "time-1300",
            background: colors.grey.lighter,
          }}
        >
          <p>Battle tactics & formations</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-1",
            gridRow: "time-1400",
            background: colors.grey.lighter,
          }}
        >
          <p>Battle tactics & formations</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-1",
            gridRow: "time-1500",
            background: colors.green.normal,
          }}
        >
          <p>Option 1 - Farming</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-1",
            gridRow: "time-1600",
            background: colors.pink.PalePink,
          }}
        >
          <p>Option 2 - Beast Study Club</p>
          <span>???</span>
          <span>???</span>
        </Block>
        {/* Day 2 */}
        <DayTitle style={{ gridColumn: "track-2" }}>
          <h4>Day 2</h4>
        </DayTitle>
        <Block
          style={{
            gridColumn: "track-2",
            gridRow: "time-0800",
            background: colors.grey.light,
          }}
        >
          <p>Physical Fitness</p>
          <span>Exercise Field</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-2",
            gridRow: "time-0900",
            background: colors.grey.light,
          }}
        >
          <p>Practice Period</p>
        </Block>
        <Block
          style={{
            gridColumn: "track-2",
            gridRow: "time-1000",
            background: colors.yellow.electric,
          }}
        >
          <p>Elemental class - Lightning</p>
          <span>Classroom</span>
          <span>Edgar</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-2",
            gridRow: "time-1100",
            background: colors.yellow.electric,
          }}
        >
          <p>Elemental class - Lightning</p>
          <span>Classroom</span>
          <span>Edgar</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-2",
            gridRow: "time-1200",
            background: colors.grey.light,
          }}
        >
          <p>Lunch</p>
        </Block>
        <Block
          style={{
            gridColumn: "track-2",
            gridRow: "time-1300",
            background: colors.grey.light,
          }}
        >
          <p>Beast Studies</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-2",
            gridRow: "time-1400",
            background: colors.grey.light,
          }}
        >
          <p>Finance & Math</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-2",
            gridRow: "time-1500",
            background: colors.pink.PalePink,
          }}
        >
          <p>Option 2 - Beast Study Club</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-2",
            gridRow: "time-1600",
            background: colors.pink.PalePink,
          }}
        >
          <p>Option 2 - Beast Study Club</p>
          <span>???</span>
          <span>???</span>
        </Block>
        {/* Day 3 */}
        <DayTitle style={{ gridColumn: "track-3" }}>
          <h4>Day 3</h4>
        </DayTitle>
        <Block
          style={{
            gridColumn: "track-3",
            gridRow: "time-0800",
            background: colors.purple.normal,
          }}
        >
          <p>Basics of being a mage</p>
          <span>Classroom</span>
          <span>Lubin</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-3",
            gridRow: "time-0900",
            background: colors.grey.light,
          }}
        >
          <p>Aldenese</p>
          <span>Classroom</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-3",
            gridRow: "time-1000",
            background: colors.grey.light,
          }}
        >
          <p>Health</p>
          {/* Diseases, first aid, sexual health, human body, other (humanoid) species */}
          <span>Classroom</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-3",
            gridRow: "time-1100",
            background: colors.red.normal,
          }}
        >
          <p>Dueling</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-3",
            gridRow: "time-1200",
            background: colors.grey.light,
          }}
        >
          <p>Lunch</p>
        </Block>
        <Block
          style={{
            gridColumn: "track-3",
            gridRow: "time-1300",
            background: colors.grey.light,
          }}
        >
          <p>Foreign language</p>
          <span>Classroom</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-3",
            gridRow: "time-1400",
            background: colors.grey.light,
          }}
        >
          <p>Foreign language</p>
          <span>Classroom</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-3",
            gridRow: "time-1500",
            background: colors.grey.lighter,
          }}
        >
          <p>Navigating & Tracking</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-3",
            gridRow: "time-1600",
            background: colors.grey.lighter,
          }}
        >
          <p>Navigating & Tracking</p>
          <span>???</span>
          <span>???</span>
        </Block>
        {/* Day 4 */}
        <DayTitle style={{ gridColumn: "track-4" }}>
          <h4>Day 4</h4>
        </DayTitle>
        <Block
          style={{
            gridColumn: "track-4",
            gridRow: "time-0800",
            background: colors.yellow.electric,
          }}
        >
          <p>Elemental class - Lightning</p>
          <span>Classroom</span>
          <span>Edgar</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-4",
            gridRow: "time-0900",
            background: colors.grey.light,
          }}
        >
          <p>Foreign language</p>
          <span>Classroom</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-4",
            gridRow: "time-1000",
            background: colors.grey.light,
          }}
        >
          <p>Daily magic, basic skills.</p>
          {/* sewing, washing, fire-making, all with and without magic */}
          <span>Classroom</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-4",
            gridRow: "time-1100",
            background: colors.grey.light,
          }}
        >
          <p>Daily magic, basic skills.</p>
          {/* sewing, washing, fire-making, all with and without magic */}
          <span>Classroom</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-4",
            gridRow: "time-1200",
            background: colors.grey.light,
          }}
        >
          <p>Lunch</p>
        </Block>
        <Block
          style={{
            gridColumn: "track-4",
            gridRow: "time-1300",
            background: colors.pink.PalePink,
          }}
        >
          <p>Option 2 - Beast Study Club</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-4",
            gridRow: "time-1400",
            background: colors.pink.PalePink,
          }}
        >
          <p>Option 2 - Beast Study Club</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-4",
            gridRow: "time-1500",
            background: colors.grey.light,
          }}
        >
          <p>Beast Studies</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-4",
            gridRow: "time-1600",
            background: colors.grey.light,
          }}
        >
          <p>Beast Studies</p>
          <span>???</span>
          <span>???</span>
        </Block>
        {/* Day 5 */}
        <DayTitle style={{ gridColumn: "track-5" }}>
          <h4>Day 5</h4>
        </DayTitle>
        <Block
          style={{
            gridColumn: "track-5",
            gridRow: "time-0800",
            background: colors.purple.normal,
          }}
        >
          <p>Basics of being a mage</p>
          <span>Classroom</span>
          <span>Lubin</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-5",
            gridRow: "time-0900",
            background: colors.grey.light,
          }}
        >
          <p>Physical Fitness</p>
          <span>Exercise Field</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-5",
            gridRow: "time-1000",
            background: colors.grey.light,
          }}
        >
          <p>Practice Period</p>
        </Block>
        <Block
          style={{
            gridColumn: "track-5",
            gridRow: "time-1100",
            background: colors.grey.light,
          }}
        >
          <p>Cooking</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-5",
            gridRow: "time-1200",
            background: colors.grey.light,
          }}
        >
          <p>Lunch</p>
        </Block>
        <Block
          style={{
            gridColumn: "track-5",
            gridRow: "time-1300",
            background: colors.grey.light,
          }}
        >
          <p>TBD</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-5",
            gridRow: "time-1400",
            background: colors.grey.light,
          }}
        >
          <p>TBD</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-5",
            gridRow: "time-1500",
            background: colors.grey.light,
          }}
        >
          <p>History</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-5",
            gridRow: "time-1600",
            background: colors.green.normal,
          }}
        >
          <p>Option 1 - Farming</p>
          <span>???</span>
          <span>???</span>
        </Block>
        {/* Day 6 */}
        <DayTitle style={{ gridColumn: "track-6" }}>
          <h4>Day 6</h4>
        </DayTitle>
        <Block
          style={{
            gridColumn: "track-6",
            gridRow: "time-0800",
            background: colors.grey.light,
          }}
        >
          <p>Aldenese</p>
          <span>Classroom</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-6",
            gridRow: "time-0900",
            background: colors.grey.light,
          }}
        >
          <p>Foreign language</p>
          <span>Classroom</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-6",
            gridRow: "time-1000",
            background: colors.grey.light,
          }}
        >
          <p>Health</p>
          {/* Diseases, first aid, sexual health, human body, other (humanoid) species */}
          <span>Classroom</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-6",
            gridRow: "time-1100",
            background: colors.red.normal,
          }}
        >
          <p>Dueling</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-6",
            gridRow: "time-1200",
            background: colors.grey.light,
          }}
        >
          <p>Lunch</p>
        </Block>
        <Block
          style={{
            gridColumn: "track-6",
            gridRow: "time-1300",
            background: colors.grey.light,
          }}
        >
          <p>Practice Period</p>
        </Block>
        <Block
          style={{
            gridColumn: "track-6",
            gridRow: "time-1400",
            background: colors.pink.PalePink,
          }}
        >
          <p>Option 2 - Beast Study Club</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-6",
            gridRow: "time-1500",
            background: colors.green.normal,
          }}
        >
          <p>Option 1 - Farming</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-6",
            gridRow: "time-1600",
            background: colors.green.normal,
          }}
        >
          <p>Option 1 - Farming</p>
          <span>???</span>
          <span>???</span>
        </Block>
        {/* Day 7 */}
        <DayTitle style={{ gridColumn: "track-7" }}>
          <h4>Day 7</h4>
        </DayTitle>
        <Block
          style={{
            gridColumn: "track-7",
            gridRow: "time-0800",
            background: colors.purple.normal,
          }}
        >
          <p>Basics of being a mage</p>
          <span>Classroom</span>
          <span>Lubin</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-7",
            gridRow: "time-0900",
            background: colors.grey.lighter,
          }}
        >
          <p>The role of DPS</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-7",
            gridRow: "time-1000",
            background: colors.grey.light,
          }}
        >
          <p>Beast Studies</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-7",
            gridRow: "time-1100",
            background: colors.grey.light,
          }}
        >
          <p>Relationships and citizenship</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-7",
            gridRow: "time-1200",
            background: colors.grey.light,
          }}
        >
          <p>Lunch</p>
        </Block>
        <Block
          style={{
            gridColumn: "track-7",
            gridRow: "time-1300",
            background: colors.grey.light,
          }}
        >
          <p>Practice Period</p>
        </Block>
        <Block
          style={{
            gridColumn: "track-7",
            gridRow: "time-1400",
            background: colors.red.normal,
          }}
        >
          <p>Team work - Dungeons</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-7",
            gridRow: "time-1500",
            background: colors.red.normal,
          }}
        >
          <p>Team work - Dungeons</p>
          <span>???</span>
          <span>???</span>
        </Block>{" "}
        <Block
          style={{
            gridColumn: "track-7",
            gridRow: "time-1600",
            background: colors.red.normal,
          }}
        >
          <p>Team work - Dungeons</p>
          <span>???</span>
          <span>???</span>
        </Block>
      </ScheduleDay>
    </ScheduleWrapper>
  );
}

export const SchoolClubs = {
  "Enchanting Club": {
    notes: "",
  },
  "Dueling Club": {
    notes: "",
  },
  "Dungeoneering Club": {
    notes: "",
  },
  "Archaeology Club": {
    notes: "",
  },
  "Construction Club": {
    notes: "",
  },
  "Cooking Club": {
    notes: "",
  },
  "Crafting Club": {
    notes: "",
  },
  "Divination Club": {
    notes: "",
  },
  "Fishing Club": {
    notes: "",
  },
  "Archery Club": {
    notes: "",
  },
  "Hunting Club": {
    notes: "",
  },
  "Potions Club": {
    notes: "",
  },
  "Charms Club": {
    notes: "",
  },
  "Alteration Club": {
    notes: "",
  },
  "Mysticism Club": {
    notes: "",
  },
  "Necromancy Club": {
    notes: "",
  },
  "Conjuration Club": {
    notes: "",
  },
  "Restoration Club": {
    notes: "",
  },
  "Illusion Club": {
    notes: "",
  },
  "Ancient magic Club": {
    notes: "",
  },
  "Love magic Club": {
    notes: "",
  },
  "Astronomy Club": {
    notes: "",
  },
  "Mental magic Club": {
    notes: "",
  },
  "Flying Club": {
    notes: "",
  },
  "Ancient Runes Club": {
    notes: "",
  },
  "Transfiguration Club": {
    notes: "",
  },
  "Household magic Club": {
    notes: "",
  },
  "Farming Club": {
    notes: "Weather magic, Botany, Herbalism, Beast magic, Magizoology",
  },
  "Reading Club": {
    notes: "",
  },
  "Foreign Language Club": {
    notes: "",
  },
  "Improv Club": {
    notes: "",
  },
  "Acting Club": {
    notes: "",
  },
  "Writing Club": {
    notes: "",
  },
  "Dancing Club": {
    notes: "",
  },
  "Pottery Club": {
    notes: "",
  },
};
// Lessons are run by the academy and teachers, Clubs are student run.
export const LessonOptions = {
  Aviation: {
    notes: "",
  },
  Transfiguration: {
    notes: "",
  },
  "Household Magic": {
    notes: "",
  },
  Enchanting: {
    notes: "",
  },
  Thaumodynamics: {
    notes: "Theoretical  and the Laws of Conservation of Magic.",
  },
  "Summoning Realms": {
    notes: "Topologies of Summoning Circles.",
  },
  "Arcane Ethics": {
    notes: "",
  },
  Biology: {
    notes: "Biology of Humans.",
  },
  Physics: {
    notes: "",
  },
  Chemistry: {
    notes: "",
  },
  Geology: {
    notes: "",
  },
  Botany: {
    notes: "",
  },
  Zoology: {
    notes: "",
  },
  "Magic Theory": {
    notes:
      "Understanding of magic particles and how their interaction with electromagnetic radiation, and the composition of spells.",
  },
  "Quantum Physics": {
    notes:
      "Understanding the function of subatomic particles, with an emphasis on magical particles.",
  },
  "Faux Physics": {
    notes: "Interaction of magical particles and naturally occuring energy",
  },
  "Faux Chemistry": {
    notes: "Interaction of magical particles and naturally occuring matter",
  },
  Potions: {
    notes: "",
  },
  Alchemy: {
    notes:
      "This course covers the distillation of magical ingredients into components to create draughts that produce the desired effects. A hands-on course that will be evaluated based on the efficacy of your potion.",
  },
  Crafting: {
    notes:
      "A hands-on class in the artificery lab where students will explore the magical properties of various metals, crystals, and other components, and create unique magical artifacts to (hopefully!) achieve the desired effect. Includes recent advances in technomancy and the interference of mundane technology with magical energies.",
  },
  Cryptozoology: {
    notes:
      "a study into the unique magical creatures and their preferred habitats as well as the unique properties of magical creatures and their unusual adaptations.",
  },
  "Divination & Arithmancy": {
    notes:
      "A study of sensory perception through various types of divination such as palmistry, phrenology, astrology, tarot, using a scrying orb, tea reading, geomancy, and dowsing. Also delves into the power of math and numbers to determine meaning and divine past and future events.",
  },
  "Ethics of the Arcane": {
    notes:
      "What types of magic are ‘good’ and what types are bad? Should werewolves or vampires be allowed to attend magic school? Students are introduced to the philosophies of magic and major ethical issues throughout Magimundi history. Includes case studies and debates of ethical conundrums involving magic and the politics behind its use.",
  },
  Healing: {
    notes:
      "A practical course in how to diagnose and treat magical maladies and mishaps. Includes spells for healing trauma, antidotes for curing poison, and an in-depth look at the potential for mundane medicine to be combined with magic.",
  },
  Herbology: {
    notes:
      "A study into both the ecology and properties of magical plants. Includes hands-on work with parabotanical specimens as well as plant identification, harvesting, care, distillation and theoretical work about the magical and medicinal properties.",
  },
  "Magical Combat & Defense": {
    notes:
      "this course focuses on physical training and offensive and defensive spellcasting to help wizards prevail against a variety of villains, monsters and cursed objects.",
  },
  "Rituals & Evocation": {
    notes:
      "The basics of creating a magic circle, opening and closing a ritual, and combining magical energies to protect, heal, summon, banish, and more.",
  },
  "Rune Lore": {
    notes:
      "A look at Futhark runes, bound runes and other runic languages. Explore what a rune is comprised of, inscribed upon, and inscribed with, and which runes to use for desired effects.",
  },
};
// There can be cross over lessons between branches. Healing and farming both use Herbalism.
// https://powerlisting.fandom.com/wiki/Magic#Types_of_Magic

const ScheduleWrapper = styled.div`
  display: flex;
  font-size: 0.7em;
  background-image: url("https://img.freepik.com/free-photo/crumpled-paper-background_1373-412.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 5px;

  color: black;
`;
const ScheduleDay = styled.div`
  overflow-x: scroll;
  display: grid;
  grid-template-rows: repeat(9, 1fr);
  display: grid;
  grid-gap: 1em;
  grid-template-rows:
    [tracks] auto
    [time-0800] 1fr
    [time-0900] 1fr
    [time-1000] 1fr
    [time-1100] 1fr
    [time-1200] 1fr
    [time-1300] 1fr
    [time-1400] 1fr
    [time-1500] 1fr
    [time-1600] 1fr;
    
    grid-template-columns:
    [times] 4em
    [track-1-start] 1fr
    [track-1-end track-2-start] 1fr
    [track-2-end track-3-start] 1fr
    [track-3-end track-4-start] 1fr
    [track-4-end track-5-start] 1fr
    [track-5-end track-6-start] 1fr
    [track-6-end track-7-start] 1fr
    [track-7-end];
}
`;
const Block = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid black;
`;
const DayTitle = styled.div`
  text-transform: capitalize;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export function BeastPage({ name }) {
  const [beast, setBeast] = useState({});
  useEffect(() => {
    if (name) {
      if (racesList[name]) {
        setBeast(racesList[name]);
      } else if (classList[name]) {
        setBeast(classList[name]);
      }
    }
  }, [name]);

  if (beast) {
    const Status = {
      level: beast.level || 0,
      vitality: _try(() => beast[beast.level].vitality, 0),
      strength: _try(() => beast[beast.level].strength, 0),
      endurance: _try(() => beast[beast.level].endurance, 0),
      magic: _try(() => beast[beast.level].magic, 0),
      willpower: _try(() => beast[beast.level].willpower, 0),
      dexterity: _try(() => beast[beast.level].dexterity, 0),
      sense: _try(() => beast[beast.level].sense, 0),
      charisma: _try(() => beast[beast.level].charisma, 0),
    };
    if (racesList[name]) {
      Status.species = beast.name ? beast.name : name;
    } else if (classList[name]) {
      Status.class = beast.name ? beast.name : name;
    }
    return (
      <BeastContainer
        r={Math.min(window.outerWidth / 600, window.outerHeight / 917)}
        width={window.outerWidth}
        height={window.outerHeight}
      >
        <Top>
          <Title color={monadColors[beast.tier]}>
            {_try(() => name, beast.name)}
          </Title>
          <Text>
            {_try(() => beast.description)}
            <br />
            {beast.self ? `Self: ${beast.self}` : ""}
            <br />
            {beast.team ? `Team: ${beast.team}` : ""}
          </Text>
        </Top>
        <Mid>
          <StatsContainer>
            <Stats
              hideSubTitles={true}
              hideH1={true}
              type={"description"}
              removeHPMP={true}
              stats={Status}
            />
          </StatsContainer>
          <BeastImage1
            onError={imageError}
            src={_try(() => beast.images[0], `https://source.unsplash.com/random?${name || beast.name}`)}
            alt="Screen-Shot"
          />
        </Mid>
        {/* <Bot
          r={Math.min(window.outerWidth / 600, window.outerHeight / 917)}
          width={window.outerWidth}
          height={window.outerHeight}
        >
          <BeastImage2
            onError={imageError}
            src={_try(() => beast.images[1], Empty)}
            alt="Screen-Shot"
          />
          {_try(() => beast.images[2], false) && <BeastImage2
            onError={imageError}
            src={_try(() => beast.images[2], Empty)}
            alt="Screen-Shot"
          />}
          {_try(() => beast.images[3], false) && <BeastImage2
            onError={imageError}
            src={_try(() => beast.images[3], Empty)}
            alt="Screen-Shot"
          />}
        </Bot> */}
      </BeastContainer>
    );
  } else {
    return <div />;
  }
}

export function PlacePage(place) {
  let data = placeList[place.name]
  let subNames = []
  // Same with cities
  const PossiblePlaces = Object.keys(placeList)
  for (let j = 0; j < PossiblePlaces.length; j++) {
    if (placeList[PossiblePlaces[j]].name === place.name) {
      data = placeList[PossiblePlaces[j]]
    } else if (placeList[PossiblePlaces[j]].countries && Object.keys(placeList[PossiblePlaces[j]].countries).includes(place.name)) {
      data = placeList[PossiblePlaces[j]].countries[place.name]
      if (placeList[PossiblePlaces[j]].countries[place.name].cities) {
        // adds city names to sub list
        const citiesData = Object.keys(placeList[PossiblePlaces[j]].countries[place.name].cities)
        citiesData.map(city => {
          subNames.push(city)
        })
      }
    } else if (placeList[PossiblePlaces[j]].countries) {
      const array = Object.keys(placeList[PossiblePlaces[j]].countries)
      for (let index = 0; index < array.length; index++) {
        if (placeList[PossiblePlaces[j]].countries[array[index]].cities) {
          const cityList = Object.keys(placeList[PossiblePlaces[j]].countries[array[index]].cities)
          if (cityList.includes(place.name)) {
            data = placeList[PossiblePlaces[j]].countries[array[index]].cities[place.name]
          }
        }
      }
    }
    if (placeList[PossiblePlaces[j]].name === place.name && placeList[PossiblePlaces[j]].countries) {
      // Adds countries to sub list
      const countriesData = Object.keys(placeList[PossiblePlaces[j]].countries)
      countriesData.map(country => {
        subNames.push(country)
      })
    }
  }
  // Render list automatically based on data keys.
  function printData(data) {
    const output = []
    const dataKeys = Object.keys(data)
    const dataValues = Object.values(data)
    for (let index = 0; index < dataKeys.length; index++) {
      // need to remove object values also.
      if (dataKeys[index] !== "unique unit" && typeof (dataValues[index]) !== 'object')
        // Screen output for countries
        output.push(<CountryTitles><div style={{ 'text-transform': 'capitalize', 'font-weight': 'bold' }}>{dataKeys[index] + ': '}</div><div>{dataValues[index]}</div></CountryTitles>)
    }
    return output
  }
  return (<CountryList>
    {data && printData(data)}
    {data && data["unique unit"] ? <BeastPage name={data["unique unit"][0]} /> : <div />}
  </CountryList>)
}

const BeastContainer = styled.div`
  background-image: url("https://img.freepik.com/free-photo/crumpled-paper-background_1373-412.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 10px;
  width: 600px;
  height: 917px;
  max-height: 90%;
  display: flex;
  flex-direction: column;
  // justify-content: flex-end;
  transform: translateY(${(props) => props.height / 20}px);
  zoom: ${(props) => props.r};
`;
const Title = styled.div`
  text-transform: capitalize;
  color: ${(props) => (props.color ? props.color : "black")};
  max-height: 30%;
  font-size: 42px;
`;
const Text = styled.div`
  color: black;
  margin: 0px 20px;
  max-height: 70%;
  overflow: auto;
  white-space: break-spaces;
`;
const StatsContainer = styled.div`
  color: black;
  overflow: auto;
`;
const BeastImage1 = styled.img`
  width: 300px;
  height: 90%;
  max-height: 42%;
`;
const BeastImage2 = styled.img`
  width: 100%;
  height: 100%;
`;
const Mid = styled.div`
  //  height: 337px;
  display: flex;
  justify-content: space-around;
  // max-height: 42%;
  height: -webkit-fill-available;
`;
const Top = styled.div`
  // height: 300px;
  // max-height: 30%;
`;
const Bot = styled.div`
  height: 280px;
  display: flex;
  align-items: flex-end;
  max-height: 28%;
  zoom: ${(props) => props.r};
`;
const CountryList = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const CountryTitles = styled.div`
align-self: baseline;
text-align: initial;
padding: 0 10px;
`