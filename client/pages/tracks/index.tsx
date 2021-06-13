import { Box, Button, Card, Grid } from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";
import { TrackList } from "../../components";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import MainLayout from "../../layouts/MainLayout";
import { NextThunkDispatch, wrapper } from "../../store";
import { fetchTracks } from "../../store/action-creators/track";
import { ITrack } from "../../types/track";

const Index: React.FC = () => {
  const router = useRouter();
  const { tracks, error } = useTypedSelector((state) => state.trackReducer);

  if (error) {
    return (
      <MainLayout>
        <h1>{error}</h1>
      </MainLayout>
    );
  }

  return (
    <MainLayout title="Tracks list">
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

//send request next
export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const dispatch = store.dispatch as NextThunkDispatch;
    await dispatch(await fetchTracks());
  }
);
