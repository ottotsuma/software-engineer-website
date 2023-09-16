import React from "react";
import MapOfAlden from "./../../assets/MapOfAlden.png";
import HTMLFlipBook from "react-pageflip";
import Stats from "./../elements/stats";
import LevelUp from "./../elements/levelup";
import { Content } from "./styles";
import Hover from "../elements/hover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { ButtonsA, Sticky, BreakPoint } from "./styles";
import ImageZoom from "./../elements/imageZoom";
import { Beke, Otto, Effi } from "./CharacterFonts";

const SectionTabs = [
  { name: "Monad", href: "#Monad" },
  { name: "Herkikia", href: "#Herkikia" },
  { name: "Steinauhau", href: "#Steinauhau" },
  { name: "Michkel", href: "#Michkel" },
  { name: "PlayDay", href: "#PlayDay" },
  { name: "Incident", href: "#Incident" },
  { name: "TheBody", href: "#TheBody" },
  { name: "Aftermath", href: "#Aftermath" },
  { name: "Training", href: "#Training" },
  { name: "Otto", href: "#Otto" },
  { name: "Effi", href: "#Effi" },
];
const Intro = (props) => {
  const [SectionsTabsOpen, setSectionsTabsOpen] = React.useState(false);
  const SectionTabsButtons = [];
  for (let index = 0; index < SectionTabs.length; index++) {
    const Section = SectionTabs[index];
    SectionTabsButtons.push(
      <ButtonsA
        style={{ padding: "5px", border: "2px solid black" }}
        href={Section.href}
        key={index}
      >
        {Section.name}
      </ButtonsA>
    );
  }

  {/* 3 act structure, start with Otto and the children with the monster <- 3 acts ends. during his punishment he finds and reads his grandads old dairy, setting up the big bad  */ }

  {/* Ch-1 Students vs monster (Play Day & Incident & The Body) */ }

  {/* Opening line
                    George Orwell opened with unusual weather patterns to signify the world is not like our own, and there is something going on.

                    Something simpler, like setting up the main charter?

                    The hook, the video game from an npc's life
            */}

  {/* Incident - Midpoint - Climax */ }
  {/* Setup - Confrontation - Resolution */ }
  {/* Tales of a monster - Monster - Death */ }

  {/* Punishments and Book (Aftermath & Herkikia [grandfather dairy] ) <=> Adults getting ready for festival (Steinauhau & Michkel ) */ }
  {/* Finding purpose, goals and training before setting off for the academy (Training & Otto & Effi) */ }

  // Play Day & Incident & The Body
  // Aftermath & Herkikia [grandfather dairy]
  // Training & Otto & Effi
  return (
    <Content>
      <div className="Frame">
        <Sticky
          style={{ right: "0px", justifyContent: "end" }}
          open={SectionsTabsOpen}
        >
          <div
            style={{
              display: SectionsTabsOpen ? "flex" : "none",
              flexDirection: "column",
            }}
          >
            {SectionTabsButtons}
          </div>
          <button onClick={() => setSectionsTabsOpen(!SectionsTabsOpen)}>
            <FontAwesomeIcon icon={faAddressBook} />
          </button>
        </Sticky>
        <div id="test" className="Content">
          {/* <!-- military education is also about the history --> */}
          <BreakPoint id="PlayDay">
              {/* <p>
              The group of seven, laughing running into the forest, beyond the eyes
              of their parents, they arrive at a circular clear area within the
              small wooded area they often play. Eugen 13 years of age, larger,
              and taller then the others of the group, but without a temper or
              ambition he plays with children younger then him rather then the
              older children of the town. Beke, 12 a slow child, but easily
              angered. Ilse 12, the oldest child of Sarah and Robert. Effi 10
              the younger sister of Ilse. Otto 10 the oldest son of Michkel and
              Karla, with two younger brothers, and a sister on the way. Nils 10
              the 8th child of the town leader, although only 5 remain. Jakob 9,
              A small boy, shy and un-gifted.
            </p> */}
            <h3>Play Day</h3>
            <Otto>"Equip wand!" I called out holding up a stick I found.</Otto>
            {/* Type of story, role of Otto */}
            <Beke> "Ahaha, Do you even know anything about mages?" Beke jabbed.</Beke>
            <Otto>
              "Of course I know! 
            </Otto>
            <Beke>
              "You can't be a mage. You don't have a wand, you're holding a stick." Beke snickered.
            </Beke>
            <Otto>
              I stared at Beke in anger, twisting my lips, debating about what to reply when Ilse cut in. 
            </Otto>
            {/* Anger issues */}
            <p>
              "You two stop arguing and get into position the monster is here!" She pointed to a tree
              with a crudely drawn monster on it's side.
            </p>
            <p>
              Ilse continued as we ran in. "We have four melee fighters and two range fingers and one mage today." Beke gave me a side glance when Ilse mentioned the mage but said nothing. "Melee fighters use your skills!"
            </p>
            <p>
              "Charge!" <br /> "Heavy blow!" <br /> "Battle shout!" <br />
              "Provoke"
            </p>
            {/*  */}
            <p>
              The sounds of the fight ring out through the small clearing.
              "Hig-h Impact!!", "Fire Ball!". "fireball? That's not a junior
              skill that's intermediate. We all agreed to start at junior
              level." Berk grows towards the smaller Otto. "I thought we must of
              leveled up by now!" retorts Otto. "Why would we level up it's not
              even dead yet!" Berk shouts back. "come on now, we can't get
              distracted in a fight! Otto must of just got tired of being the
              mage every time" Ilse steps in to redirect Berks attention. "He's
              the mage because he cannot afford a real weapon, that is not even
              a wand it's just a stick" Beke spits out. Otto looks down at the
              stick in his hand, true enough it was no real wand. "that's what
              wands are, just sticks, now kill that monster!" Isle points
              towards the tree and Beke runs up and slams his shield into the
              tree and stabs it with his sword point before triumphantly
              shouting that he had slain the monster.
            </p>
            {/* <!-- The play introduces the reader in to what happens in the world, and monsters --> */}
            {/* <!-- play comes to an end, the festivities start --> */}
            <p>
              As the sun reaches the middle of the sky the group run back from
              the forest at the smell of food, they soon catch the lights of the
              large fire and the food being passed around the smaller children
              and the adults. They pick up the pace and run over to join in the
              festivities.
            </p>
            {/* <!-- They continue their days with the adults working, the children play or help out --> */}
            {/* <!-- news could be brought back from the town hall by Robert --> */}
            {/* <p>
            Chab Jun 12 21-22, The Grand Duchy shares a large boarder with the
            Herkikia League to the south-east, a small boarder with the
            Shogunate of Niyosho to the South. A mostly abandoned boarder with
            the Kingdom of Naj'es to the west. The kingdom has recently made
            peace with the Pocotocotcan Theocracy, after joining forces with
            Niyosho, Solzi & the United Provinces of Oflralensa off far to the west, the peace
            led Pocotocotcan to give lands to the Empire, including the trading
            town of Tlapatan.
          </p> */}
            {/* <p>
            To the North they share another large boarder with the Heilerbach
            Republic, along this boarder on the Republics side has growing
            unrest. Due to their neighbors attention being focused west, or
            internally the Grand Duchy has had relative pace throughout the past
            decade.
          </p> */}
            {/* <!-- around the year 21-22 the rebellion breaks out --> */}
          </BreakPoint>
          <BreakPoint id="Incident">
            <h3>Incident</h3>
            {/* <!-- redo - as Effi --> */}
            <p>
              The group where playing deep inside the forest when one of them
              discovered lurking nearby. A leaf-green figure, with a large
              yellow eye, webbed hands and feet with black sharp nails attached,
              a small belly and a slight hunchback. Its mouth shaped like birds
              beak but with small teeth protruding from below. One of them
              shouts "Monster detected!" All the children scramble towards the
              creature in a charge. Unaware of the dangers of reality.
            </p>
            <p>
              Ilse shouts commands at the others to form-up and attack, ordering
              Otto to cast a protection spell on the Eugen, Effi to stand and
              protect her as she gives commands. Jakob and Nils take ready their
              bows while Beke & Eugen ran forth and provoke the creature.
            </p>
            <p>
              At first the young Kappa is surprised and taken back by the sudden
              attacks and loud shouting, the children are spurred on by their
              apparent advantage. Beke slams his shield into the creature and
              stabs at its ribs with his wooden sword shouting "shield bash"
              with great joy. Eugen follows up by stabbing into the creature
              with his spear, the tip is dull but with enough force to pierce
              through the creatures skin, a long high screech sounds out in the
              clearing, confident Eugen tries to thrust further in but is
              unable. A toy arrow lands at Jakob's feet, Nils off into the
              distance. A child's cry fills the air, Eugen balled over on the
              ground holding his face as blood drips from it, in the struggle to
              pull his spear back the young kappa had slashed across his face in
              its panic.
            </p>
            <p>
              Ilse dashes froward to help, as Beke in his panic and anger curses
              Otto, "You where told to cast protection why didn't you cast
              protection!" Otto knowing this is no longer part of any game
              desperately wishes he could of done anything at all to help, drops
              his wand. The young kappa no sooner had slashed the boys face
              freed himself of the spear jumps on his back and stabs his webbed
              claws into his his neck. Blood squeezes out of the holes and
              around his sharp claws, Ilse runs up to the pair and tries to pull
              the creature off. Beke standing before his friend screaming in
              pain, starts hitting the creature with his sword and stabbing at
              his eyes, soon the creature lets out a screech as he jumps off
              Eugen, who is now silent on the ground in a pool of his own blood.
            </p>
            <p>
              Effi who was suppose to be protecting her older sister had been
              stood still in the shock of it all, suddenly sprung to life and
              jumped into the frey, the 3 children, Ilse, Beke & Effi beat on
              the monster with their swords defending with shields. The monster
              now hidden from view of Otto muttering magic spells he heard of
              from stories and Jakob collecting a few rocks from the ground,
              while Nils throws them at the monster where he can.
            </p>
            <p>
              In the short frenzy the creature knocks Effi aside, and makes a
              break for it running towards the tree line, the children give
              chase, Jakob bending down to pick a rock is slammed into by a
              fleeing monster who rips at Jakob's face and sides pulling out
              chunks of flesh and blood from the screaming child. The others
              more panicked scream and run towards the monster and Jakob Beke
              first, larger and stronger then the others who pushes the monster
              off Jakob only to receive quick swipes towards his shield, Ilse
              dives in and plunges her sword into the creatures left eye, it
              oozes out black liquid as the creature lets out a loud scream and
              plunges his claws into Ilse's stomach.
            </p>
            <p>
              Effi arriving later then her stronger faster comrades pushes her
              shield between Ilse and the creature who with his weight alone
              pushes them to the ground, Effi holds the shield between them
              trying to protect her older sister as the creature strikes down a
              blinding flash of light appears near the creatures one good eye
              and blinds it. "Heavy strike" Beke shouts as he slams his sword
              over the creatures head, as the creature spins and swipes its
              claws randomly Effi shouts "Provoke" and feels the creature
              attention directly on her, despite it being unable to see. It
              charges, as the creature arrives onto Effi's shield again, Ilse
              plunges her little toy sword into the creature's wound and its
              heart stops from the impact, the creature falls to the ground
              breathing heavily as Beke smashes his sword over its head again.
              It die's from blood loss shortly after.
            </p>
            <p>
              The whole encounter took just a few moments, even through to the
              group it felt a long time. Two of their friends lay dead in their
              own blood, Nils kneels by Jakob's body shivering unable to bring
              himself to move or speak. Beke shouts out for all to hear, blaming
              all of the others, until his eyes land on Eugen only then does he
              break, seeing his friends mangled and shredded face. Effi holds
              her older sister in her arms, repeating over and over that mother
              will be here soon, it will be okay. Ilse dies looking back at Effi
              unable to speak, lungs full of blood.
            </p>
            <p>"Level up!" the words cover Otto's vision.</p>
            <LevelUp
              level={1}
              species={"normal"}
              class={"normal"}
              type={"mage"}
              details={""}
              name={"Otto"}
            />
          </BreakPoint>
          <BreakPoint id="TheBody">
            <h3>The Body</h3>
            <p>
              After hearting the children scream like they where really in
              trouble this time myself, Robert and a few others ran over to
              check on them. Jakob, Eugen & Ilse lay dead. I grabbed Otto and
              shock him demanding to know what happened. Robert ran over to Ilse
              and Effi and burst into tears, he screamed so loud everyone else
              in the town came rushing over.
            </p>
            <p>
              Hours later I was stood next to robert over the dead body of the
              'monster'. "You know what kind of beast this is?" I asked. "Yeah,
              a Kappa, a young one at that, less then 2 years old." Robert
              replied. I looked towards Robert and he continued. "Not native to
              here of course, I've never seen one this far north. They rarely
              leave the waters only, to snatch prey or children who wonder off
              alone. But never this far and never before they reach adulthood."
            </p>
            <p>
              We stood watching the body burn. "Scouting turned up nothing,
              maybe it was a pet and it's owner died near by, there were not
              traces of other kappas in the area. That being said I have had
              reports of increasing beast attacks to the north, around
              Swexausern." Robert said.
            </p>
            {/* Put new monster here. - Şüräle */}
            {/* <div className="pop">
              Young-Kappa
              <img
                className="popOut"
                src="https://ottotsuma.github.io/images/monsters/Kappa.png"
                alt="Kappa"
              />
            </div> */}
            {/* <!-- Lurking in the water is a strange child-sized humanoid that resembles a bizarre cross between a turtle, a lizard, and a monkey. It has a beak-like mouth, scaly reptilian skin, clawed and webbed hands, and a turtle-like shell on its back. In the top of its head is a bowl-like depression filled with water. --> */}
            {/* <!-- https://forgottenrealms.fandom.com/wiki/Kappa --> */}
          </BreakPoint>
          <BreakPoint id="Aftermath">
            <h3>Aftermath</h3>
            {/* <!-- punishment --> */}
            {/* <!-- a reflection for some of the others maybe about the deaths? monsters? --> */}
            <p>
              Sitting alone in my room later that night I could not help but
              reflect back on what was told to me earlier. The numbers displayed
              in front of me right now where my attributes and my level, 1.
            </p>
            <Stats
              type={"description"}
              stats={{
                name: "Otto",
                level: 1,
                class: "Mage",
                spells: 1,
                titles: 0,
                "spell points": 0,
                "stat points": 2,
                vitality: 0,
                strength: 0,
                endurance: 0,
                magic: 0,
                willpower: 0,
                dexterity: 0,
                sense: 1,
                charisma: 2,
              }}
              notes={""}
            />
            <p>
              I was told not to spend any of the points, that I was going to be
              sent to the town hall tomorrow to be tested for my aptitude. Not
              everyone could use inspect, so external tools where used to find
              out their attributes and class. Since I was a mage when I am 14 I
              will go to the magic academy in Banderedam.
            </p>
            <p>
              Almost all the attributes where 0 however, this could not be good.
              Thinking at first there was a mistake I asked my parents but I
              soon learned that these numbers are a display of how much the mana
              can affect me and my spells, them being 0 just means that my mana
              flow to these areas is poor. The mana would not contribute toward
              anything I tried to do.
            </p>
            <p>
              All children growing up are told stories of heros and villains,
              magic, monsters, and great warriors. But nothing was ever said
              about how to unlock their class, skills, or attributes. Almost
              like everyone who had unlocked them was sworn to silence, today I
              found out that was true. For their own protection as the only way
              to unlock attributes was to slay a beast or monster in battle
              without the help of anyone with attributes, knowing this some
              children might carelessly try and fight a beast before they where
              14. Naturally not everyone kept the secret and most children had
              killed a beast before they where 14 just usually just one their
              parent had picked out for them, something less dangerous.
            </p>
            <p>
              Before bed I was told the story of the witch of Alden. This was a
              story I had been told over and over. The founder of our country.
            </p>
            <p id="Fancy">
              The witch of Alden was born when men with wings ruled the
              continent. They came from the heart of Pocotcotco, a country far
              to the west. They came with the powers of the monsters and
              enslaved and ruled over the people of east. The witch found the
              academy near Banderedam where she built up her power and with that
              power pushed out the westerns and founded the city of Alden.
              Seeing this weakness in their rulers the other people of the east
              threw off their western rulers and built kingdoms and Leagues's
              for themselves. The witch not wanting to rule alone made her
              commanders dukes. So Alden is a Grand Duchy.
            </p>
            {/* League = Herkikia League */}
          </BreakPoint>
          <BreakPoint id="Monad">
            <h1 id="title">Monad</h1>
            {/* Monad (philosophy), a term meaning "unit", used by philosophers to signify a variety of entities, originally the God and later such things as genus
            Monism, the concept of "one essence" in the metaphysical and theological theory */}

            {/* Some kind of fight? */}
          </BreakPoint>
          <BreakPoint id="Herkikia">
            <h3>Herkikia - Jun 01 21-12</h3>
            <p>
              The Herkikia League had always been the best place on the
              continent to be a mercenary. The past few years had made that statement even more true, this year more than ever.
            </p>
            <p>
              However, all good things must come to an end. The people who had invaded from across the endless eastern sea had proven it was not endless and the daft pricks didn't bring enough food with them to be starting a war.
            </p>
            <p>
              I must not let my guard down though, a cornered beast will fight harder. To the west,
              the monster jungles of Chingaling, their east the armies of the
              Herkikia league of city-states. To the north the sea they came from, which finally left the south the mercenaries hired by the League to finish the encirclement.
            </p>
            <p>
              If these sea people had any sense they would focus their attacks
              on this side. The pay is good but it's no good to a dead man. Then again it might be better if they just left into the sea from once they came.
            </p>
            <p>
              "Are you trying to explain the plan to Rock Head again? You know why we call him that right?" A tall, wide, muscular man interrupted me. On his head, was a wampus cat's head. I'd seen him kill it, its yellow eyes were supposed to be able to hypnotise a person who looked into them, this man could only have one thought in his head at a time, 'whack it till it's dead'. If he's telling me Rock Head has less brains than him maybe he's right, but honestly it was more to calm my nerves.
            </p>
            <p>
              I gave him a nod of understanding and he went back to stuffing his face with, what I hoped was not beast meat from the jungle. The last thing we needed was him going insane from eating some unknown poisonous creature.
            </p>
            <p>
              When I looked back over to the sea people's final outpost, it would seem they did have a sense of survival after all. Their oversized wooden boats were gliding off into the sea.
            </p>
            <p>
              That was just the signal the Herkikia general needed. The wind mage next to him carried the general's voice across our whole line and beyond. His voice was loud and strong.
            </p>
            <p>
              "Victory is near at hand! If all do their duty, it will be OUR victory!"
            </p>
            <p>"YEAAAHHH!" A cry from his men came as an answer to his words.</p>
            <p>
              "Many times I have faced this enemy and many times I have beaten
              them."
            </p>
            <p>"YEAHHHHHHH!"</p>
            <p>
              "Let us offer prayers to the gods for victory. And then let us arm
              ourselves to the teeth, just in case the gods aren't listening."
            </p>
            <p>"Ahaha!"</p>
            <p>
              "The enemy war god must have a sense of humor, I mean look at
              them."
            </p>
            <p>"Ahahaha!"</p>
            <p>"By tomorrow our arms will ache from over-use!"</p>
            <p>"Woo!!"</p>
            <p>
              "The enemy may have the Fish on their side, but we have excellent
              shoes! And those shoes will stamp out their fish!"
            </p>
            <p>That had quietened the cheers a little. I guess that is why he has the title 'The mad'.</p>
            <p>"Charge!"</p>
            <p>
              The Herkikians moved in first, in lines with long spears pointed
              out over their shields. They formed walls of spears and white
              armour. Our skirmishers were the first to engage them, those who threw
              projectiles or magic into the enemies to tie them down. Once the skirmishers pulled back we would move in to tie up the disorganised enemies. In theory.
            </p>
            <p>
              As soon as the skirmishers started to pull back we ran in. I cast
              'Ice spear' into their ranks. I wrapped my sword with ice magic as
              we got closer. The berserker from before shouted louder than a war
              drum next to me and jumped into their ranks swinging his club
              around at whoever was nearby. With their ranks fully broken up, I
              was able to fight small duels which was more my style.
            </p>
            <p>
              I used my sword to move my opponent to one side and launched a ball of hardened ice into his chest. He pushed through the pain so I let my ice magic spray out from me causing him to slow and be cut by small shards of ice. I moved in and stabbed him just below the waist. He moved back holding his stomach and cursed in a language I don't know. "썅놈" I moved back as he was dying and gathered magic into my hand. He reached down and pulled up a wand? He pointed it right at my head and the sound it gave off blew my eardrums out, there was a large flash of light, then nothing.
            </p>
          </BreakPoint>
          <div className="pop">
            Map of Chab
            {/* http://www.mesoweb.com/resources/vocabulary/English-Maya.html */}
            {/* <img
                className="popOut"
                src="https://ottotsuma.github.io/images/map/Charia%202022-03-10-09-44.png"
                height="400px"
                alt="MapOfMonad"
              /> */}
            {/* <ImageZoom alt="MapOfMonad" image="https://ottotsuma.github.io/images/map/Charia%202022-03-10-09-44.png" /> */}
            <ImageZoom
              className="popOut"
              alt="MapOfMonad"
              image="https://ottotsuma.github.io/images/map/Charia%202022-03-10-09-45.png"
            />
          </div>
          <BreakPoint id="Steinauhau">
            <h3>Steinauhau - Jun 12 21-12</h3>
            {/* The Grand Duchy of Alden is home to 3.2 million people */}
            <p>
              Jun 12 21-12, In the North-east of the continent of Chab, in the
              Grand Duchy of Alden was a town called Steinauhau.
            </p>
            <div className="pop">
              Map of Alden
              <img
                className="popOut"
                src={MapOfAlden}
                height="400px"
                alt="Map Of Alden"
              />
            </div>
            {/* <!-- Starting with the setting up of the place? and events. --> */}
            <p>
              "Congratulations!" A unified cheer rang out around the town hall. Looking down into my cup, I lamented. The reflection looking back at me was far older than it used to be. Stiff and past the age where I should be drinking luminescent green drinks. I had always liked moon-melon juice ever since I first tried it over 70 years ago now. Soon, the reflection in my cup smiled back.
            </p>
            <p>
              "You look happier than you have in years." My thoughts were interrupted.
              I turned to see my old friend Edmure.
            </p>
            <p>
              "I was just thinking about how new life replaces the old." I
              continued to smile.
            </p>
            <p>
              With a frown at first and then a smile Edmure retorted "You thinking
              how you just became a grandad? There is still life left in
              the both of us yet."
            </p>
            <p>
              Jun 12th a night the people of Alden celebrate the new life brought into this world
              over the past year, like a shared birthday after the harvest months.
              {/* a small tradition as not all make it past infancy. */}
            </p>
            <p>
              Edmure had whispered into my ear before taking his leave. There have been sightings of the sea people off the coast. They had been pushed back into the sea at
              the last battle of Herkikia, only a couple of weeks back, they may try to land further north. I left the town hall and went to the walls to meet up with Edmure.
            </p>
            <p>
              We left the town and went through the forests. We went to the area
              where the sea people were last seen going through the forest.
              I saw large boats off in the distance, so I had to check who; if any of
              them had come ashore before reporting back.
            </p>
            <p>
              I passed through the forest easily with my legs and body strengthened by my mana. The
              trees that would scratch at my skin, bent and broke as I passed by
              quickly, leaving behind no marks on my skin.
            </p>
            <p>
              I found them. Moving through the forest slowly. They did not see
              me, I know this place like the back of my hand. I pulled out my
              dairy and started to take notes, their location, how many, kind
              of weapons, etc. I wrote down everything I could remember, right up
              until I heard a click, followed by a large flash of light.
            </p>
          </BreakPoint>
          <BreakPoint id="Michkel">
            <h3>Michkel - Jun 12 221-10</h3>
            {/* Re-do dates, Month Day Year-Era, Jun 12th, 221st year of the 10th era.*/}
            {/* <!-- starting with the kids meeting as friends, introduce the town, some news the people, small parts of the world, culture--> */}
            <p>
              It had been 10 years to the day since Edmure had come back with a blood-soaked diary. David was my wife's dad. Edmure, his best friend, had later moved to Swexausern, about 25km North-west. I was told he died peacefully two years ago. The town
              was getting ready for the same festival again. I guess that's what led me to read his diary again today.
            </p>
            <p>
              I spotted a woman doing her best to hold or herd three children towards me when I looked up. "Hey Karla." I waved as she got closer, two older girls and a boy, all the children
              had red hair like their mother. As they got closer I nudged my wife, Sarah and pointed to our son's smiling face. He only smiled like this when Effi, Karla's daughter, was around.
            </p>
            <p>"Good to see you are all well." Sarah said, when they arrived, the kids immediately ran around hectically but I guess I have gotten too used to it.</p>
            <p>"You too, Where is Robert?" I added.</p>
            <p>
              "We're fine, Roberts going to meet us later on, he went to the hall to get the news and left me alone with these lovely lot." Karla replied.
            </p>
            <p>
              Our families, now combined into one big group. Slowly ambled our way towards the wood nearby, where many other families of the town had already arrived. The children quickly
              ran off into the forest to play, leaving us to build a fire and set up the tables for
              tonight's festivities, Jun 12th.
            </p>
            <p>
              While sharpening one of the axes Robert had come to share the news a group of travelling merchants had brought with them. Mostly news of ongoing problems just north of our border. People living there have been unhappy with the Republic's increased taxes and conscripting their children and young adults to fight in a war so far from home. The villages still had to fend off the local beasts of their own, as well as other jobs which were no longer being fulfilled. The republic had a massive Avalanche in Neuenese and a Fault in Moborodian, the earth there had opened up and monsters and beasts from the depths had spread out.
            </p>
            <p>
              Those unhappy with their treatment had finally boiled over and started protesting at first, one thing led to another and now we call them the rebels. Somewhere between 100,000~300,000 in number. Since most were not soldiers beforehand
              the success of the rebels was blamed on Aldens, us, supplying the
              rebels.
            </p>
            <p>
              "We have been supplying them haven't we?" I asked. "If not, we
              should. They are Aldenese also."
            </p>
            <p>
              "We have." Robert replied. "Too obvious, it seems. If even the
              town inspector knows we have." He laughed like he had no cares.
            </p>
            <p>I shot a breath of air out of my nose as I laughed silently. "Well is there any news NOT from the Republic?" I asked.</p>
            <p>
              "Elves have had an outbreak of cat fever. Gianlongian in Herkikia is going through a drought, near their second-biggest port city. Desonean, the main river through the kingdom, has flooded. To top it all off, a Malgian Crusade has been called in the Kingdom, I can only hope those crazy zealots die in the desert." Robert said.
            </p>
            <p>
              "What a year..." I commented. "What's cat fever anyway?" I asked.
            </p>
            <p>
              Robert shrugged. "A fever cats get, I guess, there was not much
              news about it since it's from so far away. Anyway don't let me stop you from inspecting the woodcutting axes, we need to know their durability so no one gets hurt."
            </p>
            <p>
              I gave Robert a nod as he turned to go look for his wife Sarah. I went back to doing my job. Inspecting low-level items for their durability.
              {/* Your skill in inspecting items might show you a different result. Some people see short descriptions about the items, others just a generic letter rank from F - A. */}
            </p>
            {/* koko */}
            <p>
              Every night I teach my son Otto more about the skill. Inspect is one of the few skills that do not require skill points to learn, which is nice.
              {/* However the passive skill appraisal, which increases how much information the inspect skill uncovers, did require skill points. I was lucky enough to learn the skill through sheer luck.  */}
            </p>
            <p>
              It's a safe well paying job, I always hoped Otto could learn it too so he can have a safe life.
            </p>
            {/* <!-- 284,139 rebels --> */}
            {/* <!-- IMPORTANT  */}
            {/* 
parent teaches otto basic inspect skill as its is job of parent in the town 
first person in the magic histories book is the witch of Alden
Otto can see numeric output of items but no one else can 
most people learn inspect but either see 

- ranking in letters F - A 
- short description 
- numbers 
- progress bar 
- use list 
--> */}
          </BreakPoint>
          <BreakPoint id="Training">
            <h3>Training</h3>
            <h4>Beke POV</h4>
            <Beke>
              As I arrived at the town hall I could see others outside
              practicing holding weapons and swinging them under the supervision
              of an instructor. I knew them, they were the same age as me, I
              didn't make any friends among them. I was always friends with Ilse
              & Eugen. The others, Nils, Otto & Jakob were Effi's friends, not
              mine. They only joined us because Effi was Ilse's little sister.
            </Beke>
            <Beke>
              As I walked I spotted another group. The weirdos. Their job class
              was rouge, today they were prancing around on the floor, mimicking
              the movement of their preferred beast. One was even wiggling on
              the floor like a snake, or more likely a worm. I could feel my
              face twist in contempt, nothing I could do about it, was their
              fault for acting that way.
            </Beke>
            <Beke>
              I arrived at the door to the town hall. The hall smelled, earthy,
              musky a little stale. To counteract this, herbs and rushes were
              strewn across the floors. The walls were painted with scenes of
              Aldens past. I liked this part of the hall, there were depictions
              of the battles. As I walked along the painted halls, the work was
              interrupted by rooms of other kids sitting down in silence reading
              or listening to an instructor talk. I hope to shield and go
              outside like the first group I saw.
            </Beke>
            <Beke>
              After reaching the back of the hall, there was small room with an
              elderly man inside. He had grey hair, a long nose, long wrinkly
              fingers and the old man was wearing a thick woolen cloak. I knew
              better then to interrupt this particular man. So I waited.
            </Beke>
            <p>After a few moments the mans voice booms out "Late".</p>
            <p>
              "S-sorry Mr. David I had to clean as punishment for.." his eyes
              drift off and memories of the incident start to come back, but
              before he could clearly remember..
            </p>
            <p>
              "I don't want your excuses, do your cleaning then run here
              tomorrow. Now let's see what your aptitude is, place your hand on
              here, quickly now."
            </p>
            <p>
              "Aptitude?" before he can talk any more his hand is dragged over a
              small rock, it looks like the ocean it's self is stored inside the
              rock, the reflection never sitting still. Soon after his hand is
              placed on the rock it turns to a light sea green. "Well, was not
              expecting that, maybe I judged you too quickly." Beke looked up
              confused at his statement "Sorry?"
            </p>
            <p>
              "Expected you to be a Fighter, seems you are a Rogue, the stone
              measures not only the type of mana you have but also elements
              present inside. There is no mistake, the type of mana is rogue.
              Water and wood elements are not unusual for this area."
            </p>
            <p>
              "No, no, that can't be I must be a fighter, my brothers are
              fighters, my farther my mother, my whole family are all fighters!"
            </p>
            <p>
              "That is not how this works, Rouges are outside today, on your
              right as you leave, can't miss them." David goes back to his paper
              work. Beke looks on for a moment before realising he has been
              dismissed there is no arguing, he puts on foot in front of the
              other walking back to the door he came in from thinking over and
              over, no, it has to be wrong.
            </p>
            <p>
              Beke makes his way over to the Rogue group, the children around
              him are still moving in weird ways. The adult teaching them walks
              over to Beke. "So you are a Rogue then? Best to see what kind."
            </p>
            <p>"What kind?" Beke looks around. "Like what beast I am?"</p>
            <p>
              "Ahahaha, no, no. Don't know much about Rogues do you? Alright
              let's start from the beginning"
            </p>
            {/* Removing title happend here, I think above needs re-write in Beke Pov */}
            <p>
              While the other children trained and practiced Beke was taken to
              one side and asked what he knew.
            </p>
            <p>"So Beke why did you want to be a Fighter?"</p>
            <p>
              "My whole family are Fighters, I would of been a really good
              fighter, I am stronger and larger then the others my age."
            </p>
            <p>
              hmm I do see your point, but let me clear some things up. Firstly
              Rogues are not Fighters who mimic beast moves, anyone can do that.
              If someone want to fight while acting like a monkey or a snake
              that is up to them but that is not exactly what is going on here.
              You see Fighters move mana throughout their bodies to increase
              their speed, strength or even defend from attacks this much you
              might already know from your parents. A Rogue however uses their
              mana to reproduce how beasts fight. It's not so much about the
              movements but how they use their mana, let me show you.
            </p>
            <p>
              No sooner had he stopped talking a large black tail, as long as
              his own body had appeared behind him and slammed into the ground,
              the ground fell and gave way to its quick and powerful strike.
              "Scorpion tail, that is my spirit."
            </p>
            <p>
              "So I can grow extra body parts, parts of beasts to help me
              fight!?"
            </p>
            <p>
              "Aha well yes" he gestures towards his own tail. "However also no.
              It is not about having extra body parts, although you can, I've
              even seen a man who replaced his eyes with that of a bird of prey,
              made him an amazing archer. The point is being a Rogue is about
              taking what advantages a beasts has and making them or own. From
              level 1 through to 10 we mimic the beasts we want to steal from,
              learn how they fight so that we can kill them, eat their heart and
              take their spirit for our own."
            </p>
            <p>
              "Eat their heart? gain their spirit? Are you saying if I eat the
              heart of a dragon I can grow wings and breathe fire?"
            </p>
            <p>
              "Maybe, I never known anyone who bested a dragon in single combat
              and then ate the dragons heart, so what abilities and skills can
              be learned from a dragon I do not know. But I do know you should
              not pick a dragon as your first target."
            </p>
            <p>"I don't think a dog or a cat would suit me."</p>
            <p>
              "You are right about that, like you said you are big and strong,
              since you are later then your class mates to level you will not
              reach level 10 as quickly as them, perhaps you should aim a little
              higher, something that suits you."
            </p>
            <p>
              Beke for once in his life, stops, takes pause and thinks about
              what would suit him.
            </p>
            <p>
              "You don't have to decide right this second you know, there are
              records of other Rouges you could see what abilities they got
              before you decide. For today since you came with your sword and
              shield, let us train basic fighting."
            </p>
            <p>With a nod Beke agrees and joins the group.</p>
            <h4>Beke POV</h4>
            {/* <!-- Lunch and discussion of the others  --> */}
            <p>
              After training with the others in the Rogue group, Beke started to
              like it, although his level was lower he was popular with the
              others who wanted to train against a new opponent and made a few
              new friends.
            </p>
            <p>
              Beke places his lunch try down and looks around at his group of
              Rogues, the Fighters sitting on other tables. "So where did Nils
              end up, as a mage?"
            </p>
            <p>
              "Oh, no he is practicing to be an artist, I hear he's going to go
              to the Capital to train"
            </p>
            <p>"Oh, what about Effi?" Beke says with a little disgust.</p>
            <p>"The stone turned red for her, Fighter"</p>
            <p>"A Fighter!? How could a coward like that become a Fighter?"</p>
            <p>
              Silence filled the table. "What about Otto, did he even turn up?"
            </p>
            <p>"... Purple, mage."</p>
            <p>
              "Ha! He couldn't cast a spell even WHEN his life depended on it"
            </p>
            <p>More silence.</p>
            {/* Move skill lessons to Beke. Otto doesn't need this chapter. */}
          </BreakPoint>
          <BreakPoint id="Otto">
            {/* meadowsweet and marjoram; EU => Yucatan spicigera, Mimosa pudica, Persea americana, Petiveria alliacea, Piper amalago, Psidium guajava, Tagetes erecta and T. lucida. */}
            {/* Cempazúchitl of orange and yellow were mostly used. Our previous rules introduced the plant to this region, whenever a batch is found they are ripped up and used to cover up the smell of old wood in the town hall, also letting us walk on-top of them. */}
            I arrived at the door to the town hall. The hall smelled, earthy,
            musky a little stale. To counteract this, herbs and rushes were
            strewn across the floors.
            <h4>Skill tree lesson - Otto</h4>
            <p>
              After being directed away by an old man behind a desk I was facing
              a room of other children like me sitting on the floor off to the
              side of the main entrance. There was about 14 in total and a tall
              skinny man at the front, his boney hand gestured for me to sit
              down anywhere. As soon as I had he carried on speaking as if I had
              always been here.
            </p>
            <p>
              "If you remember from earlier Luis told us that when you unlock
              your first level, you will have access to your skill trees. These
              trees are where you can spend your skill points to acquire new
              abilities or just improve your current abilities."
            </p>
            <p>
              "You all have 2 skill trees right now. Your class, for you all
              sitting here today that is Mage. If you put points into this skill
              tree you will learn magic spells. Your second tree is your
              species, for everyone here today that is clearly Human. For other
              species such as elves from the United Provinces of Oflralensa and
              naga from the Kingdom, their species tree will not be human but of
              their own species."
            </p>
            <p>
              "Today we will be looking at the Human skill tree. This skill tree
              is often overlooked by not only combat focused people but also
              other species. While other species might get direct combat related
              skills and buffs the human skill tree is mostly focused around the
              charisma stat. This is the most overlooked stat in my opinion but
              you can make up your own mind."
            </p>
            <p>
              Over the course of the day we made notes and learned about the
              various skills and advantages and of course the disadvantages the
              human skill tree. The overall gist being that the human skill tree
              made humans appear more trustworthy, liked and various boots while
              in a party. This made humans particularly in large numbers, and
              political environments.
            </p>
            {/* Otto goes home and tells his parents about his day at school. The parents talk to him about what he wants and reasons for wanting it. */}
          </BreakPoint>
          <BreakPoint id="Effi">
            <h4>Effi POV</h4>
            <p>
              I had joined the fighter group. I was surprised to see that even
              the older kids were placed with the younger ones. My dad had told
              me that education starts the day you become level one but I guess
              that happens at different times. He said we started early and most
              kids would not start their education until they were 13 and
              expected to go hunting to become level one.
            </p>
            <p>
              The first thing I had to do was read through a book about
              attributes. I had to learn their names and what they do before I
              could join in the normal lessons. Today the others were looking at
              maps of the whole continent and learning about the people and
              places. I really wanted to join in so I studied hard.
            </p>
            <div className="book" style={{ color: "black" }}>
              <HTMLFlipBook width={200} height={200}>
                <div className="demoPage">
                  <p>Vitality</p>
                  <p>Increases health points (HP).</p>
                </div>
                <div className="demoPage">
                  <p>Strength</p>
                  <p>Increased physical damage.</p>
                </div>
                <div className="demoPage">
                  <p>Magic</p>
                  <p>Increases magic damage & mana points (MP).</p>
                </div>
                <div className="demoPage">
                  <p>Endurance</p>
                  <p>Increases resistance to physical damage.</p>
                </div>
                <div className="demoPage">
                  <p>Willpower</p>
                  <p>Increases resistance to magic.</p>
                </div>
                <div className="demoPage">
                  <p>Dexterity</p>
                  <p>Reduces time between using skills.</p>
                </div>
                <div className="demoPage">
                  <p>Sense</p>
                  <p>Increases trap detection.</p>
                </div>
                <div className="demoPage">
                  <p>Charisma</p>
                  <p>Increases persuasiveness.</p>
                </div>
              </HTMLFlipBook>
            </div>
            <p>
              There was more to each of the attributes I was told but to join
              one of the military academy's which all fighters at age 14 were
              expected to do, this basic understanding was a must.
            </p>
            <p>
              Now I could join in the lesson with the others! Each group had a
              large map laid out on the floor and had to match the people group
              to each of the areas they lived in. While people moved around so
              it was not like all elves lived in one place but it was safe to
              say the majority lived in the United Provinces of Oflralensa, the
              most western country. Aldenese was easy! That was right here in
              Alden.
            </p>
            {/* <h3>Departure</h3> */}
            <p>
              2 years later. After Jun 12th sometime before winter, we had all
              turned 14. Beke had turned 14 the year before and departed the
              village to go to a Military camp. This year I stood next to Otto
              and Nils. Nils was going to the capital to study art. It was an
              unusual choice but he had been accepted by a school there. Otto
              was going to the academy to train to be a mage, the choice was
              very predictable.
            </p>
            <p>
              As for me? I was going to the military base near Grafen, a large
              city south of the village. I was so excited. My mother is a
              warrior, my dad said she is really strong too. My dad is an archer
              and hunter. He taught me how to use his bow when I turned 13 but I
              want to become strong like my mother able of protecting anyone
              near her.
            </p>
            <p>
              There were students from the town hall and even some from small
              hamlets or lone houses. We moved in a big group with some of the
              adults for protection. They would walk us to the next big town and
              swap with the adults from that town. Since our town is so far away
              from the academy we were some of the first students in the country
              to set off.
            </p>
          </BreakPoint>
          {/*Alphonse -  In the arena, 30 had been commended to die. Malnourished and with cuts and bruises still healing from rough treatment by their jailors. They were completely naked and jeered at spitefully by the crowd. Each has their hands tied behind their back, standing on a long plank of wood resting on a fulcrum. Suddenly there is a loud grown of scraping wood and the clanking of chains, 20 beasts are raised through the floor from the network under the arena. They have been deliberately kept starving for today. They took no time to spot their prey and with a loud screaming roar each charged forward. The panicked prisoners watch the beasts approach, in a flash the beasts are upon them, the first leap out of the way rising high into the air on the long plank of wood, safe for a moment from mutilation that would of been their destiny if they had remained on the ground. However this temporary respite comes at a cost, the men at the other end of the plank are each lowered towards the ground, with the beasts below. Their faces, legs, torsoes are ripped apart with pincers, claws and fangs. The lucky ones are killed quickly, while the others are ripped torn and devoured while they are still alive and screaming. Some of them blind with fear leap into the air, sending their opposite side down into the beasts. The beasts tare into them, the whole thing is a perverse game of seeing who will die last, although death is inevitable for everyone involved. */}
          {/*
<!-- 
These are the names given by the people of Alden.   
Alden - german 
Herkikia - essos, lyric speaking? - free city types
Naj'es - desert people, empire from the god of items books
Niyosho, sea people, japanese? inspired 
chaibia, rivers, boats, ships trade, LOR inspired human mixed settlement 
pocotcotco - south american inspired, religious 
mifuengo - high elf ES inspired - yeah
heilerbach - the republic, eastern centric, like russia shaped, italian roman? 

Alden has a religious and cultural split in the north east. 

Culture: Herkikia its self is greek, free city types. the people in the north of both states are hungarian.
To the W dwarven is the main culture in Alden. Split with 2 other nation states.

There are 3 religious splits along the same lines.

--> */}
        </div>
      </div>
    </Content>
  );
};

export default Intro;
