import React from "react";

function intro(props) {
  return (
    <div className="Monad" id="3">
      <div className="Frame">
        <div className="Content">
          <h4>Rest period</h4>
          {/* <!-- cross dressing wizard --> */}
          {/* Dueling and Combat. */}
          {/* Monster is about subjugating monsters, command taking control of a small force, combat, dueling */}
          <p>I woke early and ran down to the area, the training stones where not as busy as yesterday but I am sure they will be later. For now only a few students milled about. I went straight over to the combat stone. I ran into a problem right away, the combat stone was for groups. It was a way to fight against other groups practice your team work.</p>

          <p>Mmm no worries, this might be useful in the future but right now I need to train myself. The only major training area left was the duels. This area was still busy unfortunately. </p>
          {/* <!-- Tisiel's door, left a note for you.  --> */}
          <div className="Note">
            <h4 id="Fancy">
              To Otto,
            </h4>
            <p id="Fancy">
                Meet me in my room, I made a break though in the language.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default intro;
