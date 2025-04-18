import React from "react";
// import Item from "./../elements/item";
// import styled from "styled-components";
import { Content } from "./styles";
// import Spin from "./../elements/spin";
import Quest from "./../elements/quest";
import LevelUp from "./../elements/levelup";
import {
  Noah as NoahStats,
  Sarah as SarahStats,
  Josh as JoshStats,
} from "./People";
// import Equipment from "./../elements/equipment";
// import Stats from "./../elements/stats";
import Spells from "./../elements/spells";
import Blood from "./../../assets/Blood.jpg";
import { Sarah, Josh, Juan } from "./CharacterFonts";

export default function SeaPeopleFunction(props) {
  return typeof props === "number"
    ? SeaPeople[props]
    : SeaPeople[props.Chapter];
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

export const DirtySeaPeople = () => {
  return (
    <div>
      <p>1: They are in a zone of comfort</p>
      {/*  */}
      <p>2: But they want something</p>
      {/* To found a guild in the new world */}
      <p>3: They enter an unfamiliar situation</p>
      {/* Arrival on the new world */}
      <p>4: Adapt to it</p>
      {/* Do quests to reduce the miasma, join the vampires & on going war */}
      <p>5: Get what they wanted</p>
      {/* Found a guild in the new world */}
      <p>6: Pay a heavy price</p>
      {/* The three of them cannot die, so they must pay with something else. */}
      <p>7: Then return to the familia situation</p>
      {/*  */}
      <p>8: Having changed</p>
      {/*  */}
    </div>
  );
};

// Rest period, results day is a good starting place.

// Rogue Skills Used (Basic) - Fleet of Foot, Headbutt
// Combo skills for each class: 'Slashing Edge' into 'Sharp Slash'
// Rogue: Side/Back -- Back -- Side (3rd one is intermediate), (4th advanced)
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
// Shadowstep, Move through the shadows instantly
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
export const SeaPeople = {
  0: (
    <Content style={{ overflowWrap: "anywhere" }}>
      {/* Notes page for sea people - Although everything is in the notes. */}
      <h1>Sea people</h1>
      <p>
        A group of sea travelers with different species. Their classes will be
        advanced classes because they have all reached level 100 at some point.
        The miasma effect will reduce their capabilities by 90% and be removed
        as they complete more quests on the DLC island.
      </p>
      <h2>List of the group</h2>
      <ul style={{ overflowWrap: "anywhere" }}>
        <li style={{ overflowWrap: "anywhere" }}>
          Example: Name, species, class(), level, equipment, backstory(Main
          island, other dlc before? ), clan/guild, reason for coming. PET(level)
        </li>
        <li style={{ overflowWrap: "anywhere" }}>
          {NoahStats(1)}
          Boy: Name, Dark Elf?, class(Rogue[]), 37, [Normal/Rare, mostly from
          the main quests], (From the main island, recently started playing, no
          dlc), none, saw the adverts for coming and wanted to try. None(0)
        </li>
        <li style={{ overflowWrap: "anywhere" }}>
          {SarahStats(1)}
          Girl: Sarah, Vampire, Use to be a human paladin, class(Tank[Guardian])
          Wants to change to blood warrior, 100, [mixed normal, rare epic with
          one unique], (Pro-gamer, guild leader, small dlc before), clan/guild,
          get in before the other guilds. PET(60),
          file:///C:/Users/snows/Documents/GitHub/ottotsuma.github.io/guard100.html
          https://ottotsuma.github.io/images/people/w1.jpg
        </li>
        <li style={{ overflowWrap: "anywhere" }}>
          {JoshStats(1)}
          [file:///C:/Users/snows/Documents/GitHub/ottotsuma.github.io/Assassin.html
          , but not unique items], (Member of the same guild, small dlc, company
          man), clan/guild, accompany the same guild. RAT(100)
        </li>
      </ul>
    </Content>
  ),
  1: (
    <Content style={{ overflowWrap: "anywhere" }}>
      <h4 style={{ textDecoration: "underline" }}>Sea People</h4>
      {/* Intro of Josh, Noah & Sarah. Looks and personalities. They are not NPC. */}
      <p>"We'll be there soon." Josh said from behind me.</p>
      <p>
        "Awesome, I don't want to spend another minute on board this ship." I
        said holding onto the side of the ship looking out into the big blue
        ocean.
      </p>
      <p>
        "Who knew you could get sea sick inside of a game? I feel bad for you
        man." Josh said patting my back. That didn't help so I hugged the side
        of the ship tighter.
      </p>
      <p>
        "And I said if you call it a game you won't be joining me on this trip."
        Sarah said walking out from the captains cabin. Her skin was pale white,
        jade like and smooth. Her white skin somehow made her bright orange hair
        stand out more. In contrast her armour was mostly savoy blue armour
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
      {/* This whole chapter is trash, it sets Sarah up as a pro-gamer, Noah as a dark elf, Josh as an assassin. */}
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
        my attribute points and what skills to learn, it's been awhile."
      </p>
      <p>
        "Ah yeah. I mean I am a rogue type... My class is assassin, which is a
        type of rogue but I have a very specific play style and set of skills.
        If you want that kind of play style I can share my build with you but if
        it is just generic advice for rouges or play styles I can still help.
        After all I have been playing since launch." He smiled, he was a little
        more relaxed and less serious then Sarah. I guess that was to be
        expected. Josh had a normal day job and played the game for fun but
        Sarah was a professional gamer & streamer. This was her job.
      </p>
      <p>
        Monad, like all modern massively multiplayer online games (MMO Games),
        are played inside Virtual Gaming Cabins or Virtual Gaming Pods if you
        still use the old version. When you go to sleep inside them you can play
        the game while you body rests. This lead to a rise in MMO Games, people
        now more hours a day to play games without effecting their day time.
      </p>
      <p>
        Players are able to enter in and the cabin will provide the energy and
        nutrients required by the body at any time, just had to refill the
        nutrient fluids. It is capable of simulating the body's muscles,
        preventing the body from weakening after playing for long periods of
        time. So spending many hours inside the cabin was no problem at all.
        Since they also functioned as health cabins, tracking your heart rate
        and helping healing process, anyone recovering from an injury might as
        well use them.
      </p>
      <p>
        The final benefit, everything was faster inside the pod. So players
        could play for 24 hours in the game and only 12 hours would pass in real
        life. People like Sarah would play much longer then 12 hours and spend
        her awake time complying, editing and uploading her videos.
      </p>
      <p>
        "Well, to be honest I don't really know what direction would be best. I
        reached level 50 before but when my species changed, I have only been
        able to get back to level 37 now." I admitted. I had not played for
        awhile. Monad has the most interactive NPC's and the great immersion.
        Maybe streamers, like Sarah, get a lot of views from their role playing
        streams. While others make money in other ways. To get in on this big
        market other game companies tried to also make fantasy RPGs, but they
        were never as real as Monad. I had left Monad for awhile to try and play
        some of these new releases but ultimately came back as nothing held a
        candle to Monads giant world.
      </p>
      <p>
        "Ah bummer man. You must of got an unlucky role. Dark elf is still a
        humanoid species of the same rarity as human right? So the level loss
        should of been small." He asked.
      </p>
      <p>
        "Ah no, it is a rare rated species. So I went one rarity up, and
        although its humanoid, it is a species of elf so I jumped from human, to
        elf, to dark elf... So instead of the random level reduction it took me
        back to level 1." I replied. This was to account for players turning
        into all kinds of species. If you were once a human and turned into
        something with winds, tentacles or claws, it would take some getting use
        to. To account for this, when you changed species or class you would
        lose a few levels.
      </p>
      <p>
        "I suddenly don't feel bad for you at all. You got a rare species at
        level 50." He joked. "But hey, what are the skills like for a dark elf?
        Tell me all the ones you can see, I'll see if they match your play
        style!" He suddenly seemed excited at finding out something new.
      </p>
      <p>
        I told him everything I could, from the skills to the bonuses and draw
        backs of being a dark elf. What he found most surprising was that
        despite reaching level 50 I never got a pet. The thing was when I
        reached level 50 I got the species change at the same time so I didn't
        wait to get a pet. We all make mistakes. So we kept talking until we
        became hungry.
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
        the same savoy blue armour and white cloak with her hair in a braided
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
        water crossing through them. I put my toes into one of the small water
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
        that area. Without the map through nothing will appear."
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
        attributes. However she was a shy person and rarely asked anyone to
        join, most of the people that joined her guild were invited by others
        already in the guild.
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
      <h4>Save the prince!</h4>
      <p>
        I wanted to try fighting the giant crabs on the other island but I was
        told it was a bit of a waste of time. If you killed too many of them a
        massive version of the crabs came out of the sea, standing at the height
        of 3/4 of a man and would be a real challenge, but the loot was really
        poor. Since we were under the effects of the miasma, even at half
        strength, our attributes were reduced making weak enemies appear
        stronger.
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
        sand recovered were it was before. Thankfully, even through the drop was
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
        wall and a huge crab claw smashed into and through him into the wall
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
        through my skills list.
      </p>
      <p>
        "Assassin, not Rogue. It's a different class. Anyway we can talk about
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
        We wanted to quickly move to the other side, Josh moved quickly through
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
        species had some cool and unique abilities I just had to think of ways
        to use them. We ran without talking again towards the crab, however this
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
        The miasma had halved all of our attributes but I was only just
        realising that it also half our level. Only now when it came to fight
        for the first time since the Miasma was this strong did I realise all my
        level 30 skills were blocked!
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
        armour except the trim was silver and not gold. In her other hand looking
        less heroine and more demonic was a large mace, the image looked like an
        evil wizards tower, it was all black with several pointed parts at the
        top.
      </p>
      {/* ottotsuma.github.io/images/w1.jpg */}
      <p>
        The claws of the crab rushed forward and clamped down on Sarah's shield.
        "Moron." She shouted while slamming her mace into one of its joins, the
        sound of crab armour being crushed was... It made my stomach ruble.
      </p>
      <p>
        Before I had made my move Josh was already behind the crab doing his
        thing, singing "Stabby stab stab, stabby stab." While jamming his long
        thin blades into the gaps in the crabs armour.
      </p>
      <p>
        I did not want to be left out and seeing the other crab claw closing
        down on Sarah from the side I sprinted forward. Since I only had my
        basic rogue skills I decided to show off what a basic rogue could do!
        The first thing I did was merge with my monster spirit, this was a skill
        specific to rogue type classes, any monster you kill solo, if you absorb
        the monsters spirit you get access to some of the monsters skills! This
        was the draw to picking rouges.
      </p>
      <p>
        The monster I had fused with was a Satyr, they where a kind of fusion
        between horse or goat and human. Mine was no normal Satyr but the level
        40 boss, Satyr Cruk, Chief of war of the goat clan.
      </p>
      {/* https://www.fantasynamegenerators.com/satyr-faun-names.php */}
      {/* file:///C:/Users/snows/Documents/GitHub/ottotsuma.github.io/rogue.html */}
      <p>
        As soon as I had activated the fuse, horns grew from the front of my
        head, spiraling around and back pointing forward. My feet turned into
        hooves as fur grew out the side of my legs. The transformation not only
        changed my physical appearance but also my attributes and the effects of
        some of my rogue skills. This was why people played rogue, for a game
        based around options, this class had the most to pick from.
      </p>
      <p>
        The first skill I used was 'Fleet of Foot' for movement increase, I used
        my new speed to run at the crab claw which was almost upon Sarah now and
        then used 'Headbutt' on the claw to knock it off course. I damn near
        fell over from the recoil but the claw was smacked up and away from
        Sarah. With my horns attached my 'Headbutt' skill did no recoil damage
        to myself and more to my target.
      </p>
      {/* https://ottotsuma.github.io/rogue */}
      <p>
        With my two short swords I slashed out in claw pattern I had picked up
        when my rogue spirit was a tiger. 'Slashing Edge' into 'Sharp Slash'.
        The damage was far less than Josh was doing but I was helping keep the
        other claw away from Sarah more then damaging.
      </p>
      <p>
        Sarah had taken to smashing the crab in the head trying to hit it's eyes
        with her mace. Her attack power was clearly not as high as her defense
        but it was not nothing. The crab annoyed by us span around and knocked
        all of us back a few places. Sarah screamed like a banshee so it rushed
        down Sarah smashing into her shield and armour with its two claws. I
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
        strong goat legs. My horns pierced through the underbelly of the crab.
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
        species={"rare"}
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
      <div className="BreakPoint" />
      <p>
        All elves started off in a big forest, thought to be the forest ****.
        There they worshiped the spirits that made up nature, kind of like gods.
        This has been misinterpreted as a worship of nature itself but its not
        untrue. Anyway these are the elves as most people know them even today.
        A long time ago there was a split in the thoughts of the elves and where
        the gods of nature lay. These splits from the religion are referred to
        as 'dark elves'. My kind often mistaken for the only dark elves because
        our skin is often ash grey in colour, desert elves would be the true
        name. The desert elves as the names suggests moved south into the
        deserts in search of the gods of nature that lay there. Next come the
        snow or cave elves, they moved north into the snowy lands for the same
        reasons. Finally the sea elves, who drowned trying to find the gods of
        the ocean.
      </p>
    </Content>
  ),
  6: (
    <Content style={{ overflowWrap: "anywhere" }}>
      <p>
        "Good morning." Sarah said to me as I came onto the deck of the ship.
        She was in her blue and gold armour as usual looking out across the
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
      <div className="BreakPoint" />
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
        Seeing body parts, organs and blood slide down inside the serpent
        through its translucent body reminded me of a lava lamp I had when I was
        a kid. Josh hit me on the side and shouted. "The Cliff! The Cliff!" I
        turned to see I had just left the boat to continue on it's path and we
        were coming up on the rocky face quickly. I tried to slow the boat down
        with the oar's but Sarah said "No, keep going. This is perfect." She
        turned and grabbed me by the collar and pulled me up behind her under
        cover of her shield.
      </p>
      <p>
        The boat felt like it picked up speed as a wave pushed us up into the
        cliff. Sarah had me hold on as she slammed herself into the cliff. The
        shock ran through me and I saw my health drop by only by a little. She
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
        "Ohh, I'll make it up to you in the future. For now through lets rest
        here until Josh comes to get us." She said sitting back down again.
      </p>
      <p>I looked at her confused. "How will he find us?"</p>
      <p>
        "The shield. It is a pretty big give away." She replied and closed her
        eyes.
      </p>
      <div className="BreakPoint" />
      <p>
        We had wait for about 20 minutes before the sounds outside were just the
        crash of the waves on the cliffs and the wind running through the gaps.
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
        of riders stopped us on the road. What they were riding through was the
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
        pretty lax about the outer city. I had once thought about building our
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
      <p>
        They spoke to each other in low hushed tones, so I was unable to hear
        anything but their eyes never left us. I was not sure what to say so I
        just stood there awkwardly. Thankfully Josh broke the awkward silence.
        "Who's the creepy homeless guy?"
      </p>
      <p>
        Sarah stared at him for awhile before replying. "If anyone is homeless
        here it is us. He is ... Part of a group of people I aligned myself with
        the last time I was here, he will be helping get us paper work and a
        delivery to take south. In the mean time." She pulled out a grey slip of
        paper and handed it to me. "The lowest level ID, but beggars can't be
        choosers."
      </p>
      <p>
        "Right, thank you. Not to be rude or anything, but I am going to find
        some low level quests to do soon as possible, what time do I have to be
        back here?" I asked.
      </p>
      <p>
        "Nightfall, it's fine you can go, it's better you get stronger as soon
        as you can, I'd love for Josh to go to but he cannot speak to anyone
        alone." Sarah replied.
      </p>
      <p>
        Josh let out a small 'Tish' noise, we both ignored it and I left them
        with one last comment. "If that creepy man is joining us I would like
        some social distancing rules." Before I could get away Sarah had thrown
        a rock in my direction. I just laughed it off.
      </p>
    </Content>
  ),
  7: (
    <Content style={{ overflowWrap: "anywhere" }}>
      {/* Wet lands to the south of the city. */}
      {/* Vampire eyes red - purple - blue */}
      <h1>Monh</h1>
      <p>
        After leaving the others I wondered through the city, every now an then
        checking my inventory like the ID Sarah gave me was going to disappear
        for no reason. I liked having the freedom to move about, being trapped
        in a cell was no my idea of a good time and not why I played.
      </p>
      <p>
        It was quiet refreshing to slow down for a moment and not be in a rush
        or combat, or stuck on a ship and just enjoy what was around me. I don't
        know why I thought the city should or would match the cities of the
        european medieval design, but the people spoke German so I guess it
        would of fit.
      </p>
      <p>
        Each expansion to the game so far had featured native or even forgotten
        languages of the regions it took inspiration from. Africa, Asia, Middle
        East, Europe. This time people expected the Americas to be the setting
        for the expansion but I guess since the languages are lost it was hard
        for them to do the Americas. This is not a bad method, since it allows
        their players to find a language they can use or want to learn. But also
        why some people chose to come later once English was in wider use.
      </p>
      <p>
        The city had tower like structures dotted around, unlike the straight
        defensive look of european towers these looked like tables stack on top
        of each other, there were not really walls but 4 pillars in each corner
        holding up the next layer. The other buildings also copied this design,
        making the whole city feel like it was made of blocks all in the same
        style.
      </p>
      <p>
        They put colorful cloth and patterns all over the place, some hanging
        down covering where I felt like the walls should of been. It gave the
        city a bright vibe that felt so foreign to me, the strong use of oranges
        especially. The buildings still felt old through their stone looking
        cracked and worn.
      </p>
      <p>
        Most people in the city this morning where heading in the same direction
        so I just felt my self going with the flow. When I stopped gawking at
        the buildings and looking at the people I noticed their stares. Was it
        my clothes? I was dressed in clothes from another continent after all.
        Everyone here wore ... bright clothing.
      </p>
      <p>
        loincloth's where common for the men, matched with hip skirts or capes,
        there were lots of bird iconography and feathers used in the designs,
        some wore almost toga or poncho style clothes covering them selves more.
        The woman wore similar bright colors but long dresses or skirt and top
        in a small poncho style also. While some did have capes it was rarer.
      </p>
      <p>
        This seemed to be true for most of the people but those carrying weapons
        openly, acting as guards and police wore mostly beast parts, monsters
        often drop items in their own style so it made sense they would be
        wearing them. While they added cloth here and there most of the guards
        had no capes but maybe the head of a leopard placed on top of their own,
        pelts or beast parts over their bodies as armour.
      </p>
      <p>
        There levels in the cities I had visited in the past where not that
        high, around the mid 50's up to 70's. It would be a mistake to think
        that they are weak through. Even in area's where players attributes where
        not reduced NPC's with the role of city guard received boosts to their
        damage dealt against players and reduced damage dealt by players to
        them. Nothing that could not be overcome with better equipment. The main
        problem with fighting them was two unique abilities, the first was to
        call for more guards which seem to come out of the wood work. The second
        was to put a bounty on the players head, this means any player who helps
        kill you would receive part of the reward for your arrest. Why was this
        such a huge problem? They wouldn't take the bounty off because you died,
        it only comes off when they capture you. The players attacking you of
        course have little interest in helping you get captured...
      </p>
      <p>
        I had gone with the flow for awhile, the streets slowly became wider
        until I found myself walking down what must of been the main street of
        the city into a market area. It was not unlike other markets I had been
        in the game in the past. There were stalls made of wood, cloth on the
        ground with items place atop it and people shouting out about their
        wears.
      </p>
      <p>
        I knew I was going to find something to do here, maybe a fetch quest or
        delivering something. It was just kind of a trope of RPG games now that
        there would be some low level mundane quest that had no impact on
        anything to pick up easy experience or in this case to get rid of the
        effects of Miasma.
      </p>
      <p>"Diese Notizen müssen so schnell wie möglich geliefert."</p>
      <p>
        Geliefert. Deliver. My basic game logic did not let me down! I quickly
        went over to an old lady talking to a man in his early 20's sitting at a
        wooden table with papers all around it and in bags by the side of him.
        He had guards specifically for him on either side, but I was not here to
        rob him. No, I wanted to work for him!
      </p>
      <p>
        I had injected my self into their conversation with my terrible German
        and they had looked at me like some kind of alien until I showed them my
        ID card. It translated to something like 'surf' while not slave in name,
        I could not be paid for my work but would be paid once I moved up in
        rank. It took a little while but they gave me a quest to deliver some
        notes scribbled on parchment type paper to take to the city gates and
        give to a man called... "Erich Traub".
      </p>
      {/* Disease */}
      {/* Quest */}
      <Quest
        rating="rare"
        rewards={"Miasma reduction OR Blood Bottle."}
        name="Possible Cure!"
        details="Anna's husband recently died from a curse going around the republic, the government are pressed on two fronts with environmental disasters cropping up. Her husband was working on a possible cure before his death and left behind his notes & a blood bottle. Deliver these to his co-worker who travels through the city walls every day for work. Or you could just steal the bottle, and use his notes as toilet paper."
      />
      <div className="pop">
        Blood Bottle
        <img className="popOut" src={Blood} alt="Blood Bottle" />
      </div>
      <p>
        The bottle they had handed me was rather interesting, but a little
        creepy. A bottle with a human heart inside sitting in some red liquid.
      </p>
      <p>
        An ever beating heart. As long as the heart stays within the enchanted
        bottle it will continue to beat and produce human blood.
      </p>
      <p>
        What a strange description, I guess they need the heart to experiment
        on. I wonder if the vampires invented this, seems like it would be real
        useful to them. That creepy guy from the alley sure looked like he was
        dead. The quests rewards are reduction in Miasma which is what I wanted,
        or keep the bottle? What the hell for...
      </p>
      <p>
        It seemed like this was gonna be an easy power up for me but kind of
        annoying since I didn't know what time this guy would be coming through
        the gates after work. I could be waiting there for 5 minutes or a few
        hours. Whatever I'll go to the gate but if he is not out by midnight
        I'll just come back one day and hand the quest in right?
      </p>
      {/* Bottle as reward */}
    </Content>
  ),
  8: (
    <Content style={{ overflowWrap: "anywhere" }}>
      {/* <h4>Night Fall</h4> */}
      <p>
        I had found the entrance to the upper city easily. The giant buildings
        acted as extinguished lighthouses. I made it to the wall without any
        real problems but as described, it was guarded and I would have to wait
        on this side for Erich to pass by.
      </p>
      <p>
        The normal thing to do at this point would be to ask the guards what
        time to expect Erich, the only problem was my poor German. I might end
        up saying something else. Like a true veteran of RPG's I knew just what
        to do in the mean time. I found a pub overlooking the entrance.
      </p>
      <p>
        Well, I thought it was a pub. Tomato Juice, Guava Juice, Pumpkin Juice &
        Chicha. Juice is healthy but this is my free time so I ordered Chicha.
        It was super quiet inside, everyone was just sitting around not talking,
        I thought It would of been more ... Alive. When my drink came it looked
        like something you would give to a vampire, maybe that is why the mood
        is dead. I picked it up and looked down at the red-purple liquid and
        sipped it gently. Huh, not super sweet but quite a nice taste. Kind of
        mellow fruit taste at first then a nutty after taste.
      </p>
      <p>
        A little boy with dark skin, dark eyes, straight black hair and a long
        sloping forehead asked. "Bist du ein Vampir?"
      </p>
      <p>
        What the hell did this kid just ask me? Am I a Vampire!? Ah I really
        ordered the wrong drink. The horrified farther quickly came to get the
        child, although he looked nothing like the son having dusty brown hair
        and a stout figure. I tried to explain I was not a Vampire I just did
        not know what to order, it was my first time here. Although I got no
        reply, from anyone.
      </p>
      <p>
        I wanted to get out of here to be honest, the whole thing was super
        awkward. However I had brought a drink and it was interesting. If I left
        now I would just have to wait outside for Erich, so I decided to stay,
        how did it come to a point where I felt awkward by a group of NPC's.
      </p>
      <p>
        I ended up standing at the bar drinking by myself, the chatter in the
        place soon picked up again after awhile but still felt a little awkward.
        Curiosity got the better of me and I had to ask the bar tender why they
        served a drink that makes people mistake you for a vampire? The reply I
        got was, unexpected.
      </p>
      <p>
        He told me my burnt skin and pointed ears made him assume I was a
        vampiric elf. I had to ask if he had ever even seen a vampire before,
        which of course he hadn't. It was interesting they knew of elves but
        called my skin 'burnt'. From the map Sarah had shown me there was a
        desert taking up most of the south past some mountains, if there are
        elves about maybe there are dark elves in the desert. The second thing
        was that they knew vampires existed in this town but had never seen one,
        I guess there must of been victims. Well if they are just staring and
        making assumptions of me because my skin is darker then theirs that's
        not great but a step up from them thinking I am a blood drinking
        psychopath. Speaking of I must ask Sarah if non NPC vampires get blood
        lust.
      </p>
      <p>
        During out chat a man came through the door and started shouting about
        "elves". It was obviously directed at me. The owner however did not want
        someone causing a fuss in his business and two large thuggish looking
        brutes came out holding wooden batons with metal studs and spikes coming
        out of them. The whole thing escalated and died down so fast my heart
        was still racing getting ready to run when ... Nothing happened. What
        the hell?
      </p>
      {/* This is trash */}
      <p>
        The guy pointed his finger directly at me and said he hated all elves.
        Even if I had been burnt and cursed by the Gods I was still an elf. The
        hero in stories is always cool, calm and relaxed laughing off a morons
        threats. I am clearly no hero because I remember how long it took to get
        to this place and already I am facing death threats, I only wanted a
        drink! I flipped.
      </p>
      <p>
        I screamed at him about how I am not a bloody wood elf, I was a dark
        elf. We hated the wood elves more then any other species! Thanks to my
        less then stellar German, the introduction of a species he had never
        heard of and my fits of rage he barely understood any of it.
      </p>
      <p>
        You know what? Screw this Erich and his people. Someone else can help
        him with a cure for this disease. I left the notes on the table and
        asked the owner to pass them to Erich Traub if he knew the man. Someone
        else might clear this quest in the future it was not worth it. I walked
        passed everyone in the pub and made my way outside.
      </p>
      <p>
        I did not make it far before some guards stopped me and said that I must
        be the vampire they where looking for. What the hell is wrong with this
        town!? That was my thought when the inevitable pop up box appeared.
      </p>
      <p>
        Go to jail. Resist arrest. Persuade. That last one should of just been
        renamed to bribe at this point but I could not afford any kind of bribe.
        Resisting arrest would be a short lived joke. I Guess I am going to jail
        for being a vampire...
      </p>
      <p>
        All of my items where in my inventory. In the old world they would of
        taken it all after you reached the holding cell but I guess here they
        are not use to players yet and after looking at my ID and saw I was a
        poor servant with nothing of interest. Luckily they did say they would
        contact my master but I never really did look too closely at that ID, so
        I had no idea who that was.
      </p>
      <p>
        The holding area was not some massive building or well guarded, isolated
        encampment. It looked like all the other towers around and the holding
        cells were just inside with only room for 3. Just outside was were the
        two guards stayed while people came in asking for help. I guess they are
        not taking this vampire thing seriously?
      </p>
      <p>
        I had not had to walk far, just down the street from the pub, I could
        still see the entrance to the walled off part of the city if I was just
        in the room with the guards. I know it had been hours since I last spoke
        to Sarah and Josh this morning, it was becoming afternoon already. I had
        spent a long time chatting in the pub to the owner, it did take me
        awhile to get across what I was trying to say in my third language. I
        was tired. The last time I had rested was inside a rock cave with Sarah
        when we landed, so I just through I'd rest in the cell a little while,
        and I fell asleep.
      </p>
      <div className="BreakPoint" />
      {/* Master = Camazotz, cast out from creation
      
      Chaac *L*
The god of storms and rain, enemy of Camazotz and wields a lightning axe.

*/}
      <p>
        "Sarah. It would seem your acquaintance has been found out as a vampire.
        I have a request here from the cities guards for master to come and take
        responsibility him. You told me he was not a vampire." The tall pale man
        accused with a little joy a to his tone.
      </p>
      <p>
        "He is obviously not a vampire. You met him yourself this morning. It's
        obviously because he looks so different. You said it yourself Kiksotz,
        he was interesting." I shot back.
      </p>
      <p>
        "Alright. I knew this would be a possibility. I really did expect him to
        be able to walk the city for a day without this kind of thing happening
        but I was proven wrong. Maybe it was his elf, characteristics that
        pushed it over the edge." Kiksotz muttered.
      </p>
      <p>
        "If you're done experimenting with my colleague. I do need him back for
        tonight, we are heading south as agreed. With him." I said staring right
        at his eyes.
      </p>
      <p>
        "Alright, alright. No need to get so... Mmm. We just have to prove he is
        not a vampire and we can take him away." Kiksotz replied dismissing the
        whole thing as trivial.
      </p>
      <p>
        "And you won't be detained as a vampire?" I questioned with my eye brow
        held up.
      </p>
      <p>
        "These, people. Have no idea what vampires really are." He replied
        calmly. "I'll inform master and we will set off intermediately to get
        him. As interesting as your, colleague, is. I do not want to delay
        masters plans. You must go south tonight." He replied and turned to
        leave to the large black double doors to his right.
      </p>
      <p>
        I waited for him before heading to the entrance of the manor we were in.
        I assume we would not be using the underground tunnels leading to the
        various safe houses across the city. I waited for Kiksotz to finish
        conversing with his master. We had met before, but with the miasma
        effecting me I could not tell what level his master was, just that he
        saw me as weak.
      </p>
      <p>
        Once Kiksotz had come back up he nodded to me to show his master had
        given his approval and we were off on his behalf to pick up Noah the
        dark elf.
      </p>
      <p>
        During my stay they had given me local clothing to wear. I picked out a
        bright light red dress with various patterns woven in the fabric. Little
        yellow diamond shapes dotted across the chest and white lines running
        down the sleeves. While it was not my usual choice since I was suppose
        to be a noble from the far west of the republic I had to look the part.
      </p>
      <p>
        "You said they had no idea what vampires really were. Have they not seen
        vampires before? Where I came from it was impossible to keep the public
        from finding out. How have you managed to stay hidden? I mean master is
        hardly, discreet with his appearance." I quested as we walked down to
        our carriage.
      </p>
      <p>
        Kiksotz held out his hand and helped me into the open topped carriage.
        "Because before your kind came from the sea, sorry the land beyond.
        There were no concept of vampires here, master and myself were just
        considered as denizens of Xibalba. To add to that it is only recently we
        have walked amongst humans, after all we use to live in Xibalba." When
        he finished speaking he had climbed into the carriage with me and it
        took off with a jolt.
      </p>
      <p>
        The carriage was being pulled by, well they looked like giant turkeys.
        With light blue feathers, tipped orange and a light blue head and neck.
        Kiksotz had informed me that they where beast Ocellated turkeys. In the
        west of the republic was the only place these turkeys could be found and
        the beast versions were both rare and useless for combat making them a
        status symbol of those rich enough to be able to keep something so
        useless.
      </p>
      <p>
        "So how will we prove Noah is not a vampire?" I asked as the carriage
        pulled out of the manor gates and onto the main street heading to the
        city wall.
      </p>
      <p>
        "Well, he's not a vampire. So it should be impossible for them to prove
        he is. We will put blood in front of him and see if his eyes change
        color or he becomes rabid. The usual things a low level undead cannot
        resist. Something along those lines. Once they let him into our custody
        you will be heading out of the city anyway before they can gather any
        witnesses to his vampiric tendencies anyway." Kiksotz Replied.
      </p>
      <p>
        I watched as we passed towers pass by. Every building in this city
        seemed tower like to me. Even the 'manor' that we came from, from the
        outside just looked like serval towers coming out of a plinth of steps.
        The only differences between the towers of the lower town and the city
        behind the wall was the height and that these towers did not have open
        holes for passers by to gape into, everyone was sealed up.
      </p>
      <p>
        As we passed through the wall I sat with a straight back looking ahead,
        both passive and annoyed, trying to give some sort of air of a noble
        woman. We were moving out of the main city into the lower town and these
        were just guards so while the facade was not needed, you never know who
        has eyes where. From the gate it was a surprising short trip to where
        Noah was being held.
      </p>
      <p>
        Kiksotz asked me to stay in the carriage while he went to get Noah. I
        might of protested but they were only a few paces from the carriage, I
        could even hear what they where saying. They had brought Noah out, he
        was not even bound or had any restrictions on him so clearly they knew
        he was no threat and therefore not a vampire.
      </p>
      <p>
        "We got a report that he was drinking the blood of people in pub down
        the road." One of the guards said.
      </p>
      <p>
        "Drinking blood? Where are the victims? The witnesses? His fangs? Come
        now stop wasting our time, what is the real charge." Kiksotz berated the
        guard .
      </p>
      <p>
        "I know how it sounds, but he really was accused of being a vampire."
        The guard insisted.
      </p>
      <p>
        "Urgh." Kiksotz responded pulling out a small knife from his waist. The
        guards moved back but did not draw their own weapons seemly more
        trusting of Kiksotz then I expected as slit his own arm and watched the
        blood roll down his arm and splat onto the floor.
      </p>
      <p>
        "So, his eyes are not red. He is not devouring the blood on sight. Is it
        possible he became full earlier? There must be lots of dead in the pub,
        you're acting very calm around such a dangerous killer." Kiksotz stated
        looking at his blood drip to the floor and to the guards around Noah.
      </p>
      <p>
        "Alright, alright. He doesn’t seem dangerous. He looks very suspicious
        through, and we really did have reports of a vampire matching his
        description." The guard replied.
      </p>
      <p>
        Wrapping his arm with a red cloth from his pocket Kiksotz smiled and
        replied. "His appearance is interesting, it is why master is hosting him
        in this city. He was too busy to meet with him at the time the lady
        brought him to see master. He is awaiting this one now. I promise if he
        tries to drink anyone's blood we will kill him ourselves, you have my
        word Christoph." Kiksotz pulled a string and plucked off a small pouch
        from under his cape, pinching the strings with his fingers and leaving
        his hand on top passed it over to the guard while with his other hand
        taking Noah by the arm and pulled him to the carriage.
      </p>
      <p>
        The guard simple replied. "Since he is with your master there is no
        threat to the people of this city." He accepted the pouch and the guards
        moved back inside their tower as Noah climbed into the carriage. He
        tried to sit next to me so I hit him with the pouch I was given and told
        him to sit upfront. He looked so confused bless him.
      </p>
      <p>
        The ride back to the manor was done in awkward silence as Noah was told
        not to speak until we get inside.
      </p>
      <p>
        Once back safely Noah tried his hardest to bombard us with questions,
        but it had been a long day for me. Most of the questions would end up
        irrelevant anyway with our departure in a few hours. So I left him with
        Kiksotz. After all he had to meet master before we set off.
      </p>
      <p>
        "Don't slink off. You should take Noah to see master." Kiksotz told me
        as he reached into the mouth of a stuffed and mounted Tiger-Lily beast.
        On earth these were just an orange type of flower with black spots but
        the beast version was more of a tiger. It's main made of petals, tail of
        leaves with the end flowering one of the orange flowers. Here through was
        just the head and the peal mane.
      </p>
      <p>
        Once he was in past his elbow he pulled on the leave behind the tigers
        head and the wall adjacent to it swang back to reveal a stairway down.
        At the bottom would be Kiksotz's office, a place he did his work for the
        vampires while pretending to sleep. Who knew there would be paper work
        involved in being a vampire.
      </p>
      <p>
        We would have to follow him down through. Next to his desk were a pair of
        large black double doors which housed master. Every time I had met
        master had been in that dark room, he rarely came out I was told.
      </p>
      <p>
        I released the breath I had stored up and nodded. If master wanted
        something I had no power to decline him. We followed Kiksotz down the
        stairs until we stood before the giant black doors.
      </p>
      <p>
        "Bat wing doors? You're not afraid that is too obvious?" Noah muttered
        on seeing the doors. Now he pointed it out I could not unsee how they
        did look like bats wings from the outside covering the doorway.
      </p>
      <p>
        "Nope." Kiksotz replied taking a seat at his desk and burring himself in
        his paper work.
      </p>
      <p>
        "Just try to relax Noah. Master is not human after all so you.... Should
        relax." I told him, although he did not ask so it sounded like more I
        was calming myself down.
      </p>
      <p>
        "Neither am I." Noah reminded me. Even I forget sometimes what we really
        are.
      </p>
      <p>
        I pushed the doors open with both hands leaning into the heavy doors as
        they slide open gently and slowly. Although not touching the floor they
        were still heavy. The room was pitch black, which was fine for me since
        my eyes adjusted to the night vision while descending the stairs. Noah
        on the other hand had placed one of his hands on the wall the whole way
        down and lit a small lantern to see.
      </p>
      <p>
        Master came walking over to see us. Not to see us really but to give
        Noah a better look, master would have no problem seeing him in the dark.
        Once the towering giant with black leathery hide oozing dark gas stood
        over us, Noah could see his half transparent blood red wings coming off
        his arms. Then the milky white bones covering his ribs and face, the
        bones on his face leading to horns of bone jutting atop his head. Under
        the bones was black leathery skin, I had stared the first time we met,
        he had a partial exoskeleton and a full endoskeleton. His blood red eyes
        staring, unblinking through a face of bone far above us always made me
        shiver. He was the image of what I fought against in the past when I use
        to be a paladin.
      </p>
      <p>
        "Nice wings." Noah said. I could of slapped my own face, did he really
        just say something so awkward.
      </p>
      <p>
        Master deep voice came out in German or Aldenese, either way it filled
        the room as he said. "With the description's of your demonic skin color
        I was hoping you were from Xibalba, but you really are a burnt elf. I
        thank you for the compliment. I trust you have been told of my small
        request."
      </p>
      <p>Ah potato's, knew I forgot something.</p>
      <p>
        "Dark elf. Not burnt elf. This is my natural skin, we are not the same
        species." Noah corrected. Did he have a death wish? It took long enough
        to get here!
      </p>
      <p>
        "A different species? The only change is the color of your skin?" Master
        questioned.
      </p>
      <p>
        "Ah, no. Actually there are other differences. The short of it is that
        our racial traits and skill trees are different but we both have a
        common ancestor." Noah explained. I too was interested in this as I had
        through dark elves would be either elves but with dark skin or the more
        classical dark in mind and powers, but they usually have light skin. I
        would have to ask Noah later more about this.
      </p>
      <p>
        "The people from across the sea are truly interesting. More species. I
        would love to learn more but you must leave soon, I trust you will
        inform Noah of our plans Sarah?" He looked at me and I nodded. "Go now,
        we will speak again in the future." Master said walking out of the light
        and back into the darkness. Although I could continue to see him walk
        further into the room I took Noah out, master was right, we had to leave
        under the cover of night.
      </p>
      {/* Nahual */}
    </Content>
  ),
  9: (
    <Content style={{ overflowWrap: "anywhere" }}>
      <p>Going South</p>
      <p>
        We had set off that night in the same carriage we took during the
        evening. Kiksotz was teaching Noah how to drive the carriage because he
        would be leaving us before the border. Sarah and I were in the back
        roleplaying as some posh western woman and her mute bodyguard.
      </p>
      <p>
        "So tell me again how sending us into a war is going to help you and
        your master?" Noah asked Kiksotz for the fifth time.
      </p>
      <p>
        "As I said before, you're not going to fight in the war, just look for a
        single person. A person with the ability to use white lightning. Then
        report it back to us." Kiksotz explained again.
      </p>
      <p>"While there is a war happening around us?" Noah asked.</p>
      <p>
        "Move around at night, your skin would make you harder to spot." Kiksotz
        jested.
      </p>
      <p>
        "We both know I cannot see in the dark. Ah let's change the topic, why
        did you and your master come to the republic? He said you were both from
        Xibalba. Why not come to the old land, why stay in the new land?"
      </p>
      <p>
        "This land is old. Just because it is new to you does not mean it was
        not here before." Kiksotz started to explain. "To understand why we came
        to the republic over the other countries I assume you mean, well i'll
        give you a brief history since you are new to this, old land." Kiksotz
        smiled at his own joke. "This land use to be unified under one great
        empire, Pocotcotco. Like all empires, even the great ones, it crumbled.
        From its ruins came new countries, cultures and ideas. The fall of an
        empire is not like a fire. The past is not washed away, the people that
        made up that old empire, although fewer were still there. Each new
        nation dealt with this in different ways. The Republic, let it doors
        open to anyone and everyone so long as they serve the republic and obey
        their laws. As such the republic could field greater armies, produce
        more resources and therefore took up more land. It did however lead to
        many people of many different backgrounds and cultures and beliefs all
        living together."
      </p>
      <p>
        "The two biggest contributors of people to the republic where the
        Aldenese who took up their axes against the Pocotcotcos that were left
        behind in the empires collapse. They were also not very welcoming of
        refugees of war. The second contributors were the elves. After they took
        their freedom, if you were on their island and not an elf it was time to
        get out."
      </p>
      <p>
        "The smaller kingdoms and nations made around the foundations of the
        republic were soon swallowed up although not through war at first but
        through membership. The offers were the nobles would be given a higher
        rank then their common people, a title and offices in the government.
        Jobs they were doing anyway. The common people gained the right to run
        for and elect their own officials to a citizens assembly."
      </p>
      <p>
        "Well that is how the republic came to be what it is today. With lands
        stretching so far, unbreakable class distinctions rooted in family
        history and the internal discord that comes with many cultures living
        close to each other. They squabble and fight over things we as outsiders
        see as worthless reasons to fight."
      </p>
      <p>
        "This made it easy for master and myself to slip in using the name of an
        old family who had fallen on hard times. With gold and gems and the
        strength to back it up, no one would mistake us for the sea people, or
        call us liars."
      </p>
      <p>So why did you leave Xibalba? Noah asked.</p>
      <p>
        There was a few moments of silence before Kiksotz replied. "Xibalba.
        Truthfully is not a place you would leave willingly. Master and I were
        accused of ripping the head of some hero or other and playing sports
        with his freshly severed head. It was so long ago who even remembers. To
        keep things short, the heros Gods invaded Xibalba, specifically to find
        me and master, and erase us. Needless to say they did not completely
        achieve that goal, as Gods cannot walk among mortals, we fled here a
        place we were not totally unfamiliar with in the country of
        Pocotocotcan. From there we slipped into the republic as I said before
        and here we are now."
      </p>
      <p>
        "Speaking of here now." Kiksotz said drawing the carriage to a stop. "Up
        ahead is the boarder of Monh. The county below is Baberg. You want to
        head directly south, when you come to the cross roads near the town of
        Weildengen. All the normal land, and sea routes on the way to Alden are
        carefully monitored. There is a river on the boarder to Alden called
        Kehzach. From our reports, this is one of the locations students will be
        monitoring, you just have to monitor them and report back if you see the
        person we are looking for."
      </p>
      <p>"Sounds simple enough." Noah said getting down from the carriage.</p>
      <p>"We can do it." Sarah added stepping silently onto the floor.</p>
      <p>
        "Wait what was the carriage and acting like a nobles for?" I added with
        my eye brows raised.
      </p>
      <p>
        "Every time we are around Kiksotz or Master we must act out being nobles
        of the Republic. Everything is for perception of others, so we are able
        to take our place as minor rulers after. However we also must undergo
        our current mission to pay back master for our new ID's. Nobles cannot
        be seen doing that which is why Kiksotz escorted us to the border, from
        now we must go under our 2nd identities." Sarah replied as if I should
        of know. Was anything ever explained anything to me and Noah?
      </p>
      <p>
        I don't really know the kind of power 'Master' had but the joint quest
        had finally had me and Noah added to it. The reward made me shut my
        mouth and become a lot more willing to go along with the ride. It's not
        everyday you get to eat for free.
      </p>
      <Quest
        rating="rare"
        rewards={"Reduce miasma 20%"}
        name="Report the location of Kʼawiil's mage."
        details="Kiksotz & Master are interested in the whereabouts of a mage rumored to have gained the power of Kʼawiil. If found this may trigger additional quests."
      />
      <p>
        A large miasma reduction equivalent to 20 levels just for finding a kid.
        A chance as a quest line were the rewards would only increase in folds.
        There was no reason to speak any more about it, this is the best kind of
        quest.
      </p>
      <p>
        Kiksotz had turned the carriage around and waved us off as he headed
        back to the city. Sarah had a hood around her head betime I turned back.
        "What? You're suppose to be the greatest assassin in our guild, blend in
        already." She quipped.
      </p>
      <p>
        "You don't put a hood on to blend in." I opened my inventory and took
        out normal clothes of the people of Alden. "Put these on both of you.
        Over your armour is fine but if you have disguise skill but if you don't
        putting clothes on top of your armour will render your armour attributes
        useless." I told them. To my sunrise they both had skills for disguise.
        Sarah from her vampire class, Noah said the dark elves learn it ass a
        species skill and I had it as an assassin.
      </p>
      <p>
        They must of put 1 point in each. It was clear they had their armour on
        underneath to me, especially Sarah's large blue armour. Hopefully the
        people we will be passing don't look to closely at us.
      </p>
      <p>
        Walking along the only road out of Monh had us passing the odd merchant
        traveler or grain cart bustling past mostly in the same direction as us.
        Most of the traffic would be stopped at Konavelheim for the night or if
        they were faster straight to the port of Kipold. After the crossroads
        the road to Weildengen was more or less our own.
      </p>
      <p>
        The sun had set when we arrived at Weildengen. While it was inside of
        the Baberg territory, the capital saw this place as some backwater
        hunting village. That took no deduction, as it was the first thing the
        guard said Sarah when we arrived. That and her disguise was poor. He
        mistook her for some noble from the west, which was the vibe she was
        going for before. Noah he took for a slave, I think his eleven features
        and the look of a tourist gave him away.
      </p>
      <p>
        The town is pincered between wet lands and the sea, sitting in temperate
        forest that covers the majority of the east of the republic. This town
        was the end of the road, the path to Alden from here would be across the
        unpaved wetlands and rivers. This made this area almost inaccessible to
        large movements, the monsters lurking in the wetlands would make sure
        any attempts to do so would not go unpunished or unnoticed. The perfect
        place to sneak across a normally thinly guarded border.
      </p>
      <p>
        The town was far from using up all of the possible building space,
        however the land that was left was being used for farming space. Unlike
        my home town the farms in the republic were communal, just like they
        where in Monh. The town was not too different in style, just much
        smaller. The tallest building reaching 4 floors. The buildings were all
        painted white and pink-red, the towns flag hanging on the palisade gates
        we passed through. It was a quartering pattern of alternating white and
        pink-red color, a triangular cut was removed from the bottom and finally
        a three-leafed clover leaf shaped emblem sat in the middle of the field
        with reverse colors to the field.
      </p>
      {/* Dingy Dungeon = pink red */}
      <p>"Should of been an acorn." Sarah said out loud.</p>
      {/* Reference to the german suit of cards */}
      <p>"What?" Noah replied confused.</p>
      <Sarah>
        "Nothing. Oh just encase anyone asks, our purpose here is to hunt
        monsters for a bounty put out by the capital. Josh, you cannot speak
        German, so I'll give you the bounty to hold onto so you can just point
        at it." She said handing me a cream sheet.
      </Sarah>
      <Josh>"Thanks." I replied putting it away for now.</Josh>
      <Josh>
        We rode up to the guards posted at the village entrance. They seemed
        unsurprised by our wagon and far more interested in Noah.
      </Josh>
      <Josh>
        The guards shouted something at Noah. Sarah just huffed and turned to
        me. "They just asked if Noah had a disease, you know because he's a dark
        elf." I could not help but giggle, it should not be funny, but his being
        misunderstood was his misfortune.
      </Josh>
      <Josh>
        She made her annoyance known to the guards, probably telling them the
        story Kiksotz told us to use. Noah was not diseased but Sarah's slave,
        his skin has been like it from birth and he was thrown out of the eleven
        territories because of it. My job was simple, look menacing but bored. I
        like to think my face was made for this role.
      </Josh>
      <Josh>
        They must of only spoken the necessaries however when you cannot
        understand a word being said, the whole transaction seemed to last
        forever. When we finally got inside the town I was relieved. I had no
        idea if they were arguing, getting along or just making small talk. It's
        quite frustrating to find yourself unable to understand anyone around
        you.
      </Josh>
      <Josh>
        The town was not very busy, it was remote, and the war was mostly being
        fought further to the west this was still a border town to the country
        they were at war with, I guess this is why Kiksotz chose this town in
        the first place.
      </Josh>
      <Josh>
        Noah lead our carriage over to an inn, it seems we were allowed, due to
        Sarah's noble status to use the carriage to get to the inn but after our
        arrival the carriage and mounts would have to go back to the stable. The
        inn was nothing much even if they told me it was the largest in town.
        The biggest of anything in a small town was never very big. Three floors
        tall, with orange, red, yellow, pink cloth hanging from each window,
        even if they were pinned at top and bottom they still flapped about in
        the wind.
      </Josh>
      <Josh>
        We had our belongings transferred into the rooms. The boxes we took with
        us contained nothing but cotton and other common materials, the whole
        thing was just a sham. It's not like Sarah really owned lots of fancy
        dresses, clothes and jewelry a real noble would own.
      </Josh>
      {/* https://static.wikia.nocookie.net/shadowverse/images/f/f3/Priest_of_the_Cudgel.png/revision/latest?cb=20171006174601 */}
      <Josh>
        I was escorting Sarah into the inn when she stood frozen in place,
        looking at the back of some bald headed man in a grey robe. His robe was
        not even well kept, it was dirty at the bottom, coated in dried mud. I
        inspected him since he had caught Sarah's attention and was shocked to
        discover he was a player not an NPC.
      </Josh>
      <Josh>
        Not everyone brought good equipment with them on the journey, after all
        the trip was dangerous, each new continent came with hidden dangers.
        However this person gave off no sense of danger, nothing on him looked
        new or useful. I whispered to Sarah. "Do you know him?"
      </Josh>
      <Sarah>
        "Yeah." Sarah replied softly. "He's an Inquisitor of my old church."
      </Sarah>
      <Josh>
        "That.." I could not finish my sentence. Church's, or any religion in
        Monad could play a huge role to a player. Religions could be a key power
        player in a kingdom or span across several kingdoms. The god's often
        played an active role in this world, manifesting powers, items and
        abilities as rewards. A fight over religions influence was a fight
        between the gods themselves.
      </Josh>
      <Juan>
        {/* Juan Ponce de León */}
        The old man then turned around and looked right at Sarah. "Oh!" He
        exclaimed, holding his arms out wide either side of himself. "It has
        been a long time. Why so stiff? Do you not remember me?" the old man
        asked in a loud voice.
        {/* turns around and addresses Sarah having no idea she left the church. */}
      </Juan>
      <Sarah>
        "Forgive me Inquisitor Juan, I was just shocked to see you here. Last we
        met was in Lith Eru." Sarah quickly recovered.
      </Sarah>
      <Juan>
        "Well, the church has to help these heathens see the right path, no? It
        is why you are here also, is it not? Surely you don't think the church
        only sent your group?" Juan asked.
      </Juan>
      <Sarah>
        "Ah, no, it's just. I guess I have been here awhile and not had word
        that anyone else had made it over yet. As you know communication here is
        very difficult." Sarah replied watching her words.
      </Sarah>
      <Juan>
        "That is very true. I myself have lost communication with the church,
        nevertheless I continue with the task given to me by our God." Juan
        smugly replied, lording over Sarah that he had a task directly from a
        God.
      </Juan>
      <Sarah>"A direct task!? What is it!?" Sarah startled.</Sarah>
      <Juan>
        "Yes, it is true. This humble servant communicated directly and received
        a divine task." He smiled and puffed out his chest a little.
      </Juan>
      <Sarah>
        "Ah well, if we can be of any help, please let me know. I am currently
        undergoing a task of my own, although it is not of divine origin.
        Hopefully it will help us shrug off more of this miasma, so we can be of
        help." Sarah nodded, trying to bring the conversation to a close.
      </Sarah>
      <Juan>
        "How rude of me. You must be tired after such a long travel. I was just
        heading back out anyway, I must convert more heretics." Juan held
        Sarah's hand in a slow shake, before taking his leave out of the inn.
        Even adding that he would see us tonight, since he too was staying at
        the inn.
      </Juan>
      <Josh>
        After the brief exchange, Sarah shot me a warning look to keep my mouth
        closed. If I didn't know better I would swear she hates my voice. Saying
        nothing, I accompanied her into our room. The room was split into two,
        like most high class rooms were. The first room, with two small beds
        pushed into the walls at the sides, flanking a door into the second
        room. This will be where me and Noah are expected to stay, keeping
        guard. Sarah's room was much larger then our little entrance way. The
        room opened into a canopy double bed to the right, a large window at the
        far wall and a fire place to the left. The window was like the others
        found throughout the republics old buildings, covered by colorful
        clothes, with wooden shutters when you wanted privacy.
      </Josh>
      <Josh>
        "As nice as my small bed in a dark entrance way is, I am going to take a
        look around the town and pick up some items." I told Sarah after looking
        around the room.
      </Josh>
      <Sarah>
        "Okay, I have guild matters to catch up on anyway so I'll just be up
        here. Avoid Juan if you can, he's a little.. Pushy, about joining the
        church." Sarah warned me, as I took my leave.
      </Sarah>
    </Content>
  ),
  10: (
    <Content style={{ overflowWrap: "anywhere" }}>
      <p>Weildengen</p>
      <Josh></Josh>
      {JoshStats(1)}
      {SarahStats(9)}
      {/* Give the blood bottle to Sarah, after she is injured by the priest */}
      {/* Even the birds seem to hold their tongues. It was as if even nature was speechless  */}
      {/* All the normal land, and sea routes on the way to Alden are
        carefully monitored. There is a river on the boarder to Alden called
        Kehzach. From our reports, this is one of the locations students will be
        monitoring, you just have to monitor them and report back if you see the
        person we are looking for." */}
      {/* In the south you join the war and find Alden people. See the side of the war from the republic. */}
      {/* The purpose of joining as mercenaries, but working with the vampires to carve out a piece of land to rule */}
      {/* switching sides during the conquest to keep land? */}
      {/* Contact with Effi */}
      {/* The lands are re-conquered during the sea peoples invasion, turning it into the guild territory, before the expansion to the west. Some of the Aldenese hide in this guild. */}
      {/* The invasion of earth */}

      {/* Crime */}
      <p>
        Some say war helps drive innovation, the drive for survival pushing
        people to innovate. The only ones to ever profit from a war were
        criminals and lords.
      </p>
      <p>
        This war would be no different. Right now the sea people were not lords
        of this land, if they acted on their own they would be criminals. Many
        would join the ranks of the armies assembled as conscripts or
        mercenaries. Not all however. Some wanted to play the hero, becoming
        lords through gathering the peoples favour.
      </p>
      <p>
        Would there be anyone who wanted to be the criminals? Yes. Those who
        wanted a better odds at becoming the lords. In an established country
        you had to be born to the right family or be grated the title by a king
        or queen. Here before the countries are established, the lords would be
        those who killed the right people.
      </p>
      {NoahStats(9)}
    </Content>
  ),
  11: (
    <Content style={{ overflowWrap: "anywhere" }}>
      <p>Chapter 10</p>
    </Content>
  ),
  12: (
    <Content style={{ overflowWrap: "anywhere" }}>
      <p>Chapter 10</p>
    </Content>
  ),
  13: (
    <Content style={{ overflowWrap: "anywhere" }}>
      <p>Chapter 10</p>
    </Content>
  ),
  14: (
    <Content style={{ overflowWrap: "anywhere" }}>
      <p>Chapter 10</p>
    </Content>
  ),
};
