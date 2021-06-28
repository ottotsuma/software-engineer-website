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