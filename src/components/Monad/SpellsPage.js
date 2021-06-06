import React from 'react'
import {spellList} from './../elements/spells'
import Spells from "./../elements/spells";

export default function SpellsPage() {
    const array = Object.keys(spellList)
    const allSpellsArray = []
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        allSpellsArray.push(
            {name: element, level: 1}
        )
    }
    return (
        <div>
            <Spells
            spells={allSpellsArray}
            type={"mage"}
          />
        </div>
    )
}
