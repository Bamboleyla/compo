import { FC } from "react";
import styles from "./app.module.scss";
import { Home } from "./pages/Home/Home";

const App: FC = () => {
  return (
    <div className={styles.app}>
      <Home />
    </div>
  );
};

export default App;
