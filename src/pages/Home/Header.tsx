import { FC } from "react";
import styles from "./header.module.scss";

export const Header: FC = () => {
  return (
    <div className={styles.body}>
      <p className={styles.logo}>{"<COMPO / >"}</p>
      <p className={styles.description}>
        {"Бесплатный магазин компонентов для вашего сайта"}
      </p>
    </div>
  );
};
