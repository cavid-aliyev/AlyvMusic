import { Button, Grid, TextField } from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";

const TrackPage = () => {
  const router = useRouter();

  const track: ITrack = {
    _id: "1",
    name: "Track1",
    artist: "Morgen",
    text: "Some texts",
    listens: 5,
    audio: "smth",
    picture: "sdsds",
    comments: [],
  };

  return (
    <MainLayout>
      <Button
        variant="outlined"
        style={{ fontSize: 32 }}
        onClick={() => router.push("/tracks")}
      >
        go back list
      </Button>
      <Grid container style={{ margin: "20px 0" }}>
        <img src={track.picture} width={200} height={200} alt="Track Info" />
        <div style={{ marginLeft: "30px" }}>
          <h1>Track name - {track.name}</h1>
          <h1>Track artist - {track.artist}</h1>
          <h1>Listens - {track.listens}</h1>
        </div>
      </Grid>
      <h1>Track Text</h1>
      <p>{track.text}</p>
      <h1>Comments</h1>
      <Grid container>
        <TextField label="Your name" fullWidth />
        <TextField label="Comment" fullWidth multiline rows={4} />
        <Button>Send</Button>
      </Grid>
      <div>
        {track.comments.map((comment) => (
          <div>
            <div>Author - {comment.username}</div>
            <div>Comment - {comment.text}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default TrackPage;
