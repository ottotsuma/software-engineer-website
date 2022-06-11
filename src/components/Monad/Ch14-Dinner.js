import React from "react";
import SeaPeopleFunction from "./SeaPeople"; // 5
import { Content } from "./styles";
import { Otto, System, Tsuma, Tisiel, Reingard, Shrorlei, Ralsan } from "./CharacterFonts";
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
            "I think we lost him." Ralsan teased, I did not hear it at the time though.
          </Ralsan>
          <Otto>
            "Excuse me." I quickly 
          </Otto>
          <p>
            He excused himself as hastily has he could and made his way across
            the room to try and strike up a conversation with her only to be
            caught by old professor Farald, I heard from young Daniel you where
            curious about how the duel system works. Unable to escape he had to
            hope he could find her later.
          </p>

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
