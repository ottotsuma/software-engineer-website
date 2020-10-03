import React from 'react';
import {
    SkillTreeGroup,
    SkillTree,
    SkillProvider,
    SkillType,
    SkillGroupDataType
} from 'beautiful-skill-tree';
// static cage, lightning cage, lightning bolt, gathering storm, static charge, stormbringer, conductive current, exploding bolt, energy bombardment, energy barrage, arching surge, chain lightning, storm, shocking touch, weakness to shock, eletric touch, shocking burst, lighting ball, lightning blast, lightning surge, electocution, lightning storm, Thors hammer, judgment bolt, Ramuh, Zeus wrath, bolt ball, eletric prod, thunder kiss, lighting ward, lightinng proof, lighting eater, lightning breath, discharge, tri-thunder, teleportation,  dazing bolt, superconductor, thunderstorm. leap lighting, heart stop, heart start, overload, eletric magical disruption, eletric enchant distruption, eletric transmuatation, Electrical Transmission (teleport), avatar 
const data: SkillType[] = [
    {
        id: 'Static-Charge',
        title: 'Static Charge',
        tooltip: {
            content:
                'You combine lightning with your mana while casting spells. Enemies that attempt to interrupt your casting with physical attacks can be struck by arcs that leave them paralyzed.',
        },
        children: [
            {
                id: 'Shocking-touch',
                title: 'Shocking Touch',
                tooltip: {
                    content:
                        'Sets the Shocked status on a target you touch and deals damage..',
                },
                children: [],
            },
            {
                id: 'Static-Cage',
                title: 'Static Cage',
                tooltip: {
                    content:
                        'You trap enemies inside an static field that attempts to paralyzes those that try to leave.',
                },
                children: [],
            },
        ],
    },
];
function Skill() {
    return (
        <div>   
 <SkillProvider>
 <SkillTreeGroup>
   {({ skillCount }) => (
    <SkillTree
      treeId="first-tree"
      title="Lightning Tree"
      data={data}
      collapsible
      description="The skill tree of a lightning mage."
    />
  )}
  </SkillTreeGroup>
</SkillProvider>
        </div>
    ) 
}
export default Skill;
