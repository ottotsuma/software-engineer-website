import React, { useState } from "react";
import styled from "styled-components";
import {colors, monadColors} from './colors'
import {_try} from './util'

// See "places" instead.

// Todtenwei - 272082858
// Savigal - 640470293

export const locationsList = {
  Meroyri: {
    name:'Meroyri',
    location:'Old world',
    DLC: 1,
    meaning: '',
  },
  Lóng_zhī_guó: {
    name:'Lóng zhī guó',
    location:'Old East',
    DLC: 2,
    meaning: 'Land of dragons',
  },
  Rayndr: {
    name:'Rayndr',
    location:'Middle Bridge',
    DLC: 3,
    meaning: 'Hearth',
  },
  Abansofu: {
    name:'Abansofu',
    notes: 'Bottom Right, Below; Lóng_zhī_guó. Large single continent, Main Quest; Xuanzang / Journey to the West.',
    location:'Bottom Right.',
    DLC: 4,
    meaning: 'High island (火山島)',

  },
  Lith_eru: {
    name:'Lith eru',
    notes: '(Large new continent, sand world) [the location of the immortals war, their bodies made the desert, their power changed to mana and made the first humans]',
    location:'South.',
    DLC: 5,
    meaning: 'Lith = ash, eru = desert',

  },
  Charia: {
    name:'Charia',
    notes: '',
    location:'West',
    DLC: 6,
    meaning: '',

  },
  Steinauhau: {
    notes: 'map seed: 5628570730133',
    location: 'Alden',
    population: '6901',
    Temperature: '15',
    Elevation: 18,
    Type: 'Naval',
    Culture: 'German',
    Trade: true,
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
        "Restaurant" : false,
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
  Alden: {
    language: 'german 🎄',
    name: 'Alden',
    map: '',
    notes:'map code: 839360670',
    color: '',
    Military: 'Strong land military, with regionally high level population. Medium sized navy. Few flying assets; Witches.',
    Diplomacy: "Overall, poor. At war with the republic, negative relations with all countries apart from Niyosho, were the relation is neutral at best.",
    Religion: '',
    Culture: 'Warrior based, military focused. Strong sense of what should be.',
    Ambition: 'Expansion for living space.',
    Stability: 'Stable.',
    Secrets: '',
    Food: 'Very fertile land.',
    Economy: '',
    "Places of Interest": 'Kustet (Salt mining town)',
    "Unique Unit": 'Witches',
    Bonuses: '',
  },
};
// Dwarves - Weak with magic, not much food or water, low population, strong melee fighters.

// Desert (Monsters) - They are monsters. It's hard to say.

// Republic (EU?Roman) 🏛
// Military - Varied individuals from states, strong together, strong military, weak navy
// Diplomacy - Good
// Religion - Varied
// Culture - Varied
// Ambition - Not to fall apart
// Stability - Unstable now, use to be stable.
// Secrets -
// Food - Fertile land in the east, less fertile to the south and west.
// Economy type -
// Unique Unit - Throwing Axes
// Places of Interest - Baberg Bridge, Siklad Gold mine, Furlin salt mine, Horod iron mine town.

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

// Kingdom of Naj'es (Empire) 🦎
// Military - weak individuals, strong together, many varied units with a strong core, strong military, weak navy
// Diplomacy - Arrogant but rational
// Religion - State religion - , split off religions -
// Culture - Mostly .. , also
// Ambition - Depends on the ruler
// Stability - Stable under one ruler, unstable during changes.
// Secrets - The current king is weak and it is the queen who has been fighting dressed as him
// Food - Mostly desert, imports food from others
// Economy type -
// Unique Unit - 

// Shogunate of Niyosho (Japan) ⛩
// Military - weak individuals, strong together, strong military, Strong navy
// Diplomacy - Medium, while they do not strongly anger anyone they are hardly friendly
// Religion - Shinto
// Culture -
// Ambition - Become isolationist
// Stability - Stable
// Secrets - Racist
// Food - Fertile land makes good use of it
// Economy type -
// Unique Unit - Samurai
// Places of Interest - Aesemria silver mine town

// Herkikia League - essos, lyric speaking? - free city types ⚔
// Military - Strong individuals, strong core, weak auxiliary branches, would be strong overall if they would work together
// Diplomacy - Too focused internally, suits the Niyosho just fine.
// Religion - Many gods.
// Culture - Each city has it's own differences but generally they are about their peoples freedom while enslaving others.
// Ambition - lack of...
// Stability - Unstable until there is an external threat
// Secrets -
// Food - Fertile land, but worked by the slaves
// Economy type -
// Unique Unit - Sacred Band

// Solzi- Chalbia (Port) ⚓
// Military - Average individuals, strong navy, weak land forces, but very rich
// Diplomacy - Good with most, it's all about trade money and friends.
// Religion -
// Culture - Make more money!!!
// Ambition - More money.
// Stability - mostly Stable internally, strong neighbor's
// Secrets -
// Food - Imports  
// Economy type -

export default function LocationsDisplay(Locations) {
  const Data = _try(() => locationsList[Locations])
  if(Data) {
    return (
      <BackgroundWrap>
      <Wrap CountryColor={monadColors[Data.color] || ''}>
        <Name>{Locations}</Name>
        {Data.map ? <Display src={Data.map} alt={Locations} /> : <></>}
        <Info>{Data["Unique Unit"] ? Data["Unique Unit"] : ''}</Info>
      </Wrap>
      </BackgroundWrap>
    )
  } else {
    return <div></div>
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
border-color: ${props => props.CountryColor};
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