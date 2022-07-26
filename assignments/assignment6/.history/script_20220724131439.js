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
    return (
      this.firstName +
      " " +
      this.lastName +
      ` has completed ` +
      this.score.length +
      ` tasks, and ` +
      this.firstName +
      `'s average score is ` +
      this.calAvgScore() +
      ", " +
      this.firstName +
      `'s highest score is ` +
      this.calHighestScore()
    );
  },
};

console.log(peter.showSummary());

//Question 2
console.log(`Question 2: `);
function CovertCelsiusToFahrenheit(celsius) {
  while (isNaN(celsius)) {
    alert(`Please enter a number`);
    celsius = prompt("Enter the celsius temperature again");
  }
  while (celsius < -88 || celsius > 55) {
    alert(`Please enter a number between -88 and 55.`);
    celsius = Number(prompt("Enter the celsius temperature again:"));
  }
  fahrenheit = (celsius * 9) / 5 + 32;
  console.log(`${celsius}°C is ${fahrenheit}°F";`);
  return celsius;
}
CovertCelsiusToFahrenheit(prompt("Enter the celsius temperature"));
