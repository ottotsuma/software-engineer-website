import React from "react";
import Item from './../elements/item'
import { Content } from "./styles";
import Hover from "../elements/hover";
import { Otto, Leon, Pal } from "./CharacterFonts";


// The scene captures the essence of exploration and discovery in a new city through Otto's fresh perspective, while also showcasing the interactions with the shopkeeper and Leon. The descriptions of Banderedam’s architecture, the bustling market streets, and the magical items in the shop create a vibrant, immersive world. The interaction with Pal, the shopkeeper, adds depth by blending the video game-like elements of item purchasing with Otto’s unfamiliarity with the customs and magic system. The scene in the café also introduces a unique local dish, further immersing Otto in the culture of the city, and sets the stage for more interactions between him and Leon.

// Sensory details: You could add more details about what Otto is feeling, smelling, or hearing to heighten the sense of being in a foreign place.
// Subtle exposition: Leon could share tidbits about the city’s history or its connection to the academy to naturally explain its significance to Otto without it feeling forced.
// Character dynamics: Highlight more of the relationship between Otto and Leon, showing their dynamic as a local and an outsider. Leon could offer subtle hints about Otto’s naive expectations or future challenges.

// Otto’s Perspective
// To highlight Otto as an outsider, you could dig deeper into his emotional reactions. What is he feeling as he sees this new place? Awe? Intimidation? Curiosity? This would help the reader connect with Otto as he navigates new experiences and customs. His thoughts on magical items could be more reflective, offering insights into how foreign or exciting this world feels to him.

// Leon as a Guide
// Leon’s role as a local guide is important, but it can also be expanded to give him more depth. Perhaps he has a personal connection to the city’s past or the shop. Their conversation could reveal more about Leon’s life, motivations, or connection to Otto beyond the surface-level guide role.

// The Shop and Magical Items
// The magical shop scene has good detail, but this could be an opportunity to hint at future conflicts or themes. The soul-bound wand could represent something darker or be connected to the world’s history. The shopkeeper could share stories that Otto doesn’t fully understand yet, but which gain meaning later on. Adding a sense of mystery or danger could enrich this encounter.

// Food and Culture
// When they visit the café, there’s an opportunity to explore more of the local culture. The food can reveal insights into the city’s blend of old and new influences, and Leon could explain how traditions have changed since the city was divided.

// Story Wheel
// Since you’re following the hero’s journey structure, this chapter could align with the "Crossing the Threshold" stage. Otto is entering a new world, the magical city and academy, and needs to be tested in small ways. Perhaps he makes a mistake, gets overwhelmed, or experiences doubt, all of which set the tone for future challenges.

// 1. Physical Transition into the Unknown
// Crossing the bridge into Banderedam and passing through the gates can symbolically represent Otto stepping into the magical, unfamiliar world. The bridge itself can be described as a threshold, with a palpable shift in atmosphere as Otto steps from the countryside into the city.

// Example: “As we crossed the small stone bridge over the Chitna, I felt a subtle shift. The air seemed heavier, charged with the hum of magic. The drawbridge creaked beneath my feet, as though groaning under the weight of the city’s long history. Beyond the gate, the world I knew was gone.”

// This would make Otto more aware of the significance of this step, creating a more introspective moment that aligns with the idea of the threshold.

// 2. Emotional and Psychological Threshold
// Otto could experience some internal conflict or self-doubt as he enters the city. This city and academy represent the unknown for him, and we should see his realization that there is no turning back. We can lean into his emotions here—whether it’s excitement, fear, or both.

// Example: “Standing before the city gates, a part of me hesitated. Everything I knew lay behind me. What if I wasn’t ready? The thought flickered through my mind, but Leon’s easy confidence kept me moving forward. ‘You’ll get used to it,’ he said. I wanted to believe him.”

// This helps readers connect with Otto's inner journey, showing his crossing not just as a physical step but an emotional one as well.

// 3. Encountering the Gatekeeper
// In the hero’s journey, the protagonist often meets a gatekeeper figure who either challenges or helps them enter the new world. The checkpoint before the city could serve this function, even if it’s just a simple interaction. Perhaps the guards ask probing questions or scrutinize Otto’s documents, making him feel like an outsider.

// Example: “The guard at the checkpoint eyed me with suspicion. ‘What’s your business here?’ ‘I’m a student,’ I said, handing him my letter of introduction. My fingers felt numb around the parchment. The guard inspected it, then glanced up at me. For a moment, I thought he’d turn me away. But then, with a grunt, he waved me through. My heart only started beating again once I stepped past him.”

// This interaction makes Otto feel like he’s earned entry, solidifying the transition.

// 4. Entering a World with New Rules
// Once inside the city, Otto could be struck by the sheer difference in culture, magic, and people. The busy streets, magical items for sale, and local customs should feel overwhelming or strange to him. His guide, Leon, can explain some things, but there should still be moments of confusion or awe for Otto. This stage is about discovering the "rules" of the new world, which could involve magic, power dynamics, or cultural differences.

// Example: “Everywhere I looked, there were strange symbols, glimmering artifacts, and people dressed in robes of fine silk, adorned with sigils I couldn’t decipher. Students passed us in groups, their chatter filled with magical jargon I didn’t understand. I suddenly felt small, like I was wading into deep water, barely keeping afloat.”

// This emphasizes Otto's role as an outsider and sets the stage for future learning and growth.

// 5. Leon as the Mentor/Guide
// Leon’s role here can be deepened to reflect the mentor figure, someone who helps Otto understand the new world. He can guide Otto, offer advice, and point out the differences in customs, especially since Leon is more comfortable in this city.

// Example: “‘You’ll get used to the crowds,’ Leon said as we made our way through the bustling streets. ‘Banderedam has a rhythm to it. You just have to find yours.’ He pointed out a stall selling enchanted quills. ‘Everything here has some kind of magic, even the food. Stick with me, and you’ll figure it out soon enough.’”

// This cements Leon’s role as Otto’s guide into this new world, helping Otto navigate his initial discomfort.

// 6. Magical Items as Tests
// The scene in the magical shop with the soul-bound wand could be expanded to reflect a test or trial. Perhaps the wand gives Otto a strange reaction, or he feels its power in a way that unnerves him. The shopkeeper could also serve as a minor mentor or trickster figure, offering advice or cryptic warnings.

// Example: “As I touched the soul-bound wand, a surge of energy shot through me, like a spark leaping from a fire. My vision blurred, and for a moment, I thought I could hear whispers—voices too faint to understand. I pulled my hand back, heart racing. ‘That one’s not for you,’ the shopkeeper said with a chuckle. ‘Not yet, anyway.’”

// This moment can foreshadow future conflicts and introduce the idea that Otto is still learning about his own magical abilities.

// 7. Cultural Shock in the Café
// The food scene could play a bigger role in highlighting Otto’s unfamiliarity with the local customs. The Főzelék is a small but significant detail, showing Otto’s first experience with the local cuisine. Leon’s casual familiarity with it contrasts with Otto’s uncertainty, reinforcing the idea that Otto has truly entered a new world.

// Example: “The thick stew, or whatever it was, had a strange texture—almost too thick, like it was trying to glue itself to my mouth. Leon ate his bowl with gusto, clearly used to it. ‘It’s... interesting,’ I said, trying to be polite. He laughed. ‘You’ll either love it or hate it. Give it time.’”

// Dead girl, corps fish 
function Banderedam(props) {
  return (
    <Content>
      <div className="Frame">
        <div className="Content">
          <h4>Crossing Into Banderedam</h4>
          <Otto>
            {/* matriculations. */}
            Arriving before the city of Banderedam, I felt a shift in the air. The trail that had led us here was filled with groups of students, their chatter merging with the sound of the nearby river Chitna. The city itself stood across a small stone bridge, its towers looming over us like silent sentinels. The bridge reached out from the bank of the river with a gap before the city, a wooden drawbridge finished off the distance taking people to the entrance—a crossing into a world I barely understood.
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
            The drawbridge creaked beneath my feet as I followed Leon, feeling the cool shadow of the towers looming over me. The square towers along the walls were familiar, but the new circular ones near the gatehouse gave the city an recently refreshed looking face. Even the wooden roof that connected the towers over the gate felt new, rebuilt as if the city was trying to find balance between its past and its future.
          </Otto>
          <Otto>
            Ahead of us was a temporary checkpoint, splitting students from regular traffic. The guards were checking everyone carefully, and as we got closer, I felt my heart quicken. I reached into my bag, pulling out the letter of introduction to the magic academy, along with my village ID. The paper felt rough in my hands—more real than anything I had encountered so far.
          </Otto>

          <Otto>
            The guard glanced at my letter and then at me. “First time in Banderedam?” His voice was rough, but not unkind.
          </Otto>
          <Otto>
            I nodded, trying not to look too out of place. “I’m here for the academy.”
          </Otto>
          <Otto>
            He examined the parchment carefully, his eyes lingering on the academy’s seal before handing it back. “Everything checks out. Don’t cause trouble, and you’ll be fine. Go on.”
          </Otto>
          <Otto>
            As I passed, a strange sense of relief and anxiety washed over me. The moment felt heavier than it should have—like I’d crossed a line that couldn’t be uncrossed. I turned to Leon, but he seemed as at ease as ever, chatting with another guard he clearly knew. He waved me along, and I followed him into the city.
          </Otto>
          {/* The City of Banderedam */}

          {/*  the buildings clearly had been built
            with space between them to avoid fires but smaller temporary
            structures  */}

          <Otto>
            Banderedam was alive in a way I hadn’t expected. As we moved through the streets, I couldn’t help but feel small amid the chaos. Students, travelers, and locals all jostled for space. Merchants lined the streets, their carts overflowing with goods from the port towns of Tirnadepal and Tirnavalli—exotic fruits, fine silks, and magical trinkets I couldn’t even name. The scent of food mixed with the salty breeze from the nearby river, and somewhere in the distance, I heard the hum of magic.
          </Otto>
          <Leon>
            "Stick close," Leon said, sensing my discomfort. "You’ll get used to it. Banderedam has its own rhythm."
          </Leon>
          <Otto>
            I nodded, but the feeling of being an outsider was hard to shake. Everywhere I looked, there were things I didn’t understand—artifacts glowing faintly with magic, people muttering words in languages I couldn’t recognize, and students dressed in robes bearing strange sigils. It was overwhelming, and I realized with a sinking feeling that this world was far bigger and more complex than I had imagined.
          </Otto>
          <Otto>
            Leon led me to the shop where he worked, nestled between two taller buildings. It was older than most of the surrounding structures, and as we entered, the door creaked like it hadn’t been oiled in years. Inside, the air felt still—almost too still—and yet there was a hum, a pulse of magic, that I could feel under my skin.
          </Otto>
          <Otto>
            The shop was spotless, the shelves lined with glass cases filled with wands. Some were simple, almost rustic, while others looked too delicate to touch. Each had a card next to it with a description and a price, but one wand in particular caught my eye—a dark, twisted wand with an aura that made me shiver.
          </Otto>
          {/* The Shop of Magical Wonders */}
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

          {/* <!-- pal Meaning:Small; Little one; Protector; Keeper. Meaning “small” or “little one,” Pal is a boy's name of Latin origin --> */}
          <Pal>“That one’s not for you,” a voice said from behind me. I turned to see a small, older man with a wide grin. “First time here?”</Pal>
          <Otto>
            I nodded, my eyes still lingering on the strange wand. “What even is that?”
          </Otto>
          <Pal>“Ah, the soul-bound wand,” the shopkeeper said, his voice low. “Not all items are made, you know. Some are... found. Or dropped, if you catch my meaning.”</Pal>
          <Otto>
            I didn’t, but I nodded anyway.
          </Otto>
          <Pal>
            “Let me help you out. I’m Pal, by the way,” he said, stretching out his hand. True to his name, he was a short man, barely coming up to my shoulder. I shook his hand, feeling the calluses of a craftsman.
          </Pal>
          <Pal>
            “What kind of wand are you looking for?” he asked, laying out three wands before me. “These are beginner-friendly. They’ll adapt to your level, so you won’t burn yourself out using them.”
          </Pal>
          <Otto>
            I stared at the wands, each one different, each one humming with potential. “Can I try this one?” I asked, pointing to a slim, dark oak wand with runes carved into the handle. It felt right somehow, like it belonged in my hand.
          </Otto>
          <Pal>
            Pal grinned. “Of course. Go on, give it a try. Push your mana into it, just a little, and see what happens.”
          </Pal>
          <Otto>
            I hesitated but then focused, pushing my mana into the wand. As it flowed through, it felt like my arm extended beyond its normal reach. Suddenly, my vision exploded with color—pulses of light and magic swirling in every direction.
          </Otto>
          <Otto>
            I blinked, overwhelmed. “Why are there so many different colors?”
          </Otto>
          <Pal>
            Pal chuckled softly, clearly enjoying my awe. “Those colors? They represent different types of magic. See, each enchanted item in this shop holds a unique kind of magic. The different hues reflect the enchantments—blue for neutral magic, dark-green for woodland, fire-red for fire, and so on. And that,” he gestured to the glowing display before me, “is why this wand is so useful. It’s a tool for detecting magic—whether it’s the magic of an opponent in combat or hidden enchantments when you’re exploring new places.”
          </Pal>
          <Otto>
            I stared at the wand, the power thrumming in my hand. It was more than I had expected. “So... I can use this to figure out what kind of magic someone is using? Or to find magical items?”
          </Otto>
          <Pal>
            “Exactly,” Pal nodded. “Of course, it still costs mana to use, and you’ll have to concentrate. But it’s incredibly useful. Think of it as your sixth sense in a world where magic is everywhere. It’ll help keep you from being caught off guard.”
          </Pal>
          <Otto>
            The idea of detecting hidden magic or sensing an opponent’s magic type was tempting. My curiosity burned stronger now. “How much is it?”
          </Otto>
          <Pal>
            “¤100,000,” Pal replied, still smiling. “Same price as the others, but this one’s far more practical for someone just starting out.”
          </Pal>
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
          <Otto>
            I thought for a moment, then nodded. “I’ll take it.”
          </Otto>
          <Pal>
            Pal grinned, clearly pleased. “Good choice. You’re going to find it very handy. Just remember to keep it on you when you're out in the field—it’ll save your skin more times than you think.”
          </Pal>
          <Otto>
            After shaking Pal’s hand and thanking him, I tucked the wand away. The experience had left me breathless, but also hungry for more. This was just the beginning.
          </Otto>

          {/* // Főzelékfaló Café */}
          <p>
            After leaving the shop, I followed Leon to a small café tucked into the castle district, its name written in flowing script: Főzelékfaló. The smell of cooking vegetables greeted us as we entered, and Leon ordered for both of us. He recommended a dish called főzelék—a thick vegetable stew.
          </p>
          <Otto>
            When the bowl arrived, I wasn’t sure what to make of it. The texture was strange, almost too thick, like it was trying to glue itself to my mouth. But the taste—earthy and rich—was unlike anything I’d ever had.
          </Otto>
          <div className="pop">
            Főzelék
            <img
              className="popOut"
              height="400px"
              src="https://ottotsuma.github.io/images/misc/F%C5%91zel%C3%A9k.jpg"
              alt="Főzelék"
            />
          </div>
          <Leon>
            "Good, right?" Leon said, his voice muffled by the bread in his mouth.
          </Leon>
          <Otto>
            I swallowed, nodding. "It’s... interesting. I don’t think I’ve ever had anything like it."
          </Otto>
          <Leon>
            He laughed. "You’ll get used to it. My sister makes it better than this place, though. You should come visit sometime. Two years at the academy—you’ll have time."
          </Leon>
          <Otto>
            I nodded again, feeling a strange sense of comfort. As unfamiliar as this city was, I was starting to realize that I wasn’t entirely alone. I had Leon, and maybe in time, I’d understand this new world.
          </Otto>
          <Otto>
            For now, though, the academy waited. And with it, the next stage of my journey.
          </Otto>
        </div>
      </div>
    </Content>
  );
}
export default Banderedam;
