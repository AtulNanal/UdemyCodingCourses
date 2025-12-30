"use strict";
console.log("Its Working !!!");

class player {
  //static class variable
  static description = "Player in Our Game";

  //private variable
  #score = 0;
  //private variable
  #numLives = 10;

  constructor(first, last) {
    this.first = first;
    this.last = last;
    this.#secret();
  }

  //public method
  addScore(points) {
    this.#score += points;
  }

  taunt() {
    console.log("GRRRRR...");
  }

  //get property
  get fullName() {
    return `${this.first} ${this.last}`;
  }

  //get property
  get score() {
    return `${this.#score}`;
  }

  //set property
  set score(newScore) {
    if (newScore < 0) {
      throw new Error("Score Must be Positive");
    }
    this.#score = newScore;
  }

  //private method
  #secret() {
    console.log("SECRET");
  }
}

let player1 = new player("Abc", "PQR");
player1.taunt();
console.log(player1.score);
player1.score = 100;
player1.addScore(10);
console.log(player1.score);
console.log(player1);
console.log(player1.fullName);
console.log(player);

class AdminPlayer extends player {
  constructor(first, last, powers) {
    super(first, last);
    this.powers = powers;
  }
  isAdmin = true;
}

const admin = new AdminPlayer("admin", "mCadmin", ["delete", "restore"]);
console.log(admin);
console.log(admin.fullName);
