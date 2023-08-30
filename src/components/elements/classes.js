import React from "react";
import styled from "styled-components";
import { colors, monadColors } from "./colors";
import { _try } from "./util";
// Team Vs Self Increases, they should all have team so the self ones should go somewhere also :/
export const classList = {
  // Generally should be "Team" not "Self"
  Mage: {
    name: "Mage",
    stats: {
      magic: 1,
    },
    team: "Magic +1.",
    self: "",
    images: [
      "https://ottotsuma.github.io/images/people/b5185cca016eecd75b62833fdf2cfc43.jpg",
    ],
    notes:
      "Solve all your problems with magic. Mages are the basic class for magical classes.",
    tier: "normal",
    description: "Solve all your problems with magic. Mages are the basic class for magical classes.",
  },
  Fighter: {
    stats: {
      strength: 1,
    },
    team: "Strength +1.",
    self: "",
    images: [
      "https://ottotsuma.github.io/images/people/f7327f5068dcdd7e858b87e1da393c62.jpg",
    ],
    notes: "Fighters are the base class for physical classes.",
    tier: "normal",
  },
  Rogue: {
    stats: {
      dexterity: 1,
    },
    team: "Dexterity +1.",
    self: "",
    images: [
      "https://ottotsuma.github.io/images/people/0156c7576b1704ee70a55e4d1bd0db74.jpg",
    ],
    notes: `What doesn't kill you makes you stronger. Combine with beast souls to gain their power.`,
    tier: "normal",
  },
  Kʼawiil: {
    stats: {},
    team: "",
    self: "All stats increase as the rain gets stronger. Max 10%.",
    notes: "",
    tier: "legendary",
  },
  Necromancer: {
    name: "Necromancer",
    stats: {},
    team: "",
    images: [
      "https://ottotsuma.github.io/images/people/necro.jpg",
      "https://ottotsuma.github.io/images/people/oldmage.jpg",
    ],
    notes: "",
    tier: "normal",
    description: "",
  },
  "Shield Warrior": {
    stats: {
      "Shield Skills": "+1",
    },
    self: "Shield Skills: +1.",
    team: "",
    images: [],
    notes: "",
    tier: "",
    description: "",
  },
  Warrior: {
    stats: {},
    self: "",
    team: "Stamina +10%.",
    notes: "",
    tier: "normal",
    images: [],
    description: "",
  },
  "Guardian Knight": {
    stats: {},
    self: "Absorb 3% of damage done to a maximum of 7 allies within 10m.",
    team: "",
    images: [],
    description: "",
    notes: "",
    tier: "",
  },
  Berserker: {
    stats: {},
    self: "Strength increases as health decreases.",
    team: "",
    notes: "",
    images: [],
    description: "",
    tier: "",
  },
  Cursemancer: {
    stats: {},
    team: "Aggro skills are slightly more effective.",
    self: "",
    images: [],
    description: "",
    notes: "Can curse up a storm of colorful language.",
    tier: "",
  },
  Witch: {
    stats: {},
    team: "The more witches in your team, the stronger Coven spells become.",
    images: ["https://ottotsuma.github.io/images/people/witch6.jpg"],
    notes: "",
    tier: "",
    description: "",
  },
  Summoner: {
    stats: {},
    team: "Summon maintain cost is reduced.",
    self: "Summon Eidolon Spell +1 (MAX: 10).",
    description: "",
    notes: "",
    images: [],
    tier: "normal",
  },
  Paladin: {
    name: "Paladin",
    team: "Unholy protection, unholy attacks deal 3% less.",
    self: "Can use holy objects, cannot use unholy objects.",
    description: "",
    notes: "",
    images: [],
    tier: "normal",
    stats: {},
    InnateSkills: ['Holy Practitioner'],
  },
  "Fallen Paladin": {
    name: "Fallen Paladin",
    team: "Your God has forsaken you, your previous God will not watch over your team.",
    description: "",
    notes: "",
    images: [],
    tier: "normal",
    stats: {
      "Physical Damage Reduction": 1,
    },
    InnateSkills: ['Fallen Paladin'],
  },
  Guardian: {
    name: "Guardian",
    stats: {},
    team: "",
    self: "",
    images: [],
    notes: "",
    tier: "normal",
    description: "",
  },
  Knight: {
    name: "Knight",
    stats: {},
    team: "Test",
    self: "",
    images: [],
    notes: "",
    tier: "normal",
    description: "Test description",
  },
  Pyromancer: {
    stats: {},
    team: "Fire spells cost 5% less.",
    self: "",
    images: [],
    description: "",
    notes: "",
    tier: "normal",
  },
  Battlemage: {
    stats: {
      strength: 1,
      magic: 1,
    },
    team: "",
    self: "",
    images: [],
    description: "",
    notes: "",
    tier: "normal",
  },
  Scout: {
    stats: {
      sense: 2,
    },
    team: "Sense +1.",
    images: [],
    description: "",
    notes: "",
    tier: "normal",
  },
  Thief: {
    stats: {
      dexterity: 1,
    },
    team: "",
    images: [],
    description: "",
    notes: "",
    tier: "normal",
  },
  Assassin: {
    stats: {},
    team: "Damage from sneak attacks is increased.",
    self: "",
    images: [],
    description: "",
    notes: "",
    tier: "rare",
  },
  "Knight Commander": {
    stats: {},
    team: "Commanded units HP is increased.",
    images: [],
    description: "",
    notes: "",
    tier: "rare",
  },
  Pirate: {
    stats: {},
    team: "🏴‍☠️ Swimming +5% movement speed.",
    images: ["https://ottotsuma.github.io/images/people/f93a36fab2810f29163626fd22075750.jpg", "https://ottotsuma.github.io/images/ships/66ac653f7b03e727d39d9072dfb79887.jpg"], // 8169a4b7ab02aa720cafb7b0ea803385, 2db7f9e0803d4d7f5a77990ae3115354
    description: "",
    notes: "",
    tier: "rare",
  },
  Witchdoctor: {
    stats: {},
    team: "",
    images: [],
    description: "",
    notes: "",
    tier: "rare",
  },
  Priest: {
    stats: {},
    team: "",
    self: "Can use holy objects, cannot use unholy objects",
    images: [],
    description: "",
    notes: "",
    tier: "rare",
  },
  Inquisitor: {
    stats: {},
    team: "",
    self: "Can use holy objects, cannot use unholy objects",
    images: [],
    description: "",
    notes: "",
    tier: "rare",
  },
  Darkknight: {
    stats: {},
    team: "",
    self: "Cannot use holy objects, can use unholy objects",
    images: [],
    description: "",
    notes: "",
    tier: "rare",
  },
  Viking: {
    stats: {},
    team: "",
    self: "Swimming +5% movement speed.",
    images: [],
    description: "",
    notes: "",
    tier: "epic",
  },
  "Blood Warrior": {
    stats: {},
    team: "",
    self: "Access to blood skills.",
    images: [],
    description: "",
    notes: "",
    tier: "epic",
  },
  Deathknight: {
    stats: {},
    team: "",
    self: "",
    images: [],
    description: "",
    notes: "",
    tier: "epic",
  },
  King: {
    stats: {
      HP: "*2",
      MP: "*1.5",
      Vitality: "*1.10",
      Endurance: "*1.10",
      Willpower: "*1.10",
      Magic: "*1.10",
      Strength: "*1.10",
      Dexterity: "*1.10",
      Sense: "*1.10",
      Charisma: "*1.10",
    },
    team: "",
    self: "All Stats + 10%, HP + 100%, MP + 50%, movement speed -10%.",
    images: ["https://ottotsuma.github.io/images/people/king.jpg"],
    notes: "Born to rule.",
    tier: "legendary",
  },
  Demiurge: {
    stats: {},
    team: "+1 to the main stat of crafted items",
    self: "",
    images: [],
    description: "",
    notes: "",
    tier: "legendary",
  },
  Pope: {
    stats: {},
    team: "",
    self: "",
    images: [],
    description: "",
    notes: "",
    tier: "unique",
  },
  "Phoenix-Warrior": {
    stats: {
      magic: 2,
      willpower: 2,
      HPMultiplier: -0.1,
      MPMultiplier: 1.1,
    },
    team: "Fire Resistance +1%",
    self: "",
    images: [
      "https://images.squarespace-cdn.com/content/v1/57d34a6d725e254062172fe9/1579643445519-XXWBWFTZIZ23TNWBECJI/thumbnail_phoenix+rising.jpg",
    ],
    notes:
      "phenix is a long-lived bird that is cyclically regenerated or reborn.",
    tier: "epic",
  },
  Druid: {
    name: "Druid",
    stats: {
    },
    team: "",
    images: [
      "",
    ],
    notes:
      "",
    tier: "rare",
    description: "",
  },
  Swordsmen: {
    name: "Swordsmen",
    stats: {
    },
    team: "",
    images: [
      "",
    ],
    notes:
      "",
    tier: "normal",
    description: "",
  },
  magician: {
    name: "magician",
    stats: {
    },
    team: "",
    images: [
      "",
    ],
    notes:
      "",
    tier: "normal",
    description: "",
  },
  merchant: {
    name: "merchant",
    stats: {
    },
    team: "",
    images: [
      "",
    ],
    notes:
      "",
    tier: "normal",
    description: "",
  },
  thief: {
    name: "thief",
    stats: {
    },
    team: "",
    images: [
      "",
    ],
    notes:
      "",
    tier: "normal",
    description: "",
  },
  archer: {
    name: "archer",
    stats: {
    },
    team: "",
    images: [
      "",
    ],
    notes:
      "",
    tier: "normal",
    description: "",
  },
  bowman: {
    name: "bowman",
    stats: {
    },
    team: "",
    images: [
      "",
    ],
    notes:
      "",
    tier: "normal",
    description: "",
  },
  acolyte: {
    name: "acolyte",
    stats: {
    },
    team: "",
    images: [
      "",
    ],
    notes:
      "",
    tier: "normal",
    description: "",
  },
  Crusader: {
    name: "Crusader",
    stats: {
    },
    team: "",
    images: [
      "",
    ],
    notes:
      "",
    tier: "normal",
    description: "",
  },
  Wizard: {
    name: "Wizard",
    stats: {
    },
    team: "",
    images: [
      "",
    ],
    notes:
      "",
    tier: "normal",
    description: "",
  },
  Sage: {
    name: "Sage",
    stats: {
    },
    team: "",
    images: [
      "",
    ],
    notes:
      "",
    tier: "normal",
    description: "",
  },
  Blacksmith: {
    name: "Blacksmith",
    stats: {
    },
    team: "",
    images: [
      "",
    ],
    notes:
      "",
    tier: "normal",
    description: "",
  },
  Whitesmith: {
    name: "Whitesmith",
    stats: {
    },
    team: "",
    images: [
      "",
    ],
    notes:
      "",
    tier: "normal",
    description: "",
  },
  Alchemist: {
    name: "Alchemist",
    stats: {
    },
    team: "",
    images: [
      "",
    ],
    notes:
      "",
    tier: "normal",
    description: "",
  },
  Stalker: {
    name: "Stalker",
    stats: {
    },
    team: "",
    images: [
      "",
    ],
    notes:
      "",
    tier: "normal",
    description: "",
  },
  Hunter: {
    name: "Hunter",
    stats: {
    },
    team: "",
    images: [
      "",
    ],
    notes:
      "",
    tier: "normal",
    description: "",
  },
  Sniper: {
    name: "Sniper",
    stats: {
    },
    team: "",
    images: [
      "",
    ],
    notes:
      "",
    tier: "normal",
    description: "",
  },
  Bard: {
    name: "Bard",
    stats: {
    },
    team: "",
    images: [
      "",
    ],
    notes:
      "",
    tier: "normal",
    description: "",
  },
  Dancer: {
    name: "Dancer",
    stats: {
    },
    team: "",
    images: [
      "",
    ],
    notes:
      "",
    tier: "normal",
    description: "",
  },
  Clown: {
    name: "Clown",
    stats: {
    },
    team: "",
    images: [
      "",
    ],
    notes:
      "",
    tier: "normal",
    description: "",
  },
  Monk: {
    name: "Monk",
    stats: {
    },
    team: "",
    images: [
      "",
    ],
    notes:
      "",
    tier: "normal",
    description: "",
  },
  Champion: {
    name: "Champion",
    stats: {
    },
    team: "",
    images: [
      "",
    ],
    notes:
      "",
    tier: "normal",
    description: "",
  },
  Barbarian: {
    name: "Barbarian",
    stats: {
    },
    team: "",
    images: [
      "",
    ],
    notes:
      "",
    tier: "normal",
    description: "",
  },
  Spearman: {
    name: "Spearman",
    stats: {
    },
    team: "",
    images: [
      "",
    ],
    notes:
      "",
    tier: "normal",
    description: "",
  },
  Cleric: {
    name: "Cleric",
    stats: {
    },
    team: "",
    images: [
      "",
    ],
    notes:
      "",
    tier: "normal",
    description: "",
  },
  Sorcerer: {
    name: "Sorcerer",
    stats: {
    },
    team: "",
    images: [
      "",
    ],
    notes:
      "",
    tier: "normal",
    description: "",
  },
  Cavalier: {
    name: "Cavalier",
    stats: {
    },
    team: "",
    images: [
      "",
    ],
    notes:
      "",
    tier: "normal",
    description: "",
  },
  Oracle: {
    name: "Oracle",
    stats: {
    },
    team: "",
    images: [
      "",
    ],
    notes:
      "",
    tier: "normal",
    description: "",
  },
  Ranger: {
    name: "Ranger",
    stats: {
    },
    team: "",
    images: [
      "",
    ],
    notes:
      "",
    tier: "normal",
    description: "",
  },
  Brawler: {
    name: "Brawler",
    stats: {
    },
    team: "",
    images: [
      "",
    ],
    notes:
      "",
    tier: "normal",
    description: "",
  }, 
  Magnus: {
    name: "Magnus",
    stats: {
    },
    team: "",
    images: [
      "",
    ],
    notes:
      "",
    tier: "normal",
    description: "",
  }, 
  Archaist: {
    name: "Archaist",
    stats: {
    },
    team: "",
    images: [
      "",
    ],
    notes:
      "",
    tier: "normal",
    description: "",
  }, 
  Samurai: {
    name: "Samurai",
    stats: {
    },
    team: "",
    images: [
      "",
    ],
    notes:
      "",
    tier: "normal",
    description: "",
  }, 
  Ninja: {
    name: "Ninja",
    stats: {
    },
    team: "",
    images: [
      "",
    ],
    notes:
      "",
    tier: "normal",
    description: "",
  }, 
  Gunslinger: {
    name: "Gunslinger",
    stats: {
    },
    team: "",
    images: [
      "",
    ],
    notes:
      "",
    tier: "normal",
    description: "",
  },
};
//   Investigator, Shaman, Skald, Slayer, Swashbuckler, Warprist, Kineticist, Vigilante, Spiritualist, Psychic, Occultist, mesmerist, medium, zealot, totem warrior, or berzerker

// https://www.dandwiki.com/wiki/Aztec_Warrior_(3.5e_Class)

export default function ClassDisplay(Class) {
  const Data = _try(() => classList[Class]);
  if (Data) {
    return (
      <BackgroundWrap>
        <Wrap Tier={monadColors[Data.tier] || ""}>
          <Name>{Class}</Name>
          {Data.images && Data.images[0] ? (
            <Display src={Data.images[0]} alt={Class} />
          ) : (
            <></>
          )}
          <Info>{Data.notes ? Data.notes : ""}</Info>
          <Self>{Data.self ? "Self: " + Data.self : ""}</Self>
          <Team>{Data.team ? "Team Bonus: " + Data.team : ""}</Team>
        </Wrap>
      </BackgroundWrap>
    );
  } else {
    return <div></div>;
  }
}
const BackgroundWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrap = styled.div`
  border-radius: 6px;
  padding: 5px;
  max-width: 200px;
  color: ${colors.black.off};
  background: ${colors.white.off};
  margin: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-width: thick;
  border-style: solid;
  border-color: ${(props) => props.Tier};
`;
const Name = styled.div`
  font-size: xx-large;
`;
const Display = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;
const Info = styled.div`
  margin-bottom: 5px;
`;
const Team = styled.div``;
const Self = styled.div`
  margin-bottom: 5px;
`;
