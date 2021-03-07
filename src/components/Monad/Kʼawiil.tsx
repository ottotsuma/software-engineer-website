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
          content: "Stimulate a target into germinating",
        },
        children: [
          {
            id: "Lightning-Growth",
            title: "Lightning Growth ",
            tooltip: {
              content: "Force the target to grow.",
            },
            children: [
              {
                id: "Lightning-Harvest",
                title: "Lightning Harvest ",
                tooltip: {
                  content:
                    "Harvest the target. [If the target is below 20% HP this attack does 200% more damage. If this target is a 'plant' type this attack does 500% more damage. If this attack kills the target you have a chance to harvest something.]",
                },
                // Scarecrow
                // Reap what you Sow
                // Bountiful Harvest
                children: [
                  {
                    id: "Inspect-Plants",
                    title: "Inspect Plants ",
                    tooltip: {
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
      content:
        "Shoots a group of [x] seed(s) in a spread from the user. The seeds attach to opponent(s) and cause lightning damage over time. A part of the damage is used to restore your as mana. [x is equal to spell level.]",
    },
    children: [
      {
        id: "Lightning-Plant",
        title: "Lightning Plant",
        tooltip: {
          content:
            "Turn lightning seeds into lightning plants!",
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
      content: "Releases a burst of Kʼawiil-lightning on contact.",
    },
    children: [
      {
        id: "Kʼawiil-Bolt",
        title: "Kʼawiil Bolt",
        tooltip: {
          content:
            "Releases a burst of Kʼawiil-lightning from range.",
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
      content: "Throw a snake shaped lighting bolt to hook onto a target, dealing damage in the process.",
    },
    children: [],
  },
  // Serpents
  {
    id: "Serpent-Skin",
    title: "Serpent-Skin",
    tooltip: {
      content: "Your skin slowly becomes like a serpents. Able to turn on and off scaled armor over your skin.",
    },
    children: [
      {
        id: "Forked-Tongue",
        title: "Forked Tongue",
        tooltip: {
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
          content: "Your skin will adapt to the environment slightly, increased stealth.",
        },
        // Some snakes can fly
        children: [],
      },
      {
        id: "Serpent-Strike",
        title: "Serpent Strike",
        tooltip: {
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
