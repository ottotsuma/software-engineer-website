import React from "react";
import Item from './../elements/item'
function intro(props) {
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
          <Item />
        </div>
      </div>
    </div>
  );
}
export default intro;

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
        again.{" "}
      </p>
    </div>
  );
}

// Team bonuses for each of them?
