import styled from "styled-components";
import React from "react";
import { spellList } from "./spells";
import { racesList } from "./species";
import { classList } from "./classes";
import Spells from "./spells";
import { titlesList } from "./titles";
import Equipment from "./equipment";
import { monadColors } from "./colors";
import { _try, perc2color, roundDownToNearest10, RankColour } from "./util";
// Kʼawiil - Lightning, seeds, abundance, powerful one, fertility, serpent

const statList = {
  Example: {
    name: "Example",
    description: "Example",
    numeric: "Example",
    vague: "Example",
    major: "Example",
    minor: "Example",
  },
  HP: {
    name: "HP",
    description: "Total Max Health",
    numeric: "Example",
    vague: "Example",
    major: "Example",
    minor: "Example",
  },
  MP: {
    name: "MP",
    description: "Total Max Mana",
    numeric: "Example",
    vague: "Example",
    major: "Example",
    minor: "Example",
  },
  faith: {
    name: "Faith",
    description: "Amount of God given spells that can be cast per day.",
    numeric: "Example",
    vague: "Example",
    major: "Example",
    minor: "Example",
  },
  name: {
    name: "Name",
    description: "This is your name!",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  level: {
    name: "Level",
    description: "As your level increases you will become stronger!",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  class: {
    name: "Class",
    description: "This is your class.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  species: {
    name: "Species",
    description: "This is your species.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  skills: {
    name: "Skills.",
    description: "Total learnt skills.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  spells: {
    name: "Spells.",
    description: "Total learnt spells.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  titles: {
    name: "Vitality",
    description: "Total obtained titles.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  title: {
    name: "Vitality",
    description: "Currently equipped title.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  "skill points": {
    name: "Vitality",
    description: "This is the amount of unspent skill points you have.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  "spell points": {
    name: "Vitality",
    description: "This is the amount of unspent spell points you have.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  "stat points": {
    name: "Vitality",
    description: "This is the amount of unspent stat points you have.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  vitality: {
    name: "Vitality",
    description: "Increases your health points.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  strength: {
    name: "Vitality",
    description: "Increases your physical damage.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  endurance: {
    name: "Vitality",
    description: "Increases resistance to physical damage.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  magic: {
    name: "Vitality",
    description: "Increases Magic damage.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  willpower: {
    name: "Vitality",
    description: "Increases resistance to magic.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  dexterity: {
    name: "Vitality",
    description: "Reduces time between using skills.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  sense: {
    name: "Vitality",
    description: "Increases your range.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  charisma: {
    name: "Vitality",
    description: "Peoples first impressions of you are better.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  passives: {
    name: "Element",
    description: "Passive skills do not need to be activated.",
    numeric: "Passive skills do not need to be activated.",
    vague: "Passive skills do not need to be activated.",
    major: "Passive skills do not need to be activated.",
    minor: "Passive skills do not need to be activated.",
  },
  element: {
    name: "Element",
    description: "This is the element you can apply to your magic.",
    numeric: "Increases HP by 14.5 per point.",
    vague: "Increases your durability.",
    major: "Increased health points.",
    minor:
      "Increased resistance to hot, cold & natural poisons. Increased health & stamina regeneration also total stamina.",
  },
  rank: {
    name: "rank",
    description: "Power rank.",
    numeric: "",
    vague: "",
    major: "",
    minor: "",
  },
};

function Stats({
  stats,
  type,
  skills,
  showSkills,
  titles,
  equippedTitle,
  showTitles,
  items,
  showItems,
  removeHPMP,
  hideTitle,
  hideH1,
  hideSubTitles,
}) {
  const MiasmaLevel = _try(
    () => skills.conditions.filter((M) => M.name === "Miasma").pop().level,
    0
  );
  const array = [];
  const baseStats = { ...stats };
  if (MiasmaLevel) {
    baseStats.level = baseStats.level - baseStats.level * (MiasmaLevel / 100);
    baseStats.strength =
      baseStats.strength - baseStats.strength * (MiasmaLevel / 100);
    baseStats.vitality =
      baseStats.vitality - baseStats.vitality * (MiasmaLevel / 100);
    baseStats.magic = baseStats.magic - baseStats.magic * (MiasmaLevel / 100);
    baseStats.dexterity =
      baseStats.dexterity - baseStats.dexterity * (MiasmaLevel / 100);
    baseStats.sense = baseStats.sense - baseStats.sense * (MiasmaLevel / 100);
    baseStats.charisma =
      baseStats.charisma - baseStats.charisma * (MiasmaLevel / 100);
    baseStats.willpower =
      baseStats.willpower - baseStats.willpower * (MiasmaLevel / 100);
  }
  const HPList = [];
  const MPList = [];
  const multiplierList = [];
  let keys = Object.keys(baseStats);

  let RaceSpan = undefined;
  if (baseStats.species) {
    const InnateSkillsRace = _try(
      () => racesList[baseStats.species].InnateSkills,
      []
    );
    if (InnateSkillsRace.length > 0) {
      for (let index = 0; index < InnateSkillsRace.length; index++) {
        if(skills && skills[baseStats.species]) {
          skills[baseStats.species].unshift({
            name: InnateSkillsRace[index],
            level: _try(() => stats.level / 10 - MiasmaLevel / 10, 1),
          });
        }
      }
    }
    const raceStats = Object.keys(racesList[baseStats.species].stats);
    RaceSpan = _try(() => racesList[baseStats.species].team);
    if (RaceSpan) RaceSpan = "Team: " + RaceSpan;
    if (!RaceSpan) {
      RaceSpan = _try(() => racesList[baseStats.species].self);
      if (RaceSpan) RaceSpan = "Self: " + RaceSpan;
    }

    if (raceStats) {
      raceStats.map((raceStat) => {
        if (raceStat === "HP") {
          HPList.push(racesList[baseStats.species].stats[raceStat]);
        } else if (raceStat === "HPMultiplier") {
          multiplierList.push({
            HP: racesList[baseStats.species].stats[raceStat],
          });
        } else if (raceStat === "MPMultiplier") {
          multiplierList.push({
            MP: racesList[baseStats.species].stats[raceStat],
          });
        } else if (raceStat === "MP") {
          MPList.push(racesList[baseStats.species].stats[raceStat]);
        } else if (keys.includes(raceStat.slice(0, -10))) {
          multiplierList.push({
            [raceStat.slice(0, -10)]:
              racesList[baseStats.species].stats[raceStat],
          });
        } else if (
          typeof racesList[baseStats.species].stats[raceStat] === "number"
        ) {
          baseStats[raceStat] =
            (baseStats[raceStat] || 0) + racesList[baseStats.species].stats[raceStat];
        } else if (
          typeof racesList[baseStats.species].stats[raceStat] === "string"
        ) {
          if (racesList[baseStats.species].stats[raceStat].includes("*")) {
            const multiplierValue = parseFloat(
              racesList[baseStats.species].stats[raceStat].substring(1)
            );
            // baseStats[raceStat] = baseStats[raceStat] * multiplierValue;
            multiplierList.push({ [raceStat]: multiplierValue });
          }
        }
      });
    }
  }
  let ClassSpan = undefined;
  if (baseStats.class) {
    const InnateSkillsRace = _try(
      () => classList[baseStats.class].InnateSkills,
      []
    );
    if (InnateSkillsRace.length > 0) {
      for (let index = 0; index < InnateSkillsRace.length; index++) {
        if(skills) {
          skills[baseStats.class].unshift({
            name: InnateSkillsRace[index],
            level: _try(() => stats.level / 10 - MiasmaLevel / 10, 1),
          });
        }
      }
    }
    const classStats = _try(() => classList[baseStats.class].stats);
    ClassSpan = _try(() => classList[baseStats.class].team);
    if (ClassSpan) ClassSpan = "Team: " + ClassSpan;
    if (!ClassSpan) {
      ClassSpan = _try(() => classList[baseStats.class].self);
      if (ClassSpan) ClassSpan = "Self: " + ClassSpan;
    }
    if (classStats) {
      Object.keys(classStats).map((classStat) => {
        if (classStat === "HP") {
          HPList.push(classList[baseStats.class].stats[classStat]);
        } else if (classStat === "HPMultiplier") {
          multiplierList.push({
            HP: classList[baseStats.class].stats[classStat],
          });
        } else if (classStat === "MPMultiplier") {
          multiplierList.push({
            MP: classList[baseStats.class].stats[classStat],
          });
        } else if (classStat === "MP") {
          MPList.push(classList[baseStats.class].stats[classStat]);
        } else if (keys.includes(classStat.slice(0, -10))) {
          multiplierList.push({
            [classStat.slice(0, -10)]:
              classList[baseStats.class].stats[classStat],
          });
        } else if (
          typeof classList[baseStats.class].stats[classStat] === "number"
        ) {
          baseStats[classStat] =
            (baseStats[classStat] || 0) + classList[baseStats.class].stats[classStat];
        } else if (
          typeof classList[baseStats.class].stats[classStat] === "string"
        ) {
          if (classList[baseStats.class].stats[classStat].includes("*")) {
            const multiplierValue = parseFloat(
              classList[baseStats.class].stats[classStat].substring(1)
            );
            // baseStats[classStat] = baseStats[classStat] * multiplierValue;
            multiplierList.push({ [classStat]: multiplierValue });
          }
        }
      });
    }
  }
  const spellsArray = [];
  if (skills) {
    const skillsByTypes = Object.keys(skills);
    for (let j = 0; j < skillsByTypes.length; j++) {
      const skillListByType = skills[skillsByTypes[j]];
      skillListByType.map((skill) => {
        const spellStats = _try(
          () =>
            spellList[skill.name].stats[skill.level - 1] ||
            spellList[skill.name].stats[skill.level]
        );
        if (spellStats) {
          for (let index = 0; index < Object.keys(spellStats).length; index++) {
            if (keys.includes(Object.keys(spellStats)[index])) {
              if (
                typeof spellStats[Object.keys(spellStats)[index]] === "number"
              ) {
                baseStats[Object.keys(spellStats)[index]] =
                  (baseStats[Object.keys(spellStats)[index]] || 0) +
                  spellStats[Object.keys(spellStats)[index]];
              } else if (
                typeof spellStats[Object.keys(spellStats)[index]] === "string"
              ) {
                const multiplierValue = parseFloat(
                  spellStats[Object.keys(spellStats)[index]].substring(1)
                );
                // baseStats[Object.keys(spellStats)[index]] = baseStats[Object.keys(spellStats)[index]] * multiplierValue;
                multiplierList.push({
                  [Object.keys(spellStats)[index]]: multiplierValue,
                });
              }
            } else if (Object.keys(spellStats)[index] === "HPMultiplier") {
              multiplierList.push({
                HP: spellStats[Object.keys(spellStats)[index]],
              });
            } else if (Object.keys(spellStats)[index] === "MPMultiplier") {
              multiplierList.push({
                MP: spellStats[Object.keys(spellStats)[index]],
              });
            } else if (Object.keys(spellStats)[index] === "HP") {
              HPList.push(spellStats[Object.keys(spellStats)[index]]);
            } else if (Object.keys(spellStats)[index] === "MP") {
              MPList.push(spellStats[Object.keys(spellStats)[index]]);
            } else if (Object.keys(spellStats)[index]) {
              if (keys.includes(Object.keys(spellStats)[index].slice(0, -10))) {
                // baseStats[Object.keys(spellStats)[index].slice(0, -10)] =
                // baseStats[Object.keys(spellStats)[index].slice(0, -10)] *
                // spellStats[Object.keys(spellStats)[index]];
                multiplierList.push({
                  [Object.keys(spellStats)[index].slice(0, -10)]:
                    spellStats[Object.keys(spellStats)[index]],
                });
              } else {
                // Misc stats
                baseStats[Object.keys(spellStats)[index]] =
                (baseStats[Object.keys(spellStats)[index]] || 0) +
                spellStats[Object.keys(spellStats)[index]];
              }
            }
          }
        }
      });
      spellsArray.push(
        <Spells
          key={j + "Spells"}
          spells={skillListByType}
          type={skillsByTypes[j]}
        />
      );
    }
  }
  const itemsArray = [];
  const itemLevel = roundDownToNearest10(baseStats.level) / 10;
  if (items) {
    itemsArray.push(<Equipment level={itemLevel} items={items} key={"Items"} />);
    Object.keys(items).map((itemArea) => {
      const a = _try(() => items[itemArea][itemLevel].stats)
      const b = _try(() => items[itemArea].stats[itemLevel])
      const c = _try(() => items[itemArea].stats)
      const itemStats = a ? a : b ? b : c
      if (itemStats) {
        Object.keys(itemStats).map((itemStat) => {
          if (itemStat === "HP") {
            HPList.push(itemStats[itemStat]);
          } else if (itemStat === "HPMultiplier") {
            multiplierList.push({ HP: itemStats[itemStat] });
          } else if (itemStat === "MPMultiplier") {
            multiplierList.push({ MP: itemStats[itemStat] });
          } else if (itemStat === "MP") {
            MPList.push(itemStats[itemStat]);
          } else if (keys.includes(itemStat.slice(0, -10))) {
            // baseStats[itemStat.slice(0, -10)] = baseStats[itemStat.slice(0, -10)] * itemStats[itemStat];
            multiplierList.push({
              [itemStat.slice(0, -10)]: itemStats[itemStat],
            });
          } else if (typeof itemStats[itemStat] === "number") {
            baseStats[itemStat] = (baseStats[itemStat] || 0) + itemStats[itemStat];
          } else if (typeof itemStats[itemStat] === "string") {
            if (itemStats[itemStat].includes("*")) {
              const multiplierValue = parseFloat(
                itemStats[itemStat].substring(1)
              );
              // baseStats[itemStat] = baseStats[itemStat] * multiplierValue;
              multiplierList.push({ [itemStat]: multiplierValue });
            }
          }
        });
      }
    });
  }
  let TitleSpan = undefined;
  if (equippedTitle) {
    keys.splice(1, 0, "title");
    baseStats["title"] = _try(() => titlesList[equippedTitle].name)
      ? titlesList[equippedTitle].name
      : equippedTitle; // if it has a name use the name, else use what ever the user put in.
    const titleStats = _try(() => titlesList[equippedTitle].stats); // find title from list of titles, returns array of baseStats and values
    if (titleStats) {
      if (titlesList[equippedTitle].description) {
        TitleSpan = titlesList[equippedTitle].description;
        //   baseStats['title'] = equippedTitle + ', ' + titlesList[equippedTitle].description
      }
      Object.keys(titleStats).map((titleStat) => {
        if (titleStat === "HP") {
          HPList.push(titleStats[titleStat]);
        } else if (titleStat === "HPMultiplier") {
          multiplierList.push({ HP: titleStats[titleStat] });
        } else if (titleStat === "MPMultiplier") {
          multiplierList.push({ MP: titleStats[titleStat] });
        } else if (titleStat === "MP") {
          MPList.push(titleStats[titleStat]);
        } else if (keys.includes(titleStat.slice(0, -10))) {
          multiplierList.push({
            [titleStat.slice(0, -10)]: titleStats[titleStat],
          });
        } else if (typeof titleStats[titleStat] === "number") {
          baseStats[titleStat] = (baseStats[titleStat] || 0 ) + titleStats[titleStat]; // applies the baseStats
        } else if (typeof titleStats[titleStat] === "string") {
          if (titleStats[titleStat].includes("*")) {
            const multiplierValue = parseFloat(
              titleStats[titleStat].substring(1)
            );
            // baseStats[titleStat] = baseStats[titleStat] * multiplierValue;
            multiplierList.push({ [titleStat]: multiplierValue });
          }
        }
      });
    }
  }

  // Add HP and MP Values
  //  level *5 magic * 8 = mp // level * 10 vit * 14.5 +100 = hp
  // So at 100, 1100 ~ 2550
  baseStats["HP"] = _try(
    () => baseStats["level"] * 10 + baseStats["vitality"] * 14.5 + 100
  );
  let tempHP = baseStats["HP"];
  for (let index = 0; index < HPList.length; index++) {
    if (typeof HPList[index] === "number") {
      tempHP = tempHP + HPList[index];
    } else if (typeof HPList[index] === "string") {
      if (HPList[index].includes("*")) {
        const multiplierValue = parseFloat(HPList[index].substring(1));
        // tempHP = tempHP * multiplierValue;
        multiplierList.push({ HP: multiplierValue });
      }
    }
  }
  baseStats["HP"] = parseInt(tempHP);

  baseStats["MP"] = _try(() => baseStats["level"] * 5 + baseStats["magic"] * 8);
  let tempMP = baseStats["MP"];
  for (let index = 0; index < MPList.length; index++) {
    if (typeof MPList[index] === "number") {
      tempMP = tempMP + MPList[index];
    } else if (typeof MPList[index] === "string") {
      if (MPList[index].includes("*")) {
        const multiplierValue = parseFloat(MPList[index].substring(1));
        // tempMP = tempMP * multiplierValue;
        multiplierList.push({ MP: multiplierValue });
      }
    }
  }
  baseStats["MP"] = parseInt(tempMP);
  if (!removeHPMP) {
    keys.push("HP", "MP");
  }

  // multiplierList
  multiplierList.map((value) => {
    const statName = Object.keys(value);
    if (value[statName] < 0) {
      baseStats[statName] = baseStats[statName] * (1 - -value[statName]);
    } else {
      baseStats[statName] = baseStats[statName] * value[statName];
    }
  });
  if (baseStats["MP"] < 0) {
    baseStats["MP"] = 0;
  }
  if (baseStats["HP"] < 100) {
    baseStats["HP"] = 100;
  }

  for (let index = 0; index < keys.length; index++) {
    const element = (
      <Wrap>
        <Inline>{keys[index]}: </Inline>
        <Inline style={{ color: perc2color(baseStats[keys[index]]) }}>
          {typeof baseStats[keys[index]] === "number"
            ? parseInt(baseStats[keys[index]])
            : baseStats[keys[index]]}
        </Inline>
      </Wrap>
    );
    const spam = statList[keys[index]];
    if (keys[index] === "class" && ClassSpan) {
      const classElement = (
        <Wrap>
          <Inline>{keys[index]}: </Inline>
          <Inline
            style={{
              color: monadColors[classList[baseStats[keys[index]]].tier],
            }}
          >
            {typeof baseStats[keys[index]] === "number"
              ? parseInt(baseStats[keys[index]])
              : baseStats[keys[index]]}
          </Inline>
        </Wrap>
      );
      array.push(
        !hideSubTitles && (
          <SingleStat key={keys[index] + "stat"}>
            {classElement}
            {!!type && <Span>{ClassSpan}</Span>}
          </SingleStat>
        )
      );
    } else if (keys[index] === "species" && RaceSpan) {
      const speciesElement = (
        <Wrap>
          <Inline>{keys[index]}: </Inline>
          <Inline
            style={{
              color: monadColors[racesList[baseStats[keys[index]]].tier],
            }}
          >
            {typeof baseStats[keys[index]] === "number"
              ? parseInt(baseStats[keys[index]])
              : baseStats[keys[index]]}
          </Inline>
        </Wrap>
      );
      array.push(
        !hideSubTitles && (
          <SingleStat key={keys[index] + "stat"}>
            {speciesElement}
            {!!type && <Span>{RaceSpan}</Span>}
          </SingleStat>
        )
      );
    } else if (keys[index] === "title" && TitleSpan) {
      const titleElement = (
        <Wrap>
          <Inline>{keys[index]}: </Inline>
          <Inline
            style={{
              color: monadColors[titlesList[baseStats[keys[index]]].tier],
            }}
          >
            {typeof baseStats[keys[index]] === "number"
              ? parseInt(baseStats[keys[index]])
              : baseStats[keys[index]]}
          </Inline>
        </Wrap>
      );
      if (!hideTitle) {
        array.push(
          <SingleStat key={keys[index] + "stat"}>
            {titleElement}
            {!!type && <Span>{TitleSpan}</Span>}
          </SingleStat>
        );
      }
    } else if (keys[index] === "rank") {
      const rankElement = (
        <Wrap>
          <Inline>{keys[index]}: </Inline>
          <Inline style={{ color: RankColour(baseStats[keys[index]]) }}>
            {typeof baseStats[keys[index]] === "number"
              ? parseInt(baseStats[keys[index]])
              : baseStats[keys[index]]}
          </Inline>
        </Wrap>
      );
      array.push(
        <SingleStat key={keys[index] + "stat"}>
          {rankElement}
          {!!type && <Span>{_try(() => spam["description"], element)}</Span>}
        </SingleStat>
      );
    } else {
      array.push(
        <SingleStat key={keys[index] + "stat"}>
          {element}
          {!!type && <Span>{_try(() => spam["description"], element)}</Span>}
        </SingleStat>
      );
    }
  }
  // Misc
  const MiscKeys = Object.keys(baseStats).filter(val => !keys.includes(val))
  if(MiscKeys.length > 0) {

    array.push(
      <SingleStat key={"Misc stats"}>
        {<div>Miscellaneous Stats:</div>}
        {!!type && <Span>{_try(() => statList['Misc']["description"], <div>Below this entry are the miscellaneous stats.</div>)}</Span>}
      </SingleStat>
    );

    for (let index = 0; index < MiscKeys.length; index++) {
      const element = (
        <Wrap>
          <Inline>{MiscKeys[index]}: </Inline>
          <Inline style={{ color: perc2color(baseStats[MiscKeys[index]]) }}>
            {typeof baseStats[MiscKeys[index]] === "number"
              ? parseInt(baseStats[MiscKeys[index]])
              : baseStats[MiscKeys[index]]}
          </Inline>
        </Wrap>
      );
      const ClassOverwrite = classList[baseStats.class]?.stats[MiscKeys[index]] ? [` ${baseStats.class} : ${classList[baseStats.class].stats[MiscKeys[index]]}, `] : '';
      const SpeciesOverwrite = racesList[baseStats.species]?.stats[MiscKeys[index]] ? [` ${baseStats.species} : ${racesList[baseStats.species].stats[MiscKeys[index]]}, `] : '';

      const SkillsOverwrite = skills ? [].concat.apply([],Object.values(skills).map(item => {
        const TheObjectOfMiscStats = item.map(skill => {
          const  theStats = _try(() =>  spellList[skill.name][itemLevel].stats, spellList[skill.name].stats);
          const theValue = Array.isArray(theStats) ? _try(() => theStats[itemLevel-1][MiscKeys[index]]) : _try(() => theStats[itemLevel][MiscKeys[index]])      
          if(theValue > 0 && skill.name) {
            return ' ' + skill.name + ': ' + theValue;
          }
        })
        return TheObjectOfMiscStats
      })).filter(((a) => a !== undefined)) : '';

      const ItemOverwrite = items ? Object.values(items).map(item => {
        const theValue = _try(() => item.stats[MiscKeys[index]]);
        if(theValue > 0 && item.name) {
          return ' ' + item.name + ': ' + theValue;
        }
      }).filter(((a) => a !== undefined)) : '';
      // skills

      const spamOverwrite = ClassOverwrite + SpeciesOverwrite + SkillsOverwrite + ItemOverwrite

      const spam = statList[MiscKeys[index]];
        array.push(
          <SingleStat key={MiscKeys[index] + "stat"}>
            {element}
            {!!type && <Span>{_try(() => spam["description"], spamOverwrite.length > 0 ? spamOverwrite.slice(-2) === ', ' ? spamOverwrite.slice(0, -2) : spamOverwrite : element)}</Span>}
          </SingleStat>
        );
    }
  }

  return (
    <>
      {hideH1 ? <div /> : <Title>Attributes:</Title>}
      <StatsStyle>{array}</StatsStyle>
      {showSkills && spellsArray}
      {showItems && itemsArray}
    </>
  );
}
export default Stats;

const Wrap = styled.div``;

const Inline = styled.div`
  display: contents;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
`;

const StatsStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
`;

const Span = styled.span`
  visibility: hidden;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  width: auto;
  position: absolute;
  z-index: 2;
  margin-top: 7%;
`;

const SingleStat = styled.li`
  text-transform: capitalize;

  border-radius: 6px;
  padding: 1px;
  width: auto;
  display: flex;
  justify-content: center;
  &:hover {
    background-color: #f1f1f1;
  }
  &:hover ${Span} {
    visibility: visible;
  }
`;
