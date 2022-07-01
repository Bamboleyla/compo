import { FC } from "react";
import styles from "./header.module.scss";
import profileIMG from "./profile.svg";
import { NavLink } from "react-router-dom";
import { CreateButton } from "./CreateButton";

export const Header: FC = () => {
  return (
    <div className={styles.body}>
      <NavLink to="/">
        <p className={styles.logo}>{"<COMPO / >"}</p>
      </NavLink>
      <nav className={styles.interface}>
        <CreateButton />
        <NavLink to="/singin" style={{ height: "50px" }}>
          <img src={profileIMG} alt="profile" className={styles.profile} />
        </NavLink>
      </nav>
    </div>
  );
};
