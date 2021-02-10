import React from "react";
function intro(props) {
  return (
    <div className="Monad" id="3">
      <div className="Frame">
        <div className="Content">
          <h4>Title</h4>
          <p>
            I had new spells, I still needed to level up some more but I had
            more points to spend then before. I could make up for the difference
            with items or titles. Right now I am missing even a weapon.
          </p>
          <p class="equipment">Equipment:
          {/* https://www.sacred-texts.com/cfu/mlc/mlc10.htm - obscure fire god from china */}
            <li>
              Head: <li className="Unique"> Heavenly White Stag Mask:</li>{" "}
              Magic: +1, Disease resistance + 20%, Mana regeneration + 10%,
              blessing of 建御雷 [Takemikazuchi].
            </li>
            <li>
              Body:<li className="Junk">Academy Robe (Black/Yellow).</li>
              Magic: +1, Lightning +1%, Health +10.
            </li>
            {/* <li>
              Body:<font color="blue"> Hui Lu's Battle Armor</font> ???
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
          </p>
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
        </div>
      </div>
    </div>
  );
}
export default intro;
