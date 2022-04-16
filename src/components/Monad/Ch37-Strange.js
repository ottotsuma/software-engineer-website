import React from "react";
import { Content } from "./styles";
import SeaPeopleFunction from "./SeaPeople"; // 7
import { Otto as OttoStats } from "./People";
import {
  Otto,
  Lubin,
  Arrilian,
  Jarvia,
  Kaja,
  Garin,
  Milo,
  Chu,
} from "./CharacterFonts";

function Intro(props) {
  return (
    <Content>
      <h4>Odd balls</h4>
      {/* Arrilian Sent Otto here. Lubin remains Otto's tutor. Professor Farald teaches this class.*/}
      {/* Strange class */}
      {/* <Otto>
        Arrilian had not given me a choice in the outcome, although it was not as bad as I had originally assumed. I thought the students with unique powers and no-one to back them up were experimented on, after all you never saw any students with strange powers usually. Just rumours. Contrary to my wild fantasy, they were all put in an 'oddballs' class. A class made of students with classes or powers outside of the normal teachers knowledge.
      </Otto> */}
      <Otto>
        Arrilian had not given me a chance after laying his hands on my
        shoulders. From the arena I was taken directly to a classroom with Lubin
        waiting for me. While Kaja was taken off with the woman from the
        military.
      </Otto>
      <Lubin>
        "You have the leisure to day dream?" Lubin said breaking my thoughts.
      </Lubin>
      <Otto>
        "Sorry, it seems I am tired after days of fending for myself and killing
        my fellow students." I replied curtly.
      </Otto>
      <Lubin>
        Lubin gave back a flat smile. "Then I will try my best to get to the
        point. If you connect to the schools system, you'll find I sent you
        messages about your new room and classes you have to attend."
      </Lubin>
      <Otto>
        "New room? I had only just moved in with the Lekia's." I cut him off
        worried I would lose my quiet place.
      </Otto>
      <Lubin>
        "Yes, and now you have showed unusual powers you have been given a new
        room to move you closer to the academy grounds. You could think of it as
        an upgrade. Your room will be near your new class mates, the classroom
        is on the same floor." Lubin stopped to let me digest what he had just
        said.
      </Lubin>
      <Otto>
        "I can still go back there right? To eat and visit?" I inquired not to
        happy at the change.
      </Otto>
      <Lubin>
        Lubin gave a low cough and looked past me. "While there is not a rule
        forcing you to stay in your new quatres exactly... Ah just to eat right?
        I am sure it would be fine." His voice raised a little to the end,
        unsure himself? Or not trusting I only want to eat there. Maybe he knows
        I like a girl from their camp.
      </Lubin>
      <Lubin>
        His eyes rested back on me and he carried on. "Let me finish up so you
        can rest. The academy wants to know everything about your powers,
        including were and when you first acquired them. We both know your class
        was a mage when you arrived, I don't see any physical changes to you,
        and you have not used any mage spells recently. Both me and Arrilian are
        betting you changed your class and these are not faith powers." He
        inquired.
      </Lubin>
      <Otto>
        So, I told him. I was too tired to lie. Although I did skip over any
        items I found, I told him everything even about Ekʼ Chuah, the God I had
        found in the temple, who since giving me this power had been
        un-contactable ever since.
      </Otto>
      {/* Nobles argue */}
      {/* Niyoshons leave */}
      {/* Off to fight in the war */}
      <p>
        "Now that you are all at a point were you understand the very basics,
        it's time for you to learn the next step. Understanding the fundamentals
        of why it works. Why when you put attribute points into Strength do you
        get stronger? Why do you get attribute points at level ups? Why do you
        level up?"
      </p>
      <p>"I just kind of thought that's just how it worked."</p>
      <p>
        "Well your not the first or only to think so. For the longest time if
        anyone did care their voice was not recorded. We actually owe to
        parities for our current theories in Alden. The witch of the west and
        the Niyoshons. Thanks in part to their, alternative views on subjects.
        We currently believe that, and pay attention now." He turned and started
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
        stronger.Similar effects happen for the other attributes. So the
        attribute points are a display of how much foreign manner you have to be
        distributed. So what happens if you save up your attribute points?"
      </p>
      <p>
        "Nothing? I stored up attribute points a few times and nothing
        changed.." Otto replied after being picked.
      </p>
      <p>
        "On the surface yes. However, this is a real lesson you should be
        mindful of. The system displays some attributes to you, but nothing
        everything about your body and your mana. Some of the attributes are
        hidden. Let me give you some examples. Can anyone tell me their HP
        regeneration rate per second? Your spell casting time reduction?
        Experience points increase or decrease percentage?"
      </p>
      <p>
        Professor Farald waited for long enough that the silence almost felt
        awkward before saying "These are things that the system will not tell
        you directly. You have not read the studies conducted on these topics,
        but I have. Should you trust me then I can report that there are
        negative effects associated with storing up the spare mana inside your
        body. The body tries it's best to distribute the mana in the absences of
        your guidance so there are effects. Don't let this dissuade you from
        saving up your points of course. Just a little something to keep in mind
        before a life and death situation."
      </p>
      <div className="BreakPoint" />
      <Otto></Otto>
      <SeaPeopleFunction Chapter={7} />
    </Content>
  );
}
export default Intro;
