import styled from "styled-components";
import React from "react";

// Kʼawiil - Lightning, seeds, abundance, powerful one, fertility, serpent

// Rouge: Side/Back -- Back -- Side (3rd one is intermediate), (4th advanced)
// Fighter: ?? -- ?? -- ?? (3rd one is intermediate), (4th advanced)
// Mage: ?? -- ?? -- ?? (3rd one is intermediate), (4th advanced)

export const spellList = {
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
    2: "You learn basic serpent speech.",
  },
  "Serpent Skin": {
    name: "Serpent-Skin",
    1: "Your skin slowly becomes like a serpents. Able to turn on and off scaled armor over your skin.",
    2: "Your skin slowly becomes like a serpents. Able to turn on and off scaled armor over your skin.", // ch32
    3: "Endurance +3",
    4: "Endurance +4",
    5: "Endurance +5",
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
    10: "Uses plant material to summon a level 100 scarecrow. Equipment provided.",
  },
  "Lightning harvest": {
    name: "Lightning harvest",
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
    1: "Force the target to grow.", // 5% increase stats
    2: "Force the target to grow.", // ch32 // +1 all base stats
    3: "All targets base stats +2 for the duration of the spells.",
    4: "All targets stats +10% for the duration of the spells.",
  },
  "Lightning germination": {
    name: "Lightning germination",
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
    note: "Take [x] seed(s), use energy to give life to [x] soldier(s). [x is equal to spell level.]",
    1: "Take 1 seed, use energy to give life to 1 soldier.",
    2: "Take 2 seeds, use energy to give life to 2 soldiers.",
  },
  "Lightning seeds": {
    name: "Lightning seeds",
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
  },
  Tether: {
    name: "Tether",
    1: "Gathers mana into a string shape.",
    2: "Two objects within 10’ of each other be-come linked and cannot be moved more than 10’ apart.",
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
    10: "Magic +10, mana recovery +10%.",
  },
  Strike: {
    name: "Strike",
    1: "Calls mana in the environment to gather and strike down from above.",
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
  },
  "Mana Shield": {
    name: "Mana Shield",
    1: "Produces a shield of mana around the user.",
    2: "Takes 5% less damage.",
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
  },
  Quick: {
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
  Astute: {
    name: "Astute",
    passive: true,
    1: "Magic +1",
    2: "Magic +2",
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
    1: "Undead races will be damaged in an area around you.",
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
  "Stealth": {
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
    1: "",
  },
  Fortify: {
    passive: false,
    name: "Fortify",
    1: "",
  },
  Impalement: {
    passive: false,
    name: "Impalement",
    1: "",
  },
  "Summon Artillery Plant": {
    name: "Summon Artillery Plant",
    passive: false,
    1: "",
  },
  "Acid Spores": {
    name: "Acid Spores",
    passive: false,
    1: "",
  },
  "Corrosive Spray": {
    name: "Corrosive Spray",
    passive: false,
    1: "",
  },
  "Throw Dust": {
    name: "Throw Dust",
    passive: false,
    1: "",
  },
  "Living Wall": {
    name: "Living Wall",
    passive: false,
    1: "",
  },
  "Worm Tremor": {
    name: "Worm Tremor",
    passive: false,
    1: "",
  },
  "Dust Blast": {
    name: "Dust Blast",
    passive: false,
    1: "",
  },
  "Armour of Frost": {
    name: "Armour of Frost",
    passive: false,
    1: "",
  },
  "Healing Ritual": {
    name: "Healing Ritual",
    passive: false,
    1: "",
  },
  "Hail Storm": {
    name: "Hail Storm",
    passive: false,
    1: "",
  },
  Rain: {
    name: "Rain",
    passive: false,
    1: "",
  },
  Restoration: {
    name: "Restoration",
    passive: false,
    1: "",
  },
  "Winter Blast": {
    name: "Winter Blast",
    passive: false,
    1: "",
  },
  "Steam Lance": {
    name: "Steam Lance",
    passive: false,
    1: "",
  },
  " Global Cooling": {
    name: " Global Cooling",
    passive: false,
    1: "",
  },
  "Soothing Cold": {
    name: "Soothing Cold",
    passive: false,
    1: "",
  },
  "Ice Fan": {
    name: "Ice Fan",
    passive: false,
    1: "",
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
    1: "",
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
  "Vampiric Hunger": {
    name: "Vampiric Hunger",
    passive: false,
    1: "",
  },
  "Vampiric Hunger Aura": {
    name: "Vampiric Hunger Aura",
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
    1: "",
  },
  "Decaying Touch": {
    name: "Decaying Touch",
    passive: false,
    1: "",
  },
  "Mosquito Swarm": {
    name: "Mosquito Swarm",
    passive: false,
    1: "",
  },
  "Raining blood": {
    name: "Raining blood",
    passive: false,
    1: "",
  },
  "Shackles of Pain": {
    name: "Shackles of Pain",
    passive: false,
    1: "",
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
    1: "",
  },
  "Bone Cage": {
    name: "Bone Cage",
    passive: false,
    1: "",
  },
  "Black Shroud": {
    name: "Black Shroud",
    passive: false,
    1: "",
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
    1: "",
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
};

// 1. Summon Lesser Skeleton Warrior
// 2. Summon Small Bonecrawler
// 3. Summon Multiple Lesser Skeleton Warriors
// 4. Summon Skeleton Warrior
// 5. Raise Greater Skeleton Warrior
// 6. Summon Multiple Lesser Skeleton Archers
// 7. Summon Skeleton Archer
// 8. Death's Touch
// 9. Stare Of The Overlord
// 10. Grasp Heart
// 11. Bone Rejection
// 12. Spectral Wave
// 13. Bone Armor
// 14. Negative Burst
// 15. Raise Elder Lich
// 16. Death's Arrival
// 17 Summon Lesser Skeleton Archer
// 18 Raise Greater Skeleton Archer
// 19 Raise Death Knight
// 20 Aura of Despair

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
        >
          {spells[index].name}
        </SingleSpell>
      );
    }
  }
  return (
    <>
      {type === "mage" ? <Title>Spells:</Title> : <Title>Skills:</Title>}
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
  background: ${(props) =>
    props.passive
      ? "#54cc4f;"
      : `linear-gradient(
    217deg,
    rgb(218, 182, 111),
    rgb(244, 229, 203) 70.71%
  );`}
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
