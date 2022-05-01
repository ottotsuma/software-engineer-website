import React, { useState } from "react";
import styled from "styled-components";

import Item from "./../elements/item";
import Equipment from "./../elements/equipment";
import Stats from "./../elements/stats";
import Spells from "./../elements/spells";
import {ListofMagicTypes} from './../elements/spells'
import {colors, monadColors, textColors} from './../elements/colors'

export default function Vampire() {
  return (
    <div style={{ color: "black" }}>
      <SchoolSchedule />
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
      <div className="BreakPoint" />
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
          { name: "Porphyric Hemophilia", level: 1, negative: true },
          { name: "Noxiphilic Sanguivoria", level: 1, negative: true },
          { name: "Sanguinare Vampiris", level: 1, negative: true },
          { name: "Porphyria cutanea tarda", level: 1, negative: true },
          { name: "Porphyria ", level: 1, negative: true },

          // Drain Fatigue 5pts, Vampirism (after a three day incubation period)
        ]}
        type={"human"}
      />
      {/*  crimson flash, vampiric drain, vampiric wings, crimson aegis, Undying body, immortal body, unyielding blood demon, telepathy, fartalk */}
      <h1>Vampire Ranks</h1>
      <SubTitle>Vampires</SubTitle>
      <ul>
        <li>Vampire Noble + Ranks</li>
        <li>Vampire Knight</li>
        <li>Dhampir - Human/Vampire</li>
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
// Nahual - eagle warriors
const SubTitle = styled.h4`
  display: flex;
  justify-content: center;
  color: red;
  text-decoration: underline;
`;

// Vampires can gain experience by trying new blood, creating ghouls and the exp gained from the ghouls fighting
// all actions that would reveal the vampire would either cure or gain them exp or blood points to be used to improve their strength
// that way younger vampires are more likely to do these things then the older ones who don't need strength as badly
// Combined with the starving yourself (lower hp) increases you strength

// Fast Regeneration
// Life Absorption
// Create Lesser Species by Bloodsucking
// Weapon Resistance
// Ice-type Damage Resistance

// Slow movement penalty during Sunlight
// Vulnerability to Holy Water.
// Vulnerability to Silver weapons (only lesser vampires)
// Added damage by Positive Energy

export function SchoolSchedule() {
  console.log(ListofMagicTypes.length)
  return (
    <ScheduleWrapper>
      <ScheduleDay>
        {/* Times */}
        <DayTitle
        >
          <h4>Times</h4>
        </DayTitle>
        <Block
          style={{ gridRow: "time-0800" }}
        >
            <p>8:00 - 9:00</p>
        </Block>
        <Block
          style={{ gridRow: "time-0900" }}
        >
            <p>9:00 - 10:00</p>
        </Block>
        <Block
          style={{ gridRow: "time-1000" }}
        >
            <p>10:00 - 11:00</p>
        </Block>
        <Block
          style={{ gridRow: "time-1100" }}
        >
            <p>11:00 - 12:00</p>
        </Block>
        <Block
          style={{ gridRow: "time-1200" }}
        >
            <p>12:00 - 13:00</p>
        </Block>
        <Block
          style={{ gridRow: "time-1300" }}
        >
            <p>13:00 - 14:00</p>
        </Block>
        <Block
          style={{ gridRow: "time-1400" }}
        >
            <p>14:00 - 15:00</p>
        </Block>
        <Block
          style={{ gridRow: "time-1500" }}
        >
            <p>15:00 - 16:00</p>
        </Block>
        <Block
          style={{ gridRow: "time-1600" }}
        >
            <p>16:00 - 17:00</p>
        </Block>
        {/* Day 1 */}
        <DayTitle
          style={{ gridColumn: "track-1" }}
        >
          <h4>Day 1</h4>
        </DayTitle>
        <Block
          style={{ gridColumn: "track-1", gridRow: "time-0800", background: colors.purple.normal  }}
        >
          <p>
            Basics of being a mage
          </p>
          <span>Classroom</span>
          <span>Lubin</span>
        </Block>
        <Block
          style={{ gridColumn: "track-1", gridRow: "time-0900", background: colors.yellow.electric }}
        >
          <p>
            Elemental class - Lightning
          </p>
          <span>Classroom</span>
          <span>Edgar</span>
        </Block>
        <Block
          style={{ gridColumn: "track-1", gridRow: "time-1000", background: colors.grey.light }}
        >
          <p>
            Practice Period
          </p>
        </Block>
        <Block
          style={{ gridColumn: "track-1", gridRow: "time-1100", background: colors.red.normal }}
        >
          <p>
            Dueling
          </p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{ gridColumn: "track-1", gridRow: "time-1200", background: colors.grey.light }}
        >
          <p>
            Lunch
          </p>
        </Block>
        <Block
          style={{ gridColumn: "track-1", gridRow: "time-1300", background: colors.white.off }}
        >
          <p>
            Battle tactics & formations
          </p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{ gridColumn: "track-1", gridRow: "time-1400", background: colors.white.off }}
        >
          <p>
            Battle tactics & formations
          </p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{ gridColumn: "track-1", gridRow: "time-1500", background: colors.grey.light }}
        >
          <p>
            Option 1
          </p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{ gridColumn: "track-1", gridRow: "time-1600", background: colors.grey.light }}
        >
          <p>
            Option 2
          </p>
          <span>???</span>
          <span>???</span>
        </Block>
        {/* Day 2 */}
        <DayTitle
          style={{ gridColumn: "track-2" }}
        >
          <h4>Day 2</h4>
        </DayTitle>
        {/* Day 3 */}
        <DayTitle
          style={{ gridColumn: "track-3" }}
        >
          <h4>Day 3</h4>
        </DayTitle>
        {/* Day 4 */}
        <DayTitle
          style={{ gridColumn: "track-4" }}
        >
          <h4>Day 4</h4>
        </DayTitle>
        {/* Day 5 */}
        <DayTitle
          style={{ gridColumn: "track-5" }}
        >
          <h4>Day 5</h4>
        </DayTitle>
                {/* Day 6 */}
                <DayTitle
          style={{ gridColumn: "track-6" }}
        >
          <h4>Day 6</h4>
        </DayTitle>
                {/* Day 7 */}
                <DayTitle
          style={{ gridColumn: "track-7" }}
        >
          <h4>Day 7</h4>
        </DayTitle>
      </ScheduleDay>
    </ScheduleWrapper>
  );
}

// 56 lessons. 
// -4 Basic Mage, a double lesson?
// -7 Element class, maybe double lessons.
// -1 History
// -1 Finance
// -1 Relationships and citizenship
// -1 Battle tactics & formations
// -1 Cooking
// -1 Navigating & Tracking
// -3 Group Coordination / Fighting
// -5 Dueling, Fighting Practice

// There can be cross over lessons between branches. Healing and farming both use Herbalism.
// https://powerlisting.fandom.com/wiki/Magic#Types_of_Magic
// Lessons other then combat and magic:
// History, Relationships, Finance, Citizenship, Study Time (Free Period), 

// Magic non-combat:
// Element class, Mage Class, Charms, Alteration, Mysticism, Necromancy, Conjuration, Restoration, Destruction, Illusion, Shadow Magic, Ancient magic, Love magic, Astronomy,  Mental magic, Broomology, Potions, Divination, Study of Ancient Runes, Transfiguration, Wandlore, Household magic

// Farming:
// Weather magic, Botany, Herbalism, Animal magic, Magizoology, 

// Battle Lessons:
// Group, Battle tactics, Camping, Cooking, Navigating, Dueling/Fighting

// Clubs:
// 
const ScheduleWrapper = styled.div`
  display: flex;
  font-size: 0.7em;
  background-image: url("https://img.freepik.com/free-photo/crumpled-paper-background_1373-412.jpg?size=626&ext=jpg&ga=GA1.2.1745401800.1611187200");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 5px;
`;
const ScheduleDay = styled.div`
  display: grid;
  grid-template-rows: repeat(9, 1fr);
  display: grid;
  grid-gap: 1em;
  grid-template-rows:
    [tracks] auto
    [time-0800] 1fr
    [time-0900] 1fr
    [time-1000] 1fr
    [time-1100] 1fr
    [time-1200] 1fr
    [time-1300] 1fr
    [time-1400] 1fr
    [time-1500] 1fr
    [time-1600] 1fr;
    
    grid-template-columns:
    [times] 4em
    [track-1-start] 1fr
    [track-1-end track-2-start] 1fr
    [track-2-end track-3-start] 1fr
    [track-3-end track-4-start] 1fr
    [track-4-end track-5-start] 1fr
    [track-5-end track-6-start] 1fr
    [track-6-end track-7-start] 1fr
    [track-7-end];
}
`;
const Block = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid black;
  color: black;
`;
const DayTitle = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;
