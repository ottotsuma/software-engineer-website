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
                    Aldenese Rebellion have taken the town of Shapold, a short
                    stones throw away from where the 1st (Wienengen) Regiment is
                    based. This regiment was formed in 1 Leigh year during the
                    Aldenese Crusade.
                  </p>
                  <p id="News">
                    This regiment was formed to fend off and push back the Alden
                    crusaders, it achieved its purpose and captured towns below
                    the Rotenzell river. Since then the regiment has seen
                    previous rebellions in the area as well as monster hoards.
                  </p>
                </div>
                <h4 id="Small-Headline">Is Baberg in trouble!?</h4>
                <div className="Newspaper-Content">
                  <p id="News">
                    Shapold is 78Km as the bird flies until Baberg. While that
                    route is not straight it does put the rebels on a road
                    behind Wienengen where the regiment is based. If the
                    regiment stays to deal with the threat in Shapold,
                  </p>
                  <p id="News">
                    that could leave the town of Shal undefended, which has a
                    direct river route to Baberg. On the other hand if the
                    regiment moves south to secure Shal that leaves the road to
                    Baberg open from Shapold.
                  </p>
                </div>
              </div>
              <div className="Newspaper-Right">
                <img id="Newspaper-Image" alt="Shapold" src={Shapold} />
                <h4 id="Small-Headline">Nektarios Lamprallis The Madder!</h4>
                <div className="Newspaper-Content">
                  <p id="News">Nektarios Lamprallis the mad, general who led the Huonhians against the sea people 10 years ago has been given the title 'Totally mad'. <br />In a recent investigation into missing funds it was discovered Nektarios had been using large sums of money making fancy hats to protect us from the moon people.</p>
                  <p id="News">When questioned the the governor of the city of Huonhoa said the funds will now be redirected to the ongoing 'Gianlongian Drought'. <br /> <br /> Nektarios will be taking an retirement in Kargi. Where and I quote the governor. 'He can do no more harm.'</p>
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
