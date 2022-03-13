import React, { useState } from "react";
import Item from "../elements/item";
import Stats from "../elements/stats";
import SpellCards from "./SpellCards";
import ClassDisplay from '../elements/classes'

export default function Otto() {
  return (
    <div style={{ color: "black" }}>
      <div style={{display: "flex", justifyContent: "center"}}>
      {ClassDisplay('Mage')}
      {ClassDisplay('Fighter')}
      {ClassDisplay('Rogue')}
      {ClassDisplay('King')}
      </div>
      {DirtyOtto()}

      <div>{SpellCards([["Iceball", 2, "ice"]])}</div>
      <Stats
        type={"description"}
        stats={{
          name: "Otto",
          level: 10,
          class: "Kʼawiil",
          species: "human",
          spells: 8,
          passives: 32,
          "spell points": 0, // from class 4 per level (normal/rare/epic/legendary)
          "stat points": 0, // from species 2 per level
          vitality: 0,
          strength: 0,
          endurance: 0,
          magic: 10, // 10 from leveling
          willpower: 0,
          dexterity: 2, // 2 from the level 1 & 10
          sense: 0,
          charisma: 10, // 10 from leveling
        }}
        // Makes skills an object of skill types 'human' 'mage' and they be the arrays.
        // Do the same thing for equipment and titles?
        showTitles={false} // currently does nothing
        equippedTitle="The One, The Only"
        titles={['Back to School', 'Apprentice', 'Found a unique item', 'The One, The Only', 'Novice Harvester']}
        showSkills={true}
        skills={{
          human: [
            { name: "Human Ingenuity", level: 2 },
            { name: "Persuasive", level: 2 },
            { name: "Quick", level: 2 },
            { name: "Perception", level: 2 },
            { name: "Athletic", level: 2 },
            { name: "Healthy", level: 2 },
            { name: "Adaptable", level: 2 },
            { name: "Brave", level: 2 },
            // { name: "Pure of mind", level: 2 },
            // { name: "Magic Enthusiast", level: 2 }, // 20
          ],
          mage: [
            { name: "Lightning germination", level: 2 },
            { name: "Lightning growth", level: 2 },
            { name: "Lightning harvest", level: 2 },
            { name: "Seeds to Soldiers", level: 2 },
            { name: "Lightning seeds", level: 2 }, // 5 points spent on old spells
            // New Spells Below
            { name: "Scarecrow", level: 2 },
            { name: "Kʼawiil Burst", level: 2 },
            { name: "Kʼawiil Bolt", level: 2 },
            { name: "Serpent Skin", level: 2 },
            { name: "Serpent Pattern", level: 2 }, // 10 points spent on new spells
            { name: "Reap What You Sow", level: 2 },
            { name: "Bountiful Harvest", level: 2 },
          ],
          conditions: [
          // Negatives
          { name: "Otitis Externa", level: 1 },
          { name: "Youth", level: 1 },
          ],
        }}
        showItems={true}
        items={{
          Head: {
            name: "Heavenly White Stag Mask",
            effect:
              "Magic: +2, Disease resistance + 20%, Mana regeneration + 20%, blessing of 建御雷 [Takemikazuchi].",
            rating: "unique",
            long: "Blessing of 建御雷 [Takemikazuchi]: Resist lightning +20%, Lightning cost - 15%, Lightning power +20%. ",
            stats: {magic: 2}
          },
          Body: {
            name: "Academy Robe (Black/Yellow).",
            effect: "Magic: +2, Lightning +2%, HP +10.",
            rating: "junk",
            stats: {magic: 2, HP: 10}
          },
        }}
        notes={
          "4 spell per level, 2 stats per level, Human +1 stat every 10 levels."
        }
      />
      {/* This equipment is level 5? So maybe needs stat changes */}
      <h1>Other Items</h1>
      <li>
        Body:<font color="blue"> Hui Lu's Battle Armor</font> ???
      </li>
      <li>
        Hands:<font color="blue"> Hui Lu's Enchanting Gloves</font> ???
      </li>
      <li>
        Feet:<font color="blue"> Hui Lu's Burning Boots</font> ???
      </li>
      <li>
        Weapon:<font color="blue"> </font>
      </li>
      {/* mysterious bird named Pi Fang and a hundred other fire-birds shut up in a gourd */}
      {/* gloves, adds fire to a weapon. boots, change the surface to fire. chest, reflect damage as fire when hit in melee, how about fireball falls from the sky*/}

      <Stats
        type={"description"}
        stats={{
          name: "Ideal",
          level: 100,
          class: "???",
          species: "mana creature",
          spells: 0,
          passives: 0,
          "spell points": 0, // from class
          "stat points": 0, // from species
          vitality: 100,
          strength: 0,
          endurance: 25,
          magic: 100,
          willpower: 25,
          dexterity: 25,
          sense: 25,
          charisma: 100,
        }}
        showItems={true}
        items={{
          Head: {
            name: "Nahkriin (Mask)",
            effect:
              "Magic +30, -20% Restoration and Destruction mana cost.",
            rating: "unique",
            long: "",
            stats: {magic: 30}
          },
          Body: {
            name: "Ziedrich",
            effect: "Halves damage from all elements. Strength, endurance, magic, willpower + 20.",
            rating: "legendary",
            stats: {strength: 20, endurance: 20, magic: 20, willpower: 20}
          },
          Hands: {
            name: "Linwe's Gloves",
            effect: "one-handed attacks do 15% more damage.",
            rating: "unique",
            stats: {}
          },
          Feet: {
            name: "Bubonic Trail",
            effect: "Skill: Death Walk, 30% increased Movement Speed, 4% increased maximum Hp.",
            rating: "unique",
            long: 'Death Walk: While you walk, this skill causes corpses near your steps to explode, dealing fire damage in an area. The explosions of the corpses are not affected by modifiers to spell damage, and cannot be reflected.',
            stats: {}
          },
          Acc1: {
            name: "Protect Ring",
            effect: "Keeps Barrier & Magic-Barrier active.",
            rating: "epic",
            stats: {}
          },
          Acc2: {
            name: "Force of Nature",
            effect: "Adds random nature elements to attack. Absorbs some MP from nature element-based attacks.",
            rating: "legendary",
            stats: {}
          },
          Acc3: {
            name: "Dark Cloak",
            effect: "Willpower +5, MP regen + 10%, magic resistance +5%, normal weapon resistance +3% and stealth bonus. It also increases encounter chance, hostility, and suspicion.",
            rating: "epic",
            stats: {willpower: 5}
          },
          Acc4: {
            name: "Magic Master",
            effect: "Max hp - 50%. Max mp + 50%. Strength & Endurance - 20. Magic & Willpower + 20. Stores one magic spell for free use.",
            rating: "legendary",
            stats: {
              strength: -20,
              endurance: -20,
              magic: 20,
              willpower: 20
            }
          },
          Weapon: {
            name: "Otto`s Umbrella",
            effect: "Resist Water, Resist Light, Magic +70.",
            rating: "epic",
            stats: {magic: 70}
          },
          "Off-hand" : {
            name: `Silver Horn Custom "Trident"`,
            effect: "(+15 magic when used in offhand). Damage + 1.25x Magic",
            rating: "unique",
            stats: {magic: 15}
          }
        }}
        // Magic +5 Immune: Poison, Disease
        // https://www.dandwiki.com/wiki/Mana_Creature_(5e_Race)
        // Team bonus comes from class.
        notes={
          "1 spell per level, 4 stats per level, mana creature every 10 levels stores another form."
        }
      />
    </div>
  );
}
export function DirtyOtto() {
  return (
    <div>
      <p>1: They are in a zone of comfort</p>
      <p>At home with his family</p>
      {/* 2nd time: Back at the Banderdam with his friends. */}
      <p>2: But they want something</p>
      <p>To be a strong wizard</p>
      {/* 2nd time: Revenge */}
      <p>3: They enter an unfamiliar situation</p>
      <p>Academy / war</p>
      {/* 2nd time: Being accused of crime */}
      <p>4: Adapt to it</p>
      <p>Fight and survive</p>
      {/* 2nd time: Flee */}
      <p>5: Get what they wanted</p>
      <p>Become recognized as powerful</p>
      {/* 2nd time: Kills prince */}
      <p>6: Pay a heavy price</p>
      <p>Lose his family</p>
      {/* 2nd time: Lose his friends */}
      {/* 3rd: Lose the class that made him powerful */}
      <p>7: Then return to the familia situation</p>
      <p>Come back to the village</p>
      {/* 2nd time: With his friends on a ship, except his friends are reduced because of the cost to 1. */}
      <p>8: Having changed</p>
      <p>Upset and angry at the loss</p>.{/* 2nd time: No longer vengeful */}
    </div>
  );
}
export function Kaja (Chapter) {
  if (Chapter) {
    return (
      <Stats
      type={"description"}
      stats={{
        name: "Kaja",
        level: 10,
        class: "mage",
        species: "human",
        spells: 0,
        passives: 0,
        "spell points": 10-8, // from class 1 per level (normal/rare/epic/legendary)
        "stat points": 22-10, // from species 2 per level // 1 per every 10 levels
        vitality: 0,
        strength: 0,
        endurance: 0,
        magic: 10,
        willpower: 0,
        dexterity: 0,
        sense: 0,
        charisma: 0,
      }}
      // Makes skills an object of skill types 'human' 'mage' and they be the arrays.
      // Do the same thing for equipment and titles?
      showTitles={false} // currently does nothing
      equippedTitle="Back to School"
      titles={['Back to School', 'Apprentice']}
      showSkills={true}
      skills={{
        human: [
          // { name: "Human Ingenuity", level: 2 },
          // { name: "Persuasive", level: 2 },
          // { name: "Quick", level: 2 },
          // { name: "Perception", level: 2 },
          // { name: "Athletic", level: 2 },
          // { name: "Healthy", level: 2 },
          // { name: "Adaptable", level: 2 },
          // { name: "Brave", level: 2 },
          // { name: "Pure of mind", level: 2 },
          { name: "Magic Enthusiast", level: 2 },
        ],
        mage: [
          { name: "Mana Ball", level: 1 },
          { name: "Fireball", level: 1 },
          { name: "fire cyclone", level: 1 },
          { name: "fire mine", level: 1 },
          { name: "Magic Up", level: 2 },

          // Magic Regen, Shield Burst, Mana Wings, Mana Shield, Mana Slide, Missile, Strike, Magic Up, Magic Resistance, Tether, Mana Orbs
        ],
        conditions: [
        // Negatives
        { name: "Youth", level: 1 },
        ],
      }}
      showItems={true}
      items={{
        Weapon: {
          name: "wand",
          effect: "Controlling ambient mana is easier.",
          rating: "junk",
        },
        Shield: {
          name: "Leather covered wooden shield",
          effect: "Endurance +1, Fire resistance + 1%, chance to block physical attacks.",
          rating: "junk",
          stats: {endurance: 1}
        },
        Body: {
          name: "Academy Robe (Black/Red).",
          effect: "Magic: +2, Fire +2%, HP +10.",
          rating: "junk",
          stats: {magic: 2, HP: 10}
        },
      }}
      notes={
        "2 spell per level, 2 stats per level, Human +1 stat every 10 levels."
      }
    />
    )
  } else {
    return (
      <div>
      <p>1: They are in a zone of comfort</p>
      <p>With her farther</p>

      <p>2: But they want something</p>
      <p>To become a lord protector</p>

      <p>3: They enter an unfamiliar situation</p>
      <p>Academy</p>

      <p>4: Adapt to it</p>
      <p>Survive</p>

      <p>5: Get what they wanted</p>
      <p>Her fame from the game will give her the position she wanted</p>

      <p>6: Pay a heavy price</p>
      <p>Her faith?</p>

      <p>7: Then return to the familia situation</p>
      <p>Returns back to her farther town as a lord protector</p>

      <p>8: Having changed</p>
      <p>Is not the happy girl she once was, cynical and icy</p>
    </div>
    )
  }
}
export function Linhart() {
  return (
    <div>
      <p>1: They are in a zone of comfort</p>
      <p>Working as a 3rd year researchers assistant at the academy.</p>
      <p>2: But they want something</p>
      <p></p>
      <p>3: They enter an unfamiliar situation</p>
      <p></p>
      <p>4: Adapt to it</p>
      <p></p>
      <p>5: Get what they wanted</p>
      <p></p>
      <p>6: Pay a heavy price</p>
      <p></p>
      <p>7: Then return to the familia situation</p>
      <p></p>
      <p>8: Having changed</p>
      <p></p>
    </div>
  );
}
export function Beke() {
  return (
    <div>
      <p>1: They are in a zone of comfort</p>
      <p>2: But they want something</p>
      <p>3: They enter an unfamiliar situation</p>
      <p>4: Adapt to it</p>
      <p>5: Get what they wanted</p>
      <p>6: Pay a heavy price</p>
      <p>7: Then return to the familia situation</p>
      <p>8: Having changed</p>
    </div>
  );
}
export function Effi() {
  return (
    <div>
      <p>1: They are in a zone of comfort</p>
      <p>Starts in the town with her family.</p>
      <p>2: But they want something</p>
      <p>To become strong enough to protect them</p>
      <p>3: They enter an unfamiliar situation</p>
      <p>The military camps of Alden</p>

      <p>4: Adapt to it</p>
      <p>Finds her place in the ranks</p>

      <p>5: Get what they wanted</p>
      <p>Becomes strong enough to fight basic monsters</p>

      <p>6: Pay a heavy price</p>
      <p></p>

      <p>7: Then return to the familia situation</p>
      <p>Comes back to her family, finding they have died.</p>

      <p>8: Having changed</p>
      <p>Vengeful and lost at her families death</p>
    </div>
  );
}
export function Nils() {
  return (
    <div>
      <p>1: They are in a zone of comfort</p>
      <p>2: But they want something</p>
      <p>3: They enter an unfamiliar situation</p>
      <p>4: Adapt to it</p>
      <p>5: Get what they wanted</p>
      <p>6: Pay a heavy price</p>
      <p>7: Then return to the familia situation</p>
      <p>8: Having changed</p>
    </div>
  );
}

// Academy, border guard, monster hunters, fugitive, Niyoshon prince, farmer, war lord? Flees the sea people invasion turns south, find the bird people, fight eleven pirates, sail to the old world. Or use the under ground road...

// The invasion of earth starts

// Kʼawiil Notes:
// This court is the body of an immortal the maya gods killed and lived in after.
// Xibalba is described in the Popol Vuh as a court below the surface of the Earth associated with death and with twelve gods or powerful rulers known as the Lords of Xibalba.

// Chaac *L*
// The god of storms and rain, enemy of Camazotz and wields a lightning axe.

// Camazotz *PV*
// A bat and death god.

// God K (Chuah.). God L is often combined with god K, the lightning deity who, as an owner of the seeds, was considered a bringer of abundance.[5] More specifically, god L can extend the head of god K, or carry an infant god K in a sling on his back.[6] God K also happens to be the victim of god L as a Venus patron (Dresden Codex).
