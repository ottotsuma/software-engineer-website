import React, { useState } from "react";
import { ItemList } from "../elements/item";
import Stats from "../elements/stats";
import SpellCards from "./SpellCards";
import ClassDisplay from "../elements/classes";

export default function Otto() {
  // Ch32
  return (
    <div style={{ color: "black" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {ClassDisplay("Mage")}
        {ClassDisplay("Fighter")}
        {ClassDisplay("Rogue")}
        {ClassDisplay("King")}
      </div>
      {DirtyOtto()}

      <div>{SpellCards([["Iceball", 2, "ice"]])}</div>
      <Stats
        type={"description"}
        stats={{
          name: "Otto",
          level: 10,
          class: "Kʼawiil",
          species: "Human",
          spells: 8,
          passives: 2,
          "spell points": 20 - 20, // from class 4 per level (normal/rare/epic/legendary), Increase Free Ability Points received for every increase in Level by 2 points.
          "stat points": 22 - 22, // from species 2 per level
          vitality: 0,
          strength: 0,
          endurance: 0,
          magic: 10, // 10 from leveling
          willpower: 0,
          dexterity: 2, // 2 from the level 1 & 10
          sense: 0,
          charisma: 10, // 10 from leveling
        }}
        // Makes skills an object of skill types 'human' 'mage' and they be the arrays.
        // Do the same thing for equipment and titles?
        showTitles={false} // currently does nothing
        equippedTitle="Apprentice"
        titles={[
          "Back to School",
          "Apprentice",
          "Found a unique item",
          "The One, The Only",
          "Novice Harvester",
        ]}
        showSkills={true}
        skills={{
          // human: [
          // { name: "Human Ingenuity", level: 2 },
          // { name: "Persuasive", level: 2 },
          // { name: "Quick", level: 2 },
          // { name: "Perception", level: 2 },
          // { name: "Athletic", level: 2 },
          // { name: "Healthy", level: 2 },
          // { name: "Adaptable", level: 2 },
          // { name: "Brave", level: 2 },
          // { name: "Pure of mind", level: 2 },
          // { name: "Magic Enthusiast", level: 2 }, // 20
          // ],
          mage: [
            { name: "Lightning germination", level: 2 },
            { name: "Lightning growth", level: 2 },
            { name: "Lightning harvest", level: 2 },
            { name: "Seeds to Soldiers", level: 2 },
            { name: "Lightning seeds", level: 2 },
            // New Spells Below
            { name: "Scarecrow", level: 2 },
            // { name: "Kʼawiil Burst", level: 2 },
            { name: "Kʼawiil Bolt", level: 2 },
            { name: "Serpent Skin", level: 2 },
            // { name: "Serpent Pattern", level: 2 },
            { name: "Reap What You Sow", level: 2 },
            { name: "Bountiful Harvest", level: 2 },
          ],
          conditions: [
            // Negatives
            { name: "Otitis Externa", level: 1 },
            { name: "Youth", level: 1 },
          ],
        }}
        showItems={true}
        items={{
          Head: ItemList["Heavenly White Stag Mask"],
          Body: ItemList["Academy Robe (Black/Yellow)"],
        }}
        notes={
          "2 spell per level, 2 stats per level, Human +1 stat every 10 levels."
        }
      />
      {/* This equipment is level 5? So maybe needs stat changes */}
      <h1>Other Items</h1>
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
      {/* mysterious bird named Pi Fang and a hundred other fire-birds shut up in a gourd */}
      {/* gloves, adds fire to a weapon. boots, change the surface to fire. chest, reflect damage as fire when hit in melee, how about fireball falls from the sky*/}

      <Stats
        type={"description"}
        stats={{
          name: "Ideal",
          level: 100,
          class: "???",
          species: "mana creature",
          spells: 0,
          passives: 0,
          "spell points": 0, // from class
          "stat points": 0, // from species
          vitality: 100,
          strength: 0,
          endurance: 25,
          magic: 100,
          willpower: 25,
          dexterity: 25,
          sense: 25,
          charisma: 100,
        }}
        showItems={true}
        items={{
          Head: {
            name: "Nahkriin (Mask)",
            effect: "Magic +30, -20% Restoration and Destruction mana cost.",
            rating: "unique",
            long: "",
            stats: { magic: 30 },
          },
          Body: {
            name: "Ziedrich",
            effect:
              "Halves damage from all elements. Strength, endurance, magic, willpower + 20.",
            rating: "legendary",
            stats: { strength: 20, endurance: 20, magic: 20, willpower: 20 },
          },
          Hands: {
            name: "Linwe's Gloves",
            effect: "one-handed attacks do 15% more damage.",
            rating: "unique",
            stats: {},
          },
          Feet: {
            name: "Bubonic Trail",
            effect:
              "Skill: Death Walk, 30% increased Movement Speed, 4% increased maximum Hp.",
            rating: "unique",
            long: "Death Walk: While you walk, this skill causes corpses near your steps to explode, dealing fire damage in an area. The explosions of the corpses are not affected by modifiers to spell damage, and cannot be reflected.",
            stats: {},
          },
          Acc1: {
            name: "Protect Ring",
            effect: "Keeps Barrier & Magic-Barrier active.",
            rating: "epic",
            stats: {},
          },
          Acc2: {
            name: "Force of Nature",
            effect:
              "Adds random nature elements to attack. Absorbs some MP from nature element-based attacks.",
            rating: "legendary",
            stats: {},
          },
          Acc3: {
            name: "Dark Cloak",
            effect:
              "Willpower +5, MP regen + 10%, magic resistance +5%, normal weapon resistance +3% and stealth bonus. It also increases encounter chance, hostility, and suspicion.",
            rating: "epic",
            stats: { willpower: 5 },
          },
          Acc4: {
            name: "Magic Master",
            effect:
              "Max hp - 50%. Max mp + 50%. Strength & Endurance - 20. Magic & Willpower + 20. Stores one magic spell for free use.",
            rating: "legendary",
            stats: {
              strength: -20,
              endurance: -20,
              magic: 20,
              willpower: 20,
            },
          },
          Weapon: {
            name: "Otto`s Umbrella",
            effect: "Resist Water, Resist Light, Magic +70.",
            rating: "epic",
            stats: { magic: 70 },
          },
          "Off-hand": {
            name: `Silver Horn Custom "Trident"`,
            effect: "(+15 magic when used in offhand). Damage + 1.25x Magic",
            rating: "unique",
            stats: { magic: 15 },
          },
        }}
        // Magic +5 Immune: Poison, Disease
        // https://www.dandwiki.com/wiki/Mana_Creature_(5e_Race)
        // Team bonus comes from class.
        notes={
          "1 spell per level, 4 stats per level, mana creature every 10 levels stores another form."
        }
      />
    </div>
  );
}
export function DirtyOtto() {
  return (
    <div>
      <p>1: They are in a zone of comfort</p>
      <p>At home with his family</p>
      {/* 2nd time: Back at the Banderdam with his friends. */}
      <p>2: But they want something</p>
      <p>To be a strong wizard</p>
      {/* 2nd time: Revenge */}
      <p>3: They enter an unfamiliar situation</p>
      <p>Academy / war</p>
      {/* 2nd time: Being accused of crime */}
      <p>4: Adapt to it</p>
      <p>Fight and survive</p>
      {/* 2nd time: Flee */}
      <p>5: Get what they wanted</p>
      <p>Become recognized as powerful</p>
      {/* 2nd time: Kills prince */}
      <p>6: Pay a heavy price</p>
      <p>Lose his family</p>
      {/* 2nd time: Lose his friends */}
      {/* 3rd: Lose the class that made him powerful */}
      <p>7: Then return to the familia situation</p>
      <p>Come back to the village</p>
      {/* 2nd time: With his friends on a ship, except his friends are reduced because of the cost to 1. */}
      <p>8: Having changed</p>
      <p>Upset and angry at the loss</p>.{/* 2nd time: No longer vengeful */}
    </div>
  );
}
export function Kaja(Chapter) {
  if (Chapter < 36) {
    return (
      <Stats
        type={"description"}
        stats={{
          name: "Kaja",
          level: 10,
          class: "mage",
          species: "Human",
          spells: 0,
          passives: 0,
          "spell points": 10 - 10, // from class 1 per level (normal/rare/epic/legendary)
          "stat points": 22 - 22, // from species 2 per level // 1 per every 10 levels
          vitality: 10,
          strength: 0,
          endurance: 0,
          magic: 10,
          willpower: 0,
          dexterity: 2,
          sense: 0,
          charisma: 0,
        }}
        // Makes skills an object of skill types 'human' 'mage' and they be the arrays.
        // Do the same thing for equipment and titles?
        showTitles={false} // currently does nothing
        equippedTitle="Back to School"
        titles={["Back to School", "Apprentice"]}
        showSkills={true}
        skills={{
          human: [{ name: "Magic Enthusiast", level: 2 }],
          mage: [
            { name: "Mana Ball", level: 1 },
            { name: "Fireball", level: 2 },
            { name: "Fire Wrap", level: 1 },
            { name: "Fire Mine", level: 1 },
            { name: "Magic Up", level: 2 },
            { name: "Magic Regen", level: 1 },
            // Magic Regen, Shield Burst, Mana Wings, Mana Shield, Mana Slide, Missile, Strike, Magic Up, Magic Resistance, Tether, Mana Orbs
          ],
          conditions: [
            // Negatives
            { name: "Youth", level: 1 },
          ],
        }}
        showItems={true}
        items={{
          Weapon: {
            name: "wand",
            effect: "Controlling ambient mana is easier.",
            rating: "junk",
          },
          Shield: {
            name: "Leather covered wooden shield",
            effect:
              "Endurance +1, Fire resistance + 1%, chance to block physical attacks.",
            rating: "junk",
            stats: { endurance: 1 },
          },
          Body: {
            name: "Academy Robe (Black/Red).",
            effect: "Magic: +2, Fire +2%, HP +10.",
            rating: "junk",
            stats: { magic: 2, HP: 10 },
          },
        }}
        notes={
          "2 spell per level, 2 stats per level, Human +1 stat every 10 levels."
        }
      />
    );
  } else {
    return (
      <div>
        <p>1: They are in a zone of comfort</p>
        <p>With her farther</p>

        <p>2: But they want something</p>
        <p>To become a lord protector</p>

        <p>3: They enter an unfamiliar situation</p>
        <p>Academy</p>

        <p>4: Adapt to it</p>
        <p>Survive</p>

        <p>5: Get what they wanted</p>
        <p>Her fame from the game will give her the position she wanted</p>

        <p>6: Pay a heavy price</p>
        <p>Her faith?</p>

        <p>7: Then return to the familia situation</p>
        <p>Returns back to her farther town as a lord protector</p>

        <p>8: Having changed</p>
        <p>Is not the happy girl she once was, cynical and icy</p>
      </div>
    );
  }
}
export function Tsuma(Chapter) {
  // https://en.uesp.net/wiki/Oblivion:Spells
  if (Chapter) {
    return (
      <Stats
        type={"description"}
        stats={{
          name: "Tsuma",
          level: 20,
          class: "Mage",
          species: "Human",
          spells: 0,
          passives: 0,
          "spell points": 0, // from class 1 per level (normal/rare/epic/legendary)
          "stat points": 0, // from species 2 per level // 1 per every 10 levels
          vitality: 0,
          strength: 0,
          endurance: 0,
          magic: 0,
          willpower: 0,
          dexterity: 0,
          sense: 0,
          charisma: 0,
        }}
        // Makes skills an object of skill types 'human' 'mage' and they be the arrays.
        // Do the same thing for equipment and titles?
        hideTitle={true} // currently does nothing
        equippedTitle="Princess"
        titles={["Back to School", "Apprentice", "Princess"]}
        showSkills={true}
        skills={{
          human: [
            // { name: "Human Ingenuity", level: 2 },
            // { name: "Persuasive", level: 2 },
            // { name: "Quick", level: 2 },
            // { name: "Perception", level: 2 },
            // { name: "Athletic", level: 2 },
            // { name: "Healthy", level: 2 },
            // { name: "Adaptable", level: 2 },
            // { name: "Brave", level: 2 },
            // { name: "Pure of mind", level: 2 },
            // { name: "Magic Enthusiast", level: 2 },
          ],
          mage: [
            { name: "Mana Ball", level: 1 },
            { name: "Fireball", level: 2 },
            { name: "Magic Up", level: 2 },
            { name: "Magic Regen", level: 2 },
            // Mana Ball, Magic Regen, Shield Burst, Mana Wings, Mana Shield, Mana Slide, Missile, Strike, Magic Up, Magic Resistance, Tether, Mana Orbs
          ],
          conditions: [
            // Negatives
            { name: "Youth", level: 1 },
          ],
        }}
        showItems={true}
        items={{
          Body: {
            name: "Academy Robe (Black/??).",
            effect: "Magic: +2, ?? +2%, HP +10.",
            rating: "junk",
            stats: { magic: 2, HP: 10 },
          },
        }}
        notes={
          "Eyes as part of the cats skills, see the witch of alden. 2 spell per level, 2 stats per level, Human +1 stat every 10 levels."
        }
      />
    );
  } else {
    return (
      <div>
        <p>1: They are in a zone of comfort</p>

        <p>2: But they want something</p>

        <p>3: They enter an unfamiliar situation</p>

        <p>4: Adapt to it</p>

        <p>5: Get what they wanted</p>

        <p>6: Pay a heavy price</p>

        <p>7: Then return to the familia situation</p>

        <p>8: Having changed</p>
      </div>
    );
  }
}
export function Noah(Chapter) {
  if (Chapter) {
    return (
      <Stats
        type={"description"}
        stats={{
          name: "Noah",
          level: 37,
          class: "Rogue",
          species: "Dark Elf",
          spells: 0,
          passives: 0,
          "skill points": 37, // from class 1 per level (normal/rare/epic/legendary)
          "stat points": 37 + 37 + 4 - 37 - 20, // from species 2 per level // 1 per every 10 levels
          vitality: 0,
          strength: 20,
          endurance: 0,
          magic: 0,
          willpower: 0,
          dexterity: 37,
          sense: 0,
          charisma: 0,
        }}
        // Makes skills an object of skill types 'human' 'mage' and they be the arrays.
        // Do the same thing for equipment and titles?
        showTitles={false} // currently does nothing
        equippedTitle="Princess"
        titles={["Princess"]}
        showSkills={false}
        skills={{
          "Dark Elf": [
            // Disguise + 1 Because Darkelf: Disguise (1) ?
          ],
          rogue: [
            // { name: "Mana Ball", level: 1 },
          ],
          conditions: [
            // Negatives
            { name: "Miasma", level: 90 },
            { name: "Player", level: 1 },
          ],
        }}
        showItems={true}
        items={{
          // https://aikadb.astrobunny.net/simple.php?rifleman-rifle-of-freedom
          Body: {
            name: ItemList["Toads Skin Jacket"].name,
            description: ItemList["Toads Skin Jacket"].description,
            rating: ItemList["Toads Skin Jacket"].rating,
            stats: ItemList["Toads Skin Jacket"].stats,
          },
          Head: {
            name: ItemList["Rayndr Face Mask"].name,
            effect: ItemList["Rayndr Face Mask"].description,
            rating: ItemList["Rayndr Face Mask"].rating,
            stats: ItemList["Rayndr Face Mask"].stats,
          },
          Hands: {
            name: ItemList["Linen Halfgloves"].name,
            effect: ItemList["Linen Halfgloves"].description,
            rating: ItemList["Linen Halfgloves"].rating,
            stats: ItemList["Linen Halfgloves"].stats,
          },
          Feet: {
            name: ItemList["Rayndr Jackboots"].name,
            effect: ItemList["Rayndr Jackboots"].description,
            rating: ItemList["Rayndr Jackboots"].rating,
            stats: ItemList["Rayndr Jackboots"].stats,
          },
          Weapon: {
            name: ItemList["Dark Elf's Scimitar"].name,
            effect: ItemList["Dark Elf's Scimitar"].description,
            rating: ItemList["Dark Elf's Scimitar"].rating,
            stats: ItemList["Dark Elf's Scimitar"].stats,
          },
          "Off-hand": {
            name: ItemList["Meroyri Xiphos"].name,
            effect: ItemList["Meroyri Xiphos"].description,
            rating: ItemList["Meroyri Xiphos"].rating,
            stats: ItemList["Meroyri Xiphos"].stats,
          },
          ring: ItemList["Rogue's Ring"][3],
        }}
        notes={
          "2 spell per level, 2 stats per level, Human +1 stat every 10 levels."
        }
      />
    );
  } else {
    return (
      <div>
        <p>1: They are in a zone of comfort</p>

        <p>2: But they want something</p>

        <p>3: They enter an unfamiliar situation</p>

        <p>4: Adapt to it</p>

        <p>5: Get what they wanted</p>

        <p>6: Pay a heavy price</p>

        <p>7: Then return to the familia situation</p>

        <p>8: Having changed</p>
      </div>
    );
  }
}
export function Sarah(Chapter) {
  if (Chapter) {
    return (
      <Stats
        type={"description"}
        stats={{
          name: "Sarah",
          level: 100,
          class: "Paladin",
          species: "Vampire",
          spells: 0,
          passives: 0,
          "skill points": 100, // from class 1 per level (normal/rare/epic/legendary)
          "stat points": 211 - 211, // from species 2 per level // 1 per every 10 levels
          vitality: 100,
          strength: 60,
          endurance: 11,
          magic: 20,
          willpower: 0,
          dexterity: 20,
          sense: 0,
          charisma: 0,
        }}
        // Makes skills an object of skill types 'human' 'mage' and they be the arrays.
        // Do the same thing for equipment and titles?
        showTitles={false} // currently does nothing
        equippedTitle="Princess"
        titles={["Princess"]}
        showSkills={true}
        skills={{
          vampire: [
            { name: "Vampire Eyes", level: 1 },
            { name: "Vampiric Powers", level: 1 },
            { name: "Vampire", level: 1 },
            // Above is all (I)
            // Basic Vampire Martial Arts, Vampiric Influence, Blood Wall, Blood Bank, Blood Storage, Blood Hardening, Sleep Immunity, Blood Armor,
          ],
          paladin: [{ name: "Fallen Paladin", level: 1 }],
          conditions: [
            // Negatives
            { name: "Player", level: 1 },
            { name: "Miasma", level: 90 },
          ],
        }}
        showItems={true}
        items={{
          // https://en.wikipedia.org/wiki/Paladin#:~:text=The%20Paladins%20(or%20Twelve%20Peers,Round%20Table%20in%20Arthurian%20romance.
          // https://en.wikipedia.org/wiki/List_of_medieval_armour_components
          // https://www.timelessmyths.com/arthurian/peers/
          // https://aikaonlinena.fandom.com/wiki/Paladin_Sets / https://aikadb.astrobunny.net/simple.php?paladin-blade-of-twilight-paladin
          Body: {
            name: "Paladin Engeler's Body Armor (silver rank)",
            effect:
              "Reduces physical damage taken by 10%, except spears. Endurance +1, Endurance +10%.",
            rating: "epic",
            stats: { endurance: 1, enduranceMultiplier: 1.1 },
          },
          Head: {
            name: "Paladin Engeler's Sallet (silver rank)",
            effect: "Endurance +1.8.",
            rating: "epic",
            stats: { endurance: 1.8 },
          },
          Hands: {
            name: "Paladin Engeler's Gauntlets (silver rank)",
            effect: "Endurance +1.",
            rating: "epic",
            stats: { endurance: 1 },
          },
          Feet: {
            name: "Paladin Engeler's Sabaton (silver rank)",
            effect: "Endurance +1.2.",
            rating: "epic",
            stats: { endurance: 1.2 },
          },
          Weapon: {
            name: "Paladin Engeler's Mace (silver rank)",
            effect: "Strength +3.",
            rating: "epic",
            stats: { strength: 3 },
          },
          Shield: {
            name: "Paladin Engeler's Shield (silver rank)",
            effect:
              "Threat increased 20%, Reduce received damage from Demons by 7%, Reduce received damage from Undead by 7%, chance to block 20%.",
            rating: "epic",
            stats: { endurance: 0 },
          },
          Cape: {
            name: "Paladin Engeler's Cape (silver rank)",
            effect: "Increase HP by 315, Increase MP by 225.",
            rating: "epic",
            stats: { HP: 315, MP: 225 },
          },
          necklace: {
            name: "Demon Hunter Necklace",
            effect:
              "Reduces physical damage taken by 15, Reduces magical damage taken by 17, Reduce received damage from Demons by 3%",
            rating: "epic",
          },
          bracelet: {
            name: "Demon Hunter Bracelet",
            effect:
              "Reduces physical damage taken by 15, Reduces magical damage taken by 17, Reduce received damage from Demons by 3%",
            rating: "epic",
          },
          earing: {
            name: "Demon Hunter Earring",
            effect:
              "Reduces physical damage taken by 15, Reduces magical damage taken by 17, Reduce received damage from Demons by 3%",
            rating: "epic",
          },
          ring: {
            name: "Demon Hunter Ring",
            effect:
              "Reduces physical damage taken by 15, Reduces magical damage taken by 17, Reduce received damage from Demons by 3%",
            rating: "epic",
          },
          "Set Effect (3/7)": {
            name: "Paladin Engeler's Set",
            effect: "HP + 217.0, endurance + 0.9",
            rating: "epic",
            stats: { endurance: 0.9, HP: 217 },
          },
          "Set Effect (4/7)": {
            name: "Paladin Engeler's Set",
            effect: "Crit Rate: +1, Critical Damage: +2.5%.",
            rating: "epic",
            // stats: {}
          },
          "Set Effect (7/7)": {
            name: "Paladin Engeler's Set",
            effect:
              "Skill: One of the Twelve; Increases all stats by 12% for 7 seconds.",
            rating: "epic",
            stats: { endurance: 0 },
          },
        }}
        notes={
          "2 spell per level, 2 stats per level, Human +1 stat every 10 levels. https://ottotsuma.github.io/images/people/w1.jpg"
        }
      />
    );
  } else {
    return (
      <div>
        <p>1: They are in a zone of comfort</p>

        <p>2: But they want something</p>

        <p>3: They enter an unfamiliar situation</p>

        <p>4: Adapt to it</p>

        <p>5: Get what they wanted</p>

        <p>6: Pay a heavy price</p>

        <p>7: Then return to the familia situation</p>

        <p>8: Having changed</p>
      </div>
    );
  }
}
export function Josh(Chapter) {
  if (Chapter) {
    return (
      <Stats
        type={"description"}
        stats={{
          name: "Josh",
          level: 92,
          class: "Assassin",
          species: "Human",
          spells: 0,
          passives: 0,
          "skill points": 92, // from class 1 per level (normal/rare/epic/legendary)
          "stat points": 194 - 90 - 50 - 50 - 2 - 2, // from species 2 per level // 1 per every 10 levels
          vitality: 0,
          strength: 50,
          endurance: 0,
          magic: 0,
          willpower: 0,
          dexterity: 92,
          sense: 52,
          charisma: 0,
        }}
        // Makes skills an object of skill types 'human' 'mage' and they be the arrays.
        // Do the same thing for equipment and titles?
        showTitles={false} // currently does nothing
        equippedTitle="Princess"
        titles={["Princess"]}
        showSkills={false}
        skills={{
          human: [
            // Above is all (I)
          ],
          assassin: [],
          conditions: [
            // Negatives
            { name: "Player", level: 1 },
            { name: "Miasma", level: 90 },
          ],
        }}
        showItems={true}
        items={{
          // https://ffxiv.gamerescape.com/wiki/Sky_Pirate%27s_Fending_Set#Hyur%20 / https://ottotsuma.github.io/images/people/9d6e202641a645ff31d6a93f2c589feb.jpg
          Body: ItemList["Shadow Pirate's Coat"],
          Head: ItemList["Featureless Deathwood Mask"],
          Hands: ItemList["Otari Kote"],
          Feet: ItemList["Leather Pirate Boots"],
          Weapon: ItemList["Glide Moroha"],
          "Off hand": ItemList["Gale Moroha"],
          "Set Effect": ItemList["Glide & Gale (2/2)"],
          bracelet: ItemList["Black Braid Bracelet"],
          earing: {
            name: ItemList["Tidus Earring"].name,
            effect: ItemList["Tidus Earring"].description,
            rating: ItemList["Tidus Earring"].rating,
            stats: ItemList["Tidus Earring"].stats[9],
          },
          ring: ItemList["Rogue's Ring"][9],
          "second ring": ItemList["Black Band"][9],
        }}
        notes={
          "2 spell per level, 2 stats per level, Human +1 stat every 10 levels. https://ottotsuma.github.io/images/people/w1.jpg"
        }
      />
    );
  } else {
    return (
      <div>
        <p>1: They are in a zone of comfort</p>

        <p>2: But they want something</p>

        <p>3: They enter an unfamiliar situation</p>

        <p>4: Adapt to it</p>

        <p>5: Get what they wanted</p>

        <p>6: Pay a heavy price</p>

        <p>7: Then return to the familia situation</p>

        <p>8: Having changed</p>
      </div>
    );
  }
}
export function Hitori(Chapter) {
  // Age 16 during his first dungeon chapter. The rat king. Having failed to graduate for 2 years.
  if (Chapter) {
    return (
      <Stats
        type={"description"}
        stats={{
          name: "Hitori",
          level: 2,
          rank: 'F',
          // class: "Phoenix",
          species: "Human",
          skills: 2,
          passives: 0,
          "skill points": 2-2, // from class 1 per level (normal/rare/epic/legendary)
          "stat points": 5-2, // from species 2 per level // 1 per every 10 levels
          vitality: 2,
          strength: 0,
          endurance: 0,
          magic: 0,
          willpower: 0,
          dexterity: 0,
          sense: 0,
          charisma: 0,
        }}
        // Makes skills an object of skill types 'human' 'mage' and they be the arrays.
        // Do the same thing for equipment and titles?
        showTitles={false} // currently does nothing
        equippedTitle="Student"
        titles={["Student"]}
        showSkills={true}
        skills={{
          human: [
            // Above is all (I)
          ],
          phoenix: [
            { name: "Rebirth Flame", level: 1 },
            { name: "Birthed In Flame", level: 1 },
          ],
          conditions: [
            // Negatives
          ],
        }}
        showItems={true}
        items={{
          Body: ItemList["Niyosho Hakama"],
          Weapon: ItemList["Jokoto Wakizashi"],
        }}
        notes={
          "2 spell per level, 2 stats per level, Human +1 stat every 10 levels. https://ottotsuma.github.io/images/people/w1.jpg"
        }
      />
    );
  } else {
    return (
      <div>
        <p>1: They are in a zone of comfort</p>

        <p>2: But they want something</p>

        <p>3: They enter an unfamiliar situation</p>

        <p>4: Adapt to it</p>

        <p>5: Get what they wanted</p>

        <p>6: Pay a heavy price</p>

        <p>7: Then return to the familia situation</p>

        <p>8: Having changed</p>
      </div>
    );
  }
}
export function Linhart() {
  return (
    <div>
      <p>1: They are in a zone of comfort</p>
      <p>Working as a 3rd year researchers assistant at the academy.</p>
      <p>2: But they want something</p>
      <p></p>
      <p>3: They enter an unfamiliar situation</p>
      <p></p>
      <p>4: Adapt to it</p>
      <p></p>
      <p>5: Get what they wanted</p>
      <p></p>
      <p>6: Pay a heavy price</p>
      <p></p>
      <p>7: Then return to the familia situation</p>
      <p></p>
      <p>8: Having changed</p>
      <p></p>
    </div>
  );
}
export function Beke() {
  return (
    <div>
      <p>1: They are in a zone of comfort</p>
      <p>2: But they want something</p>
      <p>3: They enter an unfamiliar situation</p>
      <p>4: Adapt to it</p>
      <p>5: Get what they wanted</p>
      <p>6: Pay a heavy price</p>
      <p>7: Then return to the familia situation</p>
      <p>8: Having changed</p>
    </div>
  );
}
export function Effi() {
  return (
    <div>
      <p>1: They are in a zone of comfort</p>
      <p>Starts in the town with her family.</p>
      <p>2: But they want something</p>
      <p>To become strong enough to protect them</p>
      <p>3: They enter an unfamiliar situation</p>
      <p>The military camps of Alden</p>

      <p>4: Adapt to it</p>
      <p>Finds her place in the ranks</p>

      <p>5: Get what they wanted</p>
      <p>Becomes strong enough to fight basic monsters</p>

      <p>6: Pay a heavy price</p>
      <p></p>

      <p>7: Then return to the familia situation</p>
      <p>Comes back to her family, finding they have died.</p>

      <p>8: Having changed</p>
      <p>Vengeful and lost at her families death</p>
    </div>
  );
}
export function Nils() {
  return (
    <div>
      <p>1: They are in a zone of comfort</p>
      <p>2: But they want something</p>
      <p>3: They enter an unfamiliar situation</p>
      <p>4: Adapt to it</p>
      <p>5: Get what they wanted</p>
      <p>6: Pay a heavy price</p>
      <p>7: Then return to the familia situation</p>
      <p>8: Having changed</p>
    </div>
  );
}

// Academy, border guard, monster hunters, fugitive, Niyoshon prince, farmer, war lord? Flees the sea people invasion turns south, find the bird people, fight eleven pirates, sail to the old world. Or use the under ground road...

// The invasion of earth starts

// Kʼawiil Notes:
// This court is the body of an immortal the maya gods killed and lived in after.
// Xibalba is described in the Popol Vuh as a court below the surface of the Earth associated with death and with twelve gods or powerful rulers known as the Lords of Xibalba.

// Chaac *L*
// The god of storms and rain, enemy of Camazotz and wields a lightning axe.

// Camazotz *PV*
// A bat and death god.

// God K (Chuah.). God L is often combined with god K, the lightning deity who, as an owner of the seeds, was considered a bringer of abundance.[5] More specifically, god L can extend the head of god K, or carry an infant god K in a sling on his back.[6] God K also happens to be the victim of god L as a Venus patron (Dresden Codex).
