import React, { useState } from "react";
import Item from "./../elements/item";
import styled from "styled-components";
import { Content } from "./styles";
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

export const Shine = styled.p`
  font-size: xxx-large;
  font-weight: 900;
  animation: color-change 1s infinite;
  display: contents;
  @keyframes color-change {
    0% {
      color: yellow;
    }
    50% {
      color: orange;
    }
    100% {
      color: pink;
    }
  }
`;

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
        difficult life of a lower classes, students with Rank F and E like
        themselves. Different from the life of students Rank B, A, or S.
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
      <div>{SpellCards([["Rebirth Flame", 1, 'fire']])}</div>
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
        In my year, there was even a boy who scored a Rank B, and as expected,
        he became the school idol. Of course, the school's head master didn't
        miss the opportunity to publicize it throughout the city that in his
        school a student had achieved a B Rank.
      </Hitori>
      <Hitori>
        Of course, just receiving a Rank B wouldn't turn a person into a monster
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
        The ride trundled on until we arrived at the dungeon. The other teenagers were the first to run off the bus, the adults were far less willing. The dungeon, this dungeon you could smell before you saw it. It was a sewages system from a previous civilization. The entrance was a man sized hole in the ground. Standing near by was a soldier with a list in his hand.
      </Hitori>
      <Hitori>
        The list was a list of our names. Once we were checked off the soldier left us to our own devices. The organization of the team was left to be decided by ourselves; along with our safety inside the dungeon. As soon as the soldier had walked to one side the teen named ** already started walking towards the entrance, completely ignoring the existence of others. Apparently this was already something normal, since right after he took the first step, the other 6 teenagers followed him entering the dungeon, all while ignoring the adults and me.
      </Hitori>
      <Hitori>
        The adults, on the other hand, started to exchange some information and decide tactics. In the end, the woman with the one eye, was determined to be the leader of the group. When almost everything was decided, she looked at me and commented, "You're not as hot headed as the other young ones, what are your thoughts?."
      </Hitori>
      <Hitori>
        Some adults looked at him surprised, maybe knowing how weak I was, while others looked at him approving the decision. I knew what she meant, since this was not the first time we were doing a dungeon together. 
      </Hitori>
      <Hitori>
        While many thought that I was only afraid of monsters and didn't have the courage to do anything, others with more insightful vision realized countless times that I was never caught in a trap and had several times given valuable information during the raid. That is, I knew much more about the dungeon I invaded than most normal people.
      </Hitori>
      <Hitori>
        While most students spent time reading up on their class and skills. I could not. There was no book about my class, no guide for which skills to pick and combine; so instead I spent that time reading up on the next dungeon I would be sent to. The monsters found inside, the layout and the random factors that have occurred within. Since I had no guide to my skills for survival, I had to survive using my knowledge of the dungeon.
      </Hitori>
      <Hitori>
          Looking back at the one-eyed woman, I calmly replied. "This dungeon is the home of the King of Rats. Inside there is a huge maze of tunnels, with rats the size of ponies roaming within. Most probably, the overly confident teenagers will end up walking around aimlessly inside. Since the rats' sense of smell is very acute, we have practically gained an incredible number of 7 lures to use. Honestly, for me, we can use those 7 to attract as many rats as possible and end their numbers little by little, since if we go to fight the Rat King with a lot of rats still living, when he goes into berserk mode we will be killed."
      </Hitori>
      <Hitori>
          Those who had not fought along side be before seemed surprised by my insight, and willingness to use my class mates as decoys. That was their mistake, they were not my classmates, anyone my own age had long since graduated from dungeon introductions, going into dungeons with higher level adults for protection, or simply become a non-combatant.
      </Hitori>
      <Hitori>
          Moving down into the sewer system a terrible smell of feces and rotten things hanged in the air. If it was the first time I felt this, I might have felt sick, but having passed through this dungeon at least 3 times in the last 2 years, the smell no longer affected me as much.
      </Hitori>
      <Hitori>
        Unfortunately, the same could not be said for my new companions. Looking at the ground, it was possible to see a pool of vomit, most, likely left behind by those teenagers. Fortunately for us this meant they had not got too far after entering, making them easier to trail.
      </Hitori>
{/* Farming the resources from the dungeons by sending people in over and over. */}

While Noah watched the surroundings for something different, the people in his group started to draw the weapons they brought. Unfortunately, no kind of firearm worked after crossing the gate. While it might have been too easy to deal with the low rank Fortresses if they could use guns, as one went into the high rank Fortresses, the monsters were all strong enough to resist the firearms of humans.

This was tested in abandoned Fortresses, since if no one invades a Fortress after some time, the monsters inside start to come out the gate and attack everything they see ahead. Once a Rank C Fortress was responsible for the destruction of an entire village since there was no blessed powerful enough there. From then on, the government had to adopt measures so that at least blessed rank F and E take care of the low rank Fortresses, thus distributing the staff correctly and not wasting manpower.

When everyone had equipped their melee weapons, Noah finally realized something strange: the noise!

"Shit, the Fortress is not making noise!" Noah spoke quickly while looking at the man with the scar.

"So what if it's not making noise?" A fat man asked in a presumptuous tone. It was he who proposed to go straight to kill the King of the Rats, but Noah refuted the idea he gave and left him with a sour mood.

Noah looked at him with a disappointed look and shook his head. He knew the fat man was a middle-aged Blessed Rank E who never managed to actually reach the strength of Rank E, being forced to always invade Rank F Fortresses because he was too weak to advance Rank. Even the man, being more than 30 years old, never bothered to learn or study the Fortresses he invaded. Hence came the disappointment Noah had for the man who only depended on having a stronger Blessing to survive until today.

"Are you dumb?" asked the man with the scar while looking at the fat man. "The most striking feature of the King of the Rats Fortress is the wind that runs in here at such a high speed that it seems to be whistling. Can you hear any whistling by chance?"

Hearing the scar man's question, the fat man finally noticed his own folly and realized that the whistling noise he always heard around here was not present this time. "What's happening?" He asked with a little fear.

Noah wanted an opportunity to get away from the group without arousing suspicion and test the blessing he received from Lucifer, and now the opportunity had fallen right in his lap. "Something must be wrong. I'm going for a walk through the Fortress to look for it; you guys keep an eye out for the 7 baits."

"Don't die needlessly." Said the man with the scar. Taking a final look at Noah, he and the other adventures chased after the vomit trail. After going a few times to Fortresses with Noah, he knew this boy would not die here even if something abnormal happened.

However, nobody knew that something that could really kill anyone there was truly happening inside that Fortress…

    </Content>
  ),
};
