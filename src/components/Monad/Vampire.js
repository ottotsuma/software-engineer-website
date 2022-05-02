import React, { useState } from "react";
import styled from "styled-components";
import Item from "./../elements/item";
import Equipment from "./../elements/equipment";
import Stats from "./../elements/stats";
import Spells, { spellList } from "./../elements/spells";
import { ListofMagicTypes } from "./../elements/spells";
import { colors, monadColors, textColors } from "./../elements/colors";
import { _try } from './../elements/util'

export function Mage() {
  const [type, SetType] = React.useState('mana')
  const entries = Object.entries(spellList)
  const ShownSpells = []
  for (let index = 0; index < entries.length; index++) {
    const elementArray = _try(() => entries[index][1].element, ['none'])
    if (elementArray.includes(type)) {
      ShownSpells.push({ name: entries[index][0], level: 1 })
    }
  }
  const MageTypes = ['mana', 'fire', 'metal', 'plant', 'water', 'earth', 'lightning', 'ice', 'wind', 'shadow', 'light', 'sound', 'poison', 'time', 'gravity', 'portal', 'spirit', 'blood', 'none']
  const TypesArray = []
  for (let index = 0; index < MageTypes.length; index++) {
    TypesArray.push(
      <ElementalButton color={monadColors[MageTypes[index]]} key={MageTypes[index] + 'button'} onClick={() => SetType(MageTypes[index])}>{MageTypes[index]}</ElementalButton>
    )
  }

  return (
    <Wrap>
      <h4>Types of Mages:</h4>
      <p>Considering mages can move into various different roles, their skill list is wide rather then deep. The depth of a class comes from specializing, after reaching a level of proficiency in one area.</p>
      <ElementalButtonWrap>{TypesArray}</ElementalButtonWrap>
      <Spells spells={ShownSpells} type={"mage"} />
    </Wrap>
  );
}
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const ElementalButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const ElementalButton = styled.button`
  width: fit-content;
  padding: 2px;
  background: ${props => props.color ? props.color : ''};
`;

export default function Vampire() {
  const array = [];
  for (let index = 0; index < ListofMagicTypes.length; index++) {
    const element = ListofMagicTypes[index];
    array.push(<div key={element + [index]}>{element}</div>);
  }
  return (
    <div>
      <Mage />
      <SchoolSchedule />
      <h4>Clubs</h4>
      {Object.keys(SchoolClubs)}
      <h4>Lesson Options</h4>
      {Object.keys(LessonOptions)}
      <h4>Magic Types</h4>
      {array}
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
  return (
    <ScheduleWrapper>
      <ScheduleDay>
        {/* Times */}
        <DayTitle>
          <h4>Times</h4>
        </DayTitle>
        <Block style={{ gridRow: "time-0800" }}>
          <p>8:00 - 9:00</p>
        </Block>
        <Block style={{ gridRow: "time-0900" }}>
          <p>9:00 - 10:00</p>
        </Block>
        <Block style={{ gridRow: "time-1000" }}>
          <p>10:00 - 11:00</p>
        </Block>
        <Block style={{ gridRow: "time-1100" }}>
          <p>11:00 - 12:00</p>
        </Block>
        <Block style={{ gridRow: "time-1200" }}>
          <p>12:00 - 13:00</p>
        </Block>
        <Block style={{ gridRow: "time-1300" }}>
          <p>13:00 - 14:00</p>
        </Block>
        <Block style={{ gridRow: "time-1400" }}>
          <p>14:00 - 15:00</p>
        </Block>
        <Block style={{ gridRow: "time-1500" }}>
          <p>15:00 - 16:00</p>
        </Block>
        <Block style={{ gridRow: "time-1600" }}>
          <p>16:00 - 17:00</p>
        </Block>
        {/* Day 1 */}
        <DayTitle style={{ gridColumn: "track-1" }}>
          <h4>Day 1</h4>
        </DayTitle>
        <Block
          style={{
            gridColumn: "track-1",
            gridRow: "time-0800",
            background: colors.purple.normal,
          }}
        >
          <p>Basics of being a mage</p>
          <span>Classroom</span>
          <span>Lubin</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-1",
            gridRow: "time-0900",
            background: colors.yellow.electric,
          }}
        >
          <p>Elemental class - Lightning</p>
          <span>Classroom</span>
          <span>Edgar</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-1",
            gridRow: "time-1000",
            background: colors.grey.light,
          }}
        >
          <p>Practice Period</p>
        </Block>
        <Block
          style={{
            gridColumn: "track-1",
            gridRow: "time-1100",
            background: colors.red.normal,
          }}
        >
          <p>Dueling</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-1",
            gridRow: "time-1200",
            background: colors.grey.light,
          }}
        >
          <p>Lunch</p>
        </Block>
        <Block
          style={{
            gridColumn: "track-1",
            gridRow: "time-1300",
            background: colors.white.off,
          }}
        >
          <p>Battle tactics & formations</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-1",
            gridRow: "time-1400",
            background: colors.white.off,
          }}
        >
          <p>Battle tactics & formations</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-1",
            gridRow: "time-1500",
            background: colors.grey.light,
          }}
        >
          <p>Option 1 - Farming</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-1",
            gridRow: "time-1600",
            background: colors.grey.light,
          }}
        >
          <p>Option 2 - ???</p>
          <span>???</span>
          <span>???</span>
        </Block>
        {/* Day 2 */}
        <DayTitle style={{ gridColumn: "track-2" }}>
          <h4>Day 2</h4>
        </DayTitle>
        <Block
          style={{
            gridColumn: "track-2",
            gridRow: "time-0800",
            background: colors.grey.light,
          }}
        >
          <p>Physical Fitness</p>
          <span>Exercise Field</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-2",
            gridRow: "time-1000",
            background: colors.yellow.electric,
          }}
        >
          <p>Elemental class - Lightning</p>
          <span>Classroom</span>
          <span>Edgar</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-2",
            gridRow: "time-1100",
            background: colors.yellow.electric,
          }}
        >
          <p>Elemental class - Lightning</p>
          <span>Classroom</span>
          <span>Edgar</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-2",
            gridRow: "time-1200",
            background: colors.grey.light,
          }}
        >
          <p>Lunch</p>
        </Block>
        <Block
          style={{
            gridColumn: "track-2",
            gridRow: "time-1300",
            background: colors.grey.light,
          }}
        >
          <p>Beast Studies</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-2",
            gridRow: "time-1400",
            background: colors.grey.light,
          }}
        >
          <p>Finance & Math</p>
          <span>???</span>
          <span>???</span>
        </Block>
        {/* Day 3 */}
        <DayTitle style={{ gridColumn: "track-3" }}>
          <h4>Day 3</h4>
        </DayTitle>
        <Block
          style={{
            gridColumn: "track-3",
            gridRow: "time-0800",
            background: colors.purple.normal,
          }}
        >
          <p>Basics of being a mage</p>
          <span>Classroom</span>
          <span>Lubin</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-3",
            gridRow: "time-1100",
            background: colors.red.normal,
          }}
        >
          <p>Dueling</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-3",
            gridRow: "time-1200",
            background: colors.grey.light,
          }}
        >
          <p>Lunch</p>
        </Block>
        <Block
          style={{
            gridColumn: "track-3",
            gridRow: "time-1500",
            background: colors.grey.light,
          }}
        >
          <p>Navigating & Tracking</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-3",
            gridRow: "time-1600",
            background: colors.grey.light,
          }}
        >
          <p>Navigating & Tracking</p>
          <span>???</span>
          <span>???</span>
        </Block>
        {/* Day 4 */}
        <DayTitle style={{ gridColumn: "track-4" }}>
          <h4>Day 4</h4>
        </DayTitle>
        <Block
          style={{
            gridColumn: "track-4",
            gridRow: "time-0800",
            background: colors.yellow.electric,
          }}
        >
          <p>Elemental class - Lightning</p>
          <span>Classroom</span>
          <span>Edgar</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-4",
            gridRow: "time-1200",
            background: colors.grey.light,
          }}
        >
          <p>Lunch</p>
        </Block>
        <Block
          style={{
            gridColumn: "track-4",
            gridRow: "time-1500",
            background: colors.grey.light,
          }}
        >
          <p>Beast Studies</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-4",
            gridRow: "time-1600",
            background: colors.grey.light,
          }}
        >
          <p>Beast Studies</p>
          <span>???</span>
          <span>???</span>
        </Block>
        {/* Day 5 */}
        <DayTitle style={{ gridColumn: "track-5" }}>
          <h4>Day 5</h4>
        </DayTitle>
        <Block
          style={{
            gridColumn: "track-5",
            gridRow: "time-0800",
            background: colors.purple.normal,
          }}
        >
          <p>Basics of being a mage</p>
          <span>Classroom</span>
          <span>Lubin</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-5",
            gridRow: "time-0900",
            background: colors.grey.light,
          }}
        >
          <p>Physical Fitness</p>
          <span>Exercise Field</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-5",
            gridRow: "time-1100",
            background: colors.grey.light,
          }}
        >
          <p>Cooking</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-5",
            gridRow: "time-1200",
            background: colors.grey.light,
          }}
        >
          <p>Lunch</p>
        </Block>
        <Block
          style={{
            gridColumn: "track-5",
            gridRow: "time-1500",
            background: colors.grey.light,
          }}
        >
          <p>History</p>
          <span>???</span>
          <span>???</span>
        </Block>
        {/* Day 6 */}
        <DayTitle style={{ gridColumn: "track-6" }}>
          <h4>Day 6</h4>
        </DayTitle>
        <Block
          style={{
            gridColumn: "track-6",
            gridRow: "time-1100",
            background: colors.red.normal,
          }}
        >
          <p>Dueling</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-6",
            gridRow: "time-1200",
            background: colors.grey.light,
          }}
        >
          <p>Lunch</p>
        </Block>
        {/* Day 7 */}
        <DayTitle style={{ gridColumn: "track-7" }}>
          <h4>Day 7</h4>
        </DayTitle>
        <Block
          style={{
            gridColumn: "track-7",
            gridRow: "time-0800",
            background: colors.purple.normal,
          }}
        >
          <p>Basics of being a mage</p>
          <span>Classroom</span>
          <span>Lubin</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-7",
            gridRow: "time-0900",
            background: colors.grey.lighter,
          }}
        >
          <p>The role of DPS</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-7",
            gridRow: "time-1000",
            background: colors.grey.light,
          }}
        >
          <p>Beast Studies</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-7",
            gridRow: "time-1100",
            background: colors.grey.light,
          }}
        >
          <p>Relationships and citizenship</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-7",
            gridRow: "time-1200",
            background: colors.grey.light,
          }}
        >
          <p>Lunch</p>
        </Block>
        <Block
          style={{
            gridColumn: "track-7",
            gridRow: "time-1300",
            background: colors.grey.light,
          }}
        >
          <p>Practice Period</p>
        </Block>
        <Block
          style={{
            gridColumn: "track-7",
            gridRow: "time-1400",
            background: colors.red.normal,
          }}
        >
          <p>Team work - Dungeons</p>
          <span>???</span>
          <span>???</span>
        </Block>
        <Block
          style={{
            gridColumn: "track-7",
            gridRow: "time-1500",
            background: colors.red.normal,
          }}
        >
          <p>Team work - Dungeons</p>
          <span>???</span>
          <span>???</span>
        </Block>{" "}
        <Block
          style={{
            gridColumn: "track-7",
            gridRow: "time-1600",
            background: colors.red.normal,
          }}
        >
          <p>Team work - Dungeons</p>
          <span>???</span>
          <span>???</span>
        </Block>
      </ScheduleDay>
    </ScheduleWrapper>
  );
}

export const SchoolClubs = {
  "Enchanting Club" : {
    notes: '',
  },
  "Dueling Club" : {
    notes: '',
  },
  "Dungeoneering Club" : {
    notes: '',
  },
  "Archaeology Club" : {
    notes: '',
  },
  "Construction Club" : {
    notes: '',
  },
  "Cooking Club" : {
    notes: '',
  },
  "Crafting Club" : {
    notes: '',
  },
  "Divination Club" : {
    notes: '',
  },
  "Farming Club" : {
    notes: '',
  },
  "Fishing Club" : {
    notes: '',
  },
  "Archery Club" : {
    notes: '',
  },
  "Hunting Club" : {
    notes: '',
  },
  "Potions Club" : {
    notes: '',
  },
  "Charms Club" : {
    notes: '',
  },
  "Alteration Club" : {
    notes: '',
  },
  "Mysticism Club" : {
    notes: '',
  },
  "Necromancy Club" : {
    notes: '',
  },
  "Conjuration Club" : {
    notes: '',
  },
  "Restoration Club" : {
    notes: '',
  },
  "Illusion Club" : {
    notes: '',
  },
  "Ancient magic Club" : {
    notes: '',
  },
  // Love magic, Astronomy,  Mental magic, Broomology, Divination, Study of Ancient Runes, Transfiguration, Wandlore, Household magic
  // Farming: - Weather magic, Botany, Herbalism, Animal magic, Magizoology,
  // Reading, Foreign Language, Improv, Acting, Writing, Dance, Book, Pottery
}
// Lessons are run by the academy and teachers, Clubs are student run.
export const LessonOptions = {
  "Enchanting" : {
    notes: '',
  },
  Thaumodynamics: {
    notes: 'Theoretical  and the Laws of Conservation of Magic.'
  },
  "Summoning Realms": {
    notes: 'Topologies of Summoning Circles.'
  },
  "Arcane Ethics": {
    notes: '',
  },
  "Biology" : {
    notes: 'Biology of Humans.',
  },
  "Physics" : {
    notes: '',
  },
  "Chemistry" : {
    notes: '',
  },
  "Geology" : {
    notes: '',
  },
  "Botany" : {
    notes: '',
  },
  "Zoology" : {
    notes: '',
  },
  "Magic Theory" : {
    notes: 'Understanding of magic particles and how their interaction with electromagnetic radiation, and the composition of spells.',
  },
  "Quantum Physics" : {
    notes: 'Understanding the function of subatomic particles, with an emphasis on magical particles.',
  },
  "Faux Physics" : {
    notes: 'Interaction of magical particles and naturally occuring energy',
  },
  "Faux Chemistry" : {
    notes: 'Interaction of magical particles and naturally occuring matter',
  },
  "Potions" : {
    notes: '',
  },
  "Alchemy" : {
    notes: 'This course covers the distillation of magical ingredients into components to create draughts that produce the desired effects. A hands-on course that will be evaluated based on the efficacy of your potion.',
  },
  "Crafting" : {
    notes: 'A hands-on class in the artificery lab where students will explore the magical properties of various metals, crystals, and other components, and create unique magical artifacts to (hopefully!) achieve the desired effect. Includes recent advances in technomancy and the interference of mundane technology with magical energies.',
  },
  "Cryptozoology" : {
    notes: 'a study into the unique magical creatures and their preferred habitats as well as the unique properties of magical creatures and their unusual adaptations.',
  },
  "Divination & Arithmancy" : {
    notes: 'A study of sensory perception through various types of divination such as palmistry, phrenology, astrology, tarot, using a scrying orb, tea reading, geomancy, and dowsing. Also delves into the power of math and numbers to determine meaning and divine past and future events.',
  },
  "Ethics of the Arcane" : {
    notes: 'What types of magic are ‘good’ and what types are bad? Should werewolves or vampires be allowed to attend magic school? Students are introduced to the philosophies of magic and major ethical issues throughout Magimundi history. Includes case studies and debates of ethical conundrums involving magic and the politics behind its use.',
  },
  "Healing" : {
    notes: 'A practical course in how to diagnose and treat magical maladies and mishaps. Includes spells for healing trauma, antidotes for curing poison, and an in-depth look at the potential for mundane medicine to be combined with magic.',
  },
  "Herbology" : {
    notes: 'A study into both the ecology and properties of magical plants. Includes hands-on work with parabotanical specimens as well as plant identification, harvesting, care, distillation and theoretical work about the magical and medicinal properties.',
  },
  "Magical Combat & Defense" : {
    notes: 'this course focuses on physical training and offensive and defensive spellcasting to help wizards prevail against a variety of villains, monsters and cursed objects.',
  },
  "Rituals & Evocation" : {
    notes: 'The basics of creating a magic circle, opening and closing a ritual, and combining magical energies to protect, heal, summon, banish, and more.',
  },
  "Rune Lore" : {
    notes: 'A look at Futhark runes, bound runes and other runic languages. Explore what a rune is comprised of, inscribed upon, and inscribed with, and which runes to use for desired effects.',
  },
}

// There can be cross over lessons between branches. Healing and farming both use Herbalism.
// https://powerlisting.fandom.com/wiki/Magic#Types_of_Magic

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
