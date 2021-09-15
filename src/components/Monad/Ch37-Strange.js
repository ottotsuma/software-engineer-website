import React from "react";
import { Content } from "./styles";
import SeaPeopleFunction from "./SeaPeople"; // 7

function Intro(props) {
  return (
    <Content>
      <h4>Odd balls</h4>
      {/* Strange class */}
      {/* Nobles argue */}
      {/* Leikans leave */}
      {/* Off to fight in the war */}
      <p>
        "Now that you are all at a point were you understand the very basics,
        it's time for you to learn the next step. Understanding the fundamentals
        of why it works. Why when you put stat points into Strength do you get
        stronger? Why do you get stat points at level ups? Why do you level up?"
      </p>
      <p>"I just kind of thought that's just how it worked."</p>
      <p>
        "Well your not the first or only to think so. For the longest time if
        anyone did care their voice was not recorded. We actually owe to
        parities for our current theories in Alden. The witch of the west and
        the Leikans. Thanks in part to their, alternative views on subjects. We
        currently believe that, and pay attention now." He turned and started
        drawing on the board behind him. A human body at first....
      </p>
      <p>
        "A level up occurs because you have stored up foreign mana, mana that is
        not naturally occurring in your body. Your body can no longer handle the
        excess and starts to adapt the mana to your own, this process changes
        your body, making your natural mana capacity a little larger along with
        your health points, that is to say you become more robust. Two questions
        now, only answer one each when called upon by me. How does it change
        your body? Where does this foreign mana come from? ***name****"
      </p>
      <p>"I can answer either?"</p>
      <p>"Yes, since you are first."</p>
      <p>
        "The foreign mana comes from the monsters we kill or from quests though
        the gods."
      </p>
      <p>"Yes, that is the current thought. And ***name***?"</p>
      <p>"The mana goes into your body, thats how you get stronger."</p>
      <p>
        "Very good, the mana does go into your body. If we stick with the
        strength analogy, the mana breaks down and rebuilds your muscles to
        increase the mana flow and storage in the muscles, therefor making you
        stronger.Similar effects happen for the other stats. So the stat points are a display of how much foreign manner you have to be distributed. So what happens if you save up your stat points?"
      </p>
      <p>
          ""
      </p>
      <div className="BreakPoint"></div>
      <SeaPeopleFunction Chapter={7} />
    </Content>
  );
}
export default Intro;
