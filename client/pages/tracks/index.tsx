import { Box, Button, Card, Grid, TextField } from "@material-ui/core";
import { useRouter } from "next/router";
import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { TrackList } from "../../components";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import MainLayout from "../../layouts/MainLayout";
import { NextThunkDispatch, wrapper } from "../../store";
import { fetchTracks, searchTracks } from "../../store/action-creators/track";

const Index: React.FC = () => {
  const router = useRouter();
  const { tracks, error } = useTypedSelector((state) => state.trackReducer);
  const [query, setQuery] = React.useState<string>("");
  const [timer, setTimer] = React.useState(null);
  const dispatch = useDispatch as NextThunkDispatch;

  const search = async (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(async () => {
        await dispatch(await searchTracks(e.target.value));
      }, 500)
    );
  };

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
          <TextField fullWidth value={query} onChange={search} />
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
