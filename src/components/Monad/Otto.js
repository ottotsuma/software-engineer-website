import React, { useState } from "react";
import Item from "./../elements/item";
import Equipment from "./../elements/equipment";
import Stats from "./../elements/stats";
import Spells from "./../elements/spells";

export default function Otto() {
  return (
    <div>
      <Stats
        type={"description"}
        stats={{
          name: "Otto",
          level: 10,
          class: "Kʼawiil.",
          spells: 5,
          titles: 5,
          "spell points": 35,
          "stat points": 0,
          vitality: 0,
          strength: 1, // 1 from title
          endurance: 0,
          magic: 11, // 1 from title, 10 from leveling
          willpower: 1, // 1 from title
          dexterity: 2, // 2 from the level 1 & 10
          sense: 1, // 1 from human
          charisma: 13, // 2 from human, 1 from title, 10 from leveling
        }}
        notes={"4 spell per level, 1 stats per level,"}
      />
      <Equipment
        items={{
          Head: {
            name: "Heavenly White Stag Mask",
            effect:
              "Magic: +1, Disease resistance + 20%, Mana regeneration + 10%, blessing of 建御雷 [Takemikazuchi].",
            rating: "unique",
          },
          Body: {
            name: "Academy Robe (Black/Yellow).",
            effect: "Magic: +1, Lightning +1%, Health +10.",
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
          { name: "Lightning seeds", level: 2 },
          { name: "Scarecrow", level: 2 },
          { name: "Kʼawiil Burst", level: 2 },
          { name: "Kʼawiil Bolt", level: 2 },
        ]}
        type={"description"}
      />
      <div className="BreakPoint"></div>
      <h2>Passive</h2>
    </div>
  );
}
