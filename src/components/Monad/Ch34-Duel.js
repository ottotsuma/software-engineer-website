import React, { useState } from "react";
import Item from "./../elements/item";
import styled from "styled-components";
import { Content } from "./styles";
import Spin from "./../elements/spin";
import Quest from "./../elements/quest";
import LevelUp from "./../elements/levelup";
import { SeaPeople } from "./SeaPeople";

function Intro(props) {
  return (
    <Content>
      <h3>Duel</h3>
      <p>
        Linhart wore a bright red robe with white trim. Second years wore robes
        that represent their element. Third years got a white trim, to indicate
        they had chosen a path of continued learning at the academy. Once one
        became a professor at the academy they would receive a fully white robe.
      </p>
      <p>
        I did not need to look up what Linhart's bright red robe represented, as
        the trim on my robe was the same color. We were both fire mages.
      </p>
      <p>
        He did not wait for me to move first and launched a wave of flames
        across the field towards me. I layed on the floor, although the flames
        would engulf me the damage would not be too bad since he launched it so
        far away the flames spread out in an arc. I had the shield across my
        back when I jumped down so the damage was minimal.
      </p>
      <p>
        I gathered my mana while I was down and once the flames dispersed I
        jumped up and shot a fire ball at him. I grabbed my shield by the edge
        and pulled it up and ran in a zig zag pattern forward.
      </p>
      <p>
        Normally I would just try to maintain the distance between us but I
        could tell he was a higher level with more mana then me so if I
        exchanged in a fair fight I would lose over time. He saw me running
        towards him and shot out fireballs quickly. I raised the shield and
        tried to avoid them as best I could while moving forward. The flames
        burnt the shield and scorched my robe but I held on and when I was close
        enough to him, I jumped back.
      </p>
      <p>
        He had activated a flame shield around himself, but not just upfront but
        all around. It was really impressive as most mages do not bother to
        learn full shield because of its massive consumption of mana. However
        this is just what I wanted, while he was busy producing & then
        maintaining the shield I pointed my wand at him and gathered the mana
        below his feet. This spell was great for by passing shields, doing high
        damage but normally was inaccurate and too slow to cast. However this
        opportunity he had given to me was perfect.
      </p>
      <p>
        The mana gathered really slowly below his feet, it should be easier for
        him to control the mana around him then for me to control the mana
        around him, what little mana did no go into making his shield had
        gathered into a mass below his feet, the whole process took almost 2
        excruciating seconds, going on 3.
      </p>
      <p>
        Then I exploded the mana below his feet, bringing up from under him and
        coating him in my flames. I thought I had dealt a great blow against
        him, but the moment I heard his screaming he below the shield around him
        out, another rare spell to pick. It uses up the energy gathered in your
        shield to do damage, so if the shield has been used to defend the damage
        the explosion would do would be very little.
      </p>
      <p>
        Needless to say it took me off guard and slammed into me directly. The
        blast knocked me down to the floor the warning sounds ringing in my ears
        about my low HP. After he had put the fire out he threw flames all over
        the arena from his wand using a flamethrower attack. The match ended
        there as my HP had become too low.
      </p>
      <p>
        After my loss to Linhart I felt down about my prospects of surviving the
        class challenge. To beat every other student from each class. It was an
        impossible task for anyone. Why was I even nominated, I am don't excel
        at anything. I am not even good with magic. Did my whole class just hate
        me?
      </p>
      <p>I really miss my dad.</p>
      <div className="BreakPoint"></div>
      <p>
        I needed to get stronger. I could not make the excuse he was a third
        year and had a higher level then me and better equipment. Third years
        staying in the academy means he is not a combat mage and one of the
        weakest from his year. I need to get stronger fast, the only ways was to
        get new equipment, but that costs money.
      </p>
      <p>
        I walked away from the arena and to the training stones outside. I am
        not sure which one would be helpful but dueling was not what I wanted to
        do right now. At least the training area would match me up with people
        near my level, I like the arena's realism but it had no rank system so
        the fights would be unfair at times.
      </p>
      <p>
        I ending up standing just outside the arena in one of the plazas unsure
        of where I should go or what to do. That's when someone had called me,
        although at first I thought it was not me they were calling "Arena
        girl." Until a blonde boy had walked over to me. It was Linhart the boy
        I had just dueled with. I didn't want to be rude, it's not like he was
        at fault for anything but I was not too happy to see him right now.
      </p>
      <p>
        "Hey, I was just leaving." I said to him, hoping he would take the hint.
      </p>
      <p>
        "Ah, I hope our match didn't upset you. I just wanted to say you were
        really creative with your spells and was hoping to invite you hunting in
        the training area. So we could trade tips, I might not be as combat
        focused as you but I am a third year so there are somethings I have
        picked up. What do you say?" He asked me, it was hard to say no, he
        seemed genuine.
      </p>
      <p>
        "Y-yeah, okay. Sounds nice. I need to get stronger fast, actually." I replied pushing the hair away that had fallen down to my face.
      </p>
      <p>
        "Let's go now then. I know the best place inside." He said with a smile.
      </p>
      <p>
        We went inside the training area to kill monsters and collect tokens together, I had not really been in here as often as other students. While most students from the countryside want to fight monsters I was born in the large city of Soldenheim. There are few monsters in the traditional sense but plenty of evil humans. I wanted to join the guard for the city and work my way up to guarding the Baron, so I spent most of my time dueling other humans not monsters.
      </p>
      <p>
        Linhart did as he said he would and took me to an area he said is normally dominated by second or third years because it is the easier to get tokens this way then the other monsters. I guess he means the non-combat students as the monsters only dropped 1 token randomly not every time and could hardly fight back. It was easy but if I could not trade this tokens in for items it would of been a waste of time as I was not really learning anything. 
      </p>
      <p>
        The monsters were little birds. They were kind of cute with a small beak, hopping about pecking at the floor to find bugs. They were the lowest level monster in the training area and barely passed as monsters since they had one skill. The skill caused them to quickly move about half an arms length in any direction, this made them really hard to hit with skills like fire ball.
      </p>
      <p>
        Linhart was having and easier time with his wide area skills burning all around the birds but it was a huge waste of mana so he kept having to rest. Over the course of the next 2 hours we had gathered around 20 tokens each. We had decided to take a rest sitting on the rocks watching the birds flutter around pecking at the ground, they were not hostile unless attacked and even then they spent most of the fight just trying to dodge attacks. 
      </p>
      <p>
        Linhart seemed to be kind of zoned out so I called out to him. "What ya doing?"
      </p>
      <p>
        "Ah sorry, I was using that new network the academy had set up to message some friends." He apologized with a smile.
      </p>
      <p>
        "I had forgot about that. I wonder if I have any messages." I reached out with my mana and sure enough there was a connection near the spawn area. Since we were close by I could reach it and connect. There was a message for me sent by the academy.
      </p>
      <p>
        "Class Champion! You are required to attend a meeting for the upcoming tournament in classroom  A-E-107. Failure to attend will result in being confined for 3 days. - Arrilian."
      </p>
      <p>
        My face soured reading that message. As if it was not stressful enough already without having meetings about how, where and when we might die! Needless to say I had little confidence in winning this tournament. I looked at the tokens I had gathered and just hopped I could sell these tokens quickly and buy something useful. People were always looking for ways to cheat the system and get up the rank ladder, buying tokens was the easiest way as long as no teachers found out.
      </p>
      <p>
        {/* He takes her to hunt monsters, she has fun, but then he bullies her out of her tokens with his friends because he knows shes going to die and doesn't care. The backstory we don't know is that he is being blackmailed further up, led along by a girl. */}
      </p>
      <p>The meeting for the constants</p>
      <p>
        I was surprised how many people were at the meeting. The classroom had 2
        students from each class as expected, some of the teachers from the
        classes but also some of the professors who did not or rarely taught.
        Along with some people from the military, they stood out the most
        wearing metal armor or fancy outfits. One group of which was a woman
        with long blonde hair, metal armor trimmed with gold covering most of
        her body and a sword almost my whole height resting against a chair next
        to her. Standing around her were four others in less impressive metal
        chest plates and shin pads but the majority of their armor being leather
        and hide.
      </p>
      <p>
        Not wanting to say anything and catch anyone's attention I moved into an
        empty seat. The first to speak was Arrilian the head of the first years
        and the one who was in charge of the event from the academy.
      </p>
      <p>
        "Thank you for attending today. Joining us here today are some members
        of the military who are sponsoring the event. In attendance today are
        the students partaking in the event, minus those who are unable to
        attend due to, injuries." Arrilian announced from the teachers podium at
        the front of the room.
      </p>
      <p>
        Sponsoring? You mean they are making sure this death match goes ahead
        how they requested. I thought to myself. After all which other party
        would request something so ridiculous.
      </p>
      <p>
        Arrilian continued. "Todays meeting will be a run down of the event, the
        location and what is expected of you. There will be no questions as we
        have a tight seclude to stick to but members of the military you see
        here today will be joining our academy for the next few weeks." Arrilian
        briefly looked over to the blonde woman sitting in the chair who had
        made a face like she was just spat on.
      </p>
      <p>
        "The event will take place inside the jungle east of the academy. We
        have looked at many different options for the location and although the
        north is easier with flat plains and varied environments non of them
        would test the students ability to adapt quite like the wilds of the
        jungle." Arrilian paused for a breath before rattling off more. "The
        south is too dangerous for first year students and the western wood
        would give an advantage to those from the countryside as the woodland is
        similar to Alden, and also were the 2nd years train." He said as he
        stopped to turn the paper on his lectern.
      </p>
      <p>
        "So the south is too dangerous for students but fighting to the death in
        the jungle should be safe for them? Are you a moron?" I blurted out
        without thinking.
      </p>
      <p>
        The room fell silent. I had made a mistake. "Remove her." Arrilian
        bellowed breaking the silence as two teachers stood up and dragged me
        outside by my arms.
      </p>
      <p>
        If they had just thrown me out of the room I would of left embarrassed
        or annoyed I am not sure which but I know I would of just left. However
        they dragged me into a holding cell in a part of the academy that was
        restricted for students and left me there!
      </p>
      <p>I suppose it matters little if I die in a cell or the jungle.</p>
      {Book()}
      {/* {SeaPeople[0]}
      {SeaPeople[1]}
      {SeaPeople[2]}
      {SeaPeople[3]}
      {SeaPeople[4]}
      {SeaPeople[5]}
      {SeaPeople[6]}
      {SeaPeople[7]}
      {SeaPeople[8]}
      {SeaPeople[9]} */}
    </Content>
  );
}
export default Intro;

function Book() {
  return (
    <BookOfWraps>
      {/* https://ottotsuma.github.io/race */}
      {/* file:///C:/Users/snows/Documents/GitHub/ottotsuma.github.io/race.html */}
      <BookOfRaces>
        <Spin
          Array={[
            <Item
              rating="normal"
              stats={{
                sense: +1,
                charisma: +2,
              }}
              name={"Human"}
              effect="Can use all simple tools and weapons."
              src={`https://ottotsuma.github.io/images/jane.png`}
            />,
            <Item
              rating="epic"
              stats={{
                vitality: +1,
                dexterity: +2,
                sense: +1,
              }}
              name={"Goblin"}
              effect="Generate less agro from monsters."
              src={`https://github.com/ottotsuma/ottotsuma.github.io/blob/master/images/goblin.jpg?raw=true`}
            />,
            <Item
              rating="normal"
              stats={{
                vitality: +2,
                strength: +1,
              }}
              name={"Dwarf"}
              effect="Small resistance to spell effects, but lower success with spells."
              src={`https://ottotsuma.github.io/images/dwarf.jpg`}
            />,
            <Item
              rating="normal"
              stats={{
                vitality: +1,
                strength: +2,
              }}
              name={"Orc"}
              effect="Small health regen when in combat."
              src={`https://ottotsuma.github.io/images/orc.jpg`}
            />,
            <Item
              rating="epic"
              stats={{
                magic: +2,
                willpower: +2,
                charisma: +2,
              }}
              name={"Kitsune"}
              effect="Enchanting spells are more likely to succeed."
              src={`https://ottotsuma.github.io/images/kitsune.jpg`}
            />,
            <Item
              rating="rare"
              stats={{
                vitality: +1,
                strength: +1,
                magic: +1,
                dexterity: +1,
                sense: +1,
              }}
              name={"Vampire"}
              effect="Blood magic is always unlocked."
              src={`https://ottotsuma.github.io/images/vampire.jpg`}
            />,
            <Item
              rating="normal"
              stats={{
                dexterity: +1,
                sense: +2,
              }}
              name={"Gnoll"}
              effect="Can gain access to skills early from their Demon Lord"
              src={`https://ottotsuma.github.io/images/gnoll.jpg`}
            />,
            <Item
              rating="epic"
              stats={{
                strength: +1,
                dexterity: +3,
              }}
              name={"Thri-kreen"}
              effect="no dual wielding reduction."
              src={`https://ottotsuma.github.io/images/thri-kreen.jpg`}
            />,
            <Item
              rating="epic"
              stats={{
                vitality: +2,
                endurance: +1,
                magic: +1,
              }}
              name={"Troglodytes"}
              effect="Can produce poison with their bodies."
              src={`https://ottotsuma.github.io/images/troglodytes.png`}
            />,
          ]}
        />
      </BookOfRaces>
    </BookOfWraps>
  );
}

const BookOfWraps = styled.div`
  overflow: hidden;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BookOfRaces = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 300px;
  width: 100%;
`;

// Alden takes part of the republic finding the republic slaves fighting them
// Alden takes people of the republics north and west ans sea people as slaves
// The others are angered by the taken of slaves
// Levy's and kids are sent to the kingdoms dwarven side to defend an attack from the kingdom which is expected
// Core groups move into the republic, south forest to surprise the south, and cross roads.
// this chaos allows more sea people to move in

// Vampire type, more blood taken makes them stronger so often conflict with humans
// Vampire type, more hunger makes them stronger so often hide from humans
// The people coming off the boats don't have to be human
// Merging the stats into a few, Vitality, magic, strength, sense, charm
// No classes? Just race and element?

// killing array that targets above certain mana levels.
// Vampire woman vs Poison woman and Tank man.

// Transferring class of the same rank and type lose 0~9[dice rolling thing] levels.
