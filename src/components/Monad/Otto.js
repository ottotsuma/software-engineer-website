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
          { name: "Serpent Skin", level: 2, passive: true },
          { name: "Serpent Pattern", level: 2, passive: true }, // 10 points spent on new spells
        ]}
        type={"mage"}
      />
      <div className="BreakPoint"></div>
      {/* Human skills, but also could have God based skills and passives. The snake ones looked good. */}
      <Spells
        spells={[
          { name: "Talented", level: 2, passive: true },
          { name: "Persuasive", level: 2, passive: true },
          { name: "Quick", level: 2, passive: true },
          { name: "Perception", level: 2, passive: true },
          { name: "Athletic", level: 2, passive: true },
          { name: "Healthy", level: 2, passive: true },
          { name: "Adaptable", level: 2, passive: true },
          { name: "Brave", level: 2, passive: true },
          { name: "Pure of mind", level: 2, passive: true },
          { name: "Magical Aptitude", level: 2, passive: true }, // 20
        ]}
        type={"human"}
      />
    </div>
  );
}


// https://www.pinterest.jp/pin/3659243432263631/
// https://www.pinterest.jp/pin/1407443622023019/
// https://www.pinterest.jp/pin/985231157601720/
// https://www.pinterest.jp/pin/2251868547110588/
// https://www.pinterest.jp/pin/633178028835316448/
// https://www.pinterest.jp/pin/28006828922357029/
// https://www.pinterest.jp/pin/222576406564801885/
// https://www.pinterest.jp/pin/778067273118206650/
// https://www.pinterest.jp/pin/3799980924655989/
// https://www.pinterest.jp/pin/535154368226474776/
// https://www.pinterest.jp/pin/338332990762953977/
// https://www.pinterest.jp/pin/545639311112087999/
// https://www.pinterest.jp/pin/430234570646376643/
// https://www.pinterest.jp/pin/328059154104084463/