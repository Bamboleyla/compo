import { FC, useState } from "react";
import createSVG from "./create.svg";
import saveSVG from "./save.svg";
import styles from "./createButton.module.scss";
import { NavLink } from "react-router-dom";

export const CreateButton: FC = () => {
  const [icon, setIcon] = useState<string>("create");

  return {
    ...(icon === "create" ? (
      <NavLink to="/create" style={{ height: "30px" }} onClick={()=>setIcon('save')}>
        <img src={createSVG} alt="create" className={styles.create} />
      </NavLink>
    ) : (
      <img src={saveSVG} alt="save" className={styles.create} />
    )),
  };
};
