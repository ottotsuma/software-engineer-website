import React from "react";
import {
  SkillTreeGroup,
  SkillTree,
  SkillProvider,
  SkillType,
  SkillGroupDataType,
} from "beautiful-skill-tree";

const data: SkillType[] = [
  // Seeds
  {
    id: "Seeds-to-Soldiers",
    title: "Seeds to Soldiers",
    tooltip: {
      content:
        "Take [x] seed(s), use energy to give life to [x] soldier(s). [x is equal to spell level.]",
    },
    children: [
      {
        id: "Lightning-Germination ",
        title: "Lightning Germination ",
        tooltip: {
          // heal
          content: "Stimulate a target into germinating",
        },
        children: [
          {
            id: "Lightning-Growth",
            title: "Lightning Growth ",
            tooltip: {
              // buff
              content: "Force the target to grow.",
            },
            children: [
              {
                id: "Lightning-Harvest",
                title: "Lightning Harvest ",
                tooltip: {
                  // finish move
                  content:
                    "Harvest the target. [If the target is below 20% HP this attack does 200% more damage. If this target is a 'plant' type this attack does 500% more damage. If this attack kills the target you have a chance to harvest something.]",
                },
                children: [
                  {
                    id: "Scarecrow",
                    title: "Scarecrow",
                    tooltip: {
                      // summon
                      content:
                        "Uses plant material to summon a sentient scarecrow.",
                    },
                    children: [],
                  },
                  {
                    id: "Reap-What-You-Sow",
                    title: "Reap What You Sow",
                    tooltip: {
                      // mixed, depends on the seeds.
                      content:
                        "Reap the benefits or punishments from the seeds you sow.",
                    },
                    children: [
                      {
                        id: "Bountiful-Harvest",
                        title: "Bountiful Harvest",
                        tooltip: {
                          content:
                            "All of your harvests are increased by [x]%. [x is 10x the level of this spell.]",
                        },
                        children: [],
                      },
                    ],
                  },
                  {
                    id: "Inspect-Plants",
                    title: "Inspect Plants",
                    tooltip: {
                      // utility
                      content:
                        "Your inspection of plants will be a level up on your normal inspection ability.",
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
  // Mixed
  {
    id: "Lightning-Seeds",
    title: "Lightning Seeds",
    tooltip: {
      // main gain
      content:
        "Shoots a group of [x] seed(s) in a spread from the user. The seeds attach to opponent(s) and cause lightning damage over time. A part of the damage is used to restore your as mana. [x is equal to spell level.]",
    },
    children: [
      {
        id: "Lightning-Plant",
        title: "Lightning Plant",
        tooltip: {
          // de-buff
          content: "Turn lightning seeds into lightning plants!",
        },
        children: [],
      },
    ],
  },
  // Lightning
  {
    id: "Kʼawiil-Burst",
    title: "Kʼawiil Burst",
    tooltip: {
      // close attack
      content: "Releases a burst of Kʼawiil-lightning on contact.",
    },
    children: [
      {
        id: "Kʼawiil-Bolt",
        title: "Kʼawiil Bolt",
        tooltip: {
          // ranged attack
          content: "Releases a burst of Kʼawiil-lightning from range.",
        },
        children: [],
      },
    ],
  },
  // lightning serpent
  {
    id: "Haietlik",
    title: "Haietlik",
    tooltip: {
      // mid ranged attack & utility
      content:
        "Throw a snake shaped lighting bolt to hook onto a target, dealing damage in the process.",
    },
    children: [],
  },
  // Serpents
  {
    id: "Serpent-Skin",
    title: "Serpent-Skin",
    tooltip: {
      // attribute buff
      content:
        "Your skin slowly becomes like a serpents. Able to turn on and off scaled armor over your skin.",
    },
    children: [
      {
        id: "Forked-Tongue",
        title: "Forked Tongue",
        tooltip: {
          // attribute buff
          content: "Your tongue will become forked, Increased sense of smell.",
        },
        // Snakes hear with their mouths
        // Snakes have heat-seeking smarts
        children: [],
      },
      {
        id: "Serpent-Pattern",
        title: "Serpent Pattern",
        tooltip: {
          // hidden attribute buff
          content:
            "Your skin will adapt to the environment slightly, increased stealth.",
        },
        // Some snakes can fly
        children: [],
      },
      {
        id: "Serpent-Strike",
        title: "Serpent Strike",
        tooltip: {
          // Buff
          content: "Your next physical attack will be faster.",
        },
        // Venom
        children: [],
      },
    ],
  },
];

function Kʼawiil() {
  return (
    <div className="Tree-Outer">
      <SkillProvider>
        <SkillTreeGroup>
          {({ skillCount }) => (
            <SkillTree
              treeId="first-tree"
              title="Kʼawiil"
              data={data}
              collapsible
              closedByDefault
              description="The skill tree of Kʼawiil."
            />
          )}
        </SkillTreeGroup>
      </SkillProvider>
    </div>
  );
}
export default Kʼawiil;
