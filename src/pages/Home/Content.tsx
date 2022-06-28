import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Create } from "./Create";
import { Media } from "./Media";

export const Content: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Media />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
};
