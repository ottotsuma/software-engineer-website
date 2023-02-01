import React from "react";
import Equipment from "./../elements/equipment";
import { Content } from "./styles";
import { ItemList } from "../elements/item";

function Intro(props) {
  return (
    <Content>
      <div className="Frame">
        <div className="Content">
          <h4>Farming</h4>
          <p>
            I had new spells, I still needed to level up some more but I had
            more points to spend then before. I could make up for the difference
            in attribute points with items or titles. Right now I am missing even a
            weapon.
          </p>
          {/* https://www.sacred-texts.com/cfu/mlc/mlc10.htm - obscure fire god from china */}
          <Equipment
        items={{
          Head: ItemList["Heavenly White Stag Mask"],
          Body: ItemList["Academy Robe (Black/Yellow)"],
        }}
          />
          {/* <li>
              Body:<font color="blue"> Hui Lu's Battle Armour</font> ???
            </li>
            <li>
              Hands:<font color="blue"> Hui Lu's Enchanting Gloves</font> ???
            </li>
            <li>
              Feet:<font color="blue"> Hui Lu's Burning Boots</font> ???
            </li>
            <li>
              Weapon:<font color="blue"> </font>
            </li> */}
          <p>
            My robe even gave less magic now my level was lower. The mask is not
            something I could wear all the time, I guess there was no harm in
            wearing it but it was no inconspicuous at all.
          </p>
          <p>
            The accessories I picked up in the tomb, apart from the storage ring
            there had been nothing else useful. I would need boots & gloves
            also. If I went into a fight with normal boots they would just melt.
          </p>
          <p>
            With these spells through, I guess I should go show Ralsan the
            farming spells and see if they are useful. I walked back through the
            fields scaring off the crows more then anything else. They were
            smart and knew to avoid me by a large margin now. I arrived back at
            the warehouse to see Ralsan having an energetic conversation with a
            woman in the distance, his arms flying all over the place as he
            spoke. When I got close enough the conversation seemed to of ended
            and Ralsan spotted me, he walked over waving to me. "Hey, is
            everything okay? You came back early today." He said with a big
            smile on his face.
          </p>
          <p>
            "Yeah I am great, I just came back to show you the farming spells I
            unlocked they seemed pretty useful but I wanted you to be the judge
            of that." I said then added "Are you alright? I did not hear
            anything but you seemed to be having a high energy talk with her."
          </p>
          <p>
            "Ah sorry you had to see that, the academy is cutting our funding
            again. They want to spend more of the resources and students to
            explore tombs. Don't worry they won't ask you to go back into the
            tombs, just the other mages who joined the club." He said a little
            frustrated, it cannot of been easy for him to get mages to join this
            club in the first place. "So show me these new spells you told me
            about, we have had lightning mages join the club in the past I was
            told but I have not seen any lightning spells used for farming
            myself." That made me worry a little inside.
          </p>
          <p>
            We walked off into a nearby patch of dark earth. It was only the
            length and width of Ralsan and myself laying head to toe. "Hey
            Ralsan, erm maybe just keep these spells between us if you can? I
            don't want anyone else finding out..." I was hoping he would
            understand.
          </p>
          <p>
            He turned to me and with his usual smile "Sure thing, after all you
            still want to join the military right? It's okay to keep them at
            level one, this is just a club after all." That put my heart at
            rest, he misunderstood but it would work all the same. "Thank you."
            I replied.
          </p>
          <p>
            "So show me what you are keeping so secret." He said with a wink. I
            held out a seed I had taken from the field and cast 'Lightning
            Germination' on it while it was in my hand. The seed split and a
            shoot popped out. I stood there hoping he would know more about this
            then me.
          </p>
          <p>
            "Did you just germinate the seed instantly? What the hell man!?" He
            had lost his usual smile for an open jaw.
          </p>
          <p>"What? Is this unusual?" I asked panicking inside again.</p>
          <p>
            "Yeah, a little." He picked up the seed from my hand. "Fire mages
            usually do this kind of work, it takes them a few hours which is
            much faster then the 3 to 5 days normally." He said looking closely
            at the seed, pulling out a kind of one eyed glass.
          </p>
          <p>
            "A few hours? For one seed!?" I guess 'Lightning Germination'
            refereed to the speed as well as the element.
          </p>
          <p>
            "No, hundreds usually they do them in batches. The quality is okay
            considering the speed through. How many can you do at once? What is
            the description of the spell? What's the efficiency or fail rate?" He
            asked putting on a kind of business face.
          </p>
          <p>
            I saw no reason to hide it from him so I shared the description.
            "Lightning germination: Stimulate a target into germinating. I tried
            before but it seems to be one seed at once..."
          </p>
          <p>
            His eye brow just twitched. "I guess if you could do that to
            hundreds of seeds at once we would never use fire mages again." He
            said a little broken. "Still, no fail rate? That's all it says?
            'Target' not seed? Sure is a strange one." He said his face becoming
            puzzled.
          </p>
          <p>
            "Yeah I have two more spells also if this one is not useful..." I
            said worried that just one seed at once was not impressive.
          </p>
          <p>
            "Oh you do? Show me them also. The spell is great just.. we can't
            have you doing that to hundreds of seeds, the mana consumption would
            be one thing but the boredom another" He laughed. "It's more like
            this skill was designed to work on hard to germinate seeds. Like
            seeds that normally fail." He said.
          </p>
          <p>
            "Ah I don't know anything about this. Let me show you the other
            skills first." I cast 'Lightning Growth' on the seed and it grew on
            the palm of my hand. I shared the description also and let him take
            a look at the plant again.
          </p>
          <p>
            "Just like that? No soil, water, food. And it's fully grown." He
            just shock his head as he inspected the plant.
          </p>
          <p>
            "Last one." I said as I cast 'Lightning Harvest' and the plant fell
            apart as he was looking at it. I pulled out the plant from my
            inventory. "What's left in my palm is leftovers I guess, and this is
            the useful part of the plant." I said handed them both to him.
          </p>
          <p>
            He looked at both parts for awhile, inspecting them with his little
            eye glass before saying. "Freaky. I can see why we only had a few
            lightning mages in the past. I mean the spells are great but not for
            mass production. Great for research through..." He said smiling
            again. "And lucky for you that is what the academy and this club is
            for."
          </p>
          <p>
            Near the warehouse there was a small building in all these weeks I
            had never gone into. Ralsan took me inside that building for the
            first time. The building itself felt quite new compared to the rest
            of the academy. Most of the buildings in the academy were here
            before Alden arrived and where just decorated after, this building
            through looked both inside and out an Alden style building. The
            inside was clean and new, everything was light grey walls and decks
            with marble white in places.
          </p>
          <p>
            There was not many people in here, just four. A tall boy with
            glasses pressed firmly to his face and more oil in his hair than a
            cooking pot. He was watching a boy and a girl moving seeds around on
            a deck. Finally in the coroner was another girl with an inspection
            glass looking at plants she was moving from one bag into another.
          </p>
          <p>
            "This is the research department, only Redmond, with the two other
            students over there and Olinda over in the corner. Apart from that
            the rest of us usually on the fields doing our research there. Oh
            and I should not forget the third building south of here is the
            germination laboratory." Ralsan said explaining things.
          </p>
          <p>
            Redmond nodded at Ralsan as he come further in while Olinda carried
            on with her work. Ralsan took me over to an empty white desk and
            asked me to wait while he went into a small room to the side. He
            closed the door behind him so I could not see what was inside. When
            he came back out he was holding a small box.
          </p>
          <p>
            "In here is a kind of testing seed we use for beginners, they are
            cheap enough to do this once but not cheap enough we use them for
            farming. They are monster eating plans, they are dangerous when
            fully grown. We use them because they are hard to germinate so it is
            a good test of a fire mages ability to control temperature, or in
            your case a great way to test your skill."
          </p>
          <p>
            He opened the box and took out 5 seeds. They have a 20% chance of
            germinating, it's low but not too low. Give it a try and see how
            many of these 5 you can germinate, that will give us a clue about
            how effective your skill is. With that he put one of the seeds into
            my hand.
          </p>
          <p>
            I cast 'Lightning Germination' again and just like before a small
            green shoot shot out from the seed as it split down the middle. The
            shoot this time had a small head on top. It looked like a mouth made
            of two leaves, the edges being spiked like teeth.
          </p>
          <p>
            "Impressive, 4 more times." Ralsan said pointing to the other seeds.
            Maybe he thought it was just lucky.
          </p>
          <p>
            I proceeded through all of the seeds. When I had finished 5 little
            saplings sat there on the desk poking their small heads from the
            seeds.
          </p>
          <p>
            "A full 5 out of 5, impressive! How is your mana?" Ralsan asked with
            a big smile.
          </p>
          <p>
            "Ah it's fine, I used a little over half." I said, checking my mana
            I had 73MP total, I had used 10 points every time I had cast the
            spell. This cost was much higher then other basic spells for the
            mage class.
          </p>
          {/* <!-- level * 5 magic * 8 = mp // level * 10 vit * 14.5 +100 = hp --> */}
          <p>
            "Hmm, in that case we should be okay to grow just one right? The
            growth of the monster eating plants takes along time and is really
            difficult. It was why there are not many naturally. It would be a
            good test of your spells to see if it works like it did before."
            Ralsan said.
          </p>
          <p>
            Before really thinking about it I thought his words made sense this
            would be a good test. I picked up the sapling and cast 'Lightning
            growth' on it. The plant shot up in height, the stem spouted white
            leaves, they changed colors a few times red, orange, yellow, green,
            purple. The head grew bigger as the stem got thicker. The thickness
            was soon wider then my own body. The head filled the roof looking
            down on us, sharp plant teeth opened and an acidic smell wafted out
            from inside. I don't know if the mana was related to the plant but
            the remaining 23 mana had gone.
          </p>
          <p>
            I started to see black spots in my vision. I had been told before
            what would happen if I ran out of mana. My body heated up, trying to
            use mana that was not there while trying to get more. I started
            sweating heavily, it felt like my body was heavier. I was a low
            level through so the effect was not bad enough to cause me to black
            out or anything. Since mages have more mana then other classes
            usually the effects are worse for us. I sat on the floor panting as
            the monster eating plant looked poised to move down and swallow us
            all whole.
          </p>
          <p>
            However it never happened. It just stayed still, like something was
            missing. "WHAT THE HELL DID YOU TWO DO!?" Redmond shouted across the
            room. The two students he was with had ducked behind their desk.
          </p>
          <p>
            "It's not moving, weird." Ralsan said in a reply but it seemed more
            like he was speaking to himself.
          </p>
          <p>
            "Get out you fools! It could move at any moment and spray us with
            it's acid or eat us whole." Redmond said in our direction while
            pushing the the other students towards the door.
          </p>
          <p>
            "Most intriguing. There are no records of a monster eating plant
            growing so quickly. It is already at it's 3rd stage." A woman's voice
            came from behind the plant.
          </p>
          <p>
            "I agree it's interesting but it might kill you, get out now!"
            Redmond shouted holding the door open, half outside the building.
          </p>
          <p>
            Ralsan ran over to me and helped me out the door. Olinda leisurely
            looked around the plant almost unwilling to leave before her brain
            seemed to remember that being dead was not ideal. Ralsan had taken
            me outside and put me against the tree where we ate lunch most days.
            I saw Olinda walk out with a strange face. She was an odd one. "What
            now?" I asked Ralsan quietly.
          </p>
          <p>
            "Ah we have to get rid of that plant. It is a shame I couldn't study
            it more I would of liked to. You know the speed is one thing but
            what stuck out to me was I checked every sapling you made, as well
            as the bacon leaf from before. They were all pretty poor condition,
            malnourished." He looked at me to confirm since he knew I had that
            the inspect skill also.
          </p>
          <p>
            "I inspected the bacon leaf from before, and the saplings." I said
            nodding my head. "Everyone was 'Quality: 10'. Although it did not
            say out of how much or if that was good or bad." I admitted.
          </p>
          <p>"Broken". He replied.</p>
          <p>"Sorry, what?" I asked.</p>
          <p>
            "Your spell is broken. Making a plant grow like that with no food or
            water input. Should be impossible." He said shaking his head
            slightly. "What scares me most is the quality level starts at 10. I
            am worried the level 2 spell will start at 20.. And so on. Get what
            I am saying?" He said with a serious face.
          </p>
          <p>
            "Not at all." I shook my head. "Is it really a problem?" I asked.
          </p>
          <p>
            "For you? Yes." He smiled. "I am going to beg you everyday to level
            up and put another point into that spell. I know farming is not what
            you want to do... But I have to know if I am right." He smiled and
            sat down next to me.
          </p>
          <p>
            All I could do was laugh. He was so serious about something so
            silly. "Ahhh Fudge!" He said his head leaning back as he sat next to
            me. "Left the saplings inside, they will have to burn the plant
            down." He said.
          </p>
          <p>"Can't I just harvest it?" I asked confused.</p>
          <p>
            "Err. I did not think of that. You can try if you are up for it.
            I'll ask them to wait, without prey a monster eating plant should
            not move, that's its nature." He said and went to speak to Redmond
            and Olinda who were busy arguing with each other.
          </p>
          <p>
            Olinda walked back to me with Ralsan as Redmond started to walk back
            towards the gate. "Good news!" Ralsan said. "You can harvest the
            plant."
          </p>
          <p>
            "Bad news." Olinda followed up. "We have until Redmond comes back
            with the fire mages." She reached into her robe and pulled out a
            bottle of purple liquid.
          </p>
          <p>"What is that?" I asked looking at it as she handed it to me.</p>
          <p>
            "Mage mana. Pure, no element. Expensive." She said as if it was hard
            to part with it. I stopped reaching for it and looked at her.
          </p>
          <p>"Why are you handing this to me?" I said confused.</p>
          <p>
            "Olinda is like me, we want to see your harvest. In return for the
            potion let us keep the harvest to study." Ralsan said from the side.
          </p>
          <p>
            "Alright, that's fine." I said and took the potion. I opened it and
            drank it while looking at Olinda. I felt bad, it was like I just ate
            her pet. It must of been expensive..
          </p>
          <p>
            They both followed me from behind. I did not like the way they where
            looking at me, like I was some kind of freak in a zoo. I reached the
            door and popped my head inside. The plant had not moved even a
            hair's width from when I left. I did not really want to touch the
            plant if I could. I thought about it for awhile, I wonder if it
            would not move until I asked it to like with the bacon-plant
            soldier. Although this was a different spell so maybe I was wrong,
            better safe then sorry. I reached my hand out and with my palm
            pointed at the plant I tried to cast harvest to see if it would work
            without me touching it. Nothing happened. I kept trying the closer I
            crept forward. I was standing about 2 steps away when the plant
            disappeared and a clump of mush was left on the floor. The sudden
            change made me jump.
          </p>
          <p>
            "Was that it?" Olinda's voice came from her watching through the
            door. "Yeah." I replied hoping she was not to disappointed, it cost
            her that potion after all. I got the harvest from my inventory and
            placed it on the desk we were working on. The saplings where there
            from before.
          </p>
          <p>
            "Wow, the seeds are here also, the leaves are here...." Olinda
            started listing parts of the plants including an acid sac she was
            very excited with. "Is she happy?" I asked Ralsan.
          </p>
          <p>
            "Yeah, some of these items are hard to get because the easy way to
            deal with plant monsters is just to burn them. Getting the acid sac
            with the acid inside would be hard, you would have to kill the plant
            without burning it to the ground or letting it spit it's acid." He
            said picking up some of the items and inspecting them himself. "You
            know with your inspect skill, these farming spells, you could join
            us as a full member if you ever want to go into research." Ralsan
            said. "I guess we should carry on the test another time. Come back
            tomorrow when we have everything cleaned up and back to normal."
            Ralsan said. I was tempted to ask for the other saplings but I did
            not think he would give to me.
          </p>
          <p>
            On the way back into the academy I saw Redmond running with a group
            of fire mages back towards the farm gate. I was up another street so
            I just kept walking. He seemed stressed enough already without me
            stopping him. I was walking to the arena to see if I could get
            myself a new weapon. As I twisted through the streets past the
            training areas I felt a firm hand grab my shoulder. "A monster
            eating plant suddenly sprouts up in the research lab. Redmond was in
            a huge panic and in no condition to tell me what happened, perhaps
            you can." A stern voice said from behind. It was Arrilian.
          </p>
        </div>
      </div>
    </Content>
  );
}
export default Intro;
