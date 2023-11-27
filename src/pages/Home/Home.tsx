import Profile from "../../components/Profile/Profile";
import photo from "../../assets/img/profile.webp";

export default function Home() {
  return (
    <section
      className="containerSection animeLeft"
      style={{ display: "flex" }}
      id="home"
    >
      <div className="container">
        <Profile
          presentation="Olá, meu nome é"
          name="Franklin Marden"
          profession="E sou"
          jobs={["Desenvolvedor Full Stack"]}
          description=" Nos últimos anos tenho dedicado meu tempo e foco em projetos de desenvolvimento de aplicações web JavaScript, TypeScript, framework Node.js, consumo de API's, integração de IA em aplicações, comunicação entre cliente, servidor e banco de dados, análise de dados e automação de tarefas com Python."
          buttonHref="contact"
          buttonText="Entrar em contato"
          photo={photo}
          alt="Foto de Franklin Marden"
        />
      </div>
    </section>
  );
}
