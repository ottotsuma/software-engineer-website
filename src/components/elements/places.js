export const placeList = {
  // Move locationsList into here
  // https://ottotsuma.github.io/images/places/*.jpg
  Meroyri: {
    notes: `1) Core + Wood-Elves (Europe) + Tundra`,
    countries: {
      "I beleg glad": {
        notes: "The Great Forest - https://funtranslations.com/elvish, Tel' (emphasis) Ar Vandor https://lingojam.com/CommontoElvish%28D%26D%29 "
      }
    }
  },
  "Lóng zhī guó": {
    notes: `2) [Lóng_zhī_guó] - (China) + Tundra 
  `

  },
  Rayndr: {
    notes: `3) [Rayndr] - (Bridge, Al Bhed) - Safer, route.`

  },
  Abansofu: {
    notes: `4) かざんとう -> あばんそふ [Abansofu]  (Xuanzang / Journey to the West) - (Indians) - Large single continent. (Deep water)`

  },
  "Lith eru": {
    notes: `5) [Lith_eru] - (Large new continent, sand world) [the location of the immortals war, their bodies made the desert, their power changed to mana and made the first humans]`

  },
  Charia: {
    notes: `6) [Charia] (New world) Large single content (Story)`,
    "full name": 'Charia',
    name: 'Charia',
    images: [],
    description: "Continent",
    countries: {
      Alden: {
        name: "Alden",
        "full name": "Grand Duchy of Alden",
        government: "Grand Duchy",
        description: "Found by a rebellious witch with the backing of the lords of the region during the collapse of the Pocotcotco empire.",
        "places of interest": ["Kustet (Salt mining town)"],
        "unique unit": ["Witch"],
        "economy type": "",
        "agriculture": "Ample farm land but not the top priority of the state, who see it as easier to just take what they don't have. Each time there has been a need for more food, living space, the Aldenese have expanded rather then innovated.",
        secrets: "",
        stability: "Mostly stable. The duchy is ruled over by the dukes and other nobles, with little to no resistance from the people of Chingaling. The dwarves of the region although under the rule, and oppression of the nobles on paper mostly act independently of the state, with too few to mount any kind of rebellion alone.",
        ambition: "To expand and create more living space for Aldenese.",
        culture: "Militaristic. With a focus on individuals who achieve great feats in battle and war.",
        religion: "",
        diplomacy: "While having ambassadors in various neighbouring countries they are not aligned, or even get along well with any of them.",
        military: "Strong individuals, because of the culture. Their military continues to use a traditional 4 - 8 man formation, more commonly used for fighting beasts. Discipline is valued higher then individuals strength in the military however.",
        images: [],
        notes: `
          Alden (German) - 🎄
          Food - Fertile land, but too focused on military to make good use of it
          `,
        cities: {
          Todtenwei: {
            name: 'Todtenwei',
            map: 272082858,
          },
          Steinauhau: {
            map: 5628570730133,
            link: "https://watabou.github.io/city-generator/?size=18&seed=5628570730133&name=Steinauhau&population=6901&greens=1&farms=1&citadel=1&urban_castle=1&plaza=1&temple=0&walls=1&shantytown=1&coast=0&river=0&gates=-1",
            description: 'A north western town in the country of Alden.',
            location: 'Alden',
            population: '6901',
            Temperature: '15',
            Elevation: 18,
            Type: 'Naval',
            Culture: 'German',
            Trade: true,
            // Buildings
            dueling: true,
            buildings: {
              "Defensive Structures": {
                "Castle": true,
                "Archer Towers": false,
                "Watch Tower": false,
                Walls: true,
                Motte: false,
                "Killing fields": false,
                Keep: false,
                Armory: false,
                "Magic Tower": false,
              },
              "Transportation": {
                "Alliance teleport": false,
                "Town teleport": false,
                "Airport": false,
                "Harbour": true,
                "Stable": false,
                "Wagon Facilities": false,
              },
              "Revenue Buildings": {
                "Bars": false,
                "Restaurant": false,
                Bathhouse: false,
                Forge: true,
                Stores: false,
                "Auction house": false,
                "Arena": false,
                "Market Place": true,
              },
              "Government Buildings": {
                "Skill Instructors": false,
                "City Hall": false,
                "Assembly hall": false,
              },
              "Misc Buildings": {
                "shanty town": true,
              }
            }
          },
          'Alden (city)': {
            name: 'Alden (city)',
            map: 839360670

          },
          Savigal: {
            map: 640470293

          },
        }
      },
      Republic: {
        "full name": "Republic of Heilerbach",
        name: "The Republic",
        government: "Republic",
        description: "",
        "places of interest": ["Baberg Bridge", "Siklad Gold mine", "Furlin salt mine", "Horod iron mine town"],
        "unique unit": ["Throwing Axes"],
        "economy type": "",
        "agriculture": "Fertile land in the east, less fertile to the south and west.",
        secrets: "",
        stability: "Unstable now, use to be stable.",
        ambition: "Not to fall apart",
        culture: "Varied",
        religion: "Varied",
        diplomacy: "Good",
        military: "Varied individuals from states, strong together, strong military, weak navy",
        images: [],
        cities: {
          a: {
            name: ''
          }
        },
        notes: `
        Republic (EU?Roman) 🏛
        The Elves and the republic have had at least 2 famous battles against each other.

      `

      },
      Niyosho: {
        "full name": "Shogunate of Niyosho",
        name: "Niyosho",
        government: "Shogunate",
        description: "Having split with their old country, the founders of Niyosho sailed to find a new land to start again. Landing on the island now known as Fuma the founders of Niyosho adapted to their new land and slowly formed the Shogunate of Niyosho.",
        "places of interest": ["Aesemria (Silver mining town)"],
        "unique unit": ["Samurai"],
        "economy type": "",
        "agriculture": "Fertile land makes good use of it",
        secrets: "Racist",
        stability: "Stable",
        ambition: "Become isolationist",
        culture: "They build beautiful things, enjoy beauty, but cast out the ugly.",
        religion: "Shinto ⛩",
        diplomacy: "Medium, while they do not strongly anger anyone they are hardly friendly",
        military: "weak individuals, strong together, strong military, Strong navy",
        images: [],
        cities: {
          Otsu: {
            name: 'Otsu'
          }
        },
        notes: `
      Renamed: Leika - Shogunate of Niyosho
      `
      },
      Herkikia: {
        "full name": "Herkikia League",
        name: "Herkikia",
        government: "",
        description: "",
        "places of interest": [""],
        "unique unit": ["Sacred Band"],
        "economy type": "",
        "agriculture": "Fertile land, but worked by the slaves",
        secrets: "",
        stability: "Unstable until there is an external threat",
        ambition: "lack of...",
        culture: "Each city has it's own differences but generally they are about their peoples freedom while enslaving others.",
        religion: "Many gods.",
        diplomacy: "Too focused internally, suits their neighbors the Niyosho just fine.",
        military: "Strong individuals, strong core, weak auxiliary branches, would be strong overall if they would work together",
        images: [],
        cities: {
          a: {
            name: ''
          }
        },
        notes: `
      Renamed: Huonhia - Herkikia League
      Herkikia League - essos, lyric speaking? - free city types ⚔
      `
      },
      "Naj'es": {
        "full name": "Kingdom of Naj'es",
        name: "Naj'es",
        government: "",
        description: "",
        "places of interest": [""],
        "unique unit": [""],
        "economy type": "",
        "agriculture": "Mostly desert, imports food from others",
        secrets: "The current king is weak and it is the queen who has been fighting dressed as him",
        stability: "Stable under one ruler, unstable during changes.",
        ambition: "Depends on the ruler",
        culture: "",
        religion: "State religion & split off religions",
        diplomacy: "Arrogant but rational",
        military: "weak individuals, strong together, many varied units with a strong core, strong military, weak navy",
        images: [],
        cities: {
          a: {
            name: ''
          }
        },
        notes: `
         Renamed: Hatalia - Naj'es
         Kingdom of Naj'es (Empire) 🦎
         Blood tax, one child from 40 house holds. (Ottomans)
      `
      },
      Solzi: {
        "full name": "Solzi",
        name: "Solzi",
        government: "",
        description: "",
        "places of interest": [""],
        "unique unit": ["Pirate"],
        "economy type": "",
        "agriculture": "Imports",
        secrets: "",
        stability: "mostly Stable internally, strong neighbor's",
        ambition: "More money.",
        culture: "Make more money!!!",
        religion: "",
        diplomacy: "Good with most, it's all about trade money and friends.",
        military: "Average individuals, strong navy, weak land forces, but very rich",
        images: [],
        cities: {
          Chalbia: {
            name: 'Chalbia'
          }
        },
        notes: `
      Solzi- Chalbia (Port) ⚓
      Renamed: Chalbia - Solzi
      `
      },
      Oflralensa: {
        "full name": "United Provinces of Oflralensa",
        name: "Oflralensa",
        government: "",
        description: "",
        "places of interest": [""],
        "unique unit": [""],
        "economy type": "",
        "agriculture": "",
        secrets: "",
        stability: "",
        ambition: "",
        culture: "",
        religion: "",
        diplomacy: "",
        military: "",
        images: [],
        cities: {
          a: {
            name: ''
          }
        },
        notes: `
      Renamed: Mifuegan League - United Provinces of Oflralensa
      
      `
      },
      Pocotcotco: {
        "full name": "Pocotcotco",
        name: "Pocotcotco",
        government: "",
        description: "",
        "places of interest": [""],
        "unique unit": [""],
        "economy type": "",
        "agriculture": "",
        secrets: "",
        stability: "",
        ambition: "",
        culture: "",
        religion: "",
        diplomacy: "",
        military: "",
        images: [],
        cities: {
          a: {
            name: ''
          }
        },
        notes: `
        // Pocotcotco (Aztec use to be Mayan) 🦅
        // Military - Weak individuals, strong heros?, weak military, no navy
        // Diplomacy - Mostly negative
        // Religion - Old gods (Aztec)
        // Culture - Traditional, unchanging
        // Ambition - Lead their people back to ruling the continent again (reality - try not to become enslaved)
        // Stability - Unknown
        // Secrets - Human sacrifice
        // Food - Fertile land, but too focused on traditional ways to make good use of it
        // Economy type -
        // Unique Unit - Eagle Warrior
        // It has been at least 107 years since the fall of Pocotcotco as an empire.
  `,
      },
      Dwarves: {
        "full name": "Dwarves",
        name: "Dwarves",
        government: "",
        description: "",
        "places of interest": [""],
        "unique unit": [""],
        "economy type": "",
        "agriculture": "",
        secrets: "",
        stability: "",
        ambition: "",
        culture: "",
        religion: "",
        diplomacy: "",
        military: "",
        images: [],
        cities: {
          a: {
            name: ''
          }
        },
        notes: `
        // Dwarves - Weak with magic, not much food or water, low population, strong melee fighters.
        `
      },
      League: {
        "full name": "League",
        name: "League",
        government: "",
        description: "",
        "places of interest": [""],
        "unique unit": [""],
        "economy type": "",
        "agriculture": "",
        secrets: "",
        stability: "",
        ambition: "",
        culture: "",
        religion: "",
        diplomacy: "",
        military: "",
        images: [],
        cities: {
          a: {
            name: ''
          }
        },
        notes: `
      // League (Elf) 🧝‍♀️
      // Military - Medium individuals, strong together but only one species, strong navy, medium military (use to be weak)
      // Diplomacy - None, mostly negative
      // Religion -
      // Culture -
      // Ambition - Enslave the other species
      // Stability - Mostly stable
      // Secrets -
      // Food -
      // Economy type -
      // Unique Unit - 
      `

        // The Elves and the republic have had at least 2 famous battles against each other.
      },
      // Desert (Monsters) - They are monsters. It's hard to say.
    }

    // ### Eras/History:

    // {/* Pre-Dao, Dao-era, Immortal-era, (Huge beats, men struggling, the island is cleansed of men), (Foundation of empires in the east and this continent is invaded by the humans for the first time since the immortals), (Men overcome beasts and empires start here and in the east the religious wars start), Pyramid (Kʼawiil) Empires of men, Pocotcotcan (The one empire), Witch (Rebellion), Now. */}
    // {/* Pre-Dao, Dao, Immortal, Dark-Age, (Dawn Age) Great Migration, Warning Kingdoms Period, Pyramid (The One Kingdom), Pocotcotcan Empire, Witch, Now. */}

    // The new world is in a balance. 
    // The Republic fractures from invasions by the Elves, late empire problems, uninterested ruling class, Alden invasion, Sea people sabotage.
    // Alden invades Herkikia League, they both collapse under the sea peoples invasion.
    // The Kingdom having become the Empire forms a deal with Niyosho but are both destroyed by the sea people
    // Our characters flee through the desert/Solzi into Pocotcotco, who are under invasion by the Elves.
    // Who again fall before the sea people in ruin.

    // Miasma, "a contagious power... that has an independent life of its own. Until purged by the sacrificial death of the wrongdoer, society would be chronically infected by catastrophe".
  }
}

export const cityAmenities = {
  // Places
  "bathhouse": "🛁",
  "forge": "⚒️",
  "skill instructors": "🏋🏾‍♂️",
  "alliance teleport": "🧙🏻",
  "auction house": "🏛",
  "guild houses": "🏠",
  "town teleport": "🧙‍♂️",
  "assembly hall": "🏛️",
  "citizen registration": "📜",
  "dueling": "🤺",
  "arena": "⚔️",
  "castle wars": "🏰",
  "vampire friendly": "🧛‍♂️",
  tavern: '',
  inn: '',
  bakery: '',
  "weapon shop": '',
  armorer: '',
  outfitters: '',
  sewers: '',
  apothecary: '',
  healer: '',
  "pet shop": '',
  workshop: '',
  brothel: '',
  bank: '',
  guardhouse: '',
  dock: '',
  slums: '',
  fountain: '',
  statue: '',
  bridge: '',
  "bulletin board": '',
  well: '',
  carriage: '',
  lampposts: '',
  watchtower: '',
  temple: '',
  church: '',
  fortress: '',
  dungeon: '',
  lighthouse: '',
  portal: '',
  "skyship port": '',
  "shrine": "⛩️",
  castle: "🏯",
  walled: "🧱",
  theater: "🎭",
  hospital: "🩺",
  necromancer: "🩻",
  stable: "🐴",
  // 🏰🗡️🏹👑🐲🛡️
  "hot spring": "🐴",

  // Environment
  woods: '',
  caves: '',
  river: '',
  lake: '',
  bog: '',
  desert: '',
  waterfall: '',
  mountain: '',
  island: '',
  glacier: '',
  ocean: '',
  canyon: '',
  swamp: '',
  volcano: '',
  mesas: '',
  lagoon: '',
  underground: '',

}

// Granduchy - elected grand duke from dukes.
// principality - ruled by a prince
// kingdom - king
// republic - representatives from each place - all elected also
// Places joined together through alliance? to act as one unit under one representative
// pocotcotco ?
// Solzi ?

// Map: https://azgaar.github.io/Fantasy-Map-Generator/
// Towns:
// https://watabou.github.io/city-generator/?size=18&seed=272082858&name=Todtenwei&population=2265&greens=0&farms=1&citadel=1&urban_castle=0&plaza=0&temple=0

// Todtenwei - 272082858
// Savigal - 640470293

// export const locationsList = {
//   Meroyri: {
//     name: 'Meroyri',
//     location: 'Old world',
//     DLC: 1,
//     meaning: '',
//   },
//   Lóng_zhī_guó: {
//     name: 'Lóng zhī guó',
//     location: 'Old East',
//     DLC: 2,
//     meaning: 'Land of dragons',
//   },
//   Rayndr: {
//     name: 'Rayndr',
//     location: 'Middle Bridge',
//     DLC: 3,
//     meaning: 'Hearth',
//   },
//   Abansofu: {
//     name: 'Abansofu',
//     notes: 'Bottom Right, Below; Lóng_zhī_guó. Large single continent, Main Quest; Xuanzang / Journey to the West.',
//     location: 'Bottom Right.',
//     DLC: 4,
//     meaning: 'High island (火山島)',

//   },
//   Lith_eru: {
//     name: 'Lith eru',
//     notes: '(Large new continent, sand world) [the location of the immortals war, their bodies made the desert, their power changed to mana and made the first humans]',
//     location: 'South.',
//     DLC: 5,
//     meaning: 'Lith = ash, eru = desert',

//   },
//   Charia: {
//     name: 'Charia',
//     notes: '',
//     location: 'West',
//     DLC: 6,
//     meaning: '',

//   },
//   Steinauhau: {
//     notes: 'map seed: 5628570730133',
//     location: 'Alden',
//     population: '6901',
//     Temperature: '15',
//     Elevation: 18,
//     Type: 'Naval',
//     Culture: 'German',
//     Trade: true,
//     buildings: {
//       "Defensive Structures": {
//         "Castle": true,
//         "Archer Towers": false,
//         "Watch Tower": false,
//         Walls: true,
//         Motte: false,
//         "Killing fields": false,
//         Keep: false,
//         Armory: false,
//         "Magic Tower": false,
//       },
//       "Transportation": {
//         "Alliance teleport": false,
//         "Town teleport": false,
//         "Airport": false,
//         "Harbour": true,
//         "Stable": false,
//         "Wagon Facilities": false,
//       },
//       "Revenue Buildings": {
//         "Bars": false,
//         "Restaurant": false,
//         Bathhouse: false,
//         Forge: true,
//         Stores: false,
//         "Auction house": false,
//         "Arena": false,
//         "Market Place": true,
//       },
//       "Government Buildings": {
//         "Skill Instructors": false,
//         "City Hall": false,
//         "Assembly hall": false,
//       },
//       "Misc Buildings": {
//         "shanty town": true,
//       }
//     }
//   },
//   Alden: {
//     language: 'german 🎄',
//     name: 'Alden',
//     map: '',
//     notes: 'map code: 839360670',
//     color: '',
//     Military: 'Strong land military, with regionally high level population. Medium sized navy. Few flying assets; Witches.',
//     Diplomacy: "Overall, poor. At war with the republic, negative relations with all countries apart from Niyosho, were the relation is neutral at best.",
//     Religion: '',
//     Culture: 'Warrior based, military focused. Strong sense of what should be.',
//     Ambition: 'Expansion for living space.',
//     Stability: 'Stable.',
//     Secrets: '',
//     Food: 'Very fertile land.',
//     Economy: '',
//     "Places of Interest": 'Kustet (Salt mining town)',
//     "Unique Unit": 'Witches',
//     Bonuses: '',
//   },
// };
