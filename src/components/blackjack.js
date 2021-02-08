// Make a deck,
// Shuffle deck
// Make player + dealer
// deal cards
// Hit me or Stop
// IF player < 21 deal dealer until dealer > player
// Who won ? closest 21, anyone over 21 loses. (2 cards is best)
// Ace = 1 & 11

import React from "react";
const Blackjack = props => {
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
  let deck = new Array();
  let players = new Array();
  restart()

  function createDeck() {
    deck = new Array();
    for (let i = 0; i < values.length; i++) {
      for (let x = 0; x < suits.length; x++) {
        let weight = parseInt(values[i]);
        if (values[i] == "J" || values[i] == "Q" || values[i] == "K")
          weight = 10;
        if (values[i] == "A") weight = 11;
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
    players = new Array();
    for (let i = 1; i <= 2; i++) {
      const hand = new Array();
      const player = { Name: "Player " + i, Points: 0, Hand: hand };
      players.push(player);
    }
  }

  function dealCards() {
    // alternate handing cards to each player
    // 2 cards each
    for (let i = 0; i < 2; i++) {
      for (let x = 0; x < players.length; x++) {
        players[x].Hand.push(deck.pop());
        // renderCard(card, x);
      }
    }
    updatePoints();
    // updateDeck();
  }

  function getSum(total, num) {
    return total + Math.round(num);
  }

  function updatePoints() {
    // Player
    players[0].Points = 0;
    let temp = new Array();
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
    }
    // Dealer
    players[1].Points = 0;
    for (let index = 0; index < players[1].Hand.length; index++) {
      let w = players[1].Hand[index].Weight;
      players[1].Points = players[1].Points + parseInt(w);
    }
  }

  function hitOrStick(params, who) {
    if (params === "Hit") {
      for (let i = 0; i < 1; i++) {
        players[who].Hand.push(deck.pop());
      }
      updatePoints();
      console.log("Hit", players[0].Points);
      if (players[0].Points > 21) {
        finish()
      }
    } else {
      console.log("Stay", players[0].Points);
      finish();
    }
  }

  function finish() {
    if (players[0].Points > 21) {
      console.log("BUST");
      restart()
    } else if (players[1].Points > 21) {
      console.log("Player wins");
      restart()
    } else if (players[0].Points > players[1].Points) {
      hitOrStick("Hit", 1);
      console.log("hit dealer");
      finish();
    } else {
      console.log("Dealer wins");
      restart()
    }
  }

  function restart() {
    // Make a deck,
    createDeck();
    // Shuffle deck
    shuffle();
    // Make player + dealer
    makePlayerDealer();
    // deal cards
    dealCards();
  }
  function playersHand() {
    let answer = [];
    for (let index = 0; index < players[0].Hand.length; index++) {
      answer.push(
        <div className="Players-Cards">{players[0].Hand[index].Value}</div>
      );
    }
    return answer;
  }

  function dealerHand() {
    let answer = [];
    for (let index = 0; index < players[1].Hand.length; index++) {
      answer.push(
        <div className="Dealer-Cards">Card</div>
      );
    }
    return answer;
  }
  function Score() {
    return <div>{players[0].Points}</div>
    // return <div>1</div>
  }
  
  return (
    <div className="Blackjack">
      <div className="Dealer">
        <div className="Dealer-Hand">{dealerHand()}</div>
      </div>
      <div className="Player">
        <div className="Player-Hand">{playersHand()}</div>
        <div className="Hit" onClick={() => hitOrStick("Hit", 0)}>
          Hit
        </div>
        <div className="Stay" onClick={() => hitOrStick("Stay")}>
          Stay
        </div>
        {Score()}
      </div>
    </div>
  );
}
export default Blackjack;
