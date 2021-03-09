import React from "react";
import Kʼawiil from "./Kʼawiil";
function intro(props) {
  return (
    <div className="Monad" id="3">
      <div className="Frame">
        <div className="Content">
          <h3>Survival</h3>
          <p>
            We started our date by telling each other about what had happened
            today. I left nothing out, I really did trust her with everything I
            could. I told her about the fight I got into, what the teachers all
            kept saying about things going to change, even the place Ralsan took
            me and my spells. She told me about the princess having to go
            hunting with Vasso of house Elzach. Vasso had all the girls after
            him, the son of a duke, the only duke in Alden to posses high
            magical talent and a unique lightning power at that.
          </p>
          <p>
            It seemed that Tsuma though the man was an insufferable, arrogant
            fool who wanted to attract the princess. It came as no surprise to
            me, who else would Vasso take a liking to, who else was of such a
            high birth and would have something in common like magic in Alden?
            It seemed though that even Vasso was punching above his weight.
            Vasso's family might be the co-head of magic in Alden and a Duke,
            but Alden voted for their rulers from the dukes and was therefore
            not next in line for the throne. While the princess was next in line
            for the throne of Leika.
          </p>
          <p>
            It made sense though, if he could secure that marriage it would
            almost be foolish to not elect house Elzach to the throne and use
            that alliance to secure the southern border with Huonhia. The
            kingdom might not like the new alliance but Alden would have more
            breaking room to stand up to them. However from what Tsuma was
            saying the princess would sooner burn all and any relations with
            Alden then share tea with the boy.
          </p>
          <p>Not really my problem.</p>
          <p>
            She had brought me to a training hall behind the manor. It was for
            the princesses guards, herself and attendants to use so they did not
            have to mix with the students. I guess it made sense, it would be
            awkward to have high level body guards of a foreign country training
            right next to future members of our army.
          </p>
          <p>
            The hall was mostly empty inside. A few wooden poles on the ground,
            seemingly left out by the previous person and a broom in the corner
            to clean the place with. The floor was kind of spongy and it looked
            like a soft plant weaved and threaded into its self.
          </p>
          <p>
            "So how much do you know about the stats themselves?" She asked me
            while I was saying I had points left over and unsure what to use
            them for.
          </p>
          <p>
            "Vitality gives you more health, strength more physical damage,
            magic more.." I was saying when she cut me off.
          </p>
          <p>
            "Yes yes, everyone knows the basic attributes, I was asking if you
            knew the lesser attributes. Like Vitality increases you health but
            also your health recovery, resistance to poisons. The kind of
            thing." She asked again.
          </p>
          <p>
            "Ah I am sure I read about it somewhere but they are just minor
            increases." I said thinking back I did not remember much of what was
            taught in the village, I should re-read the introduction course.
          </p>
          <p>
            "Hmm maybe I can give you some pointers? Is it okay?" She asked.
          </p>
          <p>
            "Ah please, you are really smart so I think it would help." I
            replied.
          </p>
          <p>
            She blushed and walked over to what looked like a blank wall, but
            she pulled down the wall between the wooden beams. Turns out the
            walls were also made of the plant like material and inside was a
            book storage. She picked out one of the books and brought it back
            leaving the wall on the floor.
          </p>
          <p></p>
          <div className="ProfileCard-Outer">
            <div className="ProfileCard">
              <div className="Card-Middle"></div>
              <div className="Card-Content">
                <div className="Card-Left">
                  <h3 className="Card-Font" id="CardTitle">
                    Vitality
                  </h3>
                  <h4 className="Card-Font">Major:</h4>
                  <p className="Card-Font">Increased health points.</p>
                  <h4 className="Card-Font">Minor:</h4>
                  <p className="Card-Font"> Increased resistance to hot.</p>
                  <p className="Card-Font"> Increased resistance to cold.</p>
                  <p className="Card-Font">
                    {" "}
                    Increased resistance to natural poisons.
                  </p>
                  <p className="Card-Font"> Increased health regeneration.</p>
                  <p className="Card-Font"> Increased stamina regeneration.</p>
                  <p className="Card-Font"> Increased stamina total.</p>
                </div>
                <div
                  className="Card-Right"
                  onClick={() => {
                    console.log("Clicked");
                  }}
                >
                  <h3 className="Card-Font" id="CardTitle">
                    Strength
                  </h3>
                  <h4 className="Card-Font">Major:</h4>
                  <p className="Card-Font">Increased physical damage.</p>
                  <h4 className="Card-Font">Minor:</h4>
                  <p className="Card-Font"> Increased storage capacity.</p>
                  <p className="Card-Font">
                    {" "}
                    Reduce damage taken during a successful block.
                  </p>
                  <p className="Card-Font"> Increased resistance to falling.</p>
                  <p className="Card-Font"> Increased movement speed.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 
<li>Vitality/endurance</li> Hit points, Resistances to hot/cold / poison
<li>Strength</li> Physical Damage, 
<li>Magic</li> Increases Magic damage, Mana
<li>Dexterity (Reflexes)</li> Increases cool down of skills, casting of skills, dodge change, 

<li>Sense</li> Trap Detect (All of the senses, hearing, taste, touch, smell.) Seeing though smoke screens and illusions. Seeing weakness and injuries in your opponent
<li>Charisma/personality</li> Increases NPC likability, command points,  

<li>Magic Defence</li> Increases resistance to magic, reduces magic damage taken (%)
<li>Defence</li> Increases resistance to physical damage, reduces physical damage taken (%)
*/}
          <div className="BreakPoint"></div>
          <p>
            After reading though the book there was some obvious differences
            from the books used in Alden. The stats were called attributes and
            split into catagories of minor and major. Major being Vitality,
            strength, Magic, Dexterity, Sense & Charisma. Where Magic defence
            and defence were donated as minor. Within each was also Major
            effects and Minor effects, such as sense said to be helpful in
            detecting traps. However in the minor section it listed things like
            being able to see more clearly though smoke screens, help with
            blocking chance and seeing weakness in your opponent.
          </p>
          <p>
            This was mind blowing. I thought all countries had the same
            understanding of stats as Alden did. Did Leika know more then we did
            or was it just a different view of the same topics? And more
            importantly there was importance placed on Charisma and Sense was
            higher in the Leikan teachings while in Aldenese these were seen as
            minor even noncombat like stats.
          </p>
          <p>
            "Why is there so little importance on the role of defence in this
            book? Is this just how Leikans view the stats?" I asked hoping to
            clear up some of my confusion.
          </p>
          <p>
            "I was confused too when I first saw how things were taught here in
            Alden. For this trip I was shown some of the teaching materials used
            in Alden but I only briefly viewed them. The main difference is the
            layout and importance of the attributes or stats. The difference in
            views has lead to different stat distributions between out people. I
            think this is why Alden is famous for heavy close combat infantry. A
            stronger focus on defence and magic defence then we have." She said
            confirming some of my first thoughts.
          </p>
          <p>
            "Leika is famous for archers and nature magic right? I did some
            reading while I have been staying here." I said hoping she would be
            impressed.
          </p>
          <p>
            "Yeah! We have a few strong individuals but the majority of our
            people work as one unit. Even if we are weak alone we are strong
            together. Alden has a more each individual must be strong for us all
            to be strong kind of outlook." She replied.
          </p>
          <p>
            "I wonder which side would do better in a fight?" I said kind of
            curious.
          </p>
          <p>
            "Well, honestly, there have been no major wars between us. We share
            a small border but the major road from Alden to Leika is though
            Huonhia." She replied. Maybe she was less interested in the
            possibility and thought about the past.
          </p>
          <p>
            "Well anyway. Why did you bring me in here? Are we not going out
            this time?" I asked.
          </p>
          <p>
            "Ah, erm I don't know how to say this but. You know the teachers
            kept saying things are going to change soon?" She said.
          </p>
          <p>"Yeah?" I answered.</p>
          <p>
            "Well the princess is going to be called back to Leika also. I
            should not really be telling you this but I want to give you what I
            can... Alden is preparing for war." She said.
          </p>
          <p>
            "Nothing new then. We fight the kingdom over the dwarven lands every
            few years." I said confused.
          </p>
          <p>
            "No, I mean a northern war. We are moving back to Leika because of
            the dangers. Alden feels like it can break though the republic and
            claim back the lands it lost in the past and things will be over
            quickly. Leika feels like they are overestimating themselves a
            little. So for the princesses safety she is being called back...
            That means I have to leave also..." She said gently breaking the
            news.
          </p>
          <p>"Can't I just come with you guys?" I said with a smile.</p>
          <p>
            "Your family is here, your friends and you have not even graduated
            yet.." She said.
          </p>
          <p>"Still... I want to stay with you." I replied.</p>
          <p>
            We sat in silence for a moment. She held my hand and said "I want to
            stay with you too. That is why I am going to do what I can to
            prepare you. So you can come back to me alive." She said smiling but
            tears appearing in her eyes.
          </p>
          <p>
            I could not hold back. I moved over and hugged her as she spoke.
            "The academy is being asked to host a tournament to help weed out
            the weak. A representative from each class will be picked to fight
            in the tournament, the last surviver wins their class rewards while
            the others will be punished."
          </p>
          <p>
            "What? They are going to purposely kill students? What the hell are
            they thinking!" It never occurred to me what she was saying could be
            a lie. If it was Tsuma it was the truth.
          </p>
          <p>
            "Well this kind of thing has happened in Leika in the past. I think
            that is were they got the idea from and are using it as a kind of
            experiment on the students to see the effects. Even if you are not
            picked from your class, war is coming to Alden. You need to be
            ready. Level 6 really is not enough." She said.
          </p>
          <p>
            "They won't pick me, the class would want to win and know I won't be
            a good choice." I said trying to calm her down.
          </p>
          <p>
            "They would pick you if they think they will not win easily. If they
            do not like you... It is your life or one of theirs.. That is why
            what you said today worries me." She replied.
          </p>
          <p>
            "Right now I am going to help you pick which stat points to focus
            on, then I am going to re-introduce you to Takeo. You met him
            before, he helped you come back from the tomb you went to last time.
            He is going to help you level up." She said.
          </p>
          <p>
            And that was how things played out. We ended up agreeing to put stat
            points into Charisma, it was better to have others fight for me then
            risking myself since I had the seed soldiers. She wanted me to put
            points into sense also so that I would be able to sense danger,
            traps and other things that could put me at risk but we ended up
            agreeing to put the rest of the points into dexterity.
          </p>
          <p>
            Takeo came in while we were talking and had dark black lines around
            his eyes. "Don't worry he is not tired. He is a rouge, one of his
            skills gives him these dark circles around his eyes to help reduce
            glare and make it easier to hit things." Tsuma said after seeing me
            look at his face too long.
          </p>
          <p>
            "I have to go back it is getting late." She said standing and
            bowing.
          </p>
          <p>
            "Wait, I should also be going back it is nice to see you again Takeo
            but I still have classes tomorrow." I said.
          </p>
          <p>
            "We are telling the academy you are sick and we are taking care of
            you. Your teacher can use that as an excuse to let you go unpunished
            for now. We might be pushing our welcome a little but we are leaving
            soon so they won't make a fuss over something so small." Takeo
            interrupted.
          </p>
          <p>
            Tsuma shot him some kind of look and he added "Nice to see you again
            too." He looked at the roof unwilling to meet her eyes it seems.
          </p>
          <p>
            "Takeo here will be taking you out tonight. To help you level and
            you will not return for awhile. I am sorry I did not give you much
            warning." She said.
          </p>
          <p>
            "Err... I guess it is fine if the academy is not going to punish me
            for anything, I do need to level right now. So thank you all.
            Really." I said as Tsuma made her exit.
          </p>
          <p>
            "As you know there is no way to help someone level directly. I
            cannot kill the creatures for you. However I can let you challenge
            creatures you would not be confident to fight or take you places you
            cannot normally get to and keep you safer then you would be. That
            way you can push yourself to level faster. It's a method for rich
            people who can afford to hire someone like me." Takeo said a little
            proud of himself.
          </p>
          <p>"Hey I am not rich... How much did she pay you?" I asked.</p>
          <p>
            "Nothing." He replied far to quickly. "The princess does not need
            level right now. Since I am less busy I can at least do this much."
          </p>
          <p>
            Clearly there was more to it. No way a high level working for a
            princess of another country would be willing to help me level up
            like this. Tsuma must of asked the princess for a favour or
            something. "When do we start?" I asked.
          </p>
          <p>
            "Now. If you can tell me what kind of creatures you want to fight."
            He replied with a smile.
          </p>
          <p>
            "Plants. Any plant monsters would suit me best. Do you know
            anywhere?" I asked.
          </p>
          <p>
            "Yeah. I spend all my days off exploring this place for things to
            bring back. Did not think it would be plant monsters but if you say
            so." He replied.
          </p>
          <div className="BreakPoint"></div>
          <p>
            He did as he said he would, sneaking me out of the academy and
            taking me deep into the jungle. I thought they would search him as
            he made his way out of the gate with a large barrel strapped to his
            back but he just said "I want to take alcohol with me this time" and
            laughed when the guards asked what he was doing. He must come out
            often and the guards must know he is a high level to not want to
            offend him by searching him.
          </p>
          <p>
            We had gone near the pyramid shaped tomb to a part of the jungle
            that was rich with plant monsters. The experience for killing a
            monster would only go to me as long as Takeo did not hit the monster
            or use any skills. It was a real eye opener to see how the rich
            would level so quickly. Takeo had clearly done this a lot and ran
            though the jungle easily. He would run up to a monster and then run
            right back to me when it gave chase. I wonder what level his
            dexterity and strength is to be able to dodge so deftly and run so
            quick.
          </p>
          {/* Because the last civ died there and it was taken back by the jungle, plants first. */}
          <p>
            Thanks to my added points into dexterity I was not as useless in
            rough terrain as I had been in the past. One of the minor perks of
            dexterity was easier movement in different terrains and elevations.
            Once I saw the plant monster I would cast lighting seeds and seed
            soldier until the soldier died and then harvest the plant monster
            and hope it died.
          </p>
          <p>
            We started by just using harvest but when the monster did not die
            out right Takeo would have to kill the monster wasting the effort so
            this method worked better. Plus when the monster died I would
            usually get it's seeds giving me the ability to make soldiers out of
            the same type of monster.
          </p>
          <p className="stats">
            <li>Name: Otto.</li>
            <li>Level: 10.</li>
            <li>Class: Kʼawiil.</li>
            <li>Spells: 5.</li>
            <li>Titles: 5.</li>
            <li>Spell points: 5.</li>
            {/* 1 Per level */}
            <li>Stat points: 0.</li>
            {/* 4 per level */}
            <li>Stats:</li>
            <li>Strength: 1</li>
            {/* Title 1 */}
            <li>Vitality: 10</li>
            <li>Defence: 0</li>
            <li>Magic: 11</li>
            {/* Title 1 */}
            <li>Magic Defence: 1</li>
            {/* Title 1 */}
            <li>Dexterity: 10</li>
            <li>Sense: 1</li>
            {/* Human 1 */}
            <li>Charisma: 13</li>
            {/* Human 2, level 10: 1, */}
            {/* Titles: 
            Back to School - +1 Magic
            Found Unique class + 1 Mdef 
            Found Unique Item - (Mask) +1 Str
            Reach level 10 + 1 Char
            'Novice Harvester'
            */}
          </p>
          <p>
            The new title I gained was 'Novice Harvester', it increased my
            harvesting skills by 10%. The other was reach level 10 again.
          </p>
          <p>
            When I reached level 10 as a mage I was given the option of picking
            my element. Although the system gave strong recommendations in the
            selection process this time nothing happened, then again I was no
            longer a mage and I already had an element.
          </p>
          <p>
            The big upside though, the spell cap was raise to 2. I asked Takeo
            about it and he explained normally when students with basic classes
            or classes given to them by families when they reach level 10 their
            skill cap would increase from 1 to 2, however there seemed to be
            some kind of help required. Normally the academy would of helped
            students for free who had reached over level 10, so he just put it
            down to me being in the cliffside that they never got around to
            helping me. He never grew up in Alden so I suppose it was unfair to
            ask him really, I would just have to ask Lubin.
          </p>
          <p>
            I was so glad that I had saved my spell points, with things going so
            well hunting plant monsters I never really needed an attack spell.
            Now I have the difficult choice, with the spell level cap increased
            do I level up my current spells to level 2, or do I gain more level
            1 spells? Some spells worked great at level 1 and increasing their
            level gave very little gain. Other spells were useless until
            reaching a high enough level. It was a real shot in the dark if it
            was going to be worth it or not without the history of your class
            and what the spells can do.
          </p>
          <p>
            "This method is really quick, how come all the rich kids are not
            super high levels? It has only been a few days and I gained 4
            levels!" I asked Takeo.
          </p>
          <p>
            "What!? obviously because not every kid is a freak like you. These
            plant monsters a tough. Well I mean for a low level, but you have
            been ripping though them like paper. You are unnatural." He replied
            poking at some chicken over a fire. At least It looked like
            chicken.. It could just be some monster he found.
          </p>
          <p>
            He was like this. Ever since we started hunting plant monsters he
            kept joking about my ridiculous speed. All I could do was keep
            telling him I had a spell that focused on plants. He cursed a lot
            but had also explained that there are some rare skills that have
            such a narrow focus that the effect is really great. However this
            effect and all plants was too much, claiming it is likely leveling
            up the skill will have little effect and not scale well when I level
            up. He made a lot of sense but on the other hand he had no idea that
            my class was not a normal type, it was not even a rare type but
            unique.
          </p>
          <p>
            "Are we going to spend this week here also?" I asked hoping to level
            up even more!
          </p>
          <p>
            "No. How sick can you pretend to be before the academy comes to
            check on you? We have to take you back to attend classes for awhile.
            We will come out again though before the event if you are chosen for
            your class." He ate for awhile before adding "The class was told
            about the event the day after we left the academy. When you go back
            it should be the nomination day, after that we can decide what is
            best to do."
          </p>
          <p>
            I nodded and felt kind of bad. I had only been able to achieve this
            result with his help and I was asking for more with nothing I could
            give back in return. I had handed over the wood element armor from
            the tomb which Tsuma claimed to be worth the nations attention,
            maybe that is why the princess had been so willing to help me her
            attendants ... Date? Close friend? I never did clarify with her I
            just assumed we were dating ... I should of asked her out
            officially! What a moron!
          </p>
          <p>
            During my personal break down Takeo interrupted me. "We will head
            back tonight, you need to be in the class tomorrow morning. Although
            you have been 'sick' it is best we let you get some sleep so you
            don't still look sick." He laughed.
          </p>
          <p>
            Not sure I got his sense of humor but he was a nice guy. He got me
            into the academy though the same gate we left. This time by hiding
            me inside of a blanket he made from a monster that looked similar to
            a bear. He carried me in saying he had just killed it and skinned
            it. I am more surprised his half baked plans actually worked. Maybe
            the guards thought no one would be smuggling students in and out in
            such a weird way.
          </p>
          <p>
            Despite the protests I decided to spend my spells points tonight.
            Who knows what kind of welcome I would get back on my return and it
            was best to be prepared. Lightning seeds was a no brainier, even if
            the damage output was low it regenerated my mana which means that
            any spells I pick up in the future will benefit from it and lowers
            the risk I will run out of mana in a fight.
          </p>
          <p>
            'Lightning seeds (2) - Shoots a group of [2] seed(s) in a spread
            from the user. The seeds attach to opponent(s) and cause lightning
            damage over time. A part of the damage is used to restore your as
            mana.'
          </p>
          <p>
            Next up with 'Seeds to Solders (2)': Take [2] seed(s), use energy to
            give life to [2] soldier(s). The discretion had changed, but it
            required 2 seeds to make 2 solders? Was this not just the same as
            casting the spell twice!?
          </p>
          <p>
            With that I stopped looking to upgrade my current spells. I was not
            sure about the farming related spells as it was. Yes harvest worked
            great against plant monsters, but as Takeo said it was likely the
            upgrade would be poor because of how specific it was. As for
            germination and growth, I need to find out more about them before I
            risk using the points again.
          </p>
          <p>
            I had discovered that the growth spell could be used by making
            contact with the target directly but that would sap as much mana
            from me as it needed to complete it's growth, while forming the mana
            into my palm like I did with the lighting seeds spell then sending
            that mana into the target would only use up the amount of mana I had
            gathered instead. Still if the mana was not enough it meant the the
            growth would not be complete to its max.
          </p>
          {/* <p>Lightning germination: Stimulate a target into germinating.</p> */}
          {/* During germination, repair processes are activated to deal with accumulated DNA damage. - Kind of heal & Quality */}
          {/* <p>Lightning growth: Force the target to grow.</p> */}
          {/* Increases quality of plant & stats given - buff spell */}
          {/* <p>Lightning harvest: Harvest the target.</p> */}
          {/* Quality of harvested materials */}
          <p>
            That left me with 3 spell points left and I could look though the
            basic spells available still. It would have to wait until level 30
            before any intermediate spells showed. When I was a lightning mage I
            could just pick up the histories of lightning mages to see which
            spells lead to unlocking other spells in the future. This time I
            could only see some of the basic spells and had no idea if following
            these basic spells would unlock any intermediate spells at all let
            alone which spells they might be!
          </p>
          <p>
            I had narrowed it down to just a few spells that looked interesting
            to me.
          </p>
          {Kʼawiil()}
          <p>
            The whole thing was so frustrating. In the histories of mages, some
            mages claimed after certain events they were able to see more spells
            even if they had not unlocked them. However like unlocking different
            classes, unlocking different spells required different events. So I
            had no idea were to start.
          </p>
          <p>
            Kʼawiil-Burst & Kʼawiil-Bolt looked similar to Lightning-Burst &
            Lightning-Bolt from the lighting mage spells. Even the basic
            descriptions were the same. However I had doubts that they acted the
            same otherwise why would there be a need to rename the skills?
          </p>
          <p>
            After reading though most of the spells it became clear there were 3
            trees of spells. Farming, Lightning and serpents. As well as a mix
            between each of them, such as lightning seeds being a mix between
            lighting and seeds. It got me thinking about Kʼawiil's identity.
            There were serpent type races in the kingdom, it is said they are
            similar to humans but more snake like features. Perhaps Kʼawiil was
            once one of theirs? A lighting mage who used his powers to harvest
            food? No that seems off somehow. Maybe there will be something in
            the library if I try the kingdoms history or mythologies.
          </p>
          <p>For now though which spells to pick up?</p>
          <p>
            I had just invested heavily into charisma so I picked up
            'Scarecrow', which would turn the plant matter into scarecrows under
            my command. I did not want to level them up to two without testing
            them out first. As much as I wanted the other spells, they even
            seemed better on the surface I had to pick burst and bolt because
            otherwise I would not be able to join in the normal combat classes.
          </p>
          <p>
            Let's just hope they are useful in the future also. With that I went
            sleep.
          </p>
        </div>
      </div>
    </div>
  );
}
export default intro;

// Survival game, eat and hide
// Dark spots under the eyes reduce glare adn increase accuracy (Cheetah)
// Which witch is which?
// Blood tax, one child from 40 house holds. (Ottomans)
// empire emperor dies and the mother fights back against the sons reforms, the reforms chose one religion and code of ethics to rule by instating new schools and imperial examinations, the court fight back and the new emperor puts his pawns in low level positions though-out the court so he can control it in secret when his mother dies he pacifies the lower realms
// during the war monsters get past and kill villagers from Otto's village his parents included and the blame is placed on otto and his forces but in was in fact the young lords
// auto hunt class
// maps show continent in real time
// human in step perk 1.1x to stats with lover/opposite gender when together
// leaf taken human form to get revenge on the one who plucked it
// alden invades the republic east and west forms confederation, alden and empire war over Dwarves lands
// the emperor is really the empress
// elf's use to be pirate like and split into factions
// the old world spreads disease to the new and in return the L god sends back syphilis, new world has more flying troops abilities and items they are a rarity in the new worlds
// high level rouges in mayan and aztec lands, high level spirits passed by old houses and the poor have to fight for the scraps
// desert religion with a quest to listen to the whole sermon posted by a troll
// Killing of the God causes the faithful to lose their powers and cough up blood
// The killing of the german god causes Effi to lose her powers and has to fight to restore her faith
// The killing is because of Otto, Effi never finds out
// Tisiel and Reingard and otto go into the tomb and tisiel lets Reingard die so she can acquire the lich legacy and the others that follow in die in various ways the final being used as Otto's sacrifice
// Otto gains the new class in the dungeon from the god he follows and sets out on a path to kill his own god
// Tsuma reveals she is powerful and the princess of the other land when Otto is trapped with no way out, his country betraying him
// Tsuma takes an interest in german witch magic that was her real reason for comings
// the mask is the legacy of the deer god of lightning, the lightning god class is given to otto also, the quest is set out to acquire the god race.
// Tsuma was on a quest to learn the german magic and to acquire a new class by combining the class of her lands with the new one.
