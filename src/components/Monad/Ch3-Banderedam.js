import React from "react";
import Item from './../elements/item'
import { Content } from "./styles";
import Hover from "../elements/hover";
import { Otto, Leon, Pal } from "./CharacterFonts";

// Dead girl, corps fish 
function Banderedam(props) {
  return (
    <Content>
      <div className="Frame">
        <div className="Content">
          <h4>City of Banderedam</h4>
          <Otto>
            Arriving before the city of Banderedam, trails of students heading
            to the academy could be seen next to the city. The city itself was
            across a small stone bridge across the river Chitna, which ended
            just short of the city gate house, a wooden drawbridge made up for
            gap. There where square shaped towers all around the walls spaced
            apart, a wooden roof built atop. The gate house must of been rebuilt
            because the towers were built with a new circular design and stone
            roofs. There was a walled and roofed walkway between the two towers
            visible from the outside, as it ran over the gate house giving the
            defenders room to drop things onto attacks. Even the older towers
            and walls had matriculations.
          </Otto>
          <div className="pop">
            Banderedam
            <img
              className="popOut"
              height="400px"
              src="https://ottotsuma.github.io/images/places/Banderedam.jpg"
              alt="Banderedam"
            />
          </div>
          <Otto>
            Stationed in-front of the bridge was temporary check point, set up to split students from normal traffic for checking people before entering the city. With my letter of introduction to the magic academy and ID given to me by my village leader getting though the student entrance was easy.
          </Otto>
          {/* <p>
            After getting out of the boat, at the temporary station set up to
            deal with the large influx of students, we made our way to the town by
            foot.
          </p> */}
          <Otto>
            Leon lived there, and was able to pass through without issue. After meeting up again inside Leon took me to the shopping district, so he could drop off his package and show me the shop he worked at.
          </Otto>

          {/*  the buildings clearly had been built
            with space between them to avoid fires but smaller temporary
            structures  */}

          <Otto>
            The town inside was packed, students, locals and other travelers all moving up and down looking at carts set out by merchants and peddles sitting next to stores layed on cloth lining both sides of every street. The goods were coming from the ports of Tirnadepal and Tirnavalli, the two port towns that connected to Banderedam. The goods included food, cloth and other usual travel supplies but also books, inks, pens and other school supplies students would need.
          </Otto>

          <Otto>
            Leon took me to the shop that he worked at. He said the shop had been there since before
            Banderedam was apart of Alden, although it sold all kinds of magical items it was most known for wands. Inside was clean, really clean. Not a single spec of dust was anywhere to be found, the wands were
            displayed around the shop in glass cases on tables or set into the walls going up to the roof. Each wand had a card next to it with its description and price.
          </Otto>

          <Item
            stats={{
              Skill: "Third Eye",
              "Control minion": 1,
              sense: 1,
            }}
            name={'Soul bound wand'}
            effect='¤3,200,000'
            src={'https://ottotsuma.github.io/images/items/wand1.png'}
          />

          {/* <!-- Currency 
₳ ฿ ￠ ₡ ¢ ₢ ₵ ₫ € ￡ £ ₤ ₣ ƒ ₲ ₭ ₥ ₦ ₱ ＄ $ ₮ ₩ ￦ ¥ ￥ ₴ ¤ ₰ ៛ ₪ ₯ ₠ ₧ ₨ ௹ ﷼ ㍐ ৲ ৳ ₹
¤ - generic currency 
Mana coin currency. 
Vereinsthaler - old german silver coin 
Charlemagne in 794 decreed that a single silver penny (weighing 1.7 grams) should buy a dozen two-pound loaves of wheat bread. Somewhat later, Æthelstan, king of the English (924–39), laid down that the standard compensation for a sheep would be five pence, ten pence for a pig, twenty for a cow and thirty for an ox
--> */}

          <Otto>
            To put it bluntly, it was hard to miss. That wand stood out from the
            others, and not in a way that made him want to buy it. While
            thinking what kind of mad man would make such a thing, an older man came in.
          </Otto>
          <Pal>"First time? I wouldn't recommend that particular one"</Pal>
          <Otto>
            "Uh yeah, it's my first time here. I won't be getting that one, what
            even is it?" I replied.
          </Otto>
          <Pal>
            "Ah, not all items are made, some are dropped by beasts so it's
            hard to say. Let me help you out, this is my shop, I can do at least
            that much. Names Pal" He said his hand stretched out.
          </Pal>
          {/* <!-- pal Meaning:Small; Little one; Protector; Keeper. Meaning “small” or “little one,” Pal is a boy's name of Latin origin --> */}
          <Otto>
            True to his name he was a small man no more then 150cm, I reached
            out and shook his hand.
          </Otto>
          <Pal>
            "So first tell me, do you know what field you would like to go
            into?"
          </Pal>
          <Otto>
            "Sorry I am not sure."
          </Otto>

          <p>
            The shop keeper layed out 3 wands before me. "Nothing quite as fancy
            as some of the other wands, but at least useable by a beginner. Now
            I should explain the attributes displayed are reflective of my
            measurements, that is to say the exact effect it will have on will
            be reflective of your own level. Maybe a point lower, nothing more."
          </p>
          <p>
            "Ah yeah, my dad was an item inspector also. How much are they?" I asked
          </p>
          <p>"Same price, ¤100,000." He replied.</p>
          <p>"Less then I thought, more then I have." I admitted</p>
          <p>
            "Only students from noble houses pay with cash anyway, if you sign
            for something I can collect it later at the academy and they take it
            from your mission rewards, until they are paid back. Don't go crazy
            through they won't loan a first year more then ¤100,000." He
            explained.
          </p>
          <p>
            "Good thing the prices match then." I said with my eye brow arched.
          </p>
          <p>
            "Don't look at me like that, I already discounted them so you could
            afford it if you like them. I won't force you, no doubt you will be
            coming back for many years." He replied with his smile back on his
            face.
          </p>
          <p>
            "Ah, thank you" I bowed deeply. "Could I buy the detect magic wand?"
            I asked.
          </p>
          <p>"Feeling you might get lucky on a mission?" He questioned.</p>
          <p>
            "The opposite, feel like I will be unlucky and not spot something."
            I laughed.
          </p>
          <p>
            "It's yours, if I where you I'd keep it to yourself. Although it
            gives you access to the skill, still costs mana, you have to push
            your mana into the wand, through it and out the other side. Normally
            I ask people not to test wands in here but in this case it won't do
            any harm so give it ago." He said.
          </p>
          <p>
            "If you are sure." I pushed my mana into the wand, it flowed through
            like my arm is longer then normal feeling apart of myself as far as
            the mana is concerned and out the other side where upon my eye sight
            is filled in color. Almost all objects in the shop glow different
            strange colours.
          </p>
          <p>
            "Quite the show isn't it? Almost every item in here contains magic
            so, that's why." He said looking at my eyes.
          </p>
          <p>"Why are there so many colours?" I asked.</p>
          <p>
            "Different types of magic, like the manastone when you touch it
            turns purple-ish right?" He said.
          </p>
          <p>"Yeah" I replied.</p>
          <p>
            "Well" taking a mana stone out from his desk and leaving it in the
            palm of his hand, the stone turns from its usual sea blue to dark
            forest green. "Wood is my element."
          </p>
          <p>
            I nodded in understanding. After thanking the shop keeper again I
            left the shop with my new wand hidden away, heading to meet Leon at
            'Főzelékfaló' a small cafe in the castle area. I ordered Főzelék as
            Leon had recommended it. An interesting experience, tasted like
            thick vegetable stew although that description does it little
            justice.
          </p>

          <div className="pop">
            Főzelék
            <img
              className="popOut"
              height="400px"
              src="https://ottotsuma.github.io/images/misc/F%C5%91zel%C3%A9k.jpg"
              alt="Főzelék"
            />
          </div>

          <p>"Good isn't it?" Leon's voice came from behind me.</p>
          <p>
            "Yeah, I don't really know how to describe it, can you make it?" I
            replied.
          </p>
          <p>
            "Yeah I can, but not as well. If you want to learn my sister will be
            able to show you, I am sure you will get time to come visit us the
            minimum stay in the academy is 2 years after all."
          </p>
          <p>
            "I will, it's not like there are other towns near the academy, so I
            guess I will be coming often."
          </p>
          <p>
            "Aha you're welcome to, but you studies might be a little more
            intense then you think."
          </p>

          <p>
            After thanking Leon for showing me where to get a good meal, and
            introducing me to a reliable shop keeper. my journey to the Academy
            was only a few short hours walk from Banderedam, although the other
            students often chose to spend their money on rented mounts, I could
            not ride, and was bankrupt.
          </p>
        </div>
      </div>
    </Content>
  );
}
export default Banderedam;
