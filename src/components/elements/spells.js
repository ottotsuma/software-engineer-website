import styled from "styled-components";
import React from "react";

// Kʼawiil - Lightning, seeds, abundance, powerful one, fertility, serpent

// Lightning mages Rank 1
// Chain Lightning, Dazing Bolt, Thunderstorm, Shocking Touch, Sparks,
// Lightning Bolt, Lightning Rune, Lightning Cloak,
// Thunderbolt, Static Field, Wall of lightning, Lightning Storm,
// Discharge, Charged Charge.

export const spellList = {
  Example: {
    name: "Example",
    1: "Example",
  },
  "Charged Charge": {
    name: "Charged Charge",
    1: "Stimulates your muscles in your legs with lightning shocks, to boost your speed.",
  },
  "Lightning Storm": {
    name: "Lightning Storm",
    1: "Call lightning to randomly strike an area.",
  },
  "Wall of lightning": {
    name: "Wall of lightning",
    1: "Raise a wall of lightning before you.",
  },
  "Static Field": {
    name: "Static Field",
    1: "All lighting in this area will do more damage.",
  },
  Thunderbolt: {
    name: "Thunderbolt",
    1: "Calls a thunder bolt from above onto the target.",
  },
  Discharge: {
    name: "Discharge",
    1: "Explode lighting in all directions.",
  },
  "Lightning Cloak": {
    name: "Lightning Cloak",
    1: "Covers yourself in lighting, shocking anyone who comes too close.",
  },
  "Lightning Rune": {
    name: "Lightning Rune",
    1: "Injects lighting into a surface, will release when someone comes near.",
  },
  "Lightning Bolt": {
    name: "Lightning Bolt",
    1: "Shoots a bolt of lightning at a target.",
  },
  Sparks: {
    name: "Sparks",
    1: "Shoots out multiple sparks in a random pattern.f",
  },
  "Shocking Touch": {
    name: "Shocking Touch",
    1: "Electrocutes a target you touch [You decide the body part it comes from].",
  },
  Thunderstorm: {
    name: "Thunderstorm",
    1: "Change the clouds above to thunder clouds, making lighting strikes easier.",
  },
  "Dazing Bolt": {
    name: "Dazing Bolt",
    1: "A lightning bolt that dazzles the opponent.",
  },
  "Chain Lightning": {
    name: "Chain Lightning",
    1: "Shoots lightning at a target, part of the lighting will be redirected to near by targets.",
  },
  "Serpent Strike": {
    name: "Serpent Strike",
    1: "Your next physical attack will be faster.",
  },
  "Serpent Pattern": {
    name: "Serpent Pattern",
    passive: true,
    1: "Your skin will adapt to the environment slightly, increased stealth.",
    2: "Your skin will adapt to the environment slightly, increased stealth.", // ch32
  },
  "Forked Tongue": {
    name: "Forked Tongue",
    passive: true,
    1: "Your tongue will become forked, Increased sense of smell.",
  },
  "Serpent Skin": {
    name: "Serpent-Skin",
    1: "Your skin slowly becomes like a serpents. Able to turn on and off scaled armor over your skin.",
    2: "Your skin slowly becomes like a serpents. Able to turn on and off scaled armor over your skin.", // ch32
  },
  Haietlik: {
    name: "Haietlik",
    1: "Throw a snake shaped lighting bolt to hook onto a target, dealing damage in the process.",
  },
  "Kʼawiil Rain": {
    name: "Rain ",
    1: "",
  },
  "Kʼawiil Bolt": {
    name: "Kʼawiil Bolt",
    1: "Releases a burst of Kʼawiil-lightning from range.",
    2: "Releases a burst of Kʼawiil-lightning from range.",
  },
  "Kʼawiil Burst": {
    name: "Kʼawiil Burst",
    1: "Releases a burst of Kʼawiil-lightning on contact.",
    2: "Releases a burst of Kʼawiil-lightning on contact.",
  },
  "Lightning Plant": {
    name: "Lightning Plant",
    1: "Turn lightning seeds into lightning plants!",
  },
  "Inspect Plants": {
    name: "Inspect Plants",
    1: "Your inspection of plants will be a level up on your normal inspection ability.",
  },
  "Bountiful Harvest": {
    name: "Bountiful Harvest",
    passive: true,
    note: "All of your harvests are increased by [x]%. [x is 10x the level of this spell.]",
    1: "All of your harvests are increased by 10%.",
    2: "All of your harvests are increased by 20%.",
    3: "All of your harvests are increased by 30%.",
    4: "All of your harvests are increased by 40%.",
    5: "All of your harvests are increased by 50%.",
    6: "All of your harvests are increased by 60%.",
    7: "All of your harvests are increased by 70%.",
    8: "All of your harvests are increased by 80%.",
    9: "All of your harvests are increased by 90%.",
  },
  "Reap what you Sow": {
    name: "Reap what you Sow",
    passive: true,
    1: "Reap the benefits or punishments from the seeds you sow.",
  },
  Scarecrow: {
    name: "Scarecrow",
    notes: "https://en.wikipedia.org/wiki/Scarecrow",
    1: "Uses plant material to summon a sentient scarecrow.",
    2: "Uses plant material to summon a level 20 scarecrow.",
    3: "Uses plant material to summon a level 30 scarecrow.",
    4: "Uses plant material to summon a level 40 scarecrow.",
    5: "Uses plant material to summon a level 50 scarecrow.",
    6: "Uses plant material to summon a level 60 scarecrow.",
    7: "Uses plant material to summon a level 70 scarecrow.",
    8: "Uses plant material to summon a level 80 scarecrow.",
    9: "Uses plant material to summon a level 90 scarecrow.",
  },
  "Lightning harvest": {
    name: "Lightning harvest",
    note: "Harvest the target. [If the target is below 20% HP this attack does 200% more damage. If this target is a 'plant' type this attack does 500% more damage. If this attack kills the target you have a chance to harvest something.]",
    1: "Harvest the target. [If the target is below 20% HP this attack does 200% more damage. If this target is a 'plant' type this attack does 500% more damage. If this attack kills the target you have a chance to harvest something.]",
    2: "Harvest the target. [If the target is below 20% HP this attack does 250% more damage. If this target is a 'plant' type this attack does 600% more damage. If this attack kills the target you have a chance to harvest something.]",
  },
  "Lightning growth": {
    name: "Lightning growth",
    1: "Force the target to grow.",
    2: "Force the target to grow.",
  },
  "Lightning germination": {
    name: "Lightning germination",
    1: "Stimulate a target into germinating",
    2: "Stimulate a target into germinating",
  },
  "Seeds to Soldiers": {
    name: "Seeds to Soldiers",
    note: "Take [x] seed(s), use energy to give life to [x] soldier(s). [x is equal to spell level.]",
    1: "Take 1 seed, use energy to give life to 1 soldier.",
    2: "Take 2 seeds, use energy to give life to 2 soldiers.",
  },
  "Lightning seeds": {
    name: "Lightning seeds",
    note: "Shoots a group of [x] seed(s) in a spread from the user. The seeds attach to opponent(s) and cause lightning damage over time. A part of the damage is used to restore your as mana. [x is equal to spell level.]",
    1: "Shoots a group of 1 seed in a spread from the user. The seeds attach to an opponent and cause lightning damage over time. A part of the damage is used to restore your as mana.",
    2: "Shoots a group of 2 seeds in a spread from the user. The seeds attach to opponents and cause lightning damage over time. A part of the damage is used to restore your as mana.",
  },
  "Mana Ball": {
    name: "Mana Ball",
    1: "Gathers mana into a ball. Gives off a small amount of light.",
  },
  "Mana Orbs": {
    name: "Mana Orbs",
    1: "Mana balls rotate around the user, hitting anything that comes into contact.",
    2: "Mana balls rotate around the user, 3% faster.",
  },
  Tether: {
    name: "Tether",
    1: "Gathers mana into a string shape.",
  },
  "Magic Resistance": {
    name: "Magic Resistance",
    passive: true,
    1: "Passive: Resists mana foreign to the body, on surface level.",
  },
  "Magic Up": {
    name: "Magic Up",
    passive: true,
    1: "Increases the intensity of mana in the body.",
    2: "Magic +2",
    3: "Magic +3",
    4: "Magic +4",
    5: "Magic +5",
    6: "Magic +6",
    7: "Magic +7",
    8: "Magic +8",
    9: "Magic +9",
  },
  "Strike": {
    name: "Strike",
    1: "Calls mana in the environment to gather and strike down from above.",
  },
  "Missile": {
    name: "Missile",
    1: "Mana in the shape of a missile shoots towards the target.",
  },
  "Mana Slide": {
    name: "Mana Slide",
    1: "Pushes the user forward along the ground.",
  },
  "Mana Shield": {
    name: "Mana Shield",
    1: "Produces a shield of mana around the user.",
  },
  "Mana Wings": {
    name: "Mana Wings",
    1: "Produces a wings of mana.",
  },
  "Shield Burst": {
    name: "Shield Burst",
    1: "Explodes the mana left in the mana shield, into an attack.",
  },
  "Magic Regen": {
    name: "Magic Regen",
    passive: true,
    1: "Increases mana recovery speed.",
  },
  "Talented": {
    name: "Talented",
    passive: true,
    1: "1% increase to experience gained.",
    2: "2% increase to experience gained.",
    3: "3% increase to experience gained.",
    4: "4% increase to experience gained.",
    5: "5% increase to experience gained.",
    6: "6% increase to experience gained.",
    7: "7% increase to experience gained.",
    8: "8% increase to experience gained.",
    9: "9% increase to experience gained.",
  },
  "Genius": {
    name: "Genius",
    passive: true,
    1: "2% increase to experience gained",
    2: "4% increase to experience gained.",
    3: "6% increase to experience gained.",
    4: "8% increase to experience gained.",
    5: "10% increase to experience gained.",
    6: "12% increase to experience gained.",
    7: "14% increase to experience gained.",
    8: "16% increase to experience gained.",
    9: "18% increase to experience gained.",
  },
  "Super genius": {
    name: "Super genius",
    passive: true,
    1: "4% increase to experience gained",
    2: "8% increase to experience gained.",
    3: "12% increase to experience gained.",
    4: "16% increase to experience gained.",
    5: "20% increase to experience gained.",
    6: "24% increase to experience gained.",
    7: "28% increase to experience gained.",
    8: "32% increase to experience gained.",
    9: "36% increase to experience gained.",
  },
  "Peerless genius": {
    name: "Peerless genius",
    passive: true,
    1: "10% increase to experience gained",
    2: "20% increase to experience gained.",
    3: "30% increase to experience gained.",
    4: "40% increase to experience gained.",
    5: "50% increase to experience gained.",
    6: "60% increase to experience gained.",
    7: "70% increase to experience gained.",
    8: "80% increase to experience gained.",
    9: "90% increase to experience gained.",
  },
  "Handsome": {
    name: "Handsome",
    passive: true,
    1: "+1 Charisma.",
  },
  "Beautiful": {
    name: "Beautiful",
    passive: true,
    1: "+1 Charisma.",
  },
  "Peerless Beauty": {
    name: "Peerless Beauty",
    passive: true,
    1: "+2 Charisma.",
  },
  "Lucky": {
    name: "Lucky",
    passive: true,
    1: "Slight chance of finding a rarer item.",
  },
  "Persuasive": {
    name: "Persuasive",
    passive: true,
    1: "+1 Charisma.",
    2: "+2 Charisma.",
    3: "+3 Charisma.",
    4: "+4 Charisma.",
    5: "+5 Charisma.",
    6: "+6 Charisma.",
    7: "+7 Charisma.",
    8: "+8 Charisma.",
    9: "+9 Charisma.",
  },
  "Brave": {
    name: "Brave",
    passive: true,
    1: "Chance to resist fear.",
    2: "Chance to resist fear.",
  },
  "Human Aptitude": {
    name: "Human Aptitude",
    passive: true,
    1: "Chance based skills are 1% more likely to succeed.",
  },
  "Human Ingenuity": {
    name: "Human Ingenuity",
    notes: "E.g. Spear has +1 strength then you get +1 another one. This is only for 'tools' not armor.",
    passive: true,
    1: "When using tools gain +1 proficiency.",
    2: "When using tools gain +2 proficiency.",
    3: "When using tools gain +3 proficiency.",
    4: "When using tools gain +4 proficiency.",
    5: "When using tools gain +5 proficiency.",
    6: "When using tools gain +6 proficiency.",
    7: "When using tools gain +7 proficiency.",
    8: "When using tools gain +8 proficiency.",
    9: "When using tools gain +9 proficiency.",
  },
  "Human Resolve": {
    name: "Human Resolve",
    passive: true,
    1: "Boost all stats 10% for 2 second.",
    2: "Boost all stats 10% for 4 second.",
    3: "Boost all stats 10% for 6 second.",
    4: "Boost all stats 10% for 8 second.",
    5: "Boost all stats 10% for 10 second.",
    6: "Boost all stats 10% for 12 second.",
    7: "Boost all stats 10% for 14 second.",
    8: "Boost all stats 10% for 16 second.",
    9: "Boost all stats 10% for 18 second.",
  },
  "Plant Form": {
    name: "Plant Form",
    passive: true,
    1: "Take the form of a plant you have seen.",
  },
  "Adaptable": {
    name: "Adaptable",
    passive: true,
    1: "Environmental debuffs effect -5%.",
    2: "Environmental debuffs effect -10%.",
    3: "Environmental debuffs effect -15%.",
    4: "Environmental debuffs effect -20%.",
    5: "Environmental debuffs effect -25%.",
    6: "Environmental debuffs effect -30%.",
    7: "Environmental debuffs effect -35%.",
    8: "Environmental debuffs effect -40%.",
    9: "Environmental debuffs effect -45%.",
  },
  "Healthy": {
    name: "Healthy",
    passive: true,
    1: "Vitality +1.",
    2: "Vitality +1, small chance to resist poisons.",
    3: "Vitality +2, small chance to resist poisons & diseases.",
    4: "Vitality +3, small chance to resist poisons & diseases.",
    5: "Vitality +3, small chance to resist poisons & diseases, small increase to HP regeneration.",
    6: "Vitality +4, small chance to resist poisons & diseases, small increase to HP regeneration.",
    7: "Vitality +4, chance to resist poisons & diseases, increase to HP regeneration.",
    8: "Vitality +5, chance to resist poisons & diseases, increase to HP regeneration.",
    9: "Vitality +5, chance to resist poisons & diseases, greater HP regeneration.",
    10: "Vitality +5, greater chance to resist poisons & diseases, greater HP regeneration.",
  },
  "Athletic": {
    name: "Athletic",
    passive: true,
    1: "Movement speed +2%",
    2: "Movement speed +4%",
    3: "Movement speed +6%",
    4: "Movement speed +8%",
    5: "Movement speed +10%",
    6: "Movement speed +12%",
    7: "Movement speed +14%",
    8: "Movement speed +16%",
    9: "Movement speed +18%",
  },
  "Perception": {
    name: "Perception",
    passive: true,
    1: "Sense +1",
    2: "Sense +2",
    3: "Sense +3",
    4: "Sense +4",
    5: "Sense +5",
    6: "Sense +6",
    7: "Sense +7",
    8: "Sense +8",
    9: "Sense +9",
  },
  "Quick": {
    name: "Quick",
    passive: true,
    1: "Dexterity +1",
    2: "Dexterity +2",
  },
  "Pure of mind": {
    name: "Pure of mind",
    passive: true,
    1: "Willpower +1",
    2: "Willpower +2",
  },
  "Perseverance": {
    name: "Perseverance",
    passive: true,
    1: "Willpower +1",
  },
  "Magical Aptitude": {
    name: "Magical Aptitude",
    passive: true,
    1: "Magic +1",
    2: "Magic +2",
    3: "Magic +3",
    4: "Magic +4",
    5: "Magic +5",
    6: "Magic +6",
    7: "Magic +7",
    8: "Magic +8",
    9: "Magic +9",
  },
  "Magic Enthusiast": {
    name: "Magical Enthusiast",
    passive: true,
    1: "Magic +1",
    2: "Magic +2",
    3: "Magic +3",
    4: "Magic +4",
    5: "Magic +5",
    6: "Magic +6",
    7: "Magic +7",
    8: "Magic +8",
    9: "Magic +9",
  },
  "Arcane Inclination": {
    name: "Arcane Inclination",
    passive: true,
    1: "Magic +1",
    2: "Magic +2",
  },
  "Arcane Tradition Focus": {
    name: "Arcane Tradition Focus",
    passive: true,
    1: "Magic +1",
    2: "Magic +2",
  },
  "Arcane Tradition Prodigy": {
    name: "Arcane Tradition Prodigy",
    passive: true,
    1: "Magic +1",
    2: "Magic +2",
  },
  "Astute": {
    name: "Astute",
    passive: true,
    1: "Magic +1",
    2: "Magic +2",
  },
  "Basic God": {
    name: "Basic God",
    passive: true,
    1: "Magic +1",
  },
  "Intermediate God": {
    name: "Intermediate God",
    passive: true,
    1: "Magic +1",
  },
  "Advanced God": {
    name: "Advanced God",
    passive: true,
    1: "Magic +1",
  },
  "Demi-God": {
    name: "Demi-God",
    passive: true,
    1: "Magic +1",
  },
  "Full God": {
    name: "Full God",
    passive: true,
    1: "Magic +1",
  },
  "Gift of Lightning": {
    name: "Gift of Lightning",
    passive: true,
    1: "Lightning damage +1%",
  },
  "Adhere": {
    name: "Adhere",
    passive: false,
    1: "Makes an object sticky.",
  },
  "Aethersight": {
    name: "Aethersight",
    passive: false,
    1: "Magical auras glow brightly for you.",
  },
  "Animate Object": {
    name: "Animate Object",
    passive: false,
    1: "An object animates under your control.",
  },
  "Anthropomorphize": {
    name: "Anthropomorphize",
    passive: false,
    1: "A touched animal either gains human a characteristic.",
  },
  "Arboriate": {
    name: "Arboriate",
    passive: false,
    1: "You become a walking tree up to 10ft tall.",
  },
  "Arcane Eye": {
    name: "Arcane Eye",
    passive: false,
    1: "You can see through a magical floating eyeball that flies around at your command.",
  },
  "Astral Prison": {
    name: "Astral Prison",
    passive: false,
    1: "A creature is frozen in time and space within an invulnerable crystal shell.",
  },
  "Astral Weapon": {
    name: "Astral Weapon",
    passive: false,
    1: "A magical weapon appears in your hands until end of spell. It adds +1 to all your attacks.",
  },
  "Magnetic Attract": {
    name: "Magnetic Attract",
    passive: false,
    1: "2 Objects are strongly magnetically attracted to each other if they come within 10 feet.",
  },
  "Auditory Illusion": {
    name: "Auditory Illusion",
    passive: false,
    1: "You create illusory noises that appear to come from a direction of your choice.",
  },
};

// https://i.4pcdn.org/tg/1498966145042.pdf

// Add spell (level/rank). Changes description.
function Spells({ spells, type }) {
  const array = [];
  for (let index = 0; index < spells.length; index++) {
    const element = spellList[spells[index].name];
    if (element) {
      array.push(
        <SingleSpell key={index + "SingleSpell"} passive={element.passive || false}>
          {element.name}
          {element[spells[index].level] ? (
            <Span>{element[spells[index].level]}</Span>
          ) : (
            <Span>{spells[index].name}</Span>
          )}
        </SingleSpell>
      );
    } else {
      array.push(
        <SingleSpell key={index + "SingleSpell"} passive={spells[index].passive || false}>
          {spells[index].name}
        </SingleSpell>
      );
    }
  }
  return (
    <>
      {type === 'mage' ? <Title>Spells:</Title> : <Title>Skills:</Title>}
      <SpellsStyle>{array}</SpellsStyle>
    </>
  );
}
export default Spells;

const Title = styled.h1`
  display: flex;
  justify-content: center;
`;

const SpellsStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
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

const SingleSpell = styled.div`
  border-radius: 6px;
  padding: 5px;
  width: auto;
  background: ${props => props.passive ? "#54cc4f;" : `linear-gradient(
    217deg,
    rgb(218, 182, 111),
    rgb(244, 229, 203) 70.71%
  );` }
  margin: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  // &:hover {
  //   background-color: #f1f1f1;
  // }
  &:hover ${Span} {
    visibility: visible;
  }
`;
