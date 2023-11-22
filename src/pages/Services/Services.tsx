import ServiceItem from "../../components/ServiceItem/ServiceItem";
import Title from "../../components/Title/Title";
import styles from "./Services.module.scss";

export default function Services() {
  return (
    <section className="containerSection animeLeft">
      <div className="container">
        <Title title="Serviços" />

        <div className={styles.row}>
          <ServiceItem
            title="Implementação de Formulários Interativos"
            description="Criação de formulários com validação de dados e feedback visual em tempo real."
            icon="fas fa-file-alt"
          />
          <ServiceItem
            title="Desenvolvimento de Interfaces Responsivas"
            description="Criação de layouts adaptáveis para proporcionar uma experiência consistente em diferentes dispositivos."
            icon="fas fa-mobile-alt"
          />
          <ServiceItem
            title="Integrações de API"
            description="Integração de APIs para melhorar a funcionalidade e experiência do usuário, economia de tempo e recursos, facilidade de integração, segurança e economia financeira."
            icon="fas fa-code"
          />
          <ServiceItem
            title="Desenvolvimento de Portfólios Online"
            description="Criação de sites personalizados para exibir o trabalho e as habilidades de profissionais em diversas áreas."
            icon="fas fa-suitcase"
          />
        </div>
      </div>
    </section>
  );
}
