import styles from "./About.module.scss";
import Button from "../../components/Button/Button";
import InfoItem from "../../components/InfoItem/InfoItem";
import SkillItem from "../../components/SkillItem/SkillItem";
import TimelineItem from "../../components/TimelineItem/TimelineItem";
import Title from "../../components/Title/Title";

export default function About() {
  const skills = [
    { skill: "HTML5", progress: "90%" },
    { skill: "CSS3", progress: "80%" },
    { skill: "Tailwind CSS", progress: "80%" },
    { skill: "JavaScript", progress: "80%" },
    { skill: "Git", progress: "80%" },
    { skill: "Docker", progress: "60%" },
    { skill: "React.JS", progress: "80%" },
    { skill: "TypeScript", progress: "70%" },
    { skill: "Spring Boot", progress: "50%" },
    { skill: "Node.JS", progress: "70%" },
    { skill: "Java", progress: "65%" },
    { skill: "Python", progress: "60%" },
    { skill: "IA Generativa", progress: "60%" },
  ];

  skills.sort((a, b) => {
    const progressA = parseInt(a.progress);
    const progressB = parseInt(b.progress);

    return progressB - progressA;
  });

  return (
    <section
      className="containerSection animeLeft"
      style={{ display: "block", left: "270px" }}
    >
      <div className="container">
        <Title title="Sobre mim" />

        <div className={styles.row}>
          <div className={styles.content}>
            <div className={styles.row}>
              <div className={styles.text}>
                <h3>
                  Me chamo Franklin Marden e sou{" "}
                  <span>Desenvolvedor Full Stack</span>
                </h3>
                <p>
                  Atuo em projetos de desenvolvimento JavaScript e TypeScript,
                  framework Node.js, consumo de APIs, integração de IA em
                  aplicações, desenvolvimento front-end utilizando React.js,
                  HTML5, CSS3, Tailwind CSS e outras ferramentas, comunicação
                  entre cliente, servidor e banco de dados, gerenciamento de
                  código com Git, conhecimento de Back End em Java 17, Maven,
                  Lombok e framework Spring Boot, APIs Rest, Docker, automação
                  de tarefas e análise de dados com Python. Além disso, tenho
                  experiência em gerenciamento de websites e redes sociais,
                  utilização de ferramentas da Adobe para criação de materiais
                  de divulgação.
                </p>
                <br />
                <p>
                  Atuei nos setores de vendas, comércio familiar e uma grande
                  rede varejista, tendo experiências com atendimento, rotinas
                  administrativas e negociação. Dada a urgência de garantir uma renda para suprir necessidades básicas, e recém-chegado em uma nova
                  cidade, aceitei o desafio de atuar no setor de vendas,
                  lidando constantemente com o público, pressão para vender e
                  alcançar metas.
                  Essas experiências e adversidades me beneficiaram com algumas
                  soft skills, como flexibilidade, resiliência, comunicação,
                  trabalho em equipe e cooperação.
                </p>
                <br />
                <p>
                  Desde setembro de 2022, após um período de muito planejamento,
                  pude direcionar meu tempo e foco no desenvolvimento de
                  projetos, investir na minha qualificação profissional e
                  formação acadêmica. Podendo assim atuar no campo pelo qual
                  sempre tive fascínio e obstinação profissional.
                </p>
                <br />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.info}>
                <InfoItem pText="Cidade : " spanText="Curitiba" />
                <InfoItem pText="Estado : " spanText="PR" />
                <InfoItem
                  pText="Email : "
                  aText="rodrigues_marden@hotmail.com"
                />
                <InfoItem pText="Telefone : " aText="(41) 99580-2320" />
                <InfoItem
                  pText="LinkedIn : "
                  aText="in/franklin-marden-3a89b4167"
                  aHref="https://www.linkedin.com/in/franklin-marden-3a89b4167/"
                />
                <InfoItem
                  pText="GitHub : "
                  aText="FranklinMSR"
                  aHref="https://github.com/FranklinMSR"
                />

                <div className={styles.buttons}>
                  <Button
                    href="https://drive.google.com/u/0/uc?id=1QFxb9k_es4c0GNNDFktxXogNf7J6woM_&export=download"
                    download
                  >
                    Baixar CV
                  </Button>
                  <Button href="contact">Contate-me</Button>
                </div>
              </div>

              <div className={styles.skills}>
                <div className={styles.row}>
                  {skills.map((skill, index) => (
                    <SkillItem
                      key={index}
                      skill={skill.skill}
                      progress={skill.progress}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.experience}>
                <h3 className={styles.title}>Experiências Profissionais</h3>
                <div className={styles.row}>
                  <div className={styles.timeline}>
                    <TimelineItem
                      date="Setembro / 2022 - Atualmente"
                      location=""
                      city="Curitiba - PR"
                      title="(Desenvolvedor Full Stack)"
                      subtitle="Freelancer"
                      text="Desenvolvimento de aplicações web com JavaScript/TypeScript, framework Node.js, consumo de API's, integração de IA em aplicações, comunicação entre cliente, servidor e banco de dados, gerenciamento de código com Git, deployment, react.js, HTML5, CSS3, Tailwind CSS e outras ferramentas de desenvolvimento front-end. Automação de tarefas e análise de dados com Python, IDE Jupyter Notebook. Back-end Java, Maven, Lombok, Spring Boot, API Rest, Docker."
                    />

                    <TimelineItem
                      date="Abril / 2019 - Outubro / 2020"
                      location=""
                      city="Curitiba - PR"
                      title="(Vendedor)"
                      subtitle="Magazine Luíza"
                      text="Atendimento de clientes em loja e app.  Comunicação, negociação, cumprimento de metas e fechamento de vendas produtos e serviços."
                    />

                    <TimelineItem
                      date="Agosto / 2015 - Julho / 2017"
                      location=""
                      city="Montes Claros - MG"
                      title="(Assistente de Processamento de Dados)"
                      subtitle="Jair Amintas Imóveis"
                      text="Gerenciamento de sistemas, website e banco de dados na parte de cliente imóveis/pessoas, gerenciamento de redes sociais e outros canais de vendas. Edição e criação de material para divulgação em redes sociais e website ultilizando ferramentas Adobe. Análise, formatação e emissão de contratos locação e venda. Suporte técnico a equipamentos de informática e usuários no ambiente da empresa, a fim de garantir fluidez dos processos."
                    />

                    <TimelineItem
                      date="Janeiro / 2012 - Dezembro / 2012"
                      location=""
                      city="Montes Claros - MG"
                      title="(Estagiário)"
                      subtitle="Fundação Educacional Montes Claros - FEMC"
                      text="Suporte na preparação dos ambientes de aulas, testes de equipamentos, computadores, painéis elétricos, instrumentos de precisão, sistemas e softwares de engenharia e programação de máquinas."
                    />
                  </div>
                </div>
              </div>

              <div className={styles.education}>
                <h3 className={styles.title}>Informações Acadêmicas</h3>
                <div className={styles.row}>
                  <div className={styles.timeline}>
                    <TimelineItem
                      date="Janeiro / 2023 - Julho / 2025"
                      location=""
                      city="Faculdade Estácio / Curitiba - PR"
                      title="(Análise e Desenvolvimento de Sistemas)"
                      subtitle="Graduação Tecnológica"
                      text="Linguagem e lógica de programação, redes de computadores, segurança da informação, desenvolvimentos de aplicações web, mobile e desktop, design de interfaces, inteligência artificial e machine learning, infraestrutura e banco de dados, sistemas operacionais, engenharia e arquitetura de softwares, análise de dados."
                    />

                    <TimelineItem
                      date="Janeiro / 2011 - Julho / 2013"
                      location=""
                      city="Fundação Educacional Montes Claros - FEMC / Montes Claros - MG"
                      title="(Mecânica e Automação Industrial)"
                      subtitle="Graduação Tecnológica"
                      text="Automação de processos industriais de produção, programação de máquinas CAD/CAM, instrumentos de medição e precisão, softwares de engenharia, metrologia, operação e manutenção de máquinas industriais controladas por computador com comando numérico CNC."
                    />
                  </div>
                </div>
                <br />
                <h3 className={styles.title}>Certificados</h3>
                <div className={styles.timeline}>
                  <TimelineItem
                    date="2023"
                    location=""
                    city="Rocketseat"
                    title="(IA Generativa)"
                    text="IA gerador de textos, tendo como protótipo arquivos de vídeo, utilizando de prompts para customizar o resultado final através de uma aplicação web em TypeScript, JavaScript e Node.js realizando requisições em API OpenAI utilizando Axios."
                  />
                  <TimelineItem
                    date="2023"
                    location=""
                    city="Rocketseat"
                    title="(Java 17 e Spring Boot)"
                    text="Desenvolvimento de uma aplicação back-end em Java, Maven, Spring Boot, API Rest, Lombok, Integração com H2 Database Engine, Implementando segurança nos dados do usuário, Tratamento de Exceções e Deploy do back-end."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
