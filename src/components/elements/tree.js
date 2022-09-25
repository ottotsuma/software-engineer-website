import React, { useState, useEffect } from "react";
// import styled from "styled-components";
import Spells, { spellList, ListOfMagicTypes } from "./../elements/spells";
// import { colors, monadColors, textColors } from "./../elements/colors";
// import { _try, imageError } from "./../elements/util";
import SpellCards from "./../Monad/SpellCards";

function lower(obj) {
    // not converting keys...
    for (var prop in obj) {
        if (typeof obj[prop] === 'string') {
            obj[prop] = obj[prop].toLowerCase();
        }
        if (typeof obj[prop] === 'object') {
            lower(obj[prop]);
        }
    }
    return obj;
}

// npx browserslist@latest --update-db
export default function Tree(initialSkill = "blank", level = 1) {
    if (initialSkill.length > 0 && typeof (initialSkill) === 'string' && spellList[initialSkill]) {
        console.log('Tree for : ', initialSkill)
        const subjectSkill = spellList[initialSkill]
        const connectedList = []
        function LinkedSkills(initialLinkedSkill) {
            const subjectLinkedSkill = spellList[initialLinkedSkill]
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
                connectedList.push(LinkedSkills(subjectSkill.connections[index]))
            }
        }
        return (<div>
            {subjectSkill.name ? <div>{SpellCards([subjectSkill])} </div> : <div />}
            {connectedList && connectedList.length > 0 ? <div>
                Linked Skills: {connectedList}
            </div> : <div />}
        </div>)
    } else {
        return <div />
    }
}