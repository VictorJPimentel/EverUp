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

  showSummary: function () {
    this.summery = console.log(
      `${this.lastName} ${this.firstName} has completed ${
        this.score.length
      } task and ${
        this.firstName
      } average score is ${this.calAvgScore()}, FirstName’s highest score is `
    );
  },
};

console.log(peter.showSummary());

//: FirstName LastName has completed ? tasks, and FirstName’s
// average score is ? , FirstName’s highest score is ?
