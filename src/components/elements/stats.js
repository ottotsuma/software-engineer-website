import styled from "styled-components";
import React from "react";
import { spellList } from "./spells";
import { racesList } from "./species";
import { classList } from "./classes";
import Spells from "./spells";
import { titlesList } from "./titles";
import Equipment from "./equipment";
import { monadColors } from "./colors";
import { _try, perc2color, roundDownToNearest10, RankColour, mergeObjects } from "./util";
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

function CalculateSpeciesStats({
  baseStats
}) {
  let SpeciesSpan = undefined;
  const FlatStats = {}
  const MultiplierStats = {}
  const InnateSkillsSpecies = _try(
    () => racesList[baseStats.species].InnateSkills,
    []
  );
  if (baseStats.species) {
    let keys = Object.keys(baseStats);
    const raceStats = Object.keys(racesList[baseStats.species]?.stats || {});
    SpeciesSpan = _try(() => racesList[baseStats.species].team);
    if (SpeciesSpan) SpeciesSpan = "Team: " + SpeciesSpan;
    if (!SpeciesSpan) {
      SpeciesSpan = _try(() => racesList[baseStats.species].self);
      if (SpeciesSpan) SpeciesSpan = "Self: " + SpeciesSpan;
    }
    // Sort the  stats into flat and multiplier 
    if (raceStats) {
      raceStats.forEach((raceStat) => {
        const statValue = racesList[baseStats.species].stats[raceStat];
        if (keys.includes(raceStat.slice(0, -10))) {
          // Handle other stats with multipliers
          const statKey = raceStat.slice(0, -10);
          MultiplierStats[statKey] = MultiplierStats[statKey] || 1;
          MultiplierStats[statKey] *= statValue;
        } else if (typeof statValue === "number") {
          // If it's a number, directly add it to baseStats
          FlatStats[raceStat] = (baseStats[raceStat] || 0) + statValue;
        } else if (typeof statValue === "string" && statValue.includes("*")) {
          // If it's a multiplier in string format (e.g., "*1.1"), parse and add to multipliers
          const multiplierValue = parseFloat(statValue.substring(1));
          MultiplierStats[raceStat] = MultiplierStats[raceStat] || 1;
          MultiplierStats[raceStat] *= multiplierValue;
        } else if (typeof statValue === "object") {
          MultiplierStats[raceStat] = MultiplierStats[raceStat] || 1;
          MultiplierStats[raceStat] *= statValue.multiplier;
          FlatStats[raceStat] = FlatStats[raceStat] || 0 + statValue.flat;
        } else {
          console.log('Missing Stat', raceStat, statValue, typeof statValue)
        }
      });
    }
  }
  const reply = {
    SpeciesInnateSkills: InnateSkillsSpecies,
    SpeciesFlatStats: FlatStats,
    SpeciesMultiplierStats: MultiplierStats,
    SpeciesSpan: SpeciesSpan
  }
  return reply
}
function getClassModifiers({ baseStats }) {
  let keys = Object.keys(baseStats);
  let classSpan = undefined;
  let ClassFlatStats = {};
  let ClassMultiplierStats = {};
  const InnateSkillsClass = _try(
    () => classList[baseStats.class].InnateSkills,
    []
  );
  if (baseStats.class) {
    const classStats = _try(() => classList[baseStats.class].stats);
    classSpan = _try(() => classList[baseStats.class].team);
    if (classSpan) {
      classSpan = "Team: " + classSpan;
    } else {
      classSpan = _try(() => classList[baseStats.class].self);
      if (classSpan) classSpan = "Self: " + classSpan;
    }

    if (classStats) {
      Object.entries(classStats).forEach(([classStat, statValue]) => {
        const statKey = classStat.slice(0, -10);

        if (keys.includes(statKey)) {
          // Handle other stats with multipliers
          ClassMultiplierStats[statKey] = (ClassMultiplierStats[statKey] || 1) * statValue;
        } else if (typeof statValue === "number") {

          // If it's a number, directly add it to baseStats
          ClassFlatStats[classStat] = (ClassFlatStats[classStat] || 0) + statValue;
        } else if (typeof statValue === "string" && statValue.includes("*")) {

          // If it's a multiplier in string format (e.g., "*1.1"), parse and add to multipliers
          const multiplierValue = parseFloat(statValue.substring(1));
          ClassMultiplierStats[classStat] = (ClassMultiplierStats[classStat] || 1) * multiplierValue;
        } else if (typeof statValue === "object") {

          // If it's an object, handle flat and multiplier separately
          ClassMultiplierStats[classStat] = (ClassMultiplierStats[classStat] || 1) * (statValue.multiplier || 1);
          ClassFlatStats[classStat] = (ClassFlatStats[classStat] || 0) + (statValue.flat || 0);
        } else {
          console.log("Missing Class Stat", classStat, statValue, typeof statValue);
        }
      });
    }

  }
  return {
    InnateSkillsClass,
    ClassFlatStats,
    ClassMultiplierStats,
    classSpan
  };
}
function getSkillStatsModifiers({ baseStats, skills }) {
  let keys = Object.keys(baseStats);
  const FlatStats = {};
  const MultiplierStats = {};

  if (skills) {
    const skillsByTypes = Object.keys(skills);

    skillsByTypes.forEach((skillType) => {
      const skillListByType = skills[skillType];

      skillListByType.forEach((skill) => {
        const spellStats = _try(
          () =>
            spellList[skill.name].stats[skill.level - 1] ||
            spellList[skill.name].stats[skill.level]
        );

        if (spellStats) {
          Object.keys(spellStats).forEach((statKey) => {
            const statValue = spellStats[statKey];
            if (keys.includes(statKey)) {
              if (typeof statValue === "number") {
                FlatStats[statKey] = (FlatStats[statKey] || 0) + statValue;
              } else if (typeof statValue === "string" && statValue.includes("*")) {
                // Handle multipliers in string format (e.g., "*1.1")
                const multiplierValue = parseFloat(statValue.substring(1));
                MultiplierStats[statKey] = (MultiplierStats[statKey] || 1) * multiplierValue;
              } else if (typeof statValue === "object") {
                MultiplierStats[statKey] = MultiplierStats[statKey] || 1;
                MultiplierStats[statKey] *= statValue.multiplier;
                FlatStats[statKey] = FlatStats[statKey] || 0 + statValue.flat;
              } else {
                console.log('escaped skill stat', statKey)
              }
            } else if (statKey) {
              if (keys.includes(statKey.slice(0, -10))) {
                // Handle stats with multipliers (e.g., stats ending with 'HP' or 'MP')
                MultiplierStats[statKey.slice(0, -10)] = (MultiplierStats[statKey.slice(0, -10)] || 1) * statValue;
              } else {
                // Misc stats, add to base stats
                FlatStats[statKey] = (FlatStats[statKey] || 0) + statValue;
              }
            }
          });
        }
      });
    });
  }

  return {
    SkillFlatStats: FlatStats,
    SkillMultiplierStats: MultiplierStats,
  };
}
function getItemStatsModifiers(items, baseStats) {
  const FlatStats = {};
  const MultiplierStats = {};

  if (items) {
    // Loop through each item area
    Object.keys(items).forEach((itemArea) => {
      const itemLevel = roundDownToNearest10(baseStats.level) / 10;
      const itemStats = _try(() => items[itemArea][itemLevel]?.stats)
        || _try(() => items[itemArea].stats[itemLevel])
        || _try(() => items[itemArea].stats);

      // If there are stats for the item, process them
      if (itemStats) {
        Object.keys(itemStats).forEach((itemStat) => {
          const statValue = itemStats[itemStat];

          if (typeof statValue === "object") {
            // Handle object-based stats (e.g., { multiplier, flat })
            MultiplierStats[itemStat] = (MultiplierStats[itemStat] || 1) * statValue.multiplier;
            FlatStats[itemStat] = (FlatStats[itemStat] || 0) + statValue.flat;
          } else if (typeof statValue === "number") {
            // Handle base stats
            FlatStats[itemStat] = (FlatStats[itemStat] || 0) + statValue;
          } else if (typeof statValue === "string" && statValue.includes("*")) {
            // Handle multiplier strings (e.g., "*1.5")
            const multiplierValue = parseFloat(statValue.substring(1));
            MultiplierStats[itemStat] = (MultiplierStats[itemStat] || 1) * multiplierValue;
          } else {
            console.log('Missing Item Stat', itemStat, statValue, typeof statValue);
          }
        });
      }
    });
  }

  return {
    ItemFlatStats: FlatStats,
    ItemMultiplierStats: MultiplierStats,
  };
}
function getTitleStatsModifiers(equippedTitle, baseStats) {
  let keys = Object.keys(baseStats);
  const FlatStats = {};
  const MultiplierStats = {};

  if (equippedTitle) {
    // Add "title" to the keys
    keys.splice(1, 0, "title");

    // Assign the title name or the equipped title itself if no name is found
    baseStats["title"] = _try(() => titlesList[equippedTitle].name)
      ? titlesList[equippedTitle].name
      : equippedTitle;

    // Fetch the stats of the equipped title
    const titleStats = _try(() => titlesList[equippedTitle].stats);

    if (titleStats) {
      // Iterate over the keys in titleStats
      Object.keys(titleStats).forEach((titleStat) => {
        const statValue = titleStats[titleStat];

        if (typeof statValue === "object") {
          // Handle object-based stats (e.g., { multiplier, flat })
          MultiplierStats[titleStat] = (MultiplierStats[titleStat] || 1) * statValue.multiplier;
          FlatStats[titleStat] = (FlatStats[titleStat] || 0) + statValue.flat;
        } else if (typeof statValue === "number") {
          // Handle base stats
          FlatStats[titleStat] = (FlatStats[titleStat] || 0) + statValue;
        } else if (typeof statValue === "string" && statValue.includes("*")) {
          // Handle multiplier strings (e.g., "*1.5")
          const multiplierValue = parseFloat(statValue.substring(1));
          MultiplierStats[titleStat] = (MultiplierStats[titleStat] || 1) * multiplierValue;
        } else {
          console.log('Missing Title Stat', titleStat, statValue, typeof statValue);
        }
      });
    }
  }

  return {
    TitleFlatStats: FlatStats,
    TitleMultiplierStats: MultiplierStats,
  };
}

function calculateFinalStats(baseStats, flatStats, multiplierStats) {
  const finalStats = {};
  const allKeys = new Set([
    ...Object.keys(baseStats),
    ...Object.keys(flatStats),
    ...Object.keys(multiplierStats)
  ]);

  allKeys.forEach(stat => {
    const baseValue = baseStats[stat] || 0;
    const flatValue = flatStats[stat] || 0;
    const multiplier = multiplierStats[stat] || 1; // Default multiplier is 1

    if (!isNaN(baseValue + flatValue)) {
      // Apply the formula: (Base + Flat) * Multiplier
      finalStats[stat] = (baseValue + flatValue) * multiplier;
    } else {
      // Preserve non-numeric values
      finalStats[stat] = baseValue || flatValue;
    }
  });
  return finalStats;
}

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
  hideSubTitles,
}) {
  const MiasmaLevel = _try(
    () => skills.conditions.filter((M) => M.name === "Miasma").pop().level,
    0
  );
  const array = [];
  const baseStats = { ...stats };
  if (MiasmaLevel) {
    const statsToReduce = ["level", "strength", "vitality", "magic", "dexterity", "sense", "charisma", "willpower"];
    statsToReduce.forEach(stat => {
      baseStats[stat] -= baseStats[stat] * (MiasmaLevel / 100);
    });
  }
  // Add HP and MP Values
  //  level *5 magic * 8 = mp // level * 10 vit * 14.5 +100 = hp
  // So at 100, 1100 ~ 2550

  let flatStats = {};
  let multiplierStats = {}
  let keys = Object.keys(baseStats);

  let RaceSpan = undefined;
  if (baseStats.species) {
    const { SpeciesInnateSkills, SpeciesFlatStats, SpeciesMultiplierStats, SpeciesSpan } = CalculateSpeciesStats({
      baseStats,
    });
    RaceSpan = SpeciesSpan
    flatStats = mergeObjects(flatStats, SpeciesFlatStats)
    multiplierStats = mergeObjects(multiplierStats, SpeciesMultiplierStats)

    if (SpeciesInnateSkills.length > 0) {
      for (let index = 0; index < SpeciesInnateSkills.length; index++) {
        if (skills && skills[baseStats.species]) {
          skills[baseStats.species].unshift({
            name: SpeciesInnateSkills[index],
            level: _try(() => stats.level / 10 - MiasmaLevel / 10, 1),
          });
        }
      }
    }
  }
  let ClassSpan = undefined;
  if (baseStats.class) {
    const { InnateSkillsClass, ClassFlatStats, ClassMultiplierStats, classSpan } = getClassModifiers({ baseStats })
    if (InnateSkillsClass.length > 0) {
      for (let index = 0; index < InnateSkillsClass.length; index++) {
        if (skills) {
          skills[baseStats.class].unshift({
            name: InnateSkillsClass[index],
            level: _try(() => stats.level / 10 - MiasmaLevel / 10, 1),
          });
        }
      }
    }
    ClassSpan = classSpan
    flatStats = mergeObjects(flatStats, ClassFlatStats)
    multiplierStats = mergeObjects(multiplierStats, ClassMultiplierStats)
  }
  const spellsArray = [];
  if (skills) {
    const { SkillFlatStats, SkillMultiplierStats } = getSkillStatsModifiers({ baseStats, skills })
    flatStats = mergeObjects(flatStats, SkillFlatStats)
    multiplierStats = mergeObjects(multiplierStats, SkillMultiplierStats)
    const skillsByTypes = Object.keys(skills);
    for (let j = 0; j < skillsByTypes.length; j++) {
      const skillListByType = skills[skillsByTypes[j]];
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
    const { ItemFlatStats, ItemMultiplierStats } = getItemStatsModifiers(
      items,
      baseStats
    );
    flatStats = mergeObjects(flatStats, ItemFlatStats)
    multiplierStats = mergeObjects(multiplierStats, ItemMultiplierStats)
  }
  let TitleSpan = undefined;
  if (equippedTitle) {
    const { TitleFlatStats, TitleMultiplierStats } = getTitleStatsModifiers(
      equippedTitle,
      baseStats
    );
    flatStats = mergeObjects(flatStats, TitleFlatStats)
    multiplierStats = mergeObjects(multiplierStats, TitleMultiplierStats)
  }

  // Calculate flat and multiplier stats using baseStats. 
  const finalStats = calculateFinalStats(baseStats, flatStats, multiplierStats)
  finalStats["HP"] = _try(
    () => (finalStats["HP"] || 0) + (finalStats["level"] * 10 + finalStats["vitality"] * 14.5 + 100)
  );
  finalStats["MP"] = _try(() => (finalStats["MP"] || 0) + (finalStats["level"] * 5 + finalStats["magic"] * 8));
  if (finalStats["MP"] < 0) {
    finalStats["MP"] = 0;
  }
  if (finalStats["HP"] < 100) {
    finalStats["HP"] = 100;
  }
  if (removeHPMP) {
    delete finalStats['HP']
    delete finalStats['MP']
  }
  console.log(baseStats, finalStats, 'Shaun Check Stats')
  for (let index = 0; index < keys.length; index++) {
    const element = (
      <Wrap>
        <Inline>{keys[index]}: </Inline>
        <Inline style={{ color: perc2color(finalStats[keys[index]]) }}>
          {typeof finalStats[keys[index]] === "number"
            ? parseInt(finalStats[keys[index]])
            : finalStats[keys[index]]}
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
      if (!hideTitle) { // shaun - title is showing when should be hidden.
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
  const MiscKeys = Object.keys(finalStats).filter(val => !keys.includes(val))
  if (MiscKeys.length > 0) {

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
          <Inline style={{ color: perc2color(finalStats[MiscKeys[index]]) }}>
            {typeof finalStats[MiscKeys[index]] === "number"
              ? parseInt(finalStats[MiscKeys[index]])
              : finalStats[MiscKeys[index]]}
          </Inline>
        </Wrap>
      );
      const ClassOverwrite = classList[baseStats.class]?.stats[MiscKeys[index]] ? [` ${baseStats.class} : ${classList[baseStats.class].stats[MiscKeys[index]]}, `] : '';
      const SpeciesOverwrite = racesList[baseStats.species]?.stats[MiscKeys[index]] ? [` ${baseStats.species} : ${racesList[baseStats.species].stats[MiscKeys[index]]}, `] : '';

      const SkillsOverwrite = skills ? [].concat.apply([], Object.values(skills).map(item => {
        const TheObjectOfMiscStats = item.map(skill => {
          const theStats = _try(() => spellList[skill.name][itemLevel].stats, spellList[skill.name].stats);
          const theValue = Array.isArray(theStats) ? _try(() => theStats[itemLevel - 1][MiscKeys[index]]) : _try(() => theStats[itemLevel][MiscKeys[index]])
          if (theValue > 0 && skill.name) {
            return ' ' + skill.name + ': ' + theValue;
          }
        })
        return TheObjectOfMiscStats
      })).filter(((a) => a !== undefined)) : '';

      const ItemOverwrite = items ? Object.values(items).map(item => {
        const theValue = _try(() => item.stats[MiscKeys[index]]);
        if (theValue > 0 && item.name) {
          return ' ' + item.name + ': ' + theValue;
        }
      }).filter(((a) => a !== undefined)) : '';
      // skills

      // title overwrite should be added if we want to use the title descriptions 
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
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <>
      <MagicButton onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Attributes
      </MagicButton>
      {isVisible && (
        <>
          <StatsStyle>{array}</StatsStyle>
          {showSkills && spellsArray}
          {showItems && itemsArray}
        </>
      )}
    </>
  );
}
export default Stats;

const MagicButton = styled.button`
  background: linear-gradient(135deg, #3e1f47, #784ba0);
  color: #f8e3a1;
  font-family: "Cinzel", serif;
  font-size: 1.2rem;
  padding: 10px 20px;
  border: 2px solid #d4af37;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(212, 175, 55, 0.8);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);

  &:hover {
    background: linear-gradient(135deg, #50295a, #9364c8);
    box-shadow: 0 0 15px rgba(212, 175, 55, 1);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 0 5px rgba(212, 175, 55, 0.5);
  }
`;


const Wrap = styled.div``;

const Inline = styled.div`
  display: contents;
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

