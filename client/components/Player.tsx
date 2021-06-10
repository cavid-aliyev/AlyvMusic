import React from "react";
import { Pause, PlayArrow, VolumeUp} from "@material-ui/icons";
import { Grid, IconButton } from "@material-ui/core";
import styles from "../styles/Player.module.scss";
import TrackProgress from './TrackProgress';
import { ITrack } from "../types/track";

const Player = () => {
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

  const active = false;
  return (
    <div className={styles.player}>
      <IconButton onClick={(e) => e.stopPropagation()}>
        {!active ? <PlayArrow /> : <Pause />}
      </IconButton>
      <Grid
        container
        direction="column"
        style={{ width: 200, margin: "0 20px" }}
      >
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: "gray" }}>{track.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChange={() => ({})}/>
      <VolumeUp style={{marginLeft: 'auto'}}/>
      <TrackProgress left={0} right={100} onChange={() => ({})}/>
    </div>
  );
};

export default Player;
