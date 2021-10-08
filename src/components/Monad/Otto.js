import React, { useState } from "react";
import Item from "./../elements/item";
import Equipment from "./../elements/equipment";
import Stats from "./../elements/stats";
import Spells from "./../elements/spells";
import SpellCards from "./SpellCards";

export default function Otto() {
  return (
    <div style={{ color: "black" }}>
      {DirtyOtto()}
      <div>
        {SpellCards([
          ["Sparks", 1, "lightning"],
          ["Fireball", 1, "fire"],
          ["Blood Hammer Drill", 1, "blood"],
          [],
          ["Dave", 1, "poop"],
          ["fire cyclone", 1],
          ["Iceball", 2],
          ["Lightning seeds", 2, "lightning"],
          ["Magic Up", 1, 'mana'],
          ["Otitis Externa", 1],
          ["Youth", 1]
        ])}
      </div>
      <Stats
        type={"description"}
        stats={{
          name: "Otto",
          level: 10,
          class: "Kʼawiil.",
          spells: 8,
          passives: 32,
          titles: 5,
          "spell points": 0, // from class
          "stat points": 0, // from race
          vitality: 1,
          strength: 1, // 1 from title
          endurance: 0,
          magic: 14, // 1 from title, 10 from leveling, 1 from robe, unlikely to be wearing the mask
          willpower: 3, // 1 from title
          dexterity: 4, // 2 from the level 1 & 10
          sense: 2, // 1 from human
          charisma: 15, // 2 from human, 1 from title, 10 from leveling
          // rest from passives
        }}
        notes={"4 spell per level, 1 stats per level,"}
      />
      {/* This equipment is level 5? So maybe needs stat changes */}
      <Equipment
        items={{
          Head: {
            name: "Heavenly White Stag Mask",
            effect:
              "Magic: +2, Disease resistance + 20%, Mana regeneration + 20%, blessing of 建御雷 [Takemikazuchi].",
            rating: "unique",
            long: "Blessing of 建御雷 [Takemikazuchi]: Resist lightning +20%, Lightning cost - 15%, Lightning power +20%. ",
          },
          Body: {
            name: "Academy Robe (Black/Yellow).",
            effect: "Magic: +2, Lightning +2%, Health +10.",
            rating: "junk",
          },
        }}
      />
      {/* <li>
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
    </li> */}
      {/* gloves, adds fire to a weapon. boots, change the surface to fire. chest, reflect damage as fire when hit in melee*/}
      <h1>Other Items</h1>
      <Spells
        spells={[
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
        ]}
        type={"mage"}
      />
      <div className="BreakPoint"></div>
      {/* Human skills, but also could have God based skills and passives. The snake ones looked good. */}
      <Spells
        spells={[
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
        ]}
        type={"human"}
      />
      <Spells
        spells={[
          // Negatives
          { name: "Otitis Externa", level: 1 },
          { name: "Youth", level: 1 },
        ]}
        type={"conditions"}
      />
    </div>
  );
}

export function DirtyOtto () {
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
      <p>Upset and angry at the loss</p>.
      {/* 2nd time: No longer vengeful */}
    </div>
  )
}
export function Kaja () {
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
export function Linhart () {
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
  )
}
export function Beke () {
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
  )
}
export function Effi () {
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
  )
}
export function Nils () {
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
  )
}



// Academy, border guard, monster hunters, fugitive, leikan prince, farmer, war lord? Flees the sea people invasion turns south, find the bird people, fight eleven pirates, sail to the old world. Or use the under ground road...

// The invasion of earth starts

// Kʼawiil Notes:
// This court is the body of an immortal the maya gods killed and lived in after.
// Xibalba is described in the Popol Vuh as a court below the surface of the Earth associated with death and with twelve gods or powerful rulers known as the Lords of Xibalba.

// Chaac *L*
// The god of storms and rain, enemy of Camazotz and wields a lightning axe.

// Camazotz *PV*
// A bat and death god.

// God K. God L is often combined with god K, the lightning deity who, as an owner of the seeds, was considered a bringer of abundance.[5] More specifically, god L can extend the head of god K, or carry an infant god K in a sling on his back.[6] God K also happens to be the victim of god L as a Venus patron (Dresden Codex).
