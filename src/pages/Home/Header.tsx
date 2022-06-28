import { FC } from "react";
import styles from "./header.module.scss";
import createIMG from "./create.png";
import profileIMG from "./profile.png";

export const Header: FC = () => {
  return (
    <div className={styles.body}>
      <p className={styles.logo}>{"<COMPO / >"}</p>
      <div className={styles.interface}>
        <img src={createIMG} alt="create" className={styles.create} />
        <img src={profileIMG} alt="profile" className={styles.profile} />
      </div>
    </div>
  );
};
