import React from "react";
import Stats from "./../elements/stats";
import { Content } from "./styles";
import Hover from "../elements/hover";
import {InlineSpell} from './../elements/spells'
function Intro(props) {
  return (
    <Content>
      <div className="Frame">
        <div className="Content">
          {/* <!-- Training. --> */}
          <h4>Training</h4>
          <p>
            In the afternoon we went into the jungles in search of beasts to
            hunt to hone our skills and try to work together as a team. The
            first beast we came across was not a beast I would forget
            anytime soon. The text book describes them as centaurs, with the
            lower body of a horse and the upper of a man, but only in
            appearance, the truth was always darker then it first appeared. The
            body on a man on top was in fact the skin of a human, sometimes
            whole sometimes patch work from several different bodies, their true
            form lay under the mess of meat and flesh. What that was would have
            to wait until after the battle.
          </p>
          <div className="pop">
            Centaur
            <img
              className="popOut"
              src="https://ottotsuma.github.io/images/monsters/centaur.jpg"
              height="400px"
              alt="centaur"
            />
          </div>
          <p>
            Reingard struck first with balls of mana and tanked the centaurs
            hooves with his shield reinforced in his metal mana. Shooting into
            action, I charged into the beast with the skill 'Charged Charge'
            and stuck down with <InlineSpell spellName={'Strike'} level={1} /> (lightning) infused into my warhammer, I
            had picked up a few tricks on the way. Just like that 10% of its
            health disappeared.
          </p>

          <p>
            Volker summoned flames over his hands and threw a great wave of
            fire, washing over the beast turning the fur on his rear black,
            the smell of burning fur singed and hung in the air. Raina washed
            Reingard in water infused mana and the scratches and dirt on his
            skin seemed to wash away healing him for over 25% of his total
            health.
          </p>

          <p>
            Putting on lightning cloak I dove back into the battle, the centaur
            had a heavy body, large hooves and a short crude spear it swung
            around and tried to stab with, the trick to the centaur was to keep
            it from being able to charge. Reingard would block it by staying in
            its line of sight, I would try to heard the beast into Reingard.
            Since Volker was doing more damage with his fire this worked out
            well for us.
          </p>

          <p>
            When I saw a gap I stuck into its knee on its rear legs, the damned
            beast kicked me in the chest with its hooves and I went flying. I
            landed against the ground and slid for a bit, my lightning cloak had
            shocked him on impact and given Reingard the chance to provoke the
            beast away from me. A cool liquid flowed over me and my health
            started to recover from the red.
          </p>

          <p>
            Soon the beast fell and our first day of training would stop
            here. The beast had dropped a necklace made of teeth and an eye
            ball. None of us really wanted them, but we would sell them for
            money, centaurs cannot be found outside of the academy.
          </p>

          {/* <!-- What was inside of the meat body ?  --> */}

          <p>Reingard - "You took quite the hit."</p>

          <p>"Yeah, I don't know how you take so many hits all day long."</p>

          <p>
            "High endurance, and metal element help a lot. Keep safe through your
            health is low for a melee fighter."
          </p>

          <p>
            "Yeah. Should I start buying more items? I feel like I must at least
            be close to paying off the debt I incurred."
          </p>

          <p>
            "Sounds like a plan. Ah you two where great, Volker your fire was
            really effective, and Rainas healing waters work better then other
            healers in our year, maybe better then some second years."
          </p>

          <p>
            "Ah thank you, the range of our skills is really short however, and
            our vitality is not much different from squishy Otto's here."
          </p>

          <p>"What a nick name..."</p>

          <p>
            "Well lets go celebrate with what we can buy from these, and
            tomorrow hunt again until we are well coordinated."
          </p>

          <p>"Cheers!"</p>
          {/* <!-- level 14? attack +5 --> */}
          {/* <!-- <p>Days leaning up</p> --> */}
          <p>
            The next few days went by quickly, each morning Reingard would say
            good bye to Tisiel, I would stand around as a third wheel, we would
            meet up with Volker & Raina and head into the jungle of the academy,
            never venturing too far in.
          </p>

          <p>
            Quickly reviewing my attributes so far I saw that I had no defenses, very
            little health and was still reliant on a melee weapon. On the other
            hand I had high mana, high magic output, perhaps there was someway I
            could turn this into a defense.{" "}
          </p>
          <Stats
            type={"description"}
            stats={{
              name: "Otto",
              level: 14,
              class: "Mage",
              element: "lightning",
              spells: 11,
              titles: 3,
              "spell points": 3,
              "stat points": 0,
              vitality: 0,
              strength: 16,
              endurance: 0,
              magic: 25,
              willpower: 2,
              dexterity: 0,
              sense: 1,
              charisma: 3,
            }}
            notes={
              "Magic +1 from title. Willpower + 1 from magic resistance skill."
            }
          />

          <p>
            There is no way I can keep melee attacks from myself currently, but
            perhaps I could dodge them? Most will be mages and unable to make
            any meaningful damage with melee attacks during the arena.
          </p>

          <p>
            I can use the shoes Tisiel gave me to dodge attacks, more then to
            help me move in quickly. Maybe I could hit them and then use the shoes to get away,
            but they only work after I've been stuck first.
          </p>

          <h4>pov Tisiel</h4>
          <p>
            Sitting and minding his own thoughts Otto looked like he was lost in
            his own world again, but I had important information to share. "Otto
            wake up, I've made some headway on the strange symbols."
          </p>

          <p>"I wasn't asleep, but that is good news what did you find out?"</p>

          <p>
            "Right well, it's my belief that it was written by an older
            civilization"
          </p>

          <p>"Not a previous student? I guess that's something, well done."</p>

          <p>
            "Don't patronize me, I mean we all know we did not build the
            academy, that is known all over. I mean a civilization that use to
            be here but not apart of the original academy exactly."
          </p>

          <p>"Come again?"</p>

          <p>
            "So some civilization built the academy, the portal and the writing
            system found around the academy we often call runes. However these
            symbol's don't match, not even a little! They are from a later
            civilization that built on top of the academy, they built the town
            near by, the smaller academy, this door inside the cliffs, the
            cliffs as rooms!"
          </p>

          <p>"It's an interesting theory but what was your break through?"</p>

          <p>
            "The book you gave me, it's not from the academy, you found it in a
            market on our continent. But look at the book, it's not magical,
            it's not old or rotten at all. How old could it be?"
          </p>

          <p>
            "But no one uses symbol's even like this, maybe a student sold the
            book to the merchant, maybe its been in here the whole time."
          </p>

          <p>
            "Yes, but you found the coins on a dead body on our continent in
            strange clothes? The symbols on the coins are also strange, but also
            found throughout this book! And for the biggest reveal..."
          </p>

          <p>
            "This! There is a map inside the book of an unknown land, that shows
            on the next page.. A map of the academy. Which was very helpful as
            you can see there is an area to the left of the main academy
            building past the noble area and into the jungle on that side."
          </p>

          <p>
            "Hmmm, adventure time? I have a few days more then enough time to
            make the trip, but it is quite deep into the jungle."
          </p>

          <p>
            "Yes well this time we won't be going alone, call it training for
            your arena team and we will take Shrorlei with us also, she is very
            strong."
          </p>

          <p>
            "Well lets meet up and head off in an hour, we were going to head
            into the jungle anyway today."
          </p>

          <p>"Let's!"</p>
        </div>
      </div>
    </Content>
  );
}
export default Intro;
