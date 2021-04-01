import React from "react";
import Spells from './../elements/spells'

function intro(props) {
  return (
    <div className="Monad" id="3">
      <div className="Frame">
        <div className="Content">
          <h3>Lessons</h3>
          {/* Lubin */}
          <p>
            "Now who can tell me what separates a Mage from a Fighter? In
            particular how they use their mana." The teacher asked to the class.
            His name was Lubin, he was my teacher for combat classes and general
            magic. Unlike some of the other teachers who where researchers or
            third year students Lubin was a full time teacher at the academy.
            His job was to write the curriculum for the magic classes taught to
            all students so he naturally taught that class as well.
          </p>
          <p>
            We would had three classes this year. Magic, Combat and our element.
            While there might be minor events or one time classes this meant
            this year I would only have 2 teachers, with Lubin for both magic and combat. I had yet to meet my other
            teacher but I was glad to have Lubin so far he seemed like a
            professional teacher.
          </p>
          <p>
            "They project their mana into the world around them to cause change"
            One of the students answered while I was thinking about the
            introduction to the school we had just finished.
          </p>
          <p>
            "Good answer. You should all already know that having read chapter 1
            of MM&M. Mages channel the mana inside their bodies into the world
            in the form of spells." Lubin replied.
          </p>
          <p>
            "Todays lesson is about getting you all understanding the directions
            you can take as a Mage. The kind of jobs you can get in Alden and
            beyond. Since all of you here are taking the combat class this will
            give you an idea of the jobs you can get as a warrior-mage. And
            finally where to put your stat points." Lubin said.
          </p>
          <p>
            "We will start with a brief look at the common elements mages have
            and maybe a few specific to nobel families of Alden. Before moving
            onto common jobs. Turn to chapter 2 in MM&M." Lubin said as he wrote
            down the names and symbols of the elements on a board behind him
            with chalk.
          </p>

          <div className="Elementals">
            <div className="Element">
              <img
                className="Element-Image"
                alt="Fire"
                src="https://i.pinimg.com/originals/4d/ca/d9/4dcad98ff2d9aba671b56957ab5d70a2.gif"
              />
              <p>Fire</p>
            </div>
            <div className="Element">
              <img
                className="Element-Image"
                alt="Fire"
                src="https://i.pinimg.com/originals/22/86/5d/22865d4b8b7e517dce1b60a2988c8482.gif"
              />
              <p>Lightning</p>
            </div>
            <div className="Element">
              <img
                className="Element-Image"
                alt="Fire"
                src="https://i.pinimg.com/originals/e5/a4/c2/e5a4c2e0ce407b50e52b9a7dd13ded12.gif"
              />
              <p>Wind</p>
            </div>
            <div className="Element">
              <img
                className="Element-Image"
                alt="Fire"
                src="https://i.pinimg.com/originals/a1/91/8d/a1918dab1090f13a25a0550d111918a3.gif"
              />
              <p>Earth</p>
            </div>
            <div className="Element">
              <img
                className="Element-Image"
                alt="Fire"
                src="https://i.pinimg.com/originals/53/39/30/53393042b7d6b478cb8f450127cded85.gif"
              />
              <p>Water</p>
            </div>
            <div className="Element">
              <img
                className="Element-Image"
                alt="Fire"
                src="https://i.pinimg.com/originals/13/f2/a9/13f2a99f60457a624fae45d7be0bad65.gif"
              />
              <p>Wood</p>
            </div>
            <div className="Element">
              <img
                className="Element-Image"
                alt="Fire"
                src="https://media2.giphy.com/media/ZRrzq9KNSjWik/giphy.gif"
              />
              <p>Metal</p>
            </div>
          </div>
          <p>
            "Each element has a set of spells that come with it. These elements
            behind me are common elements found though the whole continent. If
            we focus on earth for example, spells might include defensive spells
            like earth wall, offensive spells like earth spike or non-combat
            spells like soften." Lubin said.
          </p>
          <p>
            "Which spells you pick up, how you use them, makes every earth mage
            different in some way. While this has its advantages, such as being
            versatile. The flip side is the army. They provide a manual to all
            students wanting to join them, this way they can have uniform mages.
            This makes forming regiments easier for the army because they do not
            have to match unique variants together to bring out their best. They
            had taken lessons from history and picked out what works best for
            them. Most earth mages in the army have earth wall for example, high
            as possible. Without earth wall you could not join the military as a
            standard earth mage." Lubin continued.
          </p>
          <p>
            "Looking at Alden's unique elements most are with the nobel
            families. As you may know most nobel families of Alden come from the
            fighters line. There are few mages found within their families.
            However the city of Alden's very own the Grand Duke has royal
            lightning, it is purple in color and has not been seen outside of
            their family. Argavereri's Viscount uses a green smoke element, most
            unusual. Finally baron Mann based at Soldenheim famously uses
            runes." Lubin explained.
          </p>
          <p>
            "While I did not mention the witches of the witches coven, we should
            all know about them after all. The witch of Alden, founder of this
            country, was apart of the same coven. However those magics are
            taught to any women who joins and not held by one family." Lubin
            explained.
          </p>
          <p>
            We then split into small groups to look though the histories book
            and asked to match up as many persons in the book to the jobs found
            in Alden. This would help us get familiar with the histories book,
            some of the people inside and the jobs found in Alden all at the
            same time.
          </p>
          <p>
            The lesson went on for another 25 minutes like this before being
            asked to present our findings in small groups.
          </p>
          <p>
            "Now lets look at how to invest your stat points. Firstly, Magic
            affects the total amount of MP you have, so that is usually the main
            stat for Mages. Even if you plan to be a front line fighter, healer
            or non-combatant." Lubin said after the class had come back to watch
            him lecture.
          </p>

          <p>
            "For the other stat points & spell points we have provided you a
            book containing what past mages have done and how it worked out for
            them. You can either copy one of them or just learn from what they
            did and make your own path. Unless you want to join the military
            directly." Lubin followed up with.
          </p>

          <p>
            "If there are any questions, you will be seeing me once a day, four
            days a week, so please wait until you have read though 'Exemplary
            mages: a history' before asking questions. As you might find your
            answers in there." Lubin said.
          </p>

          <p>
            Shortly after the class was dismissed. I went to the library along
            with many of the other students from my class and other first year
            classes. The main library was split into sections. First years could
            only access the first floor which soon became packed. I couldn't see
            a good place to sit with students everywhere. I had the book I
            needed with me anyway it's not like I had to use the library to
            study so I went back to the cliff side.
          </p>
          <p>
            In the library on the cliff side I got to reading the histories
            under one of the large stone pillars with light coming out from it.
            After reading though so many of the Mages from the past I soon found
            myself bored and looking for anything else to distract me. I started
            looking along the spines of the old books around the library; 'Fire
            Magic', 'Faming with mana - Pocotcotcan magic', 'Lusty Ma...', 'The
            Summoner: Morian Zenas'. "Oh he's in the histories book, wonder if
            it's different". I said a loud, clearly the studying was driving me
            mad.
          </p>

          <p>
            After reading and comparing the book to the pages for awhile I
            concluded that the people that wrote the histories just copied
            directly from these older books. Cutting out the stories and reasons
            why they made their decisions and just wrote down the outcomes and
            stats.
          </p>

          <p>
            I decided to look for some other books to see if any about
            shock-mages which where also used by the military. I was going to
            get the military manual later anyway because I want to join after I
            leave the academy. I think it is my best bet at a starting job.
            There were some in the histories but they had clearly clean out a
            lot of information the old books had.
          </p>
          <p>
            I found a book half on its side, 'Otto Magnus Of Might'. The name
            was so bad. Curious, I opened the book to find the pages had been
            cut cleanly in the middle. Inside the book was a black key, and the
            number 304. Below it, drawn onto the bottom of the book cover was
            strange makings, markings similar to the door shown to me by Tisiel
            during my first day. The key looked to be similar to the one to my
            room.
          </p>
          <p>
            This took no expert to figure out, no one had been into this library
            for a long time, the person who made that door must of lived in room
            304 at sometime. If someone lives there now, I will just have to be
            quick and use my wand of magic detection to see if there is anything
            there. I made my way to the room on the 3rd floor, I pressed my ear
            up against it, no sound. Taking a deep breath, I put the key into
            the door and turned it, and heard a click. I pushed the door open.
          </p>

          <p>
            Sitting there looking back at me was Tisiel. "Breaking into a ladies
            room without even knocking what kind of man are you?" She questioned
            me.
          </p>
          <p>"Wait I can explain!" I exclaimed.</p>
          <p>
            "What you gonna tell me you found a book in the old library with
            strange symbols, similar to the door? And made the great deduction
            there must be more clues hidden in this room?" She quizzed me.
          </p>
          <p>"Yes?" I replied, confused.</p>
          <p>
            She burst into laughter. "Ahahaha, it is my book. Can't believe how
            quickly that worked. You picked up the book with your own name on...
            Otto the mighty mage? really?" She said holding her belly as she
            laughed every other word.
          </p>
          <p>
            "Hey it's not like the other mages had normal names. How did you
            know I would go to the old library and look though the books
            anyway?" I asked.
          </p>
          <p>
            "Truthfully I didn't. Just took a chance, to see if you where
            interested in the door or knew anything about it. Thats why I showed
            you around, no one else had taken any real interest in it. So do you
            want to know whats behind the door?" she asked.
          </p>
          <p>
            "Well, yeah" I replied, it was obvious wasn't it? I already tried to
            sneak into her room to find clues by myself.
          </p>
          <p>
            "Well come in, and give me my key back. There was a book in that old
            library with strange signs on like the door, I found it weeks before
            your arrival. I managed to decipher some of it and it is the
            location of a ruin just north of here. Also hidden inside the book
            was this ring." She said picking up a ring off her desk and putting
            it in her palm. It was small, dark grey with red glowing symbols all
            around it.
          </p>
          <p>"What does the ring do?" I asked.</p>
          {/* Here - Major rewrite? */}
          <p>"I think it is a key, to the place shown in the book." She exclaimed.</p>
          <p>
            "So when do you wanna go? I am free now." I said looking at the
            glowing ring.
          </p>
          <p>"We can set off shortly if you are that keen. Just let me get my gear ready." she said. She moved to her wardrobe and started to pull of leather belts and bags strapping them under her academy robe.</p>
          <p>"You seem like you have done this before." I said looking at the gear she was putting into the bags.</p>
          <p>"Yeah. My parents are historians. They love solving puzzles and finding out about the history of the world first hand. They often took me with them when they went to a new site to dig up and translate lost text." She said while finishing putting things into her bags the last item being the book on her desk she was talking about.</p>
          <div className="BreakPoint"></div>

          <p>Later out in front of the cliff side.</p>
          <p className="stats">
            <li>Name: Otto.</li>
            <li>Level: 8.</li>
            <li>Primary Class: Mage.</li>
            <li>Spells: 6.</li>
            {/* <!-- Mana ball, Tether, Magic resistance, Magic up, Strike (no element)  Magic regen--> */}
            <li>Titles: 1.</li>
            <li>Spell points: 2.</li>
            <li>Stat points: 8.</li>
            <li>Stats:</li>
            <li>Strength: 0</li>
            <li>Vitality: 0</li>
            <li>Endurance: 0</li>
            <li>Magic: 10</li>
            {/* <!-- +1 From the title magic up --> */}
            <li>Willpower: 1</li>
            {/* <!-- Magic resistance --> */}
            <li>Dexterity: 0</li>
            <li>Sense: 1</li>
            <li>Charisma: 2</li>
          </p>
          <Spells spells={["Mana Ball", "Tether", "Magic Resistance", "Magic Up", "Strike", "Magic Regen"]} />
          {/* Spells div? */}

          <p>
            "Whats that face?" Tisiel asked walking out from the large door
            embedded into the cliff.
          </p>
          <p>
            "Can't put any more points into magic. Why?" I asked look at my
            status screen.
          </p>
          <p>
            "You can't put more points in then the level you are, points for
            items and your titles go on top of that. You should really know
            that..." She said pouting. Maybe I was told it but I forgot.
          </p>
          <p>
            "I see, then, I am not sure what other stats to get." I replied a
            little disappointed, but I also felt like it made sense or everyone
            would just stack one stat.
          </p>
          <p>
            "Yeah, fighters have it easier, strength and either vitality or
            dexterity. For me I picked Magic and Sense, since I want to be an
            explorer." She replied.
          </p>
          <p>
            "I should pick vitality, endurance, willpower, dexterity maybe
            charisma..." I said.
          </p>
          <p>"You are just naming all of them." She laughed.</p>
          <p>"Urgh I can't decide!" I was frustrated.</p>
          <p>"Lets just go, you can pick on the way." She said.</p>
          <p>
            "An explorer though? How come? I am going to be a battle mage in the
            army." I said excited.
          </p>
          <p>"Well, like I said in my room my parents travel often to historical sites and I had to go with them. I met adventures and the like, now I want to become an adventurer and travel the world. Who knows I might end up like my parents digging up treasures and solving mysteries." She replied.</p>
          <p>
            We walked north of the cliffs away from the academy. The path soon
            became more dirt then stone, and finally mud. It was not like the
            paths around the cliff side were all stone but at least there was
            some. After about 40 minutes we arrive at the ruin, it was layed out
            in a square with black metal spikes protruding from the ground all
            around making a wall. They where too close to each other for us to
            squeeze though but that was not the main problem. Passing between
            the spikes was an eerie ghost like gas.
          </p>

          <p>"Take it there is no gate?" I asked looking at the gas.</p>
          <p>
            "I can't see one." She replied. "However the book, if I understood
            it correctly the ring should be placed on the alter to open doors.
            This wall was not in the book."
          </p>
          <p>
            I looked about before spotting what could be an alter I guess. It
            looked like a small desk with a tiny spike sticking out of the
            middle of it. "Try putting the ring on the spike?" I said, a little
            unsure.
          </p>
          <p>
            "You put it on the spike, if you didn't notice the it is behind the
            spikes and gas. I am sure I would lose my hand if I did that." She then kicked a stone into the wall of gas and it disappeared. I could not prove it but I don't think the stone landed on the other side but really left this world. She turned and held out the ring in her hand.
          </p>
          <p>
            With a shake of my head I picked up the ring from Tisiel's hand and
            placed it on my own. I then pushed my mana though the tip of my
            finger and it came out like a rope. Attaching the ring to the end of
            the rope like tether, it stuck when I willed it to grab the ring.
            Pushing the tethered ring into the gas I was surprised when nothing
            happened, pushing it past the bars and out and placing it on the
            alter.
          </p>

          <p>
            We looked at each other when nothing happened. Then bars shoot into
            the ground in an instant and the gas dissipated. Behind was left
            grave stones, grass and a small stone mausoleum in the middle.
          </p>

          <p>
            "Ladies first." I said, holding out my open palm like a gentleman.
          </p>
          <p>"Get moving you coward." Tisiel retorted.</p>

          <p>"No zombies, surprising." I said walking in first.</p>
          <p>"Don't jinx it." She said poking me in the back.</p>
          <p>"Grab the ring?" I said as we got near the alter.</p>
          <p>"On the way out, same method or we die." She pointed out.</p>
          <p>"Glad I asked..." I said walking past it.</p>
          {/* The stone statues around that attack later!  */}
          {/* Open the door to what!? mausoleum */}
          <p>
            Opening the door and looking around inside, the pair see nothing,
            it's dark so we cast mage light, mana gathers in the palm of their
            hands and gives off a small blue glow.
          </p>

          <p>
            "That is the light from the cliff side. In the small towers!" I said
            wondering who had filled the hall with lights.
          </p>
          <p>
            "Yeah I mean, it's a common and useful spell. Almost everyone has
            it." She replied like it was obvious. Now I feel dumb.
          </p>
          <p>"Ah." Was all that came out of my mouth.</p>
          <p>
            Inside was three stone boxes, the length and width of a man. Well
            let's call them what they look like, coffins. On top of each was a
            stone carved figure. A woman and a man.
          </p>
          <p>
            "Sarcophagus, Alden nobles are buried like this even today." Tisiel
            explained.
          </p>
          <p>
            "I did not know that. Our dead are buried near the village, in the
            ground." I said.
          </p>
          <p>
            "We burn ours. Since you took money from a dead girl before, guess
            you won't mind breaking open some ones resting place?" She said. I
            had forgotten she was from the Kingdom and not Alden. Clearly she
            had been living in Alden a long time as her Aldenese was perfect.
          </p>
          <p>
            "I don't mind, but you make me sound like a bad guy..." I said
            thinking back to the first time I told her I used the money from a
            dead girl to pay for dinner.
          </p>
          <p>
            Tisiel just smiled as she crouched down opened a book she got from a pack on her waist. She started reading though it marking her fingers along the signs on the stone sarcophagus. I wanted to know what it said but also if Tisiel could even read this script. It was clearly old and did not resemble Aldenese at all. I wanted to guess more about it but in the end I was only 14 and what did I know about the academy, it's history or even other languages.
          </p>
          <p>
            I started pushing the stone lid to one side. In the first I saw a skeleton
            of a woman, probably. There was a woman carved on top and her fingers had rings on them. her spine had a necklace resting on it and behind her skull wsa a tiara. Each of them looked expensive. I had seen jewelry before, and magic items but they where usually gems placed onto a band of metal. These though the metal was crafted into scenes with monsters and animals and humans all around each item. As I was inspecting the tiara Tisiel looked up at me strange look.
          </p>
          <p>"I remember this being your idea, you might need them" I said.</p>
          <p>
            She just rolled her eyes and went back to studying the signs
            around the sarcophaguses. In the second was the skeleton of a man (I guess). With a
            wand, crown and one ring. The third contained another woman, with similar jewelry
            and one coin. Making small pile of loot on the ground I turned to
            Tisiel.
          </p>
          <p>"Learn anything?" I asked</p>
          <p>"I will have to keep coming here to read these, but the
          words I think I understand. This one means king, this one you opened first has the word queen and the
          final grave you robbed... I would guess princess. It has a crown shape like the others but smaller then the queen." Tisiel said.
          </p>
          <p>"I am not sure if having a crown makes you a king, they seemed to have no subjects. There is nothing around here just this tomb. You think they died at the same time? Since they are all here together." I asked.</p>
          <p>"No real evidence of that. Not every one buries their dead next to where they live. There are some in the kingdom who build tombs for their families deep into the desert away from were they live and every time a family member dies they just add to that tomb. Let's see what you found." She said looking at my small pile of loot.</p>
          <p>
            Tisiel looked though the items before deciding she had no idea which
            where important and which where not. We did not have all the time in the world so I interrupted her inspections. "Look away for a moment."
          </p>
          <p>"Why?" She said holding onto one of the rings. It was the kings ring with the image of a skull engraved into the top.</p>
          <p>"Secret." I replied.</p>
          <p>"Fine, but no funny stuff." She said walking to the corner to show me she was not looking.</p>
          <p>"Like I would..." I muttered.</p>
          <p>
            I took out the wand I had got in Banderdam and passed mana though it before placing it back.
            I then moved the kings crown, wand & ring to once side. The
            Queens tiara & ring. The princesses coin also. "You can look again"
          </p>
          <p>"I had to wait for you to make two piles?" Tisiel said turning back around and coming back.</p>
          <p>"The ones in this pile contain magic, the others don't" I replied.</p>
          <p>
            "I won't ask how but it would be amazing if they still
            contain magic, it must of been centuries since anyone came here.
            Let's get them all back to the cliff sides. I can use my skills to decipher these items
            and tell you what they all do." Tisiel said.
          </p>

          <p>"Sure, let's put them in your bag, keep them safe." I said not really minding. I could identify the mana inside them and get the stats. With my numeracy talent it is likely my stats would be closer then Tisiel could get but then that won't help finding out about the history or further clues they may provide about the door in the cliff side.</p>
          {/* I refer you to further up where you need to write about the battle mage and Tisiel's parents and dream. */}
          <p>
            When we stepped outside the mausoleum, the stone statues that made up some of the tomb stones started to shudder. Cracks started to show and they fell to pieces dropping to the ground with a thud. There was a large statue in the middle still standing. (Looks here, google graveyard golem) The cracks were there but it maintained its form. Suddenly it raised its foot and started moving towards us. We did not have to say anything and split running in separate directions.</p>

          {/* Was strike ever explained before this? */}
          <p>I turned to see the golem running after Tisiel, I slowed down and
          decided to double back and help. Running up to the golem I cast 'Strike' and the golem became enraged as the mana struck down from above him landing on his arm. The crack in his shoulder filled with the mana and threatened to tare his arm off. "Tisiel, attack it." I shouted. Tisiel turned and thew a ball of mana into it. One arm broke off and seeing that manaball can be used
          as a weapon, I joined in and created a ball of mana in the palm of my hand and slammed it into the golem. Under the bombardment soon the golem fell apart with a creepy cry of anguish.
          </p>

          <p>
            "They must of all been guardians for the tomb right? For them to be so weak...
            Some of them even broke apart when activated." I said quietly.
          </p>
          <p>"More impressive that this one even activated, but that could
          help us determine the age of this place." Tisiel said between quick breaths.
          </p>
          <p>
            "Been meaning to ask, if this place has been here so long and the door, don't you
            think someone else would of opened the door by now? Or know what it
            was or what this graveyard is?" I asked. It was not like the academy was lacking cleaver people or did not have the abilities we had.
          </p>
          <p>
            "It's possible, but the fun is in the discovery. Now get
            the ring with tether and let's leave before something else comes to
            life." Tisiel replied walking past the alter.
          </p>
          <p>
            Tisiel practically locked herself in her room for a few days, only
            coming out to go to lessons and eat. I went to check on her
            everyday, it was amazing how quickly she seemed to be learning the ancient language.
          </p>
          {/* <!-- Class - Past level 10 --> */}
          {/* <!-- This class recommends areas for leveling up to 10, and what you should do after reaching level 10 , 1 point per spell until level 30, different elements. --> */}
        </div>
      </div>
    </div>
  );
}
export default intro;
