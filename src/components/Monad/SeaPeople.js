import React, { useState } from "react";
import Item from "./../elements/item";
import styled from "styled-components";
import { Content } from "./styles";
import Spin from "./../elements/spin";
import Quest from "./../elements/quest";
import LevelUp from "./../elements/levelup";
import Otto from "./Otto";
import Equipment from "./../elements/equipment";
import Stats from "./../elements/stats";
import Spells from "./../elements/spells";
import Blood from "./../../assets/Blood.jpg";

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

export default function SeaPeopleFunction(props) {
  return typeof props === "number"
    ? SeaPeople[props]
    : SeaPeople[props.Chapter];
}
export const SeaPeople = {
  0: (
    <Content style={{ overflowWrap: "anywhere" }}>
      <h1>Sea people</h1>
      <p>
        A group of sea travelers with different races. Their classes will be
        advanced classes because they have all reached level 100 at some point.
        The miasma effect will reduce their capabilities by 90% and be removed
        as they complete more quests on the DLC island.
      </p>
      <h2>List of the group</h2>
      <ul style={{ overflowWrap: "anywhere" }}>
        <li style={{ overflowWrap: "anywhere" }}>
          Example: Name, race, class(), level, equipment, backstory(Main island,
          other dlc before? ), clan/guild, reason for coming. PET(level)
        </li>
        <li style={{ overflowWrap: "anywhere" }}>
          Boy: Name, Dark Elf?, class(Rogue[]), 37, [Normal/Rare, mostly from
          the main quests], (From the main island, recently started playing, no
          dlc), none, saw the adverts for coming and wanted to try. None(0)
        </li>
        <li style={{ overflowWrap: "anywhere" }}>
          Girl: Sarah, Vampire, Use to be a human paladin, class(Tank[Guardian])
          Wants to change to blood warrior, 100, [mixed normal, rare epic with
          one unique], (Pro-gamer, guild leader, small dlc before), clan/guild,
          get in before the other guilds. PET(60),
          file:///C:/Users/snows/Documents/GitHub/ottotsuma.github.io/guard100.html
        </li>
        <li style={{ overflowWrap: "anywhere" }}>
          Boy: Josh, Human, class(Rogue-subtype[Assassin]) Recently became
          assassin, 92,
          [file:///C:/Users/snows/Documents/GitHub/ottotsuma.github.io/Assassin.html
          , but not unique items], (Member of the same guild, small dlc, company
          man), clan/guild, accompany the same guild. RAT(100)
        </li>
      </ul>
    </Content>
  ),
  1: (
    <Content style={{ overflowWrap: "anywhere" }}>
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
    </Content>
  ),
  2: (
    <Content style={{ overflowWrap: "anywhere" }}>
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
    </Content>
  ),
  3: (
    <Content style={{ overflowWrap: "anywhere" }}>
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
        tempted to move on rather then return back to the old lands with items
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
    </Content>
  ),
  4: (
    <Content style={{ overflowWrap: "anywhere" }}>
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
    </Content>
  ),
  5: (
    <Content style={{ overflowWrap: "anywhere" }}>
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
      <p>
        "Huh? I don't see that skill and I am level 37." I replied looking
        though my skills list.
      </p>
      <p>
        "Assassin, not Rouge. It's a different class. Anyway we can talk about
        things like that after. The crab will be back soon." Josh pointed in the
        direction of the crab, while I could not see the end clearly I could
        hear the noises the crab was making and knew it had not left.
      </p>
      <p>
        "Quick, we need to move down to the next hole in the wall before the
        crab comes back, and pick the side he is not facing. It looks like it's
        a puzzle trap rather then a fight." Sarah interrupted.
      </p>
      <p>
        We ran as quickly as we could down the hallway. It didn't take long
        before the sound of the crabs legs moving in a mechanical fashion went
        from being loud noises to being able to see them come into my field of
        vision. Like last time he was moving quickly but facing the opposite
        wall from before.
      </p>
      <p>
        This seemed like a simple puzzle just keep swapping sides and as long as
        you are quick enough between each holes you won't get caught out by the
        crab. So we jumped into the hole and he ran up to us stopped and made
        some angry noises before scuttling back from were it came from.
      </p>
      <p>
        This time we set off from the opposite wall again and started to run
        down quickly, we managed to get into the hole this time before the crab
        had made it's way back up again because we did not stand around talking.
        However to our horror the crab was facing the same direction as last
        time! He tricked us!
      </p>
      <p>
        We wanted to quickly move to the other side, Josh moved quickly though
        the shadows cast by the crab in my light and popped up on the other side
        but I was far to slow to act. Sarah pushed me under the crab between
        it's legs as the claw slammed into the sand wall behind were I was. It
        turned to stab at Sarah who was next to me with its other claw, but
        Sarah just waved gently at the crab and vanished.
      </p>
      <p>
        It made more angry noises and scuttled back down the hall way again.
      </p>
      <p>
        Sarah appeared were I was once stood and I knew these two had been
        playing for longer then me but this level of reaction and knowing which
        skills would be useful was far above me right now. Maybe my Dark Elf
        race had some cool and unique abilities I just had to think of ways to
        use them. We ran without talking again towards the crab, however this
        time we were getting closer to where the crab must be turning around and
        he came back quicker. Or at the same speed just we were closer to his
        start point now so the moment we saw him we had to pick a side to run
        to. This was easy in theory the giant claws should of given it away but
        in the moment when you are under pressure looking at a bus sized crab
        for some reason it felt hard.
      </p>
      <p>
        After two more holes, the last being a close call because I could not
        run fast enough to make it to the next hole and had to get Sarah to
        throw me again. We could finally see were the crab was coming from. He
        scuttled down the hallway and we ran after him as soon as he started to
        leave and could see a room ten times his size where he would turn
        around.
      </p>
      <p>
        We ran in and as he was turning around and saw us running after him he
        gave a huge roar and slammed both his claws into the ground. Although
        the ground was sand so the damage to the floor was nothing, the force
        flung sand everywhere and it was hard enough we could feel a thud from
        the change of air pressure.
      </p>
      <p>
        The boss fight had started with his hp bars filling above himself, and
        yes 'bars' more then one.
      </p>
      <p>[Your level has been capped at 30, However you are below level 30.]</p>
      <p>
        The miasma had halved all of our stats but I was only just realising
        that it also half our level. Only now when it came to fight for the
        first time since the Miasma was this strong did I realise all my level
        30 skills were blocked!
      </p>
      <p>
        I was level 37, but because of the Miasma I was effectively level 19.
        Could the system not just make me level 30 if that was the cap? I was
        really a higher level to start with... However my internal complaints
        felt on deaf ears. Sarah jumped in front of both me and Josh and told us
        to move back, I wanted to run in and help right away but I was a lower
        level, with the 50% reduction to our level and a max cap at 30. That
        means Sarah and Josh were still level 30 and I was not.
      </p>
      <p>
        Sarah was holding a large long tower shield, it was the same blue as her
        armor except the trim was silver and not gold. In her other hand looking
        less heroine and more demonic was a large mace, the image looked like an
        evil wizards tower, it was all black with several pointed parts at the
        top.
      </p>
      {/* ottotsuma.github.io/images/w1.jpg */}
      <p>
        The claws of the crab rushed forward and clamped down on Sarah's shield.
        "Moron." She shouted while slamming her mace into one of its joins, the
        sound of crab armor being crushed was... It made my stomach ruble.
      </p>
      <p>
        Before I had made my move Josh was already behind the crab doing his
        thing, singing "Stabby stab stab, stabby stab." While jamming his long
        thin blades into the gaps in the crabs armor.
      </p>
      <p>
        I did not want to be left out and seeing the other crab claw closing
        down on Sarah from the side I sprinted forward. Since I only had my
        basic rouge skills I decided to show off what a basic rouge could do!
        The first thing I did was merge with my monster spirit, this was a skill
        specific to rouge type classes, any monster you kill solo, if you absorb
        the monsters spirit you get access to some of the monsters skills! This
        was the draw to picking rouges.
      </p>
      <p>
        The monster I had fused with was a Satyr, they where a kind of fusion
        between horse or goat and human. Mine was no normal Satyr but the level
        40 boss, Satyr Cruk, Chief of war of the goat clan.
      </p>
      {/* https://www.fantasynamegenerators.com/satyr-faun-names.php */}
      {/* file:///C:/Users/snows/Documents/GitHub/ottotsuma.github.io/rouge.html */}
      <p>
        As soon as I had activated the fuse, horns grew from the front of my
        head, spiraling around and back pointing forward. My feet turned into
        hooves as fur grew out the side of my legs. The transformation not only
        changed my physical appearance but also my stats and the effects of some
        of my rouge skills. This was why people played rouge, for a game based
        around options, this class had the most to pick from.
      </p>
      <p>
        The first skill I used was 'Fleet of Foot' for movement increase, I used
        my new speed to run at the crab claw which was almost upon Sarah now and
        then used 'Headbutt' on the claw to knock it off course. I damn near
        fell over from the recoil but the claw was smacked up and away from
        Sarah. With my horns attached my 'Headbutt' skill did no recoil damage
        to myself and more to my target.
      </p>
      {/* https://ottotsuma.github.io/rouge */}
      <p>
        With my two short swords I slashed out in claw pattern I had picked up
        when my rouge spirit was a tiger. 'Slashing Edge' into 'Sharp Slash'.
        The damage was far less than Josh was doing but I was helping keep the
        other claw away from Sarah more then damaging.
      </p>
      <p>
        Sarah had taken to smashing the crab in the head trying to hit it's eyes
        with her mace. Her attack power was clearly not as high as her defence
        but it was not nothing. The crab annoyed by us span around and knocked
        all of us back a few places. Sarah screamed like a banshee so it rushed
        down Sarah smashing into her shield and armor with its two claws. I
        wanted to run over and help but Josh pulled me. "Leave her and attack
        the back, you'll do more damage and not be in her way when she gets
        angry."
      </p>
      <p>
        In her way? I was keeping her for being pounded into the ground like ...
        Well now... She was not getting a hit in, just being smashed hard by the
        crab every time, one claw then the next, not stopping. She was clearly
        losing more and more health, was Josh's plan to kill the crab before it
        kills her?
      </p>
      <p>
        I decided to do my part and ran up to the back of the crab with Josh and
        launched a series of my strongest attacks as quick as I could. It's
        shell was tough but from behind it was easier to target its underbelly
        since I was not having to deal with the claw. I then decided to unleash
        the special move of all goat spirits 'Skull Bash' which deals much more
        damage then headbutt with a larger damage recoil, however with the
        passive 'Cranial Cushion' the recoil damage would again be reduced to
        almost nothing. I got under the crab and lunched myself up with the
        strong goat legs. My horns pierced though the underbelly of the crab.
      </p>
      <p>
        It did a lot of damage but my level was much lower then the crab who was
        clearly a defensive build. It span around again and this time slammed
        its claws down on top of my head. I damn near felt myself get knocked
        out by this blow and was seeing blurry images. Images of Sarah
        surrounded in blood having dropped her shield slamming her mace into the
        crab with both her hands with strength that should be beyond a level 30.
        She was hamming it so hard I felt the earth shake when the crab was
        smacked into the floor.
      </p>
      <p>
        Sarah was on top of the crab before I had my vision restored, slamming
        the mace into the body of the crab, which laid unmoving on the floor.
        Josh was holding on to my shoulders, "Just leave her like that until she
        recovers enough of her HP. I once told you before there are different
        types of vampires. Sarah has a kind of berserker skill, her attack power
        increases as her HP goes down."
      </p>
      <p>
        While Sarah was making mashed crab we turned out attention to a cage of
        a coral, in the cage was a blonde haired boy with sky blue eyes looking
        rather sad for himself.
      </p>
      <p>
        Josh walked over and casually kicked the coral cage apart. The boy
        suddenly realized he was not alone and the tears in his eyes dried up.
        He climbed off the floor and started acting like nothing had happened.
        Like we did not just find him inside a crabs castle, on his knees
        crying, inside a flimsy cage.
      </p>
      <p>
        He started to introduce himself. "Stean my mysels foar te stellen. Ik
        bin Etienne de 4e prins fan 'e republyk."
      </p>
      {/* Western Frisian */}
      <p>
        Really? Every new continent the locals start off not knowing the common
        language giving a huge advantage to those who can speak that language,
        the expansions of the East, West and Frost were the same. The most
        recent expansion, 'Origins' included languages spoke by almost nobody.
        The Namibian language of Khoekhoe being the one of the last to be
        translated.
      </p>
      <p>
        "Just bow, he's some kind of prince after all." Josh hinted. We both
        bowed at the waist saying nothing in return and the prince looked rather
        happy with himself. He said some more gibberish and left, leaving behind
        some pearls he had probably stolen from the crabs anyway...
      </p>
      {/* Make a quest reward, or just level up or rewards system */}
      {/* LEVEL 38: 130040, boss drops about 1500 exp? Quest drops? */}

      <Quest
        rating="rare"
        rewards={"3000 EXP, 10 Pearls, Princes thanks & Crabs hate."}
        name="Save the prince who stole the pearls!"
        details="The prince was stealing peals to make a bracelet for a girl who rejected him. On reflection he has decided to kidnap her. He is a prince after all."
        complete={true}
      />
      <p>
        He decided to kidnap the girl who rejected him instead of making her a
        bracelet? What kind of twisted thought process was that!? How long was
        he even locked up here? It was clearly not long enough!
      </p>
      <p>But my raged was calmed by that sweet sound of a level up.</p>
      <LevelUp
        level={38}
        race={"rare"}
        class={"normal"}
        type={"rogue"}
        details={""}
        name={"Name"}
      />
      <p>
        "Congratulations on your level up. You must of been close right?" Josh
        said as we made our way back to the ship.
      </p>
      <p>
        "Thank you, yeah I was only a little bit away when I got 3000 experience
        for the quest, plus the experience for killing the crab." I replied.
      </p>
      <p>
        "This was our last stop before the new land, you ready?" He followed up
        with.
      </p>
      <p>
        "Ready? I've been logging in everyday just to get there. Did they really
        have to make it so we traveled in real time?" I vented.
      </p>
      <p>
        "Aha, you should see the distance covered when we are 'asleep'. Just be
        glad they did not make it 100% real time. Anyway you are going to be
        apart of the guild who founded the first resurrection tower in the new
        lands. It is the best kind of respawn location because you lose much
        less experience when you die in it's area of effect." Josh said happily.
      </p>
      <p>
        "If you want to be apart of a guild get your butts in the boat!" Sarah
        said standing next to our little rowing boat under her black sun
        umbrella.
      </p>
    </Content>
  ),
  6: (
    <Content style={{ overflowWrap: "anywhere" }}>
      <p>
        "Good morning." Sarah said to me as I came onto the deck of the ship.
        She was in her blue and gold armor as usual looking out across the
        ocean. When I followed her line of sight I saw a large island off in the
        distance.
      </p>
      <p>"Is that?" I started asking when Sarah interrupted.</p>
      <p>
        "Yes, the new land, or as the locals seem to call it 'Chab'. I tried to
        search for the word, it means earth, probably." She shrugged her
        shoulders.
      </p>
      <p>"So how long until we can get our feet on the ground?" I asked.</p>
      <p>
        "Josh is getting the rowboat ready now. As soon as it is dark the ship
        will move closer and then it is up to us. The landing is not as smooth
        as previous explorations into new lands. The locals here are ....
        Unwelcoming." She said with a frown.
      </p>
      <p>
        "Previous Explorations? You mean the past DLC?" I asked a little
        confused.
      </p>
      <p>
        She pulled the angriest face I had seen and yelled "YES! Now stay in
        charter!" Then stormed off.
      </p>
      <p>
        I was in shocked for a while watching her walk off. Stay in charter?
        What? I know it is a roleplaying game but does she have to be so
        serious? I decided to go see if Josh could use any help, the night would
        be here within half an hour or so. While there I asked him about Sarah's
        out burst.
      </p>
      <p>
        "Dude, her full time job is as a professional gamer. She is always
        streaming this game, so you have to stay in charter around her or it
        effects her income. People don't like watching if they just keep calling
        it a game and not a new world." He shrugged and pulled me along to get
        Sarah so we could make up and set off. "Don't forget, unless you want to
        end up like our last vice chair." Josh warned.
      </p>
      <p>"What happened to him?" I asked before we knocked on her door.</p>
      <p>
        "She kicked him in the nuts. On Earth. Any who..." He knocked on the
        door not giving me time to think about what he had just said.
      </p>
      <div className="BreakPoint"></div>
      <p>
        The night was really dark. There was no moon in the sky, well moons, on
        this world there were 3. We were rowing in as quick as we could, and as
        quiet as we could manage. There were other small row boats also trying
        to reach the new land. It was not just astrals but other locals from the
        old lands. For every astral trying to explore the new lands there were 3
        old land locals trying their luck.
      </p>
      <p>
        I could not clearly see them, but there were some people on the figures
        standing on some of the cliffs on the shore. I did not see anything but
        I heard the whistling noise of rocks and arrows being shot and great
        speed towards some of the other rowing boats. They made loud banging and
        creaking noises on contact with the boat. When the projectiles made
        contact with the people on the boat there were short sharp grunts of
        pain or screams. The ones that screamed attracted more attention to
        them.
      </p>
      <p>
        I shoot a glance at Josh, who just put this thumbs up. Seemed like he
        knew this was coming or maybe nothing phased him.. I kept rowing, I
        looked over to Sarah at the end of the both laying back under her sun
        umbrella. Wait what? It's night time...
      </p>
      <p>
        Josh placed his hand on my shoulder and quietly said "When you have no
        control over something just relax, nothing you can do about it anyway."
        I turned to look up at the figures on the cliffs when my eyes were
        blinded by a bright light. A giant glowing orb, a mage light, was
        shining up in the sky illuminating all of us in the water below.
      </p>
      <p>
        There was a moment of silence as the world became brighter, almost as
        bright as day with the eerie soft blue glow from the mage light making
        everything clearer. Then all of the figures on the cliffs let loose with
        more rocks, arrows and even magic spells. An ice lance landed in the
        water near us, Sarah looked over at where it had landed and turned back.
        "Well, keep rowing." She said looking at me.
      </p>
      <p>
        I pulled a face and kept rowing. They were right, there was nothing I
        could do in this situation. As more of the boats started to sink some of
        the occupants tried to swim to shore but where not spared the attacks
        anymore then the boats. As the number of boats dwindled and we drew
        closer to the shore we became more of a target then before. Sarah stood
        up putting her umbrella away and lofted her large shield up in front of
        her.
      </p>
      <p>
        As we became targets, Sarah moved her shield in the way to block them
        from destroying our boat. I just kept rowing as the attacks became more
        frequent and stronger. The closer got to the shore the more we became a
        target, however Sarah kept standing strong blocking all of the attacks
        coming our direction. We were so close to the shore by this point I
        could almost walk onto the beach, but decided I should just keep rowing,
        even if I made it onto the beach the cliffs straddled either side so I
        would surely die without Sarah.
      </p>
      <p>
        The boat glided along the water, one of the figures on the cliffs raised
        something up to his mouth, it sounded like a flute as the sound echoed
        down bouncing off the cliffs. Once the sound hit the water it started to
        roil over, bubble and jump. Not liking were this was going I stabbed on
        oar into the water and pushed with the other sending our little row boat
        off course and towards one of the cliffs. Only a few moments later a
        serpent made of water grew from the sea, the pattern of scales made up
        by the shifting water and the glow of the mage light made baby blue in
        colour. In contrast it was around 7 meters tall and trashing its body
        around, hitting the small boats in the water and crunching into victims
        with its mouth.
      </p>
      <p>
        Seeing body parts, organs and blood slide down inside the serpent though
        its translucent body reminded me of a lava lamp I had when I was a kid.
        Josh hit me on the side and shouted. "The Cliff! The Cliff!" I turned to
        see I had just left the boat to continue on it's path and we were coming
        up on the rocky face quickly. I tried to slow the boat down with the
        oar's but Sarah said "No, keep going. This is perfect." She turned and
        grabbed me by the collar and pulled me up behind her under cover of her
        shield.
      </p>
      <p>
        The boat felt like it picked up speed as a wave pushed us up into the
        cliff. Sarah had me hold on as she slammed herself into the cliff. The
        shock ran though me and I saw my health drop by only by a little. She
        pushed me into a gap in the cliff and came in after blocking the
        entrance with her shield. "How did you even spot this small gap in the
        dark?" I questioned.
      </p>
      <p>
        "You really need to get some night vision." She replied making sure her
        shield was blocking the way. "We will wait here until they have had
        their fun and get bored." Sarah commented.
      </p>
      <p>"What about Josh?" I quickly realized we were alone.</p>
      <p>
        "Don't like spending time along with me?" She joked. "He will be fine,
        it is not his first time at sea. Or being ship wrecked..." She pulled
        out a cloth and started drying off her hair in front of me and then
        added, "Say how much do you know about vampires?"
      </p>
      <p>
        I thought about it for a moment and only really knew some games and
        stories from earth it was not like I was huge vampire fan or anything.
        "They drink human blood to stay alive, they turn into bats and have
        fags." I said pretty sure of my response.
      </p>
      <p>
        "Well although it is not spot on you got the important part. So you wont
        mind too much about this." She then grabbed me and pulled me close to
        her and sank her teeth into me just above my shoulder. There was a short
        sharp pain and then the feeling of the blood in my body all rushing up.
        The feeling left me light headed as the blood in my head rushed down to
        be sucked out, I was not sure how much time had passed when Sarah let go
        of me and said "Thanks."
      </p>
      <p>
        I fell to the floor a little dizzy and confused, my HP value had even
        dropped. "What the hell?" I stammered out, holding onto where she had
        bit me.
      </p>
      <p>
        "You might not have taken any damage during that event but I sure did, I
        might look strong taking all their hits with my shield but my level has
        been reduced 90% by the miasma, and well, that is how I recover my HP."
        She replied.
      </p>
      <p>
        "I guess that makes sense, but a little more warning next time." I said
        feeling like my outburst was a little hasty but she should of asked.
      </p>
      <p>
        "Ohh, I'll make it up to you in the future. For now though lets rest
        here until Josh comes to get us." She said sitting back down again.
      </p>
      <p>I looked at her confused. "How will he find us?"</p>
      <p>
        "The shield. It is a pretty big give away." She replied and closed her
        eyes.
      </p>
      <div className="BreakPoint"></div>
      <p>
        We had wait for about 20 minutes before the sounds outside were just the
        crash of the waves on the cliffs and the wind running though the gaps.
        My health had recovered from Sarah's snack and I had spent the time
        picking out Dark Elf skills to try. Our levels had been reduced by 90%
        from the Miasma, leaving me at level 3. I wish it had at least rounded
        up!
      </p>
      <p>
        I clearly would be spending most of my time sneaking around and doing
        non-combat quests for awhile. Even if I reached level 40 that would
        still make my combat strength level 4. So I picked up a what should be a
        useful new skill.
      </p>
      <Spells
        spells={[{ name: "Cloak of Shadows", level: 1 }]}
        type={"rogue"}
      />
      <p>
        With 'Clock of Shadows' I was hoping to avoid fights as often as
        possible.
      </p>
      <p>*Ting* *Ting* *Ting*</p>
      <p>
        A knocking noise was coming from the shield. There could only be one
        person who would knock. I tried to push it out from the gap in the wall
        but it wouldn't budge. Being level 3 really sucked. Sarah saw me and
        came to help pushing the shield free and stepping outside.
      </p>
      <p>
        "They all left after having their fun. They took a few captives and
        killed the rest." Josh reported.
      </p>
      <p>
        "Things have changed." Sarah replied. "Last time it was an organized
        army and they took everyone captive. They made us into slaves, sending
        us all throughout the republic. If the army guarding the north has been
        moved, it could only be because the Alden incursion has gotten worse
        since I was last here."
      </p>
      <p>
        Having no understanding what Sarah was on about I asked Josh "So how
        come no one caught you?"
      </p>
      <p>
        "Stealth is a basic skill from an assassin don't you think?" He replied.
      </p>
      <p>
        "Eh show off. So were do we go from here?" I asked looking up an the
        cliffs.
      </p>
      <p>
        "The republics capital is south of here, I have friends there we can
        start there and hopefully they will have some quests for us so we can
        start reducing the effect of this Miasma again."
      </p>
      <p>
        "We should be in the territory of Monh, it is a large-ish city and the
        only one in the state. It is surrounded on 3 sides by the ocean but
        because of the cliffs they have no port making them quite isolated. They
        don't like new faces so we won't be staying long." Sarah said as we made
        our way down the cliffs and over to the beach. Conveniently there was a
        set of wooden and earth stairs leading up from the beach to the top of
        the cliffs. I guess under normal circumstances this would be a nice
        place to holiday.
      </p>
      <p>
        I thought we would see the corpses of those who came with us, maybe
        smashed into the rocks or littering the beach but everything was clean
        and clear as if nothing had happened only a few moments ago. This was
        abnormal for how these kind of things usually go. They must of taken the
        bodies...
      </p>
      <p>
        From the top of the cliffs we could see across fields of wheat leading
        up to a city in the distance. Towers pointing into the sky, the city
        looked like it was half hanging off the cliff it sat on.
      </p>
      <p>
        "What kind of crazy people build a city that is half on and half off a
        cliff. They are just a few good cannon shots from falling into the sea!"
        I exclaimed.
      </p>
      <p>"But they don't have cannons." Sarah replied.</p>
      <p>
        "Explosive magic then! They must have something that would stop them
        from doing that..." I said really confused by it.
      </p>
      <p>
        "Evidently not. Which is good news for us." Josh injected. "Because when
        it comes to taking over this place, that will be one easy target."
      </p>
      <p>
        "Taking over?" I asked confused. Why would we want to take over this
        town.
      </p>
      <p>
        "Yeah, people are coming from the old lands to the new ones for one main
        reason. To get land for their guilds. The more land our guild owns the
        more gold we can collect. This is why most of our guild members are here
        right now, we want to carve out a piece of land for ourselves." Josh
        carried on.
      </p>
      <p>
        "And the republic is the perfect place, it is being attacked from all
        sides and unstable." Sarah added.
      </p>
      <p>
        "H-how big is the guild? You know, if you are really planning on
        building your own town here." I asked while we walked to the city, it
        was a nice warm night.
      </p>
      <p>
        "Astrals? Around 900 but I guess we need to sort out those who we have
        lost... If it is locals then we are mostly rebuilding our forces here
        for now until a large nation in the old world is interested in the new
        lands. Then we have almost 10,000 members although most are non-combat
        roles." Sarah explained.
      </p>
      <p>
        "When did guilds get so big? The last one I was a part of was only
        around 20 people." I replied.
      </p>
      <p>
        Sarah giggled. "Eheh, our guild is not even large enough to directly own
        land in the old world. That is why we came to the new land." Sarah let
        me know.
      </p>
      <p>
        We kept talking as we walked, I wanted to find out more about were we
        where. You would think I would of run out of things to learn on the trip
        over but I guess some things you don't think about until you arrive. The
        biggest fear I had was the language they spoke here. The prince we saved
        from the giant crab spoke a strange language I had never heard before,
        it must of been some old european language. Sarah let me know the locals
        spoke Alden, which was just German. However the nobles spoke another,
        which is not so uncommon.
      </p>
      <p>
        I had worried it would be another language I had never heard of, but
        German I had at least learned a little. While I was from Sweden, Sarah
        from Czech Republic, Josh was from America and did not speak any German.
        I could only feel bad for him at this point, he was going to have a hard
        time getting any quests done.
      </p>
      <p>
        We were not really hiding ourselves, so it was no surprise when a group
        of riders stopped us on the road. What they were riding though was the
        real surprise for me at least. A large red beetle with large horn coming
        out from its head almost the length of its whole body, big black eyes,
        antennae sticking out of its head, two long thick grasshopper type legs
        and two short t-rex style arms. The body had the shape of a larvae, with
        no wings the whole thing looked really odd! On top was regular looking
        humans.
      </p>
      {/* https://i.pinimg.com/564x/b7/49/2b/b7492b5dc2fcbdff5aa082c0720bae40.jpg */}
      <p>
        The first to meet our group shouted out "Halt. Woher kommst du? Wohin
        gehst du?"
      </p>
      <p>
        Come and go. Right I guess German is not so bad. Luckily Sarah had spoke
        up fist before any of use put out foot in it. She explained we were
        coming from the capital going to Monh on a simple delivery. After
        checking we were just transporting peals and had nothing interesting to
        them they rode back to the city ahead of us.
      </p>
      <p>
        "I didn't think these peals would come in useful so quickly." I said.
      </p>
      <p>
        "They will be more useful the further in land we go. These guys see them
        all the time so their value here is actually really low. Or I doubt we
        would be left with all of our cargo." Sarah said.
      </p>
      <p>
        The city from the out side seem imposing with its tall buildings in the
        back but even as we got close to the city, despite the buildings being
        closer they never really felt closer. The majority of the city was small
        1~2 floor buildings for 80% of the city until a large wall surrounding
        the tall buildings at the back.
      </p>
      <p>
        "Tell me we don't need to get into the walled part of the city." I said
        to Sarah.
      </p>
      <p>
        "No we don't need to. Only administrators and officials would live in
        there, we would need a good reason or passes to get let in. Luckily for
        us this state has almost never been attacked from land so they are
        pretty lax about the outer city. I had once though about building our
        forces here but it really is too remote." She said before quickly adding
        "And I found a better place."
      </p>
      <p>
        "What's the plan anyway? I have just sort of being going for a ride
        here." I said.
      </p>
      <p>
        "I'll find you some low level ID so you can run around the city doing
        small quests. Josh, evidently cannot speak so he will have to stay with
        me while I find us a quest that will take us were we want to go so we
        have legal paper work to move around." Sarah replied.
      </p>
      <p>
        "People living here need paper work to move between towns?" I asked.
      </p>
      <p>
        "No, foreigners need paper work. And you hardly match the description of
        a local." She replied.
      </p>
      <p>
        "What there are no dark elves here? Isn't there like a huge desert to
        the south? You told me that." I said a little hurt.
      </p>
      <p>
        "Yes, but that was only on a map I saw. I have not seen a single dark
        elf, so it is better to be safe then sorry. Plus your Aldenese is pretty
        rough, it's just easier to get you and ID and paper work. Wait here."
        She said.
      </p>
      <p>
        We had arrived at the start of the city. I guess where I expected small
        walls to start, but the only walls I could see where the large ones
        further back now we had made it here. The fields of wheat had a sudden
        stop and changed into small 1~3 floor buildings, including a stable,
        housing, stalls and other assortments.
      </p>
      <p>
        We stopped near one of the buildings where Sarah asked us to wait and
        try our best to ... look unsuspicious. She left us and went into a run
        down house in one of the alleyways. We waited around, looking
        suspicious. She finally came back over an hour later, although not
        alone. Tailing her was a tall man with very pale skin, his eyes squinted
        almost shut as he peered out of the alleyway to us.
      </p>
      {/* Wet lands to the south of the city. */}
      {/* Vampire eyes red - purple - blue */}
      <div className="pop">
        Blood Bottle
        <img className="popOut" src={Blood} alt="Blood Bottle" />
      </div>
    </Content>
  ),
  7: (
    <Content style={{ overflowWrap: "anywhere" }}>
      <Shine>I LOVE YOU TSUMA!</Shine>
    </Content>
  ),
  8: <Content style={{ overflowWrap: "anywhere" }}>8</Content>,
  9: <Content style={{ overflowWrap: "anywhere" }}>9</Content>,
};
// Rouge Skills Used (Basic) - Fleet of Foot, Headbutt
// Combo skills for each class: 'Slashing Edge' into 'Sharp Slash'
// Rouge: Side/Back -- Back -- Side (3rd one is intermediate), (4th advanced)
// Fighter: ?? -- ?? -- ?? (3rd one is intermediate), (4th advanced)
// Mage: ?? -- ?? -- ?? (3rd one is intermediate), (4th advanced)

// Team bonuses for each of them?
// same class and rank - 0 ~ 9 e.g. Rogue (normal) to Rogue-subtype (normal)
// one rank up same class - 20 ~ 50
// same rank different class - 20 ~ 50
// one rank up, different class - Full reset

// Stealth, Every point increases the duration by 10 seconds. However it also increases the cool down.
// Dual Wield, Each point reduces the dual wielding penalty, and eventually it a buff.
// Preparations, Can set up basic traps
// Shadowstep, Move though the shadows instantly
// Stealth Attack, An attack launched from stealth for bonus damage
// Venom, adds poison to physical attacks
// "Creature"-Venom, Ignores a % of poison resistance
// Backslash, jump over a target and stab them in the back
// Throwing Knife, throws a knife
// Cloak and Dagger, short teleport without breaking sneak
// Gag Order, silence target while active (short debuff on target per point)
// Rupture Tendons, cut the targets tendons reducing their move speed
// Spinning Edge, an attack
// Gust Slash, an attack
// Aeolian Edge, an attack, bonus from rear
// Shadow Fang, an attack
// Fleet of Foot, increase move speed
// All fours, reduce damage from falling
