import React from "react";
import styled from "styled-components";
import { colors, monadColors } from "./colors";
import { _try } from "./util";

export const racesList = {
  // Binturong ,
  //  鳳凰, fenghuang, Wade-Giles romanization feng-huang, also called feng or (misleadingly) Chinese phoenix, in Chinese mythology, an immortal bird whose rare appearance is said to be an omen foretelling harmony at the ascent to the throne of a new emperor.
  Binturong: {
    name: "Binturong",
    stats: {
      charisma: 10,
      vitality: -2,
      dexterity: 1,
      endurance: -1,
      magic: 1,
      willpower: -1,
    },
    self: "",
    images: [
      "https://wpcdn.us-midwest-1.vip.tn-cloud.net/www.rimonthly.com/content/uploads/2020/06/Binturong-cute.jpg",
      "https://www.abconservation.org/wp-content/uploads/2020/03/2018-05-19-Journ%C3%A9e-Binturong-Boissi%C3%A8re-du-Dor%C3%A9-n%C2%B0080.jpg",
    ],
    notes: "",
    tier: "rare",
    disc: "The binturong (Arctictis binturong), also known as the bearcat, is a viverrid native to South and Southeast Asia. It is uncommon in much of its range, and has been assessed as Vulnerable on the IUCN Red List because of a declining population trend that is estimated at more than 30% since the mid 1980s. The binturong is the only living species in the genus Arctictis.",
    // https://tier-zoo.fandom.com/wiki/Red_Panda
  },
  "Red Panda": {
    name: "Red Panda",
    stats: {
      charisma: 10,
      vitality: -2,
      dexterity: 1,
      endurance: -1,
      magic: 1,
      willpower: -1,
    },
    // team: "Charisma +2.",
    self: "Cannot be hated.",
    images: [
      "https://ottotsuma.github.io/images/monsters/afa542f5244091d1ec8e995d4cab92af.jpg",
      "https://ottotsuma.github.io/images/monsters/bae7137a73f7e8020ba59aaaa5a3120e.jpg",
    ],
    notes: "",
    tier: "rare",
    disc: "The red panda (Ailurus fulgens), also known as the lesser panda, is a small mammal native to the eastern Himalayas and southwestern China. It has dense reddish-brown fur with a black belly and legs, white-lined ears, a mostly white muzzle and a ringed tail. Its head-to-body length is 51–63.5 cm (20.1–25.0 in) with a 28–48.5 cm (11.0–19.1 in) tail, and it weighs between 3.2 and 15 kg (7.1 and 33.1 lb). It is well adapted to climbing due to its flexible joints and curved semi-retractile claws.",
    // https://powerlisting.fandom.com/wiki/Red_Panda_Physiology & https://tier-zoo.fandom.com/wiki/Red_Panda
  },
  "Flaming Parrot": {
    name: "Flaming Parrot",
    stats: {
      charisma: 0,
      vitality: 0,
      dexterity: 0,
      endurance: 0,
      magic: 0,
      willpower: 0,
    },
    self: "Is constantly on fire.",
    images: [
    ],
    notes: "",
    tier: "unique",
    disc: "This parrot's feathers constantly burn. Combined with it's amazing ability to see in the dark, this leaves the parrot's eyes in constant pain.",
  },
  Human: {
    name:"Human",
    stats: { charisma: 2, sense: 1 },
    self: "Can use all basic tools.",
    images: "",
    notes: "",
    tier: "normal",
  },
  "Mana Creature": {
    stats: { magic: 5 },
    name: "Mana Creature",
    self: "Made of Mana, Magic +5.",
    images: "",
    notes: "All HP is converted to MP. When MP reaches zero, you will die.",
    tier: "legendary",
  },
  Orc: {
    stats: { strength: 2, vitality: 1 },

    self: "Small health regen when in combat.",
    images: "", // 31bc50c58f7987af3eeb4217b6696c6f
    notes: "",
    tier: "normal",
  },
  Gnoll: {
    stats: { sense: -2, dexterity: 1 },

    self: "Can gain access to spells/abilities early from their Demon Lord.",
    images: "",
    notes: "",
    tier: "normal",
  },
  Kemonomimi: {
    stats: { Sense: 2, Dexterity: 1 },

    self: "Their claws given them a built in weapon.",
    images: "",
    notes:
      "Kemonomimi, humans with animal ears, not to be confused with Ailuranthropy.",
    tier: "normal",
  },
  Dwarf: {
    stats: { Vitality: 2, Strength: 1 },
    name: "Dwarf",
    self: "Small resistance to spell effects, but lower success with spells.",
    images: "",
    notes: "",
    tier: "normal",
    disc:"Dwarves are often found around mountains, or deep underground. Even Dwarves that move to human cities build their houses underground. While they don't have complete Dark Vision naturally, they are able to see in the dark as if there was a little light even when there is none.",
  },
  Elf: {
    stats: { charisma: 2, Magic: 1 },
    name: "Elf", // Woodland Elf
    self: "Charming is easier.",
    images: "",
    notes: "[Woodland / Sun elves, Sylvan ]🧝‍♂️, Plant element.",
    tier: "normal",
    disc: "Woodland Elves, more commonly referred to as just 'Elves' are the elves who stayed behind in the mother forest during the great split. They have an affinity with the plant element, and worship the nature of the forests. They consider other types of elves as cursed."
  },
  "Snow Elf": {
    name:'Snow Elf',
    stats: {},
    self: "Cold resist +5%.",
    images: [],
    notes: "Cave elves, Ice element.",
    tier: "rare",
    disc: "Snow elves are a branch of elves who split from their forest dwelling cousins to go north into the cold climate. They mostly live in caves in areas of tundra, ice or snow. They believe that the harsh environment is natures way of weeding out the weak. They have an affinity with ice element.",
  },
  "Dark Elf": {
    name:'Desert Elf',
    stats: { willpower: 2 },
    disc: "Desert Elves, also known as Dark Elves due to their ash-grey skin; are a branch of elves who split from their forest dwelling cousins to go south into the hot deserts. They mostly live nomadic lives. They believe that the sun which gives energy and life to all things is the blessing left by their God. They have an affinity with the fire element.",
    self: "Resist heat +5%.",
    images: [],
    notes:
      "Desert Elf, Umbral, Grey Elf, Ash Elf, NOT Drow. They make no sense. Fire element.",
    tier: "rare",
    link: "https://www.5esrd.com/races/elf/subrace-options/umbral-elf/, https://www.reddit.com/r/UnearthedArcana/comments/bha9uj/elven_subrace_ash_elf_a_tough_race_of_greyskinned/, https://www.artstation.com/artwork/zrZXd",
  },
  "Water Elf": {
    name: "Water Elf",
    stats: {},
    self: "Can breath underwater.",
    images: [],
    notes: "Sea Elf, Water Element.",
    tier: "rare",
    disc:'Water elves, a lost race of elves that set off into the sea during the great split of elves, they had seen the ocean had a great variety of nature and hoped to find the source. Their reverence for water has gained them the favor of the water element.',
  },
  Vampire: {
  // All actions that would reveal the vampire would either heal (HP) or gain them EXP or blood points to be used to improve their strength.
  // That way younger vampires are more likely to do these things then the older ones who don't need strength as badly.
  // Combined with the starving yourself (lower hp) increases you strength.

  // Weaknesses: Hunger level, Fire (element), Light (element), Silver (only lesser vampires), Sunlight. Strengths: Ice-resistance, Weapon Resistance, Create lesser species (Skill), life absorption (heal on hit? Skill?), fast regeneration (Normal HP regen + % of that. Not total HP %. So 100HP and regen 10HP/S a 10% increase is 11HP/S.). 
  // Misc: Vampires can gain experience by trying new blood. And unlock a higher level of blood skills.
    stats: {
      strength: 1,
      vitality: 1,
      magic: 1,
      dexterity: 1,
      sense: 1,
      charisma: 1,
      willpower: -2,
    },

    self: "Blood magic is always unlocked. 🧛‍♂️",
    notes:
      '{ name: "Vampire Eyes", level: 1 }, { name: "Vampiric Powers", level: 1 },{ name: "Vampire", level: 1 },',
    tier: "rare",
    images: [
      "https://ottotsuma.github.io/images/people/7ba7da6ab05c5f29e2fd5bfc0516948c.jpg",
      "https://ottotsuma.github.io/images/people/3cbeaef31df0449953933745c69dc0bc.jpg"
      // 7ba7da6ab05c5f29e2fd5bfc0516948c, 3cbeaef31df0449953933745c69dc0bc, kururu_by_cglas_d9g4c3a-pre, 82f23c130566f90858bea74138c47f70
    ],
    disc: "Vampires are members of the undead. There are many sub-species of vampire, from the intelligent high vampires to mindless beasts. They excel in the use of Blood, being able to learn blood magic and blow skills though their vampire skill tree. They can become faster and stronger then average humanoids, however the stronger they become the stronger their weaknesses become. Direct weaknesses like: sunlight and fire; as well as their craving for blood.",
    // https://powerlisting.fandom.com/wiki/Red_Panda_Physiology & https://tier-zoo.fandom.com/wiki/Red_Panda
  },
  Ghoul: {
      stats: {
        strength: 3,
        vitality: 4,
        magic: -1,
        dexterity: -2,
        sense: -2,
        charisma: -3,
        willpower: -2,
      },
      self: "",
      notes: 'Ghouls - Some intelligence, Zombies - None. The main difference between Ghoul and Zombie is that the ghoul is a demon-like creature or spirit that feed on dead human flesh while the Zombie is an undead corpse which goes around feeding on living human for their flesh.',
      tier: "normal",
      images: [],
      disc: ".",
    },
  Automitia: {
    stats: {},

    self: "",
    images: "",
    notes: "",
    tier: "rare",
  },
  Undead: {
    stats: {},
    name: "Undead",
    self: "",
    images: "",
    notes: "",
    tier: "normal",
    Disc: "Just a name given to the generic unidentified Undead. Undead are not alive, weak to the light element and have affinity with the shadow element. While not always, the majority of Undead have no stamina limitations.",
  },
  Krogan: {
    stats: {},

    self: "",
    images: "",
    notes: "",
    tier: "rare",
  },
  Turian: {
    stats: {},

    self: "",
    images: "",
    notes: "",
    tier: "rare",
  },
  Fairy: {
    stats: {},

    self: "",
    images: "",
    notes: "🧚‍♀️",
    tier: "rare",
  },
  Zombie: {
    stats: {},
    name: "Zombie",
    self: "",
    images: "",
    notes: "🧟‍♂️",
    tier: "normal",
    disc: "An Undead body. They share some similarities to their living counterparts, since they inhabit the same body. However what set's Zombies apart is their weakness to the light element, affinity with the shadow element, as well as being harder to kill.",
  },
  Mermaid: {
    stats: {},
    name:"Mermaid",
    self: "",
    images: "",
    notes: "🧜‍♀️",
    tier: "rare",
    disc:"Being that looks half fish, half woman. Mermaids are most often resemble a human woman, but they can resemble other species of women. That does not mean they are half of each species this is just an adaptation within their own species. They share no links to the species they look like, it is just a honey trap.",
  },
  "Thri-kreen": {
    stats: {},

    self: "",
    images: "",
    notes: "",
    tier: "epic",
  },
  Kenku: {
    stats: {},

    self: "",
    images: "",
    notes: "",
    tier: "epic",
  },
  Kitsune: {
    stats: {},

    self: "",
    images: "",
    notes: "",
    tier: "rare",
  },
  Goblin: {
    stats: {},

    self: "",
    images: "",
    notes: "",
    tier: "normal",
  },
  Troglodytes: {
    stats: {},

    self: "",
    images: "",
    notes: "",
    tier: "epic",
  },
  Wendigo: {
    name: "Wendigo",
    level: 50,
    50: {
      vitality: 22,
      strength: 20,
      endurance: 0,
      magic: 14,
      willpower: 16,
      dexterity: 16,
      sense: 6,
      charisma: -2,
    },
    stats: {},

    self: "Eating human flesh rejuvenate the Wendigo.",
    images: [
      "https://www.gmbinder.com/images/Aq4ozf8.png",
      "https://mindweaverpg.files.wordpress.com/2020/09/wendigo.png",
    ],
    notes: "",
    tier: "rare",
    disc: "The wendigo is often said to be a malevolent spirit, sometimes depicted as a creature with human-like characteristics, which possesses human beings. The wendigo is known to invoke feelings of insatiable greed/hunger, the desire to cannibalize other humans, as well as the propensity to commit murder in those that fall under its influence.",
  },
  Phoenix: {
    stats: {
      magic: 2,
      willpower: 2,
      HPMultiplier: -0.1,
      MPMultiplier: 1.1,
    },
    self: "Fire Resistance +1%",
    image:
      "https://images.squarespace-cdn.com/content/v1/57d34a6d725e254062172fe9/1579643445519-XXWBWFTZIZ23TNWBECJI/thumbnail_phoenix+rising.jpg",
    notes:
      "phenix is a long-lived bird that is cyclically regenerated or reborn.",
    tier: "epic",
  },
  Loxodon: {
    name: 'Loxodon',
    stats: {
      strength: 3,
      vitality: 1,
      dexterity: -1,
      HPMultiplier: 1.1,
      MPMultiplier: -0.1,
    },
    self: "",
    image:"",
    notes: "Elephant humanoid.",
    tier: "rare",
  },
  Minotaur: {
    name: 'Minotaur',
    stats: {
      strength: 2,
    },
    self: "",
    image:"",
    notes: "Bull humanoid.",
    tier: "rare",
  },
  "Naj'hass": {
    Names: `Aj'ha,Aj'i,Aj'tiss,Ajakess,Aksas,Aksiss,Al'en,An'jeshe,Apjige,Arkkess,Athaz,Atus,Azras,Caji,Cakrasar,Cal'arrun,Capji,Cathras,Cej'han,Ces,Cez'jenta,Cij'te,Cinash,Cizran,Coth'jus,Cothrash,Culzanek,Cunaless,Ej'tesh,Elzazash,Ergek,Eshjuk,Ethris,Gan'jas,Gapja,Gar'thituph,Gopjeguss,Gor'thesh,Gragishaph,Grar'theness,Grath'ji,Gressinas,Grolzesh,Grorjar,Grozrash,Guj'ika,Harji,Hej'hez,Herkush,Horgarrez,Illuph,Ipjar,Ithashin,Kaj'ess,Kar'kash,Kepjusha,Ki'kintus,Kissere,Koph,Kopjess,Kra'kasher,Krak,Krapjez,Krashjuless,Kraz'ji,Krirrigis,Krussin,Ma'lush,Mage,Maj'tak,Mal'a,Mapja,Mar'kash,Mar'kis,Marjin,Mas,Mathan,Men'jas,Meth'jaresh,Mij'hegak,Min'jash,Mith'jas,Monassu,Moss,Naj'hass,Najugash,Nak,Napjiph,Nar'ka,Nar'thuss,Narrusha,Nash,Nashjekez,Nataph,Nij'ass,Nij'tessiph,Nishjiss,Norkkuss,Nus,Olluruss,Or'thi,Or'thuss,Paj'a,Parkka,Pas,Pathujen,Paz'jaz,Pepjerras,Pirkkanar,Pituk,Porjunek,Pu'ke,Ragen,Ran'jess,Rargush,Razjuph,Rilzan,Riss,Rithruz,Rorgiss,Rossez,Rraj'asesh,Rraj'tass,Rrar'kess,Rrar'thuph,Rras,Rrazresh,Rrej'hish,Rrigelash,Rris,Rris,Rroksurrush,Rukrussush,Rurri,Russa,Ruth'jes,Sa'kitesh,Sar'thass,Sarjas,Sazjuzush,Ser'thez,Sezrass,Shajas,Shas,Shashja,Shass,Shetesh,Shijek,Shun'jaler,Shurjarri,Skaler,Skalla,Skallentas,Skaph,Skar'kerriz,Skath'jeruk,Sker'kalas,Skor,Skoz'ji,Sku'lu,Skuph,Skur'thur,Slalli,Slalt'har,Slelziress,Slil'ar,Sloz'jisa,Sojesh,Solle,Sorge,Sral'e,Sran'ji,Srapjess,Srar'thazur,Srash,Srath'jess,Srathrarre,Srerkkash,Srus,Sruss'tugeph,Sun,Suss'tir,Uzrash,Vargush,Vek,Vess'tu,Viph,Vult'ha,Vupjer,Vushjesash,Xagez,Xassa,Xulzessu,Zaj'tiss,Zan'jer,Zarriss,Zassegus,Zirres,Zsor,Zurjass`,
    name: "Naj'hass",
    stats: {
    },
    self: "",
    images:['https://static.wikia.nocookie.net/lovecraft/images/b/b6/Serpent_People_%28Lo%C3%AFc_Muzy%29.jpg/revision/latest/scale-to-width-down/699?cb=20190713051007'],
    notes: "Snake humanoid, not to be mixed up with the dragon or lizard humonids. The Naj'hass are from Naj'es. Naj'es, Naj's land. Naj'hass, Naj people.",
    tier: "rare",
  }
  // https://en.wikipedia.org/wiki/List_of_reptilian_humanoids
};
// Bakeneko (monster) (one tail) cat demon,  & nekomata (species) (two tails), raises the dead with dances.

// Ghoul, Wight, Halfling, Vampire→Vampire Noble→Vampire Knight, Namanari Hannya <Chunari Hannya> <Honnari Hannya>, Dhampir, Banshee, Draugr→Great Draugr, Blood Fairy, Strigoi,

export default function RaceDisplay(Species) {
  const Data = _try(() => racesList[Species]);
  if (Data) {
    return (
      <BackgroundWrap>
        <Wrap Tier={monadColors[Data.tier] || ""}>
          <Name>{Species}</Name>
          {Data.images && Data.images[0] ? <Display src={Data.images[0]} alt={Species} /> : <></>}
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
