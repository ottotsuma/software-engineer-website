import React from "react";
function intro(props) {
  return (
    <div className="Monad" id="3">
      <div className="Frame">
        <div className="Content">
            <h4>

            </h4>
            <p></p>
            <p>Equipment:</p>
          {/* https://www.sacred-texts.com/cfu/mlc/mlc10.htm - obscure fire god from china */}
          <p class="equipment">
            <li>
             Head: <li className="Unique"> Heavenly White Stag Mask:</li> Magic: +1,
            Disease resistance + 20%, Mana regeneration + 10%, blessing of
            建御雷 [Takemikazuchi].
            </li>
            <li>
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
            </li>
          </p>
        </div>
      </div>
    </div>
  );
}
export default intro;