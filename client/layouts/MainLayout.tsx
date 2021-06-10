import { Container } from "@material-ui/core";
import React from "react";
import { Navbar, Player } from "../components";

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container style={{ margin: "90px 0" }}>{children}</Container>
      <Player />
    </>
  );
};

export default MainLayout;
