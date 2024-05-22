const person = {
  name: "Anthony Lloveras",
  position: "Acumen Trainer",
  yrsOfExperience: 5,
  skills: ["NodeJS", "PHP", "Python"],
  greet: () => {
    console.log(person);
  },
  goodBye: function () {
    console.log(this.name);
  },
};

// Anthony Lloveras skills: NodeJS
// Anthony Lloveras skills: PHP
//Anthony Lloveras skills: Python

person.greet();
