import { FC } from "react";
import { Content } from "./Content";
import { Header } from "./Header";

export const Home: FC = () => {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
};
