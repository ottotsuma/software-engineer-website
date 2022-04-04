import React, { useState } from "react";
import Item from "./../elements/item";
import styled from "styled-components";
import { Content, Shine } from "./styles";
import Spin from "./../elements/spin";
import Quest from "./../elements/quest";
import LevelUp from "./../elements/levelup";
import Otto from "./People";
import Equipment from "./../elements/equipment";
import Stats from "./../elements/stats";
import Spells from "./../elements/spells";
import { Hitori } from "./CharacterFonts";
import { Hitori as HitoriStats } from "./People";
import SpellCards from "./SpellCards";

export default function HitoriStoryFunction(props) {
  return typeof props === "number"
    ? HitoriStory[props]
    : HitoriStory[props.Chapter];
}

export function WritingWheel() {
  return (
    <div>
      <p>1: They are in a zone of comfort</p>
      <p>2: But they want something</p>
      <p>3: They enter an unfamiliar situation</p>
      <p>4: Adapt to it</p>
      <p>5: Get what they wanted</p>
      <p>6: Pay a heavy price</p>
      <p>7: Then return to the familia situation</p>
      <p>8: Having changed</p>
    </div>
  );
}

export const HitoriStory = {
  0: (
    <Content style={{ overflowWrap: "anywhere" }}>
      <h1>Hitori</h1>
      <Hitori>
        On a long road, our large and exquisite black wagon thundered along in
        the heat alone. Inside, a group of people accompanying me were doing
        different things, completely ignoring the picturesque view just outside
        the window.
      </Hitori>
      <Hitori>
        Endless grass spread out to the horizon. Petite flowers of various
        colours broke up the endless green. Inside the wagon some teenagers were
        playing slaps, the noise they were making while laughing and having fun,
        pushed out any chance for me to catch up on lost sleep. I enjoyed the
        night shifts solitude, but this was the payment I had to make.
      </Hitori>
      <Hitori>
        At the back side of the wagon, some older men and women were sitting
        without making a noise. They all sat back, their eyes closed with
        passive faces. Sometimes it was possible to see a few of them sighing.
        The difference between the group who had experienced this before and the
        group of teenagers who were going there for the first time.
      </Hitori>
      <Hitori>
        But even with the teenagers being very noisy, the adults did not voice
        their complaints. They, like me, knew that on the way back, after
        everything they would go through in the dungeon, these excited teenagers
        would no longer differ from them.
      </Hitori>
      <Hitori>
        The first time I was the same, well maybe not as energetic as this lot.
        I had a drive to test my new powers, get rich quick but life wasn't like
        that, no. Life was too far from what I imagined.
      </Hitori>
      <Hitori>
        After seeing so many of my friends and companions die in front of me
        without being able to do anything, once they see, they too will finally
        understood how weak and insignificant they really are. This was the
        difficult life of a lower classes, students with rank F and E like
        themselves. Different from the life of students rank B, A, or S.
      </Hitori>
      <Hitori>
        Sitting just behind the group playing slaps were some teenage girls,
        since they were in the seats in front of me it was hard not to over hear
        their whispering.
      </Hitori>
      <p>"What is it, Hide?" The friend asked.</p>
      <p>
        "You weren't planning on going to talk to him, Utano?" Hide asked her in
        a light whisper.
      </p>
      <p>"Do you think he's cute too?" Utano replied quickly.</p>
      <p>
        After hearing what her friend said, Hide sighed and answered calmly. "I
        can see he's cute. However, since you are the oldest in your family,
        you've never heard of him. He's infamous. He's an F rank, but the power
        he has is completely useless in a dungeon".
      </p>
      <p>"Why? Is he that weak?" Utano asked back with a curious glance.</p>
      <p>
        "Weak would be an understatement; his abilities are useless. They say
        he's got a unique class, so he was moved into the special class, but
        after finding out how weak he was they moved him back into F rank. His
        looks started to get better bit by bit until he eventually looked that
        good, that's when they realised what kind of abilities he gained." Hide
        explained.
      </p>
      <p>
        "Oh... How is he even still alive? If he has no fighting abilities, why
        does he even come into dungeons? Since he entered so many years ago with
        the strength of an unskilled, it wouldn't make sense for him to leave
        there alive every time, since even some with good abilities can't..."
        Utano was shocked.
      </p>
      <p>
        "Nobody knows... Some say he only hides when he enters the dungeon,
        others say he keeps giving support from afar. Either way he's just going
        to be a burden on us." Hide said.
      </p>
      <Hitori>
        Utano's shoulders slumped down after hearing what Hide had said. I tried
        to not listen in, but they were in the next row, they could of moved.
        The teenagers began betting on who would kill more monsters. Some of the
        adults talked about how much money they would get from this dungeon, and
        some even ridiculed me out loud, saying how useless I was.
      </Hitori>
      <Hitori>
        I tried my best not to pay attention to any of this. I opened my skills
        menu and focused on then new skill I had unlocked but had not used yet,
        a part of me was hoping I would never have to use it.
      </Hitori>
      <div>{SpellCards([["Rebirth Flame", 1, "fire"]])}</div>
      {HitoriStats(1)}
      {/* Fire bird boy, revives on death. */}
    </Content>
  ),
  1: (
    <Content style={{ overflowWrap: "anywhere" }}>
      <Hitori>
        Anyone who had ever heard of me always thought I was useless, always
        thought that the abilities I had were useless, but only I knew the
        truth. My class was something my farther had found and protected,
        something he passed to me when I was old enough. It was an unusual
        class, with non-conventional abilities.
      </Hitori>
      <Hitori>
        While most of my classmates awakened regular classes, fighter, mage &
        rouge. However not everyone was equal. Obviously, some people were
        stronger than others, even with the same skills. So in order to make it
        easier to distinguish each one in terms of strength, the students were
        separated among several Rankings [F, E, D, C, B, A, and S]. After
        unlocking their own abilities, the students could apply for a test of
        abilities where an evaluator would test how lethal or useful that
        person's abilities were and what the potential of that person's
        abilities was for the future; students were separated by Rankings in
        this way.
      </Hitori>
      <Hitori>
        In my year, there was even a boy who scored a rank B, and as expected,
        he became the school idol. Of course, the school's head master didn't
        miss the opportunity to publicize it throughout the city that in his
        school a student had achieved a B rank.
      </Hitori>
      <Hitori>
        Of course, just receiving a rank B wouldn't turn a person into a monster
        with the power to destroy a village. No, all the students started from
        the bottom, but the amount of help you would receive and what you could
        do in the future was affected by your rank. Since your student rank
        included your potential and not your current power, achieving true B
        rank power would take time.
      </Hitori>
      <Hitori>
        Honestly even with my new ability, I did not have much confidence.
        Firstly I had to die before the ability would even happen, who knows if
        it might malfunction. Even if it works, I come back with 10% of my total
        HP. So I go from being the lowest possible rank F to the lowest possible
        rank F +10%. It's hardly a game changer.
      </Hitori>
      <Hitori>
        The only thing I had confidence in was that once I was a higher level, I
        could unlock the new ability. I could already see some of its
        information now, even if it was grey and blurry. "Phoenix Flame", there
        was some text about it dealing damage, but that would be exactly what I
        need. If I could at least have an ability that caused some damage I
        could be re-evaluated as a low rank F instead of a useless rank F.
      </Hitori>
      <Hitori>
        The ride trundled on until we arrived at the dungeon. The other
        teenagers were the first to run off the bus, the adults were far less
        willing. The dungeon, this dungeon you could smell before you saw it. It
        was a sewages system from a previous civilization. The entrance was a
        man sized hole in the ground. Standing near by was a soldier with a list
        in his hand.
      </Hitori>
      <Hitori>
        The list was a list of our names. Once we were checked off the soldier
        left us to our own devices. The organization of the team was left to be
        decided by ourselves; along with our safety inside the dungeon. As soon
        as the soldier had walked to one side the teen named ** already started
        walking towards the entrance, completely ignoring the existence of
        others. Apparently this was already something normal, since right after
        he took the first step, the other 6 teenagers followed him entering the
        dungeon, all while ignoring the adults and me.
      </Hitori>
      <Hitori>
        The adults, on the other hand, started to exchange some information and
        decide tactics. In the end, the woman with the one eye, was determined
        to be the leader of the group. When almost everything was decided, she
        looked at me and commented, "You're not as hot headed as the other young
        ones, what are your thoughts?."
      </Hitori>
      <Hitori>
        Some adults looked at him surprised, maybe knowing how weak I was, while
        others looked at him approving the decision. I knew what she meant,
        since this was not the first time we were doing a dungeon together.
      </Hitori>
      <Hitori>
        While many thought that I was only afraid of monsters and didn't have
        the courage to do anything, others with more insightful vision realized
        countless times that I was never caught in a trap and had several times
        given valuable information during the raid. That is, I knew much more
        about the dungeon I invaded than most normal people.
      </Hitori>
      <Hitori>
        While most students spent time reading up on their class and skills. I
        could not. There was no book about my class, no guide for which skills
        to pick and combine; so instead I spent that time reading up on the next
        dungeon I would be sent to. The monsters found inside, the layout and
        the random factors that have occurred within. Since I had no guide to my
        skills for survival, I had to survive using my knowledge of the dungeon.
      </Hitori>
      <Hitori>
        Looking back at the one-eyed woman, I calmly replied. "This dungeon is
        the home of the Gangikozō King. Gangikozōs are hairy, monkey-like water spirits which usually inhabit rivers. Their most notable features are their webbed hands and toes, and their long teeth which are sharp and jagged like files. Inside there is a huge maze of tunnels,
        with Gangikozōs the size of ponies roaming within. Most probably, the overly
        confident teenagers will end up walking around aimlessly inside. Since
        the Gangikozōs' sense of smell is very acute, we have practically gained an
        incredible number of 7 lures to use. Honestly, for me, we can use those
        7 to attract as many Gangikozōs as possible and end their numbers little by
        little, since if we go to fight the Gangikozō King with a lot of Gangikozōs still
        living, when he goes into berserk mode we will be killed."
      </Hitori>
      <Hitori>
        Those who had not fought along side be before seemed surprised by my
        insight, and willingness to use my class mates as decoys. That was their
        mistake, they were not my classmates, anyone my own age had long since
        graduated from dungeon introductions, going into dungeons with higher
        level adults for protection, or simply become a non-combatant.
      </Hitori>
      <Hitori>
        Moving down into the sewer system a terrible smell of feces and rotten
        things hanged in the air. If it was the first time I felt this, I might
        have felt sick, but having passed through this dungeon at least 3 times
        in the last 2 years, the smell no longer affected me as much.
      </Hitori>
      <Hitori>
        Unfortunately, the same could not be said for my new companions. Looking
        at the ground, it was possible to see a pool of vomit, most, likely left
        behind by those teenagers. Fortunately for us this meant they had not
        got too far after entering, making them easier to trail. After awhile
        everyone had noticed the same, the only noise was our own footsteps,
        everyone in our group had ran this dungeon at least once. I imagine some
        of the adults here had run this dungeon almost a hundred times.
      </Hitori>
      <Hitori>
        "So what if it's not making noise?" A fat man asked in a presumptuous
        tone. I knew the fat man was a middle-aged who should of become a rank
        E, however not everyone achieves their predicted rank. Since he was rank
        F he was being forced to always invade rank F dungeons because he was
        too weak to advance rank. Even the man, being more than 30 years old,
        never bothered to learn or study the dungeons he invaded. He always left
        me with the bitter taste of disappointment.
      </Hitori>
      <Hitori>
        "Are you short a few marbles?" asked the woman with one-eye. "The most
        striking feature of the King of the Gangikozōs dungeon is the echo that is made
        in here, even when you cannot see the Gangikozōs you can hear their cackles and scratching. Can you hear anything like that?"
      </Hitori>
      <Hitori>
        Hearing the womans's question, the fat man finally noticed his own folly
        and realized that the noises he always heard around here was
        not present this time. "What's happening?" He asked with a little fear.
      </Hitori>
      <Hitori>"Something must be wrong." I muttered.</Hitori>
      {/* Farming the resources from the dungeons by sending people in over and over. */}
    </Content>
  ),
  2: (
    <Content style={{ overflowWrap: "anywhere" }}>
        <Hitori>
            The sewer was a twisted maze, were the monster Gangikozōs would hound you and wear you down until you found the kings lair. To say that I was not nervous would be a lie. On numerous occasions someone expelled me from the group inside the dungeon because of how weak I was, although this time was different it did not calm me any more so.
        </Hitori>
        <Hitori>
            The eerie silence had us all on edge. Preparing myself mentally, I took the short sword I was given by the school. At some point, in a side passage, a pair of black eyes poked slightly out of the water and began to watch me cautiously. Just as the Gangikozō watched me, I watched him, trying to predict what the Gangikozō would do.
        </Hitori>
        <Hitori>
            'This Gangikozō is watching me… combined with the silence, something is very wrong this time. Usually these monsters just attack without thinking about the consequences, just following their instincts, but not that Gangikozō; he is intentionally watching me and analyzing his opponent.
        </Hitori>
        <Hitori>
            I turned to signal the others in the group, only to notice over my shoulder at some point, somehow, we must of been surrounded. We had kept our eyes pealed and ears open. The Gangikozōs this time around were acting much smarter then the past. My thoughts were soon rudely cut short, the monster jumped out of the water towards me with its teeth open as it let out a loud shrill cry.
        </Hitori>
        <Hitori>
            Only one of us two would make it out alive after this confrontation, while this was not the first monster I had killed, I was far from an expert. Over the past 2 years I had solo killed less monsters then I had fingers. I pointed the sword in it's direction as it lunged towards me.
        </Hitori>
        <Hitori>
            In a split second the monster that was already in the middle of a jump realized that jumping was not the smartest decision it could have made. Since the Gangikozō's size was almost as big as a pony, it was not difficult for I to stab at it.
        </Hitori>
        <Hitori>
            The sword penetrated only 4 cm into the Gangikozō's rib before stopping. I quickly plucked the sword out of the wound, causing the blood to spill out more intensely, as well as doing more damage to the Gangikozō's organs than leaving the sword there.
        </Hitori>
        <Hitori>
            It must of been feeling intense pain in its ribs, because its anger exploded and it launched itself again towards me. Learning from its mistake, this time the Gangikozō did not jump but came running across the floor after me, causing the cut from the sword to continue to grow and more blood to leak.
        </Hitori>
        <Hitori>
            The Gangikozō was visibly more angered, but I knew I couldn't remain that this for long. As the Gangikozō ran towards me, I could sense the danger running though me. I lunged my sword into the side of it's neck as it pushed me down. It's teeth sunk into my collar bone and further, ripping out a merchants amount of flesh.
        </Hitori>
        <Hitori>
            At that point I was not sure who was screaming louder, me or the monster. I pulled down on the sword hard, trying to direct all my pain though my arms, pulling smoothly in places and yanking it over and over in others, until the monsters screaming stopped. It's head half hanging from its body.
        </Hitori>
        <Hitori>
            [+1 Exp]
        </Hitori>
        <Hitori>
            Everyone else was stronger then me, with abilities, they should of faired better then me. I am not sure I could be of any more use at this point. My vision blurred, I did not want to dull the pain, I needed it keep me awake. The worst thing I could do right now is sleep.
        </Hitori>
        <Hitori>
            The first to find me was the woman with one eye. I'm sure my vision was worse then hers right now. She called over the healer in the group, I could not see how, but I could feel a warm, electric, jagged feeling pulse across my body, it focused on the hole in my collar. Soon the feeling came back, like pins and needles across were my flesh had been ripped from me. Like that, I felt my body was renewed, even if my mind was still unsteady.
        </Hitori>
        <Hitori>
            We had to take some time to rest, while the others only had minor injuries, the healer had to use lots of their mana to help me with mine. After our rest we tried to find the teenagers as quickly as possible, the dungeon was stranger then before, they were not longer acting as lures for us to gather up the monsters and finish them off in a pincer of powers but stalking us like prey. It would be better to march in numbers now.
        </Hitori>
        <Hitori>
            The teenagers were not being quiet, not that they were joking around still. The sounds of battle bounced and echoed off the walls of the sewer system. The teenagers, each holding their own weapon, stood in a clearly awkward formation that they learned in class.
        </Hitori>
        <Hitori>
            Theirs was a group of seven, 5 students with rank E and 2 with rank D. The rank D's were Utano and Hotaru. While this was their rank they could achieve in the future, it was usually also a good indicator of their combat capabilities. Hotaru and Utano were both mages, Hotaru fought up close with Chokutō blade in one hand and small Kabutowari blade in the other, Utano used a wand from behind. The group also had two fighters who used bows and four who used melee weapons.
        </Hitori>
        <p>
            "What are these monsters?" Hide shouted nervously, sword in hand.
        </p>
        <p>
            "I don't know. Just keep them back, and kill as many as possible will ya?" said a boy who held a large wooden shield to her right.
        </p>
        <p>
            "Stop getting in the way, you're making me look bad in front of Hotaru!" complained a girl with a short bow trying to shoot though the gaps in their formation.
        </p>
        <p>
            "They are just rank F monsters, it should hardly be a struggle, why do you all keep moving back?" demanded Hotaru, who between casts of manaballs and magic arrows, kept feeling the hot liquid fill his mouth.
        </p>
        <p>
            "Isn't it too dangerous? For F rank I mean, they are really sneaky." Said a bow carrying two swords who had been snuck up on and had his calf bitten into, dragged down though the sewage water before managing to break free with the help of the others.
        </p>
        <p>
            "You just stay away from me." Hotaru commanded holding his hand over his nose.
        </p>
        <p>
            
        </p>
        {/* Wendy = Utano, Harry = Hotaru, amy = Hide */}
"So, let's g-..." Before Hide could finish the sentence, three Gangikozōs peeked above the water's surface, watching the 7 teenagers.

Seeing the three Gangikozōs were each the size of a pony, some of the teenagers finally felt scared. Looking at a pair of eyes the size of two tennis balls, Utano swallowed hard, imagining the size of these monsters' mouths.

Seeing the humans start to get scared, the Gangikozōs took the opportunity and launched themselves towards their prey. Even though they were outnumbered, the Gangikozōs had much better coordination with each other, thus gradually causing the wounds they inflicted on the adolescents to increase steadily.

At some point during the battle, one of the Gangikozōs bit the ankle of a boy who carried two swords, and feeling the extraordinary pain in his own leg, instinctively the boy let go of his own weapons and used his Blessing to the fullest, allowing him to become much faster and more agile than that he was previously.


Unfortunately, the Gangikozō had already sunk its teeth into the boy's leg and nothing the boy tried to do could make it let go of that leg. The rodent's huge teeth gradually tore through the boy's flesh more and more, smearing it completely with blood.

Hotaru, feeling his heart racing, also used his own blessing to the fullest and hurled a huge block of ice towards the Gangikozō that had grabbed the boy's leg. But that only made the situation worse, since from the blow, the Gangikozō, still with its mouth clamped into boy, was flung into the river of sewage, carrying the boy with him and leaving a bloody trail of fleshy remains that tore off from the boy's leg. All-the-while the boy's cries of despair echoed through the tunnel.

For a few moments it was possible to hear the boy struggling and asking for help in the water, but after a few seconds, only silence permeated the area.

At that time, all the teenagers in the group knew they had messed up when they came alone. They thought they could kill the monsters however they pleased because they were blessed with rank E and D Blessings, but life showed them that the only certainty anyone can have is that one day he will die. Otherwise, everything is uncertain.

Having lost a companion, the other 6 teenagers despaired and started to use their Blessing skills nonstop on the remaining two Gangikozōs until the Gangikozōs could no longer stand and died.

Sitting in a corner of the sewer, the teenagers no longer even cared about the unpleasant smell of the place. The only thing they wanted now was a comfortable place to rest, a good bed to sleep in, and never to return to this place. But they knew that they could no longer leave without a reason after having entered the fortress, as they signed a contract with the government before entering stating that they would only leave if completion was impossible or they had successfully completed the invasion of the fortress.

"Roy... I can't believe I'm never going to see Roy again..." Hide sighed, as she stopped the tears from falling when she remembered the boy who had been taken by the Gangikozō.

"Well, my dad warned me to be careful and prepare for losses... I just didn't think it would happen anytime soon," Said the shield boy.

While they rested and mourned, Utano used her own blessing to heal the injuries that everyone received during that battle while she cried and blamed herself for not being able to do anything to save Roy.

At some point, a phrase that Hide spoke to her on the bus came to Utano's mind. "He always manages to slip out alive with one or two members of the invasion team."

Remembering Noah, Utano looked around for the Blessed who always came out alive along with someone else, but didn't see him anywhere. She knew that for someone to stay alive for so long in the fortresses oftentimes the person would be the only survivor of the team itself in an invasion. But Noah always left alive with more than one person, so if she stayed with him, she would probably be able stay alive here. But now it was too late; even looking around, she found nothing of him.

'If I had gone to talk to him, he could have told me some ways to survive in here. Now, I don't even know if I will be able to get out alive myself, much less with someone else with me.' Utano thought to herself as she looked at Hide with an angry look, while Hide had no idea why Utano would be mad with her.

A few moments ago, the adults reached the teenagers but followed the strategy that Noah had suggested and their leader agreed with: to just remain quiet while watching the fierce battle that the teenagers had. Even when they saw the boy die, they didn't move an inch. Having seen so many people die over the years as Blessed, it hardened their hearts to the point they didn't mind seeing some arrogant children having some difficulty. Many were happy and approved of Noah's idea of ​​letting the teenagers be the bait for them, since now the teenagers had stopped being arrogant, in addition to getting rid of two monsters in the dungeon on their own while the elders watched without injury.

Seeing that the now previous children had become much more humble than when they arrived, the scarred man made the decision to unite the two groups so that they would be more likely to kill the Gangikozō King, since if he were to fight with only the group of 8 people who he had, it would be a very difficult battle. He had noticed something strange this time about the Gangikozōs, but did not quite remedy yet what it was...

However, as his group approached, the scarred man noticed that while the other children were happy to see them coming, their leader got angry and stood up from the floor while shouting, "Why didn't you come to help us?!"

Hearing Hotaru's question, the scarred man just raised an eyebrow and answered, "Why should have we?"

Hearing the man's question, Hotaru was speechless. After all, they were under no obligation to help them, but he also felt bad when he remembered Roy. "We came in here together, so you had to help us!"

Seeing that the boy was already ignoring reason just to blame someone, the man who was not obliged to put up with it walked forward towards Hotaru until his hand grabbed the boy's throat and lifted him off the floor. "Who do you think you're talking to, boy? If you're feeling bad that your little friend died, do you want me to send you to hell with him? We came here to invite you to join us so that we have a better chance of surviving inside here and killing the Gangikozō King. As we already have 13 people, you will not be missed if an accident were to happen. Do you understand me?" the man asked, as he tightened his grip on the boy's throat.

Looking at the man who held him off the floor by the throat, Hotaru finally felt the fear of death for the second time since entering the fortress. He looked into that man's eyes and knew that if he did anything wrong, that man would kill him right there and then. Fearing for his life, Hotaru nodded desperately in agreement and begged the man to let go of his throat.

Upon falling to the ground, Hotaru felt completely humiliated while he had to breathe heavily the stinky sewage air. Inside his heart, Hotaru vowed to take revenge on everyone who was forcing him to go through this.
    </Content>
  ),
};
