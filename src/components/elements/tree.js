import React from "react";
// import styled from "styled-components";
import Spells, { spellList, ListOfMagicTypes } from "./spells";
// import { colors, monadColors, textColors } from "./../elements/colors";
// import { _try, imageError } from "./../elements/util";
import SpellCards from "./../Monad/SpellCards";
import { searchOrigin } from "./util"

function LinkedSkills(data, level = 1) {
    const connectedList = [];

    if (data && data.links && Object.keys(data.links).length > 0) {
        Object.keys(data.links).forEach(key => {
            if (data.links[key].length > 0) {
                connectedList.push(
                    <div style={{ textTransform: "capitalize" }} key={`link-${key}`}>
                        Linked {key}:
                    </div>
                );

                data.links[key].forEach(element => {
                    const skillName = typeof element === 'string'
                        ? element // .toLowerCase()
                        : element.name //.toLowerCase();

                    connectedList.push(
                        <div key={`linked-${skillName}`}>
                            <Spells spells={[{ name: skillName, level: level }]} />
                        </div>
                    );
                });
            }
        });
    }

    return connectedList.length > 0 ? connectedList : <div>No linked skills found</div>;
}

export default function Tree(initialSkill = "blank", level = 1) {
    console.log('Tree for : ', initialSkill)
    if (initialSkill.length > 0 && typeof (initialSkill) === 'string') {
        const data = searchOrigin(initialSkill)
        const connectedList = LinkedSkills(data, level)
        return (<div>
            {data.name ? <div>{SpellCards([data])}</div> : <div />}
            {connectedList && connectedList.length > 0 ? <div>
                {connectedList}
            </div> : <div />}
        </div>)
    } else {
        return <div />
    }
}