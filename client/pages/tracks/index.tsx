import { Box, Button, Card, Grid } from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";
import { TrackList } from "../../components";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";



const Index: React.FC = () => {
  const router = useRouter();
  const tracks: ITrack[] = [
    {
      _id: "1",
      name: "Track1",
      artist: "Morgen",
      text: "Some texts",
      listens: 5,
      audio: "smth",
      picture: 'sdsds',
      comments: [],
    },
    {
      _id: "2",
      name: "Track2",
      artist: "Smash",
      text: "Some texts",
      listens: 15,
      audio: "smth",
      picture: "sdsd",
      comments: [],
    },
    {
      _id: "3",
      name: "Track3",
      artist: "Ari",
      text: "Some texts",
      listens: 25,
      audio: "smth",
      picture: "sdsd",
      comments: [],
    },
  ];
  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Track List</h1>
              <Button onClick={() => router.push("/tracks/create")}>
                Download
              </Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;
