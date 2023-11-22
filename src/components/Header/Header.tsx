import React from "react";
import Logo from "../Logo/Logo";
import NavMenu from "../Nav/NavMenu";
import NavToggle from "../Nav/NavToggle";
import styles from "./Header.module.scss";

export default function Header() {
  const [openHeader, setOpenHeader] = React.useState(false);

  return (
    <header
      className={`${styles.header} ${openHeader ? `${styles.active}` : ""}`}
    >
      <Logo emphasis="" title="Área Tech"/>
      <NavToggle openHeader={openHeader} setOpenHeader={setOpenHeader} />
      <NavMenu
        Title={["Inicio", "Sobre", "Serviços", "Projetos", "Contato"]}
        iClass={["home", "user", "list", "briefcase", "comments"]}
        href={["", "about", "services", "portfolio", "contact"]}
      />
    </header>
  );
}
