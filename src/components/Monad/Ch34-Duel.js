import React from "react";
function intro(props) {
  return (
    <div className="Monad" id="3">
      <div className="Frame">
        <div className="Content"></div>
      </div>
    </div>
  );
}
export default intro;

// Vampire type, more blood taken makes them stronger so often conflict with humans
// Vampire type, more hunger makes them stronger so often hide from humans
// The people coming off the boats don't have to be human
// Merging the stats into a few, Vitality, magic, strength, sense, charm
// No classes? Just race and element?

function placeholder() {
  return (
    <div>
      <h1>Sea people</h1>
      <p>A group of sea travelers with different races. Their classes will be advanced classes because they have all reached level 100 at some point. The miasma effect will reduce their capabilities by 90% and be removed as they complete more quests on the DLC island.</p>
      <h2>List of the group</h2>
      <ul>
        <li>Example: Name, race, class(), level, equipment, backstory(Main island, other dlc before? ), clan/guild, reason for coming.</li>
        <li>Boy: Name, race, class(Rogue[]), level, equipment, (From the main island, recently started playing, no dlc), none, saw the adverts for coming and wanted to try.</li>
        <li>Girl: Name, race, class(Tank[]), level, equipment, (Pro-gamer, guild leader, small dlc before), clan/guild, get in before the other guilds.</li>
        <li>Boy: Name, Human, class(Rogue[]), level, equipment, (Member of the same guild, small dlc, company man), clan/guild, accompany the same guild.</li>
      </ul>
    </div>
  );
}
