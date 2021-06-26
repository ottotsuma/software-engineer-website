import React, { useState } from "react";
import Item from "./../elements/item";
import Equipment from "./../elements/equipment";
import Stats from "./../elements/stats";
import Spells from "./../elements/spells";

export default function Vampire() {
  return (
    <div style={{ color: "black" }}>
      <h1>Vampires</h1>
      <h1>Blood Skills for any blood ability user:</h1>
      <Spells
        spells={[
          {
            name: "Raining blood",
            level: 1,
          },
          {
            name: "Blood Storm",
            level: 1,
          },
          {
            name: "Grasp Heart",
            level: 1,
          },
          {
            name: "Bloodhunt",
            level: 1,
          },
          {
            name: "Blood Absorb",
            level: 1,
          },
          {
            name: "Blood Aura",
            level: 1,
          },
        ]}
        type={"mage"}
      />
      {/* Grasp of the Starved, Blood Magic, Blood Sacrifice, Blood Wound, Blood Control */}
      <div className="BreakPoint"></div>
      <h1>Vampire specific skills (Blood + Other)</h1>
      <Spells
        spells={[
          {
            name: "Blood Sucker",
            level: 1,
          },
          { name: "Black Shroud", level: 2 },
        ]}
        type={"human"}
      />
      {/* Aura of Despair */}
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
