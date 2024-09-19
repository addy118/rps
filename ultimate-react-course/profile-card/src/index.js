import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar pfp="addy-blue.jpg" />
      <div className="data">
        <Intro
          name="Aditya"
          info="I'm currently pursuing B.E. in Information Technology at TCET. I love to code and explore new things as much as possible."
        />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img src={props.pfp} alt="" className="avatar" />;
}

function Intro(props) {
  return (
    <div className="data">
      <h1>{props.name}</h1>
      <div>{props.info}</div>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill
        skillName="HTML+CSS"
        emoji="💪🏻"
        bgColor="green"
      />
      <Skill
        skillName="React"
        emoji="👶🏻"
        bgColor="aqua"
      />
      <Skill
        skillName="JavaScript"
        emoji="💪🏻"
        bgColor="orange"
      />
      <Skill
        skillName="Git"
        emoji="👍🏻"
        bgColor="red"
      />
      <Skill
        skillName="GitHUB"
        emoji="👍🏻"
        bgColor="brown"
      />
      <Skill
        skillName="Python"
        emoji="👍🏻"
        bgColor="blue"
      />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.bgColor }}>
      <span>{props.skillName}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
