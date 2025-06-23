import skills from "skills.jsx";

const skill = [
  {
    language: html,
    years: 4,
  },
  {
    language: css,
    years: 4,
  },
  {
    language: javascript,
    years: 4,
  },
];

function Component({}) {
  for (let i = 0; i < skill.length; i++) {
    skills.language = skill[i].language;
    skills.years = skill[i].years;
  }
}

export default Component;
