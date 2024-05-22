const person = {
  name: "Anthony Lloveras",
  position: "Acumen Trainer",
  yrsOfExperience: 5,
  skills: ["NodeJS", "PHP", "Python"],
};

// Anthony Lloveras skills: NodeJS
// Anthony Lloveras skills: PHP
//Anthony Lloveras skills: Python

const personSkills = person.skills.map(function (newskill) {
  return `Anthony Lloveras skills: ${newskill}`;
});

console.log(personSkills);

// const personSkills = person.skills.map(
//   (skill) => `${person.name} skills: ${skill}`
// );
// const opInterpolate = personSkills.join("\n");
// console.log(opInterpolate);
