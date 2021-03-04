import React from "react";
import {
  SkillTreeGroup,
  SkillTree,
  SkillProvider,
  SkillType,
  SkillGroupDataType,
} from "beautiful-skill-tree";

const data: SkillType[] = [
  {
    id: "Static-Charge",
    title: "Static Charge",
    tooltip: {
      content:
        "You combine lightning with your mana while casting spells. Enemies that attempt to interrupt your casting with physical attacks can be struck by arcs that leave them paralyzed.",
    },
    children: [
      {
        id: "Shocking-Touch",
        title: "Shocking Touch",
        tooltip: {
          content:
            "Sets the Shocked status on a target you touch and deals low damage.",
        },
        children: [
          {
            id: "Electric-Touch",
            title: "Electric Touch",
            tooltip: {
              content: "Electrocutes target on touch, deals damage.",
            },
            children: [
              {
                id: "Electric-Prod",
                title: "Electric Prod",
                tooltip: {
                  content:
                    "Electrocutes target inside on touch, deals high damage.",
                },
                children: [
                  {
                    id: "Heart-Stop",
                    title: "Heart Stop",
                    tooltip: {
                      content:
                        "Stops the heart of a willing or highly damaged target.",
                    },
                    children: [
                      {
                        id: "Heart-Start",
                        title: "Heart Start",
                        tooltip: {
                          content:
                            "Starts the heart of an unconscious or highly damaged target.",
                        },
                        children: [],
                      },
                    ],
                  },
                  {
                    id: "Thunder-Kiss",
                    title: "Thunder Kiss",
                    tooltip: {
                      content:
                        "Deals damage though a targets whole body on contact with your lips.",
                    },
                    children: [
                      {
                        id: "Lightning-Breath",
                        title: "Lightning Breath",
                        tooltip: {
                          content:
                            "Your breath gives off lightning causing AOE damage.",
                        },
                        children: [
                          {
                            id: "Thors-Hammer",
                            title: "Thor`s Hammer",
                            tooltip: {
                              content:
                                "You summon Thor`s hammer onto the field of battle causing large AOE damage.",
                            },
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "Static-Cage",
        title: "Static Cage",
        tooltip: {
          content:
            "You trap enemies inside an static field that attempts to paralyzes those that try to leave.",
        },
        children: [
          {
            id: "Lightning-Cage",
            title: "Lightning Cage",
            tooltip: {
              content:
                "You summon Thor`s hammer onto the field of battle causing large AOE damage.",
            },
            children: [
              {
                id: "Lightning-Trap",
                title: "Lightning Trap",
                tooltip: {
                  content:
                    "You summon Thor`s hammer onto the field of battle causing large AOE damage.",
                },
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: "Weakness-To-Shock",
        title: "Weakness To Shock",
        tooltip: {
          content:
            "You summon Thor`s hammer onto the field of battle causing large AOE damage.",
        },
        children: [
          {
            id: "Superconductor",
            title: "Superconductor",
            tooltip: {
              content:
                "You summon Thor`s hammer onto the field of battle causing large AOE damage.",
            },
            children: [
              {
                id: "Conductive-Current",
                title: "Conductive Current",
                tooltip: {
                  content:
                    "You summon Thor`s hammer onto the field of battle causing large AOE damage.",
                },
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "Lightning-Ward",
    title: "Lightning Ward",
    tooltip: {
      content: "Reduces damage taken from lightning.",
    },
    children: [
      {
        id: "Lightning-Proof",
        title: "Lightning Proof",
        tooltip: {
          content:
            "You summon Thor`s hammer onto the field of battle causing large AOE damage.",
        },
        children: [
          {
            id: "Lightning-Eater",
            title: "Lightning Eater",
            tooltip: {
              content:
                "You summon Thor`s hammer onto the field of battle causing large AOE damage.",
            },
            children: [
              {
                id: "Discharge",
                title: "Discharge",
                tooltip: {
                  content:
                    "You summon Thor`s hammer onto the field of battle causing large AOE damage.",
                },
                children: [
                  {
                    id: "Overload",
                    title: "Overload",
                    tooltip: {
                      content:
                        "You summon Thor`s hammer onto the field of battle causing large AOE damage.",
                    },
                    children: [],
                  },
                ],
              },
              {
                id: "Eletric-Magical-Disruption",
                title: "Eletric Magical Disruption",
                tooltip: {
                  content:
                    "You summon Thor`s hammer onto the field of battle causing large AOE damage.",
                },
                children: [
                  {
                    id: "Eletric-Enchant-Disruption",
                    title: "Eletric Enchant Disruption",
                    tooltip: {
                      content:
                        "You summon Thor`s hammer onto the field of battle causing large AOE damage.",
                    },
                    children: [
                      {
                        id: "Eletric-Transmutation",
                        title: "Eletric Transmutation",
                        tooltip: {
                          content:
                            "You summon Thor`s hammer onto the field of battle causing large AOE damage.",
                        },
                        children: [
                          {
                            id: "Eletric-Transmission",
                            title: "Eletric Transmission",
                            tooltip: {
                              content:
                                "You summon Thor`s hammer onto the field of battle causing large AOE damage.",
                            },
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "Shocking-Burst",
    title: "Shocking Burst",
    tooltip: {
      content: "Releases a burst of lightning that causes damage from range.",
    },
    children: [
      {
        id: "Bolt-Ball",
        title: "Bolt Ball",
        tooltip: {
          content:
            "Releases a burst of lightning that causes damage from range.",
        },
        children: [
          {
            id: "Lightning-Ball",
            title: "Lightning Ball",
            tooltip: {
              content:
                "Releases a burst of lightning that causes damage from range.",
            },
            children: [
              {
                id: "Lightning-Blast",
                title: "Lightning Blast",
                tooltip: {
                  content:
                    "Releases a burst of lightning that causes damage from range.",
                },
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: "Lightning-Bolt",
        title: "Lightning Bolt",
        tooltip: {
          content:
            "Releases a burst of lightning that causes damage from range.",
        },
        children: [
          {
            id: "Electrocution",
            title: "Electrocution",
            tooltip: {
              content:
                "Releases a burst of lightning that causes damage from range.",
            },
            children: [
              {
                id: "Lightning-Leap",
                title: "Lightning Leap",
                tooltip: {
                  content:
                    "Releases a burst of lightning that causes damage from range.",
                },
                children: [],
              },
              {
                id: "Dual-Thunder",
                title: "Dual Thunder",
                tooltip: {
                  content:
                    "Releases a burst of lightning that causes damage from range.",
                },
                children: [
                  {
                    id: "Tri-Thunder",
                    title: "Tri Thunder",
                    tooltip: {
                      content:
                        "Releases a burst of lightning that causes damage from range.",
                    },
                    children: [
                      {
                        id: "Judgement-Bolt",
                        title: "Judgement-Bolt",
                        tooltip: {
                          content:
                            "Releases a burst of lightning that causes damage from range.",
                        },
                        children: [
                          {
                            id: "Zeus-Wrath",
                            title: "Zeus Wrath",
                            tooltip: {
                              content:
                                "Releases a burst of lightning that causes damage from range.",
                            },
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "Lightning-Surge",
            title: "Lightning Surge",
            tooltip: {
              content:
                "Releases a burst of lightning that causes damage from range.",
            },
            children: [
              {
                id: "Arching-Surge",
                title: "Arching Surge",
                tooltip: {
                  content:
                    "Releases a burst of lightning that causes damage from range.",
                },
                children: [
                  {
                    id: "Chain-Lightning",
                    title: "Chain Lightning",
                    tooltip: {
                      content:
                        "Releases a burst of lightning that causes damage from range.",
                    },
                    children: [],
                  },
                ],
              },
            ],
          },
          {
            id: "Dazzling-Bolt",
            title: "Dazzling Bolt",
            tooltip: {
              content:
                "Releases a burst of lightning that causes damage from range.",
            },
            children: [
              {
                id: "Exploding-Bolt",
                title: "Exploding Bolt",
                tooltip: {
                  content:
                    "Releases a burst of lightning that causes damage from range.",
                },
                children: [
                  {
                    id: "Energy-Bombardment",
                    title: "Energy Bombardment",
                    tooltip: {
                      content:
                        "Releases a burst of lightning that causes damage from range.",
                    },
                    children: [
                      {
                        id: "Energy-Barrage",
                        title: "Energy-Barrage",
                        tooltip: {
                          content:
                            "Releases a burst of lightning that causes damage from range.",
                        },
                        children: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "Gathering-Storm",
        title: "Gathering Storm",
        tooltip: {
          content:
            "Releases a burst of lightning that causes damage from range.",
        },
        children: [
          {
            id: "Storm",
            title: "Storm",
            tooltip: {
              content:
                "Releases a burst of lightning that causes damage from range.",
            },
            children: [
              {
                id: "Lightning-Storm",
                title: "Lightning Storm",
                tooltip: {
                  content:
                    "Releases a burst of lightning that causes damage from range.",
                },
                children: [
                  {
                    id: "Thunder-Storm",
                    title: "Thunder Storm",
                    tooltip: {
                      content:
                        "Releases a burst of lightning that causes damage from range.",
                    },
                    children: [
                      {
                        id: "Avatar-Stormbringer",
                        title: "Avatar Stormbringer",
                        tooltip: {
                          content:
                            "Releases a burst of lightning that causes damage from range.",
                        },
                        children: [
                          {
                            id: "Ramuh",
                            title: "Ramuh",
                            tooltip: {
                              content:
                                "Releases a burst of lightning that causes damage from range.",
                            },
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
function Skill() {
  return (
    <div className="Tree-Outer">
      <SkillProvider>
        <SkillTreeGroup>
          {({ skillCount }) => (
            <SkillTree
              treeId="first-tree"
              title="Lightning Tree"
              data={data}
              collapsible
              closedByDefault
              description="The skill tree of a lightning mage."
            />
          )}
        </SkillTreeGroup>
      </SkillProvider>
    </div>
  );
}
export default Skill;
