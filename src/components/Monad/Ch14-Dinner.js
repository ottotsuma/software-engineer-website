import React from "react";
import SeaPeopleFunction from "./SeaPeople"; // 5
import { Content } from "./styles";
import {
  Otto,
  System,
  Tsuma,
  Tisiel,
  Reingard,
  Shrorlei,
  Ralsan,
  Farald,
  Arrilian,
} from "./CharacterFonts";
function Intro(props) {
  // Re-enforce the charters, social hierarchy, why you cannot date a princess, love rivals.
  return (
    <Content>
      <div className="Frame">
        <div className="Content">
          <SeaPeopleFunction Chapter={5} />
          <div className="BreakPoint" />
          <h4>Dinner</h4>
          <Otto>
            The sound of Reingard and Tisiel flirting, Shrorlei groaning at them
            being embarrassing and Ralsan's laughter became dull in my ears. The
            sounds of the grand hall, the conversations, laughter and clanging
            of glasses all became dull. My body had become stiff, almost as if I
            had left my body the moment my eyes landed on a woman walking into
            the hall. She had midnight black, straight shoulder length hair and
            almond shaped eyes. She was wearing a deep blue dress which showed
            off her thin waist, and cut off at her shoulders giving a glimpse at
            her fresh snow white skin. She was so fairy like, seemingly gliding
            across the floor.
          </Otto>
          {/* Reingard, Tisiel, Shrorlei, Ralsan */}
          <Ralsan>
            "I think we lost him." Ralsan teased, I did not hear it at the time
            though.
          </Ralsan>
          <Otto>
            "Excuse me." I hastily replied without registering what Ralsan had
            said.
          </Otto>
          <Otto>
            I made my way between and around other groups which had congregated
            about the hall. Before I could reach my target however I was
            intercepted by old professor Farald.
          </Otto>
          <Farald>
            "Ah Otto! I heard from young Daniel you where curious about how the
            duel system works."
          </Farald>
          <Otto>
            "Ah, I was." I said trying to look past the professor to see if the
            girl had moved.
          </Otto>
          <Farald>
            "Oh are you no longer? I am quite busy you know, it's rare I come
            out of my lab for any event."
          </Farald>
          <Otto>
            "I still am! I'm sorry I thought I saw someone I knew..." I knew
            from Daniel that professor Farald was a hard man to get hold of, while that woman was clearly a one in a million goddess, the dinner party was still early.
          </Otto>
          <Farald>
            "Oh, I'm sure you'll have lots of time to reunite with your friends. presides I cannot be hanging around down here all night, we have VIP guests I have to meet and greet, it was my reason for coming to this event. However it's always nice to talk to an enthusiastic student." Farald said while pinching the end of his english style mustache, it was like a pencil mustache but with a small flick up in the middle giving it a bit more flare. "Well to state the obvious first, I of course did not build the ancient arena, despite how old I look. Around the edge of the arena, hidden under the seats, the creators installed a tube. This tube is connected to a controller, so that when the tube is filled with a continuous supply of mana the rules of the arena can be adjusted. The mana is what fuels its ability to teleport people to pre-set locations around the arena. I have been studying the device and it's magic carvings for years now. To tell you the truth, I have made a breakthrough recently that is why our VIP guests have come to our opening ceremony this year." 
          </Farald>
          <Arrilian>
            "I knew I would find you here professor." A very old gentleman with a beard the length of a forearm interrupted professor Farald. "If you have to speak of your breakthrough tonight, let it be those who have traveled a long way to be here tonight. The first year student's will have at least 2 years to come ask you questions at a later time."
          </Arrilian>
          <Farald>
            "When you are right, you are right. Sorry boy, looks like I don't have time for questions right now. Come find me in the future if you have any." professor Farald patted me shoulder before leaving with the older gentleman.
          </Farald>
          <p>
            To his luck and amazement there was a beautiful fairy-like goddess
            of a woman was still there, she had taken an interest in their
            conversation. Using this opportunity he introduced himself.
          </p>

          <p>
            "Hello, I am Otto a first year student, are you interested in this
            topic also?"
          </p>
          <p>
            "Ah, yes. I am very much so. I am" she paused for a moment, "you can
            call me Tsuma."
          </p>
          <p>
            "Nice to meet you Tsuma, your acescent are you from Niyosho? It's
            very loverly."
          </p>
          <p>"Yes, I came here as an exchange, I am in my second year here."</p>
          <p>
            "I must be off you two, if you need me for a longer discussion
            please leave me a message at my office, its in the research
            department I imagine you haven't been there before but anyone else
            should be able to point you in the right direction, please excuse
            me."
          </p>
          <p>
            "Oh no not at all professor, thank you for your knowledge." Both of
            the students gave a light bow as professor Farald made his way over
            to a group of other professors calling to him.
          </p>

          <p>
            "I believe the dinner is starting soon, would you like to join me?"
          </p>
          <p>"Ah that won't be possible the seats are arranged before hand."</p>
          <p>
            "How about a date? A short one, tonight after the dinner. I'd like
            to take you to a cafe and talk, I've never been to Niyosho so
            perhaps we can start there."
          </p>
          <p>
            "I..Yeah, I can do that. I'll wait for you under the autumn tree on
            your right as you leave through the main door."
          </p>
          <p>"Perfect."</p>

          {/* <!-- Tsuma has magic cat that turns black at night, white in the day and has purple eyes. --> */}

          {/* <!-- Call for dinner --> */}
          <p>
            Ding. Ding. Ding. "Please make your way into the dinning hall, name
            cards are at each place please find your own name card. A flag
            stands on each table you can match the flag to your invitation
            image."
          </p>

          <p>
            Inside the hall was numerous tables with flags standing proud above
            them. A large red and white flag with a black stag, this must be me.
            On the table where places for 10, no doubt I would be unable to
            converse with those places too far from myself. My place was to the
            right on the inner side of the table to the hall, not that it
            mattered the outer side was still 4 tables away from the nearest
            wall. To my right Reingard would be sat and my left Ebba.
          </p>
        </div>
      </div>
    </Content>
  );
}
export default Intro;
