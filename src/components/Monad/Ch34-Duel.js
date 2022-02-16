import React, { useState } from "react";
import Item from "./../elements/item";
import styled from "styled-components";
import { Content } from "./styles";
import Spin from "./../elements/spin";
import Quest from "./../elements/quest";
import LevelUp from "./../elements/levelup";

function Duel(props) {
  return (
    <Content>
      <h4>Duel</h4>
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
      <div className="BreakPoint" />
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
        "Y-yeah, okay. Sounds nice. I need to get stronger fast, actually." I
        replied pushing the hair away that had fallen down to my face.
      </p>
      <p>
        "Let's go now then. I know the best place inside." He said with a smile.
      </p>
      <p>
        We went inside the training area to kill monsters and collect tokens
        together, I had not really been in here as often as other students.
        While most students from the countryside want to fight monsters I was
        born in the large city of Soldenheim. There are few monsters in the
        traditional sense but plenty of evil humans. I wanted to join the guard
        for the city and work my way up to guarding the Baron, so I spent most
        of my time dueling other humans not monsters.
      </p>
      <p>
        Linhart did as he said he would and took me to an area he said is
        normally dominated by second or third years because it is the easier to
        get tokens this way then the other monsters. I guess he means the
        non-combat students as the monsters only dropped 1 token randomly not
        every time and could hardly fight back. It was easy but if I could not
        trade this tokens in for items it would of been a waste of time as I was
        not really learning anything.
      </p>
      <p>
        The monsters were little birds. They were kind of cute with a small
        beak, hopping about pecking at the floor to find bugs. They were the
        lowest level monster in the training area and barely passed as monsters
        since they had one skill. The skill caused them to quickly move about
        half an arms length in any direction, this made them really hard to hit
        with skills like fire ball.
      </p>
      <p>
        Linhart was having and easier time with his wide area skills burning all
        around the birds but it was a huge waste of mana so he kept having to
        rest. Over the course of the next 2 hours we had gathered around 20
        tokens each. We had decided to take a rest sitting on the rocks watching
        the birds flutter around pecking at the ground, they were not hostile
        unless attacked and even then they spent most of the fight just trying
        to dodge attacks.
      </p>
      <p>
        Linhart seemed to be kind of zoned out so I called out to him. "What ya
        doing?"
      </p>
      <p>
        "Ah sorry, I was using that new network the academy had set up to
        message some friends." He apologized with a smile.
      </p>
      <p>
        "I had forgot about that. I wonder if I have any messages." I reached
        out with my mana and sure enough there was a connection near the spawn
        area. Since we were close by I could reach it and connect. There was a
        message for me sent by the academy.
      </p>
      <p>
        "Class Champion! You are required to attend a meeting for the upcoming
        tournament in classroom A-E-107. Failure to attend will result in being
        confined for 3 days. - Arrilian."
      </p>
      <p>
        My face soured reading that message. As if it was not stressful enough
        already without having meetings about how, where and when we might die!
        Needless to say I had little confidence in winning this tournament. I
        looked at the tokens I had gathered and just hopped I could sell these
        tokens quickly and buy something useful. People were always looking for
        ways to cheat the system and get up the rank ladder, buying tokens was
        the easiest way as long as no teachers found out.
      </p>
      <p>
        "Hey I'm sorry Linhart, I have to go. I got a message from the academy.
        It was fun hanging out today though, do you maybe want to meet up
        tomorrow?" I asked wondering if he really needed my help hunting or just
        the kind of person that hated doing things alone.
      </p>
      <p>
        "Oh no, that's okay. My friends will be here any moment so just leave
        your tokens and go." He replied back with a changed tone of voice.
      </p>
      <p>
        "My tokens? It's okay you don't have to look after them, I was going to
        sell them straight away." I replied a little confused.
      </p>
      <p>
        "You don't get it?" He said plastering his face with a twisted smile. "I
        need these tokens for a girl I like. Why would I let you keep them?"
        Just as he had finished two boys came running towards us from the
        entrance to this area shouting "Is this the one?" To witch Linhart just
        nodded and they surrounded me.
      </p>
      <p>
        "Really!?" I screamed "You dragged me out here after killing me in the
        arena just to rob me after wasting my time! You're the worst!"
      </p>
      <p>
        He laughed and lit a flame in his hand. "We already know I can beat you
        one on one, so throw the tokens to the floor and walk away or all three
        of us will beat you. Not that it matters you'll be dead soon anyway,
        class champion." He said in an voice giving away that he was excited.
      </p>
      <p>
        I was about to break into tears, life is really shit right now. I just
        grabbed all the tokens and tossed them to the floor in frustration and
        stormed off in a run past the two boys and tried not to look back or cry
        as I left. They did let me go only to grab the tokens from the floor for
        themselves.
      </p>
      <p>
        I did not have the heart to do anything else today. I would just go to
        the meeting and then back to my room. Today was the worst.
      </p>
      <h4>The meeting for the constants</h4>
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
      <div className="BreakPoint" />
      <p>
        It had been hours and I felt like my night would end there so I went to
        sleep. They didn't even send me food. They were suppose to take care of
        me and teach me magic, I wouldn't of come here if this had ever happened
        before, I can't even understand their thinking. They said it was to
        boost moral, well my moral is so low I want to defect.
      </p>
      <p>
        I was half asleep half fuming when the sound of banging and shouting
        came from the hallway where they had taken me in here.
      </p>
      <p>
        "Fuck you, you son of a dwarf and a horse. The big man now, beating up a
        child and sending them to their death for your sick enjoyment. Stop
        shouting? Why am I starting to make sense? Goat fucker."
      </p>
      <p>Well, someone is more open about how they feel then I am...</p>
      <p>
        A boy stumbled by my cell as if he had been pushed, with straight black
        hair, a pale completion but otherwise well kept and clean. He was not
        Aldenese, he looked almost Leikan. Wearing a black academy robe with a
        purple trim. That is not one you see often I thought, although I heard
        there where a few in the academy more then other academy's but he is a
        Necromancer.
      </p>
      <p>
        A guard forcing him down here shoved him as the boy turned around to
        hail more abuse at his ... Well abuser. A small book fell from his robe
        and landed in my cell. I quickly grabbed it before the guard noticed, he
        would of just taken it away. They pushed him into a cell and locked it
        and turned to leave. "What a fucking brat that kid is." He said to
        another guard who was now standing next to my cell.
      </p>
      <p>
        "Your mother doesn't call be a brat, she calls me DADDY, show some more
        respect to your dad you little shit." The boy shouted from the cell with
        his hands clasping the bars his face pushed between them. "I aught to
        give you a good spanking. Your mother enjoys a good spanking you know?"
      </p>
      <p>
        "Kid if the dean didn't ask me not to harm you before the event, I would
        of broken all the bones in your body now." The guard replied clearly
        angry that he had to hold back.
      </p>
      <p>
        "You know what bone I put in your mothers body?" He replied with a
        smirk.
      </p>
      <p>
        The guard stormed off with his co-worker out of the holding area and we
        were once again locked inside, not that we were not already locked in
        our cells. I decided to give the boy a moment to calm down before
        returning his book I decided to flip though it.
      </p>
      {Book()}
      <p>
        Orcs? Goblins? I thought these were monsters not another race, and there
        are some I never even heard of... I should return this and maybe ask
        where he's from, maybe these are monsters from Leika and the book is
        badly translated? I did not want to slide the book over and it not reach
        his cell, so I pushed it with some of my mana not infused with my
        element.
      </p>
      <p>
        The book slide across the floor quite fast and into his cell, banging
        against the bars. "You dropped that." I called out to him.
      </p>
      <p>
        I saw his pale hand pick up the book and in a soft voice he replied.
        "How kind of you to return it." He paused for a moment before adding. "I
        am sorry our introduction is under such circumstances, I am not normally
        so foul mouthed."
      </p>
      <p>
        "No, no. Honestly I was kind of routing for you there. I ended up in
        here because I spoke out against the inter-class tournament coming up.
        What about you?" I asked.
      </p>
      <p>
        "Nice way to put it. I refused to go to the meeting for the child
        slaughter fest." He replied back. We both sat in silence for a moment.
        Before laughing, I am not even sure why but we both just laughed. That
        was the night I met Chu-gong (추공). It was a shame it was the last I
        got to spend with him before the death match. He was held in the cells
        while I was let loose, without Arrilian ever coming to speak to me
        personally.
      </p>
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
export default Duel;

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
              src={`https://ottotsuma.github.io/images/people/jane.png`}
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
              src={`https://ottotsuma.github.io/images/people/goblin.jpg`}
            />,
            <Item
              rating="normal"
              stats={{
                vitality: +2,
                strength: +1,
              }}
              name={"Dwarf"}
              effect="Small resistance to spell effects, but lower success with spells."
              src={`https://ottotsuma.github.io/images/people/dwarf.jpg`}
            />,
            <Item
              rating="normal"
              stats={{
                vitality: +1,
                strength: +2,
              }}
              name={"Orc"}
              effect="Small health regen when in combat."
              src={`https://ottotsuma.github.io/images/people/orc.jpg`}
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
              src={`https://ottotsuma.github.io/images/people/kitsune.jpg`}
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
              src={`https://ottotsuma.github.io/images/people/vampire.jpg`}
            />,
            <Item
              rating="normal"
              stats={{
                dexterity: +1,
                sense: +2,
              }}
              name={"Gnoll"}
              effect="Can gain access to skills early from their Demon Lord"
              src={`https://ottotsuma.github.io/images/people/gnoll.jpg`}
            />,
            <Item
              rating="epic"
              stats={{
                strength: +1,
                dexterity: +3,
              }}
              name={"Thri-kreen"}
              effect="no dual wielding reduction."
              src={`https://ottotsuma.github.io/images/people/thri-kreen.jpg`}
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
              src={`https://ottotsuma.github.io/images/people/troglodytes.png`}
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
