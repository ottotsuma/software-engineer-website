import React, { useState } from "react";
import Item from "./../elements/item";
import Equipment from "./../elements/equipment";
import Stats from "./../elements/stats";
import Spells from "./../elements/spells";

export default function Otto() {
  return (
    <div style={{color: 'black'}}>
      <Stats
        type={"description"}
        stats={{
          name: "Otto",
          level: 10,
          class: "Kʼawiil.",
          spells: 8,
          passives: 32,
          titles: 5,
          "spell points": 0,
          "stat points": 0,
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
            long: 'Blessing of 建御雷 [Takemikazuchi]: Resist lightning +20%, Lightning cost - 15%, Lightning power +20%. '
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
          {
            name: "Lightning germination",
            level: 2,
          },
          { name: "Lightning growth", level: 2 },
          { name: "Lightning harvest", level: 2 },
          { name: "Seeds to Soldiers", level: 2 },
          { name: "Lightning seeds", level: 2 }, // 5 points spent on old spells
          // New Spells Below
          { name: "Scarecrow", level: 2 },
          { name: "Kʼawiil Burst", level: 2 },
          { name: "Kʼawiil Bolt", level: 2 },
          { name: "Serpent Skin", level: 2},
          { name: "Serpent Pattern", level: 2}, // 10 points spent on new spells
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
          { name: "Pure of mind", level: 2 },
          { name: "Magic Enthusiast", level: 2 }, // 20
        ]}
        type={"human"}
      />
    </div>
  );
}
