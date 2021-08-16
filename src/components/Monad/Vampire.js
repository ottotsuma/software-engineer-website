import React, { useState } from "react";
import styled from "styled-components";

import Item from "./../elements/item";
import Equipment from "./../elements/equipment";
import Stats from "./../elements/stats";
import Spells from "./../elements/spells";

export default function Vampire() {
  return (
    <div style={{ color: "black" }}>
      <h1>Blood Skills for any blood ability user:</h1>
      <Spells
        spells={[
          { name: "Raining blood", level: 1 },
          { name: "Blood Storm", level: 1 },
          { name: "Grasp Heart", level: 1 },
          { name: "Bloodhunt", level: 1 },
          { name: "Blood Absorb", level: 1 },
          { name: "Blood Aura", level: 1 },
          { name: "Grasp of the Starved", level: 1 },
          { name: "Blood Magic", level: 1 },
          { name: "Blood Sacrifice", level: 1 },
          { name: "Blood Wound", level: 1 },
          { name: "Blood Control", level: 1 },
          { name: "Blood Hardening", level: 1 },
          { name: "Blood Swipe", level: 1 },
          { name: "Blood Expand", level: 1 },
          { name: "Blood Barrage", level: 1 },
          { name: "Blood Bullet", level: 1 },
          { name: "Blood Bank", level: 1 },
          { name: "Blood Wall", level: 1 },
          { name: "Blood Spray", level: 1 },
          { name: "Blood Flow Acceleration", level: 1 },
          { name: "Blood Sacrifice", level: 1 },
          { name: "Blood Retribution", level: 1 },
          { name: "Poisonous Blood", level: 1 },
          { name: "Blood Curse", level: 1 },
          { name: "Blood Armor", level: 1 },
          { name: "Blood Potion", level: 1 },
          { name: "Blood Combustion", level: 1 },
          { name: "Blood Manipulation", level: 1 },
          { name: "Blood Projectiles", level: 1 },
          { name: "Blood Weapon Creation", level: 1 },
          { name: "Blood Soul", level: 1 },
          { name: "Blood Frenzy", level: 1 },
          { name: "Blood Storage", level: 1 },
          { name: "Blood Servant", level: 1 },
          { name: "Blood Pact", level: 1 },
          { name: "Blood Mist", level: 1 },
        ]}
        type={"mage"}
      />

      {/* 
      https://my-vampire-system.fandom.com/wiki/Quinn_Talen/Abilities
      */}
      <div className="BreakPoint"></div>
      <h1>Vampire specific skills (Blood + Other)</h1>
      <Spells
        spells={[
          { name: "Vampiric Powers", level: 1 },
          { name: "Hammer Strike", level: 1 },
          { name: "Blood Hammer", level: 1 },
          { name: "Blood Hammer Drill", level: 1 },
          { name: "Blood Crescent Kick", level: 1 },
          { name: "Daze", level: 1 },
          { name: "Phantom Punch", level: 1 },
          { name: "Phantom Kick", level: 1 },
          { name: "Blood Ritual", level: 1 },
          { name: "Flash Step", level: 1 },
          { name: "Basic Vampire Martial Arts", level: 1 },
          { name: "Vampiric Influence", level: 1 },
          { name: "Blood Sucker", level: 1 },
          { name: "Black Shroud", level: 1 },
          { name: "Vampire Eyes", level: 1 },
          { name: "Aura of Despair", level: 1 },
          { name: "Vampire Halfling", level: 1 },
          { name: "Vampire", level: 1 },
          { name: "Vampire Noble", level: 1 },
          { name: "Vampire Knight", level: 1 },
          { name: "Vampire Lord", level: 1 },
        ]}
        type={"human"}
      />
                  {/* vampiric eyes of hypnosis, eviscerating crimson claws,
 blood core creation, crimson flash, vampiric drain,  vampiric wings, crimson aegis, Undying body, immortal body, unyielding blood demon, telepathy, fartalk,  */}
      <h1>Vampire Ranks</h1>
      <SubTitle>Vampires</SubTitle>
      <ul>
        <li>Vampire Noble</li>
        <li>Vampire Knight</li>
        <li>Dhampir</li>
        <li>Halfling</li>
        <li>Royal Vampires</li>
        <li>Vampire</li>
        <li>Vampire Fledgling</li>
        <li>Blooded Vampire</li>
        <li>Vampire Nightstalker</li>
        <li>Vampire Lord</li>
        <li>Vampire progenitor</li>
        <li>Vampire Princess</li>
        <li>Vampire Prince</li>
        <li>Vampire Bride</li>
      </ul>
      <SubTitle>Sub-classes</SubTitle>
      <ul>
        <li>Ghoul</li>
        <li>Wight</li>
        <li>Blood Fairy</li>
        <li>Strigoi</li>
        <li>Hannya</li>
        <li>Draugr</li>
        <li>Banshee</li>
        <li>vampiric beasts</li>
        {/* Thrall, Lurker */}
      </ul>
    </div>
  );
}

const SubTitle = styled.h4`
  display: flex;
  justify-content: center;
  color: red;
  text-decoration: underline;
`;

// Vampires can gain experience by trying new blood, creature ghouls and the exp gained from the ghouls fighting
// all actions that would reveal the vampire would either cure or gain them exp or blood points to be used to improve their strength
// that way younger vampires are more likely to do these things then the older ones who don't need strength as badly
// Combined with the starving yourself (lower hp) increases you strength

// Fast Regeneration
// Life Absorption
// Create Lesser Race by Bloodsucking
// Weapon Resistance
// Ice-type Damage Resistance

// Slow movement penalty during Sunlight
// Vulnerability to Holy Water.
// Vulnerability to Silver weapons (only lesser vampires)
// Added damage by Positive Energy

