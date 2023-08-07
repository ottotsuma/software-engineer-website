import React, { useState, useEffect } from "react";
// import styled from "styled-components";
import Spells, { spellList, ListOfMagicTypes } from "./spells";
// import { colors, monadColors, textColors } from "./../elements/colors";
// import { _try, imageError } from "./../elements/util";
import SpellCards from "./../Monad/SpellCards";
import { searchSpells, searchSpeciesSkills, searchSpecies, searchClass, searchClassSkills} from "./util"

// npx browserslist@latest --update-db
export default function Tree(initialSkill = "blank", level = 1) {
    console.log('Tree for : ', initialSkill)
    if (initialSkill.length > 0 && typeof (initialSkill) === 'string' && searchSpells(initialSkill)) {
        const subjectSkill = searchSpells(initialSkill)
        const connectedList = []
        function LinkedSkills(initialLinkedSkill) {
            const subjectLinkedSkill = searchSpells(initialLinkedSkill)
            if (subjectLinkedSkill && subjectLinkedSkill.name) {
                return <div key={`Linked ${subjectLinkedSkill.name}`}>
                    <Spells
                        spells={[{name: subjectLinkedSkill.name, level: 1}]}
                    />
                </div>
            }
        }
        if (subjectSkill && subjectSkill.connections && subjectSkill.connections.length > 0) {
            for (let index = 0; index < subjectSkill.connections.length; index++) {
                connectedList.push(LinkedSkills(subjectSkill.connections[index].toLowerCase()))
            }
        }
        return (<div>
            {subjectSkill.name ? <div>{SpellCards([subjectSkill])}</div> : <div />}
            {connectedList && connectedList.length > 0 ? <div>
                Linked Skills: {connectedList}
            </div> : <div />}
        </div>)
    } else if (initialSkill.length > 0 && typeof (initialSkill) === 'string' && searchSpecies(initialSkill)) {
        const speciesSkills = searchSpeciesSkills(initialSkill)
        const speciesData = searchSpecies(initialSkill)
        const connectedList = []
        for (let index = 0; index < speciesSkills.length; index++) {
            connectedList.push(<Spells spells={[{name: speciesSkills[index].name, level: 1}]} />)       
        }
        if(!speciesData.name) speciesData.name = initialSkill
        return(
        <div>{SpellCards([speciesData])}
            <div style={{height: "170px", overflow: "auto"}}>{connectedList}</div>
        </div>) // should not be a spell card.
    } else if (initialSkill.length > 0 && typeof (initialSkill) === 'string' && searchClass(initialSkill)) {
        const speciesSkills = searchClassSkills(initialSkill)
        const speciesData = searchClass(initialSkill)
        const connectedList = []
        for (let index = 0; index < speciesSkills.length; index++) {
            connectedList.push(<Spells spells={[{name: speciesSkills[index].name, level: 1}]} />)       
        }
        if(!speciesData.name) speciesData.name = initialSkill
        return(<div>{SpellCards([speciesData])}<div style={{height: "170px", overflow: "auto"}}>{connectedList}</div></div>) // should not be a spell card.
    } else {
        return <div />
    }
}