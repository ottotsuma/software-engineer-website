import styled from "styled-components";
import React from "react";
import {
  nonSupport
} from "./poe"

import { colors, monadColors } from "./colors";

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
    "1": "Reduces all stats by 1%.",
    "90": "Reduces all stats by 90%.",
    "note": "Miasma.",
    "name": "Miasma",
    "element": [
      "none"
    ],
    "classes": [],
    "species": [],
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
    "1": ".",
    "note": ".",
    "name": "Dark Vision",
    "element": [
      "shadow"
    ],
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
    },
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
    "image": "",
    "negative": false,
    "passive": true,
    "stats": {
      "1": {}
    }
  },
  "Snow Walk": {
    "1": "You are easily able to traverse any snowy, icy surface, or arctic terrain.",
    "note": "You do not consider any snowy, icy surface, or arctic terrain as a difficult terrain.",
    "name": "Snow Walk",
    "element": [
      "ice"
    ],
    "classes": [],
    "species": [
      "Snow Elf"
    ],
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
    "1": "You can resist cold damage.",
    "note": "Snow Elves are resistant to cold damage, taking 1/2 dmg..",
    "name": "Cold Resist",
    "element": [
      "ice"
    ],
    "classes": [],
    "species": [
      "Snow Elf"
    ],
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
    "1": "You take more damage if attacked by a weapon or spell dealing fire damage.",
    "note": "You take double damage if attacked by a weapon or spell dealing fire damage",
    "name": "Fire Vulnerability",
    "element": [
      "fire"
    ],
    "classes": [],
    "species": [
      "Snow Elf"
    ],
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
    "1": ".",
    "note": "Porphyric Hemophilia is the disease that causes vampirism if left uncured.",
    "name": "Porphyric Hemophilia",
    "element": [
      "blood"
    ],
    "classes": [],
    "species": [
      "Vampire"
    ],
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
    "1": "Maybe delete this? It's some EOS term.",
    "note": "",
    "name": "Sanguinare Vampiris",
    "element": [
      "blood"
    ],
    "classes": [],
    "species": [
      "Vampire"
    ],
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
    "1": ".",
    "note": "Porphyria cutanea tarda (PCT) is a rare disorder characterized by painful, blistering skin lesions that develop on sun-exposed skin (photosensitivity). Affected skin is fragile and may peel or blister after minor trauma. Liver abnormalities may also occur.",
    "name": "Porphyria cutanea tarda",
    "element": [
      "blood"
    ],
    "classes": [],
    "species": [
      "Vampire"
    ],
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
    "1": "Maybe delete this? It's some EOS term.",
    "note": ".",
    "name": "Noxiphilic Sanguivoria",
    "element": [
      "blood"
    ],
    "classes": [],
    "species": [
      "Vampire"
    ],
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
    "1": "Short for 'Porphyria cutanea tarda' see that skill to understand more about it.",
    "note": ".",
    "name": "Porphyria",
    "element": [
      "blood"
    ],
    "classes": [],
    "species": [
      "Vampire"
    ],
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
    "1": "Passive all players posses.",
    "note": "Not an NPC.",
    "name": "Astral soul projection",
    "element": [
      "none"
    ],
    "image": "",
    "negative": false,
    "passive": true,
    "stats": [
      {}
    ],
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Child": {
    "1": "Max Stat: 5.",
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
    "image": "",
    "negative": false,
    "passive": true,
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
    "1": "Vitality, Magic, Charisma: +1.",
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
    "image": "",
    "negative": false,
    "passive": true,
    "stats": [
      {
        "vitality": 1,
        "magic": 1,
        "charisma": 1
      }
    ],
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
    "1": "Vitality, Strength, Charisma: +1.",
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
    "image": "",
    "negative": false,
    "passive": true,
    "stats": [
      {
        "vitality": 1,
        "strength": 1,
        "charisma": 1
      }
    ],
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
    "1": "Sense, Dexterity, Vitality, Strength: -1.",
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
    "image": "",
    "negative": true,
    "passive": true,
    "stats": [
      {
        "sense": -1,
        "dexterity": -1,
        "vitality": -1,
        "strength": -1
      }
    ],
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
    "1": "All stats: -1.",
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
    "image": "",
    "negative": true,
    "passive": true,
    "stats": [
      {
        "sense": -1,
        "dexterity": -1,
        "vitality": -1,
        "strength": -1,
        "magic": -1,
        "willpower": -1,
        "charisma": -1,
        "endurance": -1
      }
    ],
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
    "1": "Deals 20% more damage from the side and behind.",
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
    "image": "",
    "links": {
      "spells": [],
      "classes": [
        "Fighter"
      ],
      "species": []
    }
  },
  "Slashing Edge": {
    "1": "Deals 20% more damage from behind, 20% more damage if used after 'Sharp Slash'.",
    "note": "Fighter",
    "name": "Slashing Edge",
    "element": [
      "none"
    ],
    "classes": [
      "Fighter"
    ],
    "species": [],
    "image": "",
    "links": {
      "spells": [],
      "classes": [
        "Fighter"
      ],
      "species": []
    }
  },
  "Devious Slice": {
    "1": "Deals 20% more damage from the side, 20% more damage if used after 'Slashing Edge'.",
    "note": "Fighter",
    "name": "Devious Slice",
    "element": [
      "none"
    ],
    "classes": [
      "Fighter"
    ],
    "species": [],
    "image": "",
    "links": {
      "spells": [],
      "classes": [
        "Fighter"
      ],
      "species": []
    }
  },
  "Headbutt": {
    "1": "Has a chance to stun the target. Recoil damage.",
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
    "image": "",
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
    "1": "Quickly hop from this location to a nearby location.",
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
    "image": "",
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
    "1": "Increases movement speed.",
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
    "image": "",
    "links": {
      "spells": [],
      "classes": [
        "Rogue"
      ],
      "species": []
    }
  },
  "Charged Charge": {
    "1": "Stimulates your muscles in your legs with lightning shocks, to boost your speed.",
    "2": "Move 5% faster while charging.",
    "3": "Do 10% more impact damage.",
    "4": "Cost 5% less mana.",
    "5": "Charge can last 1 second longer.",
    "element": [
      "lightning"
    ],
    "classes": [],
    "species": [],
    "name": "Charged Charge",
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Lightning Storm": {
    "1": "Call lightning to randomly strike an area.",
    "name": "Lightning Storm",
    "element": [
      "lightning"
    ],
    "classes": [],
    "species": [],
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Wall of Lightning": {
    "1": "Raise a wall of lightning before you.",
    "name": "Wall of Lightning",
    "element": [
      "lightning"
    ],
    "classes": [
      "Mage"
    ],
    "species": [],
    "links": {
      "spells": [],
      "classes": [
        "Mage"
      ],
      "species": []
    }
  },
  "Static Field": {
    "1": "All lighting in this area will do more damage.",
    "name": "Static Field",
    "element": [
      "lightning"
    ],
    "classes": [
      "Mage"
    ],
    "species": [],
    "links": {
      "spells": [],
      "classes": [
        "Mage"
      ],
      "species": []
    }
  },
  "Thunderbolt": {
    "1": "Calls a thunder bolt from above onto the target.",
    "name": "Thunderbolt",
    "element": [
      "lightning"
    ],
    "classes": [
      "Mage"
    ],
    "species": [],
    "links": {
      "spells": [],
      "classes": [
        "Mage"
      ],
      "species": []
    }
  },
  "Discharge": {
    "1": "Explode lighting in all directions.",
    "name": "Discharge",
    "element": [
      "lightning"
    ],
    "classes": [
      "Mage"
    ],
    "species": [],
    "links": {
      "spells": [],
      "classes": [
        "Mage"
      ],
      "species": []
    }
  },
  "Lightning Cloak": {
    "1": "Covers yourself in lighting, shocking anyone who comes too close.",
    "element": [
      "lightning"
    ],
    "classes": [
      "Mage"
    ],
    "species": [],
    "name": "Lightning Cloak",
    "links": {
      "spells": [],
      "classes": [
        "Mage"
      ],
      "species": []
    }
  },
  "Lightning Rune": {
    "1": "Injects lighting into a surface, will release when someone comes near.",
    "name": "Lightning Rune",
    "classes": [
      "Mage"
    ],
    "species": [],
    "element": [
      "lightning"
    ],
    "links": {
      "spells": [],
      "classes": [
        "Mage"
      ],
      "species": []
    }
  },
  "Lightning Bolt": {
    "1": "Shoots a bolt of lightning at a target.",
    "name": "Lightning Bolt",
    "element": [
      "lightning"
    ],
    "classes": [
      "Mage"
    ],
    "species": [],
    "links": {
      "spells": [],
      "classes": [
        "Mage"
      ],
      "species": []
    }
  },
  "Sparks": {
    "1": "Shoots out multiple sparks in a random pattern.",
    "name": "Sparks",
    "element": [
      "lightning"
    ],
    "classes": [
      "Mage"
    ],
    "species": [],
    "links": {
      "spells": [],
      "classes": [
        "Mage"
      ],
      "species": []
    }
  },
  "Shocking Touch": {
    "1": "Electrocutes a target you touch [You decide the body part it comes from].",
    "name": "Shocking Touch",
    "element": [
      "lightning"
    ],
    "classes": [
      "Mage"
    ],
    "species": [],
    "links": {
      "spells": [],
      "classes": [
        "Mage"
      ],
      "species": []
    }
  },
  "Thunderstorm": {
    "1": "Change the clouds above to thunder clouds, making lighting strikes easier.",
    "name": "Thunderstorm",
    "element": [
      "lightning"
    ],
    "classes": [
      "Mage"
    ],
    "species": [],
    "links": {
      "spells": [],
      "classes": [
        "Mage"
      ],
      "species": []
    }
  },
  "Dazing Bolt": {
    "1": "A lightning bolt that dazzles the opponent.",
    "name": "Dazing Bolt",
    "element": [
      "lightning"
    ],
    "classes": [
      "Mage"
    ],
    "species": [],
    "links": {
      "spells": [],
      "classes": [
        "Mage"
      ],
      "species": []
    }
  },
  "Chain Lightning": {
    "1": "Shoots lightning at a target, part of the lighting will be redirected to near by targets.",
    "name": "Chain Lightning",
    "element": [
      "lightning"
    ],
    "classes": [
      "Mage"
    ],
    "species": [],
    "links": {
      "spells": [],
      "classes": [
        "Mage"
      ],
      "species": []
    }
  },
  "Serpent Strike": {
    "1": "Your next physical attack will be faster.",
    "element": [
      "none"
    ],
    "classes": [
      "Kʼawiil"
    ],
    "species": [
      ""
    ],
    "name": "Serpent Strike",
    "links": {
      "spells": [],
      "classes": [
        "Kʼawiil"
      ],
      "species": [
        ""
      ]
    }
  },
  "Serpent Pattern": {
    "1": "Your skin will adapt to the environment slightly, increased stealth.",
    "2": "Your skin will adapt to the environment slightly, increased stealth.",
    "element": [
      "none"
    ],
    "classes": [
      "Kʼawiil"
    ],
    "species": [
      ""
    ],
    "name": "Serpent Pattern",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [
        "Kʼawiil"
      ],
      "species": [
        ""
      ]
    }
  },
  "Forked Tongue": {
    "1": "Your tongue will become forked, Increased sense of smell.",
    "2": "You learn basic serpent speech.",
    "element": [
      "none"
    ],
    "classes": [
      "Kʼawiil"
    ],
    "species": [
      ""
    ],
    "name": "Forked Tongue",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [
        "Kʼawiil"
      ],
      "species": [
        ""
      ]
    }
  },
  "Serpent Skin": {
    "1": "Your skin slowly becomes like a serpents. Able to turn on and off scaled armour over your skin.",
    "2": "Your skin slowly becomes like a serpents. Able to turn on and off scaled armour over your skin.",
    "3": "Endurance +3",
    "4": "Endurance +4",
    "5": "Endurance +5",
    "element": [
      "none"
    ],
    "classes": [
      "Kʼawiil"
    ],
    "species": [
      ""
    ],
    "name": "Serpent-Skin",
    "stats": [
      {
        "endurance": 1
      },
      {
        "endurance": 2
      },
      {
        "endurance": 3
      },
      {
        "endurance": 4
      },
      {
        "endurance": 5
      },
      {
        "endurance": 6
      },
      {
        "endurance": 7
      },
      {
        "endurance": 8
      },
      {
        "endurance": 9
      },
      {
        "endurance": 10
      }
    ],
    "links": {
      "spells": [],
      "classes": [
        "Kʼawiil"
      ],
      "species": [
        ""
      ]
    }
  },
  "Haietlik": {
    "1": "Throw a snake shaped lighting bolt to hook onto a target, dealing damage in the process.",
    "name": "Haietlik",
    "element": [
      "lightning"
    ],
    "classes": [
      "Kʼawiil"
    ],
    "species": [
      ""
    ],
    "links": {
      "spells": [],
      "classes": [
        "Kʼawiil"
      ],
      "species": [
        ""
      ]
    }
  },
  "Kʼawiil Rain": {
    "1": "It starts raining, the rain recovers the HP of your summons/plants.",
    "element": [
      "water"
    ],
    "classes": [
      "Kʼawiil"
    ],
    "species": [
      ""
    ],
    "name": "Kʼawiil Rain ",
    "links": {
      "spells": [],
      "classes": [
        "Kʼawiil"
      ],
      "species": [
        ""
      ]
    }
  },
  "Kʼawiil Bolt": {
    "1": "Releases a burst of Kʼawiil-lightning from range.",
    "2": "Releases a burst of Kʼawiil-lightning from range.",
    "name": "Kʼawiil Bolt",
    "classes": [
      "Kʼawiil"
    ],
    "species": [
      ""
    ],
    "element": [
      "lightning"
    ],
    "links": {
      "spells": [],
      "classes": [
        "Kʼawiil"
      ],
      "species": [
        ""
      ]
    }
  },
  "Kʼawiil Burst": {
    "1": "Releases a burst of Kʼawiil-lightning on contact.",
    "2": "Releases a burst of Kʼawiil-lightning on contact.",
    "element": [
      "lightning"
    ],
    "classes": [
      "Kʼawiil"
    ],
    "species": [
      ""
    ],
    "name": "Kʼawiil Burst",
    "links": {
      "spells": [],
      "classes": [
        "Kʼawiil"
      ],
      "species": [
        ""
      ]
    }
  },
  "Lightning Plant": {
    "1": "Turn lightning seeds into lightning plants!",
    "element": [
      "lightning",
      "plant"
    ],
    "classes": [
      "Kʼawiil"
    ],
    "species": [
      ""
    ],
    "name": "Lightning Plant",
    "links": {
      "spells": [],
      "classes": [
        "Kʼawiil"
      ],
      "species": [
        ""
      ]
    }
  },
  "Inspect Plants": {
    "1": "Your inspection of plants will be a level up on your normal inspection ability.",
    "name": "Inspect Plants",
    "element": [
      "plant"
    ],
    "classes": [
      "Kʼawiil"
    ],
    "species": [
      ""
    ],
    "links": {
      "spells": [],
      "classes": [
        "Kʼawiil"
      ],
      "species": [
        ""
      ]
    }
  },
  "Bountiful Harvest": {
    "1": "All of your harvests are increased by 10%.",
    "2": "All of your harvests are increased by 20%.",
    "3": "All of your harvests are increased by 30%.",
    "4": "All of your harvests are increased by 40%.",
    "5": "All of your harvests are increased by 50%.",
    "6": "All of your harvests are increased by 60%.",
    "7": "All of your harvests are increased by 70%.",
    "8": "All of your harvests are increased by 80%.",
    "9": "All of your harvests are increased by 90%.",
    "10": "All of your harvests are increased by 100%, recover 20% HP.",
    "element": [
      "plant"
    ],
    "classes": [
      "Kʼawiil"
    ],
    "species": [
      ""
    ],
    "name": "Bountiful Harvest",
    "passive": true,
    "note": "All of your harvests are increased by [x]%. [x is 10x the level of this spell.]",
    "links": {
      "spells": [],
      "classes": [
        "Kʼawiil"
      ],
      "species": [
        ""
      ]
    }
  },
  "Reap What You Sow": {
    "1": "Reap the benefits or punishments from the seeds you sow.",
    "2": "Reap the benefits or punishments from the seeds you sow.",
    "element": [
      "plant"
    ],
    "classes": [
      "Kʼawiil"
    ],
    "species": [
      ""
    ],
    "name": "Reap What You Sow",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [
        "Kʼawiil"
      ],
      "species": [
        ""
      ]
    }
  },
  "Scarecrow": {
    "1": "Uses plant material to summon a sentient scarecrow.",
    "2": "Uses plant material to summon a level 20 scarecrow.",
    "3": "Uses plant material to summon a level 30 scarecrow.",
    "4": "Uses plant material to summon a level 40 scarecrow.",
    "5": "Uses plant material to summon a level 50 scarecrow.",
    "6": "Uses plant material to summon a level 60 scarecrow.",
    "7": "Uses plant material to summon a level 70 scarecrow.",
    "8": "Uses plant material to summon a level 80 scarecrow.",
    "9": "Uses plant material to summon a level 90 scarecrow.",
    "10": "Uses plant material to summon a level 100 scarecrow. Equipment provided.",
    "element": [
      "plant"
    ],
    "classes": [
      "Kʼawiil"
    ],
    "species": [
      ""
    ],
    "name": "Scarecrow",
    "notes": "https://en.wikipedia.org/wiki/Scarecrow",
    "links": {
      "spells": [],
      "classes": [
        "Kʼawiil"
      ],
      "species": [
        ""
      ]
    }
  },
  "Lightning harvest": {
    "1": "Harvest the target. [If the target is below 20% HP this attack does 200% more damage. If this target is a 'plant' type this attack does 500% more damage. If this attack kills the target you have a chance to harvest something.]",
    "2": "Harvest the target. [If the target is below 20% HP this attack does 250% more damage. If this target is a 'plant' type this attack does 600% more damage. If this attack kills the target you have a chance to harvest something.]",
    "3": "Harvest the target. [If the target is below 20% HP this attack does 300% more damage. If this target is a 'plant' type this attack does 700% more damage. If this attack kills the target you have a chance to harvest something.]",
    "4": "Harvest the target. [If the target is below 20% HP this attack does 350% more damage. If this target is a 'plant' type this attack does 800% more damage. If this attack kills the target you have a chance to harvest something.]",
    "5": "Harvest the target. [If the target is below 20% HP this attack does 400% more damage. If this target is a 'plant' type this attack does 900% more damage. If this attack kills the target you have a chance to harvest something.]",
    "6": "Harvest the target. [If the target is below 20% HP this attack does 450% more damage. If this target is a 'plant' type this attack does 1000% more damage. If this attack kills the target you have a chance to harvest something.]",
    "7": "Harvest the target. [If the target is below 20% HP this attack does 500% more damage. If this target is a 'plant' type this attack does 1000% more damage. If this attack kills the target you have a chance to harvest something.]",
    "8": "Harvest the target. [If the target is below 20% HP this attack does 550% more damage. If this target is a 'plant' type this attack does 1000% more damage. If this attack kills the target you have a chance to harvest something.]",
    "9": "Harvest the target. [If the target is below 20% HP this attack does 600% more damage. If this target is a 'plant' type this attack does 1000% more damage. If this attack kills the target you have a chance to harvest something.]",
    "name": "Lightning harvest",
    "element": [
      "lightning"
    ],
    "classes": [
      "Kʼawiil"
    ],
    "species": [
      ""
    ],
    "note": "Harvest the target. [If the target is below 20% HP this attack does 200% more damage. If this target is a 'plant' type this attack does 500% more damage. If this attack kills the target you have a chance to harvest something.]",
    "links": {
      "spells": [],
      "classes": [
        "Kʼawiil"
      ],
      "species": [
        ""
      ]
    }
  },
  "Lightning growth": {
    "1": "Force the target to grow.",
    "2": "Force the target to grow.",
    "3": "All targets base stats +2 for the duration of the spells.",
    "4": "All targets stats +10% for the duration of the spells.",
    "name": "Lightning growth",
    "element": [
      "lightning"
    ],
    "classes": [
      "Kʼawiil"
    ],
    "species": [
      ""
    ],
    "image": "https://cdn.dribbble.com/users/36602/screenshots/3544179/growing-tree-svg-animation-recut.gif",
    "links": {
      "spells": [],
      "classes": [
        "Kʼawiil"
      ],
      "species": [
        ""
      ]
    }
  },
  "Lightning germination": {
    "1": "Stimulate a target into germinating",
    "2": "Stimulate a target into germinating",
    "3": "Target heals 12% of their max hp over 7 seconds.",
    "4": "Target heals 12% of their max hp over 6 seconds.",
    "5": "Target heals 14% of their max hp over 5 seconds.",
    "6": "Target heals 14% of their max hp over 4 seconds.",
    "7": "Target heals 16% of their max hp over 3 seconds.",
    "8": "Target heals 16% of their max hp over 2 seconds.",
    "9": "Target heals 18% of their max hp over 1 seconds.",
    "10": "Target heals 25% of their max hp.",
    "name": "Lightning germination",
    "element": [
      "lightning"
    ],
    "classes": [
      "Kʼawiil"
    ],
    "species": [
      ""
    ],
    "image": "https://static.wixstatic.com/media/45e716_c8ae22cc571b4429ac23a59b4ddf9ef0~mv2.gif",
    "links": {
      "spells": [],
      "classes": [
        "Kʼawiil"
      ],
      "species": [
        ""
      ]
    }
  },
  "Seeds to Soldiers": {
    "1": "Take 1 seed, use energy to give life to 1 soldier.",
    "2": "Take 2 seeds, use energy to give life to 2 soldiers.",
    "name": "Seeds to Soldiers",
    "element": [
      "plant"
    ],
    "classes": [
      "Kʼawiil"
    ],
    "species": [
      ""
    ],
    "note": "Take [x] seed(s), use energy to give life to [x] soldier(s). [x is equal to spell level.]",
    "links": {
      "spells": [],
      "classes": [
        "Kʼawiil"
      ],
      "species": [
        ""
      ]
    }
  },
  "Lightning seeds": {
    "1": "Shoots a group of 1 seed in a spread from the user. The seeds attach to an opponent and cause lightning damage over time. A part of the damage is used to restore your as mana.",
    "2": "Shoots a group of 2 seeds in a spread from the user. The seeds attach to opponents and cause lightning damage over time. A part of the damage is used to restore your as mana.",
    "3": "Total seeds: 3. Mana Drain: 10%.",
    "4": "Total seeds: 4. Mana Drain: 10%.",
    "5": "Total seeds: 5. Mana Drain: 10%.",
    "6": "Total seeds: 6. Mana Drain: 10%.",
    "7": "Total seeds: 7. Mana Drain: 10%.",
    "8": "Total seeds: 8. Mana Drain: 10%.",
    "9": "Total seeds: 9. Mana Drain: 10%.",
    "10": "Total seeds: 10. Mana Drain: 20%.",
    "name": "Lightning seeds",
    "element": [
      "lightning"
    ],
    "classes": [
      "Kʼawiil"
    ],
    "species": [
      ""
    ],
    "image": "http://2.bp.blogspot.com/-k4C_Lq6Y7fw/VDtBXWA2LCI/AAAAAAAABrY/QEUTlVZ76RI/s1600/lightningBall_small.gif",
    "note": "Shoots a group of [x] seed(s) in a spread from the user. The seeds attach to opponent(s) and cause lightning damage over time. A part of the damage is used to restore your as mana. [x is equal to spell level.]",
    "links": {
      "spells": [],
      "classes": [
        "Kʼawiil"
      ],
      "species": [
        ""
      ]
    }
  },
  "Mana Ball": {
    "1": "Gathers mana into a ball. Gives off a small amount of light.",
    "2": "Mana ball create is instant, flight speed +25%.",
    "name": "Mana Ball",
    "element": [
      "mana"
    ],
    "classes": [
      "Mage"
    ],
    "species": [],
    "links": {
      "spells": [],
      "classes": [
        "Mage"
      ],
      "species": []
    }
  },
  "Mana Orbs": {
    "1": "(3) Mana balls rotate around the user, hitting anything that comes into contact.",
    "2": "Mana balls rotate around the user, 3% faster.",
    "3": "Orbit distance is increased while moving.",
    "4": "10% increase in mana ball damage.",
    "5": "Gain and extra mana ball.",
    "6": "Orbit distance is increased while standing still.",
    "7": "Gain and extra mana ball.",
    "8": "10% increase in mana ball damage.",
    "9": "Balls can move away form their path of orbit if a target is near by.",
    "10": "Balls can be shot in all directions, bounce off walls or max range and coming back.",
    "element": [
      "mana"
    ],
    "classes": [
      "Mage"
    ],
    "species": [],
    "name": "Mana Orbs",
    "links": {
      "spells": [],
      "classes": [
        "Mage"
      ],
      "species": []
    }
  },
  "Tether": {
    "1": "Gathers mana into a string shape.",
    "2": "Two objects within 10’ of each other be-come linked and cannot be moved more than 10’ apart.",
    "name": "Tether",
    "element": [
      "mana"
    ],
    "classes": [
      "Mage"
    ],
    "species": [],
    "links": {
      "spells": [],
      "classes": [
        "Mage"
      ],
      "species": []
    }
  },
  "Magic Resistance": {
    "1": "Passive: Resists mana foreign to the body, on surface level.",
    "name": "Magic Resistance",
    "element": [
      "mana"
    ],
    "passive": true,
    "classes": [
      "Mage"
    ],
    "species": [],
    "links": {
      "spells": [],
      "classes": [
        "Mage"
      ],
      "species": []
    }
  },
  "Magic Up": {
    "1": "Increases the intensity of mana in the body.",
    "2": "Magic +2",
    "3": "Magic +3",
    "4": "Magic +4",
    "5": "Magic +5",
    "6": "Magic +6",
    "7": "Magic +7",
    "8": "Magic +8",
    "9": "Magic +9",
    "10": "Magic +10, mana recovery +10%.",
    "name": "Magic Up",
    "element": [
      "mana"
    ],
    "passive": true,
    "classes": [
      "Mage"
    ],
    "species": [],
    "stats": [
      {
        "magic": 1
      },
      {
        "magic": 2
      },
      {
        "magic": 3
      },
      {
        "magic": 4
      },
      {
        "magic": 5
      },
      {
        "magic": 6
      },
      {
        "magic": 7
      },
      {
        "magic": 8
      },
      {
        "magic": 9
      },
      {
        "magic": 10
      }
    ],
    "links": {
      "spells": [],
      "classes": [
        "Mage"
      ],
      "species": []
    }
  },
  "Mana Skin": {
    "1": "Coat your body in a skin of mana, the effect can vary.",
    "name": "Mana Skin",
    "element": [
      "mana"
    ],
    "passive": true,
    "classes": [
      "Mage"
    ],
    "stats": [],
    "links": {
      "spells": [],
      "classes": [
        "Mage"
      ],
      "species": []
    }
  },
  "Mana Puppet": {
    "1": "Control an object with mana.",
    "name": "Mana Puppet",
    "element": [
      "mana"
    ],
    "passive": true,
    "classes": [
      "Mage"
    ],
    "stats": [],
    "links": {
      "spells": [],
      "classes": [
        "Mage"
      ],
      "species": []
    }
  },
  "Strike": {
    "1": "Calls mana in the environment to gather and strike down from above.",
    "name": "Strike",
    "element": [
      "mana"
    ],
    "classes": [
      "Mage"
    ],
    "links": {
      "spells": [],
      "classes": [
        "Mage"
      ],
      "species": []
    }
  },
  "Missile": {
    "1": "Mana in the shape of a missile shoots towards the target.",
    "2": "+1 Missile.",
    "3": "+1 Missile.",
    "4": "Missile speed +25%.",
    "5": "Missiles target low HP enemies first.",
    "6": "Missiles more accurate.",
    "7": "+1 Missile.",
    "8": "+1 Missile.",
    "9": "Missile damage +10%.",
    "10": "Missiles become one big missile, splash damage on impact.",
    "element": [
      "mana"
    ],
    "name": "Missile",
    "classes": [
      "Mage"
    ],
    "links": {
      "spells": [],
      "classes": [
        "Mage"
      ],
      "species": []
    }
  },
  "Mana Slide": {
    "1": "Pushes the user forward along the ground.",
    "2": "10% cost reduction.",
    "3": "+10% speed.",
    "4": "50% further.",
    "5": "Chance of falling over is now 0%",
    "6": "Chance skill interruption will fail.",
    "7": "50% further.",
    "8": "+10% speed.",
    "9": "15% cost reduction.",
    "element": [
      "mana"
    ],
    "name": "Mana Slide",
    "classes": [
      "Mage"
    ],
    "links": {
      "spells": [],
      "classes": [
        "Mage"
      ],
      "species": []
    }
  },
  "Flash Dash": {
    "1": "Quickly dash from this location to a nearby location, leaving a trail of burning ground in your wake.",
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
    "image": "",
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
    "1": "Produces a shield of mana around the user.",
    "2": "Takes 5% less damage.",
    "element": [
      "mana"
    ],
    "name": "Mana Shield",
    "classes": [
      "Mage"
    ],
    "links": {
      "spells": [],
      "classes": [
        "Mage"
      ],
      "species": []
    }
  },
  "Mana Wings": {
    "1": "Produces a wings of mana.",
    "2": "Can fly using the wings.",
    "3": "Flight cost reduction 20%.",
    "4": "Can fly higher.",
    "5": "Can fly faster.",
    "6": "Summon cost reduction 10%.",
    "7": "Maintaining cost reduction 50%.",
    "8": "Can be used underwater.",
    "9": "Wings take 5% less damage.",
    "10": "Twice as many wings, half the cost.",
    "element": [
      "mana"
    ],
    "name": "Mana Wings",
    "classes": [
      "Mage"
    ],
    "links": {
      "spells": [],
      "classes": [
        "Mage"
      ],
      "species": []
    }
  },
  "Shield Burst": {
    "1": "Explodes the mana left in the mana shield, into an attack.",
    "element": [
      "mana"
    ],
    "name": "Shield Burst",
    "classes": [
      "Mage"
    ],
    "links": {
      "spells": [],
      "classes": [
        "Mage"
      ],
      "species": []
    }
  },
  "Magic Regen": {
    "1": "Increases mana recovery speed.",
    "element": [
      "mana"
    ],
    "name": "Magic Regen",
    "passive": true,
    "classes": [
      "Mage"
    ],
    "links": {
      "spells": [],
      "classes": [
        "Mage"
      ],
      "species": []
    }
  },
  "Talented": {
    "1": "1% increase to experience gained.",
    "2": "2% increase to experience gained.",
    "3": "3% increase to experience gained.",
    "4": "4% increase to experience gained.",
    "5": "5% increase to experience gained.",
    "6": "6% increase to experience gained.",
    "7": "7% increase to experience gained.",
    "8": "8% increase to experience gained.",
    "9": "9% increase to experience gained.",
    "name": "Talented",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Genius": {
    "1": "2% increase to experience gained",
    "2": "4% increase to experience gained.",
    "3": "6% increase to experience gained.",
    "4": "8% increase to experience gained.",
    "5": "10% increase to experience gained.",
    "6": "12% increase to experience gained.",
    "7": "14% increase to experience gained.",
    "8": "16% increase to experience gained.",
    "9": "18% increase to experience gained.",
    "name": "Genius",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Super genius": {
    "1": "4% increase to experience gained",
    "2": "8% increase to experience gained.",
    "3": "12% increase to experience gained.",
    "4": "16% increase to experience gained.",
    "5": "20% increase to experience gained.",
    "6": "24% increase to experience gained.",
    "7": "28% increase to experience gained.",
    "8": "32% increase to experience gained.",
    "9": "36% increase to experience gained.",
    "name": "Super Genius",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Peerless genius": {
    "1": "10% increase to experience gained",
    "2": "20% increase to experience gained.",
    "3": "30% increase to experience gained.",
    "4": "40% increase to experience gained.",
    "5": "50% increase to experience gained.",
    "6": "60% increase to experience gained.",
    "7": "70% increase to experience gained.",
    "8": "80% increase to experience gained.",
    "9": "90% increase to experience gained.",
    "name": "Peerless genius",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Handsome": {
    "1": "+1 Charisma.",
    "2": "+2 Charisma.",
    "3": "+3 Charisma.",
    "4": "+4 Charisma.",
    "5": "+5 Charisma.",
    "6": "+6 Charisma.",
    "7": "+7 Charisma.",
    "8": "+8 Charisma.",
    "9": "+9 Charisma.",
    "10": "+10 Charisma, small chance people become infatuated with you.",
    "name": "Handsome",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Beautiful": {
    "1": "+1 Charisma.",
    "2": "+2 Charisma.",
    "3": "+3 Charisma.",
    "4": "+4 Charisma.",
    "5": "+5 Charisma.",
    "6": "+6 Charisma.",
    "7": "+7 Charisma.",
    "8": "+8 Charisma.",
    "9": "+9 Charisma.",
    "10": "+10 Charisma, small chance people become infatuated with you.",
    "name": "Beautiful",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Peerless Beauty": {
    "1": "+2 Charisma.",
    "2": "+4 Charisma.",
    "3": "+6 Charisma.",
    "4": "+8 Charisma.",
    "5": "+10 Charisma.",
    "6": "+12 Charisma.",
    "7": "+14 Charisma.",
    "8": "+16 Charisma.",
    "9": "+18 Charisma.",
    "10": "+20 Charisma, chance people become infatuated with you.",
    "name": "Peerless Beauty",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Lucky": {
    "1": "Slight chance of finding a rarer item.",
    "name": "Lucky",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Persuasive": {
    "1": "+1 Charisma.",
    "2": "+2 Charisma.",
    "3": "+3 Charisma.",
    "4": "+4 Charisma.",
    "5": "+5 Charisma.",
    "6": "+6 Charisma.",
    "7": "+7 Charisma.",
    "8": "+8 Charisma.",
    "9": "+9 Charisma.",
    "10": "+10 Charisma, I'll do it, even if I don't like it.",
    "name": "Persuasive",
    "passive": true,
    "stats": [
      {
        "charisma": 1
      },
      {
        "charisma": 2
      },
      {
        "charisma": 3
      },
      {
        "charisma": 4
      },
      {
        "charisma": 5
      },
      {
        "charisma": 6
      },
      {
        "charisma": 7
      },
      {
        "charisma": 8
      },
      {
        "charisma": 9
      },
      {
        "charisma": 10
      }
    ],
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Brave": {
    "1": "Chance to resist fear.",
    "2": "Chance to resist fear.",
    "name": "Brave",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Human Aptitude": {
    "1": "Chance based skills are 1% more likely to succeed.",
    "species": [
      "Human"
    ],
    "name": "Human Aptitude",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": [
        "Human"
      ]
    }
  },
  "Human Ingenuity": {
    "1": "When using tools gain +1 proficiency.",
    "2": "When using tools gain +2 proficiency.",
    "3": "When using tools gain +3 proficiency.",
    "4": "When using tools gain +4 proficiency.",
    "5": "When using tools gain +5 proficiency.",
    "6": "When using tools gain +6 proficiency.",
    "7": "When using tools gain +7 proficiency.",
    "8": "When using tools gain +8 proficiency.",
    "9": "When using tools gain +9 proficiency.",
    "10": "When using tools gain +10 proficiency, tools have +1 bonus stat.",
    "species": [
      "Human"
    ],
    "name": "Human Ingenuity",
    "notes": "E.g. Spear has +1 strength then you get +1 another one. This is only for 'tools' not armour.",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": [
        "Human"
      ]
    }
  },
  "Human Resolve": {
    "1": "Boost all stats 10% for 2 second.",
    "2": "Boost all stats 10% for 4 second.",
    "3": "Boost all stats 10% for 6 second.",
    "4": "Boost all stats 10% for 8 second.",
    "5": "Boost all stats 10% for 10 second.",
    "6": "Boost all stats 10% for 12 second.",
    "7": "Boost all stats 10% for 14 second.",
    "8": "Boost all stats 10% for 16 second.",
    "9": "Boost all stats 10% for 18 second.",
    "10": "Boost all stats 20% for 20 second.",
    "species": [
      "Human"
    ],
    "name": "Human Resolve",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": [
        "Human"
      ]
    }
  },
  "Plant Form": {
    "1": "Take the form of a plant you have seen.",
    "name": "Plant Form",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Adaptable": {
    "1": "Environmental debuffs effect -5%.",
    "2": "Environmental debuffs effect -10%.",
    "3": "Environmental debuffs effect -15%.",
    "4": "Environmental debuffs effect -20%.",
    "5": "Environmental debuffs effect -25%.",
    "6": "Environmental debuffs effect -30%.",
    "7": "Environmental debuffs effect -35%.",
    "8": "Environmental debuffs effect -40%.",
    "9": "Environmental debuffs effect -45%.",
    "10": "Environmental debuffs effect -50%, pull less agro.",
    "name": "Adaptable",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Healthy": {
    "1": "Vitality +1.",
    "2": "Vitality +1, small chance to resist poisons.",
    "3": "Vitality +2, small chance to resist poisons & diseases.",
    "4": "Vitality +3, small chance to resist poisons & diseases.",
    "5": "Vitality +3, small chance to resist poisons & diseases, small increase to HP regeneration.",
    "6": "Vitality +4, small chance to resist poisons & diseases, small increase to HP regeneration.",
    "7": "Vitality +4, chance to resist poisons & diseases, increase to HP regeneration.",
    "8": "Vitality +5, chance to resist poisons & diseases, increase to HP regeneration.",
    "9": "Vitality +5, chance to resist poisons & diseases, greater HP regeneration.",
    "10": "Vitality +5, greater chance to resist poisons & diseases, greater HP regeneration.",
    "name": "Healthy",
    "passive": true,
    "stats": [
      {
        "vitality": 1
      },
      {
        "vitality": 1
      },
      {
        "vitality": 2
      },
      {
        "vitality": 3
      },
      {
        "vitality": 3
      },
      {
        "vitality": 4
      },
      {
        "vitality": 4
      },
      {
        "vitality": 5
      },
      {
        "vitality": 5
      },
      {
        "vitality": 5
      }
    ],
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Athletic": {
    "1": "Movement speed +2%",
    "2": "Movement speed +4%",
    "3": "Movement speed +6%",
    "4": "Movement speed +8%",
    "5": "Movement speed +10%",
    "6": "Movement speed +12%",
    "7": "Movement speed +14%",
    "8": "Movement speed +16%",
    "9": "Movement speed +18%",
    "10": "Movement speed +20%, effects that reduce movement speed are halved.",
    "name": "Athletic",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Perception": {
    "1": "Sense +1",
    "2": "Sense +2",
    "3": "Sense +3",
    "4": "Sense +4",
    "5": "Sense +5",
    "6": "Sense +6",
    "7": "Sense +7",
    "8": "Sense +8",
    "9": "Sense +9",
    "10": "Sense +10, basic traps will cause 0 damage.",
    "name": "Perception",
    "passive": true,
    "stats": [
      {
        "sense": 1
      },
      {
        "sense": 2
      },
      {
        "sense": 3
      },
      {
        "sense": 4
      },
      {
        "sense": 5
      },
      {
        "sense": 6
      },
      {
        "sense": 7
      },
      {
        "sense": 8
      },
      {
        "sense": 9
      },
      {
        "sense": 10
      }
    ],
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Quick": {
    "1": "Dexterity +1",
    "2": "Dexterity +2",
    "name": "Quick",
    "passive": true,
    "stats": [
      {
        "dexterity": 1
      },
      {
        "dexterity": 2
      }
    ],
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Pure of mind": {
    "1": "Willpower +1",
    "2": "Willpower +2",
    "name": "Pure of mind",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Perseverance": {
    "1": "Willpower +1",
    "name": "Perseverance",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Magical Aptitude": {
    "1": "Magic +1",
    "2": "Magic +2",
    "3": "Magic +3",
    "4": "Magic +4",
    "5": "Magic +5",
    "6": "Magic +6",
    "7": "Magic +7",
    "8": "Magic +8",
    "9": "Magic +9",
    "name": "Magical Aptitude",
    "passive": true,
    "stats": [
      {
        "magic": 1
      },
      {
        "magic": 2
      },
      {
        "magic": 3
      },
      {
        "magic": 4
      },
      {
        "magic": 5
      },
      {
        "magic": 6
      },
      {
        "magic": 7
      },
      {
        "magic": 8
      },
      {
        "magic": 9
      },
      {
        "magic": 10
      }
    ],
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Magic Enthusiast": {
    "1": "Magic +1",
    "2": "Magic +2",
    "3": "Magic +3",
    "4": "Magic +4",
    "5": "Magic +5",
    "6": "Magic +6",
    "7": "Magic +7",
    "8": "Magic +8",
    "9": "Magic +9",
    "name": "Magical Enthusiast",
    "passive": true,
    "stats": [
      {
        "magic": 1
      },
      {
        "magic": 2
      },
      {
        "magic": 3
      },
      {
        "magic": 4
      },
      {
        "magic": 5
      },
      {
        "magic": 6
      },
      {
        "magic": 7
      },
      {
        "magic": 8
      },
      {
        "magic": 9
      },
      {
        "magic": 10
      }
    ],
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Arcane Inclination": {
    "1": "Magic +1",
    "2": "Magic +2",
    "name": "Arcane Inclination",
    "passive": true,
    "stats": [
      {
        "magic": 1
      },
      {
        "magic": 2
      },
      {
        "magic": 3
      },
      {
        "magic": 4
      },
      {
        "magic": 5
      },
      {
        "magic": 6
      },
      {
        "magic": 7
      },
      {
        "magic": 8
      },
      {
        "magic": 9
      },
      {
        "magic": 10
      }
    ],
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Arcane Tradition Focus": {
    "1": "Magic +1",
    "2": "Magic +2",
    "name": "Arcane Tradition Focus",
    "passive": true,
    "stats": [
      {
        "magic": 1
      },
      {
        "magic": 2
      },
      {
        "magic": 3
      },
      {
        "magic": 4
      },
      {
        "magic": 5
      },
      {
        "magic": 6
      },
      {
        "magic": 7
      },
      {
        "magic": 8
      },
      {
        "magic": 9
      },
      {
        "magic": 10
      }
    ],
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Arcane Tradition Prodigy": {
    "1": "Magic +1",
    "2": "Magic +2",
    "name": "Arcane Tradition Prodigy",
    "passive": true,
    "stats": [
      {
        "magic": 1
      },
      {
        "magic": 2
      },
      {
        "magic": 3
      },
      {
        "magic": 4
      },
      {
        "magic": 5
      },
      {
        "magic": 6
      },
      {
        "magic": 7
      },
      {
        "magic": 8
      },
      {
        "magic": 9
      },
      {
        "magic": 10
      }
    ],
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Astute": {
    "1": "Magic +1",
    "2": "Magic +2",
    "name": "Astute",
    "passive": true,
    "stats": [
      {
        "magic": 1
      },
      {
        "magic": 2
      },
      {
        "magic": 3
      },
      {
        "magic": 4
      },
      {
        "magic": 5
      },
      {
        "magic": 6
      },
      {
        "magic": 7
      },
      {
        "magic": 8
      },
      {
        "magic": 9
      },
      {
        "magic": 10
      }
    ],
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Basic God": {
    "1": "All Stats +1",
    "name": "Basic God",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Intermediate God": {
    "1": "All Stats +1",
    "name": "Intermediate God",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Advanced God": {
    "1": "All Stats +1",
    "name": "Advanced God",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Demi-God": {
    "1": "All Stats +1",
    "name": "Demi-God",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Full God": {
    "1": "All Stats +1",
    "name": "Full God",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Gift of Lightning": {
    "1": "Lightning damage +1%",
    "element": [
      "lightning"
    ],
    "name": "Gift of Lightning",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Adhere": {
    "1": "Makes an object sticky.",
    "element": [
      "mana"
    ],
    "name": "Adhere",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Aethersight": {
    "1": "Magical auras glow brightly for you.",
    "element": [
      "mana"
    ],
    "name": "Aethersight",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Animate Object": {
    "1": "An object animates under your control.",
    "element": [
      "mana"
    ],
    "name": "Animate Object",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Anthropomorphize": {
    "1": "A touched animal either gains human a characteristic.",
    "element": [
      "mana"
    ],
    "name": "Anthropomorphize",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Arboriate": {
    "1": "You become a walking tree up to 10ft tall.",
    "element": [
      "plant"
    ],
    "name": "Arboriate",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Arcane Eye": {
    "1": "You can see through a magical floating eyeball that flies around at your command.",
    "element": [
      "mana"
    ],
    "name": "Arcane Eye",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Astral Prison": {
    "1": "A creature is frozen in time and space within an invulnerable crystal shell.",
    "element": [
      "time"
    ],
    "name": "Astral Prison",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Astral Weapon": {
    "1": "A magical weapon appears in your hands until end of spell. It adds +1 to all your attacks.",
    "element": [
      "mana"
    ],
    "name": "Astral Weapon",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Magnetic Attract": {
    "1": "2 Objects are strongly magnetically attracted to each other if they come within 10 feet.",
    "name": "Magnetic Attract",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Auditory Illusion": {
    "1": "You create illusory noises that appear to come from a direction of your choice.",
    "name": "Auditory Illusion",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Beacon": {
    "1": "A touched object begins emitting a psychic pulse that draws the curiosity of all monsters within 1 mile.",
    "name": "Beacon",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Beast Form": {
    "1": "You transform into a mundane animal.",
    "name": "Beast Form",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Befuddle": {
    "1": "1 creature of your choice are unable to form new short-term memories for the duration of the spell.",
    "name": "Befuddle",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Bird Person": {
    "1": "Your arms turn into huge wings.",
    "name": "Bird Person",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Body Swap": {
    "1": "You switch bodies with a creature you touch. If one body dies, the other dies as well.",
    "name": "Body Swap",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Charm": {
    "1": "A creature treat you like a friend.",
    "name": "Charm",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Command": {
    "1": "A creature obeys a single, three-word command that does not harm it.",
    "name": "Command",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Comprehend": {
    "1": "You become fluent in all languages.",
    "name": "Comprehend",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Control Weather": {
    "1": " You may alter the type of weather at will, but you do not otherwise control it.",
    "name": "Control Weather",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Counterspell": {
    "1": "Chance to cancel a targets spell.",
    "name": "Counterspell",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Deafen": {
    "1": "Nearby creatures of your choice are deafened.",
    "name": "Deafen",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Disassemble": {
    "1": "Any of your body parts may be detached and reattached at will, without causing pain or damage. You can still control them.",
    "name": "Disassemble",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Disguise": {
    "1": "You may alter the appearance of 1 characters at will as long as they remain humanoid. Attempts to impersonate other characters will seem uncanny.",
    "name": "Disguise",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Displace": {
    "1": "Shift an object’s apparent position by up to 10cm.",
    "name": "Displace",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Earthquake": {
    "1": "The ground begins shaking violently. Structures may be damaged or collapse.",
    "element": [
      "earth"
    ],
    "name": "Earthquake",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Elasticity": {
    "1": "Your body can stretch up to 10cm.",
    "name": "Elasticity",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Elemental Sprite": {
    "1": "Summon an elemental spite.",
    "element": [
      "mana"
    ],
    "name": "Elemental Sprite",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Feast": {
    "1": "A huge table appears, laden with food.",
    "name": "Feast",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Filch": {
    "1": "1 visible item teleport to your hands.",
    "name": "Filch",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Flesh Warp": {
    "1": "A touched creature doubles or halves in size.",
    "name": "Flesh Warp",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Fog Cloud": {
    "1": "A cloud of dense fog spreads out from you.",
    "element": [
      "water"
    ],
    "name": "Fog Cloud",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Frenzy": {
    "1": "1 creature erupts in a frenzy of random violence.",
    "name": "Frenzy",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Random Gate": {
    "1": "A portal to a random plane opens.",
    "element": [
      "portal"
    ],
    "name": "Random Gate",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Gravity Shift": {
    "1": "You can change the direction of gravity (for yourself only) once every 6 seconds.",
    "element": [
      "gravity"
    ],
    "name": "Gravity Shift",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Haste": {
    "1": "Your movement speed is tripled.",
    "name": "Haste",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Hear Whispers": {
    "1": "You can hear the faintest sounds clearly.",
    "element": [
      "sound"
    ],
    "name": "Hear Whispers",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Hover": {
    "1": "An object hovers, frictionless, 2’ above the ground. Can hold up to 5 humanoids.",
    "name": "Hover",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Hypnotize": {
    "1": "A creature enters a trance and will truthfully answer L yes or no questions you ask it.",
    "name": "Hypnotize",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Illuminate": {
    "1": "???",
    "name": "Illuminate",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Increase Gravity": {
    "1": "The gravity in a nearby area triples.",
    "element": [
      "gravity"
    ],
    "name": "Increase Gravity",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Ironbane": {
    "1": "Any iron that touches you disintegrates.",
    "name": "Ironbane",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Knock": {
    "1": "All nearby locks, clasps, and buckles open.",
    "name": "Knock",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Leap": {
    "1": "You can jump up to 30’ at a time.",
    "name": "Leap",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Liquid Air": {
    "1": "The air becomes thick enough to swim in.",
    "element": [
      "wind"
    ],
    "name": "Liquid Air",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Magic Dampener": {
    "1": "All nearby magical effects have their effectiveness halved.",
    "name": "Magic Dampener",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Manse": {
    "1": "A sturdy, fully furnished cottage appears. You can permit and forbid entry to it at will. Lasts 12 hours.",
    "name": "Manse",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Marble Madness": {
    "1": "Your pockets are always full of marbles.",
    "name": "Marble Madness",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Masquerade": {
    "1": "1 targets appearances and voices become identical to yours.",
    "element": [
      "sound"
    ],
    "name": "Masquerade",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Miniaturize": {
    "1": "You and 1 other touched creatures are reduced to the size of a mouse.",
    "name": "Miniaturize",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Mirror Image": {
    "1": "1 illusory duplicates of yourself appear under your control.",
    "name": "Mirror Image",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Mirror Walk": {
    "1": "A mirror becomes a gateway to another mirror that you have looked into today.",
    "name": "Mirror Walk",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Multiarm": {
    "1": "You gain 1 extra arms until end of spell.",
    "name": "Multiarm",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Objectify": {
    "1": "You become any inanimate object between the size of a grand piano and an apple.",
    "name": "Objectify",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Ooze Form": {
    "1": "You become a living jelly.",
    "name": "Ooze Form",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Pacify": {
    "1": "1 creatures have a sudden aversion to violence.",
    "name": "Pacify",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Phantom Coach": {
    "1": "A ghostly coach appears until end of spell. It moves unnaturally fast over any terrain, even water.",
    "name": "Phantom Coach",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Phobia": {
    "1": "1 creatures are terrified of an object of your choice.",
    "name": "Phobia",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Primeval Surge": {
    "1": "A mundane animal grows to the size of an elephant and is enraged.",
    "name": "Primeval Surge",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Psychometry": {
    "1": "The system answers 1 yes or no questions about a touched object.",
    "name": "Psychometry",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Pull": {
    "1": "An object of any size is pulled 30’ directly towards you with the strength of 2 men. Lasts for one round.",
    "element": [
      "mana"
    ],
    "name": "Pull",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Push": {
    "1": "An object of any size is pushed 30’ directly away from you with the strength of 2 men. Lasts for one round.",
    "element": [
      "mana"
    ],
    "name": "Push",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Raise Spirit": {
    "1": "The spirit of a dead body manifests and may choose to answer questions.",
    "element": [
      "necromancy"
    ],
    "name": "Raise Spirit",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Read Mind": {
    "1": "You hear the surface thoughts of creatures.",
    "name": "Raise Spirit",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Repel": {
    "1": "2 objects are strongly magnetically repelled from each other if they come within 10 feet.",
    "name": "Repel",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Scry": {
    "1": "You can see through the eyes of a known creature.",
    "name": "Scry",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Sculpt Elements": {
    "1": "All inanimate material behaves like clay in your hands.",
    "name": "Sculpt Elements",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Shroud": {
    "1": "1 creatures become invisible until they move",
    "name": "Shroud",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Shuffle": {
    "1": "Reduces movement speed of a target by 10%.",
    "name": "Shuffle",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Swap": {
    "1": "2 creatures instantly switch places.",
    "name": "Swap",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Sleep": {
    "1": "1 creatures fall into a light sleep.",
    "name": "Sleep",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Smoke Form": {
    "1": "Your body becomes living smoke.",
    "name": "Smoke Form",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Snail Knight": {
    "1": "10 minutes after casting, a knight sitting astride a giant snail rides into view. He is able to answer most questions related to quests and chivalry, and may aid you if he finds you worthy.",
    "name": "Snail Knight",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Sniff": {
    "1": "You can smell even the faintest traces of scents.",
    "name": "Sniff",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Sort": {
    "1": "Inanimate items sort themselves according to categories you set. The categories must be visually verifiable.",
    "name": "Sort",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Spatial Distortion": {
    "1": "A nearby inanimate object no bigger than a bedroom shrinks to the size of an apple.",
    "name": "Spatial Distortion",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Spectacle": {
    "1": "A clearly unreal but impressive illusion of your choice appears, under your control. It may be up to the size of a palace and has full motion and sound.",
    "name": "Spectacle",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Spider Climb": {
    "1": "You can climb surfaces like a spider.",
    "name": "Spider Climb",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Summon Cube": {
    "1": "Once per second, (6 times per round) you may summon or banish 3-foot-wide cubes of earth. New cubes must be affixed to the earth or to other cubes.",
    "name": "Summon Cube",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Swarm": {
    "1": "You become a swarm of crows, rats, or piranha.",
    "name": "Swarm",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Telekinesis": {
    "1": "You may mentally move items.",
    "name": "Telekinesis",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Telepathy": {
    "1": "2 creatures can hear each other’s thoughts.",
    "name": "Telepathy",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Tesser": {
    "1": "An object disappears and reappears on the ground in a visible, clear area up to 30’ away.",
    "name": "Tesser",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Thaumaturgic Anchor": {
    "1": "Object becomes the target of every spell cast near it.",
    "name": "Thaumaturgic Anchor",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Thicket": {
    "1": "A thicket of trees and dense brush up to 30’ wide suddenly sprouts up.",
    "name": "Thicket",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Time Jump": {
    "1": "An object jumps 10 minutes into the future.",
    "element": [
      "time"
    ],
    "name": "Time Jump",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Time Rush": {
    "1": "Time in a nearby area becomes 10 times faster.",
    "element": [
      "time"
    ],
    "name": "Time Rush",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Time Slow": {
    "1": "Time in a nearby area slows to 10%.",
    "element": [
      "time"
    ],
    "name": "Time Slow",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Transfer Heat": {
    "1": "You may transfer heat or cold between two inanimate objects.",
    "name": "Transfer Heat",
    "element": [
      "fire"
    ],
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "True Sight": {
    "1": "You see the true nature of your surroundings.",
    "name": "True Sight",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Upwell": {
    "1": "A spring appears and starts gushing seawater.",
    "name": "Upwell",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Vision": {
    "1": "You have total control over what a creature sees.",
    "name": "Vision",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Visual Illusion": {
    "1": "A silent, immobile, illusion of your choice appears, up to the size of a bedroom.",
    "name": "Visual Illusion",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Ward": {
    "1": "A silver circle 30’ across appears on the ground. Choose one thing that cannot cross it: Living creatures, dead creatures, non-human creatures, projectiles or metal.",
    "name": "Ward",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Web": {
    "1": "Your hands can shoot thick webbing.",
    "name": "Web",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Wizard Lock": {
    "1": "A door is magically sealed.",
    "name": "Wizard Lock",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Wizard Mark": {
    "1": "Your finger can shoot a stream of brightly-colored paint. This paint is only visible to wizards, and can be seen at any distance, even through solid objects. Fades after L days.",
    "name": "Wizard Mark",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Agile": {
    "1": "Dexterity +1",
    "name": "Agile",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Beast Combo Strike": {
    "1": "Both you and your Beast companion attack the same target.",
    "name": "Beast Combo Strike",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Beast Intercept": {
    "1": "Your best intercepts the target.",
    "name": "Beast Intercept",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Blessed Divine Smite": {
    "1": "Your Divine Smite strikes are further empowered by your deity’s grace. ",
    "name": "Blessed Divine Smite",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Best Defense is a Strong Offense": {
    "1": "On the first strike you receive your defense is used to damage the target instead of reducing damage.",
    "name": "Best Defense is a Strong Offense",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Blinding Strike": {
    "1": "Your weapon strike momentary blinds the target.",
    "name": "Blinding Strike",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Bloodline of Fire": {
    "1": "Fire +1%.",
    "name": "Bloodline of Fire",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Bloodhunt": {
    "1": "You can sense blood from far away.",
    "2": "When your target is wounded you gain +1 to a random stat.",
    "element": [
      "blood"
    ],
    "name": "Bloodhunt",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Born Sneaky": {
    "1": "Dexterity +1",
    "name": "Born Sneaky",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Cheap Shot": {
    "1": "Can only be use when a target is not targeting you.",
    "name": "Cheap Shot",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Built like a": {
    "1": "You are a big strong target. +1 Strength, -1 Dexterity.",
    "name": "Built like a",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Cleave": {
    "1": "The follow through from your melee weapon strikes.",
    "name": "Cleave",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Commanding Presence": {
    "1": "Command points +1 for every 10 Charisma.",
    "name": "Commanding Presence",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Conservator": {
    "1": "You have the ability to identify magic items. (Improved inspect)",
    "name": "Conservator",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Dragonborn Heritage": {
    "1": "Your lineage allows you recover from your wounds faster than normal.",
    "name": "Dragonborn Heritage",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Great Fortitude": {
    "1": "You are extraordinarily healthier than normal.",
    "name": "Great Fortitude",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Greater Arcane Recovery": {
    "1": "You can regain higher magical energy than normal.",
    "name": "Greater Arcane Recovery",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Improved Arcane Recovery": {
    "1": "You can regain higher magical energy than normal.",
    "name": "Improved Arcane Recovery",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Favored Enemy": {
    "1": "You know how to exploit your favored enemies’ vulnerabilities in combat.",
    "name": "Favored Enemy",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Hamstring": {
    "1": "You slash the tendons behind a creature’s leg.",
    "name": "Hamstring",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Impairing Critical": {
    "1": "Your critical blows are so fierce they can cause temporary debilitating effects.",
    "name": "Impairing Critical",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Aura": {
    "1": "You can now produce an Aura.",
    "name": "Aura",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Cloak of Shadows": {
    "1": "Wraps you with the shadows around you making you harder to detect.",
    "element": [
      "shadow"
    ],
    "name": "Cloak of Shadows",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Improved Dodge": {
    "1": "You can attack while dodging.",
    "name": "Improved Dodge",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Improved Gift of Lightning": {
    "1": "Lightning +2%.",
    "element": [
      "lightning"
    ],
    "name": "Improved Gift of Lightning",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Misty Escape": {
    "1": "Mist appears around you.",
    "element": [
      "water"
    ],
    "name": "Misty Escape",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Improved Natural Recovery": {
    "1": "Your natural recovery is increased.",
    "name": "Improved Natural Recovery",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Turn the Unholy": {
    "1": "???",
    "name": "Turn the Unholy",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Turn Undead": {
    "1": "Undead species will be damaged in an area around you.",
    "name": "Turn Undead",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Turn the Faithless": {
    "1": "Those without Faith will turn around.",
    "name": "Turn the Faithless",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Uncanny Dodge": {
    "1": "Sometimes hits did not land on you.",
    "2": "Target character's dodging is increased by 90% and your Movement Speed is increased by 20%.",
    "name": "Uncanny Dodge/evasion",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Indomitable": {
    "1": "+1 strength.",
    "name": "Indomitable",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Last Stand": {
    "1": "For the next 3 seconds you cannot die.",
    "name": "Last Stand",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Natural Diplomat": {
    "1": "+1 Charisma.",
    "name": "Natural Diplomat",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Nature Sense": {
    "1": "+1 Sense outside of settlements.",
    "name": "Nature Sense",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Poisoncraft": {
    "1": "Poison +1%.",
    "element": [
      "toxic"
    ],
    "name": "Poisoncraft",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Rejuvenate": {
    "1": "Targets HP is recovered by 10% of their max HP over the next 5 seconds.",
    "name": "Rejuvenate",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Shadow Strike": {
    "1": "Striking from a shadow, dealing +50% damage to unaware targets.",
    "element": [
      "shadow"
    ],
    "classes": [
      "Rouge"
    ],
    "species": [],
    "name": "Shadow Strike",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [
        "Rouge"
      ],
      "species": []
    }
  },
  "Stealth": {
    "1": "Become invisible for a short period of time, as long as you do not attack anything or take damage.",
    "element": [
      "shadow"
    ],
    "classes": [
      "Rouge"
    ],
    "species": [],
    "name": "Stealth",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [
        "Rouge"
      ],
      "species": []
    }
  },
  "Sunlight Sensitivity": {
    "1": "All stats -1 in sunlight.",
    "2": "Your MP recovers slightly slower in sunlight.",
    "3": "Your Stamina recovery is reduced 25% in sunlight.",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    "10": "Checking to see if innate skills works",
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
    "passive": true,
    "negative": true,
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
    "1": "All stats +1 in sunlight!",
    "2": "Your MP recovers slightly faster in sunlight.",
    "3": ".",
    "name": "Sunlight Adaptation",
    "element": [
      "light"
    ],
    "classes": [
      "Sun Knight"
    ],
    "species": [],
    "passive": true,
    "links": {
      "spells": [],
      "classes": [
        "Sun Knight"
      ],
      "species": []
    }
  },
  "Tool Focus": {
    "1": "+1 tool proficiency.",
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
    "passive": true,
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
    "1": "Your critical can critical!",
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
    "passive": true,
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
    "1": "Potions are 10% better.",
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
    "passive": true,
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
    "1": "Opponents always drop at least one coin.",
    "2": "Coins gained +1%.",
    "3": "Every new town you visit, +100 coins.",
    "4": "Donkey Ears.",
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
    "passive": true,
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
    "1": "Wraps bubbles of air around the targets heads.",
    "passive": false,
    "element": [
      "water"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Breathing Bubbles",
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
    "1": "Increases your Endurance for a period of time.",
    "passive": false,
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
    "name": "Fortify",
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
    "1": "Drives spikes from the ground.",
    "passive": false,
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
    "name": "Impalement",
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
    "1": "Summons and artillery plant.",
    "element": [
      "plant"
    ],
    "classes": [
      "Mage"
    ],
    "species": [
      ""
    ],
    "name": "Summon Artillery Plant",
    "passive": false,
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
    "1": "Shoots a group of acid spores in the general direction of the target.",
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
    "name": "Acid Spores",
    "passive": false,
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
    "1": "Shoots a spray of corrosive liquid.",
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
    "name": "Corrosive Spray",
    "passive": false,
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
    "1": "Dust is thrown from your hand at the target.",
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
    "passive": false,
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
    "1": "A wall of living plant tentacles blocks the way.",
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
    "passive": false,
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
    "1": "",
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
    "passive": false,
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
    "1": "Dust is blasted in all directions",
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
    "passive": false,
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
    "1": "Frost coats the targets body, slowing it down but increasing it's endurance.",
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
    "passive": false,
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
    "1": "Healing on one target is increased.",
    "2": "Healing in this area is increased.",
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
    "passive": false,
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
    "1": "Balls of ice fall from the sky.",
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
    "passive": false,
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
    "1": "It starts to gently rain.",
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
    "passive": false,
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
    "1": "Restores some HP to the target.",
    "2": "Restores some Stamina to the target.",
    "3": "Cures a single status effect.",
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
    "passive": false,
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
    "1": "A mixture of ice and snow blasts the area.",
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
    "passive": false,
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
    "1": "A lance of steam is blasted at the target.",
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
    "passive": false,
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
    "1": "Can use holy objects, cannot use unholy objects.",
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
    "passive": true,
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
    "1": "Everything gets much colder.",
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
    "passive": false,
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
    "1": "",
    "element": [
      "ice"
    ],
    "classes": [
      "Mage"
    ],
    "species": [
      ""
    ],
    "name": "Soothing Cold",
    "passive": false,
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
    "1": "Ice is shot out in an arc before you.",
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
    "passive": false,
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
    "1": "",
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
    "passive": false,
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
    "1": "",
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
    "passive": false,
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
    "1": "Hail is shot at a target.",
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
    "passive": false,
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
    "1": "",
    "name": "Arcane Stitch",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Mass Cryotherapy": {
    "1": "",
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
    "passive": false,
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
    "1": "",
    "name": "Cryotherapy",
    "passive": false,
    "element": [
      "ice"
    ],
    "classes": [
      "Mage"
    ],
    "species": [
      ""
    ],
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
    "1": "",
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
    "passive": false,
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
    "1": "",
    "element": [
      "water"
    ],
    "classes": [
      "Mage"
    ],
    "species": [
      ""
    ],
    "name": "Mass Cleanse Wounds",
    "passive": false,
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
    "1": "",
    "element": [
      "water"
    ],
    "classes": [
      "Mage"
    ],
    "species": [
      ""
    ],
    "name": "Cleanse Wounds",
    "passive": false,
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
    "1": "",
    "name": "Ice Breaker",
    "passive": false,
    "element": [
      "ice"
    ],
    "classes": [
      "Mage"
    ],
    "species": [
      ""
    ],
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
    "1": "Suck the blood from a target to restore HP.",
    "name": "Blood Sucker",
    "passive": false,
    "element": [
      "blood"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
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
    "1": "Blood is taken from a target to restore your HP.",
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
    "passive": false,
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
    "1": "Blood is taken from around you to restore your HP.",
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
    "passive": false,
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
    "1": "",
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
    "passive": false,
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
    "1": "A swam of mosquitos bite the target.",
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
    "passive": false,
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
    "1": "It starts to rain blood.",
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
    "passive": false,
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
    "1": "Mark a target so that it will receive all of the damage you receive.",
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
    "passive": false,
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
    "1": "",
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
    "passive": false,
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
    "1": "",
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
    "passive": false,
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
    "1": "",
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
    "passive": false,
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
    "1": "",
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
    "passive": false,
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
    "1": "Undead hands rise from underground, attacking characters that stand in blood surfaces and clouds. Each target can become Crippled.",
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
    "passive": false,
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
    "1": "",
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
    "passive": false,
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
    "1": "Create a cloud of smoke in an area, setting Suffocating and Blind on all within.",
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
    "passive": false,
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
    "1": "",
    "element": [
      "shadow"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Death Wish",
    "passive": false,
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
    "1": "",
    "element": [
      "shadow"
    ],
    "classes": [
      "Necromancer"
    ],
    "species": [
      ""
    ],
    "name": "Raise Bone Widow",
    "passive": false,
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
    "1": "The sky weeps bloody tears. Bolts of coagulated blood fall on targets in the area, setting Disease and Decaying. Turns all water in the area into blood.",
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
    "passive": false,
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
    "1": "",
    "element": [
      "shadow"
    ],
    "classes": [
      "Necromancer"
    ],
    "species": [
      ""
    ],
    "name": "Raise Bloated Corpse",
    "passive": false,
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
    "1": "",
    "name": "Living on the Edge",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Summon Small Bonecrawler": {
    "1": "",
    "element": [
      "shadow"
    ],
    "classes": [
      "Necromancer"
    ],
    "species": [
      ""
    ],
    "name": "Summon Small Bonecrawler",
    "passive": false,
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
    "1": "",
    "element": [
      "shadow"
    ],
    "classes": [
      "Necromancer"
    ],
    "species": [
      ""
    ],
    "name": "Summon Multiple Skeleton Warriors",
    "passive": false,
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
    "1": "",
    "element": [
      "shadow"
    ],
    "classes": [
      "Necromancer"
    ],
    "species": [
      ""
    ],
    "name": "Summon Skeleton Warrior",
    "passive": false,
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
    "1": "",
    "element": [
      "shadow"
    ],
    "classes": [
      "Necromancer"
    ],
    "species": [
      ""
    ],
    "name": "Raise Skeleton Warrior",
    "passive": false,
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
    "1": "",
    "element": [
      "shadow"
    ],
    "classes": [
      "Necromancer"
    ],
    "species": [
      ""
    ],
    "name": "Summon Multiple Skeleton Archers",
    "passive": false,
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
    "1": "",
    "element": [
      "shadow"
    ],
    "classes": [
      "Necromancer"
    ],
    "species": [
      ""
    ],
    "name": "Deaths Touch",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Stare Of The Overlord",
    "passive": false,
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
    "1": "Pulls the heart out of a weakened target.",
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
    "passive": false,
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
    "1": "The targets body rejects their own bones and becomes a blob.",
    "element": [
      "shadow"
    ],
    "classes": [
      "Necromancer"
    ],
    "species": [
      ""
    ],
    "name": "Bone Rejection",
    "passive": false,
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
    "1": "",
    "element": [
      "shadow"
    ],
    "classes": [
      "Necromancer"
    ],
    "species": [
      ""
    ],
    "name": "Spectral Wave",
    "passive": false,
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
    "1": "Armour of bones covers you, raising your endurance.",
    "element": [
      "shadow"
    ],
    "classes": [
      "Necromancer"
    ],
    "species": [
      ""
    ],
    "name": "Bone Armour",
    "passive": false,
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
    "1": "",
    "element": [
      "shadow"
    ],
    "classes": [
      "Necromancer"
    ],
    "species": [
      ""
    ],
    "name": "Negative Burst",
    "passive": false,
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
    "1": "An Elder Lich is summoned.",
    "element": [
      "shadow"
    ],
    "classes": [
      "Necromancer"
    ],
    "species": [
      ""
    ],
    "name": "Raise Elder Lich",
    "passive": false,
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
    "1": "",
    "element": [
      "shadow"
    ],
    "classes": [
      "Necromancer"
    ],
    "species": [
      ""
    ],
    "name": "Deaths Arrival",
    "passive": false,
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
    "1": "A weak skeleton archer is summoned",
    "element": [
      "shadow"
    ],
    "classes": [
      "Necromancer"
    ],
    "species": [
      ""
    ],
    "name": "Summon Skeleton Archer",
    "passive": false,
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
    "1": "Using a corpse, raise up a weak skeleton archer.",
    "element": [
      "shadow"
    ],
    "classes": [
      "Necromancer"
    ],
    "species": [
      ""
    ],
    "name": "Raise Skeleton Archer",
    "passive": false,
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
    "1": "Using a corpse, raise up a death knight.",
    "element": [
      "shadow"
    ],
    "classes": [
      "Necromancer"
    ],
    "species": [
      ""
    ],
    "name": "Raise Death Knight",
    "passive": false,
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
    "1": "Has a chance of causing Fear.",
    "2": "Has a chance of causing Panic.",
    "3": "Has a chance of causing Confusion.",
    "4": "Has a chance of causing Insanity.",
    "5": "Has a chance of causing Instant Death.",
    "element": [
      "shadow"
    ],
    "classes": [
      "Necromancer"
    ],
    "species": [
      ""
    ],
    "name": "Aura of Despair",
    "passive": false,
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
    "1": "Rabbit ears grow from you head, along with the perks of that.",
    "element": [
      "beast"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Rabbit Ears",
    "passive": false,
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
    "1": "Shoot an arrow of mana.",
    "name": "Magic Arrow",
    "passive": false,
    "element": [
      "mana"
    ],
    "classes": [
      "Mage"
    ],
    "species": [
      ""
    ],
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
    "1": "Summon a single undead.",
    "element": [
      "shadow"
    ],
    "classes": [
      "Necromancer"
    ],
    "species": [
      ""
    ],
    "name": "Summon Undead",
    "passive": false,
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
    "1": "Shoot an arrow of acid.",
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
    "passive": false,
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
    "1": "Send a message instantly to someone else.",
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
    "passive": false,
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
    "1": "Shoots a ball of fire directly in front of you.",
    "2": "Shoots a ball of fire directly in front of you.",
    "name": "Fireball",
    "passive": false,
    "species": [],
    "classes": [
      "Mage"
    ],
    "element": [
      "fire"
    ],
    "links": {
      "spells": [],
      "classes": [
        "Mage"
      ],
      "species": []
    }
  },
  "Fire Damage": {
    "1": "Increased fire damage by 1%.",
    "2": "Increased fire damage by 2%.",
    "note": "Increased fire damage by 1%.",
    "name": "Fire Damage",
    "element": [
      "none"
    ],
    "classes": [],
    "species": [],
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
    "1": "The user can now fly.",
    "name": "Fly",
    "passive": false,
    "element": [
      "wind"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
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
    "1": "Shoots a ball of ice.",
    "2": "Shoots a larger ball of ice.",
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
    "passive": false,
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
    "1": "Lightning appears.",
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
    "passive": false,
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
    "1": "",
    "element": [
      "none"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Lopsided Duel",
    "passive": false,
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
    "1": "Reduces a targets speed.",
    "element": [
      "time"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Slow",
    "passive": false,
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
    "1": "Shoots lighting in the form of chinese dragons.",
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
    "passive": false,
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
    "1": "",
    "element": [
      "lightning"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Chain Dragon Lightning",
    "passive": false,
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
    "1": "",
    "element": [
      "None"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Create Item",
    "passive": false,
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
    "1": "Increases magic stat for a moment",
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
    "passive": false,
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
    "1": "Teleports you to a predetermined location.",
    "element": [
      "portal"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Teleportation",
    "passive": false,
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
    "1": "Shoots out a spark of hell flame.",
    "name": "Hell Flame",
    "passive": false,
    "element": [
      "fire"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
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
    "1": "Drop Napalm on an area.",
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
    "passive": false,
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
    "1": "Summons an army of the undead.",
    "element": [
      "shadow"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Undeath Army",
    "passive": false,
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
    "1": "Smite a target wit the power of the stars.",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Astral Smite",
    "passive": false,
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
    "1": "Target is hit with death.",
    "element": [
      "shadow"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Death",
    "passive": false,
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
    "1": "Target cannot teleport.",
    "element": [
      "time"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Dimensional Lock",
    "passive": false,
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
    "1": "Drains the mana and stamina of a target.",
    "element": [
      "mana"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Energy Drain",
    "passive": false,
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
    "1": "Causes an explosion in an area.",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Explosion",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Bless of Titania",
    "passive": false,
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
    "1": "Thunder clouds form in the distance coming to you.",
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
    "passive": false,
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
    "1": "Can be used to reject un-rejectable quests.",
    "element": [
      "mana"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Rejection",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Lead of Yatagarasu",
    "passive": false,
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
    "1": "Causes a nuclear blast in an area.",
    "element": [
      "fire"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Nuclear Blast",
    "passive": false,
    "note": "leaves behind radiation.",
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
    "1": "",
    "element": [
      "shadow"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Perfect Unknowable",
    "passive": false,
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
    "1": "",
    "element": [
      "time"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Temporal Stasis",
    "passive": false,
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
    "1": "Causes death to a target, even one immune to death.",
    "element": [
      "shadow"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "True Death",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Vermilion Nova",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Armageddon",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Body of Effulgent Beryl",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Control Amnesia",
    "passive": false,
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
    "1": "Create a fortress using the surrounding materials.",
    "element": [
      "Earth"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Create Fortress",
    "passive": false,
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
    "1": "A meteor falls....Somewhere over there...",
    "element": [
      "Earth"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Meteor Fall",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Reality Slash",
    "passive": false,
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
    "1": "",
    "element": [
      "Time"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Time Stop",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Ultimate Disturb",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Uriel",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Absorption",
    "passive": false,
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
    "1": "Wraps a target in a s",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Anti-Life Cocoon",
    "passive": false,
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
    "1": "Your information is blocked from others reading it.",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Anti-Information Magic Wall",
    "passive": false,
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
    "1": "A black hole appears sucking everything inside.",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Black Hole",
    "passive": false,
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
    "1": "Reduces the damage from breath attacks.",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Breath Ward",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Burst",
    "passive": false,
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
    "1": "Charms a single person.",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Charm Person",
    "passive": false,
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
    "1": "Makes you invisible!",
    "element": [
      "Shadow"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Invisibility",
    "passive": false,
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
    "1": "",
    "element": [
      "Light"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Complete Vision",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Conflict Karma",
    "passive": false,
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
    "1": "",
    "element": [
      "Sound"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Banshee"
    ],
    "name": "Cry of the Banshee",
    "passive": false,
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
    "1": "Cures a single instance of poison in the target.",
    "element": [
      "plant"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Cure Poison",
    "passive": false,
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
    "1": "",
    "element": [
      "shadow"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Dark Wing",
    "passive": false,
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
    "1": "A spell that can briefly hinder teleportation effects that has their destination near the caster, buying them several seconds of time, which the caster will typically use to flee or prepare an attack. In addition, the spell also informs the caster of how many beings will be teleporting into their vicinity.",
    "element": [
      "time"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Delay Teleportation",
    "passive": false,
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
    "1": "The spell is used to detect magical traps or magic items that are hidden in the midst of the user's presence.",
    "element": [
      "mana"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Detect Magic",
    "passive": false,
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
    "1": "This spell allows the user to identify the enemy's estimated level.",
    "element": [
      "mana"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Discern Enemy",
    "passive": false,
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
    "1": "A spell that displays what it sees on a flat, magical screen. The screen can also be expanded or shrunken at will.",
    "element": [
      "light"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Distant Vision",
    "passive": false,
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
    "1": "When used on a living being, a dominee cannot lie to their dominator. It is a stronger spell than [Charm Person] as it can manipulate a person according to the magic caster’s will.",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Dominate",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Draconic Power",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Dragonbane",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Drifting Master Mine",
    "passive": false,
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
    "1": "",
    "element": [
      "Earth"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Explosive Land Mine",
    "passive": false,
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
    "1": "It gives the user the ability to fake his/her HP.",
    "element": [
      "mana"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "False Data: Life",
    "passive": false,
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
    "1": "Gives the user the ability to fake his/her MP.",
    "element": [
      "mana"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "False Data: Mana",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Field of Force",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Floating Eye",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Freedom",
    "passive": false,
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
    "1": "Summons a portal, allowing travel of a large number of people over great distances. It has no limits on distance and a 0% chance of teleport mishaps. It is considered to be the highest tier of teleportation magic.",
    "element": [
      "portal"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Gate",
    "passive": false,
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
    "1": "A spiraling black ball of gravity.",
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
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Break Item",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Full Potential",
    "passive": false,
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
    "1": "",
    "element": [
      "metal"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Hardening",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Lethal",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Luck",
    "passive": false,
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
    "1": "",
    "name": "Magic Accumulation",
    "passive": false,
    "element": [
      "mana"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
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
    "1": "",
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
    "passive": false,
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
    "1": "",
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
    "passive": false,
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
    "1": "",
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
    "passive": false,
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
    "1": "",
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
    "passive": false,
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
    "1": "",
    "element": [
      "light"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Heavenly Aura",
    "passive": false,
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
    "1": "A spell that restricts a target's movement with bones and can deeply piece it through their flesh.",
    "element": [
      "shadow"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Hold of Ribs",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Indomitability",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Infinity Wall",
    "passive": false,
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
    "1": "Allows the caster to view the health values of an enemy.",
    "name": "Life Essence",
    "passive": false,
    "element": [
      "mana"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
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
    "1": "",
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
    "passive": false,
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
    "1": "",
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
    "passive": false,
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
    "1": "",
    "element": [
      "light"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Magic Ward: Holy",
    "passive": false,
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
    "1": "Identifies MP of the target.",
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
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Mantle of Chaos",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Dominate Person",
    "passive": false,
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
    "1": "Gives a group of people the ability to fly.",
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
    "passive": false,
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
    "1": "Constricts a large number of creatures, rendering them unable to move.",
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
    "name": "Mass Hold Species",
    "passive": false,
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
    "1": "",
    "element": [
      "fire"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Nuclear Mine",
    "passive": false,
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
    "1": "Creates a large obsidian sword that will lock on to a target and hone in like a missile. It is incredibly difficult to destroy a sword made of magic with a physical attack. By using \"Triple Maximize Magic,\" The Obsidian Sword constructs can only be utilized as an offensive tool and cannot be used to defend oneself. This was because the obsidian swords suffered from a massive loss of durability if used to receive the brunt of an opponent’s attack. If used defensively, the swords’ durability would rapidly diminish until they shatter.",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Obsidian Sword",
    "passive": false,
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
    "1": "Causes paralysis in the target, limiting or preventing them from using physical movement, through slight physical functions are still possible, such as turning their head or speaking.",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Paralysis",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Paranormal Intuition",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Penetrate Up",
    "passive": false,
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
    "1": "The spell allows user to convert his magic caster levels into an equivalent number of warrior levels. By using that spell, he can temporarily become a half-baked level 100 warrior. It also carries the benefit of being able to use certain pieces of arms and armour that will normally require specific job classes to access without penalty. This includes freely utilizing any weapons and its abilities, which is seen during his fight with Shalltear. However, there are many drawbacks to that spell. The first weakness is that he cannot cast other spells while the magic is in effect. In addition, he will not gain any special warrior skills from the spell, and his recalculated ability scores will be lower than an actual warrior. Secondly, sustaining the transformation spell and other magic will both lower his mana and mana recovery rates to zero. This form is enough when matching blades with second-rate combatants like priests and the like, but he will stand no chance of winning against an opponent who is a dedicated warrior.",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Perfect Warrior",
    "passive": false,
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
    "1": "It is an offensive-type spell that brings forth a ray of negative energy to damage the living. However, against non-living beings, it will heal them instead.",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Ray of Negative Energy",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Remote Viewing",
    "passive": false,
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
    "1": "A spell that creates a barrier to ward off the low-level undead.",
    "element": [
      "light"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Repel Undeath",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Resistance from Natural Weapons",
    "passive": false,
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
    "1": "",
    "element": [
      "light"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "See Through",
    "passive": false,
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
    "1": "",
    "element": [
      "mana"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Sense Enemy",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Sensor Boost",
    "passive": false,
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
    "1": "A spell that invokes a tornado, with sharks inside.",
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
    "name": "Sharks Cyclone",
    "passive": false,
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
    "1": "",
    "element": [
      "sound"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Shockwave",
    "passive": false,
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
    "1": "A spell that throws an uncountable amount of bone spears at the target.",
    "element": [
      "shadow"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Thousand Bone Lance",
    "passive": false,
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
    "1": "Creates a dark space where lights do not shine.",
    "element": [
      "shadow"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "True Dark",
    "passive": false,
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
    "1": ": A spell used on specific kinds of undead summons. Allowing you to see through that undead's eye sockets.",
    "element": [
      "shadow"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Undeath Slave Sight",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Wall of Protection from Arrows",
    "passive": false,
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
    "1": "Creates a wall of skeletons that can move and fight to a certain degree.",
    "element": [
      "shadow"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Wall of Skeletons",
    "passive": false,
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
    "1": "",
    "element": [
      "toxic"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Acid Immunity",
    "passive": false,
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
    "1": "",
    "element": [
      "mana"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Arcane Vision",
    "passive": false,
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
    "1": "",
    "element": [
      "shadow"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Black Halo",
    "passive": false,
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
    "1": "",
    "element": [
      "shadow"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Dark Soul",
    "passive": false,
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
    "1": "",
    "element": [
      "shadow"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Dark Wisdom",
    "passive": false,
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
    "1": "",
    "element": [
      "shadow"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Despair Aura",
    "passive": false,
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
    "1": "",
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
    "passive": false,
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
    "1": "",
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
    "passive": false,
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
    "1": "",
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
    "passive": false,
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
    "1": "",
    "element": [
      "shadow"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Negative Protection",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Slashing Damage Resistance",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Piercing Damage Resistance",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Status Damage",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Turn Resistance",
    "passive": false,
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
    "1": "",
    "element": [
      "shadow"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Undead Blessing",
    "passive": false,
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
    "1": "",
    "element": [
      "shadow"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Undead Lieutenant",
    "passive": false,
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
    "1": "",
    "element": [
      "shadow"
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Unholy Protection",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Biological Penalties Resistance",
    "passive": false,
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
    "1": "",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Bludgeoning Vulnerability",
    "passive": false,
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
    "1": "Reduces the chances of someone landing a critical hit on you.",
    "element": [
      ""
    ],
    "classes": [
      ""
    ],
    "species": [
      ""
    ],
    "name": "Critical Hit Immunity",
    "passive": false,
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
    "1": "",
    "name": "Death Immunity",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Disease Immunity": {
    "1": "",
    "name": "Disease Immunity",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Weak To Fire": {
    "1": "",
    "name": "Weak To Fire",
    "element": [
      "fire"
    ],
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Eating, Drinking, and Breathing are Unnecessary": {
    "1": "",
    "name": "Eating, Drinking, and Breathing are Unnecessary",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Energy Drain Immunity": {
    "1": "",
    "name": "Energy Drain Immunity",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Good, Light and Holy Vulnerability": {
    "1": "",
    "name": "Good, Light and Holy Vulnerability",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Good and Holy Consecrated Areas Vulnerability": {
    "1": "",
    "name": "Good and Holy Consecrated Areas Vulnerability",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Mind-affecting Immunity": {
    "1": "",
    "name": "Mind-affecting Immunity",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Necromancy Resistance": {
    "1": "",
    "name": "Necromancy Resistance",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Paralysis Immunity": {
    "1": "",
    "name": "Paralysis Immunity",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Physical Penalty Resistance": {
    "1": "",
    "name": "Physical Penalty Resistance",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Poisoning Immunity": {
    "1": "",
    "name": "Poisoning Immunity",
    "element": [
      "toxic"
    ],
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Recover by Negative Energy": {
    "1": "",
    "name": "Recover by Negative Energy",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Sleep Immunity": {
    "1": "",
    "name": "Sleep Immunity",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Rite of Darkness": {
    "1": "",
    "name": "Rite of Darkness",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Undead Aura": {
    "1": "",
    "name": "Undead Aura",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Undead Domination": {
    "1": "",
    "name": "Undead Domination",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Undead Strengthening": {
    "1": "",
    "name": "Undead Strengthening",
    "passive": false,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Blood Magic": {
    "1": "For as long as this mode is active, the caster sacrifices health to power spells instead of expending mana, but effects that heal the blood mage are much less effective than normal.",
    "element": [
      "blood"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "name": "Blood Magic",
    "passive": false,
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
    "1": "The blood mage sucks the life-force from an ally, healing the caster but potentially killing the ally. This healing is not affected by the healing penalty of Blood Magic.",
    "element": [
      "blood"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "name": "Blood Sacrifice",
    "passive": false,
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
    "1": "The blood of all hostile targets in the area boils within their veins, inflicting severe damage. Creatures without blood are immune.",
    "element": [
      "blood"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "name": "Blood Wound",
    "passive": false,
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
    "1": "The blood mage forcibly controls the target’s blood, making the target an ally of the caster. If the target resists, it still takes great damage from the manipulation of its blood. Creatures without blood are immune.",
    "element": [
      "blood"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "name": "Blood Control",
    "passive": false,
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
    "1": ".",
    "element": [
      "blood"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "name": "Blood Dominion",
    "passive": false,
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
    "1": ".",
    "element": [
      "blood"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "name": "Blood Domination",
    "passive": false,
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
    "1": "A skill possessed by all vampires, their blood lust (Health) is shown by the color of their eyes.",
    "element": [
      "blood"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "name": "Vampire Eyes",
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
    "1": "A form of Blood control. Blood thickens and becomes more impervious to damage, and becomes like Armour. Reduce the amount of damage taken in an attack and able to be moved around the body freely to varying degrees base on mastery of control.",
    "element": [
      "blood"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "name": "Blood Hardening",
    "passive": false,
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
    "1": "A skill that will fire out a red line of energy from the user's hands in the shape of a claw. To use the skill the user must use their own blood causing -1 HP per Blood swipe.",
    "element": [
      "blood"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "name": "Blood Swipe",
    "passive": false,
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
    "1": "A skill that vampires don't normally use. After firing off the blood bullet, use an immense amount of control to force the shot to remain inside the victim. It had entered a part of their body but never left it.  The blood bullet was a condensed form of aura, and through blood control, one was able to make the blood bullet inside the victims body expand and go wild. Destroying a part of a victim from the inside out.",
    "element": [
      "blood"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "name": "Blood Expand",
    "passive": false,
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
    "1": "",
    "element": [
      "blood"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "name": "Blood Barrage",
    "passive": false,
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
    "1": "One fifth of the user's health will be used to create a powerful shot of blood from a finger. The finger will no longer be able to be used until the blood has been replenished.",
    "3": "One fifth of the user's current health will be used to create a powerful shot of blood from a finger. Blood bullet is no longer available on the used finger for twenty-four hours regardless if the fingers were healed.",
    "element": [
      "blood"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "name": "Blood Bullet",
    "passive": false,
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
    "1": "will allow user to store up to a 300 milliliters of blood in user reserve. The blood bank will automatically be used to heal the user if HP drops below 5 unless suppressed. Every 10 milliliters of blood will be used to restore 5 HP of the user. User may also use that blood bank to consume blood at any time for his own personal pleasure. Consuming 100 milliliters of blood gives the quickest and most efficient results when healing completely.",
    "element": [
      "blood"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "name": "Blood Bank",
    "passive": false,
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
    "1": "A barrier is raised in front of the user, using the user's own blood. The wall's strength is dependent on how much blood is being used.",
    "element": [
      "blood"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "name": "Blood Wall",
    "passive": false,
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
    "1": "The user's palm must be open to perform this skill. From the user's palm, a spray of blood pellets will be released spreading out covering a wide range, The closer the attack is to its target the more damage it will do. Cost -5 HP. Blood spray can be used on multiple targets, but lacks penetration ability, therefore, expressed in the combination skill: Blood Hammer.",
    "element": [
      "blood"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "name": "Blood Spray",
    "passive": false,
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
    "1": "Power fist skill of short burst attack. It was an attack that focused on the inside, an internal attack, the perfect counter to those with abilities who hardened or transformed their bodies.",
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
    "passive": false,
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
    "1": "Blood Hammer is a combination skill of Blood Spray and Hammer Strike.",
    "element": [
      "blood"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "name": "Blood Hammer",
    "passive": false,
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
    "1": "Blood Hammer Drill is a combination skill of Blood Spray, Hammer Strike, and blood control. While preforming the hammer strike and using blood control to rotate a blood spray like a drill to penetrate an opponent.",
    "element": [
      "blood"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "name": "Blood Hammer Drill",
    "passive": false,
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
    "1": "When using the skill while performing different types of kicks. A red line of blood aura in the shape of a crescent will be made. The attack carries a distance of ten meters but the aura will get smaller and weaker the further it travels. Costs 2 HP for every kick.",
    "element": [
      "blood"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "name": "Blood Crescent Kick",
    "passive": false,
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
    "1": "This skill has no cost and can be used on the opponent to stun them between 0.2 seconds and 0.5 seconds at a time. Must have direct eye contact with the opponent. The skill has a chance of failing, depending on the strength of the enemy and on the user's charisma points. The more the skill is used on an opponent the higher chance they have off resisting.",
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
    "passive": false,
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
    "1": "While in a fight, you will aim your punch in a certain direction to start, before the first movement is made, your charm stat will take slight control of the user's mind, to them an image will appear and make it look like the punch has continued heading in the initial direction. But in actual fact, this will be a phantom punch, while the user is dodging or trying to block it, the real blow will come from somewhere else.",
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
    "passive": false,
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
    "1": "Kick version of Phantom Punch.",
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
    "passive": false,
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
    "1": "Movement skill of short displacement.",
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
    "passive": false,
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
    "1": "Basic martial arts for vampire physiques.",
    "element": [
      "none"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "name": "Basic Vampire Martial Arts",
    "passive": false,
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
    "1": "Depending on the user's charisma points and the mental strength of the opponent. The user is able to influence the person or creature to do their bidding. This includes things such as, memory loss, information extraction and so on. This skill require direct eye contact with the target.",
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
    "passive": false,
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
    "1": "It is ritual skill which would allow a Vampire to turn another person into a Vampire, this is called a Blooded. Cap 1.",
    "2": "Cap 2.",
    "3": "Cap 3.",
    "element": [
      "blood"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "name": "Blood Ritual",
    "passive": false,
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
    "1": "Strengths: Ice-resistance 10%, Weapon Resistance 1%, faster regeneration 5%, Create lesser species +1. Weaknesses: Hunger level 10%, Fire Weakness +10%, Light Weakness +10%, Exposure to sunlight - Causes Stamina to regenerate 50% slower & Movement speed -25%.",
    "2": "Hunger level 20%.",
    "3": "Hunger level 30%.",
    "4": "Hunger level 40%.",
    "5": "Hunger level 50%.",
    "6": "Hunger level 60%.",
    "7": "Hunger level 70%.",
    "8": "Hunger level 80%.",
    "9": "Hunger level 90%.",
    "10": "Hunger level 100%.",
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
    "passive": true,
    "stats": [
      {
        "strength": 1,
        "Physical Damage Reduction": 3,
        "magic": 1
      },
      {
        "strength": 1,
        "magic": 1,
        "sense": 1
      },
      {
        "strength": 1,
        "magic": 1,
        "sense": 1
      },
      {
        "strength": 1,
        "magic": 1,
        "sense": 1
      },
      {
        "strength": 1,
        "magic": 1,
        "sense": 1
      },
      {
        "strength": 1,
        "magic": 1,
        "sense": 1
      },
      {
        "strength": 1,
        "magic": 1,
        "sense": 1
      },
      {
        "strength": 1,
        "magic": 1,
        "sense": 1
      },
      {
        "strength": 1,
        "magic": 1,
        "sense": 1
      },
      {
        "strength": 1,
        "magic": 1,
        "sense": 1
      }
    ],
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
    "1": "Strengths: Ice-resistance 10%, Weapon Resistance 1%, faster regeneration 5%. Weaknesses: Hunger level 10%, Fire Weakness +10%, Light Weakness +10%, Silver Weakness +10%, Exposure to sunlight - Causes Stamina to regenerate 50% slower & Movement speed -25%.",
    "2": "Hunger level 20%.",
    "3": "Hunger level 30%.",
    "4": "Hunger level 40%.",
    "5": "Hunger level 50%.",
    "6": "Hunger level 60%.",
    "7": "Hunger level 70%.",
    "8": "Hunger level 80%.",
    "9": "Hunger level 90%.",
    "10": "Hunger level 100%.",
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
    "passive": true,
    "stats": [
      {
        "strength": 1,
        "magic": 1
      },
      {
        "strength": 1,
        "magic": 1,
        "sense": 1
      },
      {
        "strength": 1,
        "magic": 1,
        "sense": 1
      },
      {
        "strength": 1,
        "magic": 1,
        "sense": 1
      },
      {
        "strength": 1,
        "magic": 1,
        "sense": 1
      },
      {
        "strength": 1,
        "magic": 1,
        "sense": 1
      },
      {
        "strength": 1,
        "magic": 1,
        "sense": 1
      },
      {
        "strength": 1,
        "magic": 1,
        "sense": 1
      },
      {
        "strength": 1,
        "magic": 1,
        "sense": 1
      },
      {
        "strength": 1,
        "magic": 1,
        "sense": 1
      }
    ],
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
    "1": "",
    "name": "Ghoul's Strength",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Wight's Strength": {
    "1": "",
    "name": "Wight's Strength",
    "passive": true,
    "links": {
      "spells": [],
      "classes": [],
      "species": []
    }
  },
  "Vampiric": {
    "1": "No points can be spent on this passive. As it levels up the user becomes closer to becoming a vampire noble.",
    "name": "Vampiric",
    "notes": "not to be mistaken with the species vampire.",
    "element": [
      "none"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "passive": true,
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
    "1": "Accelerates the blood flow around the casters body. Increases repair of damaged muscle fibres and cells, helps to decrease swelling, reduce pain and increase healing.",
    "element": [
      "blood"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "name": "Blood Flow Acceleration",
    "passive": false,
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
    "1": ".",
    "element": [
      "blood"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "name": "Blood Retribution",
    "passive": false,
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
    "1": "Your blood is now poison to others.",
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
    "name": "Poisonous Blood",
    "passive": true,
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
    "1": ".",
    "element": [
      "blood"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "name": "Blood Curse",
    "passive": false,
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
    "1": "Cover your body in blood to reduce damage.",
    "element": [
      "blood"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "name": "Blood Armour",
    "passive": false,
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
    "1": "Your blood can be used as a potion on others.",
    "element": [
      "blood"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "name": "Blood Potion",
    "passive": false,
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
    "1": "Rapidly expands your own blood.",
    "element": [
      "blood"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "name": "Blood Combustion",
    "passive": false,
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
    "1": "An advanced blood control.",
    "element": [
      "blood"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "name": "Blood Manipulation",
    "passive": false,
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
    "1": "Shoot blood like javelins, uses the blood around you.",
    "element": [
      "blood"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "name": "Blood Projectiles",
    "passive": false,
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
    "1": "When agreed to both parties must stick to the pact or face their own blood rejecting them.",
    "element": [
      "blood"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "name": "Blood Pact",
    "passive": false,
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
    "1": "Make a servant creature out of blood.",
    "element": [
      "blood"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "name": "Blood Servant",
    "passive": false,
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
    "1": ".",
    "element": [
      "blood"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "name": "Blood Storage",
    "passive": false,
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
    "1": "You will fall into a frenzied state until you consume enough blood to be satisfied, all stats increase during this time.",
    "element": [
      "blood"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "name": "Blood Frenzy",
    "passive": false,
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
    "1": "Your soul is stained with the blood of your victims.",
    "element": [
      "blood"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "name": "Blood Soul",
    "passive": true,
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
    "1": "Creates a weapon from the blood.",
    "element": [
      "blood"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "name": "Blood Weapon Creation",
    "passive": false,
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
    "1": "The caster bursts into a mist of their own blood reducing damage taken by spreading them selves over a larger area.",
    "element": [
      "blood"
    ],
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "name": "Blood Mist",
    "passive": false,
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
    "1": "While this mode is active, the caster draws in nearby entropic energy, draining residual power from any dead enemy nearby to restore the caster's mana.",
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
    "passive": false,
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
    "1": "-2 sense when using ears alone.",
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
    "negative": true,
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
    "1": "A cyclone of fire starts winding up and spins towards your target.",
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
    "image": "https://i.pinimg.com/originals/10/9c/fd/109cfdb1f2c6b96cd5d99486753cecd0.gif",
    "negative": false,
    "passive": false,
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
    "1": "Wraps you in a cyclone of fire, Causing Fire damage to anyone who gets too close to you.",
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
    "image": "",
    "negative": false,
    "passive": false,
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
    "1": "Casting it causes blobs of fire to shoot from the hands and stick to surfaces. When a target steps on or passes too closely to a Fire Mine, it explodes, causing fire damage.",
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
    "image": "https://static.wikia.nocookie.net/elderscrolls/images/8/87/SKRMFire_Rune.png",
    "negative": false,
    "passive": false,
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
    "1": "A paladin without the support of a God is stripped of faith and unable to use any Paladin skills.",
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
    "image": "",
    "negative": true,
    "passive": true,
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
    "1": "Increases natural HP recovery rate.",
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
    "image": "",
    "negative": false,
    "passive": true,
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
    "1": "The lower total HP you have, the higher your strength becomes.",
    "name": "Vampiric frenzy",
    "classes": [
      ""
    ],
    "species": [
      "Vampire"
    ],
    "element": [
      "blood"
    ],
    "image": "",
    "negative": false,
    "passive": true,
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
    "1": "After death, your body will turn to ashes, and you shall be reborn from the flames with 10% of your total HP.",
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
    "image": "https://images.squarespace-cdn.com/content/v1/57d34a6d725e254062172fe9/1579643445519-XXWBWFTZIZ23TNWBECJI/thumbnail_phoenix+rising.jpg",
    "negative": false,
    "passive": true,
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
    "1": "A body birthed in flames holders stronger affinity with fire, +5% increase to all fire related abilities.",
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
    "image": "https://images.squarespace-cdn.com/content/v1/57d34a6d725e254062172fe9/1579643445519-XXWBWFTZIZ23TNWBECJI/thumbnail_phoenix+rising.jpg",
    "negative": false,
    "passive": true,
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
    "1": "Explode the target corpse, dealing damage in the area.",
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
    "image": "",
    "negative": false,
    "passive": false,
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
    "1": "Siphon`s the life force of the target.",
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
    "image": "",
    "negative": false,
    "passive": false,
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
    "1": "Control undead increases.",
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
    "image": "",
    "negative": false,
    "passive": true,
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
    "1": "Turns the dead into your health.",
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
    "image": "",
    "negative": false,
    "passive": false,
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
    "1": "Brings the dead under your control.",
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
    "image": "",
    "negative": false,
    "passive": false,
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
    "1": "Resistance to death increased.",
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
    "image": "",
    "negative": false,
    "passive": false,
    "note": "1% per level",
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
  "Séance": {
    "1": "takes control of an undead.",
    "name": "Séance",
    "element": [
      "shadow"
    ],
    "classes": [
      "Necromancer"
    ],
    "species": [
      ""
    ],
    "image": "",
    "negative": false,
    "passive": false,
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
    "1": "Increase damage to 'holy' targets.",
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
    "image": "",
    "negative": false,
    "passive": true,
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
    "1": "",
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
    "image": "",
    "negative": false,
    "passive": false,
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
    "1": "",
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
    "image": "",
    "negative": false,
    "passive": false,
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
    "1": "A dark book of necromancy appears in the sorcerer's hand, imparting hideous secrets and increasing their unholy magic rating. (Ally)",
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
    "image": "",
    "negative": false,
    "passive": false,
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
    "1": "",
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
    "image": "",
    "negative": false,
    "passive": false,
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
    "1": "",
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
    "image": "",
    "negative": false,
    "passive": false,
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
    "1": "",
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
    "image": "",
    "negative": false,
    "passive": false,
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
    "1": "Allies in melee range redirect X% of received damage to you",
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
    "image": "",
    "negative": false,
    "passive": false,
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
    "1": "Increases Endurance.",
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
    "image": "",
    "negative": false,
    "passive": false,
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
    "1": ".",
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
    "image": "",
    "negative": false,
    "passive": false,
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
    "1": ".",
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
    "image": "",
    "negative": false,
    "passive": false,
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
    "1": ".",
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
    "image": "",
    "negative": false,
    "passive": false,
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
    "1": ".",
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
    "image": "",
    "negative": false,
    "passive": false,
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
    "1": ".",
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
    "image": "",
    "negative": false,
    "passive": false,
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
    "1": ".",
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
    "image": "",
    "negative": false,
    "passive": false,
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
    "1": "(healing).",
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
    "image": "",
    "negative": false,
    "passive": false,
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
    "1": ".",
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
    "image": "",
    "negative": false,
    "passive": false,
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
    "1": "(heal allies).",
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
    "image": "",
    "negative": false,
    "passive": false,
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
    "1": "(allies).",
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
    "image": "",
    "negative": false,
    "passive": false,
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
    "1": "Moves quickly in a straight line.",
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
    "image": "",
    "negative": false,
    "passive": false,
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
    "1": "High damage output strike.",
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
    "image": "",
    "negative": false,
    "passive": false,
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
    "1": "Increases the stats of allies.",
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
    "image": "",
    "negative": false,
    "passive": false,
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
    "1": "Increases Strength.",
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
    "image": "",
    "negative": false,
    "passive": false,
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
    "1": "Increases Vitality.",
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
    "image": "",
    "negative": false,
    "passive": false,
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
    "1": "Provoke and tease them so that they want to attack you.",
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
    "image": "",
    "negative": false,
    "passive": false,
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
    "1": "Increases Willpower.",
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
    "image": "",
    "negative": false,
    "passive": false,
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
    "1": "Cripple the target with a sweeping blow.",
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
    "image": "",
    "negative": false,
    "passive": false,
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
    "1": "Can breath underwater.",
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
    "image": "",
    "negative": false,
    "passive": true,
    "I": "Can breath underwater.",
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
    "1": "Tempest Shield is a spell that reserves mana to empower your shield, granting spell block chance and immunity to shock. While active, whenever you block, you deal damage to the enemy that hit you with an arc of lightning that chains to nearby enemies.",
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
    "image": "",
    "negative": false,
    "passive": false,
    "I": "Tempest Shield is a spell that reserves mana to empower your shield, granting spell block chance and immunity to shock. While active, whenever you block, you deal damage to the enemy that hit you with an arc of lightning that chains to nearby enemies.",
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
    "1": "Elf testing skill",
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
    "image": "",
    "negative": false,
    "passive": false,
    "I": "Elf testing skill",
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
    "1": "A spectral, floating hand appears at a point you choose within range",
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
    "image": "",
    "negative": false,
    "passive": false,
    "I": "A spectral, floating hand appears at a point you choose within range",
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
    "1": "A Weak Fireball is produced and can be thrown at the target.",
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
    "image": "",
    "negative": false,
    "passive": false,
    "I": "A Weak Fireball is produced and can be thrown at the target.",
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
    "1": "Snowball.",
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
    "image": "",
    "negative": false,
    "passive": false,
    "I": "Snowball.",
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
    "1": "Detect warm blooded life in 10m ft for 150 secs on Self.",
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
    "image": "",
    "negative": false,
    "passive": false,
    "I": "Detect warm blooded life in 10m for 150 secs on Self.",
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
    "1": "You step into the border regions of the Ethereal Plane, 40% of damage is taken from MP before HP.",
    "note": "You step into the border regions of the Ethereal Plane, 40% of damage is taken from MP before HP.",
    "name": "Etherealness",
    "element": [
      "spirit"
    ],
    "classes": [],
    "species": [
      "Succubus"
    ],
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
    "1": "You apply a random drain effect on your target.",
    "note": "",
    "name": "Draining Kiss",
    "element": [],
    "classes": [],
    "species": [
      "Succubus"
    ],
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
    "1": "You can make minor adjustments to your shape/appearance.",
    "note": "",
    "name": "Shapechanger",
    "element": [],
    "classes": [],
    "species": [
      "Succubus"
    ],
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
    "1": "You can communicate telepathically to your bond.",
    "note": "",
    "name": "Telepathic Bond",
    "element": [],
    "classes": [],
    "species": [
      "Succubus"
    ],
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
    "1": "Unarmed attacks deal more damage.",
    "note": "",
    "name": "Claws",
    "element": [],
    "classes": [],
    "species": [
      "Succubus"
    ],
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
