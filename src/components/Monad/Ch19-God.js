import React from "react";
import Equipment from "./../elements/equipment";
import Stats from "./../elements/stats";
import Item from "./../elements/item";
import Title from "./../elements/title";


function Intro(props) {
  return (
    <div className="Monad" id="3">
      <div className="Frame">
        <div className="Content">
          {/*  Xiquiripat ("Flying Scab") and Cuchumaquic ("Gathered Blood"), who sicken people's blood;
Ahalpuh ("Pus Demon") and Ahalgana ("Jaundice Demon"), who cause people's bodies to swell up;
Chamiabac ("Bone Staff") and Chamiaholom ("Skull Staff"), who turn dead bodies into skeletons;
Ahalmez ("Sweepings Demon") and Ahaltocob ("Stabbing Demon"), who hide in the unswept areas of people's houses and stab them to death;
and Xic ("Wing") and Patan ("Packstrap"),

https://en.wikipedia.org/wiki/God_L*/}
          <h4>Otto</h4>
          <Title rank={'normal'} name={'Religious'} effect={'Pick a God to worship'} />
          {/* 
Religious - Pick a God to worship
Blessed - Receive a title from a God, The god pays attention to your actions
Holy Champion - Become a champion of a God, +1 Faith
Noticed by a God - get the notice of a God, (varies) */}

          <p>
            I found myself sitting back in my room holding two coins, all of
            this was getting a bit weird. Although we had not found a coin in
            the cliff side it was surely a burial place as Shrorlei had said,
            does not mean there was not a coin down there just I did not find
            it? This time Shrorlei had lost her life. For a single coin, the
            cost was too high.
          </p>

          <p>
            10 items in total Tisiel and Reingard had come back with. Tisiel
            took a staff with a skull affixed to the top which aided in the
            creation of skeletons. The other items would bring them in more
            money then they could earn working though the academy. These items
            where unique and that made them one of a kind, even if they were not
            the best, combat pieces would still be sort after.
          </p>

          <p>
            I decided to head down to Tisiel and Reingard and see what they had
            learned during this visit. As expected when I knocked they made me
            wait, sounded like they where clearing up in there but seeing them
            run around and pick up their clothes was not something I wanted to
            see. Stepping inside they stood awkwardly. "Sorry if you two where
            getting it on, I only came to ask about what you had translated so
            far."
          </p>

          <p>
            Tisiel - "No no we were ... just come in it's fine, I have so much
            new information to look though, it's a shame the academy will be
            taking over the site and I won't be able to gather anymore first
            hand information but come take a look." She gestured me to come and
            sit as Reingard sat down next to her desk also. Across it was layed
            various books, items and coins.
          </p>

          <p>
            "The various names printed on the table were things they gave
            offerings to, of blood. We believe animals and possibly humans or
            other races but we are unsure for now. The main point is there where
            10 of them and they are kind of demons. I call them this because the
            blood and the references to them being down under so I think this is
            the best translation for now." - Tisiel
          </p>

          <p>"What about the creature drawn above the table, on the roof?"</p>

          <p>
            "It was not one of them. It is possible it was a kind of watching
            eye like the people in the kingdom use, they put them up in shops to
            catch thieves, my parents took me before. In all honesty I am not
            sure what that was of."
          </p>

          <p>
            "I think it was a kind of God, since it was above the demons below."
            I replied.
          </p>

          <p>
            "Well that is a possibility. The people which made up these
            societies where obsessed with death, gods of death, demons of death
            and the practice of necromancy which is perfect for me that they
            died out and left behind everything because what was theirs is now
            mine."
          </p>

          <p>
            "As long as I get stronger I don't mind joining these expeditions.
            Although I cannot say I have a need or interest in necromancy. I am
            sure you will become one of the legends said to raise whole armies
            from the dead." I joked.
          </p>

          <p>
            "Aha, I am happy with just a few cute skeleton helpers here and
            there. I don't plan on becoming a combat mage anyway. You might be
            more interested to know that the coins, while they are magic items
            according to this..." Tisiel flipped though her note book and the
            book from the market to show me her notes. "They are a type of
            single use item."
          </p>

          <p>
            "So I can use them but only once? How do I use the coins? What do
            they do?"
          </p>

          <p>
            "Ah, you place them on your eyes, what to do is vague at best,
            something about their gods maybe demons? I would say beings worthy
            or pray?"
          </p>

          <p>
            "So I am just going to have to try them to find out? Seems like a
            waste, it might be better to sell them."
          </p>

          <p>
            "Yeah, I was thinking the same. I am sorry Otto I thought they would
            be more useful since they were found in important sites I really
            don't understand."
          </p>

          <p>
            "Well I'll keep hold of them, maybe we can shed more light on them
            in the future, it's not like I can sell them for the right price by
            saying I have no idea what they do, and when you use them they will
            be gone forever."
          </p>

          <p>"Yeah...Sorry..."</p>

          <p>
            "No worries, I am going to head back out and leave you two to ..
            studying."
          </p>

          <p>"Later!" - Reingard</p>
          <p>"Come round anytime!" - Tisiel</p>

          <p>
            I left them and headed up topside to the training ground for the
            cliff side, overlooking the academy it was a nice place to come to,
            but today I did have something to practice. I had not told Tisiel
            everything that had happened down in that pyramid or everything I
            knew of the coins.
          </p>

          <p>
            I got down on the floor and started to pray. I was never a religious
            man but I had found faith down in that pyramid. Praying was common
            in Alden, for those that had faith they could be granted spells or
            skills by the ones they pray to. I soon got a reply.
          </p>

          {/* Title Here */}
          <h4>God</h4>

          <p>
            In a deep other worldly voice sounded in my mind. "Hunt the stag."
          </p>

          <p>
            A blinding pain filled my brain as images and information followed
            though. It was not just any stag that would do, an elemental
            creature the thunder stag. Most elemental creatures are rare, hard
            to find and tricky to handle. I imagine such a creature is far
            stronger then myself. I had got my first quest and I knew what I had
            to do, that was a start.
          </p>

          <p>
            To help me along I had been granted 1 faith. I could use this to
            cast a spell of the deities choice and recharge it daily though
            prayer. I opened the menu to see what spell I had been granted, it
            was unlikely the spell could be changed.
          </p>

          <p>
            "Kʼawiil's lightning seeds. Plant the seeds of lighting on a target
            and lightning skills will be amplified."
          </p>

          <p>
            Ekʼ Chuah was not a lightning god, lightning demon or anything of
            the sort. Where in the hell did Ekʼ Chuah get a lightning power from
            and who was Kʼawiil? Too many questions, questions I feel I won't be
            getting the answers to.
          </p>

          {/* <p>God L grans the Power of god K though faith.</p> */}

          {/* Gods of worship require pray for awhile to grant faith based classes and then faith spells, gods of no worship have their attention on one or few individuals and are able to grand faith spells before to increase their following. Often gods fall out of fashion due to religious wars and differences or societal pressure. And you can get faith spells from the new god, maybe there spells suit you better or your society finds more acceptable the requirements such as the hunt or sacrifice will be popular before are not popular now. */}

          {/* Otto talks to God */}
          <p>
            I joined the group on the trip into the jungle to become stronger. I
            had become stronger, but not in the way I had hopped. Praying to
            this new God had left me with a headache but also a new skill. It wa
            a very suitable skill for me, but I have never heard of a God giving
            out skills with another's name.
          </p>

          <p>
            I did not know where to find an elemental stag. No one did. It was a
            mythical creature, emphasis on the myth. Why did I not think about
            that sooner? This quest was impossible! Hmph! I am not sure why, but
            I thought it would be a good idea to pray again, see if I can talk
            to this God, it is not like he has other followers left alive.
          </p>

          <p>
            As expected the prays landed on deaf ears, or none at all. I could
            feel a connection but the connection felt dark, like the other end
            was empty. I sat down on my bed and looked at the roof. Before I
            could even think about anything a gentle dull throbbing pain started
            in my head. I somehow knew a connection had been made.
          </p>

          <p>
            A voice came directly into my head. "Been a long time since anyone
            prayed to me. You must of been the boy I saw at the southern temple.
            I hope the system has been taking good care of you." It was Ekʼ
            Chuah himself.
          </p>

          <p>"System? What system?" I asked confused.</p>

          <p>
            "The voice that gives quests and grants faith in my absence. I have
            been asleep for... I am not sure how long, but the system should
            still be functioning." Ekʼ Chuah replied.
          </p>

          <p>
            "Oh, that voice was a system? It gave me a quest that I cannot do
            even with the spell it gave me to use... Sorry." I said.
          </p>

          <p>
            "Let me see... Oh, that quest. That was the last quest I gave out to
            my previous champion. Since he did not complete it I guess the
            system gave it to you. I'm going to change it myself, hold on." He
            said sounding more awake.
          </p>

          <p>
            "Can I ask about the spell also? Just it has the name of another God
            on it..." I asked unsure how he might respond.
          </p>

          <p>
            ".... I guess the system needs to be turned off for awhile. I need
            to make changes, that was a mistake. Still it's a good spell for
            you, with your lightning element. I must ask, the Pocotcotcos, do
            you know them?" He asked.
          </p>

          <p>
            "There is a country with that name in the west. They use to rule
            here until the witch of Alden and other founding members overthrew
            them, now this academy belongs to Alden." I said.
          </p>

          <p>
            "Curious. My people where called Pocotcotcos and I was their God of
            death." He said, the last word left me wondering if I had made the
            right choice. There was a God of death already in Alden. He was
            despised by most because of the subject of death and the God of life
            being so popular here.
          </p>

          <p>
            "Check your quests now, it's in a tab next to your profile. Just
            bring up your status as normal at the top there should be a thing
            labeled 'Quests'." He said as I was starting to regret my decision.
          </p>

          <p>
            I looked, and sure enough there was a quests tab. My only quest
            inside: [Pray everyday for 1 week. Reward: +1 Faith.] This quest was
            much easier! Also the reward was visible now. Is another faith slot
            not a really good reward? I should ask a priest later, but I thought
            this kind of reward is hard to get.
          </p>

          <p>
            "Normally yes, but you are my only follower. I need you to get
            stronger quickly so I can promote you to a priest or better yet
            prophet to spread worship of me." He said I was thinking to myself.
            "Also you know you are projecting your voice inside your head right?
            It's tricky at first but you'll get the hang of it." I felt kind of
            embarrassed.
          </p>

          <p>
            "Thank you. I guess you must be busy since you just came back? I
            will pray everyday so I am going to bed." I said. "Sleep well." He
            replied and the connection felt like it had gone dark again.
          </p>
          {/* Arena Battle day & Arena day matches other then one of Otto's should be told though a commentator, give it some professional and hype! */}
          <h4>Battle Day</h4>
          <p>That morning I equipped the items had.</p>
          <Equipment
            items={{
              Head: {
                name: "Witches Hat",
                effect: "Magic: +4.",
                rating: "normal",
              },
              Body: {
                name: "Academy Robe (Black/Yellow)",
                effect: "Magic: +2, Lightning +1%, Health +10.",
                rating: "junk",
              },
              Hands: {
                name: "Mutt's Mitt's",
                effect: "Willpower +2.",
                rating: "junk",
              },
              Feet: {
                name: "Bouncy Boots",
                effect:
                  "Absorbs a small amount of energy when struck and releases it to help you bounce!",
                rating: "junk",
              },
              Acc1: {
                name: "Pendent of Medium Magic",
                effect: "Magic +3 , Strength -2.",
                rating: "normal",
              },
              Acc2: {
                name: "Ring of Little Strength",
                effect: "Strength +2",
                rating: "junk",
              },
              Weapon: {
                name: "Warhammer",
                effect: "Strength +2",
                rating: "junk",
              },
              Secondary: {
                name: "Wand (Find Magic)",
                effect: "Skill: Detect Magic 1 per day.",
                rating: "normal",
              },
            }}
          />
          <p>And then check my current stats.</p>
          <Stats
            type={"description"}
            stats={{
              name: "Otto",
              level: 14,
              class: "Mage",
              element: "Lightning",
              faith: "(1/1)",
              spells: 11,
              titles: 3,
              "spell points": 3,
              "stat points": 0,
              vitality: 0,
              strength: 16,
              endurance: 0,
              magic: 25,
              willpower: 3,
              dexterity: 0,
              sense: 1,
              charisma: 3,
            }}
            notes={
              "Strength +2 from equipment, Magic +1 from title, +1 from passive, +9 from equipment. Willpower + 1 from magic resistance skill. charisma +1 from title"
            }
          />

          <p>
            I set off and headed to the arena, I met up with Reingard, Volker
            and Raina there. We would head into the armory below the arena, most
            students by now had their own weapons or had a set weapon they would
            use it was very rare for a student to change their weapon this far
            into the year. I would not be changing mine from my warhammer
            anytime soon.
          </p>

          <p>
            Raina had a two handed staff with patterns of water craved
            throughout, Volker carried a wand with a small shield. Reingard
            however had come with a large metal chain around his neck and a
            large metal shield in his hand.
          </p>

          <p>Otto - "Reingard."</p>
          <p>Reingard - "Otto."</p>
          <p>Otto - "Don't play dumb, what is that?"</p>
          <p>
            Reingard - "Ah, I got this yesterday. I had managed to exchange some
            things for them. This is a metal kite shield imbue.."
          </p>
          <p>Otto - "Not the shield."</p>
          <p>
            Reingard - "Didn't even let me finish. Fine, its a magic chain
            weapon I exchanged for something important I had. I just could not
            resist it matches my element so well. Take a look."
          </p>
          <Item
            stats={{
              Dexterity: "+3",
            }}
            name={"Kusari-fundo (half)"}
            rating={"normal"}
            effect={"Can be extended with mana."}
          />

          <p>
            Otto - "How the hell do you plan to use this thing while holding a
            shield?"
          </p>
          <p>
            Reingard - "Ah well it's only a half length so this is a handle, and
            the other end is weighted not both, think of it like a metal whip,
            because of my element I can exert some level of control over it."
          </p>
          <p>
            Otto - "Alright.. Just don't hit me in the back of the head with
            it."
          </p>
          <p>Reingard - "I promise not to hit you in the back of the head."</p>
          <p>Otto - "Or the front"</p>
          <p>Reingard - "Ot the front."</p>
          <p>
            Otto - "Just, don't hit me anywhere with it! Your words make me
            uneasy!"
          </p>
          <p>Reingard - "Aha, I will not hit you with it."</p>

          <p>
            It was not long before the four of us found ourselves waiting at the
            foot of the entrance way to the arena, I had walked it before but
            that was when the arena was split and both combatants would enter
            though the same gate, it felt different this time. We walked the
            long curved tunnel up to the arena entrance the light at the end of
            the tunnel spread around the mouth of the exit. Blinded, our eyes
            soon adjusted and before us was a metal gate holding us back from
            entering the arena, the opposite team already waiting behind theres.
          </p>

          <p>
            Arena Guard -- "You can move around in your half of the arena before
            the match stats, position how you like, set traps and cast spells
            but if you make a move, spell or anything else to the other half of
            the arena or combatants before the match stats you will be
            disqualified. Good luck."
          </p>

          <p>
            There was a metallic screech and rumble as the bars fell into the
            earth, small holes left behind and we stepped out into the arena. We
            had 20 seconds to get ourselves into position and be ready to fight.
            The floor of the arena had a thin coating of sand not enough to
            effect walking but enough to soak up the blood I guess.
          </p>

          <p>
            The opposing team was also a group of four, more traditional mage
            group with staffs, wands and a dai-furyo (hand fan). Reingard was
            stood in front of me a little to my left and Volker in front of
            Raina to our left. The match started with the sounding of a large
            bell, I opened with a wall of lightning wall in front of Volker's
            opponents, turning my attention to Reingard who had thrown his chain
            while keeping his shield up trying to strike a mage with a wand in
            the back, when they moved Reingard adjusted the path with his mana
            and stuck him in the stomach, the mage keeled over but was not out.
          </p>

          <p>
            The mage in front of us with a staff slammed it to the ground in
            response broken earth and soil where flung at Reingard's eyes. I put
            on my lightning cloak spell and 'Charged Charge' into the staff
            wielding mage. I swung my warhammer high and he moved his staff high
            colliding together in a test of strength he lost badly (-17%
            health). Testing out my new faith spell I threw my left hand open
            and the seeds materialized and landed on him, clinging to him like
            barbed plants.
          </p>

          <p>
            In return the wand mage stuck me with a lighting manaball, the earth
            mage followed up with an infused manaball of his own but I activated
            my boots and bounced behind Reingard who tanked the blast with his
            shield. As we moved forward my hand on his shoulder his shield up, I
            took the time to see how Volker and Raina where holding up. The
            arena near them had the air filled with flames and the ground
            covered in water, as the fan mage blew back the flames with his wind
            magic the other wand mage blew across the tip of his wand as a black
            cloud of smoke bellowed from the end and glided across the arena.
          </p>

          <p>
            As we moved in range of these two mages Reingard charged into the
            lightning mage, I bounced out from behind him and struck the earth
            mage with chain-lightning. The seeds activated doing their job, a
            full 28% of his health disappeared and the bolt flew off to meet his
            friend. The earth mage was hanging just above 50% hp at this point,
            I was sure I could take him alone but was not confident I would
            leave the fight with the ability to help the others. I dashed back
            to see Reingard managing to hold off the lighting mage with ease but
            unable to inflict any serious damage, he would be okay if I left him
            with both mages for awhile out left flank is falling back.
          </p>

          <p>
            The wand mages poison gasses had been burned up by Volker where he
            could but they where not looking the healthiest right now. The air
            mage used his large fan to move the poison clouds about and beat
            back the fire Volker had sent their way. Raina's water magic was
            great for healing but could not inflict any damage on her opponent's
            and like this they had been gaining the upper hand.
          </p>

          <p>
            I bolted my way across the arena and activated 'Charged Charge', at
            almost 300 mana to start with I had dropped to about 80% remaining.
            The wind mage blow a gust my way but I did not stop, and collided
            with the poison mage, the lighting cloak flew off me and ran into
            him like a bolt as my warhammer met the side of his head. His body
            disappeared from the arena, the judges must of thought this a lethal
            blow. One down.
          </p>

          <p>
            The wind mage backed up by pushing the wind in front of him and
            using it to glide backwards 1 meter, he was out of my range at over
            1 meter since I could not charge with magic again so soon. "Help
            Reingard" I shouted to the others, I heard them run off away from me
            as I tried to corner the wind mage.
          </p>

          <p>
            I ran straight for him trying to finish him off also when I was hit
            with a wind infused manaball, the blow had come so quick I did not
            register it at first (-43%). I could not allow him to keep that up,
            I stuck with lightning strike (-57%), he had high magic defences it
            seems. I sprinted into him with my warhammer striking his chest, his
            body soon disappeared from the arena as I felt a huge pressure above
            me push me down and a sucking woosh, next thing I saw was the arena
            underground where I had come in, standing next to an small water
            fountain at the base of the entrance tunnel to the area. I must of
            reached my last 10 hp, guess he still had enough mp left to use
            strike also.
          </p>

          {/* mana drain is power of spell * 10?  */}

          {/* lightning cloak, shocking touch, chain lighting, 'Charged Charge' and wall of lightning.
Mana ball (lightning) (Pow: 1), Tether, Magic resistance (passive), Magic up (passive), Strike (lightning) (Pow: 2),  Magic regen (passive) */}

          <p>
            Soon enough my team mates came back down the tunnel, walking, they
            had won the rest of the match with Raina's healing waters they were
            able to grind though the rest of their health.
          </p>

          <p>Otto - "Welcome back!"</p>
          <p>
            Reingard - "Perhaps next time you could join us in walking back
            down."
          </p>
          <p>Otto - "I'll work on it."</p>

          <p>
            The was the end of our first match, we would not have to participate
            again until the next drawings in a week, with that in mind I took
            some time to watch some of the other matches.
          </p>

          <h4>Spectator - POV commentator</h4>
          {/* Oblivion easter egg / arena dialogue */}
          <p>"Welcome, welcome, to the Arena!"</p>
          <p>
            We have two teams for you today, on the right the green team, and on
            the left the red team!
          </p>
          <p>
            "You came to watch a fight, and a fight you shall have! It's a
            second year student team showdown in a battle to determine the
            victor! Lower the gates!"
          </p>
          <p>
            The green team is made up of all fire-mages, perhaps they should of
            been the red team! The red team is a mixed group of water, ice, wind
            and light! This should be quite the showdown!
          </p>
          <p>
            A heated start, the green team had throw fireballs, waves of flames
            and wisps all across the field! Red team rebutted with waterballs,
            ice walls, and a large gust of wind subduing the raging flames! A
            light has filled the arena shining in the eyes of the green team!
            What a start!
          </p>
          <p>
            Green team are putting on the pressure again, fireballs and
            flamethrowers trying to group up the red team, the ice spears and
            water walls only doing so much to hold them back, light magic while
            powerful in areas is really struggling to hold back the flames it
            might be we have our first out.
          </p>
          <p>
            What is this! Green team's team captain is summoning a fire
            elemental! This could be a game changer! Red team where already
            launching a plan of their own! Red teams wind mage has launched
            herself into the air!
          </p>
          <p>
            Now she is airborne her wind infused manaballs are raining down on
            the summoning mage with no defense to be found! This explains the
            green teams aggressive start they where doing it to protect their
            captain!
          </p>
          <p>
            With their plan just a distant memory the green team are breaking
            down, some are shooting fireballs up others still trying to apply
            pressure, but with the split red team are making short work of green
            team.
          </p>
          <p>
            "My friends, we have a winner! Behold, the combatants from the red
            Team! If you bet on the red Team, see the merchants to collect your
            winnings!"
          </p>
        </div>
      </div>
    </div>
  );
}
export default Intro;
