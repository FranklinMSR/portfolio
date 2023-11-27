import { useState } from "react";
import Button from "../../components/Button/Button";
import ContactItem from "../../components/ContactItem/ContactItem";
import Input from "../../components/Form/Input";
import Textarea from "../../components/Form/Textarea";
import Title from "../../components/Title/Title";
import styles from "./Contact.module.scss";
import useEmail from "../../hooks/useEmail";
import Error from "../../helper/Error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorSubject, setErrorSubject] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { sendEmail, error } = useEmail();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (name === "") {
      setErrorName("O campo nome é obrigatório.");

      setTimeout(() => {
        setErrorName("");
      }, 3000);
      return;
    }

    if (email === "") {
      setErrorEmail("O campo email é obrigatório.");
      setTimeout(() => {
        setErrorEmail("");
      }, 3000);
      return;
    }

    if (subject === "") {
      setErrorSubject("O campo assunto é obrigatório.");
      setTimeout(() => {
        setErrorSubject("");
      }, 3000);
      return;
    }

    if (message === "") {
      setErrorMessage("O campo mensagem é obrigatório.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return;
    }

    setLoading(true);

    await sendEmail({ name, email, subject, message });

    if (error === "") {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }

    setLoading(false);
  }

  return (
    <section className="containerSection animeLeft">
      <div className="container">
        <Title title="Contato" />

        <h3 className={styles.title}>Você tem alguma pergunta?</h3>
        <h4 className={styles.subtitle}>Estou à disposição!</h4>

        <div className={styles.rowContact}>
          <ContactItem
            icon="phone"
            title="Celular"
            subtitle="(41) 99580-2320"
            aHref="tel:5541995802320"
          />
          <ContactItem
            icon="envelope"
            title="Email"
            subtitle="rodrigues_marden@hotmail.com"
            aHref="mailto:rodrigues_nmarden@hotmail.com"
          />
          <ContactItem
            icon="map-marker-alt"
            title="Endereço"
            subtitle="Curitiba, PR"
          />
          <ContactItem
            icon="globe-europe"
            title="LinkedIn"
            subtitle="in/franklin-marden-3a89b4167/"
            aHref="https://www.linkedin.com/in/franklin-marden-3a89b4167/"
          />
        </div>

        <h3 className={styles.title}>Me mande um e-mail</h3>
        <h4 className={styles.subtitle}>Minha resposta será rápida!</h4>

        <div className={styles.row}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <Input
                type="text"
                placeholder="Nome"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={errorName}
              />
              <Input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errorEmail}
              />
            </div>

            <div className={styles.row}>
              <Input
                type="text"
                id="subject"
                name="subject"
                placeholder="Assunto"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                error={errorSubject}
              />
            </div>

            <div className={styles.row}>
              <Textarea
                placeholder="Mensagem"
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                error={errorMessage}
              />
            </div>

            <div className={styles.row}>
              {loading ? (
                <Button type="submit" disabled>
                  Enviando...
                </Button>
              ) : (
                <Button type="submit">Enviar mensagem</Button>
              )}
              <Error error={error} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
