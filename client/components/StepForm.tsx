import { Grid, TextField } from "@material-ui/core";
import React from "react";
import { useInput } from "../hooks/useInput";

interface StepFormProps {
  name: any;
  artist: any;
  text: any;
}

const StepForm: React.FC<StepFormProps> = ({ name, artist, text }) => {
  return (
    <Grid container direction={"column"} style={{ padding: 20 }}>
      <TextField {...name} style={{ marginTop: 10 }} label="Track Name" />
      <TextField {...artist} style={{ marginTop: 10 }} label="Artist name" />
      <TextField
        {...text}
        style={{ marginTop: 10 }}
        label={"Track words"}
        multiline
        rows={3}
      />
    </Grid>
  );
};

export default StepForm;
