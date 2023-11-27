import styles from "./Projects.module.scss";

// Adicionar os projetos:
// Obs.: Ainda está faltando 3 projetos que tem pendências.


import todolist from "../../assets/img/todolist.webp";
import webgenerative from "../../assets/img/webgenerative.gif";
import webshort from "../../assets/img/webshort.gif";

import html from "../../assets/svg/html.svg";
import css from "../../assets/svg/css.svg";
import javascript from "../../assets/svg/javascript.svg";
import react from "../../assets/svg/react.svg";
import typescript from "../../assets/svg/typescript.svg";
// import sass from "../../assets/svg/sass.svg";
// import webpack from "../../assets/svg/webpack.svg";
// import gulp from "../../assets/svg/gulp.svg";
// import eslint from "../../assets/svg/eslint.svg";
// import styledComponents from "../../assets/svg/styled-components.svg";
import java from "../../assets/svg/java.svg";
import springboot from "../../assets/svg/springboot.svg";
import docker from "../../assets/svg/docker.svg";
import maven from "../../assets/svg/maven.svg";
import tailwind from "../../assets/svg/tailwind.svg";
import node from "../../assets/svg/node.svg";
import openai from "../../assets/svg/openai.svg";
import xenova from "../../assets/svg/xenova.svg";

import ProjectItem from "../../components/ProjectItem/ProjectItem";
import Title from "../../components/Title/Title";

export default function Projects() {
  return (
    <section className="containerSection animeLeft">
      <div className="container">
        <Title title="Projetos" />

        <div className={styles.heading}>
          <h2>Meus últimos projetos :</h2>
        </div>

        <div className={styles.row}>
          <ProjectItem
            img={todolist}
            alt="To Do List"
            href="https://github.com/FranklinMSR/todolist"
            skill={["Java", "Spring boot", "Docker", "Maven"]}
            icon={[java, springboot, docker, maven]}
          />

          <ProjectItem
            img={webgenerative}
            alt="AI Web Generative"
            href="https://github.com/FranklinMSR/Ai-Web-Generative"
            skill={["TypeScript", "Tailwind CSS", "React", "Node.js", "API OpenAI"]}
            icon={[typescript, tailwind, react, node, openai]}
          />
          
          <ProjectItem
            img={webshort}
            alt="Youtube Short Summary"
            href="https://github.com/FranklinMSR/Web-Shorts-Summary"
            skill={["JavaScript", "HTML5", "CSS3", "React", "Node.js", "API convert"]}
            icon={[javascript, html, css, react, node, xenova]}
          />
        </div>
      </div>
    </section>
  );
}
