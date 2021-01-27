import React from "react";
import Shapold from "./../../assets/shapold.png";

function intro(props) {
  return (
    <div className="Monad" id="3">
      <div className="Frame">
        <div className="Content">
          {/* <!-- Dinner - Staff and students --> */}
          {/* <!-- <h3>Meet Tsuma as witch princess from Leikia.</h3> --> */}
          {/* <!-- Date 2 --> */}
          <h4>Play Date</h4>
          <div className="Newspaper">
            <div className="Card-Middle"></div>
            <h2 className="Newspaper-Headline" id="Headline">
              Newspaper
            </h2>
            <div className="Newspaper-Content">
              <div className="Newspaper-Left">
                <h4 id="Small-Headline">
                  Aldenese Rebellion have taken the town of Shapold.
                </h4>
                <div className="Newspaper-Content">
                  <p id="News">
                    Aldenese Rebellion have taken the town of Shapold, a short stones throw away from where the
                    1st (Wienengen) Regiment is based. This regiment was formed
                    in 1 Leigh year during the Aldenese Crusade.
                  </p>
                  <p id="News">
                    This regiment was formed to fend off and push back the Alden crusaders, it achieved its purpose and captured towns below the Rotenzell river. Since then the regiment has seen previous rebellions in the area as well as monster hoards.
                  </p>
                </div>
                <h4 id="Small-Headline">
                  Is Baberg in trouble!?
                </h4>
                <div className="Newspaper-Content">
                  <p id="News">
                    Aldenese Rebellion have taken the town of Shapold where the
                    1st (Wienengen) Regiment is based. This regiment was formed
                    in 1 Leigh year during the Aldenese Crusade.
                  </p>
                  <p id="News">
                    Aldenese Rebellion have taken the town of Shapold where the
                    1st (Wienengen) Regiment is based. This regiment was formed
                    in 1 Leigh year during the Aldenese Crusade.
                  </p>
                </div>
              </div>
              <div className="Newspaper-Right">
                <img id="Newspaper-Image" alt="Shapold" src={Shapold} />
                <h4 id="Small-Headline">Right Sub Headline</h4>
                <div className="Newspaper-Content">
                <p id="News">Right things</p>
                <p id="News">Right things</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default intro;
