import React, { useState } from "react";
import Item from "./../elements/item";
import styled from "styled-components";
import { Content } from "./styles";
import Spin from "./../elements/spin";
import Quest from "./../elements/quest";
import LevelUp from "./../elements/levelup";
import {SeaPeople} from "./SeaPeople"

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

      </p>
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

// Vampire type, more blood taken makes them stronger so often conflict with humans
// Vampire type, more hunger makes them stronger so often hide from humans
// The people coming off the boats don't have to be human
// Merging the stats into a few, Vitality, magic, strength, sense, charm
// No classes? Just race and element?

// killing array that targets above certain mana levels.
// Vampire woman vs Poison woman and Tank man.

// Transferring class of the same rank and type lose 0~9[dice rolling thing] levels.
