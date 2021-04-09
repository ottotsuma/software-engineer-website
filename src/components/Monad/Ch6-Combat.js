import React from "react";
import Spells from "./../elements/spells";
import Stats from "./../elements/stats";

function intro(props) {
  return (
    <div className="Monad" id="3">
      <div className="Frame">
        <div className="Content">
          {/* <!-- Class - Combat --> */}
          <h4>Combat Class</h4>
          <p>
            "Todays lesson will be on combat between mages. The upcoming duels
            have some of you excited, and this lesson is to help you prepare for
            the battle ahead. Now in real duels, you will be permitted to use
            your own equipment but for this session you can only use the weapons
            provided to you, and the uniform you are wearing now. You may not
            enchant or enhance any of the equipment." Lubin announced.
          </p>
          <p>
            <li className="Item">
              Body:<li className="Junk"> Academy Robe (black).</li> Magic: +1,
              Health + 10.
            </li>
          </p>
          <p>
            "Now the most obvious thing when thinking about duels between mages
            is that they use magical attacks. Conventionally, should you be
            attacked by a mage Willpower is will provide the best defence. As it
            reduces the damage taken by more than Vitality increases your
            health. However you must consider the bigger picture, once you leave
            the academy not all of your opponents will be mages and most will
            use physical attacks and the points you put into Willpower will do
            nothing to protect from that." Lubin continued.
          </p>
          <p>
            "The second thing to think about during a duel, although not as
            prevalent during your lower levels, is the amount of mana you and
            your opponent have. If you run out of mana, it is likely you will
            pass out early on and be unable to fight." Lubin said.
          </p>

          <p>
            "Finally, is the element type you both use. You might be an amazing
            fire-mage but if your opponent is using water, you are at a huge
            disadvantage so keep that in mind." Lubin explained.
          </p>
          {/* If there are no further questions about the duels
            we will move onto charms and how to counter them." Lubin said
            waiting for questions to come. */}
          {/* Here */}
          <p>
            The lesson continued as normal, reading though past mages, their
            feats, discoveries and challenges. I decided to check out my current
            stats since there was a fight coming up.
          </p>
          <Stats
            type={"description"}
            stats={{
              name: "Otto",
              level: 11,
              class: "Mage",
              element: "Lightning",
              skills: 6,
              titles: 1,
              "skill points": 5,
              "stat points": 11,
              vitality: 0,
              strength: 0,
              endurance: 0,
              magic: 13,
              willpower: 1,
              dexterity: 0,
              sense: 1,
              charisma: 2,
            }}
            notes={
              "Titles: Magic +1 from title. Willpower + 1 from magic resistance skill. Spells: Mana ball (lightning) (Pow: 1), Tether, Magic resistance (passive), Magic up (passive), Strike (lightning) (Pow: 2+2),  Magic regen (passive)"
            }
          />
          <p>
            I had picked up the element lighting when I reached level 10. There
            was a few to pick from, the teachers had said that the elements you
            get to pick from depend on your environment and past actions.
            Although the choice was up to you what element to pick there were
            elements you would be stronger with and others weaker. Luckily for
            me lightning had a high compatibility with me.
          </p>
          <p>
            Looking though the list of skills a lighting mage could learn I
            could not really decide which I wanted and which I should avoid. I
            narrowed it down to just a few I felt like I could use:
          </p>

          <p>
            Chain Lightning, Dazing Bolt, Thunderstorm, Shocking Touch, Sparks,
            Lightning Bolt, Lightning Rune, Lightning Cloak, Thunderbolt, Static
            Field, Wall of lightning, Lightning Storm, Discharge, Charged
            Charge.
          </p>

          <p>
            I decided to pick up, lightning cloak, shocking touch, chain
            lighting, 'Charged Charge' and wall of lightning.
          </p>

          <p>
            Thinking on what the teacher had said, mages in the duels would be
            using magic attacks so it is potent to put points into willpower.
            But I wanted to think about the future also, no not putting points
            into endurance but strength. There was nothing in the rules to say I
            had to use magic, and his element lightning would travel easier
            though a metal blade then a wooden wand.
          </p>

          <p>
            His hp at the moment was 210. The largest attack a level 10 student
            using a non elemental attack would be strike with no element would
            be about 100. Hoping even with the element added maybe I could take
            two hits. His plan would fall apart if the hit was a critical
            however.
          </p>

          {/* <!-- level *5 magic * 8 = mp // level * 10 vit * 14.5 +100 = hp --> */}
          <p>
            I had made my preparations and headed to the arena where the duels
            would be held this week. Those not dueling would have to take notes
            and give feedback to those who where dueling.
          </p>

          <p>
            I would be dueling on days 3 and 5. I spent the first day watching
            his class mates duel, most of the matches ended quite quickly with
            the students hp being reduced in 1 to 5 hits. There was of course
            the odd duel where two defensive type mages met and each would
            exchange blows of around 5% of their total hp and mana consumption
            became important.
          </p>

          <p>
            Knowing my duels would not become a slogging match between two
            defensive mages I tried to concentrate on the matches between two
            offensive mages, or how to break though the defense of a defensive
            mage. What became very clear was that mages at this level where
            slow, not very powerful and had defences like paper.
          </p>

          <p>
            On the second day I managed to catch that some of my house mates
            signing up also and went to see their matches. Tisiel's match ended
            in her loss, she only signed up for the experience and would never
            be a dedicated combat mage. Shrorlei's match was a weird one, with
            some of her spells not activating and her opponents sometimes
            fizzling out, the teachers reacted with no shock at all like it was
            expected but some of the students, like I could not understand.
            Reingard overwhelmed his opponent with a constant stream of
            manaballs but soon ran out of mana and passed out, I had won the
            match however. Ralsan did not fight today and I had missed his first
            match yesterday.
          </p>

          <p>
            On the third day I equipped my formal outfit, mages robe and headed
            down to the area again. This time however instead of watching the
            matches I made my way into the armory beneath the area. Inside where
            many students picking out weapons and signing in that they where
            present. I signed next to my name picked up a completely metal spear
            and sat down to wait. He got a few weird looks, some of the students
            must of pitted me thinking I must of thought the metal spear was
            some kind of magic staff, but non of them would correct me though, I
            might be their opponent after all.
          </p>

          <p>
            Soon enough my name was called, along with another boys Daniel. He
            was tall, a little chubby, with hair so short you could see his
            scalp like it had recently been shaved off and grown back. He had a
            friendly face however, squinting eyes that looked like they where
            smiling. He had a 20cm wand in his hand made of wood, the wood was
            much darker then the wand I had in my room. Thinking there is not
            much to learn from my opponent and I would just stick to my original
            plan I greeted Daniel with a smile and a bow. Daniel bowed back and
            we made our way into the area.
          </p>

          <p>
            It was hot, too hot. The moment we stepped out I could feel my face
            starting to sweat, the crowd where shouting on their friends and now
            being down in the middle of it all I could hear just how loud the
            curved walls of the area made the crowd. I opened by casting
            lightning cloak, lightning covered my entire robe but would only
            react on contact so it was of no threat to Daniel at start of the
            match. Daniel opened with a manaball which gathered in the palm of
            his hand and looked to be made of mud and earth, before I had time
            to debate Daniel's element it was flung towards him at great speed.
            Casting wall of lightning in front of me, lightning bolts stuck up
            from the ground 1m in height. I ducked and the ball his the lighting
            bolts and broke apart, the pieces of the ball exploded out in all
            directions some of them hitting into my arm and side, it stung like
            being hit with a rock. I had lost a lot of mana and some hp in that
            exchange and Daniel had come out on top. Gripping my spear and
            casting 'Charged Charge' my whole body felt lighting crawling all
            over my skin my muscles twitched from the stimulus and I shot
            forward and great speed. Daniel taken back by this sudden change
            summoned an earthen 1m wall in front of himself, which I just jumped
            over easily with my increased speed. I lunged the spear into
            Daniel's center and cast 'Shocking Touch', the spell worked by
            releasing lighting-mana from my fingers but as I had hoped the
            lighting ran the length of the spear and entered Daniel's body. The
            last thing I remembered was the great pain in my feet and legs as a
            1m earthen spike shot out of the ground and sent me flying. The
            match was over.
          </p>

          <p>
            Waking in an unfamiliar bed with bright white light shining into my
            eyes, I reached my hand to cover my face from the brightness and
            tried to look around. In a bed to the right, sitting up eating red
            grapes was Daniel. He turned towards me and smiled.
          </p>

          <p>
            Daniel - "Congratulations on your win, I'm Daniel the first earth
            mage to lose to a lightning mage this year."
          </p>

          <p>
            Feeling awkward I responded "Sorry about that, but how is it my win
            if I ended up in here also?"
          </p>

          <p>
            Daniel - "First to bring the opponents health to 10 points wins,
            after you lowered my health to 10 points so the spell that activated
            after although lowering your health to 10 points also means I came
            second."
          </p>

          <p>
            Otto - "Oh I see, sorry again. Can I ask, why does our health stop
            at 10 points?"
          </p>

          <p>
            Daniel - "Don't be sorry your prize is to do that again, you where
            my final match and I don't plan on going though that pain again any
            time soon. You don't know? Teacher should of told you, during a duel
            your health stops at 10 points so no one dies. If you want to know
            more then that you'll have to ask professor Farald he's an expert on
            it."
          </p>

          <p>
            Otto - "Thank you, I think I must of missed when we were taught
            that. How did your first match go?"
          </p>

          <p>
            Daniel - "Easy win, guess that's why I was so confident going in.
            This will teach me."
          </p>

          <p>
            I soon left the infirmary and went back to my room to rest after
            being granted leave for the afternoon. The show we put on today
            probably caught some attention, using a spear to get 'Shocking
            Touch's' range to increase. Maybe not I can't be the first to think
            of this. If they did think of it before, it's unlikely they would be
            able to use it at this level since shocking touch alone would have
            no way to knock out Daniel in one hit, without my strength stats and
            the damage the spear did because of them I would of lost. I need to
            formulate a new plan, so I went top side. On the top of the cliff
            was an area set out for training, or at least that what it had
            become. I was trying to push his lighting-mana into the spear and
            throw it, the only trouble was, the lighting-mana I wrapped around
            the spear didn't travel with the spear, the spear flew and the
            lighting mana just dissipated. "There must of been a skill for this
            I don't have yet or missed.. I am out of spell points anyway."
          </p>

          <p>
            Ralsan - "If you have a spare spell point and force it enough you
            can learn a skill that way. Would look cool to see a lighting
            spear."
          </p>

          <p>
            Otto - "Hey, yeah it would of but I don't have any skill points
            left."
          </p>

          <p>Ralsan - "Please tell me you at least got discharge?"</p>

          <p>
            Otto - "No, I thought since it drains so much mana I would just pass
            out, so I didn't get it."
          </p>

          <p>
            Ralsan - "From what I saw you passed out anyway. I just came up to
            tell you it's dinner time, we are eating together while we give each
            other advice."
          </p>

          <p>Otto - "Ah, I'll be down shortly, thank you."</p>

          {/* <!-- 

let ATT = 15
let LVL = 15
let DEF = 0
let PWR = 4
let Base damage = (((100 * ((ATT*LVL) / (ATT+LVL))) * PWR) + 100)/(100/LVL)
let Damage = ((Base damage) - (DEF))

function damage () {
ans = (((ATT+LVL) * PWR)*5) - (DEF * 20)
if (ans < LVL) {return 1 * LVL}
return ans
}
console.log(damage())--> */}
        </div>
      </div>
    </div>
  );
}
export default intro;
