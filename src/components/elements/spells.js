import styled from "styled-components";
import React from "react";
import {
  nonSupport
} from "./poe"

import { colors, monadColors } from "./colors";

const skillTree = [
  {
    id: 'fireball',
    name: 'Fireball',
    level: 0,
    maxLevel: 10,
    prerequisites: [],
    children: [
      {
        id: 'firewall',
        name: 'Fire Wall',
        level: 0,
        maxLevel: 10,
        prerequisites: ['fireball'],
        children: [],
      },
      // Add more skills as needed
    ],
  },
  // Add more root skills as needed
];
export const ListOfMagicTypes = [
  "Ancient Magic",
  "Shadow Magic",
  "Mysticism",
  "Alteration",
  "Abjuration",
  "Absorption Magic",
  "Acid Magic",
  "Aether Magic",
  "Alchemy",
  "Animancy",
  "Antimatter Magic",
  "Apocalyptic Magic",
  "Archetype Magic",
  "Art Magic",
  "ArtificialElement Magic",
  "Artificial Magic",
  "Astral Magic",
  "Astrology",
  "Aura Magic",
  "Aurora Magic",
  "Banishment Magic",
  "Barrier Magic",
  "Binding Magic",
  "Blessing Magic",
  "Bloodline Magic",
  "Candy Magic",
  "Card Magic",
  "Chaos Magic",
  "Chain Magic",
  "Chemical Magic",
  "Chi Magic",
  "ChristianMysticism",
  "Clay Magic",
  "Cleanliness Magic",
  "Combat Magic",
  "Concealment Magic",
  "Conceptual Magic",
  "Conjuration",
  "Corruption Magic",
  "Cosmic Magic",
  "Craftsmanship Magic",
  "Creation Magic",
  "Curse Magic",
  "DarkArts",
  "DarkMatter Magic",
  "Death Magic",
  "Destiny Magic",
  "Destruction Magic",
  "Digital Magic",
  "Dimension Magic",
  "Disaster Magic",
  "Divination",
  "Divine-Demonic Magic",
  "Divine Magic",
  "Dowsing",
  "Dream Magic",
  "Druidic Magic",
  "Ectoplasm Magic",
  "EgyptianMysticism",
  "Eldritch Magic",
  "Electromagnetism Magic",
  "Elemental Magic",
  "Emblem Magic",
  "Emotion Magic",
  "EmpathicCasting",
  "Energy Magic",
  "Enchantment",
  "Entropy Magic",
  "Environmental Magic",
  "Exorcism Magic",
  "Explosion Magic",
  "Evolutionary Magic",
  "Extra-Dimensional Magic",
  "Eye Magic",
  "Faith Magic",
  "Famine Magic",
  "Fire Magic",
  "Friction Magic",
  "Gas Magic",
  "Gravity Magic",
  "Guardian Magic",
  "Herbalism",
  "Human Magic",
  "Hypnotic Magic",
  "Illusionary Magic",
  "Imagination Magic",
  "Incantation",
  "Inertia Magic",
  "InnerBeast Magic",
  "Inorganic Magic",
  "InscriptionCasting",
  "Intangibility Magic",
  "Intelligence Magic",
  "Life Magic",
  "Liquid Magic",
  "Luck Magic",
  "Lunar Magic",
  "Madness Magic",
  "Magnetic Magic",
  "Matter Magic",
  "Medical Magic",
  "Memory Magic",
  "Merfolk Magic",
  "Mirror Magic",
  "Mobility Magic",
  "Momentum Magic",
  "Monolithic Magic",
  "Motion Magic",
  "Music Magic",
  "MysticalMaterialManipulation",
  "Mythic Magic",
  "Nature Magic",
  "Necromancy",
  "Nether Magic",
  "Neutral Magic",
  "Nightmare Magic",
  "Ninja Magic",
  "Numeromancy",
  "Object Magic",
  "Occultism",
  "Onmyōdō",
  "Order Magic",
  "Organic Magic",
  "Pain Magic",
  "PaperCharm Magic",
  "Peace Magic",
  "Perfume Magic",
  "PhysicalForce Magic",
  "Plasma Magic",
  "Pollen Magic",
  "Portal Magic",
  "Possession Magic",
  "Potion Magic",
  "Psionic Magic",
  "Psychic Magic",
  "Purification Magic",
  "Pyrotechnic Magic",
  "Quantum Magic",
  "Rainbow Magic",
  "Replication Magic",
  "Restoration Magic",
  "Ritual Magic",
  "Rune Magic",
  "Sacrificial Magic",
  "Sealing Magic",
  "Season Magic",
  "Sex Magic",
  "Shamanism",
  "Sin Magic",
  "Size Magic",
  "Sleep Magic",
  "Solar Magic",
  "Sound Magic",
  "Space Magic",
  "SpellCasting",
  "Sphere Magic",
  "Spirit Magic",
  "Strength Magic",
  "Symbiotic Magic",
  "Symbol Magic",
  "SymbolismPower",
  "Taoist Magic",
  "Teleportation Magic",
  "Thermal Magic",
  "Time Magic",
  "Transmutation Magic",
  "Underworld Magic",
  "Unobtainium Magic",
  "Vibration Magic",
  "Void Magic",
  "Voodoo",
  "War Magic",
  "Warp Magic",
  "Weather Magic",
  "Werebeast Magic",
  "WhiteArts",
  "YinYang Magic",
  "Zodiac Magic",
];
// Kʼawiil - Lightning, seeds, abundance, powerful one, fertility, serpent

// Rogue: Side/Back -- Back -- Side (3rd one is intermediate), (4th advanced)
// Fighter: ?? -- ?? -- ?? (3rd one is intermediate), (4th advanced) [look up sword techniques]
// Mage: ?? -- ?? -- ?? (3rd one is intermediate), (4th advanced)

// <li>Vitality</li> Health points, Resistances to hot/cold / poison
// <li>Endurance</li> Increases resistance to physical damage, reduces physical damage taken (%)
// <li>Willpower</li> Increases resistance to magic, reduces magic damage taken (%)
// <li>Magic</li> Increases Magic damage, Mana
// <li>Strength</li> Increased physical damage. Minor: Increased storage capacity. Reduce damage taken during a successful block. Increased resistance to falling. Increased movement speed.
// <li>Dexterity (Reflexes)</li> Reduces time between using skills, casting of skills, dodge change, movement on rough terrain
// <li>Sense</li> Range of attacks, accuracy. Trap Detect (All of the senses, hearing, taste, touch, smell.) Seeing through smoke screens and illusions. Seeing weakness and injuries in your opponent (CRIT), Range of summons / familia can move from you.
// <li>Charisma</li> Increases NPC likability, command points


export const spellList = {
  "Miasma": {
      "levels": {
          "1": "Reduces all stats by 1%.",
          "90": "Reduces all stats by 90%."
      },
      "note": "Miasma.",
      "name": "Miasma",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [
          "debuff"
      ],
      "base_spell": "",
      "image": "",
      "negative": true,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Dark Vision": {
      "levels": {
          "1": "."
      },
      "note": ".",
      "name": "Dark Vision",
      "element": [
          "shadow"
      ],
      "classes": [],
      "species": [
          "Vampire",
          "Ghoul",
          "Zombie",
          "Dwarf",
          "Water Elf",
          "Gnome",
          "Undead",
          "Flaming Parrot",
          "Snow Elf",
          "Goblin"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {
          "1": {}
      },
      "links": {
          "spells": [],
          "classes": [],
          "species": [
              "Vampire",
              "Ghoul",
              "Zombie",
              "Dwarf",
              "Water Elf",
              "Gnome",
              "Undead",
              "Flaming Parrot",
              "Snow Elf",
              "Goblin"
          ]
      }
  },
  "Snow Walk": {
      "levels": {
          "1": "You are easily able to traverse any snowy, icy surface, or arctic terrain."
      },
      "note": "You do not consider any snowy, icy surface, or arctic terrain as a difficult terrain.",
      "name": "Snow Walk",
      "element": [
          "ice"
      ],
      "classes": [],
      "species": [
          "Snow Elf"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {
          "1": {}
      },
      "links": {
          "spells": [],
          "classes": [],
          "species": [
              "Snow Elf"
          ]
      }
  },
  "Cold Resist": {
      "levels": {
          "1": "You can resist cold damage."
      },
      "note": "Snow Elves are resistant to cold damage, taking 1/2 dmg..",
      "name": "Cold Resist",
      "element": [
          "ice"
      ],
      "classes": [],
      "species": [
          "Snow Elf"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {
          "1": {}
      },
      "links": {
          "spells": [],
          "classes": [],
          "species": [
              "Snow Elf"
          ]
      }
  },
  "Fire Vulnerability": {
      "levels": {
          "1": "You take more damage if attacked by a weapon or spell dealing fire damage."
      },
      "note": "You take double damage if attacked by a weapon or spell dealing fire damage",
      "name": "Fire Vulnerability",
      "element": [
          "fire"
      ],
      "classes": [],
      "species": [
          "Snow Elf"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": true,
      "passive": true,
      "stats": {
          "1": {}
      },
      "links": {
          "spells": [],
          "classes": [],
          "species": [
              "Snow Elf"
          ]
      }
  },
  "Porphyric Hemophilia": {
      "levels": {
          "1": "."
      },
      "note": "Porphyric Hemophilia is the disease that causes vampirism if left uncured.",
      "name": "Porphyric Hemophilia",
      "element": [
          "blood"
      ],
      "classes": [],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": true,
      "passive": true,
      "stats": {
          "1": {}
      },
      "links": {
          "spells": [],
          "classes": [],
          "species": [
              "Vampire"
          ]
      }
  },
  "Sanguinare Vampiris": {
      "levels": {
          "1": "Maybe delete this? It's some EOS term."
      },
      "note": "",
      "name": "Sanguinare Vampiris",
      "element": [
          "blood"
      ],
      "classes": [],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": true,
      "passive": true,
      "stats": {
          "1": {}
      },
      "links": {
          "spells": [],
          "classes": [],
          "species": [
              "Vampire"
          ]
      }
  },
  "Porphyria cutanea tarda": {
      "levels": {
          "1": "."
      },
      "note": "Porphyria cutanea tarda (PCT) is a rare disorder characterized by painful, blistering skin lesions that develop on sun-exposed skin (photosensitivity). Affected skin is fragile and may peel or blister after minor trauma. Liver abnormalities may also occur.",
      "name": "Porphyria cutanea tarda",
      "element": [
          "blood"
      ],
      "classes": [],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": true,
      "passive": true,
      "stats": {
          "1": {}
      },
      "links": {
          "spells": [],
          "classes": [],
          "species": [
              "Vampire"
          ]
      }
  },
  "Noxiphilic Sanguivoria": {
      "levels": {
          "1": "Maybe delete this? It's some EOS term."
      },
      "note": ".",
      "name": "Noxiphilic Sanguivoria",
      "element": [
          "blood"
      ],
      "classes": [],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": true,
      "passive": true,
      "stats": {
          "1": {}
      },
      "links": {
          "spells": [],
          "classes": [],
          "species": [
              "Vampire"
          ]
      }
  },
  "Porphyria": {
      "levels": {
          "1": "Short for 'Porphyria cutanea tarda' see that skill to understand more about it."
      },
      "note": ".",
      "name": "Porphyria",
      "element": [
          "blood"
      ],
      "classes": [],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": true,
      "passive": true,
      "stats": {
          "1": {}
      },
      "links": {
          "spells": [],
          "classes": [],
          "species": [
              "Vampire"
          ]
      }
  },
  "Player": {
      "levels": {
          "1": "Passive all players posses."
      },
      "note": "Not an NPC.",
      "name": "Astral soul projection",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {
          "1": {}
      },
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Child": {
      "levels": {
          "1": "Max Stat: 5."
      },
      "note": "Child = 0 - 12.",
      "name": "Child",
      "element": [
          "none"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Human"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Human"
          ]
      }
  },
  "Youth": {
      "levels": {
          "1": "Vitality, Magic, Charisma: +1."
      },
      "note": "Youth = 13-19 yrs.",
      "name": "Youth",
      "element": [
          "none"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Human"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {
          "1": {
              "vitality": 1,
              "magic": 1,
              "charisma": 1
          }
      },
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Human"
          ]
      }
  },
  "Adult": {
      "levels": {
          "1": "Vitality, Strength, Charisma: +1."
      },
      "note": "Adult = 20-39 yrs.",
      "name": "Adult",
      "element": [
          "none"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Human"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {
          "1": {
              "vitality": 1,
              "strength": 1,
              "charisma": 1
          }
      },
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Human"
          ]
      }
  },
  "Older": {
      "levels": {
          "1": "Sense, Dexterity, Vitality, Strength: -1."
      },
      "note": "Older = 40-59 yrs.",
      "name": "Older",
      "element": [
          "none"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Human"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": true,
      "passive": true,
      "stats": {
          "1": {
              "sense": -1,
              "dexterity": -1,
              "vitality": -1,
              "strength": -1
          }
      },
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Human"
          ]
      }
  },
  "Aged": {
      "levels": {
          "1": "All stats: -1."
      },
      "note": "Aged = 60+",
      "name": "Aged",
      "element": [
          "none"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Human"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": true,
      "passive": true,
      "stats": {
          "1": {
              "sense": -1,
              "dexterity": -1,
              "vitality": -1,
              "strength": -1,
              "magic": -1,
              "willpower": -1,
              "charisma": -1,
              "endurance": -1
          }
      },
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Human"
          ]
      }
  },
  "Sharp Slash": {
      "levels": {
          "1": "Deals 20% more damage from the side and behind."
      },
      "note": "Fighter, slashing weapons.",
      "name": "Sharp Slash",
      "element": [
          "none"
      ],
      "classes": [
          "Fighter"
      ],
      "species": [],
      "tier": "Basic",
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Fighter"
          ],
          "species": []
      }
  },
  "Slashing Edge": {
      "levels": {
          "1": "Deals 20% more damage from behind, 20% more damage if used after 'Sharp Slash'."
      },
      "note": "Fighter",
      "name": "Slashing Edge",
      "element": [
          "none"
      ],
      "classes": [
          "Fighter"
      ],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Fighter"
          ],
          "species": []
      }
  },
  "Devious Slice": {
      "levels": {
          "1": "Deals 20% more damage from the side, 20% more damage if used after 'Slashing Edge'."
      },
      "note": "Fighter",
      "name": "Devious Slice",
      "element": [
          "none"
      ],
      "classes": [
          "Fighter"
      ],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Fighter"
          ],
          "species": []
      }
  },
  "Headbutt": {
      "levels": {
          "1": "Has a chance to stun the target. Recoil damage."
      },
      "note": "Fighter",
      "name": "Headbutt",
      "element": [
          "none"
      ],
      "classes": [
          "Rogue",
          "Fighter"
      ],
      "species": [
          "Goat"
      ],
      "tier": "Basic",
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Rogue",
              "Fighter"
          ],
          "species": [
              "Goat"
          ]
      }
  },
  "Hop": {
      "levels": {
          "1": "Quickly hop from this location to a nearby location."
      },
      "note": "Rogue",
      "name": "Hop",
      "element": [
          "none"
      ],
      "classes": [
          "Fighter"
      ],
      "species": [
          "Rabbit"
      ],
      "tier": "Basic",
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Fighter"
          ],
          "species": [
              "Rabbit"
          ]
      }
  },
  "Fleet of Foot": {
      "levels": {
          "1": "Increases movement speed."
      },
      "note": "Rogue",
      "name": "Fleet of Foot",
      "element": [
          "wind"
      ],
      "classes": [
          "Rogue"
      ],
      "species": [],
      "tier": "Basic",
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Rogue"
          ],
          "species": []
      }
  },
  "Charged Charge": {
      "levels": {
          "1": "Stimulates your muscles in your legs with lightning shocks, to boost your speed.",
          "2": "Move 5% faster while charging.",
          "3": "Do 10% more impact damage.",
          "4": "Cost 5% less mana.",
          "5": "Charge can last 1 second longer."
      },
      "note": "",
      "name": "Charged Charge",
      "element": [
          "lightning"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Lightning Storm": {
      "levels": {
          "1": "Call lightning to randomly strike an area."
      },
      "note": "",
      "name": "Lightning Storm",
      "element": [
          "lightning"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Wall of Lightning": {
      "levels": {
          "1": "Raise a wall of lightning before you."
      },
      "note": "",
      "name": "Wall of Lightning",
      "element": [
          "lightning"
      ],
      "classes": [
          "Mage"
      ],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": []
      }
  },
  "Static Field": {
      "levels": {
          "1": "All lighting in this area will do more damage."
      },
      "note": "",
      "name": "Static Field",
      "element": [
          "lightning"
      ],
      "classes": [
          "Mage"
      ],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": []
      }
  },
  "Thunderbolt": {
      "levels": {
          "1": "Calls a thunder bolt from above onto the target."
      },
      "note": "",
      "name": "Thunderbolt",
      "element": [
          "lightning"
      ],
      "classes": [
          "Mage"
      ],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": []
      }
  },
  "Discharge": {
      "levels": {
          "1": "Explode lighting in all directions."
      },
      "note": "",
      "name": "Discharge",
      "element": [
          "lightning"
      ],
      "classes": [
          "Mage"
      ],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": []
      }
  },
  "Lightning Cloak": {
      "levels": {
          "1": "Covers yourself in lighting, shocking anyone who comes too close."
      },
      "note": "",
      "name": "Lightning Cloak",
      "element": [
          "lightning"
      ],
      "classes": [
          "Mage"
      ],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": []
      }
  },
  "Lightning Rune": {
      "levels": {
          "1": "Injects lighting into a surface, will release when someone comes near."
      },
      "note": "",
      "name": "Lightning Rune",
      "element": [
          "lightning"
      ],
      "classes": [
          "Mage"
      ],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": []
      }
  },
  "Lightning Bolt": {
      "levels": {
          "1": "Shoots a bolt of lightning at a target."
      },
      "note": "",
      "name": "Lightning Bolt",
      "element": [
          "lightning"
      ],
      "classes": [
          "Mage"
      ],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": []
      }
  },
  "Sparks": {
      "levels": {
          "1": "Shoots out multiple sparks in a random pattern."
      },
      "note": "",
      "name": "Sparks",
      "element": [
          "lightning"
      ],
      "classes": [
          "Mage"
      ],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": []
      }
  },
  "Shocking Touch": {
      "levels": {
          "1": "Electrocutes a target you touch [You decide the body part it comes from]."
      },
      "note": "",
      "name": "Shocking Touch",
      "element": [
          "lightning"
      ],
      "classes": [
          "Mage"
      ],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": []
      }
  },
  "Thunderstorm": {
      "levels": {
          "1": "Change the clouds above to thunder clouds, making lighting strikes easier."
      },
      "note": "",
      "name": "Thunderstorm",
      "element": [
          "lightning"
      ],
      "classes": [
          "Mage"
      ],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": []
      }
  },
  "Dazing Bolt": {
      "levels": {
          "1": "A lightning bolt that dazzles the opponent."
      },
      "note": "",
      "name": "Dazing Bolt",
      "element": [
          "lightning"
      ],
      "classes": [
          "Mage"
      ],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": []
      }
  },
  "Chain Lightning": {
      "levels": {
          "1": "Shoots lightning at a target, part of the lighting will be redirected to near by targets."
      },
      "note": "",
      "name": "Chain Lightning",
      "element": [
          "lightning"
      ],
      "classes": [
          "Mage"
      ],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": []
      }
  },
  "Serpent Strike": {
      "levels": {
          "1": "Your next physical attack will be faster."
      },
      "note": "",
      "name": "Serpent Strike",
      "element": [
          "none"
      ],
      "classes": [
          "K\u02bcawiil"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "K\u02bcawiil"
          ],
          "species": [
              ""
          ]
      }
  },
  "Serpent Pattern": {
      "levels": {
          "1": "Your skin will adapt to the environment slightly, increased stealth.",
          "2": "Your skin will adapt to the environment slightly, increased stealth."
      },
      "note": "",
      "name": "Serpent Pattern",
      "element": [
          "none"
      ],
      "classes": [
          "K\u02bcawiil"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "K\u02bcawiil"
          ],
          "species": [
              ""
          ]
      }
  },
  "Forked Tongue": {
      "levels": {
          "1": "Your tongue will become forked, Increased sense of smell.",
          "2": "You learn basic serpent speech."
      },
      "note": "",
      "name": "Forked Tongue",
      "element": [
          "none"
      ],
      "classes": [
          "K\u02bcawiil"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "K\u02bcawiil"
          ],
          "species": [
              ""
          ]
      }
  },
  "Serpent Skin": {
      "levels": {
          "1": "Your skin slowly becomes like a serpents. Able to turn on and off scaled armour over your skin.",
          "2": "Your skin slowly becomes like a serpents. Able to turn on and off scaled armour over your skin.",
          "3": "Endurance +3",
          "4": "Endurance +4",
          "5": "Endurance +5"
      },
      "note": "",
      "name": "Serpent-Skin",
      "element": [
          "none"
      ],
      "classes": [
          "K\u02bcawiil"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {
          "1": {
              "endurance": 1
          },
          "2": {
              "endurance": 2
          },
          "3": {
              "endurance": 3
          },
          "4": {
              "endurance": 4
          },
          "5": {
              "endurance": 5
          },
          "6": {
              "endurance": 6
          },
          "7": {
              "endurance": 7
          },
          "8": {
              "endurance": 8
          },
          "9": {
              "endurance": 9
          },
          "10": {
              "endurance": 10
          }
      },
      "links": {
          "spells": [],
          "classes": [
              "K\u02bcawiil"
          ],
          "species": [
              ""
          ]
      }
  },
  "Haietlik": {
      "levels": {
          "1": "Throw a snake shaped lighting bolt to hook onto a target, dealing damage in the process."
      },
      "note": "",
      "name": "Haietlik",
      "element": [
          "lightning"
      ],
      "classes": [
          "K\u02bcawiil"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "K\u02bcawiil"
          ],
          "species": [
              ""
          ]
      }
  },
  "K\u02bcawiil Rain": {
      "levels": {
          "1": "It starts raining, the rain recovers the HP of your summons/plants."
      },
      "note": "",
      "name": "K\u02bcawiil Rain ",
      "element": [
          "water"
      ],
      "classes": [
          "K\u02bcawiil"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "K\u02bcawiil"
          ],
          "species": [
              ""
          ]
      }
  },
  "K\u02bcawiil Bolt": {
      "levels": {
          "1": "Releases a burst of K\u02bcawiil-lightning from range.",
          "2": "Releases a burst of K\u02bcawiil-lightning from range."
      },
      "note": "",
      "name": "K\u02bcawiil Bolt",
      "element": [
          "lightning"
      ],
      "classes": [
          "K\u02bcawiil"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "K\u02bcawiil"
          ],
          "species": [
              ""
          ]
      }
  },
  "K\u02bcawiil Burst": {
      "levels": {
          "1": "Releases a burst of K\u02bcawiil-lightning on contact.",
          "2": "Releases a burst of K\u02bcawiil-lightning on contact."
      },
      "note": "",
      "name": "K\u02bcawiil Burst",
      "element": [
          "lightning"
      ],
      "classes": [
          "K\u02bcawiil"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "K\u02bcawiil"
          ],
          "species": [
              ""
          ]
      }
  },
  "Lightning Plant": {
      "levels": {
          "1": "Turn lightning seeds into lightning plants!"
      },
      "note": "",
      "name": "Lightning Plant",
      "element": [
          "lightning",
          "plant"
      ],
      "classes": [
          "K\u02bcawiil"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "K\u02bcawiil"
          ],
          "species": [
              ""
          ]
      }
  },
  "Inspect Plants": {
      "levels": {
          "1": "Your inspection of plants will be a level up on your normal inspection ability."
      },
      "note": "",
      "name": "Inspect Plants",
      "element": [
          "plant"
      ],
      "classes": [
          "K\u02bcawiil"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "K\u02bcawiil"
          ],
          "species": [
              ""
          ]
      }
  },
  "Bountiful Harvest": {
      "levels": {
          "1": "All of your harvests are increased by 10%.",
          "2": "All of your harvests are increased by 20%.",
          "3": "All of your harvests are increased by 30%.",
          "4": "All of your harvests are increased by 40%.",
          "5": "All of your harvests are increased by 50%.",
          "6": "All of your harvests are increased by 60%.",
          "7": "All of your harvests are increased by 70%.",
          "8": "All of your harvests are increased by 80%.",
          "9": "All of your harvests are increased by 90%.",
          "10": "All of your harvests are increased by 100%, recover 20% HP."
      },
      "note": "All of your harvests are increased by [x]%. [x is 10x the level of this spell.]",
      "name": "Bountiful Harvest",
      "element": [
          "plant"
      ],
      "classes": [
          "K\u02bcawiil"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "K\u02bcawiil"
          ],
          "species": [
              ""
          ]
      }
  },
  "Reap What You Sow": {
      "levels": {
          "1": "Reap the benefits or punishments from the seeds you sow.",
          "2": "Reap the benefits or punishments from the seeds you sow."
      },
      "note": "",
      "name": "Reap What You Sow",
      "element": [
          "plant"
      ],
      "classes": [
          "K\u02bcawiil"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "K\u02bcawiil"
          ],
          "species": [
              ""
          ]
      }
  },
  "Scarecrow": {
      "levels": {
          "1": "Uses plant material to summon a sentient scarecrow.",
          "2": "Uses plant material to summon a level 20 scarecrow.",
          "3": "Uses plant material to summon a level 30 scarecrow.",
          "4": "Uses plant material to summon a level 40 scarecrow.",
          "5": "Uses plant material to summon a level 50 scarecrow.",
          "6": "Uses plant material to summon a level 60 scarecrow.",
          "7": "Uses plant material to summon a level 70 scarecrow.",
          "8": "Uses plant material to summon a level 80 scarecrow.",
          "9": "Uses plant material to summon a level 90 scarecrow.",
          "10": "Uses plant material to summon a level 100 scarecrow. Equipment provided."
      },
      "note": "",
      "name": "Scarecrow",
      "element": [
          "plant"
      ],
      "classes": [
          "K\u02bcawiil"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "K\u02bcawiil"
          ],
          "species": [
              ""
          ]
      }
  },
  "Lightning harvest": {
      "levels": {
          "1": "Harvest the target. [If the target is below 20% HP this attack does 200% more damage. If this target is a 'plant' type this attack does 500% more damage. If this attack kills the target you have a chance to harvest something.]",
          "2": "Harvest the target. [If the target is below 20% HP this attack does 250% more damage. If this target is a 'plant' type this attack does 600% more damage. If this attack kills the target you have a chance to harvest something.]",
          "3": "Harvest the target. [If the target is below 20% HP this attack does 300% more damage. If this target is a 'plant' type this attack does 700% more damage. If this attack kills the target you have a chance to harvest something.]",
          "4": "Harvest the target. [If the target is below 20% HP this attack does 350% more damage. If this target is a 'plant' type this attack does 800% more damage. If this attack kills the target you have a chance to harvest something.]",
          "5": "Harvest the target. [If the target is below 20% HP this attack does 400% more damage. If this target is a 'plant' type this attack does 900% more damage. If this attack kills the target you have a chance to harvest something.]",
          "6": "Harvest the target. [If the target is below 20% HP this attack does 450% more damage. If this target is a 'plant' type this attack does 1000% more damage. If this attack kills the target you have a chance to harvest something.]",
          "7": "Harvest the target. [If the target is below 20% HP this attack does 500% more damage. If this target is a 'plant' type this attack does 1000% more damage. If this attack kills the target you have a chance to harvest something.]",
          "8": "Harvest the target. [If the target is below 20% HP this attack does 550% more damage. If this target is a 'plant' type this attack does 1000% more damage. If this attack kills the target you have a chance to harvest something.]",
          "9": "Harvest the target. [If the target is below 20% HP this attack does 600% more damage. If this target is a 'plant' type this attack does 1000% more damage. If this attack kills the target you have a chance to harvest something.]"
      },
      "note": "Harvest the target. [If the target is below 20% HP this attack does 200% more damage. If this target is a 'plant' type this attack does 500% more damage. If this attack kills the target you have a chance to harvest something.]",
      "name": "Lightning harvest",
      "element": [
          "lightning"
      ],
      "classes": [
          "K\u02bcawiil"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "K\u02bcawiil"
          ],
          "species": [
              ""
          ]
      }
  },
  "Lightning growth": {
      "levels": {
          "1": "Force the target to grow.",
          "2": "Force the target to grow.",
          "3": "All targets base stats +2 for the duration of the spells.",
          "4": "All targets stats +10% for the duration of the spells."
      },
      "note": "",
      "name": "Lightning growth",
      "element": [
          "lightning"
      ],
      "classes": [
          "K\u02bcawiil"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "https://cdn.dribbble.com/users/36602/screenshots/3544179/growing-tree-svg-animation-recut.gif",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "K\u02bcawiil"
          ],
          "species": [
              ""
          ]
      }
  },
  "Lightning germination": {
      "levels": {
          "1": "Stimulate a target into germinating",
          "2": "Stimulate a target into germinating",
          "3": "Target heals 12% of their max hp over 7 seconds.",
          "4": "Target heals 12% of their max hp over 6 seconds.",
          "5": "Target heals 14% of their max hp over 5 seconds.",
          "6": "Target heals 14% of their max hp over 4 seconds.",
          "7": "Target heals 16% of their max hp over 3 seconds.",
          "8": "Target heals 16% of their max hp over 2 seconds.",
          "9": "Target heals 18% of their max hp over 1 seconds.",
          "10": "Target heals 25% of their max hp."
      },
      "note": "",
      "name": "Lightning germination",
      "element": [
          "lightning"
      ],
      "classes": [
          "K\u02bcawiil"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "https://static.wixstatic.com/media/45e716_c8ae22cc571b4429ac23a59b4ddf9ef0~mv2.gif",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "K\u02bcawiil"
          ],
          "species": [
              ""
          ]
      }
  },
  "Seeds to Soldiers": {
      "levels": {
          "1": "Take 1 seed, use energy to give life to 1 soldier.",
          "2": "Take 2 seeds, use energy to give life to 2 soldiers."
      },
      "note": "Take [x] seed(s), use energy to give life to [x] soldier(s). [x is equal to spell level.]",
      "name": "Seeds to Soldiers",
      "element": [
          "plant"
      ],
      "classes": [
          "K\u02bcawiil"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "K\u02bcawiil"
          ],
          "species": [
              ""
          ]
      }
  },
  "Lightning seeds": {
      "levels": {
          "1": "Shoots a group of 1 seed in a spread from the user. The seeds attach to an opponent and cause lightning damage over time. A part of the damage is used to restore your as mana.",
          "2": "Shoots a group of 2 seeds in a spread from the user. The seeds attach to opponents and cause lightning damage over time. A part of the damage is used to restore your as mana.",
          "3": "Total seeds: 3. Mana Drain: 10%.",
          "4": "Total seeds: 4. Mana Drain: 10%.",
          "5": "Total seeds: 5. Mana Drain: 10%.",
          "6": "Total seeds: 6. Mana Drain: 10%.",
          "7": "Total seeds: 7. Mana Drain: 10%.",
          "8": "Total seeds: 8. Mana Drain: 10%.",
          "9": "Total seeds: 9. Mana Drain: 10%.",
          "10": "Total seeds: 10. Mana Drain: 20%."
      },
      "note": "Shoots a group of [x] seed(s) in a spread from the user. The seeds attach to opponent(s) and cause lightning damage over time. A part of the damage is used to restore your as mana. [x is equal to spell level.]",
      "name": "Lightning seeds",
      "element": [
          "lightning"
      ],
      "classes": [
          "K\u02bcawiil"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "http://2.bp.blogspot.com/-k4C_Lq6Y7fw/VDtBXWA2LCI/AAAAAAAABrY/QEUTlVZ76RI/s1600/lightningBall_small.gif",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "K\u02bcawiil"
          ],
          "species": [
              ""
          ]
      }
  },
  "Mana Ball": {
      "levels": {
          "1": "Gathers mana into a ball. Gives off a small amount of light.",
          "2": "Mana ball create is instant, flight speed +25%."
      },
      "note": "",
      "name": "Mana Ball",
      "element": [
          "mana"
      ],
      "classes": [
          "Mage"
      ],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": []
      }
  },
  "Mana Orbs": {
      "levels": {
          "1": "(3) Mana balls rotate around the user, hitting anything that comes into contact.",
          "2": "Mana balls rotate around the user, 3% faster.",
          "3": "Orbit distance is increased while moving.",
          "4": "10% increase in mana ball damage.",
          "5": "Gain and extra mana ball.",
          "6": "Orbit distance is increased while standing still.",
          "7": "Gain and extra mana ball.",
          "8": "10% increase in mana ball damage.",
          "9": "Balls can move away form their path of orbit if a target is near by.",
          "10": "Balls can be shot in all directions, bounce off walls or max range and coming back."
      },
      "note": "",
      "name": "Mana Orbs",
      "element": [
          "mana"
      ],
      "classes": [
          "Mage"
      ],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": []
      }
  },
  "Tether": {
      "levels": {
          "1": "Gathers mana into a string shape.",
          "2": "Two objects within 10\u2019 of each other be-come linked and cannot be moved more than 10\u2019 apart."
      },
      "note": "",
      "name": "Tether",
      "element": [
          "mana"
      ],
      "classes": [
          "Mage"
      ],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": []
      }
  },
  "Magic Resistance": {
      "levels": {
          "1": "Passive: Resists mana foreign to the body, on surface level."
      },
      "note": "",
      "name": "Magic Resistance",
      "element": [
          "mana"
      ],
      "classes": [
          "Mage"
      ],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": []
      }
  },
  "Magic Up": {
      "levels": {
          "1": "Increases the intensity of mana in the body.",
          "2": "Magic +2",
          "3": "Magic +3",
          "4": "Magic +4",
          "5": "Magic +5",
          "6": "Magic +6",
          "7": "Magic +7",
          "8": "Magic +8",
          "9": "Magic +9",
          "10": "Magic +10, mana recovery +10%."
      },
      "note": "",
      "name": "Magic Up",
      "element": [
          "mana"
      ],
      "classes": [
          "Mage"
      ],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {
          "1": {
              "magic": 1
          },
          "2": {
              "magic": 2
          },
          "3": {
              "magic": 3
          },
          "4": {
              "magic": 4
          },
          "5": {
              "magic": 5
          },
          "6": {
              "magic": 6
          },
          "7": {
              "magic": 7
          },
          "8": {
              "magic": 8
          },
          "9": {
              "magic": 9
          },
          "10": {
              "magic": 10
          }
      },
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": []
      }
  },
  "Mana Skin": {
      "levels": {
          "1": "Coat your body in a skin of mana, the effect can vary."
      },
      "note": "",
      "name": "Mana Skin",
      "element": [
          "mana"
      ],
      "classes": [
          "Mage"
      ],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": []
      }
  },
  "Mana Puppet": {
      "levels": {
          "1": "Control an object with mana."
      },
      "note": "",
      "name": "Mana Puppet",
      "element": [
          "mana"
      ],
      "classes": [
          "Mage"
      ],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": []
      }
  },
  "Strike": {
      "levels": {
          "1": "Calls mana in the environment to gather and strike down from above."
      },
      "note": "",
      "name": "Strike",
      "element": [
          "mana"
      ],
      "classes": [
          "Mage"
      ],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": []
      }
  },
  "Missile": {
      "levels": {
          "1": "Mana in the shape of a missile shoots towards the target.",
          "2": "+1 Missile.",
          "3": "+1 Missile.",
          "4": "Missile speed +25%.",
          "5": "Missiles target low HP enemies first.",
          "6": "Missiles more accurate.",
          "7": "+1 Missile.",
          "8": "+1 Missile.",
          "9": "Missile damage +10%.",
          "10": "Missiles become one big missile, splash damage on impact."
      },
      "note": "",
      "name": "Missile",
      "element": [
          "mana"
      ],
      "classes": [
          "Mage"
      ],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": []
      }
  },
  "Mana Slide": {
      "levels": {
          "1": "Pushes the user forward along the ground.",
          "2": "10% cost reduction.",
          "3": "+10% speed.",
          "4": "50% further.",
          "5": "Chance of falling over is now 0%",
          "6": "Chance skill interruption will fail.",
          "7": "50% further.",
          "8": "+10% speed.",
          "9": "15% cost reduction."
      },
      "note": "",
      "name": "Mana Slide",
      "element": [
          "mana"
      ],
      "classes": [
          "Mage"
      ],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": []
      }
  },
  "Flash Dash": {
      "levels": {
          "1": "Quickly dash from this location to a nearby location, leaving a trail of burning ground in your wake."
      },
      "note": "Fire",
      "name": "Flash Dash",
      "element": [
          "fire"
      ],
      "classes": [
          "Mage"
      ],
      "species": [
          ""
      ],
      "tier": "Normal",
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": [
              ""
          ]
      }
  },
  "Mana Shield": {
      "levels": {
          "1": "Produces a shield of mana around the user.",
          "2": "Takes 5% less damage."
      },
      "note": "",
      "name": "Mana Shield",
      "element": [
          "mana"
      ],
      "classes": [
          "Mage"
      ],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": []
      }
  },
  "Mana Wings": {
      "levels": {
          "1": "Produces a wings of mana.",
          "2": "Can fly using the wings.",
          "3": "Flight cost reduction 20%.",
          "4": "Can fly higher.",
          "5": "Can fly faster.",
          "6": "Summon cost reduction 10%.",
          "7": "Maintaining cost reduction 50%.",
          "8": "Can be used underwater.",
          "9": "Wings take 5% less damage.",
          "10": "Twice as many wings, half the cost."
      },
      "note": "",
      "name": "Mana Wings",
      "element": [
          "mana"
      ],
      "classes": [
          "Mage"
      ],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": []
      }
  },
  "Shield Burst": {
      "levels": {
          "1": "Explodes the mana left in the mana shield, into an attack."
      },
      "note": "",
      "name": "Shield Burst",
      "element": [
          "mana"
      ],
      "classes": [
          "Mage"
      ],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": []
      }
  },
  "Magic Regen": {
      "levels": {
          "1": "Increases mana recovery speed."
      },
      "note": "",
      "name": "Magic Regen",
      "element": [
          "mana"
      ],
      "classes": [
          "Mage"
      ],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": []
      }
  },
  "Talented": {
      "levels": {
          "1": "1% increase to experience gained.",
          "2": "2% increase to experience gained.",
          "3": "3% increase to experience gained.",
          "4": "4% increase to experience gained.",
          "5": "5% increase to experience gained.",
          "6": "6% increase to experience gained.",
          "7": "7% increase to experience gained.",
          "8": "8% increase to experience gained.",
          "9": "9% increase to experience gained."
      },
      "note": "",
      "name": "Talented",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Genius": {
      "levels": {
          "1": "2% increase to experience gained",
          "2": "4% increase to experience gained.",
          "3": "6% increase to experience gained.",
          "4": "8% increase to experience gained.",
          "5": "10% increase to experience gained.",
          "6": "12% increase to experience gained.",
          "7": "14% increase to experience gained.",
          "8": "16% increase to experience gained.",
          "9": "18% increase to experience gained."
      },
      "note": "",
      "name": "Genius",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Super genius": {
      "levels": {
          "1": "4% increase to experience gained",
          "2": "8% increase to experience gained.",
          "3": "12% increase to experience gained.",
          "4": "16% increase to experience gained.",
          "5": "20% increase to experience gained.",
          "6": "24% increase to experience gained.",
          "7": "28% increase to experience gained.",
          "8": "32% increase to experience gained.",
          "9": "36% increase to experience gained."
      },
      "note": "",
      "name": "Super Genius",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Peerless genius": {
      "levels": {
          "1": "10% increase to experience gained",
          "2": "20% increase to experience gained.",
          "3": "30% increase to experience gained.",
          "4": "40% increase to experience gained.",
          "5": "50% increase to experience gained.",
          "6": "60% increase to experience gained.",
          "7": "70% increase to experience gained.",
          "8": "80% increase to experience gained.",
          "9": "90% increase to experience gained."
      },
      "note": "",
      "name": "Peerless genius",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Handsome": {
      "levels": {
          "1": "+1 Charisma.",
          "2": "+2 Charisma.",
          "3": "+3 Charisma.",
          "4": "+4 Charisma.",
          "5": "+5 Charisma.",
          "6": "+6 Charisma.",
          "7": "+7 Charisma.",
          "8": "+8 Charisma.",
          "9": "+9 Charisma.",
          "10": "+10 Charisma, small chance people become infatuated with you."
      },
      "note": "",
      "name": "Handsome",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Beautiful": {
      "levels": {
          "1": "+1 Charisma.",
          "2": "+2 Charisma.",
          "3": "+3 Charisma.",
          "4": "+4 Charisma.",
          "5": "+5 Charisma.",
          "6": "+6 Charisma.",
          "7": "+7 Charisma.",
          "8": "+8 Charisma.",
          "9": "+9 Charisma.",
          "10": "+10 Charisma, small chance people become infatuated with you."
      },
      "note": "",
      "name": "Beautiful",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Peerless Beauty": {
      "levels": {
          "1": "+2 Charisma.",
          "2": "+4 Charisma.",
          "3": "+6 Charisma.",
          "4": "+8 Charisma.",
          "5": "+10 Charisma.",
          "6": "+12 Charisma.",
          "7": "+14 Charisma.",
          "8": "+16 Charisma.",
          "9": "+18 Charisma.",
          "10": "+20 Charisma, chance people become infatuated with you."
      },
      "note": "",
      "name": "Peerless Beauty",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Lucky": {
      "levels": {
          "1": "Slight chance of finding a rarer item."
      },
      "note": "",
      "name": "Lucky",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Persuasive": {
      "levels": {
          "1": "+1 Charisma.",
          "2": "+2 Charisma.",
          "3": "+3 Charisma.",
          "4": "+4 Charisma.",
          "5": "+5 Charisma.",
          "6": "+6 Charisma.",
          "7": "+7 Charisma.",
          "8": "+8 Charisma.",
          "9": "+9 Charisma.",
          "10": "+10 Charisma, I'll do it, even if I don't like it."
      },
      "note": "",
      "name": "Persuasive",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {
          "1": {
              "charisma": 1
          },
          "2": {
              "charisma": 2
          },
          "3": {
              "charisma": 3
          },
          "4": {
              "charisma": 4
          },
          "5": {
              "charisma": 5
          },
          "6": {
              "charisma": 6
          },
          "7": {
              "charisma": 7
          },
          "8": {
              "charisma": 8
          },
          "9": {
              "charisma": 9
          },
          "10": {
              "charisma": 10
          }
      },
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Brave": {
      "levels": {
          "1": "Chance to resist fear.",
          "2": "Chance to resist fear."
      },
      "note": "",
      "name": "Brave",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Human Aptitude": {
      "levels": {
          "1": "Chance based skills are 1% more likely to succeed."
      },
      "note": "",
      "name": "Human Aptitude",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [
          "Human"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": [
              "Human"
          ]
      }
  },
  "Human Ingenuity": {
      "levels": {
          "1": "When using tools gain +1 proficiency.",
          "2": "When using tools gain +2 proficiency.",
          "3": "When using tools gain +3 proficiency.",
          "4": "When using tools gain +4 proficiency.",
          "5": "When using tools gain +5 proficiency.",
          "6": "When using tools gain +6 proficiency.",
          "7": "When using tools gain +7 proficiency.",
          "8": "When using tools gain +8 proficiency.",
          "9": "When using tools gain +9 proficiency.",
          "10": "When using tools gain +10 proficiency, tools have +1 bonus stat."
      },
      "note": "",
      "name": "Human Ingenuity",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [
          "Human"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": [
              "Human"
          ]
      }
  },
  "Human Resolve": {
      "levels": {
          "1": "Boost all stats 10% for 2 second.",
          "2": "Boost all stats 10% for 4 second.",
          "3": "Boost all stats 10% for 6 second.",
          "4": "Boost all stats 10% for 8 second.",
          "5": "Boost all stats 10% for 10 second.",
          "6": "Boost all stats 10% for 12 second.",
          "7": "Boost all stats 10% for 14 second.",
          "8": "Boost all stats 10% for 16 second.",
          "9": "Boost all stats 10% for 18 second.",
          "10": "Boost all stats 20% for 20 second."
      },
      "note": "",
      "name": "Human Resolve",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [
          "Human"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": [
              "Human"
          ]
      }
  },
  "Plant Form": {
      "levels": {
          "1": "Take the form of a plant you have seen."
      },
      "note": "",
      "name": "Plant Form",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Adaptable": {
      "levels": {
          "1": "Environmental debuffs effect -5%.",
          "2": "Environmental debuffs effect -10%.",
          "3": "Environmental debuffs effect -15%.",
          "4": "Environmental debuffs effect -20%.",
          "5": "Environmental debuffs effect -25%.",
          "6": "Environmental debuffs effect -30%.",
          "7": "Environmental debuffs effect -35%.",
          "8": "Environmental debuffs effect -40%.",
          "9": "Environmental debuffs effect -45%.",
          "10": "Environmental debuffs effect -50%, pull less agro."
      },
      "note": "",
      "name": "Adaptable",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Healthy": {
      "levels": {
          "1": "Vitality +1.",
          "2": "Vitality +1, small chance to resist poisons.",
          "3": "Vitality +2, small chance to resist poisons & diseases.",
          "4": "Vitality +3, small chance to resist poisons & diseases.",
          "5": "Vitality +3, small chance to resist poisons & diseases, small increase to HP regeneration.",
          "6": "Vitality +4, small chance to resist poisons & diseases, small increase to HP regeneration.",
          "7": "Vitality +4, chance to resist poisons & diseases, increase to HP regeneration.",
          "8": "Vitality +5, chance to resist poisons & diseases, increase to HP regeneration.",
          "9": "Vitality +5, chance to resist poisons & diseases, greater HP regeneration.",
          "10": "Vitality +5, greater chance to resist poisons & diseases, greater HP regeneration."
      },
      "note": "",
      "name": "Healthy",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {
          "1": {
              "vitality": 1
          },
          "2": {
              "vitality": 1
          },
          "3": {
              "vitality": 2
          },
          "4": {
              "vitality": 3
          },
          "5": {
              "vitality": 3
          },
          "6": {
              "vitality": 4
          },
          "7": {
              "vitality": 4
          },
          "8": {
              "vitality": 5
          },
          "9": {
              "vitality": 5
          },
          "10": {
              "vitality": 5
          }
      },
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Athletic": {
      "levels": {
          "1": "Movement speed +2%",
          "2": "Movement speed +4%",
          "3": "Movement speed +6%",
          "4": "Movement speed +8%",
          "5": "Movement speed +10%",
          "6": "Movement speed +12%",
          "7": "Movement speed +14%",
          "8": "Movement speed +16%",
          "9": "Movement speed +18%",
          "10": "Movement speed +20%, effects that reduce movement speed are halved."
      },
      "note": "",
      "name": "Athletic",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Perception": {
      "levels": {
          "1": "Sense +1",
          "2": "Sense +2",
          "3": "Sense +3",
          "4": "Sense +4",
          "5": "Sense +5",
          "6": "Sense +6",
          "7": "Sense +7",
          "8": "Sense +8",
          "9": "Sense +9",
          "10": "Sense +10, basic traps will cause 0 damage."
      },
      "note": "",
      "name": "Perception",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {
          "1": {
              "sense": 1
          },
          "2": {
              "sense": 2
          },
          "3": {
              "sense": 3
          },
          "4": {
              "sense": 4
          },
          "5": {
              "sense": 5
          },
          "6": {
              "sense": 6
          },
          "7": {
              "sense": 7
          },
          "8": {
              "sense": 8
          },
          "9": {
              "sense": 9
          },
          "10": {
              "sense": 10
          }
      },
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Quick": {
      "levels": {
          "1": "Dexterity +1",
          "2": "Dexterity +2"
      },
      "note": "",
      "name": "Quick",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {
          "1": {
              "dexterity": 1
          },
          "2": {
              "dexterity": 2
          }
      },
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Pure of mind": {
      "levels": {
          "1": "Willpower +1",
          "2": "Willpower +2"
      },
      "note": "",
      "name": "Pure of mind",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Perseverance": {
      "levels": {
          "1": "Willpower +1"
      },
      "note": "",
      "name": "Perseverance",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Magical Aptitude": {
      "levels": {
          "1": "Magic +1",
          "2": "Magic +2",
          "3": "Magic +3",
          "4": "Magic +4",
          "5": "Magic +5",
          "6": "Magic +6",
          "7": "Magic +7",
          "8": "Magic +8",
          "9": "Magic +9"
      },
      "note": "",
      "name": "Magical Aptitude",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {
          "1": {
              "magic": 1
          },
          "2": {
              "magic": 2
          },
          "3": {
              "magic": 3
          },
          "4": {
              "magic": 4
          },
          "5": {
              "magic": 5
          },
          "6": {
              "magic": 6
          },
          "7": {
              "magic": 7
          },
          "8": {
              "magic": 8
          },
          "9": {
              "magic": 9
          },
          "10": {
              "magic": 10
          }
      },
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Magic Enthusiast": {
      "levels": {
          "1": "Magic +1",
          "2": "Magic +2",
          "3": "Magic +3",
          "4": "Magic +4",
          "5": "Magic +5",
          "6": "Magic +6",
          "7": "Magic +7",
          "8": "Magic +8",
          "9": "Magic +9"
      },
      "note": "",
      "name": "Magical Enthusiast",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {
          "1": {
              "magic": 1
          },
          "2": {
              "magic": 2
          },
          "3": {
              "magic": 3
          },
          "4": {
              "magic": 4
          },
          "5": {
              "magic": 5
          },
          "6": {
              "magic": 6
          },
          "7": {
              "magic": 7
          },
          "8": {
              "magic": 8
          },
          "9": {
              "magic": 9
          },
          "10": {
              "magic": 10
          }
      },
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Arcane Inclination": {
      "levels": {
          "1": "Magic +1",
          "2": "Magic +2"
      },
      "note": "",
      "name": "Arcane Inclination",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {
          "1": {
              "magic": 1
          },
          "2": {
              "magic": 2
          },
          "3": {
              "magic": 3
          },
          "4": {
              "magic": 4
          },
          "5": {
              "magic": 5
          },
          "6": {
              "magic": 6
          },
          "7": {
              "magic": 7
          },
          "8": {
              "magic": 8
          },
          "9": {
              "magic": 9
          },
          "10": {
              "magic": 10
          }
      },
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Arcane Tradition Focus": {
      "levels": {
          "1": "Magic +1",
          "2": "Magic +2"
      },
      "note": "",
      "name": "Arcane Tradition Focus",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {
          "1": {
              "magic": 1
          },
          "2": {
              "magic": 2
          },
          "3": {
              "magic": 3
          },
          "4": {
              "magic": 4
          },
          "5": {
              "magic": 5
          },
          "6": {
              "magic": 6
          },
          "7": {
              "magic": 7
          },
          "8": {
              "magic": 8
          },
          "9": {
              "magic": 9
          },
          "10": {
              "magic": 10
          }
      },
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Arcane Tradition Prodigy": {
      "levels": {
          "1": "Magic +1",
          "2": "Magic +2"
      },
      "note": "",
      "name": "Arcane Tradition Prodigy",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {
          "1": {
              "magic": 1
          },
          "2": {
              "magic": 2
          },
          "3": {
              "magic": 3
          },
          "4": {
              "magic": 4
          },
          "5": {
              "magic": 5
          },
          "6": {
              "magic": 6
          },
          "7": {
              "magic": 7
          },
          "8": {
              "magic": 8
          },
          "9": {
              "magic": 9
          },
          "10": {
              "magic": 10
          }
      },
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Astute": {
      "levels": {
          "1": "Magic +1",
          "2": "Magic +2"
      },
      "note": "",
      "name": "Astute",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {
          "1": {
              "magic": 1
          },
          "2": {
              "magic": 2
          },
          "3": {
              "magic": 3
          },
          "4": {
              "magic": 4
          },
          "5": {
              "magic": 5
          },
          "6": {
              "magic": 6
          },
          "7": {
              "magic": 7
          },
          "8": {
              "magic": 8
          },
          "9": {
              "magic": 9
          },
          "10": {
              "magic": 10
          }
      },
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Basic God": {
      "levels": {
          "1": "All Stats +1"
      },
      "note": "",
      "name": "Basic God",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Intermediate God": {
      "levels": {
          "1": "All Stats +1"
      },
      "note": "",
      "name": "Intermediate God",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Advanced God": {
      "levels": {
          "1": "All Stats +1"
      },
      "note": "",
      "name": "Advanced God",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Demi-God": {
      "levels": {
          "1": "All Stats +1"
      },
      "note": "",
      "name": "Demi-God",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Full God": {
      "levels": {
          "1": "All Stats +1"
      },
      "note": "",
      "name": "Full God",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Gift of Lightning": {
      "levels": {
          "1": "Lightning damage +1%"
      },
      "note": "",
      "name": "Gift of Lightning",
      "element": [
          "lightning"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Adhere": {
      "levels": {
          "1": "Makes an object sticky."
      },
      "note": "",
      "name": "Adhere",
      "element": [
          "mana"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Aethersight": {
      "levels": {
          "1": "Magical auras glow brightly for you."
      },
      "note": "",
      "name": "Aethersight",
      "element": [
          "mana"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Animate Object": {
      "levels": {
          "1": "An object animates under your control."
      },
      "note": "",
      "name": "Animate Object",
      "element": [
          "mana"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Anthropomorphize": {
      "levels": {
          "1": "A touched animal either gains human a characteristic."
      },
      "note": "",
      "name": "Anthropomorphize",
      "element": [
          "mana"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Arboriate": {
      "levels": {
          "1": "You become a walking tree up to 10ft tall."
      },
      "note": "",
      "name": "Arboriate",
      "element": [
          "plant"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Arcane Eye": {
      "levels": {
          "1": "You can see through a magical floating eyeball that flies around at your command."
      },
      "note": "",
      "name": "Arcane Eye",
      "element": [
          "mana"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Astral Prison": {
      "levels": {
          "1": "A creature is frozen in time and space within an invulnerable crystal shell."
      },
      "note": "",
      "name": "Astral Prison",
      "element": [
          "time"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Astral Weapon": {
      "levels": {
          "1": "A magical weapon appears in your hands until end of spell. It adds +1 to all your attacks."
      },
      "note": "",
      "name": "Astral Weapon",
      "element": [
          "mana"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Magnetic Attract": {
      "levels": {
          "1": "2 Objects are strongly magnetically attracted to each other if they come within 10 feet."
      },
      "note": "",
      "name": "Magnetic Attract",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Auditory Illusion": {
      "levels": {
          "1": "You create illusory noises that appear to come from a direction of your choice."
      },
      "note": "",
      "name": "Auditory Illusion",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Beacon": {
      "levels": {
          "1": "A touched object begins emitting a psychic pulse that draws the curiosity of all monsters within 1 mile."
      },
      "note": "",
      "name": "Beacon",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Beast Form": {
      "levels": {
          "1": "You transform into a mundane animal."
      },
      "note": "",
      "name": "Beast Form",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Befuddle": {
      "levels": {
          "1": "1 creature of your choice are unable to form new short-term memories for the duration of the spell."
      },
      "note": "",
      "name": "Befuddle",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Bird Person": {
      "levels": {
          "1": "Your arms turn into huge wings."
      },
      "note": "",
      "name": "Bird Person",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Body Swap": {
      "levels": {
          "1": "You switch bodies with a creature you touch. If one body dies, the other dies as well."
      },
      "note": "",
      "name": "Body Swap",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Charm": {
      "levels": {
          "1": "A creature treat you like a friend."
      },
      "note": "",
      "name": "Charm",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Command": {
      "levels": {
          "1": "A creature obeys a single, three-word command that does not harm it."
      },
      "note": "",
      "name": "Command",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Comprehend": {
      "levels": {
          "1": "You become fluent in all languages."
      },
      "note": "",
      "name": "Comprehend",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Control Weather": {
      "levels": {
          "1": " You may alter the type of weather at will, but you do not otherwise control it."
      },
      "note": "",
      "name": "Control Weather",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Counterspell": {
      "levels": {
          "1": "Chance to cancel a targets spell."
      },
      "note": "",
      "name": "Counterspell",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Deafen": {
      "levels": {
          "1": "Nearby creatures of your choice are deafened."
      },
      "note": "",
      "name": "Deafen",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Disassemble": {
      "levels": {
          "1": "Any of your body parts may be detached and reattached at will, without causing pain or damage. You can still control them."
      },
      "note": "",
      "name": "Disassemble",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Disguise": {
      "levels": {
          "1": "You may alter the appearance of 1 characters at will as long as they remain humanoid. Attempts to impersonate other characters will seem uncanny."
      },
      "note": "",
      "name": "Disguise",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Displace": {
      "levels": {
          "1": "Shift an object\u2019s apparent position by up to 10cm."
      },
      "note": "",
      "name": "Displace",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Earthquake": {
      "levels": {
          "1": "The ground begins shaking violently. Structures may be damaged or collapse."
      },
      "note": "",
      "name": "Earthquake",
      "element": [
          "earth"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Elasticity": {
      "levels": {
          "1": "Your body can stretch up to 10cm."
      },
      "note": "",
      "name": "Elasticity",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Elemental Sprite": {
      "levels": {
          "1": "Summon an elemental spite."
      },
      "note": "",
      "name": "Elemental Sprite",
      "element": [
          "mana"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Feast": {
      "levels": {
          "1": "A huge table appears, laden with food."
      },
      "note": "",
      "name": "Feast",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Filch": {
      "levels": {
          "1": "1 visible item teleport to your hands."
      },
      "note": "",
      "name": "Filch",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Flesh Warp": {
      "levels": {
          "1": "A touched creature doubles or halves in size."
      },
      "note": "",
      "name": "Flesh Warp",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Fog Cloud": {
      "levels": {
          "1": "A cloud of dense fog spreads out from you."
      },
      "note": "",
      "name": "Fog Cloud",
      "element": [
          "water"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Frenzy": {
      "levels": {
          "1": "1 creature erupts in a frenzy of random violence."
      },
      "note": "",
      "name": "Frenzy",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Random Gate": {
      "levels": {
          "1": "A portal to a random plane opens."
      },
      "note": "",
      "name": "Random Gate",
      "element": [
          "portal"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Gravity Shift": {
      "levels": {
          "1": "You can change the direction of gravity (for yourself only) once every 6 seconds."
      },
      "note": "",
      "name": "Gravity Shift",
      "element": [
          "gravity"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Haste": {
      "levels": {
          "1": "Your movement speed is tripled."
      },
      "note": "",
      "name": "Haste",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Hear Whispers": {
      "levels": {
          "1": "You can hear the faintest sounds clearly."
      },
      "note": "",
      "name": "Hear Whispers",
      "element": [
          "sound"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Hover": {
      "levels": {
          "1": "An object hovers, frictionless, 2\u2019 above the ground. Can hold up to 5 humanoids."
      },
      "note": "",
      "name": "Hover",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Hypnotize": {
      "levels": {
          "1": "A creature enters a trance and will truthfully answer L yes or no questions you ask it."
      },
      "note": "",
      "name": "Hypnotize",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Illuminate": {
      "levels": {
          "1": "???"
      },
      "note": "",
      "name": "Illuminate",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Increase Gravity": {
      "levels": {
          "1": "The gravity in a nearby area triples."
      },
      "note": "",
      "name": "Increase Gravity",
      "element": [
          "gravity"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Ironbane": {
      "levels": {
          "1": "Any iron that touches you disintegrates."
      },
      "note": "",
      "name": "Ironbane",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Knock": {
      "levels": {
          "1": "All nearby locks, clasps, and buckles open."
      },
      "note": "",
      "name": "Knock",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Leap": {
      "levels": {
          "1": "You can jump up to 30\u2019 at a time."
      },
      "note": "",
      "name": "Leap",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Liquid Air": {
      "levels": {
          "1": "The air becomes thick enough to swim in."
      },
      "note": "",
      "name": "Liquid Air",
      "element": [
          "wind"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Magic Dampener": {
      "levels": {
          "1": "All nearby magical effects have their effectiveness halved."
      },
      "note": "",
      "name": "Magic Dampener",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Manse": {
      "levels": {
          "1": "A sturdy, fully furnished cottage appears. You can permit and forbid entry to it at will. Lasts 12 hours."
      },
      "note": "",
      "name": "Manse",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Marble Madness": {
      "levels": {
          "1": "Your pockets are always full of marbles."
      },
      "note": "",
      "name": "Marble Madness",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Masquerade": {
      "levels": {
          "1": "1 targets appearances and voices become identical to yours."
      },
      "note": "",
      "name": "Masquerade",
      "element": [
          "sound"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Miniaturize": {
      "levels": {
          "1": "You and 1 other touched creatures are reduced to the size of a mouse."
      },
      "note": "",
      "name": "Miniaturize",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Mirror Image": {
      "levels": {
          "1": "1 illusory duplicates of yourself appear under your control."
      },
      "note": "",
      "name": "Mirror Image",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Mirror Walk": {
      "levels": {
          "1": "A mirror becomes a gateway to another mirror that you have looked into today."
      },
      "note": "",
      "name": "Mirror Walk",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Multiarm": {
      "levels": {
          "1": "You gain 1 extra arms until end of spell."
      },
      "note": "",
      "name": "Multiarm",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Objectify": {
      "levels": {
          "1": "You become any inanimate object between the size of a grand piano and an apple."
      },
      "note": "",
      "name": "Objectify",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Ooze Form": {
      "levels": {
          "1": "You become a living jelly."
      },
      "note": "",
      "name": "Ooze Form",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Pacify": {
      "levels": {
          "1": "1 creatures have a sudden aversion to violence."
      },
      "note": "",
      "name": "Pacify",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Phantom Coach": {
      "levels": {
          "1": "A ghostly coach appears until end of spell. It moves unnaturally fast over any terrain, even water."
      },
      "note": "",
      "name": "Phantom Coach",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Phobia": {
      "levels": {
          "1": "1 creatures are terrified of an object of your choice."
      },
      "note": "",
      "name": "Phobia",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Primeval Surge": {
      "levels": {
          "1": "A mundane animal grows to the size of an elephant and is enraged."
      },
      "note": "",
      "name": "Primeval Surge",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Psychometry": {
      "levels": {
          "1": "The system answers 1 yes or no questions about a touched object."
      },
      "note": "",
      "name": "Psychometry",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Pull": {
      "levels": {
          "1": "An object of any size is pulled 30\u2019 directly towards you with the strength of 2 men. Lasts for one round."
      },
      "note": "",
      "name": "Pull",
      "element": [
          "mana"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Push": {
      "levels": {
          "1": "An object of any size is pushed 30\u2019 directly away from you with the strength of 2 men. Lasts for one round."
      },
      "note": "",
      "name": "Push",
      "element": [
          "mana"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Raise Spirit": {
      "levels": {
          "1": "The spirit of a dead body manifests and may choose to answer questions."
      },
      "note": "",
      "name": "Raise Spirit",
      "element": [
          "necromancy"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Read Mind": {
      "levels": {
          "1": "You hear the surface thoughts of creatures."
      },
      "note": "",
      "name": "Raise Spirit",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Repel": {
      "levels": {
          "1": "2 objects are strongly magnetically repelled from each other if they come within 10 feet."
      },
      "note": "",
      "name": "Repel",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Scry": {
      "levels": {
          "1": "You can see through the eyes of a known creature."
      },
      "note": "",
      "name": "Scry",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Sculpt Elements": {
      "levels": {
          "1": "All inanimate material behaves like clay in your hands."
      },
      "note": "",
      "name": "Sculpt Elements",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Shroud": {
      "levels": {
          "1": "1 creatures become invisible until they move"
      },
      "note": "",
      "name": "Shroud",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Shuffle": {
      "levels": {
          "1": "Reduces movement speed of a target by 10%."
      },
      "note": "",
      "name": "Shuffle",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Swap": {
      "levels": {
          "1": "2 creatures instantly switch places."
      },
      "note": "",
      "name": "Swap",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Sleep": {
      "levels": {
          "1": "1 creatures fall into a light sleep."
      },
      "note": "",
      "name": "Sleep",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Smoke Form": {
      "levels": {
          "1": "Your body becomes living smoke."
      },
      "note": "",
      "name": "Smoke Form",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Snail Knight": {
      "levels": {
          "1": "10 minutes after casting, a knight sitting astride a giant snail rides into view. He is able to answer most questions related to quests and chivalry, and may aid you if he finds you worthy."
      },
      "note": "",
      "name": "Snail Knight",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Sniff": {
      "levels": {
          "1": "You can smell even the faintest traces of scents."
      },
      "note": "",
      "name": "Sniff",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Sort": {
      "levels": {
          "1": "Inanimate items sort themselves according to categories you set. The categories must be visually verifiable."
      },
      "note": "",
      "name": "Sort",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Spatial Distortion": {
      "levels": {
          "1": "A nearby inanimate object no bigger than a bedroom shrinks to the size of an apple."
      },
      "note": "",
      "name": "Spatial Distortion",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Spectacle": {
      "levels": {
          "1": "A clearly unreal but impressive illusion of your choice appears, under your control. It may be up to the size of a palace and has full motion and sound."
      },
      "note": "",
      "name": "Spectacle",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Spider Climb": {
      "levels": {
          "1": "You can climb surfaces like a spider."
      },
      "note": "",
      "name": "Spider Climb",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Summon Cube": {
      "levels": {
          "1": "Once per second, (6 times per round) you may summon or banish 3-foot-wide cubes of earth. New cubes must be affixed to the earth or to other cubes."
      },
      "note": "",
      "name": "Summon Cube",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Swarm": {
      "levels": {
          "1": "You become a swarm of crows, rats, or piranha."
      },
      "note": "",
      "name": "Swarm",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Telekinesis": {
      "levels": {
          "1": "You may mentally move items."
      },
      "note": "",
      "name": "Telekinesis",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Telepathy": {
      "levels": {
          "1": "2 creatures can hear each other\u2019s thoughts."
      },
      "note": "",
      "name": "Telepathy",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Tesser": {
      "levels": {
          "1": "An object disappears and reappears on the ground in a visible, clear area up to 30\u2019 away."
      },
      "note": "",
      "name": "Tesser",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Thaumaturgic Anchor": {
      "levels": {
          "1": "Object becomes the target of every spell cast near it."
      },
      "note": "",
      "name": "Thaumaturgic Anchor",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Thicket": {
      "levels": {
          "1": "A thicket of trees and dense brush up to 30\u2019 wide suddenly sprouts up."
      },
      "note": "",
      "name": "Thicket",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Time Jump": {
      "levels": {
          "1": "An object jumps 10 minutes into the future."
      },
      "note": "",
      "name": "Time Jump",
      "element": [
          "time"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Time Rush": {
      "levels": {
          "1": "Time in a nearby area becomes 10 times faster."
      },
      "note": "",
      "name": "Time Rush",
      "element": [
          "time"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Time Slow": {
      "levels": {
          "1": "Time in a nearby area slows to 10%."
      },
      "note": "",
      "name": "Time Slow",
      "element": [
          "time"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Transfer Heat": {
      "levels": {
          "1": "You may transfer heat or cold between two inanimate objects."
      },
      "note": "",
      "name": "Transfer Heat",
      "element": [
          "fire"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "True Sight": {
      "levels": {
          "1": "You see the true nature of your surroundings."
      },
      "note": "",
      "name": "True Sight",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Upwell": {
      "levels": {
          "1": "A spring appears and starts gushing seawater."
      },
      "note": "",
      "name": "Upwell",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Vision": {
      "levels": {
          "1": "You have total control over what a creature sees."
      },
      "note": "",
      "name": "Vision",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Visual Illusion": {
      "levels": {
          "1": "A silent, immobile, illusion of your choice appears, up to the size of a bedroom."
      },
      "note": "",
      "name": "Visual Illusion",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Ward": {
      "levels": {
          "1": "A silver circle 30\u2019 across appears on the ground. Choose one thing that cannot cross it: Living creatures, dead creatures, non-human creatures, projectiles or metal."
      },
      "note": "",
      "name": "Ward",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Web": {
      "levels": {
          "1": "Your hands can shoot thick webbing."
      },
      "note": "",
      "name": "Web",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Wizard Lock": {
      "levels": {
          "1": "A door is magically sealed."
      },
      "note": "",
      "name": "Wizard Lock",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Wizard Mark": {
      "levels": {
          "1": "Your finger can shoot a stream of brightly-colored paint. This paint is only visible to wizards, and can be seen at any distance, even through solid objects. Fades after L days."
      },
      "note": "",
      "name": "Wizard Mark",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Agile": {
      "levels": {
          "1": "Dexterity +1"
      },
      "note": "",
      "name": "Agile",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Beast Combo Strike": {
      "levels": {
          "1": "Both you and your Beast companion attack the same target."
      },
      "note": "",
      "name": "Beast Combo Strike",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Beast Intercept": {
      "levels": {
          "1": "Your best intercepts the target."
      },
      "note": "",
      "name": "Beast Intercept",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Blessed Divine Smite": {
      "levels": {
          "1": "Your Divine Smite strikes are further empowered by your deity\u2019s grace. "
      },
      "note": "",
      "name": "Blessed Divine Smite",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Best Defense is a Strong Offense": {
      "levels": {
          "1": "On the first strike you receive your defense is used to damage the target instead of reducing damage."
      },
      "note": "",
      "name": "Best Defense is a Strong Offense",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Blinding Strike": {
      "levels": {
          "1": "Your weapon strike momentary blinds the target."
      },
      "note": "",
      "name": "Blinding Strike",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Bloodline of Fire": {
      "levels": {
          "1": "Fire +1%."
      },
      "note": "",
      "name": "Bloodline of Fire",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Bloodhunt": {
      "levels": {
          "1": "You can sense blood from far away.",
          "2": "When your target is wounded you gain +1 to a random stat."
      },
      "note": "",
      "name": "Bloodhunt",
      "element": [
          "blood"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Born Sneaky": {
      "levels": {
          "1": "Dexterity +1"
      },
      "note": "",
      "name": "Born Sneaky",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Cheap Shot": {
      "levels": {
          "1": "Can only be use when a target is not targeting you."
      },
      "note": "",
      "name": "Cheap Shot",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Built like a": {
      "levels": {
          "1": "You are a big strong target. +1 Strength, -1 Dexterity."
      },
      "note": "",
      "name": "Built like a",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Cleave": {
      "levels": {
          "1": "The follow through from your melee weapon strikes."
      },
      "note": "",
      "name": "Cleave",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Commanding Presence": {
      "levels": {
          "1": "Command points +1 for every 10 Charisma."
      },
      "note": "",
      "name": "Commanding Presence",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Conservator": {
      "levels": {
          "1": "You have the ability to identify magic items. (Improved inspect)"
      },
      "note": "",
      "name": "Conservator",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Dragonborn Heritage": {
      "levels": {
          "1": "Your lineage allows you recover from your wounds faster than normal."
      },
      "note": "",
      "name": "Dragonborn Heritage",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Great Fortitude": {
      "levels": {
          "1": "You are extraordinarily healthier than normal."
      },
      "note": "",
      "name": "Great Fortitude",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Greater Arcane Recovery": {
      "levels": {
          "1": "You can regain higher magical energy than normal."
      },
      "note": "",
      "name": "Greater Arcane Recovery",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Improved Arcane Recovery": {
      "levels": {
          "1": "You can regain higher magical energy than normal."
      },
      "note": "",
      "name": "Improved Arcane Recovery",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Favored Enemy": {
      "levels": {
          "1": "You know how to exploit your favored enemies\u2019 vulnerabilities in combat."
      },
      "note": "",
      "name": "Favored Enemy",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Hamstring": {
      "levels": {
          "1": "You slash the tendons behind a creature\u2019s leg."
      },
      "note": "",
      "name": "Hamstring",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Impairing Critical": {
      "levels": {
          "1": "Your critical blows are so fierce they can cause temporary debilitating effects."
      },
      "note": "",
      "name": "Impairing Critical",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Aura": {
      "levels": {
          "1": "You can now produce an Aura."
      },
      "note": "",
      "name": "Aura",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Cloak of Shadows": {
      "levels": {
          "1": "Wraps you with the shadows around you making you harder to detect."
      },
      "note": "",
      "name": "Cloak of Shadows",
      "element": [
          "shadow"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Improved Dodge": {
      "levels": {
          "1": "You can attack while dodging."
      },
      "note": "",
      "name": "Improved Dodge",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Improved Gift of Lightning": {
      "levels": {
          "1": "Lightning +2%."
      },
      "note": "",
      "name": "Improved Gift of Lightning",
      "element": [
          "lightning"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Misty Escape": {
      "levels": {
          "1": "Mist appears around you."
      },
      "note": "",
      "name": "Misty Escape",
      "element": [
          "water"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Improved Natural Recovery": {
      "levels": {
          "1": "Your natural recovery is increased."
      },
      "note": "",
      "name": "Improved Natural Recovery",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Turn the Unholy": {
      "levels": {
          "1": "???"
      },
      "note": "",
      "name": "Turn the Unholy",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Turn Undead": {
      "levels": {
          "1": "Undead species will be damaged in an area around you."
      },
      "note": "",
      "name": "Turn Undead",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Turn the Faithless": {
      "levels": {
          "1": "Those without Faith will turn around."
      },
      "note": "",
      "name": "Turn the Faithless",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Uncanny Dodge": {
      "levels": {
          "1": "Sometimes hits did not land on you.",
          "2": "Target character's dodging is increased by 90% and your Movement Speed is increased by 20%."
      },
      "note": "",
      "name": "Uncanny Dodge/evasion",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Indomitable": {
      "levels": {
          "1": "+1 strength."
      },
      "note": "",
      "name": "Indomitable",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Last Stand": {
      "levels": {
          "1": "For the next 3 seconds you cannot die."
      },
      "note": "",
      "name": "Last Stand",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Natural Diplomat": {
      "levels": {
          "1": "+1 Charisma."
      },
      "note": "",
      "name": "Natural Diplomat",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Nature Sense": {
      "levels": {
          "1": "+1 Sense outside of settlements."
      },
      "note": "",
      "name": "Nature Sense",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Poisoncraft": {
      "levels": {
          "1": "Poison +1%."
      },
      "note": "",
      "name": "Poisoncraft",
      "element": [
          "toxic"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Rejuvenate": {
      "levels": {
          "1": "Targets HP is recovered by 10% of their max HP over the next 5 seconds."
      },
      "note": "",
      "name": "Rejuvenate",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Shadow Strike": {
      "levels": {
          "1": "Striking from a shadow, dealing +50% damage to unaware targets."
      },
      "note": "",
      "name": "Shadow Strike",
      "element": [
          "shadow"
      ],
      "classes": [
          "Rouge"
      ],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Rouge"
          ],
          "species": []
      }
  },
  "Stealth": {
      "levels": {
          "1": "Become invisible for a short period of time, as long as you do not attack anything or take damage."
      },
      "note": "",
      "name": "Stealth",
      "element": [
          "shadow"
      ],
      "classes": [
          "Rouge"
      ],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Rouge"
          ],
          "species": []
      }
  },
  "Sunlight Sensitivity": {
      "levels": {
          "1": "All stats -1 in sunlight.",
          "2": "Your MP recovers slightly slower in sunlight.",
          "3": "Your Stamina recovery is reduced 25% in sunlight.",
          "4": "4",
          "5": "5",
          "6": "6",
          "7": "7",
          "8": "8",
          "9": "9",
          "10": "Checking to see if innate skills works"
      },
      "note": "",
      "name": "Sunlight Sensitivity",
      "element": [
          "light"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Undead",
          "Vampire",
          "Lesser Vampire",
          "Wight",
          "Zombie",
          "Ghoul"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": true,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Undead",
              "Vampire",
              "Lesser Vampire",
              "Wight",
              "Zombie",
              "Ghoul"
          ]
      }
  },
  "Sunlight Adaptation": {
      "levels": {
          "1": "All stats +1 in sunlight!",
          "2": "Your MP recovers slightly faster in sunlight.",
          "3": "."
      },
      "note": "",
      "name": "Sunlight Adaptation",
      "element": [
          "light"
      ],
      "classes": [
          "Sun Knight"
      ],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Sun Knight"
          ],
          "species": []
      }
  },
  "Tool Focus": {
      "levels": {
          "1": "+1 tool proficiency."
      },
      "note": "",
      "name": "Tool Focus",
      "element": [
          "none"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Human"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Human"
          ]
      }
  },
  "Vicious Critical": {
      "levels": {
          "1": "Your critical can critical!"
      },
      "note": "",
      "name": "Vicious Critical",
      "element": [
          "None"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Witchcraft": {
      "levels": {
          "1": "Potions are 10% better."
      },
      "note": "",
      "name": "Witchcraft",
      "element": [
          "Mana"
      ],
      "classes": [
          "Mage"
      ],
      "species": [
          "Human"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": [
              "Human"
          ]
      }
  },
  "Midas": {
      "levels": {
          "1": "Opponents always drop at least one coin.",
          "2": "Coins gained +1%.",
          "3": "Every new town you visit, +100 coins.",
          "4": "Donkey Ears."
      },
      "note": "",
      "name": "Midas",
      "element": [
          "metal"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Breathing Bubbles": {
      "levels": {
          "1": "Wraps bubbles of air around the targets heads."
      },
      "note": "",
      "name": "Breathing Bubbles",
      "element": [
          "water"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Fortify": {
      "levels": {
          "1": "Increases your Endurance for a period of time."
      },
      "note": "",
      "name": "Fortify",
      "element": [
          "metal",
          "earth"
      ],
      "classes": [
          "Fighter"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Fighter"
          ],
          "species": [
              ""
          ]
      }
  },
  "Impalement": {
      "levels": {
          "1": "Drives spikes from the ground."
      },
      "note": "",
      "name": "Impalement",
      "element": [
          "metal",
          "earth"
      ],
      "classes": [
          "Fighter",
          "Mage"
      ],
      "species": [
          ""
      ],
      "tier": "Basic",
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Fighter",
              "Mage"
          ],
          "species": [
              ""
          ]
      }
  },
  "Summon Artillery Plant": {
      "levels": {
          "1": "Summons and artillery plant."
      },
      "note": "",
      "name": "Summon Artillery Plant",
      "element": [
          "plant"
      ],
      "classes": [
          "Mage"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": [
              ""
          ]
      }
  },
  "Acid Spores": {
      "levels": {
          "1": "Shoots a group of acid spores in the general direction of the target."
      },
      "note": "",
      "name": "Acid Spores",
      "element": [
          "plant",
          "toxic"
      ],
      "classes": [
          "Mage"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": [
              ""
          ]
      }
  },
  "Corrosive Spray": {
      "levels": {
          "1": "Shoots a spray of corrosive liquid."
      },
      "note": "",
      "name": "Corrosive Spray",
      "element": [
          "plant",
          "toxic"
      ],
      "classes": [
          "Mage"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": [
              ""
          ]
      }
  },
  "Throw Dust": {
      "levels": {
          "1": "Dust is thrown from your hand at the target."
      },
      "note": "",
      "name": "Throw Dust",
      "element": [
          "earth"
      ],
      "classes": [
          "Fighter"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Fighter"
          ],
          "species": [
              ""
          ]
      }
  },
  "Living Wall": {
      "levels": {
          "1": "A wall of living plant tentacles blocks the way."
      },
      "note": "",
      "name": "Living Wall",
      "element": [
          "plant"
      ],
      "classes": [
          "Mage"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": [
              ""
          ]
      }
  },
  "Worm Tremor": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Worm Tremor",
      "element": [
          "earth"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Dust Blast": {
      "levels": {
          "1": "Dust is blasted in all directions"
      },
      "note": "",
      "name": "Dust Blast",
      "element": [
          "earth"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Armour of Frost": {
      "levels": {
          "1": "Frost coats the targets body, slowing it down but increasing it's endurance."
      },
      "note": "",
      "name": "Armour of Frost",
      "element": [
          "ice"
      ],
      "classes": [
          "Mage"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": [
              ""
          ]
      }
  },
  "Healing Ritual": {
      "levels": {
          "1": "Healing on one target is increased.",
          "2": "Healing in this area is increased."
      },
      "note": "",
      "name": "Healing Ritual",
      "element": [
          "spirit"
      ],
      "classes": [
          "Mage"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": [
              ""
          ]
      }
  },
  "Hail Storm": {
      "levels": {
          "1": "Balls of ice fall from the sky."
      },
      "note": "",
      "name": "Hail Storm",
      "element": [
          "ice"
      ],
      "classes": [
          "Mage"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": [
              ""
          ]
      }
  },
  "Rain": {
      "levels": {
          "1": "It starts to gently rain."
      },
      "note": "",
      "name": "Rain",
      "element": [
          "water"
      ],
      "classes": [
          "Mage"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": [
              ""
          ]
      }
  },
  "Restoration": {
      "levels": {
          "1": "Restores some HP to the target.",
          "2": "Restores some Stamina to the target.",
          "3": "Cures a single status effect."
      },
      "note": "",
      "name": "Restoration",
      "element": [
          "spirit"
      ],
      "classes": [
          "Mage"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": [
              ""
          ]
      }
  },
  "Winter Blast": {
      "levels": {
          "1": "A mixture of ice and snow blasts the area."
      },
      "note": "",
      "name": "Winter Blast",
      "element": [
          "ice"
      ],
      "classes": [
          "Mage"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": [
              ""
          ]
      }
  },
  "Steam Lance": {
      "levels": {
          "1": "A lance of steam is blasted at the target."
      },
      "note": "",
      "name": "Steam Lance",
      "element": [
          "water",
          "fire"
      ],
      "classes": [
          "Mage"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": [
              ""
          ]
      }
  },
  "Holy Practitioner": {
      "levels": {
          "1": "Can use holy objects, cannot use unholy objects."
      },
      "note": "",
      "name": "Holy Practitioner",
      "element": [
          "light"
      ],
      "classes": [
          "Paladin"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Paladin"
          ],
          "species": [
              ""
          ]
      }
  },
  "Global Cooling": {
      "levels": {
          "1": "Everything gets much colder."
      },
      "note": "",
      "name": "Global Cooling",
      "element": [
          "ice"
      ],
      "classes": [
          "Mage"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": [
              ""
          ]
      }
  },
  "Soothing Cold": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Soothing Cold",
      "element": [
          "ice"
      ],
      "classes": [
          "Mage"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": [
              ""
          ]
      }
  },
  "Ice Fan": {
      "levels": {
          "1": "Ice is shot out in an arc before you."
      },
      "note": "",
      "name": "Ice Fan",
      "element": [
          "ice"
      ],
      "classes": [
          "Mage"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": [
              ""
          ]
      }
  },
  "Deep Freeze": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Deep Freeze",
      "element": [
          "ice"
      ],
      "classes": [
          "Mage"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": [
              ""
          ]
      }
  },
  "Cryogenic Stasis": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Cryogenic Stasis",
      "element": [
          "ice"
      ],
      "classes": [
          "Mage"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": [
              ""
          ]
      }
  },
  "Hail Strike": {
      "levels": {
          "1": "Hail is shot at a target."
      },
      "note": "",
      "name": "Hail Strike",
      "element": [
          "ice"
      ],
      "classes": [
          "Mage"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": [
              ""
          ]
      }
  },
  "Arcane Stitch": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Arcane Stitch",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Mass Cryotherapy": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Mass Cryotherapy",
      "element": [
          "ice"
      ],
      "classes": [
          "Mage"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": [
              ""
          ]
      }
  },
  "Cryotherapy": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Cryotherapy",
      "element": [
          "ice"
      ],
      "classes": [
          "Mage"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": [
              ""
          ]
      }
  },
  "Healing Tears": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Healing Tears",
      "element": [
          "water"
      ],
      "classes": [
          "Mage"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": [
              ""
          ]
      }
  },
  "Mass Cleanse Wounds": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Mass Cleanse Wounds",
      "element": [
          "water"
      ],
      "classes": [
          "Mage"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": [
              ""
          ]
      }
  },
  "Cleanse Wounds": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Cleanse Wounds",
      "element": [
          "water"
      ],
      "classes": [
          "Mage"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": [
              ""
          ]
      }
  },
  "Ice Breaker": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Ice Breaker",
      "element": [
          "ice"
      ],
      "classes": [
          "Mage"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": [
              ""
          ]
      }
  },
  "Blood Sucker": {
      "levels": {
          "1": "Suck the blood from a target to restore HP."
      },
      "note": "",
      "name": "Blood Sucker",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Blood Absorb": {
      "levels": {
          "1": "Blood is taken from a target to restore your HP."
      },
      "note": "",
      "name": "Blood Absorb",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Blood Aura": {
      "levels": {
          "1": "Blood is taken from around you to restore your HP."
      },
      "note": "",
      "name": "Blood Aura",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Decaying Touch": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Decaying Touch",
      "element": [
          "shadow"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Mosquito Swarm": {
      "levels": {
          "1": "A swam of mosquitos bite the target."
      },
      "note": "",
      "name": "Mosquito Swarm",
      "element": [
          "beast"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Raining blood": {
      "levels": {
          "1": "It starts to rain blood."
      },
      "note": "",
      "name": "Raining blood",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Shackles of Pain": {
      "levels": {
          "1": "Mark a target so that it will receive all of the damage you receive."
      },
      "note": "",
      "name": "Shackles of Pain",
      "element": [
          "metal"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Infect": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Infect",
      "element": [
          "toxic"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Silencing Stare": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Silencing Stare",
      "element": [
          "mental"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Totems of the Necromancer": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Totems of the Necromancer",
      "element": [
          "shadow"
      ],
      "classes": [
          "Necromancer"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Necromancer"
          ],
          "species": [
              ""
          ]
      }
  },
  "Last Rites": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Last Rites",
      "element": [
          "shadow"
      ],
      "classes": [
          "Necromancer"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Necromancer"
          ],
          "species": [
              ""
          ]
      }
  },
  "Grasp of the Starved": {
      "levels": {
          "1": "Undead hands rise from underground, attacking characters that stand in blood surfaces and clouds. Each target can become Crippled."
      },
      "note": "",
      "name": "Grasp of the Starved",
      "element": [
          "blood"
      ],
      "classes": [
          "Necromancer"
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Necromancer"
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Bone Cage": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Bone Cage",
      "element": [
          "blood",
          "shadow"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Black Shroud": {
      "levels": {
          "1": "Create a cloud of smoke in an area, setting Suffocating and Blind on all within."
      },
      "note": "",
      "name": "Black Shroud",
      "element": [
          "shadow"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Death Wish": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Death Wish",
      "element": [
          "shadow"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Raise Bone Widow": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Raise Bone Widow",
      "element": [
          "shadow"
      ],
      "classes": [
          "Necromancer"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Necromancer"
          ],
          "species": [
              ""
          ]
      }
  },
  "Blood Storm": {
      "levels": {
          "1": "The sky weeps bloody tears. Bolts of coagulated blood fall on targets in the area, setting Disease and Decaying. Turns all water in the area into blood."
      },
      "note": "",
      "name": "Blood Storm",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Raise Bloated Corpse": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Raise Bloated Corpse",
      "element": [
          "shadow"
      ],
      "classes": [
          "Necromancer"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Necromancer"
          ],
          "species": [
              ""
          ]
      }
  },
  "Living on the Edge": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Living on the Edge",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Summon Small Bonecrawler": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Summon Small Bonecrawler",
      "element": [
          "shadow"
      ],
      "classes": [
          "Necromancer"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Necromancer"
          ],
          "species": [
              ""
          ]
      }
  },
  "Summon Multiple Skeleton Warriors": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Summon Multiple Skeleton Warriors",
      "element": [
          "shadow"
      ],
      "classes": [
          "Necromancer"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Necromancer"
          ],
          "species": [
              ""
          ]
      }
  },
  "Summon Skeleton Warrior": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Summon Skeleton Warrior",
      "element": [
          "shadow"
      ],
      "classes": [
          "Necromancer"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Necromancer"
          ],
          "species": [
              ""
          ]
      }
  },
  "Raise Skeleton Warrior": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Raise Skeleton Warrior",
      "element": [
          "shadow"
      ],
      "classes": [
          "Necromancer"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Necromancer"
          ],
          "species": [
              ""
          ]
      }
  },
  "Summon Multiple Skeleton Archers": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Summon Multiple Skeleton Archers",
      "element": [
          "shadow"
      ],
      "classes": [
          "Necromancer"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Necromancer"
          ],
          "species": [
              ""
          ]
      }
  },
  "Deaths Touch": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Deaths Touch",
      "element": [
          "shadow"
      ],
      "classes": [
          "Necromancer"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Necromancer"
          ],
          "species": [
              ""
          ]
      }
  },
  "Stare Of The Overlord": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Stare Of The Overlord",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Grasp Heart": {
      "levels": {
          "1": "Pulls the heart out of a weakened target."
      },
      "note": "",
      "name": "Grasp Heart",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Bone Rejection": {
      "levels": {
          "1": "The targets body rejects their own bones and becomes a blob."
      },
      "note": "",
      "name": "Bone Rejection",
      "element": [
          "shadow"
      ],
      "classes": [
          "Necromancer"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Necromancer"
          ],
          "species": [
              ""
          ]
      }
  },
  "Spectral Wave": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Spectral Wave",
      "element": [
          "shadow"
      ],
      "classes": [
          "Necromancer"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Necromancer"
          ],
          "species": [
              ""
          ]
      }
  },
  "Bone Armour": {
      "levels": {
          "1": "Armour of bones covers you, raising your endurance."
      },
      "note": "",
      "name": "Bone Armour",
      "element": [
          "shadow"
      ],
      "classes": [
          "Necromancer"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Necromancer"
          ],
          "species": [
              ""
          ]
      }
  },
  "Negative Burst": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Negative Burst",
      "element": [
          "shadow"
      ],
      "classes": [
          "Necromancer"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Necromancer"
          ],
          "species": [
              ""
          ]
      }
  },
  "Raise Elder Lich": {
      "levels": {
          "1": "An Elder Lich is summoned."
      },
      "note": "",
      "name": "Raise Elder Lich",
      "element": [
          "shadow"
      ],
      "classes": [
          "Necromancer"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Necromancer"
          ],
          "species": [
              ""
          ]
      }
  },
  "Deaths Arrival": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Deaths Arrival",
      "element": [
          "shadow"
      ],
      "classes": [
          "Necromancer"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Necromancer"
          ],
          "species": [
              ""
          ]
      }
  },
  "Summon Skeleton Archer": {
      "levels": {
          "1": "A weak skeleton archer is summoned"
      },
      "note": "",
      "name": "Summon Skeleton Archer",
      "element": [
          "shadow"
      ],
      "classes": [
          "Necromancer"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Necromancer"
          ],
          "species": [
              ""
          ]
      }
  },
  "Raise Skeleton Archer": {
      "levels": {
          "1": "Using a corpse, raise up a weak skeleton archer."
      },
      "note": "",
      "name": "Raise Skeleton Archer",
      "element": [
          "shadow"
      ],
      "classes": [
          "Necromancer"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Necromancer"
          ],
          "species": [
              ""
          ]
      }
  },
  "Raise Death Knight": {
      "levels": {
          "1": "Using a corpse, raise up a death knight."
      },
      "note": "",
      "name": "Raise Death Knight",
      "element": [
          "shadow"
      ],
      "classes": [
          "Necromancer"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Necromancer"
          ],
          "species": [
              ""
          ]
      }
  },
  "Aura of Despair": {
      "levels": {
          "1": "Has a chance of causing Fear.",
          "2": "Has a chance of causing Panic.",
          "3": "Has a chance of causing Confusion.",
          "4": "Has a chance of causing Insanity.",
          "5": "Has a chance of causing Instant Death."
      },
      "note": "",
      "name": "Aura of Despair",
      "element": [
          "shadow"
      ],
      "classes": [
          "Necromancer"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Necromancer"
          ],
          "species": [
              ""
          ]
      }
  },
  "Rabbit Ears": {
      "levels": {
          "1": "Rabbit ears grow from you head, along with the perks of that."
      },
      "note": "",
      "name": "Rabbit Ears",
      "element": [
          "beast"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Magic Arrow": {
      "levels": {
          "1": "Shoot an arrow of mana."
      },
      "note": "",
      "name": "Magic Arrow",
      "element": [
          "mana"
      ],
      "classes": [
          "Mage"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": [
              ""
          ]
      }
  },
  "Summon Undead": {
      "levels": {
          "1": "Summon a single undead."
      },
      "note": "",
      "name": "Summon Undead",
      "element": [
          "shadow"
      ],
      "classes": [
          "Necromancer"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Necromancer"
          ],
          "species": [
              ""
          ]
      }
  },
  "Acid Arrow": {
      "levels": {
          "1": "Shoot an arrow of acid."
      },
      "note": "",
      "name": "Acid Arrow",
      "element": [
          "plant",
          "toxic"
      ],
      "classes": [
          "Mage"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": [
              ""
          ]
      }
  },
  "Message": {
      "levels": {
          "1": "Send a message instantly to someone else."
      },
      "note": "",
      "name": "Message",
      "element": [
          "mana"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Fireball": {
      "levels": {
          "1": "Shoots a ball of fire directly in front of you.",
          "2": "Shoots a ball of fire directly in front of you."
      },
      "note": "",
      "name": "Fireball",
      "element": [
          "fire"
      ],
      "classes": [
          "Mage"
      ],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": []
      }
  },
  "Fire Damage": {
      "levels": {
          "1": "Increased fire damage by 1%.",
          "2": "Increased fire damage by 2%."
      },
      "note": "Increased fire damage by 1%.",
      "name": "Fire Damage",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Fly": {
      "levels": {
          "1": "The user can now fly."
      },
      "note": "",
      "name": "Fly",
      "element": [
          "wind"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Iceball": {
      "levels": {
          "1": "Shoots a ball of ice.",
          "2": "Shoots a larger ball of ice."
      },
      "note": "",
      "name": "Iceball",
      "element": [
          "ice"
      ],
      "classes": [
          "Mage"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": [
              ""
          ]
      }
  },
  "Lightning": {
      "levels": {
          "1": "Lightning appears."
      },
      "note": "",
      "name": "Lightning",
      "element": [
          "lightning"
      ],
      "classes": [
          "Mage"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": [
              ""
          ]
      }
  },
  "Lopsided Duel": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Lopsided Duel",
      "element": [
          "none"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Slow": {
      "levels": {
          "1": "Reduces a targets speed."
      },
      "note": "",
      "name": "Slow",
      "element": [
          "time"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Dragon Lightning": {
      "levels": {
          "1": "Shoots lighting in the form of chinese dragons."
      },
      "note": "",
      "name": "Dragon Lightning",
      "element": [
          "lightning"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Chain Dragon Lightning": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Chain Dragon Lightning",
      "element": [
          "lightning"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Create Item": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Create Item",
      "element": [
          "None"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Focus Magic": {
      "levels": {
          "1": "Increases magic stat for a moment"
      },
      "note": "",
      "name": "Focus Magic",
      "element": [
          "mana"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Teleportation": {
      "levels": {
          "1": "Teleports you to a predetermined location."
      },
      "note": "",
      "name": "Teleportation",
      "element": [
          "portal"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Hell Flame": {
      "levels": {
          "1": "Shoots out a spark of hell flame."
      },
      "note": "",
      "name": "Hell Flame",
      "element": [
          "fire"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Napalm": {
      "levels": {
          "1": "Drop Napalm on an area."
      },
      "note": "",
      "name": "Napalm",
      "element": [
          "fire"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Undeath Army": {
      "levels": {
          "1": "Summons an army of the undead."
      },
      "note": "",
      "name": "Undeath Army",
      "element": [
          "shadow"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Astral Smite": {
      "levels": {
          "1": "Smite a target wit the power of the stars."
      },
      "note": "",
      "name": "Astral Smite",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Death": {
      "levels": {
          "1": "Target is hit with death."
      },
      "note": "",
      "name": "Death",
      "element": [
          "shadow"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Dimensional Lock": {
      "levels": {
          "1": "Target cannot teleport."
      },
      "note": "",
      "name": "Dimensional Lock",
      "element": [
          "time"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Energy Drain": {
      "levels": {
          "1": "Drains the mana and stamina of a target."
      },
      "note": "",
      "name": "Energy Drain",
      "element": [
          "mana"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Explosion": {
      "levels": {
          "1": "Causes an explosion in an area."
      },
      "note": "",
      "name": "Explosion",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Bless of Titania": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Bless of Titania",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Call Thunder": {
      "levels": {
          "1": "Thunder clouds form in the distance coming to you."
      },
      "note": "",
      "name": "Call Thunder",
      "element": [
          "lightning"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Rejection": {
      "levels": {
          "1": "Can be used to reject un-rejectable quests."
      },
      "note": "",
      "name": "Rejection",
      "element": [
          "mana"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Lead of Yatagarasu": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Lead of Yatagarasu",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Nuclear Blast": {
      "levels": {
          "1": "Causes a nuclear blast in an area."
      },
      "note": "leaves behind radiation.",
      "name": "Nuclear Blast",
      "element": [
          "fire"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Perfect Unknowable": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Perfect Unknowable",
      "element": [
          "shadow"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Temporal Stasis": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Temporal Stasis",
      "element": [
          "time"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "True Death": {
      "levels": {
          "1": "Causes death to a target, even one immune to death."
      },
      "note": "",
      "name": "True Death",
      "element": [
          "shadow"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Vermilion Nova": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Vermilion Nova",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Armageddon": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Armageddon",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Body of Effulgent Beryl": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Body of Effulgent Beryl",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Control Amnesia": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Control Amnesia",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Create Fortress": {
      "levels": {
          "1": "Create a fortress using the surrounding materials."
      },
      "note": "",
      "name": "Create Fortress",
      "element": [
          "Earth"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Meteor Fall": {
      "levels": {
          "1": "A meteor falls....Somewhere over there..."
      },
      "note": "",
      "name": "Meteor Fall",
      "element": [
          "Earth"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Reality Slash": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Reality Slash",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Time Stop": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Time Stop",
      "element": [
          "Time"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Ultimate Disturb": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Ultimate Disturb",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Uriel": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Uriel",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Absorption": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Absorption",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Anti-Life Cocoon": {
      "levels": {
          "1": "Wraps a target in a s"
      },
      "note": "",
      "name": "Anti-Life Cocoon",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Anti-Information Magic Wall": {
      "levels": {
          "1": "Your information is blocked from others reading it."
      },
      "note": "",
      "name": "Anti-Information Magic Wall",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Black Hole": {
      "levels": {
          "1": "A black hole appears sucking everything inside."
      },
      "note": "",
      "name": "Black Hole",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Breath Ward": {
      "levels": {
          "1": "Reduces the damage from breath attacks."
      },
      "note": "",
      "name": "Breath Ward",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Burst": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Burst",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Charm Person": {
      "levels": {
          "1": "Charms a single person."
      },
      "note": "",
      "name": "Charm Person",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Invisibility": {
      "levels": {
          "1": "Makes you invisible!"
      },
      "note": "",
      "name": "Invisibility",
      "element": [
          "Shadow"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Complete Vision": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Complete Vision",
      "element": [
          "Light"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Conflict Karma": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Conflict Karma",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Cry of the Banshee": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Cry of the Banshee",
      "element": [
          "Sound"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Banshee"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Banshee"
          ]
      }
  },
  "Cure Poison": {
      "levels": {
          "1": "Cures a single instance of poison in the target."
      },
      "note": "",
      "name": "Cure Poison",
      "element": [
          "plant"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Dark Wing": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Dark Wing",
      "element": [
          "shadow"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Delay Teleportation": {
      "levels": {
          "1": "A spell that can briefly hinder teleportation effects that has their destination near the caster, buying them several seconds of time, which the caster will typically use to flee or prepare an attack. In addition, the spell also informs the caster of how many beings will be teleporting into their vicinity."
      },
      "note": "",
      "name": "Delay Teleportation",
      "element": [
          "time"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Detect Magic": {
      "levels": {
          "1": "The spell is used to detect magical traps or magic items that are hidden in the midst of the user's presence."
      },
      "note": "",
      "name": "Detect Magic",
      "element": [
          "mana"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Discern Enemy": {
      "levels": {
          "1": "This spell allows the user to identify the enemy's estimated level."
      },
      "note": "",
      "name": "Discern Enemy",
      "element": [
          "mana"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Distant Vision": {
      "levels": {
          "1": "A spell that displays what it sees on a flat, magical screen. The screen can also be expanded or shrunken at will."
      },
      "note": "",
      "name": "Distant Vision",
      "element": [
          "light"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Dominate": {
      "levels": {
          "1": "When used on a living being, a dominee cannot lie to their dominator. It is a stronger spell than [Charm Person] as it can manipulate a person according to the magic caster\u2019s will."
      },
      "note": "",
      "name": "Dominate",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Draconic Power": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Draconic Power",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Dragonbane": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Dragonbane",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Drifting Master Mine": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Drifting Master Mine",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Explosive Land Mine": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Explosive Land Mine",
      "element": [
          "Earth"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "False Data: Life": {
      "levels": {
          "1": "It gives the user the ability to fake his/her HP."
      },
      "note": "",
      "name": "False Data: Life",
      "element": [
          "mana"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "False Data: Mana": {
      "levels": {
          "1": "Gives the user the ability to fake his/her MP."
      },
      "note": "",
      "name": "False Data: Mana",
      "element": [
          "mana"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Field of Force": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Field of Force",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Floating Eye": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Floating Eye",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Freedom": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Freedom",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Gate": {
      "levels": {
          "1": "Summons a portal, allowing travel of a large number of people over great distances. It has no limits on distance and a 0% chance of teleport mishaps. It is considered to be the highest tier of teleportation magic."
      },
      "note": "",
      "name": "Gate",
      "element": [
          "portal"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Gravity Maelstrom": {
      "levels": {
          "1": "A spiraling black ball of gravity."
      },
      "note": "",
      "name": "Gravity Maelstrom",
      "element": [
          "gravity"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Break Item": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Break Item",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Full Potential": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Full Potential",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Hardening": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Hardening",
      "element": [
          "metal"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Lethal": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Lethal",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Luck": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Luck",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Magic Accumulation": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Magic Accumulation",
      "element": [
          "mana"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Magic Seal": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Magic Seal",
      "element": [
          "mana"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Magic Shield": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Magic Shield",
      "element": [
          "mana"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Magic Vision": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Magic Vision",
      "element": [
          "mana"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Resistance": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Resistance",
      "element": [
          "mana"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Heavenly Aura": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Heavenly Aura",
      "element": [
          "light"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Hold of Ribs": {
      "levels": {
          "1": "A spell that restricts a target's movement with bones and can deeply piece it through their flesh."
      },
      "note": "",
      "name": "Hold of Ribs",
      "element": [
          "shadow"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Indomitability": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Indomitability",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Infinity Wall": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Infinity Wall",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Life Essence": {
      "levels": {
          "1": "Allows the caster to view the health values of an enemy."
      },
      "note": "",
      "name": "Life Essence",
      "element": [
          "mana"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Magic Boost": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Magic Boost",
      "element": [
          "mana"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Magic Casters Blessing": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Magic Casters Blessing",
      "element": [
          "mana"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Magic Ward: Holy": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Magic Ward: Holy",
      "element": [
          "light"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Mana Essence": {
      "levels": {
          "1": "Identifies MP of the target."
      },
      "note": "",
      "name": "Mana Essence",
      "element": [
          "mana"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Mantle of Chaos": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Mantle of Chaos",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Dominate Person": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Dominate Person",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Mass fly": {
      "levels": {
          "1": "Gives a group of people the ability to fly."
      },
      "note": "",
      "name": "Mass fly",
      "element": [
          "wind"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Mass Hold Species": {
      "levels": {
          "1": "Constricts a large number of creatures, rendering them unable to move."
      },
      "note": "",
      "name": "Mass Hold Species",
      "element": [
          "time",
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Nuclear Mine": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Nuclear Mine",
      "element": [
          "fire"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Obsidian Sword": {
      "levels": {
          "1": "Creates a large obsidian sword that will lock on to a target and hone in like a missile. It is incredibly difficult to destroy a sword made of magic with a physical attack. By using \"Triple Maximize Magic,\" The Obsidian Sword constructs can only be utilized as an offensive tool and cannot be used to defend oneself. This was because the obsidian swords suffered from a massive loss of durability if used to receive the brunt of an opponent\u2019s attack. If used defensively, the swords\u2019 durability would rapidly diminish until they shatter."
      },
      "note": "",
      "name": "Obsidian Sword",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Paralysis": {
      "levels": {
          "1": "Causes paralysis in the target, limiting or preventing them from using physical movement, through slight physical functions are still possible, such as turning their head or speaking."
      },
      "note": "",
      "name": "Paralysis",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Paranormal Intuition": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Paranormal Intuition",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Penetrate Up": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Penetrate Up",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Perfect Warrior": {
      "levels": {
          "1": "The spell allows user to convert his magic caster levels into an equivalent number of warrior levels. By using that spell, he can temporarily become a half-baked level 100 warrior. It also carries the benefit of being able to use certain pieces of arms and armour that will normally require specific job classes to access without penalty. This includes freely utilizing any weapons and its abilities, which is seen during his fight with Shalltear. However, there are many drawbacks to that spell. The first weakness is that he cannot cast other spells while the magic is in effect. In addition, he will not gain any special warrior skills from the spell, and his recalculated ability scores will be lower than an actual warrior. Secondly, sustaining the transformation spell and other magic will both lower his mana and mana recovery rates to zero. This form is enough when matching blades with second-rate combatants like priests and the like, but he will stand no chance of winning against an opponent who is a dedicated warrior."
      },
      "note": "",
      "name": "Perfect Warrior",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Ray of Negative Energy": {
      "levels": {
          "1": "It is an offensive-type spell that brings forth a ray of negative energy to damage the living. However, against non-living beings, it will heal them instead."
      },
      "note": "",
      "name": "Ray of Negative Energy",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Remote Viewing": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Remote Viewing",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Repel Undeath": {
      "levels": {
          "1": "A spell that creates a barrier to ward off the low-level undead."
      },
      "note": "",
      "name": "Repel Undeath",
      "element": [
          "light"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Resistance from Natural Weapons": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Resistance from Natural Weapons",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "See Through": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "See Through",
      "element": [
          "light"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Sense Enemy": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Sense Enemy",
      "element": [
          "mana"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Sensor Boost": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Sensor Boost",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Sharks Cyclone": {
      "levels": {
          "1": "A spell that invokes a tornado, with sharks inside."
      },
      "note": "",
      "name": "Sharks Cyclone",
      "element": [
          "water",
          "beast"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Shockwave": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Shockwave",
      "element": [
          "sound"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Thousand Bone Lance": {
      "levels": {
          "1": "A spell that throws an uncountable amount of bone spears at the target."
      },
      "note": "",
      "name": "Thousand Bone Lance",
      "element": [
          "shadow"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "True Dark": {
      "levels": {
          "1": "Creates a dark space where lights do not shine."
      },
      "note": "",
      "name": "True Dark",
      "element": [
          "shadow"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Undeath Slave Sight": {
      "levels": {
          "1": ": A spell used on specific kinds of undead summons. Allowing you to see through that undead's eye sockets."
      },
      "note": "",
      "name": "Undeath Slave Sight",
      "element": [
          "shadow"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Wall of Protection from Arrows": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Wall of Protection from Arrows",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Wall of Skeletons": {
      "levels": {
          "1": "Creates a wall of skeletons that can move and fight to a certain degree."
      },
      "note": "",
      "name": "Wall of Skeletons",
      "element": [
          "shadow"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Acid Immunity": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Acid Immunity",
      "element": [
          "toxic"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Arcane Vision": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Arcane Vision",
      "element": [
          "mana"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Black Halo": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Black Halo",
      "element": [
          "shadow"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Dark Soul": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Dark Soul",
      "element": [
          "shadow"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Dark Wisdom": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Dark Wisdom",
      "element": [
          "shadow"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Despair Aura": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Despair Aura",
      "element": [
          "shadow"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Electric Immunity": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Electric Immunity",
      "element": [
          "lightning"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Ice Immunity": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Ice Immunity",
      "element": [
          "ice"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Touch of Undeath": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Touch of Undeath",
      "element": [
          "shadow"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Negative Protection": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Negative Protection",
      "element": [
          "shadow"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Slashing Damage Resistance": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Slashing Damage Resistance",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Piercing Damage Resistance": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Piercing Damage Resistance",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Status Damage": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Status Damage",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Turn Resistance": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Turn Resistance",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Undead Blessing": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Undead Blessing",
      "element": [
          "shadow"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Undead Lieutenant": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Undead Lieutenant",
      "element": [
          "shadow"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Unholy Protection": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Unholy Protection",
      "element": [
          "shadow"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Biological Penalties Resistance": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Biological Penalties Resistance",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Bludgeoning Vulnerability": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Bludgeoning Vulnerability",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Critical Hit Immunity": {
      "levels": {
          "1": "Reduces the chances of someone landing a critical hit on you."
      },
      "note": "",
      "name": "Critical Hit Immunity",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Death Immunity": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Death Immunity",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Disease Immunity": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Disease Immunity",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Weak To Fire": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Weak To Fire",
      "element": [
          "fire"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Eating, Drinking, and Breathing are Unnecessary": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Eating, Drinking, and Breathing are Unnecessary",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Energy Drain Immunity": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Energy Drain Immunity",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Good, Light and Holy Vulnerability": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Good, Light and Holy Vulnerability",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Good and Holy Consecrated Areas Vulnerability": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Good and Holy Consecrated Areas Vulnerability",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Mind-affecting Immunity": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Mind-affecting Immunity",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Necromancy Resistance": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Necromancy Resistance",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Paralysis Immunity": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Paralysis Immunity",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Physical Penalty Resistance": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Physical Penalty Resistance",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Poisoning Immunity": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Poisoning Immunity",
      "element": [
          "toxic"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Recover by Negative Energy": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Recover by Negative Energy",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Sleep Immunity": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Sleep Immunity",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Rite of Darkness": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Rite of Darkness",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Undead Aura": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Undead Aura",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Undead Domination": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Undead Domination",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Undead Strengthening": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Undead Strengthening",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Blood Magic": {
      "levels": {
          "1": "For as long as this mode is active, the caster sacrifices health to power spells instead of expending mana, but effects that heal the blood mage are much less effective than normal."
      },
      "note": "",
      "name": "Blood Magic",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Blood Sacrifice": {
      "levels": {
          "1": "The blood mage sucks the life-force from an ally, healing the caster but potentially killing the ally. This healing is not affected by the healing penalty of Blood Magic."
      },
      "note": "",
      "name": "Blood Sacrifice",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Blood Wound": {
      "levels": {
          "1": "The blood of all hostile targets in the area boils within their veins, inflicting severe damage. Creatures without blood are immune."
      },
      "note": "",
      "name": "Blood Wound",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Blood Control": {
      "levels": {
          "1": "The blood mage forcibly controls the target\u2019s blood, making the target an ally of the caster. If the target resists, it still takes great damage from the manipulation of its blood. Creatures without blood are immune."
      },
      "note": "",
      "name": "Blood Control",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Blood Dominion": {
      "levels": {
          "1": "."
      },
      "note": "",
      "name": "Blood Dominion",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Blood Domination": {
      "levels": {
          "1": "."
      },
      "note": "",
      "name": "Blood Domination",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Vampire Eyes": {
      "levels": {
          "1": "A skill possessed by all vampires, their blood lust (Health) is shown by the color of their eyes."
      },
      "note": "",
      "name": "Vampire Eyes",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {
          "1": {}
      },
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Blood Hardening": {
      "levels": {
          "1": "A form of Blood control. Blood thickens and becomes more impervious to damage, and becomes like Armour. Reduce the amount of damage taken in an attack and able to be moved around the body freely to varying degrees base on mastery of control."
      },
      "note": "",
      "name": "Blood Hardening",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Blood Swipe": {
      "levels": {
          "1": "A skill that will fire out a red line of energy from the user's hands in the shape of a claw. To use the skill the user must use their own blood causing -1 HP per Blood swipe."
      },
      "note": "",
      "name": "Blood Swipe",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Blood Expand": {
      "levels": {
          "1": "A skill that vampires don't normally use. After firing off the blood bullet, use an immense amount of control to force the shot to remain inside the victim. It had entered a part of their body but never left it.  The blood bullet was a condensed form of aura, and through blood control, one was able to make the blood bullet inside the victims body expand and go wild. Destroying a part of a victim from the inside out."
      },
      "note": "",
      "name": "Blood Expand",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Blood Barrage": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Blood Barrage",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Blood Bullet": {
      "levels": {
          "1": "One fifth of the user's health will be used to create a powerful shot of blood from a finger. The finger will no longer be able to be used until the blood has been replenished.",
          "3": "One fifth of the user's current health will be used to create a powerful shot of blood from a finger. Blood bullet is no longer available on the used finger for twenty-four hours regardless if the fingers were healed."
      },
      "note": "",
      "name": "Blood Bullet",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Blood Bank": {
      "levels": {
          "1": "will allow user to store up to a 300 milliliters of blood in user reserve. The blood bank will automatically be used to heal the user if HP drops below 5 unless suppressed. Every 10 milliliters of blood will be used to restore 5 HP of the user. User may also use that blood bank to consume blood at any time for his own personal pleasure. Consuming 100 milliliters of blood gives the quickest and most efficient results when healing completely."
      },
      "note": "",
      "name": "Blood Bank",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Blood Wall": {
      "levels": {
          "1": "A barrier is raised in front of the user, using the user's own blood. The wall's strength is dependent on how much blood is being used."
      },
      "note": "",
      "name": "Blood Wall",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Blood Spray": {
      "levels": {
          "1": "The user's palm must be open to perform this skill. From the user's palm, a spray of blood pellets will be released spreading out covering a wide range, The closer the attack is to its target the more damage it will do. Cost -5 HP. Blood spray can be used on multiple targets, but lacks penetration ability, therefore, expressed in the combination skill: Blood Hammer."
      },
      "note": "",
      "name": "Blood Spray",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Hammer Strike": {
      "levels": {
          "1": "Power fist skill of short burst attack. It was an attack that focused on the inside, an internal attack, the perfect counter to those with abilities who hardened or transformed their bodies."
      },
      "note": "",
      "name": "Hammer Strike",
      "element": [
          "none"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Blood Hammer": {
      "levels": {
          "1": "Blood Hammer is a combination skill of Blood Spray and Hammer Strike."
      },
      "note": "",
      "name": "Blood Hammer",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Blood Hammer Drill": {
      "levels": {
          "1": "Blood Hammer Drill is a combination skill of Blood Spray, Hammer Strike, and blood control. While preforming the hammer strike and using blood control to rotate a blood spray like a drill to penetrate an opponent."
      },
      "note": "",
      "name": "Blood Hammer Drill",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Blood Crescent Kick": {
      "levels": {
          "1": "When using the skill while performing different types of kicks. A red line of blood aura in the shape of a crescent will be made. The attack carries a distance of ten meters but the aura will get smaller and weaker the further it travels. Costs 2 HP for every kick."
      },
      "note": "",
      "name": "Blood Crescent Kick",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Daze": {
      "levels": {
          "1": "This skill has no cost and can be used on the opponent to stun them between 0.2 seconds and 0.5 seconds at a time. Must have direct eye contact with the opponent. The skill has a chance of failing, depending on the strength of the enemy and on the user's charisma points. The more the skill is used on an opponent the higher chance they have off resisting."
      },
      "note": "",
      "name": "Daze",
      "element": [
          "none"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Phantom Punch": {
      "levels": {
          "1": "While in a fight, you will aim your punch in a certain direction to start, before the first movement is made, your charm stat will take slight control of the user's mind, to them an image will appear and make it look like the punch has continued heading in the initial direction. But in actual fact, this will be a phantom punch, while the user is dodging or trying to block it, the real blow will come from somewhere else."
      },
      "note": "",
      "name": "Phantom Punch",
      "element": [
          "none"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Phantom Kick": {
      "levels": {
          "1": "Kick version of Phantom Punch."
      },
      "note": "",
      "name": "Phantom Kick",
      "element": [
          "none"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Flash Step": {
      "levels": {
          "1": "Movement skill of short displacement."
      },
      "note": "",
      "name": "Flash Step",
      "element": [
          "none"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Basic Vampire Martial Arts": {
      "levels": {
          "1": "Basic martial arts for vampire physiques."
      },
      "note": "",
      "name": "Basic Vampire Martial Arts",
      "element": [
          "none"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Vampiric Influence": {
      "levels": {
          "1": "Depending on the user's charisma points and the mental strength of the opponent. The user is able to influence the person or creature to do their bidding. This includes things such as, memory loss, information extraction and so on. This skill require direct eye contact with the target."
      },
      "note": "",
      "name": "Vampiric Influence",
      "element": [
          "none"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Blood Ritual": {
      "levels": {
          "1": "It is ritual skill which would allow a Vampire to turn another person into a Vampire, this is called a Blooded. Cap 1.",
          "2": "Cap 2.",
          "3": "Cap 3."
      },
      "note": "",
      "name": "Blood Ritual",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Vampiric Powers": {
      "levels": {
          "1": {
              "description": "Strengths: Ice-resistance 10%, faster regeneration 5%, Create lesser species +1.",
              "effects": [
                  "Ice Resistance +10%",
                  "Faster Regeneration +5%",
                  "Create Lesser Species +1",
                  {
                      "ref": "Resistance from Natural Weapons",
                      "level": 1
                  },
                  "Hunger level 10%",
                  "Fire Weakness +10%",
                  "Light Weakness +10%",
                  "Sunlight Exposure: -50% Stamina Regen, -25% Speed"
              ]
          },
          "2": {
              "effects": [
                  "Hunger level 20%"
              ]
          },
          "3": {
              "effects": [
                  "Hunger level 30%"
              ]
          }
      },
      "note": "",
      "name": "Vampiric Powers",
      "element": [
          "none"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {
          "1": {
              "strength": 1,
              "Physical Damage Reduction": 3,
              "magic": 1
          },
          "2": {
              "strength": 1,
              "magic": 1,
              "sense": 1
          },
          "3": {
              "strength": 1,
              "magic": 1,
              "sense": 1
          },
          "4": {
              "strength": 1,
              "magic": 1,
              "sense": 1
          },
          "5": {
              "strength": 1,
              "magic": 1,
              "sense": 1
          },
          "6": {
              "strength": 1,
              "magic": 1,
              "sense": 1
          },
          "7": {
              "strength": 1,
              "magic": 1,
              "sense": 1
          },
          "8": {
              "strength": 1,
              "magic": 1,
              "sense": 1
          },
          "9": {
              "strength": 1,
              "magic": 1,
              "sense": 1
          },
          "10": {
              "strength": 1,
              "magic": 1,
              "sense": 1
          }
      },
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Lesser Vampiric Powers": {
      "levels": {
          "1": "Strengths: Ice-resistance 10%, Resistance from Natural Weapons 1%, faster regeneration 5%. Weaknesses: Hunger level 10%, Fire Weakness +10%, Light Weakness +10%, Silver Weakness +10%, Exposure to sunlight - Causes Stamina to regenerate 50% slower & Movement speed -25%.",
          "2": "Hunger level 20%.",
          "3": "Hunger level 30%.",
          "4": "Hunger level 40%.",
          "5": "Hunger level 50%.",
          "6": "Hunger level 60%.",
          "7": "Hunger level 70%.",
          "8": "Hunger level 80%.",
          "9": "Hunger level 90%.",
          "10": "Hunger level 100%."
      },
      "note": "",
      "name": "Lesser Vampiric Powers",
      "element": [
          "none"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {
          "1": {
              "strength": 1,
              "magic": 1
          },
          "2": {
              "strength": 1,
              "magic": 1,
              "sense": 1
          },
          "3": {
              "strength": 1,
              "magic": 1,
              "sense": 1
          },
          "4": {
              "strength": 1,
              "magic": 1,
              "sense": 1
          },
          "5": {
              "strength": 1,
              "magic": 1,
              "sense": 1
          },
          "6": {
              "strength": 1,
              "magic": 1,
              "sense": 1
          },
          "7": {
              "strength": 1,
              "magic": 1,
              "sense": 1
          },
          "8": {
              "strength": 1,
              "magic": 1,
              "sense": 1
          },
          "9": {
              "strength": 1,
              "magic": 1,
              "sense": 1
          },
          "10": {
              "strength": 1,
              "magic": 1,
              "sense": 1
          }
      },
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Ghoul's Strength": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Ghoul's Strength",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Wight's Strength": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Wight's Strength",
      "element": [
          "none"
      ],
      "classes": [],
      "species": [],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [],
          "species": []
      }
  },
  "Vampiric": {
      "levels": {
          "1": "No points can be spent on this passive. As it levels up the user becomes closer to becoming a vampire noble."
      },
      "note": "",
      "name": "Vampiric",
      "element": [
          "none"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Blood Flow Acceleration": {
      "levels": {
          "1": "Accelerates the blood flow around the casters body. Increases repair of damaged muscle fibres and cells, helps to decrease swelling, reduce pain and increase healing."
      },
      "note": "",
      "name": "Blood Flow Acceleration",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Blood Retribution": {
      "levels": {
          "1": "."
      },
      "note": "",
      "name": "Blood Retribution",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Poisonous Blood": {
      "levels": {
          "1": "Your blood is now poison to others."
      },
      "note": "",
      "name": "Poisonous Blood",
      "element": [
          "blood",
          "toxic"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Blood Curse": {
      "levels": {
          "1": "."
      },
      "note": "",
      "name": "Blood Curse",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Blood Armour": {
      "levels": {
          "1": "Cover your body in blood to reduce damage."
      },
      "note": "",
      "name": "Blood Armour",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Blood Potion": {
      "levels": {
          "1": "Your blood can be used as a potion on others."
      },
      "note": "",
      "name": "Blood Potion",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Blood Combustion": {
      "levels": {
          "1": "Rapidly expands your own blood."
      },
      "note": "",
      "name": "Blood Combustion",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Blood Manipulation": {
      "levels": {
          "1": "An advanced blood control."
      },
      "note": "",
      "name": "Blood Manipulation",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Blood Projectiles": {
      "levels": {
          "1": "Shoot blood like javelins, uses the blood around you."
      },
      "note": "",
      "name": "Blood Projectiles",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Blood Pact": {
      "levels": {
          "1": "When agreed to both parties must stick to the pact or face their own blood rejecting them."
      },
      "note": "",
      "name": "Blood Pact",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Blood Servant": {
      "levels": {
          "1": "Make a servant creature out of blood."
      },
      "note": "",
      "name": "Blood Servant",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Blood Storage": {
      "levels": {
          "1": "."
      },
      "note": "",
      "name": "Blood Storage",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Blood Frenzy": {
      "levels": {
          "1": "You will fall into a frenzied state until you consume enough blood to be satisfied, all stats increase during this time."
      },
      "note": "",
      "name": "Blood Frenzy",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Blood Soul": {
      "levels": {
          "1": "Your soul is stained with the blood of your victims."
      },
      "note": "",
      "name": "Blood Soul",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Blood Weapon Creation": {
      "levels": {
          "1": "Creates a weapon from the blood."
      },
      "note": "",
      "name": "Blood Weapon Creation",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Blood Mist": {
      "levels": {
          "1": "The caster bursts into a mist of their own blood reducing damage taken by spreading them selves over a larger area."
      },
      "note": "",
      "name": "Blood Mist",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Death Syphon": {
      "levels": {
          "1": "While this mode is active, the caster draws in nearby entropic energy, draining residual power from any dead enemy nearby to restore the caster's mana."
      },
      "note": "",
      "name": "Death Syphon",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Otitis Externa": {
      "levels": {
          "1": "-2 sense when using ears alone."
      },
      "note": "",
      "name": "Otitis Externa",
      "element": [
          "none"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Human"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": true,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Human"
          ]
      }
  },
  "Fire Cyclone": {
      "levels": {
          "1": "A cyclone of fire starts winding up and spins towards your target."
      },
      "note": "",
      "name": "Fire Cyclone",
      "element": [
          "fire"
      ],
      "classes": [
          "Mage"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "https://i.pinimg.com/originals/10/9c/fd/109cfdb1f2c6b96cd5d99486753cecd0.gif",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": [
              ""
          ]
      }
  },
  "Fire Wrap": {
      "levels": {
          "1": "Wraps you in a cyclone of fire, Causing Fire damage to anyone who gets too close to you."
      },
      "note": "",
      "name": "Fire Wrap",
      "element": [
          "fire"
      ],
      "classes": [
          "Mage"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": [
              ""
          ]
      }
  },
  "Fire Mine": {
      "levels": {
          "1": "Casting it causes blobs of fire to shoot from the hands and stick to surfaces. When a target steps on or passes too closely to a Fire Mine, it explodes, causing fire damage."
      },
      "note": "",
      "name": "Fire Mine",
      "element": [
          "fire"
      ],
      "classes": [
          "Mage"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "https://static.wikia.nocookie.net/elderscrolls/images/8/87/SKRMFire_Rune.png",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": [
              ""
          ]
      }
  },
  "Fallen Paladin": {
      "levels": {
          "1": "A paladin without the support of a God is stripped of faith and unable to use any Paladin skills."
      },
      "note": "",
      "name": "Fallen Paladin",
      "element": [
          "none"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": true,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Berserkergang": {
      "levels": {
          "1": "Increases natural HP recovery rate."
      },
      "note": "",
      "name": "Berserkergang",
      "element": [
          "blood"
      ],
      "classes": [
          "Beserker"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Beserker"
          ],
          "species": [
              ""
          ]
      }
  },
  "Vampiric frenzy": {
      "levels": {
          "1": "The lower total HP you have, the higher your strength becomes."
      },
      "note": "",
      "name": "Vampiric frenzy",
      "element": [
          "blood"
      ],
      "classes": [
          ""
      ],
      "species": [
          "Vampire"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Vampire"
          ]
      }
  },
  "Rebirth Flame": {
      "levels": {
          "1": "After death, your body will turn to ashes, and you shall be reborn from the flames with 10% of your total HP."
      },
      "note": "",
      "name": "Rebirth Flame",
      "element": [
          "fire"
      ],
      "classes": [
          "Phoenix-Warrior"
      ],
      "species": [
          "Phoenix"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "https://images.squarespace-cdn.com/content/v1/57d34a6d725e254062172fe9/1579643445519-XXWBWFTZIZ23TNWBECJI/thumbnail_phoenix+rising.jpg",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Phoenix-Warrior"
          ],
          "species": [
              "Phoenix"
          ]
      }
  },
  "Birthed In Flame": {
      "levels": {
          "1": "A body birthed in flames holders stronger affinity with fire, +5% increase to all fire related abilities."
      },
      "note": "",
      "name": "Birthed In Flame",
      "element": [
          "fire"
      ],
      "classes": [
          "Phoenix-Warrior"
      ],
      "species": [
          "Phoenix"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "https://images.squarespace-cdn.com/content/v1/57d34a6d725e254062172fe9/1579643445519-XXWBWFTZIZ23TNWBECJI/thumbnail_phoenix+rising.jpg",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Phoenix-Warrior"
          ],
          "species": [
              "Phoenix"
          ]
      }
  },
  "Corpse Explosion": {
      "levels": {
          "1": "Explode the target corpse, dealing damage in the area."
      },
      "note": "",
      "name": "Corpse Explosion",
      "element": [
          "shadow"
      ],
      "classes": [
          "Necromancer"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Necromancer"
          ],
          "species": [
              ""
          ]
      }
  },
  "Life Tap": {
      "levels": {
          "1": "Siphon`s the life force of the target."
      },
      "note": "",
      "name": "Life Tap",
      "element": [
          "shadow"
      ],
      "classes": [
          "Necromancer"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Necromancer"
          ],
          "species": [
              ""
          ]
      }
  },
  "Necromancer Occult": {
      "levels": {
          "1": "Control undead increases."
      },
      "note": "",
      "name": "Necromancer Occult",
      "element": [
          "shadow"
      ],
      "classes": [
          "Necromancer"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Necromancer"
          ],
          "species": [
              ""
          ]
      }
  },
  "Soul Harvest": {
      "levels": {
          "1": "Turns the dead into your health."
      },
      "note": "",
      "name": "Soul Harvest",
      "element": [
          "shadow"
      ],
      "classes": [
          "Necromancer"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Necromancer"
          ],
          "species": [
              ""
          ]
      }
  },
  "Animate Undead": {
      "levels": {
          "1": "Brings the dead under your control."
      },
      "note": "",
      "name": "Animate Undead",
      "element": [
          "shadow"
      ],
      "classes": [
          "Necromancer"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Necromancer"
          ],
          "species": [
              ""
          ]
      }
  },
  "Macabre": {
      "levels": {
          "1": "Resistance to death increased."
      },
      "note": "1% per level",
      "name": "Macabre",
      "element": [
          "shadow"
      ],
      "classes": [
          "Necromancer"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Necromancer"
          ],
          "species": [
              ""
          ]
      }
  },
  "S\u00e9ance": {
      "levels": {
          "1": "takes control of an undead."
      },
      "note": "",
      "name": "S\u00e9ance",
      "element": [
          "shadow"
      ],
      "classes": [
          "Necromancer"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Necromancer"
          ],
          "species": [
              ""
          ]
      }
  },
  "Purge the holy": {
      "levels": {
          "1": "Increase damage to 'holy' targets."
      },
      "note": "",
      "name": "Purge the holy",
      "element": [
          "shadow"
      ],
      "classes": [
          "Necromancer"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Necromancer"
          ],
          "species": [
              ""
          ]
      }
  },
  "Summon Skeleton": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Summon Skeleton",
      "element": [
          "shadow"
      ],
      "classes": [
          "Necromancer"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Necromancer"
          ],
          "species": [
              ""
          ]
      }
  },
  "Summon Skeleton Mage": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Summon Skeleton",
      "element": [
          "shadow"
      ],
      "classes": [
          "Necromancer"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Necromancer"
          ],
          "species": [
              ""
          ]
      }
  },
  "Vile Insight": {
      "levels": {
          "1": "A dark book of necromancy appears in the sorcerer's hand, imparting hideous secrets and increasing their unholy magic rating. (Ally)"
      },
      "note": "",
      "name": "Vile Insight",
      "element": [
          "shadow"
      ],
      "classes": [
          "Necromancer"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Necromancer"
          ],
          "species": [
              ""
          ]
      }
  },
  "Unholy Adept": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Unholy Adept",
      "element": [
          "shadow"
      ],
      "classes": [
          "Necromancer"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Necromancer"
          ],
          "species": [
              ""
          ]
      }
  },
  "Unholy Seinor": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Unholy Seinor",
      "element": [
          "shadow"
      ],
      "classes": [
          "Necromancer"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Necromancer"
          ],
          "species": [
              ""
          ]
      }
  },
  "Unholy Sage": {
      "levels": {
          "1": ""
      },
      "note": "",
      "name": "Unholy Sage",
      "element": [
          "shadow"
      ],
      "classes": [
          "Necromancer"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Necromancer"
          ],
          "species": [
              ""
          ]
      }
  },
  "Guardian Angel": {
      "levels": {
          "1": "Allies in melee range redirect X% of received damage to you"
      },
      "note": "",
      "name": "Guardian Angel",
      "element": [
          "light"
      ],
      "classes": [
          "Guardian"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Guardian"
          ],
          "species": [
              ""
          ]
      }
  },
  "Endurance Up": {
      "levels": {
          "1": "Increases Endurance."
      },
      "note": "",
      "name": "Endurance Up",
      "element": [
          "metal"
      ],
      "classes": [
          "Guardian"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Guardian"
          ],
          "species": [
              ""
          ]
      }
  },
  "Cover": {
      "levels": {
          "1": "."
      },
      "note": "",
      "name": "Cover",
      "element": [
          ""
      ],
      "classes": [
          "Guardian",
          "Paladin"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Guardian",
              "Paladin"
          ],
          "species": [
              ""
          ]
      }
  },
  "Sheltron": {
      "levels": {
          "1": "."
      },
      "note": "",
      "name": "Sheltron",
      "element": [
          ""
      ],
      "classes": [
          "Guardian"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Guardian"
          ],
          "species": [
              ""
          ]
      }
  },
  "Rampart": {
      "levels": {
          "1": "."
      },
      "note": "",
      "name": "Rampart",
      "element": [
          ""
      ],
      "classes": [
          "Guardian",
          "Paladin"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Guardian",
              "Paladin"
          ],
          "species": [
              ""
          ]
      }
  },
  "Sentinel": {
      "levels": {
          "1": "."
      },
      "note": "",
      "name": "Sentinel",
      "element": [
          ""
      ],
      "classes": [
          "Guardian",
          "Paladin"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Guardian",
              "Paladin"
          ],
          "species": [
              ""
          ]
      }
  },
  "Testudo": {
      "levels": {
          "1": "."
      },
      "note": "",
      "name": "Testudo",
      "element": [
          ""
      ],
      "classes": [
          "Guardian"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Guardian"
          ],
          "species": [
              ""
          ]
      }
  },
  "Push Back": {
      "levels": {
          "1": "."
      },
      "note": "",
      "name": "Push Back",
      "element": [
          ""
      ],
      "classes": [
          "Guardian"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Guardian"
          ],
          "species": [
              ""
          ]
      }
  },
  "Shelter": {
      "levels": {
          "1": "(healing)."
      },
      "note": "",
      "name": "Shelter",
      "element": [
          ""
      ],
      "classes": [
          "Guardian"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Guardian"
          ],
          "species": [
              ""
          ]
      }
  },
  "Hallowed Ground": {
      "levels": {
          "1": "."
      },
      "note": "",
      "name": "Hallowed Ground",
      "element": [
          ""
      ],
      "classes": [
          "Guardian",
          "Paladin"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Guardian",
              "Paladin"
          ],
          "species": [
              ""
          ]
      }
  },
  "Sanctuary": {
      "levels": {
          "1": "(heal allies)."
      },
      "note": "",
      "name": "Sanctuary",
      "element": [
          ""
      ],
      "classes": [
          "Guardian",
          "Paladin"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Guardian",
              "Paladin"
          ],
          "species": [
              ""
          ]
      }
  },
  "Stand Your Ground!": {
      "levels": {
          "1": "(allies)."
      },
      "note": "",
      "name": "Stand Your Ground!",
      "element": [
          ""
      ],
      "classes": [
          "Guardian"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Guardian"
          ],
          "species": [
              ""
          ]
      }
  },
  "Charge": {
      "levels": {
          "1": "Moves quickly in a straight line."
      },
      "note": "",
      "name": "Charge",
      "element": [
          ""
      ],
      "classes": [
          "Fighter"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Fighter"
          ],
          "species": [
              ""
          ]
      }
  },
  "Heavy Blow": {
      "levels": {
          "1": "High damage output strike."
      },
      "note": "",
      "name": "Heavy Blow",
      "element": [
          ""
      ],
      "classes": [
          "Fighter"
      ],
      "species": [
          ""
      ],
      "tier": "Basic",
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Fighter"
          ],
          "species": [
              ""
          ]
      }
  },
  "Battle Shout": {
      "levels": {
          "1": "Increases the stats of allies."
      },
      "note": "",
      "name": "Battle Shout",
      "element": [
          ""
      ],
      "classes": [
          "Fighter"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Fighter"
          ],
          "species": [
              ""
          ]
      }
  },
  "Strength Up": {
      "levels": {
          "1": "Increases Strength."
      },
      "note": "",
      "name": "Strength Up",
      "element": [
          ""
      ],
      "classes": [
          "Fighter"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Fighter"
          ],
          "species": [
              ""
          ]
      }
  },
  "Vitality Up": {
      "levels": {
          "1": "Increases Vitality."
      },
      "note": "",
      "name": "Vitality Up",
      "element": [
          ""
      ],
      "classes": [
          "Fighter"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Fighter"
          ],
          "species": [
              ""
          ]
      }
  },
  "Provoke": {
      "levels": {
          "1": "Provoke and tease them so that they want to attack you."
      },
      "note": "",
      "name": "Provoke",
      "element": [
          ""
      ],
      "classes": [
          "Fighter"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Fighter"
          ],
          "species": [
              ""
          ]
      }
  },
  "Willpower Up": {
      "levels": {
          "1": "Increases Willpower."
      },
      "note": "",
      "name": "Willpower Up",
      "element": [
          ""
      ],
      "classes": [
          "Knight"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Knight"
          ],
          "species": [
              ""
          ]
      }
  },
  "Crippling Blow": {
      "levels": {
          "1": "Cripple the target with a sweeping blow."
      },
      "note": "",
      "name": "Crippling Blow",
      "element": [
          ""
      ],
      "classes": [
          "Knight"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Knight"
          ],
          "species": [
              ""
          ]
      }
  },
  "Underwater Breathing": {
      "levels": {
          "1": "Can breath underwater."
      },
      "note": "",
      "name": "Underwater Breathing",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          "Water Elf",
          "Mermaid"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Water Elf",
              "Mermaid"
          ]
      }
  },
  "Tempest Shield": {
      "levels": {
          "1": "Tempest Shield is a spell that reserves mana to empower your shield, granting spell block chance and immunity to shock. While active, whenever you block, you deal damage to the enemy that hit you with an arc of lightning that chains to nearby enemies."
      },
      "note": "",
      "name": "Tempest Shield",
      "element": [
          "lightning"
      ],
      "classes": [
          ""
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              ""
          ]
      }
  },
  "Elf testing skill": {
      "levels": {
          "1": "Elf testing skill"
      },
      "note": "",
      "name": "Elf testing skill",
      "element": [
          ""
      ],
      "classes": [
          ""
      ],
      "species": [
          "Elf"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {
          "1": {}
      },
      "links": {
          "spells": [],
          "classes": [
              ""
          ],
          "species": [
              "Elf"
          ]
      }
  },
  "Hand of Magic": {
      "levels": {
          "1": "A spectral, floating hand appears at a point you choose within range"
      },
      "note": "",
      "name": "Hand of Magic",
      "element": [
          "mana"
      ],
      "classes": [
          "Mage"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": [
              ""
          ]
      }
  },
  "Weak Fireball": {
      "levels": {
          "1": "A Weak Fireball is produced and can be thrown at the target."
      },
      "note": "",
      "name": "Weak Fireball",
      "element": [
          "fire"
      ],
      "classes": [
          "Mage"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": [
              ""
          ]
      }
  },
  "Snowball": {
      "levels": {
          "1": "Snowball."
      },
      "note": "",
      "name": "Snowball",
      "element": [
          "ice"
      ],
      "classes": [
          "Mage"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Mage"
          ],
          "species": [
              ""
          ]
      }
  },
  "Detect Pulse": {
      "levels": {
          "1": "Detect warm blooded life in 10m ft for 150 secs on Self."
      },
      "note": "",
      "name": "Detect Pulse",
      "element": [
          ""
      ],
      "classes": [
          "Rouge"
      ],
      "species": [
          ""
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {},
      "links": {
          "spells": [],
          "classes": [
              "Rouge"
          ],
          "species": [
              ""
          ]
      }
  },
  "Etherealness": {
      "levels": {
          "1": "You step into the border regions of the Ethereal Plane, 40% of damage is taken from MP before HP."
      },
      "note": "You step into the border regions of the Ethereal Plane, 40% of damage is taken from MP before HP.",
      "name": "Etherealness",
      "element": [
          "spirit"
      ],
      "classes": [],
      "species": [
          "Succubus"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {
          "1": {}
      },
      "links": {
          "spells": [],
          "classes": [],
          "species": [
              "Succubus"
          ]
      }
  },
  "Draining Kiss": {
      "levels": {
          "1": "You apply a random drain effect on your target."
      },
      "note": "",
      "name": "Draining Kiss",
      "element": [],
      "classes": [],
      "species": [
          "Succubus"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {
          "1": {}
      },
      "links": {
          "spells": [],
          "classes": [],
          "species": [
              "Succubus"
          ]
      }
  },
  "Shapechanger": {
      "levels": {
          "1": "You can make minor adjustments to your shape/appearance."
      },
      "note": "",
      "name": "Shapechanger",
      "element": [],
      "classes": [],
      "species": [
          "Succubus"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {
          "1": {}
      },
      "links": {
          "spells": [],
          "classes": [],
          "species": [
              "Succubus"
          ]
      }
  },
  "Telepathic Bond": {
      "levels": {
          "1": "You can communicate telepathically to your bond."
      },
      "note": "",
      "name": "Telepathic Bond",
      "element": [],
      "classes": [],
      "species": [
          "Succubus"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": false,
      "stats": {
          "1": {}
      },
      "links": {
          "spells": [],
          "classes": [],
          "species": [
              "Succubus"
          ]
      }
  },
  "Claws": {
      "levels": {
          "1": "Unarmed attacks deal more damage."
      },
      "note": "",
      "name": "Claws",
      "element": [],
      "classes": [],
      "species": [
          "Succubus"
      ],
      "tier": null,
      "tags": [],
      "base_spell": "",
      "image": "",
      "negative": false,
      "passive": true,
      "stats": {
          "1": {}
      },
      "links": {
          "spells": [],
          "classes": [],
          "species": [
              "Succubus"
          ]
      }
  }
};

// Step 1: Build the spell registry and resolve references
const spellRegistry = {};

for (const [id, def] of Object.entries(spellList)) {
  spellRegistry[id] = { id, ...def };
}
// What about spell levels? 1-10. Upgrades 0-3. Spell level 0, read only by chars who do not know the spell.
for (const spell of Object.values(spellRegistry)) {
  if (spell.base) {
    spell.baseSpell = spellRegistry[spell.base];
  }
}

// Step 2: Read-only accessor
function getSpell(id, level = 1, upgrade = null) {
  const spell = spellRegistry[id];
  if (!spell) return null;

  const levelData = spell.levels?.[level] ?? {};
  const resolvedEffects = [];

  if (Array.isArray(levelData.effects)) {
    for (const effect of levelData.effects) {
      if (typeof effect === "string") {
        resolvedEffects.push(effect);
      } else if (effect.ref) {
        const referenced = getSpell(effect.ref, effect.level || 1);
        resolvedEffects.push({
          reference: referenced.name,
          description: referenced.levels?.[effect.level || 1]?.description || ""
        });
      }
    }
  }

  return {
    name: spell.name,
    description: levelData.description || "",
    effects: resolvedEffects,
    stats: spell.stats?.[level - 1] || {}
  };
}


for (let index = 0; index < nonSupport.length; index++) {
  const definedElements = Object.keys(monadColors)
  const possibleElements = nonSupport[index].properties[0].name.split(', ')
  const elementsList = []
  for (let j = 0; j < possibleElements.length; j++) {
    if (definedElements.includes(possibleElements[j].toLocaleLowerCase())) {
      elementsList.push(possibleElements[j].toLocaleLowerCase())
    }
  }
  if (!spellList[nonSupport[index].name]) {
    spellList[nonSupport[index].name] = {
      note: "",
      name: nonSupport[index].name,
      element: elementsList,
      classes: [],
      species: [],
      image: '',
      negative: false,
      passive: false,
      1: nonSupport[index].secDescrText,
      stats: {
        1: {},
      },
    }
  }

}
// Vampire overlord system
/*  crimson flash, vampiric drain, vampiric wings, crimson aegis, Undying body, immortal body, unyielding blood demon, telepathy, fartalk */
export function InlineSpell({ spellName, level }) {
  return (
    <Inline>
      {spellName}
      <SpellSpan>{spellList[spellName][level] || ""}</SpellSpan>
    </Inline>
  );
}

// Berserker stuff ! Blood stuff !https://dragonage.fandom.com/wiki/Blood_Mage_(Origins)
// '""',

// https://overlordmaruyama.fandom.com/wiki/Ainz_Ooal_Gown/Abilities_and_Powers

function Spells({ spells, type }) {
  const array = [];
  for (let index = 0; index < spells.length; index++) {
    const element = spellList[spells[index].name];
    if (element) {
      array.push(
        <SingleSpell
          key={index + "SingleSpell"}
          passive={element.passive || false}
          negative={element.negative || false}
        >
          {element.name}
          {element[spells[index].level] ? (
            <Span>{element[spells[index].level]}</Span>
          ) : (
            <Span>{spells[index].name}</Span>
          )}
        </SingleSpell>
      );
    } else {
      array.push(
        <SingleSpell
          key={index + "SingleSpell"}
          passive={spells[index].passive || false}
          negative={spells[index].negative || false}
        >
          {spells[index].name}
        </SingleSpell>
      );
    }
  }
  //  IF classList contains Type then it's a class skill

  function getTitle(type) {
    switch (type) {
      case "mage":
        return <Title>Spells:</Title>;
      case "negatives":
        return <Title>Negatives:</Title>;
      case "conditions":
        return <Title>Conditions:</Title>;
      default:
        return <Title>{type} Skills:</Title>;
    }
  }
  return (
    <>
      {/* This title thing could be made into switch cases. */}
      {array.length > 0 && type ? getTitle(type) : <Title></Title>}
      <SpellsStyle>{array}</SpellsStyle>
    </>
  );
}
export default Spells;

const Title = styled.h1`
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  text-transform: capitalize;
`;

const SpellsStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  width: 100%;
`;

const Span = styled.span`
  visibility: hidden;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  width: auto;
  position: absolute;
  z-index: 2;
  margin-top: 7%;
`;

const SingleSpell = styled.div`
  border-radius: 6px;
  text-transform: capitalize;
  padding: 5px;
  width: auto;
  color: black;
  background: ${(props) =>
    props.passive
      ? "#54cc4f;"
      : `linear-gradient(
    217deg,
    rgb(218, 182, 111),
    rgb(244, 229, 203) 70.71%
  );`}
  ${(props) => (props.negative ? "background: #f92b00;" : "")}
  margin: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  // &:hover {
  //   background-color: #f1f1f1;
  // }
  &:hover ${Span} {
    visibility: visible;
  }
`;

const SpellSpan = styled.span`
  visibility: hidden;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  width: auto;
  position: absolute;
  z-index: 2;
`;

const Inline = styled.div`
  display: contents;
  font-family: "monospace";
  &:hover ${SpellSpan} {
    visibility: visible;
  }
`;
