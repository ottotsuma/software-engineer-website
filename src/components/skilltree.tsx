import React from 'react';
import {
    SkillTreeGroup,
    SkillTree,
    SkillProvider,
    SkillType,
    SkillGroupDataType
} from 'beautiful-skill-tree';
// static cage, lightning cage, static charge, electric touch, shocking touch,  lighting ward, lightinng proof, lighting eater, shocking burst,  lightning bolt, lightning ball, dazing bolt, lightning blast, lightning surge, electocution, exploding bolt, energy bombardment, energy barrage, arching surge, chain lightning, ,leap lighting, eletric prod,

//   gathering storm,  conductive current,  storm,  weakness to shock,    lightning storm, Thors hammer, judgment bolt, Ramuh, Zeus wrath,   thunder kiss, lightning breath, discharge, tri-thunder, teleportation,   superconductor, thunderstorm.  heart stop, heart start, overload, eletric magical disruption, eletric enchant distruption, eletric transmuatation, Electrical Transmission (teleport), avatar stormbringer,

const object = {
    staticCharge: {
        shockingTouch: {
            electricTouch: {
                eletricProd: {

                }
            }
        },
        staticCage: {
            lightningCage: {

            }
        }
    },
    lightningWard: {
        lightningProof: {
            LightningEater: {

            }
        }
    },
    shockingBurst: {
        boltBall: {
            lightingBall: {

            },
            lightningBolt: {
                dazingBolt: {
                    explodingBolt: {
                        energyBombardment: {
                            energyBarrage: {

                        }
                    }
                    }
                },
                lightningBlast: {
                    lightningSurge: {
                        electocution: {
                            leapLighting: {

                            }

                        },
                        archingSurge: {
                            ChainLightning: {

                            }
                        }
                    }
                }
            }
        }
    }
}

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
