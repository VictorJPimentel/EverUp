const peter = {
  firstName: "Peter",
  lastName: "Smith",
  birthYear: 1990,
  jobTitle: "student",
  score: [100, 99, 90, 96],

  calAvgScore: function () {
    this.avgScore =
      (this.score[0] + this.score[1] + this.score[2] + this.score[3]) /
      this.score.length;
    return this.avgScore;
  },

  calHighestScore: function () {
    this.highestScore = Math.max(...this.score);
    return this.highestScore;
  },

  showSummary: function () {
    console.log(
      `${this.lastName} ${this.firstName} has completed ${
        this.score.length
      } task and ${this.firstName} average score is ${this.calAvgScore()}, ${
        this.firstName
      } highest score is ${this.calHighestScore()}`
    );
  },
};

console.log(peter.showSummary());
const a = "a";
const input = prompt("Enter a number between -88 and 58");
while (isNaN(input)) {
  alert("That is not a number, enter a number");
  input = prompt("Enter a number between -88 and 58");
  if (!isNaN(input)) {
    return true;
  }
}
