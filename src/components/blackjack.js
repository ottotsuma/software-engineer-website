// Make a deck,
// Shuffle deck
// Make player + dealer
// deal cards
// Hit me or Stop
// IF player < 21 deal dealer until dealer > player
// Who won ? closest 21, anyone over 21 loses. (2 cards is best)
// Ace = 1 & 11

import React, { useState, useEffect } from "react";
let deck = [];
let players = [];
function Blackjack() {
  const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];

  const [score, setScore] = useState(0);
  const [play, setPlay] = useState();
  const [win, setWin] = useState("It is your first match!");
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);

  const [counter, setCounter] = useState(0);


  useEffect(() => {
    restart();
  }, []);

  function createDeck() {
    deck = [];
    for (let i = 0; i < values.length; i++) {
      for (let x = 0; x < suits.length; x++) {
        let weight = parseInt(values[i]);
        if (values[i] === "J" || values[i] === "Q" || values[i] === "K")
          weight = 10;
        if (values[i] === "A") weight = 11;
        let card = { Value: values[i], Suit: suits[x], Weight: weight };
        deck.push(card);
      }
    }
  }
  function shuffle() {
    // for 1000 turns
    // switch the values of two random cards
    for (let i = 0; i < 1000; i++) {
      let location1 = Math.floor(Math.random() * deck.length);
      let location2 = Math.floor(Math.random() * deck.length);
      let tmp = deck[location1];
      deck[location1] = deck[location2];
      deck[location2] = tmp;
    }
  }
  function makePlayerDealer() {
    for (let i = 1; i <= 2; i++) {
      const hand = [];
      const player = { Name: "Player " + i, Points: 0, Hand: hand };
      players.push(player);
    }
  }
  function dealCards() {
    for (let i = 0; i < 2; i++) {
      for (let x = 0; x < players.length; x++) {
        players[x].Hand.push(deck.pop());
      }
    }
    updatePoints();
  }
  function getSum(total, num) {
    return total + Math.round(num);
  }
  function updatePoints() {
    // Player
    players[0].Points = 0;
    let temp = [];
    for (let index = 0; index < players[0].Hand.length; index++) {
      let w = players[0].Hand[index].Weight;
      temp.push(w);
      let ans = temp.reduce(getSum);
      if (ans > 21) {
        for (let index = 0; index < temp.length; index++) {
          if (temp[index] === 11) {
            temp[index] = 1;
          }
        }
      }
      ans = temp.reduce(getSum);
      players[0].Points = ans;

      // Dealer
      players[1].Points = 0;
      let tempDeal = [];
      for (let index = 0; index < players[1].Hand.length; index++) {
        let w = players[1].Hand[index].Weight;
        tempDeal.push(w);
        let ansDeal = tempDeal.reduce(getSum);
        if (ansDeal > 21) {
          for (let index = 0; index < tempDeal.length; index++) {
            if (tempDeal[index] === 11) {
              tempDeal[index] = 1;
            }
          }
        }
        ansDeal = tempDeal.reduce(getSum);
        players[1].Points = ansDeal;
      }
    }
  }
  function hitOrStick(params, who) {
    if (params === "Hit") {
      console.log(players);
      players[who].Hand.push(deck.pop());
      updatePoints();
      setScore(players[0].Points);
      playersHand();
      if (players[0].Points > 21) {
        finish();
      }
    } else {
      finish();
    }
  }
  function finish() {
    if (players[0].Points === 21 && players[1].Points === 21) {
      console.log("Tie");
      setWin("Tie!");
      restart();
      setScore(players[0].Points);
      playersHand();
    } else if (players[0].Points > 21) {
      console.log("BUST");
      setWin("You went BUST!");
      setLosses(losses+1);
      restart();
      setScore(players[0].Points);
      playersHand();
    } else if (players[1].Points > 21) {
      console.log("Player wins");
      setWin("You Won!!");
      setWins(wins+1);
      restart();
      playersHand();
      setScore(players[0].Points);
    } else if (players[0].Points > players[1].Points) {
      hitOrStick("Hit", 1);
      console.log("Hit dealer");
      finish();
    } else {
      console.log("Dealer wins");
      setWin("You LOST!!!!");
      setLosses(losses+1);
      restart();
      playersHand();
      setScore(players[0].Points);
    }
  }
  function restart() {
    console.log("Restarting");
    setCounter(counter + 1);
    deck = [];
    players = [];
    // Make a deck,
    createDeck();
    // Shuffle deck
    shuffle();
    // Make player + dealer
    makePlayerDealer();
    // deal cards
    dealCards();
    setScore(players[0].Points);
    let answer = [];
    for (let index = 0; index < players[0].Hand.length; index++) {
      answer.push(
        <div key={index} className="Players-Cards">
          {players[0].Hand[index].Value}
        </div>
      );
    }
    setPlay(answer);
  }
  function playersHand() {
    let answer = [];
    for (let index = 0; index < players[0].Hand.length; index++) {
      answer.push(
        <div key={index} className="Players-Cards">
          {players[0].Hand[index].Value}
        </div>
      );
    }
    setPlay(answer);
  }
  return (
    <div className="Blackjack">
      <div className="Dealer">
        <h1>Dealer</h1>
        <div className="Dealer-Hand">
          <div className="Players-Cards">Card</div>
          <div className="Players-Cards">Card</div>
        </div>
      </div>
      <div>Game: {counter}</div>
      <div className="Player">
        <h1>Player</h1>
        <div className="Player-Hand">{play}</div>
        <div className="Buttons-BJ">
          <div className="Hit" onClick={() => hitOrStick("Hit", 0)}>
            Hit
          </div>
          <div className="Stay" onClick={() => hitOrStick("Stay")}>
            Stay
          </div>
          <div className="Stay" onClick={() => restart()}>
            Restart
          </div>
        </div>
        Your Score: {score}
      </div>
      <div>
        Last Match:
        <div>{win}</div>
        <div>Wins: {wins} Losses: {losses}</div>
      </div>
    </div>
  );
}
export default Blackjack;
