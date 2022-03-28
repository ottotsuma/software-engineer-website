import styled from "styled-components";
import React from "react";

// Kʼawiil - Lightning, seeds, abundance, powerful one, fertility, serpent

// Rogue: Side/Back -- Back -- Side (3rd one is intermediate), (4th advanced)
// Fighter: ?? -- ?? -- ?? (3rd one is intermediate), (4th advanced) [look up sword techniques]
// Mage: ?? -- ?? -- ?? (3rd one is intermediate), (4th advanced)

// <li>Vitality</li> Health points, Resistances to hot/cold / poison
// <li>Endurance</li> Increases resistance to physical damage, reduces physical damage taken (%)
// <li>Willpower</li> Increases resistance to magic, reduces magic damage taken (%)
// <li>Magic</li> Increases Magic damage, Mana
// <li>Strength</li> Increased physical damage. Minor: Increased storage capacity. Reduce damage taken during a successful block. Increased resistance to falling. Increased movement speed.
// <li>Dexterity (Reflexes)</li> Reduces time between using skills, casting of skills, dodge change, movement on rough terrain
// <li>Sense</li> Range of attacks, accuracy. Trap Detect (All of the senses, hearing, taste, touch, smell.) Seeing though smoke screens and illusions. Seeing weakness and injuries in your opponent (CRIT), Range of summons / familia can move from you.
// <li>Charisma</li> Increases NPC likability, command points

export const spellList = {
  Miasma: {
    note: "Miasma.",
    name: "Miasma",
    element: "None",
    image: "",
    negative: true,
    passive: true,
    1: "Reduces all stats by 1%.",
    90: "Reduces all stats by 90%.",
    stats: {
      90: {
        strengthMultiplier: -0.9,
        vitalityMultiplier: -0.9,
        magicMultiplier: -0.9,
        dexterityMultiplier: -0.9,
        senseMultiplier: -0.9,
        enduranceMultiplier: -0.9,
        willpowerMultiplier: -0.9,
        HPMultiplier: -0.9,
        MPMultiplier: -0.9,
        // level: '*0.1'
      },
    },
  },
  Player: {
    note: "Not an NPC.",
    name: "Astral soul projection",
    element: "None",
    image: "",
    negative: false,
    passive: true,
    1: "Passive all players posses.",
    stats: [{}],
  },
  Child: {
    note: "Child = 0 - 12.",
    name: "Child",
    element: "None",
    image: "",
    negative: false,
    passive: true,
    1: "Max Stat: 5.",
  },
  Youth: {
    note: "Youth = 13-19 yrs.",
    name: "Youth",
    element: "None",
    image: "",
    negative: false,
    passive: true,
    1: "Vitality, Magic, Charisma: +1.",
    stats: [
      {
        vitality: 1,
        magic: 1,
        charisma: 1,
      },
    ],
  },
  Adult: {
    note: "Adult = 20-39 yrs.",
    name: "Adult",
    element: "None",
    image: "",
    negative: false,
    passive: true,
    1: "Vitality, Strength: +1.",
  },
  Older: {
    note: "Older = 40-59 yrs.",
    name: "Older",
    element: "None",
    image: "",
    negative: true,
    passive: true,
    1: "Sense, Dexterity, Vitality, Strength: -1.",
  },
  Aged: {
    note: "Aged = 60+",
    name: "Aged",
    element: "None",
    image: "",
    negative: true,
    passive: true,
    1: "All stats: -1.",
  },
  "Sharp Slash": {
    note: "Rogue",
    name: "Sharp Slash",
    1: "Deals 20% more damage from the side and behind.",
  },
  "Slashing Edge": {
    note: "Rogue",
    name: "Slashing Edge",
    1: "Deals 20% more damage from behind, 20% more damage if used after 'Sharp Slash'.",
  },
  "Devious Slice": {
    note: "Rogue",
    name: "Devious Slice",
    1: "Deals 20% more damage from the side, 20% more damage if used after 'Slashing Edge'.",
  },
  Headbutt: {
    note: "Rogue",
    name: "Headbutt",
    1: "Has a chance to stun the target. Recoil damage.",
  },
  "Fleet of Foot": {
    note: "Rogue",
    name: "Fleet of Foot",
    1: "Increases movement speed.",
  },
  "Charged Charge": {
    name: "Charged Charge",
    1: "Stimulates your muscles in your legs with lightning shocks, to boost your speed.",
    2: "Move 5% faster while charging.",
    3: "Do 10% more impact damage.",
    4: "Cost 5% less mana.",
    5: "Charge can last 1 second longer.",
  },
  "Lightning Storm": {
    name: "Lightning Storm",
    1: "Call lightning to randomly strike an area.",
  },
  "Wall of Lightning": {
    name: "Wall of Lightning",
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
    1: "Shoots out multiple sparks in a random pattern.",
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
    2: "You learn basic serpent speech.",
  },
  "Serpent Skin": {
    name: "Serpent-Skin",
    1: "Your skin slowly becomes like a serpents. Able to turn on and off scaled armor over your skin.",
    2: "Your skin slowly becomes like a serpents. Able to turn on and off scaled armor over your skin.", // ch32
    3: "Endurance +3",
    4: "Endurance +4",
    5: "Endurance +5",
    stats: [
      {
        endurance: 1,
      },
      {
        endurance: 2,
      },
      {
        endurance: 3,
      },
      {
        endurance: 4,
      },
      {
        endurance: 5,
      },
      {
        endurance: 6,
      },
      {
        endurance: 7,
      },
      {
        endurance: 8,
      },
      {
        endurance: 9,
      },
      {
        endurance: 10,
      },
    ],
  },
  Haietlik: {
    name: "Haietlik",
    1: "Throw a snake shaped lighting bolt to hook onto a target, dealing damage in the process.",
  },
  "Kʼawiil Rain": {
    name: "Kʼawiil Rain ",
    1: "It starts raining, the rain recovers the HP of your summons/plants.",
  },
  "Kʼawiil Bolt": {
    name: "Kʼawiil Bolt",
    1: "Releases a burst of Kʼawiil-lightning from range.",
    2: "Releases a burst of Kʼawiil-lightning from range.", // ch32
  },
  "Kʼawiil Burst": {
    name: "Kʼawiil Burst",
    1: "Releases a burst of Kʼawiil-lightning on contact.",
    2: "Releases a burst of Kʼawiil-lightning on contact.", // ch32
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
    10: "All of your harvests are increased by 100%, recover 20% HP.",
  },
  "Reap What You Sow": {
    name: "Reap What You Sow",
    passive: true,
    1: "Reap the benefits or punishments from the seeds you sow.",
    2: "Reap the benefits or punishments from the seeds you sow.", // chapter 32
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
    10: "Uses plant material to summon a level 100 scarecrow. Equipment provided.",
  },
  "Lightning harvest": {
    name: "Lightning harvest",
    element: "lightning",
    note: "Harvest the target. [If the target is below 20% HP this attack does 200% more damage. If this target is a 'plant' type this attack does 500% more damage. If this attack kills the target you have a chance to harvest something.]",
    1: "Harvest the target. [If the target is below 20% HP this attack does 200% more damage. If this target is a 'plant' type this attack does 500% more damage. If this attack kills the target you have a chance to harvest something.]",
    2: "Harvest the target. [If the target is below 20% HP this attack does 250% more damage. If this target is a 'plant' type this attack does 600% more damage. If this attack kills the target you have a chance to harvest something.]",
    3: "Harvest the target. [If the target is below 20% HP this attack does 300% more damage. If this target is a 'plant' type this attack does 700% more damage. If this attack kills the target you have a chance to harvest something.]",
    4: "Harvest the target. [If the target is below 20% HP this attack does 350% more damage. If this target is a 'plant' type this attack does 800% more damage. If this attack kills the target you have a chance to harvest something.]",
    5: "Harvest the target. [If the target is below 20% HP this attack does 400% more damage. If this target is a 'plant' type this attack does 900% more damage. If this attack kills the target you have a chance to harvest something.]",
    6: "Harvest the target. [If the target is below 20% HP this attack does 450% more damage. If this target is a 'plant' type this attack does 1000% more damage. If this attack kills the target you have a chance to harvest something.]",
    7: "Harvest the target. [If the target is below 20% HP this attack does 500% more damage. If this target is a 'plant' type this attack does 1000% more damage. If this attack kills the target you have a chance to harvest something.]",
    8: "Harvest the target. [If the target is below 20% HP this attack does 550% more damage. If this target is a 'plant' type this attack does 1000% more damage. If this attack kills the target you have a chance to harvest something.]",
    9: "Harvest the target. [If the target is below 20% HP this attack does 600% more damage. If this target is a 'plant' type this attack does 1000% more damage. If this attack kills the target you have a chance to harvest something.]",
  },
  "Lightning growth": {
    name: "Lightning growth",
    element: "lightning",
    image:
      "https://cdn.dribbble.com/users/36602/screenshots/3544179/growing-tree-svg-animation-recut.gif",
    1: "Force the target to grow.", // 5% increase stats
    2: "Force the target to grow.", // ch32 // +1 all base stats
    3: "All targets base stats +2 for the duration of the spells.",
    4: "All targets stats +10% for the duration of the spells.",
  },
  "Lightning germination": {
    name: "Lightning germination",
    element: "lightning",
    image:
      "https://static.wixstatic.com/media/45e716_c8ae22cc571b4429ac23a59b4ddf9ef0~mv2.gif",
    1: "Stimulate a target into germinating", // 10\10 secs
    2: "Stimulate a target into germinating", // ch32 // 10\9 secs
    3: "Target heals 12% of their max hp over 7 seconds.", // 12\7
    4: "Target heals 12% of their max hp over 6 seconds.", // 12\7
    5: "Target heals 14% of their max hp over 5 seconds.", // 14\7
    6: "Target heals 14% of their max hp over 4 seconds.", // 14\7
    7: "Target heals 16% of their max hp over 3 seconds.", // 16\7
    8: "Target heals 16% of their max hp over 2 seconds.", // 16\7
    9: "Target heals 18% of their max hp over 1 seconds.", // 18\7
    10: "Target heals 25% of their max hp.",
  },
  "Seeds to Soldiers": {
    name: "Seeds to Soldiers",
    element: "wood",
    note: "Take [x] seed(s), use energy to give life to [x] soldier(s). [x is equal to spell level.]",
    1: "Take 1 seed, use energy to give life to 1 soldier.",
    2: "Take 2 seeds, use energy to give life to 2 soldiers.",
  },
  "Lightning seeds": {
    name: "Lightning seeds",
    element: "lightning",
    image:
      "http://2.bp.blogspot.com/-k4C_Lq6Y7fw/VDtBXWA2LCI/AAAAAAAABrY/QEUTlVZ76RI/s1600/lightningBall_small.gif",
    note: "Shoots a group of [x] seed(s) in a spread from the user. The seeds attach to opponent(s) and cause lightning damage over time. A part of the damage is used to restore your as mana. [x is equal to spell level.]",
    1: "Shoots a group of 1 seed in a spread from the user. The seeds attach to an opponent and cause lightning damage over time. A part of the damage is used to restore your as mana.",
    2: "Shoots a group of 2 seeds in a spread from the user. The seeds attach to opponents and cause lightning damage over time. A part of the damage is used to restore your as mana.",
    3: "Total seeds: 3. Mana Drain: 10%.",
    4: "Total seeds: 4. Mana Drain: 10%.",
    5: "Total seeds: 5. Mana Drain: 10%.",
    6: "Total seeds: 6. Mana Drain: 10%.",
    7: "Total seeds: 7. Mana Drain: 10%.",
    8: "Total seeds: 8. Mana Drain: 10%.",
    9: "Total seeds: 9. Mana Drain: 10%.",
    10: "Total seeds: 10. Mana Drain: 20%.",
  },
  "Mana Ball": {
    name: "Mana Ball",
    1: "Gathers mana into a ball. Gives off a small amount of light.",
    2: "Mana ball create is instant, flight speed +25%.",
    classes: ["mage"],
  },
  "Mana Orbs": {
    name: "Mana Orbs",
    1: "(3) Mana balls rotate around the user, hitting anything that comes into contact.",
    2: "Mana balls rotate around the user, 3% faster.",
    3: "Orbit distance is increased while moving.",
    4: "10% increase in mana ball damage.",
    5: "Gain and extra mana ball.",
    6: "Orbit distance is increased while standing still.",
    7: "Gain and extra mana ball.",
    8: "10% increase in mana ball damage.",
    9: "Balls can move away form their path of orbit if a target is near by.",
    10: "Balls can be shot in all directions, bounce off walls or max range and coming back.",
    classes: ["mage"],
  },
  Tether: {
    name: "Tether",
    1: "Gathers mana into a string shape.",
    2: "Two objects within 10’ of each other be-come linked and cannot be moved more than 10’ apart.",
    classes: ["mage"],
  },
  "Magic Resistance": {
    name: "Magic Resistance",
    passive: true,
    1: "Passive: Resists mana foreign to the body, on surface level.",
    classes: ["mage"],
  },
  "Magic Up": {
    name: "Magic Up",
    element: "mana",
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
    10: "Magic +10, mana recovery +10%.",
    classes: ["mage"],
    stats: [
      {
        magic: 1,
      },
      {
        magic: 2,
      },
      {
        magic: 3,
      },
      {
        magic: 4,
      },
      {
        magic: 5,
      },
      {
        magic: 6,
      },
      {
        magic: 7,
      },
      {
        magic: 8,
      },
      {
        magic: 9,
      },
      {
        magic: 10,
      },
    ],
  },
  Strike: {
    name: "Strike",
    1: "Calls mana in the environment to gather and strike down from above.",
    classes: ["mage"],
  },
  Missile: {
    name: "Missile",
    1: "Mana in the shape of a missile shoots towards the target.",
    2: "+1 Missile.",
    3: "+1 Missile.",
    4: "Missile speed +25%.",
    5: "Missiles target low HP enemies first.",
    6: "Missiles more accurate.",
    7: "+1 Missile.",
    8: "+1 Missile.",
    9: "Missile damage +10%.", // you have 5 missiles so if all land its a 50% boost!
    10: "Missiles become one big missile, splash damage on impact.",
    classes: ["mage"],
  },
  "Mana Slide": {
    name: "Mana Slide",
    1: "Pushes the user forward along the ground.",
    2: "10% cost reduction.",
    3: "+10% speed.",
    4: "50% further.",
    5: "Chance of falling over is now 0%",
    6: "Chance skill interruption will fail.",
    7: "50% further.",
    8: "+10% speed.",
    9: "15% cost reduction.",
    classes: ["mage"],
  },
  "Mana Shield": {
    name: "Mana Shield",
    1: "Produces a shield of mana around the user.",
    2: "Takes 5% less damage.",
    classes: ["mage"],
  },
  "Mana Wings": {
    name: "Mana Wings",
    1: "Produces a wings of mana.",
    2: "Can fly using the wings.",
    3: "Flight cost reduction 20%.",
    4: "Can fly higher.",
    5: "Can fly faster.",
    6: "Summon cost reduction 10%.",
    7: "Maintaining cost reduction 50%.",
    8: "Can be used underwater.",
    9: "Wings take 5% less damage.",
    10: "Twice as many wings, half the cost.",
    classes: ["mage"],
  },
  "Shield Burst": {
    name: "Shield Burst",
    1: "Explodes the mana left in the mana shield, into an attack.",
    classes: ["mage"],
  },
  "Magic Regen": {
    name: "Magic Regen",
    passive: true,
    1: "Increases mana recovery speed.",
    classes: ["mage"],
  },
  Talented: {
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
  Genius: {
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
  Handsome: {
    name: "Handsome",
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
    10: "+10 Charisma, small chance people become infatuated with you.",
  },
  Beautiful: {
    name: "Beautiful",
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
    10: "+10 Charisma, small chance people become infatuated with you.",
  },
  "Peerless Beauty": {
    name: "Peerless Beauty",
    passive: true,
    1: "+2 Charisma.",
    2: "+4 Charisma.",
    3: "+6 Charisma.",
    4: "+8 Charisma.",
    5: "+10 Charisma.",
    6: "+12 Charisma.",
    7: "+14 Charisma.",
    8: "+16 Charisma.",
    9: "+18 Charisma.",
    10: "+20 Charisma, chance people become infatuated with you.",
  },
  Lucky: {
    name: "Lucky",
    passive: true,
    1: "Slight chance of finding a rarer item.",
  },
  Persuasive: {
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
    10: "+10 Charisma, I'll do it, even if I don't like it.",
    stats: [
      {
        charisma: 1,
      },
      {
        charisma: 2,
      },
      {
        charisma: 3,
      },
      {
        charisma: 4,
      },
      {
        charisma: 5,
      },
      {
        charisma: 6,
      },
      {
        charisma: 7,
      },
      {
        charisma: 8,
      },
      {
        charisma: 9,
      },
      {
        charisma: 10,
      },
    ],
  },
  Brave: {
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
    notes:
      "E.g. Spear has +1 strength then you get +1 another one. This is only for 'tools' not armor.",
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
    10: "When using tools gain +10 proficiency, tools have +1 bonus stat.",
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
    10: "Boost all stats 20% for 20 second.",
  },
  "Plant Form": {
    name: "Plant Form",
    passive: true,
    1: "Take the form of a plant you have seen.",
  },
  Adaptable: {
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
    10: "Environmental debuffs effect -50%, pull less agro.",
  },
  Healthy: {
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
    stats: [
      {
        vitality: 1,
      },
      {
        vitality: 1,
      },
      {
        vitality: 2,
      },
      {
        vitality: 3,
      },
      {
        vitality: 3,
      },
      {
        vitality: 4,
      },
      {
        vitality: 4,
      },
      {
        vitality: 5,
      },
      {
        vitality: 5,
      },
      {
        vitality: 5,
      },
    ],
  },
  Athletic: {
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
    10: "Movement speed +20%, effects that reduce movement speed are halved.",
  },
  Perception: {
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
    10: "Sense +10, basic traps will cause 0 damage.",
    stats: [
      {
        sense: 1,
      },
      {
        sense: 2,
      },
      {
        sense: 3,
      },
      {
        sense: 4,
      },
      {
        sense: 5,
      },
      {
        sense: 6,
      },
      {
        sense: 7,
      },
      {
        sense: 8,
      },
      {
        sense: 9,
      },
      {
        sense: 10,
      },
    ],
  },
  Quick: {
    name: "Quick",
    passive: true,
    1: "Dexterity +1",
    2: "Dexterity +2",
    stats: [
      {
        dexterity: 1,
      },
      {
        dexterity: 2,
      },
    ],
  },
  "Pure of mind": {
    name: "Pure of mind",
    passive: true,
    1: "Willpower +1",
    2: "Willpower +2",
  },
  Perseverance: {
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
    stats: [
      {
        magic: 1,
      },
      {
        magic: 2,
      },
      {
        magic: 3,
      },
      {
        magic: 4,
      },
      {
        magic: 5,
      },
      {
        magic: 6,
      },
      {
        magic: 7,
      },
      {
        magic: 8,
      },
      {
        magic: 9,
      },
      {
        magic: 10,
      },
    ],
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
    stats: [
      {
        magic: 1,
      },
      {
        magic: 2,
      },
      {
        magic: 3,
      },
      {
        magic: 4,
      },
      {
        magic: 5,
      },
      {
        magic: 6,
      },
      {
        magic: 7,
      },
      {
        magic: 8,
      },
      {
        magic: 9,
      },
      {
        magic: 10,
      },
    ],
  },
  "Arcane Inclination": {
    name: "Arcane Inclination",
    passive: true,
    1: "Magic +1",
    2: "Magic +2",
    stats: [
      {
        magic: 1,
      },
      {
        magic: 2,
      },
      {
        magic: 3,
      },
      {
        magic: 4,
      },
      {
        magic: 5,
      },
      {
        magic: 6,
      },
      {
        magic: 7,
      },
      {
        magic: 8,
      },
      {
        magic: 9,
      },
      {
        magic: 10,
      },
    ],
  },
  "Arcane Tradition Focus": {
    name: "Arcane Tradition Focus",
    passive: true,
    1: "Magic +1",
    2: "Magic +2",
    stats: [
      {
        magic: 1,
      },
      {
        magic: 2,
      },
      {
        magic: 3,
      },
      {
        magic: 4,
      },
      {
        magic: 5,
      },
      {
        magic: 6,
      },
      {
        magic: 7,
      },
      {
        magic: 8,
      },
      {
        magic: 9,
      },
      {
        magic: 10,
      },
    ],
  },
  "Arcane Tradition Prodigy": {
    name: "Arcane Tradition Prodigy",
    passive: true,
    1: "Magic +1",
    2: "Magic +2",
    stats: [
      {
        magic: 1,
      },
      {
        magic: 2,
      },
      {
        magic: 3,
      },
      {
        magic: 4,
      },
      {
        magic: 5,
      },
      {
        magic: 6,
      },
      {
        magic: 7,
      },
      {
        magic: 8,
      },
      {
        magic: 9,
      },
      {
        magic: 10,
      },
    ],
  },
  Astute: {
    name: "Astute",
    passive: true,
    1: "Magic +1",
    2: "Magic +2",
    stats: [
      {
        magic: 1,
      },
      {
        magic: 2,
      },
      {
        magic: 3,
      },
      {
        magic: 4,
      },
      {
        magic: 5,
      },
      {
        magic: 6,
      },
      {
        magic: 7,
      },
      {
        magic: 8,
      },
      {
        magic: 9,
      },
      {
        magic: 10,
      },
    ],
  },
  "Basic God": {
    name: "Basic God",
    passive: true,
    1: "All Stats +1",
  },
  "Intermediate God": {
    name: "Intermediate God",
    passive: true,
    1: "All Stats +1",
  },
  "Advanced God": {
    name: "Advanced God",
    passive: true,
    1: "All Stats +1",
  },
  "Demi-God": {
    name: "Demi-God",
    passive: true,
    1: "All Stats +1",
  },
  "Full God": {
    name: "Full God",
    passive: true,
    1: "All Stats +1",
  },
  "Gift of Lightning": {
    name: "Gift of Lightning",
    passive: true,
    1: "Lightning damage +1%",
  },
  Adhere: {
    name: "Adhere",
    passive: false,
    1: "Makes an object sticky.",
  },
  Aethersight: {
    name: "Aethersight",
    passive: false,
    1: "Magical auras glow brightly for you.",
  },
  "Animate Object": {
    name: "Animate Object",
    passive: false,
    1: "An object animates under your control.",
  },
  Anthropomorphize: {
    name: "Anthropomorphize",
    passive: false,
    1: "A touched animal either gains human a characteristic.",
  },
  Arboriate: {
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
  Beacon: {
    name: "Beacon",
    passive: false,
    1: "A touched object begins emitting a psychic pulse that draws the curiosity of all monsters within 1 mile.",
  },
  "Beast Form": {
    name: "Beast Form",
    passive: false,
    1: "You transform into a mundane animal.",
  },
  Befuddle: {
    name: "Befuddle",
    passive: false,
    1: "1 creature of your choice are unable to form new short-term memories for the duration of the spell.",
  },
  "Bird Person": {
    name: "Bird Person",
    passive: false,
    1: "Your arms turn into huge wings.",
  },
  "Body Swap": {
    name: "Body Swap",
    passive: false,
    1: "You switch bodies with a creature you touch. If one body dies, the other dies as well.",
  },
  Charm: {
    name: "Charm",
    passive: false,
    1: "A creature treat you like a friend.",
  },
  Command: {
    name: "Command",
    passive: false,
    1: "A creature obeys a single, three-word command that does not harm it.",
  },
  Comprehend: {
    name: "Comprehend",
    passive: false,
    1: "You become fluent in all languages.",
  },
  "Control Weather": {
    name: "Control Weather",
    passive: false,
    1: " You may alter the type of weather at will, but you do not otherwise control it.",
  },
  Counterspell: {
    name: "Counterspell",
    passive: false,
    1: "Chance to cancel a targets spell.",
  },
  Deafen: {
    name: "Deafen",
    passive: false,
    1: "Nearby creatures of your choice are deafened.",
  },
  Disassemble: {
    name: "Disassemble",
    passive: false,
    1: "Any of your body parts may be detached and reattached at will, without causing pain or damage. You can still control them.",
  },
  Disguise: {
    name: "Disguise",
    passive: false,
    1: "You may alter the appearance of 1 characters at will as long as they remain humanoid. Attempts to impersonate other characters will seem uncanny.",
  },
  Displace: {
    name: "Displace",
    passive: false,
    1: "Shift an object’s apparent position by up to 10cm.",
  },
  Earthquake: {
    name: "Earthquake",
    passive: false,
    1: "The ground begins shaking violently. Structures may be damaged or collapse.",
  },
  Elasticity: {
    name: "Elasticity",
    passive: false,
    1: "Your body can stretch up to 10cm.",
  },
  "Elemental Sprite": {
    name: "Elemental Sprite",
    passive: false,
    1: "Summon an elemental spite.",
  },
  Feast: {
    name: "Feast",
    passive: false,
    1: "A huge table appears, laden with food.",
  },
  Filch: {
    name: "Filch",
    passive: false,
    1: "1 visible item teleport to your hands.",
  },
  "Flesh Warp": {
    name: "Flesh Warp",
    passive: false,
    1: "A touched creature doubles or halves in size.",
  },
  "Fog Cloud": {
    name: "Fog Cloud",
    passive: false,
    1: "A cloud of dense fog spreads out from you.",
  },
  Frenzy: {
    name: "Frenzy",
    passive: false,
    1: "1 creature erupts in a frenzy of random violence.",
  },
  "Random Gate": {
    name: "Random Gate",
    passive: false,
    1: "A portal to a random plane opens.",
  },
  "Gravity Shift": {
    name: "Gravity Shift",
    passive: false,
    1: "You can change the direction of gravity (for yourself only) once every 6 seconds.",
  },
  Haste: {
    name: "Haste",
    passive: false,
    1: "Your movement speed is tripled.",
  },
  "Hear Whispers": {
    name: "Hear Whispers",
    passive: false,
    1: "You can hear the faintest sounds clearly.",
  },
  Hover: {
    name: "Hover",
    passive: false,
    1: "An object hovers, frictionless, 2’ above the ground. Can hold up to 5 humanoids.",
  },
  Hypnotize: {
    name: "Hypnotize",
    passive: false,
    1: "A creature enters a trance and will truthfully answer L yes or no questions you ask it.",
  },
  Illuminate: {
    name: "Illuminate",
    passive: false,
    1: "???",
  },
  "Increase Gravity": {
    name: "Increase Gravity",
    passive: false,
    1: "The gravity in a nearby area triples.",
  },
  Ironbane: {
    name: "Ironbane",
    passive: false,
    1: "Any iron that touches you disintegrates.",
  },
  Knock: {
    name: "Knock",
    passive: false,
    1: "All nearby locks, clasps, and buckles open.",
  },
  Leap: {
    name: "Leap",
    passive: false,
    1: "You can jump up to 30’ at a time.",
  },
  "Liquid Air": {
    name: "Liquid Air",
    passive: false,
    1: "The air becomes thick enough to swim in.",
  },
  "Magic Dampener": {
    name: "Magic Dampener",
    passive: false,
    1: "All nearby magical effects have their effectiveness halved.",
  },
  Manse: {
    name: "Manse",
    passive: false,
    1: "A sturdy, fully furnished cottage appears. You can permit and forbid entry to it at will. Lasts 12 hours.",
  },
  "Marble Madness": {
    name: "Marble Madness",
    passive: false,
    1: "Your pockets are always full of marbles.",
  },
  Masquerade: {
    name: "Masquerade",
    passive: false,
    1: "1 targets appearances and voices become identical to yours.",
  },
  Miniaturize: {
    name: "Miniaturize",
    passive: false,
    1: "You and 1 other touched creatures are reduced to the size of a mouse.",
  },
  "Mirror Image": {
    name: "Mirror Image",
    passive: false,
    1: "1 illusory duplicates of yourself appear under your control.",
  },
  "Mirror Walk": {
    name: "Mirror Walk",
    passive: false,
    1: "A mirror becomes a gateway to another mirror that you have looked into today.",
  },
  Multiarm: {
    name: "Multiarm",
    passive: false,
    1: "You gain 1 extra arms until end of spell.",
  },
  Objectify: {
    name: "Objectify",
    passive: false,
    1: "You become any inanimate object between the size of a grand piano and an apple.",
  },
  "Ooze Form": {
    name: "Ooze Form",
    passive: false,
    1: "You become a living jelly.",
  },
  Pacify: {
    name: "Pacify",
    passive: false,
    1: "1 creatures have a sudden aversion to violence.",
  },
  "Phantom Coach": {
    name: "Phantom Coach",
    passive: false,
    1: "A ghostly coach appears until end of spell. It moves unnaturally fast over any terrain, even water.",
  },
  Phobia: {
    name: "Phobia",
    passive: false,
    1: "1 creatures are terrified of an object of your choice.",
  },
  "Primeval Surge": {
    name: "Primeval Surge",
    passive: false,
    1: "A mundane animal grows to the size of an elephant and is enraged.",
  },
  Psychometry: {
    name: "Psychometry",
    passive: false,
    1: "The system answers 1 yes or no questions about a touched object.",
  },
  Pull: {
    name: "Pull",
    passive: false,
    1: "An object of any size is pulled 30’ directly towards you with the strength of 2 men. Lasts for one round.",
  },
  Push: {
    name: "Push",
    passive: false,
    1: "An object of any size is pushed 30’ directly away from you with the strength of 2 men. Lasts for one round.",
  },
  "Raise Spirit": {
    name: "Raise Spirit",
    passive: false,
    1: "The spirit of a dead body manifests and may choose to answer questions.",
  },
  "Read Mind": {
    name: "Raise Spirit",
    passive: false,
    1: "You hear the surface thoughts of creatures.",
  },
  Repel: {
    name: "Repel",
    passive: false,
    1: "2 objects are strongly magnetically repelled from each other if they come within 10 feet.",
  },
  Scry: {
    name: "Scry",
    passive: false,
    1: "You can see through the eyes of a known creature.",
  },
  "Sculpt Elements": {
    name: "Sculpt Elements",
    passive: false,
    1: "All inanimate material behaves like clay in your hands.",
  },
  Shroud: {
    name: "Shroud",
    passive: false,
    1: "1 creatures become invisible until they move",
  },
  Shuffle: {
    name: "Shuffle",
    passive: false,
    1: "Reduces movement speed of a target by 10%.",
  },
  Swap: {
    name: "Swap",
    passive: false,
    1: "2 creatures instantly switch places.",
  },
  Sleep: {
    name: "Sleep",
    passive: false,
    1: "1 creatures fall into a light sleep.",
  },
  "Smoke Form": {
    name: "Smoke Form",
    passive: false,
    1: "Your body becomes living smoke.",
  },
  "Snail Knight": {
    name: "Snail Knight",
    passive: false,
    1: "10 minutes after casting, a knight sitting astride a giant snail rides into view. He is able to answer most questions related to quests and chivalry, and may aid you if he finds you worthy.",
  },
  Sniff: {
    name: "Sniff",
    passive: false,
    1: "You can smell even the faintest traces of scents.",
  },
  Sort: {
    name: "Sort",
    passive: false,
    1: "Inanimate items sort themselves according to categories you set. The categories must be visually verifiable.",
  },
  "Spatial Distortion": {
    name: "Spatial Distortion",
    passive: false,
    1: "A nearby inanimate object no bigger than a bedroom shrinks to the size of an apple.",
  },
  Spectacle: {
    name: "Spectacle",
    passive: false,
    1: "A clearly unreal but impressive illusion of your choice appears, under your control. It may be up to the size of a palace and has full motion and sound.",
  },
  "Spider Climb": {
    name: "Spider Climb",
    passive: false,
    1: "You can climb surfaces like a spider.",
  },
  "Summon Cube": {
    name: "Summon Cube",
    passive: false,
    1: "Once per second, (6 times per round) you may summon or banish 3-foot-wide cubes of earth. New cubes must be affixed to the earth or to other cubes.",
  },
  Swarm: {
    name: "Swarm",
    passive: false,
    1: "You become a swarm of crows, rats, or piranha.",
  },
  Telekinesis: {
    name: "Telekinesis",
    passive: false,
    1: "You may mentally move items.",
  },
  Telepathy: {
    name: "Telepathy",
    passive: false,
    1: "2 creatures can hear each other’s thoughts.",
  },
  Tesser: {
    name: "Tesser",
    passive: false,
    1: "An object disappears and reappears on the ground in a visible, clear area up to 30’ away.",
  },
  "Thaumaturgic Anchor": {
    name: "Thaumaturgic Anchor",
    passive: false,
    1: "Object becomes the target of every spell cast near it.",
  },
  Thicket: {
    name: "Thicket",
    passive: false,
    1: "A thicket of trees and dense brush up to 30’ wide suddenly sprouts up.",
  },
  // These should be deleted from Monad (below)
  "Time Jump": {
    name: "Time Jump",
    passive: false,
    1: "An object jumps 10 minutes into the future.",
  },
  "Time Rush": {
    name: "Time Rush",
    passive: false,
    1: "Time in a nearby area becomes 10 times faster.",
  },
  "Time Slow": {
    name: "Time Slow",
    passive: false,
    1: "Time in a nearby area slows to 10%.",
  },
  // These should be deleted from Monad (above)
  "Transfer Heat": {
    name: "Time Slow",
    passive: false,
    1: "You may transfer heat or cold between two inanimate objects.",
  },
  "True Sight": {
    name: "Time Slow",
    passive: false,
    1: "You see the true nature of your surroundings.",
  },
  Upwell: {
    name: "Upwell",
    passive: false,
    1: "A spring appears and starts gushing seawater.",
  },
  Vision: {
    name: "Vision",
    passive: false,
    1: "You have total control over what a creature sees.",
  },
  "Visual Illusion": {
    name: "Visual Illusion",
    passive: false,
    1: "A silent, immobile, illusion of your choice appears, up to the size of a bedroom.",
  },
  Ward: {
    name: "Ward",
    passive: false,
    1: "A silver circle 30’ across appears on the ground. Choose one thing that cannot cross it: Living creatures, dead creatures, non-human creatures, projectiles or metal.",
  },
  Web: {
    name: "Web",
    passive: false,
    1: "Your hands can shoot thick webbing.",
  },
  "Wizard Lock": {
    name: "Wizard Lock",
    passive: false,
    1: "A door is magically sealed.",
  },
  "Wizard Mark": {
    name: "Wizard Mark",
    passive: false,
    1: "Your finger can shoot a stream of brightly-colored paint. This paint is only visible to wizards, and can be seen at any distance, even through solid objects. Fades after L days.",
  },
  Agile: {
    name: "Agile",
    passive: true,
    1: "Dexterity +1",
  },
  "Beast Combo Strike": {
    name: "Beast Combo Strike",
    passive: false,
    1: "Both you and your Beast companion attack the same target.",
  },
  "Beast Intercept": {
    name: "Beast Intercept",
    passive: false,
    1: "Your best intercepts the target.",
  },
  "Blessed Divine Smite": {
    name: "Blessed Divine Smite",
    passive: false,
    1: "Your Divine Smite strikes are further empowered by your deity’s grace. ",
  },
  "Best Defense is a Strong Offense": {
    name: "Best Defense is a Strong Offense",
    passive: false,
    1: "On the first strike you receive your defense is used to damage the target instead of reducing damage.",
  },
  "Blinding Strike": {
    name: "Blinding Strike",
    passive: false,
    1: "Your weapon strike momentary blinds the target.",
  },
  "Bloodline of Fire": {
    name: "Bloodline of Fire",
    passive: true,
    1: "Fire +1%.",
  },
  Bloodhunt: {
    name: "Bloodhunt",
    passive: false,
    1: "You can sense blood from far away.",
    2: "When your target is wounded you gain +1 to a random stat.",
  },
  "Born Sneaky": {
    name: "Born Sneaky",
    passive: true,
    1: "Dexterity +1",
  },
  "Cheap Shot": {
    name: "Cheap Shot",
    passive: false,
    1: "Can only be use when a target is not targeting you.",
  },
  "Built like a": {
    name: "Built like a",
    passive: true,
    1: "You are a big strong target. +1 Strength, -1 Dexterity.",
  },
  Cleave: {
    name: "Cleave",
    passive: false,
    1: "The follow through from your melee weapon strikes.",
  },
  "Commanding Presence": {
    name: "Commanding Presence",
    passive: true,
    1: "Command points +1 for every 10 Charisma.",
  },
  Conservator: {
    name: "Conservator",
    passive: true,
    1: "You have the ability to identify magic items. (Improved inspect)",
  },
  "Dragonborn Heritage": {
    name: "Dragonborn Heritage",
    passive: true,
    1: "Your lineage allows you recover from your wounds faster than normal.",
  },
  "Great Fortitude": {
    name: "Great Fortitude",
    passive: true,
    1: "You are extraordinarily healthier than normal.",
  },
  "Greater Arcane Recovery": {
    name: "Greater Arcane Recovery",
    passive: true,
    1: "You can regain higher magical energy than normal.",
  },
  "Improved Arcane Recovery": {
    name: "Improved Arcane Recovery",
    passive: true,
    1: "You can regain higher magical energy than normal.",
  },
  "Favored Enemy": {
    name: "Favored Enemy",
    passive: true,
    1: "You know how to exploit your favored enemies’ vulnerabilities in combat.",
  },
  Hamstring: {
    name: "Hamstring",
    passive: false,
    1: "You slash the tendons behind a creature’s leg.",
  },
  "Impairing Critical": {
    name: "Impairing Critical",
    passive: false,
    1: "Your critical blows are so fierce they can cause temporary debilitating effects.",
  },
  Aura: {
    name: "Aura",
    passive: true,
    1: "You can now produce an Aura.",
  },
  "Cloak of Shadows": {
    name: "Cloak of Shadows",
    passive: false,
    1: "Wraps you with the shadows around you making you harder to detect.",
  },
  "Improved Dodge": {
    name: "Improved Dodge",
    passive: true,
    1: "You can attack while dodging.",
  },
  "Improved Gift of Lightning": {
    name: "Improved Gift of Lightning",
    passive: true,
    1: "Lightning +2%.",
  },
  "Misty Escape": {
    name: "Misty Escape",
    passive: false,
    1: "Mist appears around you.",
  },
  "Improved Natural Recovery": {
    name: "Improved Natural Recovery",
    passive: true,
    1: "Your natural recovery is increased.",
  },
  "Turn the Unholy": {
    name: "Turn the Unholy",
    passive: false,
    1: "???",
  },
  "Turn Undead": {
    name: "Turn Undead",
    passive: false,
    1: "Undead species will be damaged in an area around you.",
  },
  "Turn the Faithless": {
    name: "Turn the Faithless",
    passive: false,
    1: "Those without Faith will turn around.",
  },
  "Uncanny Dodge": {
    name: "Uncanny Dodge/evasion",
    passive: true,
    1: "Sometimes hits did not land on you.",
    2: "Target character's dodging is increased by 90% and your Movement Speed is increased by 20%.",
  },
  Indomitable: {
    name: "Indomitable",
    passive: true,
    1: "+1 strength.",
  },
  "Last Stand": {
    name: "Last Stand",
    passive: false,
    1: "For the next 3 seconds you cannot die.",
  },
  "Natural Diplomat": {
    name: "Natural Diplomat",
    passive: true,
    1: "+1 Charisma.",
  },
  "Nature Sense": {
    name: "Nature Sense",
    passive: true,
    1: "+1 Sense outside of settlements.",
  },
  Poisoncraft: {
    name: "Poisoncraft",
    passive: true,
    1: "Poison +1%.",
  },
  Rejuvenate: {
    name: "Rejuvenate",
    passive: false,
    1: "Targets HP is recovered by 10% of their max HP over the next 5 seconds.",
  },
  "Shadow Strike": {
    name: "Shadow Strike",
    passive: false,
    1: "Striking from a shadow, dealing +50% damage to unaware targets.",
  },
  Stealth: {
    name: "Stealth",
    passive: false,
    1: "Become invisible for a short period of time, as long as you do not attack anything or take damage.",
  },
  "Sunlight Adaptation": {
    name: "Sunlight Adaptation",
    passive: true,
    1: "All stats +1 in sunlight!.",
    2: "Your MP recovers slightly faster in sunlight.",
    3: ".",
  },
  "Tool Focus": {
    name: "Tool Focus",
    passive: true,
    1: "+1 tool proficiency.",
  },
  "Vicious Critical": {
    name: "Vicious Critical",
    passive: true,
    1: "Your critical can critical!.",
  },
  Witchcraft: {
    name: "Witchcraft",
    passive: true,
    1: "Potions are 10% better.",
  },
  Midas: {
    name: "Midas",
    passive: true,
    1: "Opponents always drop at least one coin.",
    2: "Coins gained +1%.",
    3: "Every new town you visit, +100 coins.",
    4: "Donkey Ears.",
  },
  "Breathing Bubbles": {
    passive: false,
    name: "Breathing Bubbles",
    1: "Wraps bubbles of air around the targets heads.",
  },
  Fortify: {
    passive: false,
    name: "Fortify",
    1: "Increases your Endurance for a period of time.",
  },
  Impalement: {
    passive: false,
    name: "Impalement",
    1: "Drives spikes from the ground.",
  },
  "Summon Artillery Plant": {
    name: "Summon Artillery Plant",
    passive: false,
    1: "Summons and artillery plant.",
  },
  "Acid Spores": {
    name: "Acid Spores",
    passive: false,
    1: "Shoots a group of acid spores in the general direction of the target.",
  },
  "Corrosive Spray": {
    name: "Corrosive Spray",
    passive: false,
    1: "Shoots a spray of corrosive liquid.",
  },
  "Throw Dust": {
    name: "Throw Dust",
    passive: false,
    1: "Dust is thrown from your hand at the target.",
  },
  "Living Wall": {
    name: "Living Wall",
    passive: false,
    1: "A wall of living plant tentacles blocks the way.",
  },
  "Worm Tremor": {
    name: "Worm Tremor",
    passive: false,
    1: "",
  },
  "Dust Blast": {
    name: "Dust Blast",
    passive: false,
    1: "Dust is blasted in all directions",
  },
  "Armour of Frost": {
    name: "Armour of Frost",
    passive: false,
    1: "Frost coats the targets body, slowing it down but increasing it's endurance.",
  },
  "Healing Ritual": {
    name: "Healing Ritual",
    passive: false,
    1: "Healing on one target is increased.",
    2: "Healing in this area is increased.",
  },
  "Hail Storm": {
    name: "Hail Storm",
    passive: false,
    1: "Balls of ice fall from the sky.",
  },
  Rain: {
    name: "Rain",
    passive: false,
    1: "It starts to gently rain.",
  },
  Restoration: {
    name: "Restoration",
    passive: false,
    1: "Restores some HP to the target.",
    2: "Restores some Stamina to the target.",
    3: "Cures a single status effect.",
  },
  "Winter Blast": {
    name: "Winter Blast",
    passive: false,
    1: "A mixture of ice and snow blasts the area.",
  },
  "Steam Lance": {
    name: "Steam Lance",
    passive: false,
    1: "A lance of steam is blasted at the target.",
  },
  " Global Cooling": {
    name: " Global Cooling",
    passive: false,
    1: "Everything gets much colder.",
  },
  "Soothing Cold": {
    name: "Soothing Cold",
    passive: false,
    1: "",
  },
  "Ice Fan": {
    name: "Ice Fan",
    passive: false,
    1: "Ice is shot out in an arc before you.",
  },
  "Deep Freeze": {
    name: "Deep Freeze",
    passive: false,
    1: "",
  },
  "Cryogenic Stasis": {
    name: "Cryogenic Stasis",
    passive: false,
    1: "",
  },
  "Hail Strike": {
    name: "Hail Strike",
    passive: false,
    1: "Hail is shot at a target.",
  },
  "Arcane Stitch": {
    name: "Arcane Stitch",
    passive: false,
    1: "",
  },
  "Mass Cryotherapy": {
    name: "Mass Cryotherapy",
    passive: false,
    1: "",
  },
  Cryotherapy: {
    name: "Cryotherapy",
    passive: false,
    1: "",
  },
  "Healing Tears": {
    name: "Healing Tears",
    passive: false,
    1: "",
  },
  "Mass Cleanse Wounds": {
    name: "Mass Cleanse Wounds",
    passive: false,
    1: "",
  },
  "Cleanse Wounds": {
    name: "Cleanse Wounds",
    passive: false,
    1: "",
  },
  "Ice Breaker": {
    name: "Ice Breaker",
    passive: false,
    1: "",
  },
  "Blood Sucker": {
    name: "Blood Sucker",
    passive: false,
    1: "Suck the blood from a target to restore HP.",
  },
  "Blood Absorb": {
    name: "Blood Absorb",
    passive: false,
    1: "Blood is taken from a target to restore your HP.",
  },
  "Blood Aura": {
    name: "Blood Aura",
    passive: false,
    1: "Blood is taken from around you to restore your HP.",
  },
  "Decaying Touch": {
    name: "Decaying Touch",
    passive: false,
    1: "",
  },
  "Mosquito Swarm": {
    name: "Mosquito Swarm",
    passive: false,
    1: "A swam of mosquitos bite the target.",
  },
  "Raining blood": {
    name: "Raining blood",
    passive: false,
    1: "It starts to rain blood.",
  },
  "Shackles of Pain": {
    name: "Shackles of Pain",
    passive: false,
    1: "Mark a target so that it will receive all of the damage you receive.",
  },
  Infect: {
    name: "Infect",
    passive: false,
    1: "",
  },
  "Silencing Stare": {
    name: "Silencing Stare",
    passive: false,
    1: "",
  },
  "Totems of the Necromancer": {
    name: "Totems of the Necromancer",
    passive: false,
    1: "",
  },
  "Last Rites": {
    name: "Last Rites",
    passive: false,
    1: "",
  },
  "Grasp of the Starved": {
    name: "Grasp of the Starved",
    passive: false,
    1: "Undead hands rise from underground, attacking characters that stand in blood surfaces and clouds. Each target can become Crippled.",
  },
  "Bone Cage": {
    name: "Bone Cage",
    passive: false,
    1: "",
  },
  "Black Shroud": {
    name: "Black Shroud",
    passive: false,
    1: "Create a cloud of smoke in an area, setting Suffocating and Blind on all within.",
  },
  "Death Wish": {
    name: "Death Wish",
    passive: false,
    1: "",
  },
  "Raise Bone Widow": {
    name: "Raise Bone Widow",
    passive: false,
    1: "",
  },
  "Blood Storm": {
    name: "Blood Storm",
    passive: false,
    1: "The sky weeps bloody tears. Bolts of coagulated blood fall on targets in the area, setting Disease and Decaying. Turns all water in the area into blood.",
  },
  "Raise Bloated Corpse": {
    name: "Raise Bloated Corpse",
    passive: false,
    1: "",
  },
  "Living on the Edge": {
    name: "Living on the Edge",
    passive: false,
    1: "",
  },
  "Summon Small Bonecrawler": {
    name: "Summon Small Bonecrawler",
    passive: false,
    1: "",
  },
  "Summon Multiple Skeleton Warriors": {
    name: "Summon Multiple Skeleton Warriors",
    passive: false,
    1: "",
  },
  "Summon Skeleton Warrior": {
    name: "Summon Skeleton Warrior",
    passive: false,
    1: "",
  },
  "Raise Skeleton Warrior": {
    name: "Raise Skeleton Warrior",
    passive: false,
    1: "",
  },
  "Summon Multiple Skeleton Archers": {
    name: "Summon Multiple Skeleton Archers",
    passive: false,
    1: "",
  },
  "Deaths Touch": {
    name: "Deaths Touch",
    passive: false,
    1: "",
  },
  "Stare Of The Overlord": {
    name: "Stare Of The Overlord",
    passive: false,
    1: "",
  },
  "Grasp Heart": {
    name: "Grasp Heart",
    passive: false,
    1: "Pulls the heart out of a weakened target.",
  },
  "Bone Rejection": {
    name: "Bone Rejection",
    passive: false,
    1: "The targets body rejects their own bones and becomes a blob.",
  },
  "Spectral Wave": {
    name: "Spectral Wave",
    passive: false,
    1: "",
  },
  "Bone Armor": {
    name: "Bone Armor",
    passive: false,
    1: "Armor of bones covers you, raising your endurance.",
  },
  "Negative Burst": {
    name: "Negative Burst",
    passive: false,
    1: "",
  },
  "Raise Elder Lich": {
    name: "Raise Elder Lich",
    passive: false,
    1: "An Elder Lich is summoned.",
  },
  "Deaths Arrival": {
    name: "Deaths Arrival",
    passive: false,
    1: "",
  },
  "Summon Skeleton Archer": {
    name: "Summon Skeleton Archer",
    passive: false,
    1: "A weak skeleton archer is summoned",
  },
  "Raise Skeleton Archer": {
    name: "Raise Skeleton Archer",
    passive: false,
    1: "Using a corpse, raise up a weak skeleton archer.",
  },
  "Raise Death Knight": {
    name: "Raise Death Knight",
    passive: false,
    1: "Using a corpse, raise up a death knight.",
  },
  "Aura of Despair": {
    name: "Aura of Despair",
    passive: false,
    1: "Has a chance of causing Fear.",
    2: "Has a chance of causing Panic.",
    3: "Has a chance of causing Confusion.",
    4: "Has a chance of causing Insanity.",
    5: "Has a chance of causing Instant Death.",
  },
  "Rabbit Ears": {
    name: "Rabbit Ears",
    passive: false,
    1: "Rabbit ears grow from you head, along with the perks of that.",
  },
  "Magic Arrow": {
    name: "Magic Arrow",
    passive: false,
    1: "Shoot an arrow of mana.",
  },
  "Summon Undead": {
    name: "Summon Undead",
    passive: false,
    1: "Summon a single undead.",
  },
  "Acid Arrow": {
    name: "Acid Arrow",
    passive: false,
    1: "Shoot an arrow of acid.",
  },
  Message: {
    name: "Message",
    passive: false,
    1: "Send a message instantly to someone else.",
  },
  Fireball: {
    name: "Fireball",
    passive: false,
    1: "Shoots a ball of fire directly in front of you.",
    2: "Shoots a ball of fire directly in front of you.",
  },
  Fly: {
    name: "Fly",
    passive: false,
    1: "The user can now fly.",
  },
  Iceball: {
    name: "Iceball",
    element: "ice",
    passive: false,
    1: "Shoots a ball of ice.",
    2: "Shoots a larger ball of ice.",
  },
  Lightning: {
    name: "Lightning",
    passive: false,
    1: "Lightning appears.",
  },
  "Lopsided Duel": {
    name: "Lopsided Duel",
    passive: false,
    1: "",
  },
  Slow: {
    name: "Slow",
    passive: false,
    1: "Reduces a targets speed.",
  },
  "Dragon Lightning": {
    name: "Dragon Lightning",
    passive: false,
    1: "Shoots lighting in the form of chinese dragons.",
  },
  "Chain Dragon Lightning": {
    name: "Chain Dragon Lightning",
    passive: false,
    1: "",
  },
  "Create Item": {
    name: "Create Item",
    passive: false,
    1: "",
  },
  "Focus Magic": {
    name: "Focus Magic",
    passive: false,
    1: "Increases magic stat for a moment",
  },
  Teleportation: {
    name: "Teleportation",
    passive: false,
    1: "Teleports you to a predetermined location.",
  },
  "Hell Flame": {
    name: "Hell Flame",
    passive: false,
    1: "Shoots out a spark of hell flame.",
  },
  Napalm: {
    name: "Napalm",
    passive: false,
    1: "Drop Napalm on an area.",
  },
  "Undeath Army": {
    name: "Undeath Army",
    passive: false,
    1: "Summons an army of the undead.",
  },
  "Astral Smite": {
    name: "Astral Smite",
    passive: false,
    1: "Smite a target wit the power of the stars.",
  },
  Death: {
    name: "Death",
    passive: false,
    1: "Target is hit with death.",
  },
  "Dimensional Lock": {
    name: "Dimensional Lock",
    passive: false,
    1: "Target cannot teleport.",
  },
  "Energy Drain": {
    name: "Energy Drain",
    passive: false,
    1: "Drains the mana and stamina of a target.",
  },
  Explosion: {
    name: "Explosion",
    passive: false,
    1: "Causes an explosion in an area.",
  },
  "Bless of Titania": {
    name: "Bless of Titania",
    passive: false,
    1: "",
  },
  "Call Thunder": {
    name: "Call Thunder",
    passive: false,
    1: "Thunder clouds form in the distance coming to you.",
  },
  Rejection: {
    name: "Rejection",
    passive: false,
    1: "Can be used to reject un-rejectable quests.",
  },
  "Lead of Yatagarasu": {
    name: "Lead of Yatagarasu",
    passive: false,
    1: "",
  },
  "Nuclear Blast": {
    name: "Nuclear Blast",
    passive: false,
    note: "leaves behind radiation.",
    1: "Causes a nuclear blast in an area.",
  },
  "Perfect Unknowable": {
    name: "Perfect Unknowable",
    passive: false,
    1: "",
  },
  "Temporal Stasis": {
    name: "Temporal Stasis",
    passive: false,
    1: "",
  },
  "True Death": {
    name: "True Death",
    passive: false,
    1: "Causes death to a target, even one immune to death.",
  },
  "Vermilion Nova": {
    name: "Vermilion Nova",
    passive: false,
    1: "",
  },
  Armageddon: {
    name: "Armageddon",
    passive: false,
    1: "",
  },
  "Body of Effulgent Beryl": {
    name: "Body of Effulgent Beryl",
    passive: false,
    1: "",
  },
  "Control Amnesia": {
    name: "Control Amnesia",
    passive: false,
    1: "",
  },
  "Create Fortress": {
    name: "Create Fortress",
    passive: false,
    1: "Create a fortress using the surrounding materials.",
  },
  "Meteor Fall": {
    name: "Meteor Fall",
    passive: false,
    1: "A meteor falls....Somewhere over there...",
  },
  "Reality Slash": {
    name: "Reality Slash",
    passive: false,
    1: "",
  },
  "Time Stop": {
    name: "Time Stop",
    passive: false,
    1: "",
  },
  "Ultimate Disturb": {
    name: "Ultimate Disturb",
    passive: false,
    1: "",
  },
  Uriel: {
    name: "Uriel",
    passive: false,
    1: "",
  },
  Absorption: {
    name: "Absorption",
    passive: false,
    1: "",
  },
  "Anti-Life Cocoon": {
    name: "Anti-Life Cocoon",
    passive: false,
    1: "Wraps a target in a s",
  },
  "Anti-Information Magic Wall": {
    name: "Anti-Information Magic Wall",
    passive: false,
    1: "Your information is blocked from others reading it.",
  },
  "Black Hole": {
    name: "Black Hole",
    passive: false,
    1: "A black hole appears sucking everything inside.",
  },
  "Breath Ward": {
    name: "Breath Ward",
    passive: false,
    1: "Reduces the damage from breath attacks.",
  },
  Burst: {
    name: "Burst",
    passive: false,
    1: "",
  },
  "Charm Person": {
    name: "Charm Person",
    passive: false,
    1: "Charms a single person.",
  },
  Invisibility: {
    name: "Invisibility",
    passive: false,
    1: "Makes you invisible!",
  },
  "Complete Vision": {
    name: "Complete Vision",
    passive: false,
    1: "",
  },
  "Conflict Karma": {
    name: "Conflict Karma",
    passive: false,
    1: "",
  },
  "Cry of the Banshee": {
    name: "Cry of the Banshee",
    passive: false,
    1: "",
  },
  "Cure Poison": {
    name: "Cure Poison",
    passive: false,
    1: "Cures a single instance of poison in the target.",
  },
  "Dark Wing": {
    name: "Dark Wing",
    passive: false,
    1: "",
  },
  "Delay Teleportation": {
    name: "Delay Teleportation",
    passive: false,
    1: "",
  },
  "Detect Magic": {
    name: "Detect Magic",
    passive: false,
    1: "",
  },
  "Discern Enemy": {
    name: "Discern Enemy",
    passive: false,
    1: "",
  },
  "Distant Vision": {
    name: "Distant Vision",
    passive: false,
    1: "",
  },
  Dominate: {
    name: "Dominate",
    passive: false,
    1: "",
  },
  "Draconic Power": {
    name: "Draconic Power",
    passive: false,
    1: "",
  },
  Dragonbane: {
    name: "Dragonbane",
    passive: false,
    1: "",
  },
  "Drifting Master Mine": {
    name: "Drifting Master Mine",
    passive: false,
    1: "",
  },
  "Explosive Land Mine": {
    name: "Explosive Land Mine",
    passive: false,
    1: "",
  },
  "False Data: Life": {
    name: "False Data: Life",
    passive: false,
    1: "",
  },
  "False Data: Mana": {
    name: "False Data: Mana",
    passive: false,
    1: "",
  },
  "Field of Force": {
    name: "Field of Force",
    passive: false,
    1: "",
  },
  "Floating Eye": {
    name: "Floating Eye",
    passive: false,
    1: "",
  },
  Freedom: {
    name: "Freedom",
    passive: false,
    1: "",
  },
  Gate: {
    name: "Gate",
    passive: false,
    1: "",
  },
  "Gravity Maelstrom": {
    name: "Gravity Maelstrom",
    passive: false,
    1: "",
  },
  "Break Item": {
    name: "Break Item",
    passive: false,
    1: "",
  },
  "Full Potential": {
    name: "Full Potential",
    passive: false,
    1: "",
  },
  Hardening: {
    name: "Hardening",
    passive: false,
    1: "",
  },
  Lethal: {
    name: "Lethal",
    passive: false,
    1: "",
  },
  Luck: {
    name: "Luck",
    passive: false,
    1: "",
  },
  "Magic Accumulation": {
    name: "Magic Accumulation",
    passive: false,
    1: "",
  },
  "Magic Seal": {
    name: "Magic Seal",
    passive: false,
    1: "",
  },
  "Magic Shield": {
    name: "Magic Shield",
    passive: false,
    1: "",
  },
  "Magic Vision": {
    name: "Magic Vision",
    passive: false,
    1: "",
  },
  Resistance: {
    name: "Resistance",
    passive: false,
    1: "",
  },
  "Heavenly Aura": {
    name: "Heavenly Aura",
    passive: false,
    1: "",
  },
  "Hold of Ribs": {
    name: "Hold of Ribs",
    passive: false,
    1: "",
  },
  Indomitability: {
    name: "Indomitability",
    passive: false,
    1: "",
  },
  "Infinity Wall": {
    name: "Infinity Wall",
    passive: false,
    1: "",
  },
  "Life Essence": {
    name: "Life Essence",
    passive: false,
    1: "",
  },
  "Magic Boost": {
    name: "Magic Boost",
    passive: false,
    1: "",
  },
  "Magic Casters Blessing": {
    name: "Magic Casters Blessing",
    passive: false,
    1: "",
  },
  "Magic Ward: Holy": {
    name: "Magic Ward: Holy",
    passive: false,
    1: "",
  },
  "Mana Essence": {
    name: "Mana Essence",
    passive: false,
    1: "",
  },
  "Mantle of Chaos": {
    name: "Mantle of Chaos",
    passive: false,
    1: "",
  },
  "Dominate Person": {
    name: "Dominate Person",
    passive: false,
    1: "",
  },
  "Mass fly": {
    name: "Mass fly",
    passive: false,
    1: "",
  },
  "Mass Hold Species": {
    name: "Mass Hold Species",
    passive: false,
    1: "",
  },
  "Nuclear Mine": {
    name: "Nuclear Mine",
    passive: false,
    1: "",
  },
  "Obsidian Sword": {
    name: "Obsidian Sword",
    passive: false,
    1: "",
  },
  Paralysis: {
    name: "Paralysis",
    passive: false,
    1: "",
  },
  "Paranormal Intuition": {
    name: "Paranormal Intuition",
    passive: false,
    1: "",
  },
  "Penetrate Up": {
    name: "Penetrate Up",
    passive: false,
    1: "",
  },
  "Perfect Warrior": {
    name: "Perfect Warrior",
    passive: false,
    1: "",
  },
  "Ray of Negative Energy": {
    name: "Ray of Negative Energy",
    passive: false,
    1: "",
  },
  "Remote Viewing": {
    name: "Remote Viewing",
    passive: false,
    1: "",
  },
  "Repel Undeath": {
    name: "Repel Undeath",
    passive: false,
    1: "A spell that creates a barrier to ward off the low-level undead.",
  },
  "Resistance from Natural Weapons": {
    name: "Resistance from Natural Weapons",
    passive: false,
    1: "",
  },
  "See Through": {
    name: "See Through",
    passive: false,
    1: "",
  },
  "Sense Enemy": {
    name: "Sense Enemy",
    passive: false,
    1: "",
  },
  "Sensor Boost": {
    name: "Sensor Boost",
    passive: false,
    1: "",
  },
  "Sharks Cyclone": {
    name: "Sharks Cyclone",
    passive: false,
    1: "A spell that invokes a tornado, with sharks inside.",
  },
  Shockwave: {
    name: "Shockwave",
    passive: false,
    1: "",
  },
  "Thousand Bone Lance": {
    name: "Thousand Bone Lance",
    passive: false,
    1: "A spell that throws an uncountable amount of bone spears at the target.",
  },
  "True Dark": {
    name: "True Dark",
    passive: false,
    1: "Creates a dark space where lights do not shine.",
  },
  "Undeath Slave Sight": {
    name: "Undeath Slave Sight",
    passive: false,
    1: ": A spell used on specific kinds of undead summons. Allowing you to see through that undead's eye sockets.",
  },
  "Wall of Protection from Arrows": {
    name: "Wall of Protection from Arrows",
    passive: false,
    1: "",
  },
  "Wall of Skeletons": {
    name: "Wall of Skeletons",
    passive: false,
    1: "Creates a wall of skeletons that can move and fight to a certain degree.",
  },
  "Acid Immunity": {
    name: "Acid Immunity",
    passive: false,
    1: "",
  },
  "Arcane Vision": {
    name: "Arcane Vision",
    passive: false,
    1: "",
  },
  "Black Halo": {
    name: "Black Halo",
    passive: false,
    1: "",
  },
  "Dark Soul": {
    name: "Dark Soul",
    passive: false,
    1: "",
  },
  "Dark Wisdom": {
    name: "Dark Wisdom",
    passive: false,
    1: "",
  },
  "Despair Aura": {
    name: "Despair Aura",
    passive: false,
    1: "",
  },
  "Electric Immunity": {
    name: "Electric Immunity",
    passive: false,
    1: "",
  },
  "Ice Immunity": {
    name: "Ice Immunity",
    passive: false,
    1: "",
  },
  "Touch of Undeath": {
    name: "Touch of Undeath",
    passive: false,
    1: "",
  },
  "Negative Protection": {
    name: "Negative Protection",
    passive: false,
    1: "",
  },
  "Slashing Damage Resistance": {
    name: "Slashing Damage Resistance",
    passive: false,
    1: "",
  },
  "Piercing Damage Resistance": {
    name: "Piercing Damage Resistance",
    passive: false,
    1: "",
  },
  "Status Damage": {
    name: "Status Damage",
    passive: false,
    1: "",
  },
  "Turn Resistance": {
    name: "Turn Resistance",
    passive: false,
    1: "",
  },
  "Undead Blessing": {
    name: "Undead Blessing",
    passive: false,
    1: "",
  },
  "Undead Lieutenant": {
    name: "Undead Lieutenant",
    passive: false,
    1: "",
  },
  "Unholy Protection": {
    name: "Unholy Protection",
    passive: false,
    1: "",
  },
  "Biological Penalties Resistance": {
    name: "Biological Penalties Resistance",
    passive: false,
    1: "",
  },
  "Bludgeoning Vulnerability": {
    name: "Bludgeoning Vulnerability",
    passive: false,
    1: "",
  },
  "Critical Hit Immunity": {
    name: "Critical Hit Immunity",
    passive: false,
    1: "Reduces the chances of someone landing a critical hit on you.",
  },
  "Dark Vision": {
    name: "Dark Vision",
    passive: false,
    1: "Can see in the dark! Partly...",
  },
  "Death Immunity": {
    name: "Death Immunity",
    passive: false,
    1: "",
  },
  "Disease Immunity": {
    name: "Disease Immunity",
    passive: false,
    1: "",
  },
  "Weak To Fire": {
    name: "Weak To Fire",
    passive: true,
    1: "",
  },
  "Eating, Drinking, and Breathing are Unnecessary": {
    name: "Eating, Drinking, and Breathing are Unnecessary",
    passive: false,
    1: "",
  },
  "Energy Drain Immunity": {
    name: "Energy Drain Immunity",
    passive: false,
    1: "",
  },
  "Good, Light and Holy Vulnerability": {
    name: "Good, Light and Holy Vulnerability",
    passive: false,
    1: "",
  },
  "Good and Holy Consecrated Areas Vulnerability": {
    name: "Good and Holy Consecrated Areas Vulnerability",
    passive: false,
    1: "",
  },
  "Mind-affecting Immunity": {
    name: "Mind-affecting Immunity",
    passive: false,
    1: "",
  },
  "Necromancy Resistance": {
    name: "Necromancy Resistance",
    passive: false,
    1: "",
  },
  "Paralysis Immunity": {
    name: "Paralysis Immunity",
    passive: false,
    1: "",
  },
  "Physical Penalty Resistance": {
    name: "Physical Penalty Resistance",
    passive: false,
    1: "",
  },
  "Poisoning Immunity": {
    name: "Poisoning Immunity",
    passive: false,
    1: "",
  },
  "Recover by Negative Energy": {
    name: "Recover by Negative Energy",
    passive: false,
    1: "",
  },
  "Sleep Immunity": {
    name: "Sleep Immunity",
    passive: false,
    1: "",
  },
  "Rite of Darkness": {
    name: "Rite of Darkness",
    passive: false,
    1: "",
  },
  "Undead Aura": {
    name: "Undead Aura",
    passive: false,
    1: "",
  },
  "Undead Domination": {
    name: "Undead Domination",
    passive: false,
    1: "",
  },
  "Undead Strengthening": {
    name: "Undead Strengthening",
    passive: false,
    1: "",
  },
  "Blood Magic": {
    name: "Blood Magic",
    passive: false,
    1: "For as long as this mode is active, the caster sacrifices health to power spells instead of expending mana, but effects that heal the blood mage are much less effective than normal.",
  },
  "Blood Sacrifice": {
    name: "Blood Sacrifice",
    passive: false,
    1: "The blood mage sucks the life-force from an ally, healing the caster but potentially killing the ally. This healing is not affected by the healing penalty of Blood Magic.",
  },
  "Blood Wound": {
    name: "Blood Wound",
    passive: false,
    1: "The blood of all hostile targets in the area boils within their veins, inflicting severe damage. Creatures without blood are immune.",
  },
  "Blood Control": {
    name: "Blood Control",
    passive: false,
    1: "The blood mage forcibly controls the target’s blood, making the target an ally of the caster. If the target resists, it still takes great damage from the manipulation of its blood. Creatures without blood are immune.",
  },
  "Blood Dominion": {
    name: "Blood Dominion",
    passive: false,
    1: ".",
  },
  "Blood Domination": {
    name: "Blood Domination",
    passive: false,
    1: ".",
  },
  "Vampire Eyes": {
    name: "Vampire Eyes",
    passive: true,
    1: "A skill possessed by all vampires, their blood lust (Health) is shown by the color of their eyes.",
  },
  "Blood Hardening": {
    name: "Blood Hardening",
    passive: false,
    1: "A form of Blood control. Blood thickens and becomes more impervious to damage, and becomes like Armor. Reduce the amount of damage taken in an attack and able to be moved around the body freely to varying degrees base on mastery of control.",
  },
  "Blood Swipe": {
    name: "Blood Swipe",
    passive: false,
    1: "A skill that will fire out a red line of energy from the user's hands in the shape of a claw. To use the skill the user must use their own blood causing -1 HP per Blood swipe.",
  },
  "Blood Expand": {
    name: "Blood Expand",
    passive: false,
    1: "A skill that vampires don't normally use. After firing off the blood bullet, use an immense amount of control to force the shot to remain inside the victim. It had entered a part of their body but never left it.  The blood bullet was a condensed form of aura, and through blood control, one was able to make the blood bullet inside the victims body expand and go wild. Destroying a part of a victim from the inside out.",
  },
  "Blood Barrage": {
    name: "Blood Barrage",
    passive: false,
    1: "",
  },
  "Blood Bullet": {
    name: "Blood Bullet",
    passive: false,
    1: "One fifth of the user's health will be used to create a powerful shot of blood from a finger. The finger will no longer be able to be used until the blood has been replenished.",
    3: "One fifth of the user's current health will be used to create a powerful shot of blood from a finger. Blood bullet is no longer available on the used finger for twenty-four hours regardless if the fingers were healed.",
  },
  "Blood Bank": {
    name: "Blood Bank",
    passive: false,
    1: "will allow user to store up to a 300 milliliters of blood in user reserve. The blood bank will automatically be used to heal the user if HP drops below 5 unless suppressed. Every 10 milliliters of blood will be used to restore 5 HP of the user. User may also use that blood bank to consume blood at any time for his own personal pleasure. Consuming 100 milliliters of blood gives the quickest and most efficient results when healing completely.",
  },
  "Blood Wall": {
    name: "Blood Wall",
    passive: false,
    1: "A barrier is raised in front of the user, using the user's own blood. The wall's strength is dependent on how much blood is being used.",
  },
  "Blood Spray": {
    name: "Blood Spray",
    passive: false,
    1: "The user's palm must be open to perform this skill. From the user's palm, a spray of blood pellets will be released spreading out covering a wide range, The closer the attack is to its target the more damage it will do. Cost -5 HP. Blood spray can be used on multiple targets, but lacks penetration ability, therefore, expressed in the combination skill: Blood Hammer.",
  },
  "Hammer Strike": {
    name: "Hammer Strike",
    passive: false,
    1: "Power fist skill of short burst attack. It was an attack that focused on the inside, an internal attack, the perfect counter to those with abilities who hardened or transformed their bodies.",
  },
  "Blood Hammer": {
    name: "Blood Hammer",
    passive: false,
    1: "Blood Hammer is a combination skill of Blood Spray and Hammer Strike.",
  },
  "Blood Hammer Drill": {
    name: "Blood Hammer Drill",
    passive: false,
    1: "Blood Hammer Drill is a combination skill of Blood Spray, Hammer Strike, and blood control. While preforming the hammer strike and using blood control to rotate a blood spray like a drill to penetrate an opponent.",
  },
  "Blood Crescent Kick": {
    name: "Blood Crescent Kick",
    passive: false,
    1: "When using the skill while performing different types of kicks. A red line of blood aura in the shape of a crescent will be made. The attack carries a distance of ten meters but the aura will get smaller and weaker the further it travels. Costs 2 HP for every kick.",
  },
  Daze: {
    name: "Daze",
    passive: false,
    1: "This skill has no cost and can be used on the opponent to stun them between 0.2 seconds and 0.5 seconds at a time. Must have direct eye contact with the opponent. The skill has a chance of failing, depending on the strength of the enemy and on the user's charisma points. The more the skill is used on an opponent the higher chance they have off resisting.",
  },
  "Phantom Punch": {
    name: "Phantom Punch",
    passive: false,
    1: "While in a fight, you will aim your punch in a certain direction to start, before the first movement is made, your charm stat will take slight control of the user's mind, to them an image will appear and make it look like the punch has continued heading in the initial direction. But in actual fact, this will be a phantom punch, while the user is dodging or trying to block it, the real blow will come from somewhere else.",
  },
  "Phantom Kick": {
    name: "Phantom Kick",
    passive: false,
    1: "Kick version of Phantom Punch.",
  },
  "Flash Step": {
    name: "Flash Step",
    passive: false,
    1: "Movement skill of short displacement.",
  },
  "Basic Vampire Martial Arts": {
    name: "Basic Vampire Martial Arts",
    passive: false,
    1: "Basic martial arts for vampire physiques.",
  },
  "Vampiric Influence": {
    name: "Vampiric Influence",
    passive: false,
    1: "Depending on the user's charisma points and the mental strength of the opponent. The user is able to influence the person or creature to do their bidding. This includes things such as, memory loss, information extraction and so on. This skill require direct eye contact with the target.",
  },
  "Blood Ritual": {
    name: "Blood Ritual",
    passive: false,
    1: "It is ritual skill which would allow a Vampire to turn another person into a Vampire, this is called a Blooded. Cap 1.",
    2: "Cap 2.",
    3: "Cap 3.",
  },
  "Vampiric Powers": {
    name: "Vampiric Powers",
    passive: true,
    1: "No points can be spent on this passive. As the severity of vampirism increases, the vampire's weakness and strengths enhance. Some effects are constant across the infection, while others are dynamic.",
    2: "Hunger level 20%.",
    3: "Hunger level 30%.",
    4: "Hunger level 40%.",
    5: "Hunger level 50%.",
    6: "Hunger level 60%.",
    7: "Hunger level 70%.",
    8: "Hunger level 80%.",
    9: "Hunger level 90%.",
    10: "Hunger level 100%.",
    stats: [
      {
        strength: 1,
        // strengthMultiplier: 2,
        // enduranceMultiplier: 2,
        magic: 1,
      },
      {
        strength: 1,
        magic: 1,
        sense: 1,
      },
      {
        strength: 1,
        magic: 1,
        sense: 1,
      },
      {
        strength: 1,
        magic: 1,
        sense: 1,
      },
      {
        strength: 1,
        magic: 1,
        sense: 1,
      },
      {
        strength: 1,
        magic: 1,
        sense: 1,
      },
      {
        strength: 1,
        magic: 1,
        sense: 1,
      },
      {
        strength: 1,
        magic: 1,
        sense: 1,
      },
      {
        strength: 1,
        magic: 1,
        sense: 1,
      },
      {
        strength: 1,
        magic: 1,
        sense: 1,
      },
    ],
  },
  "Ghoul's Strength": {
    name: "Ghoul's Strength",
    passive: true,
    1: "",
  },
  "Wight's Strength": {
    name: "Wight's Strength",
    passive: true,
    1: "",
  },
  "Vampire Halfling": {
    name: "Vampire Halfling",
    passive: true,
    1: "No points can be spent on this passive. As it levels up the user becomes closer to becoming a real vampire.",
  },
  "Vampire Noble": {
    name: "Vampire Halfling",
    passive: true,
    1: "No points can be spent on this passive. As it levels up the user becomes closer to becoming a vampire knight.",
  },
  Vampire: {
    name: "Vampire",
    passive: true,
    1: "No points can be spent on this passive. As it levels up the user becomes closer to becoming a vampire noble.",
  },
  "Vampire Lord": {
    name: "Vampire Lord",
    passive: true,
    1: "No points can be spent on this passive. As it levels up the user becomes closer to becoming a vampire progenitor.",
  },
  "Vampire Knight": {
    name: "Vampire Knight",
    passive: true,
    1: "No points can be spent on this passive. As it levels up the user becomes closer to becoming a vampire lord.",
  },
  "Blood Flow Acceleration": {
    name: "Blood Flow Acceleration",
    passive: false,
    1: "Accelerates the blood flow around the casters body. Increases repair of damaged muscle fibres and cells, helps to decrease swelling, reduce pain and increase healing.",
  },
  "Blood Retribution": {
    name: "Blood Retribution",
    passive: false,
    1: ".",
  },
  "Poisonous Blood": {
    name: "Poisonous Blood",
    passive: true,
    1: "Your blood is now poison to others.",
  },
  "Blood Curse": {
    name: "Blood Curse",
    passive: false,
    1: ".",
  },
  "Blood Armor": {
    name: "Blood Armor",
    passive: false,
    1: "Cover your body in blood to reduce damage.",
  },
  "Blood Potion": {
    name: "Blood Potion",
    passive: false,
    1: "Your blood can be used as a potion on others.",
  },
  "Blood Combustion": {
    name: "Blood Combustion",
    passive: false,
    1: "Rapidly expands your own blood.",
  },
  "Blood Manipulation": {
    name: "Blood Manipulation",
    passive: false,
    1: "An advanced blood control.",
  },
  "Blood Projectiles": {
    name: "Blood Projectiles",
    passive: false,
    1: "Shoot blood like javelins, uses the blood around you.",
  },
  "Blood Pact": {
    name: "Blood Pact",
    passive: false,
    1: "When agreed to both parties must stick to the pact or face their own blood rejecting them.",
  },
  "Blood Servant": {
    name: "Blood Servant",
    passive: false,
    1: "Make a servant creature out of blood.",
  },
  "Blood Storage": {
    name: "Blood Storage",
    passive: false,
    1: ".",
  },
  "Blood Frenzy": {
    name: "Blood Frenzy",
    passive: false,
    1: "You will fall into a frenzied state until you consume enough blood to be satisfied, all stats increase during this time.",
  },
  "Blood Soul": {
    name: "Blood Soul",
    passive: true,
    1: "Your soul is stained with the blood of your victims.",
  },
  "Blood Weapon Creation": {
    name: "Blood Weapon Creation",
    passive: false,
    1: "Creates a weapon from the blood.",
  },
  "Blood Mist": {
    name: "Blood Mist",
    passive: false,
    1: "The caster bursts into a mist of their own blood reducing damage taken by spreading them selves over a larger area.",
  },
  "Death Syphon": {
    name: "Death Syphon",
    passive: false,
    1: "While this mode is active, the caster draws in nearby entropic energy, draining residual power from any dead enemy nearby to restore the caster's mana.",
  },
  "Otitis Externa": {
    name: "Otitis Externa",
    negative: true,
    1: "-2 sense when using ears alone.",
  },
  "Fire Cyclone": {
    name: "Fire Cyclone",
    element: "fire",
    image:
      "https://i.pinimg.com/originals/10/9c/fd/109cfdb1f2c6b96cd5d99486753cecd0.gif",
    negative: false,
    passive: false,
    1: "A cyclone of fire starts winding up and spins towards your target.",
  },
  "Fire Wrap": {
    name: "Fire Wrap",
    element: "fire",
    image: "",
    negative: false,
    passive: false,
    1: "Wraps you in a cyclone of fire, Causing Fire damage to anyone who gets too close to you.",
  },
  "Fire Mine": {
    name: "Fire Mine",
    element: "fire",
    image:
      "https://static.wikia.nocookie.net/elderscrolls/images/8/87/SKRMFire_Rune.png",
    negative: false,
    passive: false,
    1: "Casting it causes blobs of fire to shoot from the hands and stick to surfaces. When a target steps on or passes too closely to a Fire Mine, it explodes, causing fire damage.",
  },
  "Fallen Paladin": {
    name: "Fallen Paladin",
    element: "",
    image: "",
    negative: true,
    passive: true,
    1: "A paladin without the support of a God is stripped of faith and unable to use any Paladin skills.",
  },
  "Berserkergang": {
    name: "Berserkergang",
    element: "",
    image: "",
    negative: false,
    passive: true,
    1: "Increases natural HP recovery rate.",
  },
  "Vampiric frenzy": {
    name: "Vampiric frenzy",
    element: "",
    image: "",
    negative: false,
    passive: true,
    1: "The lower total HP you have, the higher your strength becomes.",
  },
  "Rebirth Flame": {
    name: "Rebirth Flame",
    element: "",
    image: "",
    negative: false,
    passive: true,
    1: "After death, your body will turn to ashes, and you shall be reborn from the flames with 10% of your total HP.",
  },
  // Phoenix Flame
};

export function InlineSpell({ spellName, level }) {
  // console.log(spellList[Object.keys(spellList).find(key => key.toLowerCase() === spellName.toLowerCase())]);
  return (
    <Inline>
      {spellName}
      <SpellSpan>{spellList[spellName][level] || ""}</SpellSpan>
    </Inline>
  );
}

// Ghoul, Wight, Halfling, Vampire→Vampire Noble→Vampire Knight, Namanari Hannya <Chunari Hannya> <Honnari Hannya>, Dhampir, Banshee, Draugr→Great Draugr, Blood Fairy, Strigoi,

// Berserker stuff ! Blood stuff !https://dragonage.fandom.com/wiki/Blood_Mage_(Origins)
// '""',

// https://overlordmaruyama.fandom.com/wiki/Ainz_Ooal_Gown/Abilities_and_Powers

// const array = [
// ]

//  for (let index = 0; index < array.length; index++) {
//      const element = array[index];
//      console.log(`${element}: {
//          name: ${element},
//          passive: false,
//         1: "",
//      },`)
//  }

function Spells({ spells, type }) {
  const array = [];
  for (let index = 0; index < spells.length; index++) {
    const element = spellList[spells[index].name];
    if (element) {
      array.push(
        <SingleSpell
          key={index + "SingleSpell"}
          passive={element.passive || false}
          negative={element.negative || false}
        >
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
        <SingleSpell
          key={index + "SingleSpell"}
          passive={spells[index].passive || false}
          negative={spells[index].negative || false}
        >
          {spells[index].name}
        </SingleSpell>
      );
    }
  }
  function getTitle(type) {
    switch (type) {
      case "mage":
        return <Title>Spells:</Title>;
      case "negatives":
        return <Title>Negatives:</Title>;
      case "conditions":
        return <Title>Conditions:</Title>;
      default:
        return <Title>Skills:</Title>;
    }
  }
  return (
    <>
      {/* This title thing could be made into switch cases. */}
      {type ? getTitle(type) : <Title></Title>}
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
  color: black;
  background: ${(props) =>
    props.passive
      ? "#54cc4f;"
      : `linear-gradient(
    217deg,
    rgb(218, 182, 111),
    rgb(244, 229, 203) 70.71%
  );`}
  ${(props) => (props.negative ? "background: #f92b00;" : "")}
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

const SpellSpan = styled.span`
  visibility: hidden;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  width: auto;
  position: absolute;
  z-index: 2;
`;

const Inline = styled.div`
  display: contents;
  font-family: "monospace";
  &:hover ${SpellSpan} {
    visibility: visible;
  }
`;
