import { Container } from "@material-ui/core";
import React from "react";
import { Navbar, Player } from "../components";
import Head from "next/head";
import { TimeToLeaveOutlined } from "@material-ui/icons";

interface MainLayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title,
  description,
  keywords,
}) => {
  return (
    <>
      <Head>
        <title>{title || "Music Platform"}</title>
        <meta
          name="description"
          content={
            "Music Platform. Ypu can list all your favoriye musics here" +
            description
          }
        />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={keywords || "Music, tracks, artists"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Container style={{ margin: "90px 0" }}>{children}</Container>
      <Player />
    </>
  );
};

export default MainLayout;
