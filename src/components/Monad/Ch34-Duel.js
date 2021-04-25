import React from "react";
import Item from "./../elements/item";

function Intro(props) {
  return (
    <div className="Monad" id="3">
      <div className="Frame">
        <div className="Content">
          <h3>Duel</h3>
          <p>
            Linhart wore a bright red robe with white trim. Second years wore
            robes that represent their element. Third years got a white trim, to
            indicate they had chosen a path of continued learning at the
            academy. Once one became a professor at the academy they would
            receive a fully white robe.
          </p>
          <p>
            I did not need to look up what Linhart's bright red robe
            represented, as the trim on my robe was the same color. We were both
            fire mages.
          </p>
          <p></p>
          {/* https://ottotsuma.github.io/race */}
          <Item
            stats={{
              vitality: +1,
              dexterity: +2,
              sense: +1,
            }}
            name={"Goblin"}
            effect="Generate less agro from monsters."
            src={`https://github.com/ottotsuma/ottotsuma.github.io/blob/master/images/goblin.jpg?raw=true`}
          />
        </div>
      </div>
    </div>
  );
}
export default Intro;

// Vampire type, more blood taken makes them stronger so often conflict with humans
// Vampire type, more hunger makes them stronger so often hide from humans
// The people coming off the boats don't have to be human
// Merging the stats into a few, Vitality, magic, strength, sense, charm
// No classes? Just race and element?

// Transferring class of the same rank and type lose 0~9[dice rolling thing] levels.

function placeholder() {
  return (
    <div>
      <h1>Sea people</h1>
      <p>
        A group of sea travelers with different races. Their classes will be
        advanced classes because they have all reached level 100 at some point.
        The miasma effect will reduce their capabilities by 90% and be removed
        as they complete more quests on the DLC island.
      </p>
      <h2>List of the group</h2>
      <ul>
        <li>
          Example: Name, race, class(), level, equipment, backstory(Main island,
          other dlc before? ), clan/guild, reason for coming. PET(level)
        </li>

        {/* Human into something? */}
        <li>
          Boy: Name, Dark Elf?, class(Rogue[]), 37, [Normal/Rare, mostly from
          the main quests], (From the main island, recently started playing, no
          dlc), none, saw the adverts for coming and wanted to try. None(0)
        </li>
        <li>
          Girl: Sarah, Vampire, Use to be a human paladin, class(Tank[Guardian])
          Wants to change to blood warrior, 100, [mixed normal, rare epic with
          one unique], (Pro-gamer, guild leader, small dlc before), clan/guild,
          get in before the other guilds. PET(60)
        </li>
        {/*looks; file:///C:/Users/snows/Documents/GitHub/ottotsuma.github.io/guard100.html */}
        <li>
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
        50." He joked. "But hey, what are the skills like for a dark elf? Tell me all the ones you can see, I'll see if they match your play style!" He suddenly seemed excited at finding out something new.
      </p>
      <p>I told him everything I could, from the skills to the bonuses and draw backs of being a dark elf. What he found most surprising was that despite reaching level 50 I never got a pet. The thing was when I reached level 50 I got the race change at the same time so I didn't wait to get a pet. We all make mistakes. So we kept talking until we became hungry.</p>
      <div className="BreakPoint"></div>
    </div>
  );
}

// Team bonuses for each of them?
// same class and rank - 0 ~ 9 e.g. Rogue (normal) to Rogue-subtype (normal)
// one rank up same class - 20 ~ 50
// same rank different class - 20 ~ 50
// one rank up, different class - Full reset
