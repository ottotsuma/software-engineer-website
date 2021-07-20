import React, { useState } from "react";
import Item from "./../elements/item";
import Equipment from "./../elements/equipment";
import Stats from "./../elements/stats";
import Spells from "./../elements/spells";

// Vampires can gain experience by trying new blood, creature ghouls and the exp gained from the ghouls fighting
// all actions that would reveal the vampire would either cure or gain them exp or blood points to be used to improve their strength 
// that way younger vampires are more likely to do these things then the older ones who don't need strength as badly
// Combined with the starving yourself (lower hp) increases you strength

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
          { name: "Grasp of the Starved", level: 1 },
          { name: "Blood Magic", level: 1 },
          { name: "Blood Sacrifice", level: 1 },
          { name: "Blood Wound", level: 1 },
          { name: "Blood Control", level: 1 },
          
        ]}
        type={"mage"}
      />
      <div className="BreakPoint"></div>
      <h1>Vampire specific skills (Blood + Other)</h1>
      <Spells
        spells={[
          {
            name: "Blood Sucker",
            level: 1,
          },
          { name: "Black Shroud", level: 1 },
          { name: "Vampire Eyes", level: 1 },
          { name: "Aura of Despair", level: 1 },

        ]}
        type={"human"}
      />
    </div>
  );
}