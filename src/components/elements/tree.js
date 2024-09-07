import React from "react";
// import styled from "styled-components";
import Spells, { spellList, ListOfMagicTypes } from "./spells";
// import { colors, monadColors, textColors } from "./../elements/colors";
// import { _try, imageError } from "./../elements/util";
import SpellCards from "./../Monad/SpellCards";
import { searchSpells, searchSpeciesSkills, searchSpecies, searchClass, searchClassSkills, searchItem, searchPlaces, searchOrigin} from "./util"

function searchOriginSkills (initialSkill) {
    // Can remove skills, by turning all  .species and .classes into "links"
    let skills = []
    const speciesSkills = searchSpeciesSkills(initialSkill)
    const classSkills = searchClassSkills(initialSkill)
    speciesSkills ? skills = speciesSkills : classSkills ? skills = classSkills : skills = []
    let data = {}
    const skillData = searchSpells(initialSkill)
    const classData = searchClass(initialSkill)
    const speciesData = searchSpecies(initialSkill)
    const itemData = searchItem(initialSkill)
    const placeData = searchPlaces(initialSkill)
    skillData ? data = skillData : classData ? data = classData : speciesData ? data = speciesData : itemData ? data = itemData : placeData ? data = placeData : data = {}
    return {data: data, skills: skills}
}

// npx browserslist@latest --update-db
export default function Tree(initialSkill = "blank", level = 1) {
    console.log('Tree for : ', initialSkill)
    if (initialSkill.length > 0 && typeof (initialSkill) === 'string') {
        const {data, skills} = searchOriginSkills(initialSkill)
        const connectedList = [] // once all "skills" are moved into links, we can change LinkedSkills to intake initialSkill and return connected list
        function LinkedSkills(initialLinkedSkill) {
            const data = searchOrigin(initialLinkedSkill)
            if (data && data.name) {
                return <div key={`Linked ${data.name}`}>
                    <Spells
                        spells={[{name: data.name, level: 1}]}
                    />
                </div>
            }
        }
        // if(skills) {
        //     connectedList.push(<div style={{textTransform: "capitalize"}}>Linked Skills:</div>)
        //     for (let index = 0; index < skills.length; index++) {
        //         connectedList.push(<Spells spells={[{name: skills[index].name, level: 1}]} />)       
        //     }
        // }
        if (data && data.links && Object.keys(data.links).length > 0) {
            for (let index = 0; index < Object.keys(data.links).length; index++) {
                const key = Object.keys(data.links)[index]
                if(data.links[key].length > 0) {
                    connectedList.push(<div style={{textTransform: "capitalize"}}>Linked {key}:</div>)
                    data.links[key].forEach(element => {
                        if(typeof element === 'string') {
                            connectedList.push(LinkedSkills(element.toLowerCase()))
                        } else {
                            connectedList.push(LinkedSkills(element.name.toLowerCase()))
                        }
                    });
                }

            }
        }
        if (skills && skills.links && Object.keys(skills.links).length > 0) {
            for (let index = 0; index < Object.keys(skills.links).length; index++) {
                const key = Object.keys(skills.links)[index]
                skills.links[key].forEach(element => {
                    if(typeof element === 'string') {
                        connectedList.push(LinkedSkills(element.toLowerCase()))
                    } else {
                        connectedList.push(LinkedSkills(element.name.toLowerCase()))
                    }
                });
            }
        }
        return (<div>
            {data.name ? <div>{SpellCards([data])}</div> : <div />}
            {connectedList && connectedList.length > 0 ? <div>
                {connectedList}
            </div> : <div />}
        </div>)
    }
    else {
        return <div />
    }
}