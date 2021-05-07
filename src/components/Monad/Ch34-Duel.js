import React, { useState } from "react";
import Item from "./../elements/item";
import styled from "styled-components";
import { Content } from "./styles";
import Spin from "./../elements/spin";
import Quest from "./../elements/quest";

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
        this is just what I wanted while he was busy producing & then
        maintaining the shield I pointed my wand at him and gathered the mana
        below his feet. This spell was great for by passing shields, doing high
        damage but normally was inaccurate and too slow to cast. However this
        opportunity he had given to me was perfect.
      </p>
      {Book()}
      {Placeholder()}
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

function Placeholder(props) {
  return (
    <Content style={{ overflowWrap: "anywhere", width: "100%" }}>
      <h1>Sea people</h1>
      <p>
        A group of sea travelers with different races. Their classes will be
        advanced classes because they have all reached level 100 at some point.
        The miasma effect will reduce their capabilities by 90% and be removed
        as they complete more quests on the DLC island.
      </p>
      <h2>List of the group</h2>
      <ul style={{ overflowWrap: "anywhere", width: "100%" }}>
        <li style={{ overflowWrap: "anywhere", width: "100%" }}>
          Example: Name, race, class(), level, equipment, backstory(Main island,
          other dlc before? ), clan/guild, reason for coming. PET(level)
        </li>
        <li style={{ overflowWrap: "anywhere", width: "100%" }}>
          Boy: Name, Dark Elf?, class(Rogue[]), 37, [Normal/Rare, mostly from
          the main quests], (From the main island, recently started playing, no
          dlc), none, saw the adverts for coming and wanted to try. None(0)
        </li>
        <li style={{ overflowWrap: "anywhere", width: "100%" }}>
          Girl: Sarah, Vampire, Use to be a human paladin, class(Tank[Guardian])
          Wants to change to blood warrior, 100, [mixed normal, rare epic with
          one unique], (Pro-gamer, guild leader, small dlc before), clan/guild,
          get in before the other guilds. PET(60),
          file:///C:/Users/snows/Documents/GitHub/ottotsuma.github.io/guard100.html
        </li>
        <li style={{ overflowWrap: "anywhere", width: "100%" }}>
          Boy: Josh, Human, class(Rogue-subtype[Assassin]) Recently became
          assassin, 92,
          [file:///C:/Users/snows/Documents/GitHub/ottotsuma.github.io/Assassin.html
          , but not unique items], (Member of the same guild, small dlc, company
          man), clan/guild, accompany the same guild. RAT(100)
        </li>
      </ul>
      <p>"We'll be there soon." Josh said from behind me.</p>
      <p>
        "Awesome, I don't want to spend another minute on board this ship." I
        said holding onto the side of the ship looking out into the big blue
        ocean.
      </p>
      <p>
        "Who knew you could get sick inside of a game? I feel bad for you man."
        Josh said patting my back. That didn't help so I hugged the side of the
        ship tighter.
      </p>
      <p>
        "And I said if you call it a game you won't be joining me on this trip."
        Sarah said walking out from the captains cabin. Her skin was pale white,
        jade like and smooth. Her white skin somehow made her bright orange hair
        stand out more. In contrast her armor was mostly savoy blue armor
        trimmed in gold, her cloak billowed out behind her in the wind, white
        with gold trim. She looked almost holy if it was not for her large
        fangs.
      </p>
      <p>
        She locked her steely blue eyes on Josh and reminded him. "We are
        roleplaying. So you can't call it a game, at best another world. Don't
        forget what happened last time.. If we do not blend in with the natives
        they will kill us."
      </p>
      <p>
        Josh responded with a nod. "Yeah, I will remember when we land. I
        promise." He smiled and patted me on the back again.
      </p>
      <p>
        That did not help. I put my face back over the railing to face the sea
        again.
      </p>
      <div className="BreakPoint"></div>
      <p>
        I found Josh sitting in his bed in a room below deck. The ship only had
        a few rooms like this, the captains, 3 VIP guest rooms and the ships
        engineer. Every other passenger, like myself, had to sleep in the same
        room at the front of the ship, on this same deck. The crew filling the
        deck below.
      </p>
      <p>
        "Hey I was hoping to ask for some advice." I said waiting at the door to
        his room. While we have been friendly on the journey, it was to the
        point I would just walk in uninvited.
      </p>
      <p>
        "Hey sure. Come in, what is it? You're looking less green now." He said
        waving me inside.
      </p>
      <p>
        I stepped inside and sat on the only chair in the room. "Yeah, I guess I
        am getting use to it or the sea is becoming calmer. Anyway I heard you
        are also a rogue class right? I wanted some advice on how I should use
        my stat points and what skills to learn, it's been awhile."
      </p>
      <p>
        "Ah yeah. I mean I am a rouge type... My class is assassin, which is a
        type of rouge but I have a very specific play style and set of skills.
        If you want that kind of play style I can share my build with you but if
        it is just generic advice for rouges or play styles I can still help.
        After all I have been playing since launch. I mean, when I am not
        working that is." He smiled, he was a little more relaxed and less
        serious then Sarah. I guess that was to be expected. Josh had a normal
        day job and played the game for fun but Sarah was a professional gamer.
        This was her job.
      </p>
      <p>
        "Well, to be honest I don't really know what the meta is like now. What
        is the best build or style you know? I reached level 50 before but when
        my race changed I have only been able to get back to level 37 now." I
        admitted.
      </p>
      <p>
        "Ah bummer man. You must of got an unlucky role. Dark elf is still a
        humanoid race of the same rarity as human right?" He asked.
      </p>
      <p>
        "Ah no, it is a rare rated race. So I went one rarity up, and although
        its humanoid it is a species of elf so I jumped two races... So instead
        of the random level reduction it took me back to level 1." I replied.
      </p>
      <p>
        "I suddenly don't feel bad for you at all. You got a rare race at level
        50." He joked. "But hey, what are the skills like for a dark elf? Tell
        me all the ones you can see, I'll see if they match your play style!" He
        suddenly seemed excited at finding out something new.
      </p>
      <p>
        I told him everything I could, from the skills to the bonuses and draw
        backs of being a dark elf. What he found most surprising was that
        despite reaching level 50 I never got a pet. The thing was when I
        reached level 50 I got the race change at the same time so I didn't wait
        to get a pet. We all make mistakes. So we kept talking until we became
        hungry.
      </p>
      <div className="BreakPoint"></div>
      <p>
        The crew were starting to get edgy. We knew from the start that they
        would not go to close to the new land, they would only sail so far then
        the final part of the journey we would have to do in long boats.
      </p>
      <p>
        Everyone knew we were close. Although the NPC's didn't say how they
        knew, we could all see the miasma debuff on our status screens. The
        closer we got to the new land the stronger the debuff was getting, but
        on the upside it worked as a kind of compass pointing the way.
      </p>
      <p>
        Sarah had been to the new land before, getting killed there and having
        to make the journey again. She said it was like your power is reduced by
        90% and you have to complete quests and become more familiar with the
        land to reduce the effects of the miasma.
      </p>
      <p>
        As each day passed our bodies became weaker and weaker. The journey to
        get to the new land was really harsh, with no way to teleport, fly or
        any other means of fast travel we had to take ships. Along the route
        apart from hobbies like fishing or crafting the only thing to do was
        defend the ship from sea monsters and flying monsters when we came near
        little islands.
      </p>
      <p>
        The little islands either had treasure map locations or some item you
        could only get here which made up for the journey a little. Once the new
        land was conquered and fast travel locations set up the only people
        taking this route would be those trying to get to these small islands.
        Then the price of these items would increase again.
      </p>
      <p>
        Lucky for us today was the final small island before the new land. The
        miasma reduced our levels up 30% already so this island was the hardest
        on the journey making it the the most profitable. This was combined with
        it being the last stop before the new land so most people would be to
        tempted to move on rather then return back to the old world with items
        they found here. There were a few but it was rare. Most travelers were
        like us and would continue on.
      </p>
      <p>
        The island was actually a group of small islands that barely poked out
        of the ocean. The others had been large volcanoes or atolls and other
        kinds. From end to end if they where not broken up by the water I was
        sure you could walk across them in a few hours.
      </p>
      <p>
        Sarah walked over to the side of the ship I was holding onto. She wore
        the same savoy blue armor and white cloak with her hair in a braided
        pony tail behind. The difference today was she was holding a black
        parasol to block out the sun. "Not feeling sick again are you?" She
        asked, seeing me holding onto the side of the ship.
      </p>
      <p>
        "No, I feel fine. I was just looking at the new islands." I replied. "I
        hear there is really rare items on this island."
      </p>
      <p>
        "Ah, yeah. You're not wrong. There are gems and rare fish in the waters
        around the island, they are rare now so they are worth more then they
        will be once the land is conquered. After that this island is only two
        days away from the new land." She reasoned.
      </p>
      <p>"Mmm but maybe we can use them to trade when we land?" I asked.</p>
      <p>
        "I agree. That is the best use for them. They would not be foreign to
        the locals and that is worth more then gold right now." She said. "Oh
        there is one other thing. I heard a rumor from other Astral a prince is
        living under the island."
      </p>
      {/* https://en.wikipedia.org/wiki/Astral_projection */}

      <p>"Astral? What's that?" I asked confused.</p>
      <p>
        "Right, I forgot it has been awhile since you last played. Do you
        remember what the tutorial rabbit calls you when you wake up? It's the
        name for players. Non-NPC's. Astral soul projection, how your soul ends
        up in this body in this world." She explained.
      </p>
      <p>
        "Right, yeah. I forgot that person." I said rubbing my chest. She is
        half bunny half human woman. You would think she was a nice charming
        person bring people into the world and showing them around. The reality
        was she is disgusted by you and kicks you into the world by force!
      </p>
      {/* She thinks the player has taken the body of the dead or something with their soul inside. Not that the player is an astral body which is the reality. */}
      {/* The expression "astral projection" came to be used in two different ways. For the Golden Dawn[37] and some Theosophists[38] it retained the classical and medieval philosophers' meaning of journeying to other worlds, heavens, hells, the astrological spheres and other imaginal[39] landscapes, but outside these circles the term was increasingly applied to non-physical travel around the physical world.[40] */}
      <p>
        "She .." Before Sarah could finish what she was saying the Captain
        shouted out "LAND! Get on the small boats if you want to head to shore,
        the crew will take a break for the day and night."
      </p>
      <p>
        It did not take long before the deck was filled with people getting into
        the small boats. Or just diving directly into the sea and throwing the
        small boats down..
      </p>
      <p>
        "Come on you can join us again." Sarah said walking over to her personal
        small boat.
      </p>
      <p>"You mean I can row for you again right?" I said jokingly.</p>
      <p>
        "At least you know what you are good at." She said leaving me standing
        there.
      </p>
      <div className="BreakPoint"></div>
      <p>
        The sand was so soft under my feet, I removed my shoes not wanting to
        get sand inside of them. Some times I felt that the hyper realistic game
        had gone too far in some areas. Who felt the need to have shoes that
        were not air tight or at least sand tight! The sun, the sand and the
        clear blue water was helping my recovery as I moved my arm around
        holding the shoulder.
      </p>
      <p>
        "Stop pretending you are in pain. Rowing uses up your stamina not your
        health." Sarah said with an annoyed face. She was just jealous I was
        enjoying the sun while she had to hide under her gothic umbrella.
      </p>
      <p>
        "My soul hurts from being your skivvy. I need spiritual rest." I
        replied, bathing my face in the warn sunlight.
      </p>
      <p>
        "You can sun bathe on the ship. It is time to explore." She shouted
        back.
      </p>
      <p>"It's not the same." I mumbled.</p>
      <p>
        Looking around our tiny patch of sand in the ocean, there was not too
        much to explore. There were some trees towards the middle but only a
        handful. There were other small patches of sand here and there with the
        water crossing though them. I put my toes into one of the small water
        pockets as we walked. It was warm and gentle. There were three major
        islands here but each was broken up by shallow water.
      </p>
      <p>"You came here before right? Where should we look?" I asked Sarah.</p>
      <p>
        "The little water pools you have your toes in contain pincer crabs." She
        said as I whipped my feet back out of the water. "They are guarding
        pearls from people who put their hands in to get them. The second island
        has small flightless birds that taste great, that is where most people
        spend the night. The final island has large crabs that you can fight but
        they are all level one ~ ten." She replied. "Oh, finally the trees. If
        you have a treasure map for this island you can dig up treasure around
        that area. Without the map though nothing will appear."
      </p>
      <p>
        I weighed the options she had laid out and asked. "So we are fishing for
        pearls?"
      </p>
      <p>
        "Bingo." She had found a place she liked and placed down a towel, her
        umbrella and while sitting in the shade she jammed her sword into the
        water stabbing around.
      </p>
      <p>
        I guess she wants to just kill the crabs and then steal their pearls.
        Josh sat down by one of the other ponds and had made some kind of
        fishing line, he put meat on the fishing line and tempted the crabs
        forward, when they were distracted he would grab the pearl at lighting
        speed. I guess Josh was a little more humane.
      </p>
      <p>
        I sat down by a pond and tried to copy Josh but I was not fast enough,
        or the line broke, or the meat did not stay on my line and floated off.
        So I gave up and changed to Sarah's method, poking around the side of
        the pond with a knife until I caught one and pulled it out.
      </p>
      <p>
        I knew Sarah and Josh were part of the same guild, so I wondered why
        Josh did not come to the new land when Sarah did. Sarah had been before
        and died in the new land, since there is no respawn locations in the new
        land yet when you die you return to your own respawn location in the old
        lands.
      </p>
      <p>
        "Josh, how come you did not come to the new lands when Sarah came?" I
        asked.
      </p>
      <p>"Because he put his rat before me!" Sarah shouted from her pond.</p>
      <p>
        "What?" I questioned. If Josh had a pet rat how was that related? Was it
        sick and he could not play?
      </p>
      <p>
        Josh just laughed and said. "It is true. I will always put this little
        guy first. He's so cute!" There was a small rat sitting on his legs
        while he leaned back playing with his fishing rod. "He is named
        scouters. He is my familiar, you should of had one too at level 50.
        Anyway he had a quest I had to complete so I did that instead."
      </p>
      <p>"Rat's get quests?" I asked puzzled.</p>
      <p>
        "Well he is my familiar not just any rat. Anyway he reached level 100 so
        yeah I had to do his level 100 quest to unlock his final ability." He
        said patting its head. "The new land offers a chance of rewards, the
        level 100 quest offered a set reward. I think I made the right choice,
        after all I am here with Sarah." He smirked.
      </p>
      <p>
        Sarah replied by turning away from him, she was clearly upset she died
        and had to come back again. But If Josh had a pet rat surely Sarah had a
        pet also. "What is your pet Sarah?" I asked.
      </p>
      <p>"Join my guild and I might tell you." She replied.</p>
      <p>
        Heh, I thought she would never ask. "Fine I'll join you two." I smiled.
      </p>
      <p>
        Sarah seemed shocked but Josh did not react at all almost expecting it.
        We had talked about it before but he said Sarah might appear strong on
        the out side, especially with her skills as a gamer and her charters
        stats. However she was a shy person and rarely asked anyone to join,
        most of the people that joined her guild were invited by others already
        in the guild.
      </p>
      <p>
        A screen popped up in front of me. You have been invited to join the
        guild 'FilthyCasuals' will you accept? Yes. No.
      </p>
      <p>
        What kind of name was that!? ... I pressed yes... I hope the guild name
        would not appear anywhere publicly...
      </p>
      <p>"So what is your pet?" I asked again.</p>
      <p>
        "Palaeochiropteryx. An extinct bat on earth from 48 million years ago,
        only known fossils found in Germany. I got it from an event, it has an
        Epic rating, which is one above Rare, and it is level 60." She said as a
        giant bat appeared behind her and landed on the sand. "It should be the
        size of a human hand but as you can see it has been given some fantasy
        flare since it is an event pet." It had big ears, large black wings and
        a snout.
      </p>
      <p>
        "I heard there were real vampire bats in the new land, not the fake ones
        like before." Josh added.
      </p>
      <p>
        "Yeah, but they are normal rated, maybe there are rarer variants but
        that is much less swag then an Epic rated bat." She said petting it.
      </p>
      <p>
        "I thought you were going for efficiency not swagger level." Josh said
        laughing.
      </p>
      <p>
        "I am so good I don't need 100% efficiency." She said smiling at the
        bat.
      </p>
      <p>"What's it's name?" I asked.</p>
      <p>"Mary." She replied.</p>
      <p>
        Such a normal name, then who named the guild? Weird. I thought to
        myself.
      </p>
      <p>
        "So what are you two hoping to get from the new land?" I asked hoping it
        would give me some idea of the rewards on offer.
      </p>
      <p>
        "Dunno, is that not the point? To adventure and explore. The rewards we
        know about come from rumors from the NPC's and other playe... Astrals."
        Josh said.
      </p>
      <p>
        "For once Josh is right. I know of things I have seen or been told or
        the rumors being spread but as always there is lies mixed in with
        truths. I am hoping to find a new class, right now I am a paladin but
        since I changed to a vampire and with my pet the paladin class is very..
        At odds with my current set up." Sarah added. "Oh and any good items are
        always welcome."
      </p>
      <p>"Aha, well I hope it's fun and I can reach level 50 again." I said.</p>
      <p>
        It was fun fishing for the pearls and trying to outwit the crabs. They
        gave zero experience for defeating them, which indicated they were not
        really monsters and just crabs. There was not always a pearl and some
        were clearly better quality then others. I tried to inspect one but
        since I never really invested in the skill it just replied with obvious
        item names.
      </p>
      <p>"So this flightless bird. Is it really delicious?" I asked Sarah.</p>
      <p>
        "It is based on the Dodo, you know the extinct bird from our world.
        Anyway it really is, I think as time passes they will become extinct
        again so if you want to try it you should do so now." She replied.
      </p>
      <p>
        "Half of me feels bad for helping a species go extinct because I am
        curious. The other half is curious." I said half joking.
      </p>
      <p>
        "Count me in." Josh added. "I did not try the Chinese paddlefish when it
        was included in the game. I really did not think they would just let the
        species go extinct so I missed out."
      </p>
      <p>
        Josh had taken off faster then us, maybe he was worried he would miss
        out again that badly. I stayed and walked with Sarah because she could
        not run in the sun. The penalties for being a vampire were not truly
        clear to me but it did not seem worth it so far. How was she suppose to
        fight during the day time? While holding the umbrella?
      </p>
      <p>
        Lunch today was roasted Dodo. I cannot describe how it tasted, maybe
        something between salty butter chicken and barbecued pleasure.
      </p>
      <div className="BreakPoint"></div>
      <p>
        I wanted to try fighting the giant crabs on the other island but I was
        told it was a bit of a waste of time. If you killed too many of them a
        massive version of the crabs came out of the sea, standing at the height
        of 3/4 of a man and would be a real challenge, but the loot was really
        poor. Since we were under the effects of the miasma, even at half
        strength, our stats were reduced making weak enemies appear stronger.
      </p>
      <p>
        We picked pearls from the ponds and ate dodo when we got hungry. That
        part had always confused me, why would our in game selves feel hunger?
        Who thought that was a good idea...
      </p>
      <p>
        Sarah was back on a crab killing spree when a quest appeared for all of
        us.
      </p>
      <Quest
        rating="rare"
        rewards={"EXP, Pearls, Princes thanks & Crabs hate."}
        name="Save the prince who stole the pearls!"
        details="The prince was stealing peals to make a bracelet but was captured by the king crab for killing his people and stealing pearls!"
      />
      <p>
        The first three things in my head were: What the hell? Ohh a rare quest!
        I can only accept!? Before the sand below fell from under out feet and
        we fell under the island. The bright sun replaced by pitch black as the
        sand recovered were it was before. Thankfully, even though the drop was
        huge we landed in sand.
      </p>

      {/* Feels like a break? :/ */}

      <p>"Looks like we landed outside of the kings fortress." Sarah said.</p>
      <p>"Smells like crab Bisque tonight." Josh replied.</p>
      <p>"You two can see?" I added.</p>
      <p>
        "Ah yeah, newbie has no form of night vision. Do you have any torches?"
        He asked me.
      </p>
      <p>"Yeah, but it's too dark, can you help me light one?" I asked.</p>
      <p>
        "Yeah just hand one to me and a flint, I don't have anyway to start a
        fire." He replied.
      </p>
      <p>
        Josh helped me set fire to a wooden touch wrapped in rags and oil. It's
        was the only non realistic thing in the game, the fire would burn and
        give out light but would not consume oxygen or produce soot. It was not
        originally like this but after it caused the deaths of so many new
        players some things changed.
      </p>
      <p>
        I had no idea what to say when I saw the castle. It was made of sand. It
        was a real sand castle. Not the kind you saw at the beach made with
        small plastic buckets but a giant castle made of sand, with dome shaped
        roofs placed on each tower. There was no wall around it just a wide and
        short entrance. It had to be 1.5x my height so not too tall for a grand
        entrance but it was as wide as a bus is long.
      </p>
      <p>
        We ran up to the entrance, I couldn't see all too much as the hallway
        was really deep in the castle, I could only see as far as the touch
        light reached. Josh was kind enough to inform me that it was deeper then
        even he could sense.
      </p>
      <p>
        As we walked down the hallway I looked at all the decorations, at first
        it was sea shells, star fish and other beach items. Then there were
        small indents in the sand wall, after which the decor changed.
      </p>
      <p>
        The walls here had paintings of crabs at the beach, wearing silly hats.
        I was so engrossed in the weird decorations I kind of stopped looking
        ahead. I only turned back when Sarah shouted "Run!" Shortly after
        bolting past me.
      </p>
      <p>
        I looked up and saw a giant crab as wide as the hall way barreling down
        upon us. It was moving side ways because if it came face first it would
        not fit down the hallway. I ran after Sarah and we hid in one of the
        gaps in the wall. The crab ran up to us but could not turn around so was
        unable to do anything about us being behind. Josh had taken the opposite
        wall and a huge crab claw smashed into and though him into the wall
        behind.
      </p>
      <p>
        The crab then shot off at high speed back the way it had come from. I
        ran over to Josh to see if he had died, it did not look great with his
        body collapsed on the floor. His body fell apart like bits of string
        falling over each other and disappeared, another Josh appeared next to
        himself looking healthy as I just stared confused.
      </p>
      {/* 30 - Extra Stat points, Intermediate Spells, Cap Raised to 4 */}
      <p>
        "Assassin skill level 30, shadow clone. It makes a copy of me out of
        shadows, although the cost is high the price paid off this time." Josh
        explained while adjusting his shirt.
      </p>
    </Content>
  );
}

// Team bonuses for each of them?
// same class and rank - 0 ~ 9 e.g. Rogue (normal) to Rogue-subtype (normal)
// one rank up same class - 20 ~ 50
// same rank different class - 20 ~ 50
// one rank up, different class - Full reset
