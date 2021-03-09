import React, { useState } from "react";

const data = [
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
                      content: ".",
                    },
                    children: [],
                  },
                  {
                    id: "Reap-what-you-Sow",
                    title: "Reap what you Sow",
                    tooltip: {
                      // mixed, depends on the seeds.
                      content: ".",
                    },
                    children: [
                      {
                        id: "Bountiful-Harvest",
                        title: "Bountiful Harvest",
                        tooltip: {
                          content: ".",
                        },
                        children: [],
                      },
                    ],
                  },
                  {
                    id: "Inspect-Plants",
                    title: "Inspect Plants ",
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
const HTML = [];
const uniq = [];
function loopy(array) {
  if (array.length > 0) {
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if (!uniq.includes(element)) {
        uniq.push(element);
      }
      loopy(element.children);
    }
  } else {
    uniq.push({
      title: "BreakPoint",
    });
  }
}
// call the loop function to collect all the data into a single array
loopy(data);
let count = 0;
// loop though the single array to put everything into HTML for display
for (let index = 0; index < uniq.length; index++) {
  const element = uniq[index];
  if (element.title === "BreakPoint") {
    count++;
    HTML.push(<div className="BreakPoint" key={count}></div>);
  } else {
    HTML.push(
      <div key={element.id}>
        <h4>{element.title}</h4>
        <p>{element.tooltip.content}</p>
      </div>
    );
  }
}
function Kʼawiil() {
  const [open, setOpen] = useState(true);
  if (open === false) {
    return (
      <div className="Tree-Outer">
        <div className="Tree-Title" onClick={() => setOpen(true)}>
          <h4>Kʼawiil</h4>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Tree-Outer">
        <div className="Tree-Title" onClick={() => setOpen(false)}>
          <h4>Kʼawiil</h4>
        </div>
        <div className="Tree-Title">{HTML}</div>
      </div>
    );
  }
}
export default Kʼawiil;
