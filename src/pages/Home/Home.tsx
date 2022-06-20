import { FC } from "react";
import { Card } from "./Card";
import { Header } from "./Header";

export const Home: FC = () => {
  return (
    <div>
      <Header />
      <Card />
    </div>
  );
};
