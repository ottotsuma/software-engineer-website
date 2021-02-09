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
  const suits = ["♣", "♥", "♦", "♠"];
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
    for (let index = 0; index < values.length; index++) {
      for (let x = 0; x < suits.length; x++) {
        let weight = parseInt(values[index]);
        if (values[index] === "J" || values[index] === "Q" || values[index] === "K")
          weight = 10;
        if (values[index] === "A") weight = 11;
        let card = { Value: values[index], Suit: suits[x], Weight: weight };
        deck.push(card);
      }
    }
  }
  function shuffle() {
    for (let index = 0; index < 1000; index++) {
      let location1 = Math.floor(Math.random() * deck.length);
      let location2 = Math.floor(Math.random() * deck.length);
      let tmp = deck[location1];
      deck[location1] = deck[location2];
      deck[location2] = tmp;
    }
  }
  function makePlayerDealer() {
    for (let index = 1; index <= 2; index++) {
      const hand = [];
      const player = { Name: "Player " + index, Points: 0, Hand: hand };
      players.push(player);
    }
  }
  function dealCards() {
    for (let index = 0; index < 2; index++) {
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
    // If dealer has less then 17, hit dealer
    if (players[1].Points < 17) {
      hitOrStick("Hit", 1);
      finish();
      // if player has more than 21 points, bust.
    } else if (players[0].Points > 21) {
      setWin("You went BUST!");
      setLosses(losses + 1);
      restart();
      setScore(players[0].Points);
      playersHand();
      // If dealer has more then 21 points, dealer bust.
    } else if (players[1].Points > 21) {
      setWin("Dealer Bust!!");
      setWins(wins + 1);
      restart();
      playersHand();
      setScore(players[0].Points);
      // If player has LESS points then dealer, non of you have gone bust and deal has 17+ points. You lose.
    } else if (players[0].Points < players[1].Points) {
      setWin("You LOST!!!!");
      setLosses(losses + 1);
      restart();
      playersHand();
      setScore(players[0].Points);
      // If player has MORE points then dealer, non of you have gone bust and deal has 17+ points. You win.
    } else if (players[0].Points > players[1].Points) {
      setWin("You won!");
      setWins(wins + 1);
      restart();
      playersHand();
      // else they are the same points, and it is a tie.
    } else {
      setWin("Tie!");
      restart();
      setScore(players[0].Points);
      playersHand();
    }
  }
  function restart() {
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
      if (
        players[0].Hand[index].Suit === "♥" ||
        players[0].Hand[index].Suit === "♦"
      ) {
        answer.push(
          <div key={index} style={{ color: "red" }} className="Players-Cards">
            {players[0].Hand[index].Value}
            {players[0].Hand[index].Suit}
          </div>
        );
      } else {
        answer.push(
          <div key={index} className="Players-Cards">
            {players[0].Hand[index].Value}
            {players[0].Hand[index].Suit}
          </div>
        );
      }
    }
    setPlay(answer);
  }
  function playersHand() {
    let answer = [];
    for (let index = 0; index < players[0].Hand.length; index++) {
      if (
        players[0].Hand[index].Suit === "♥" ||
        players[0].Hand[index].Suit === "♦"
      ) {
        answer.push(
          <div key={index} style={{ color: "red" }} className="Players-Cards">
            {players[0].Hand[index].Value}
            {players[0].Hand[index].Suit}
          </div>
        );
      } else {
        answer.push(
          <div key={index} className="Players-Cards">
            {players[0].Hand[index].Value}
            {players[0].Hand[index].Suit}
          </div>
        );
      }
    }
    setPlay(answer);
  }
  return (
    <div className="Blackjack">
      <div className="Dealer">
        <h1>Dealer</h1>
        <div className="Dealer-Hand">
          <div className="Dealer-Cards">?</div>
          <div className="Dealer-Cards">?</div>
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
        <div>
          Wins: {wins} Losses: {losses}
        </div>
      </div>
    </div>
  );
}
export default Blackjack;
