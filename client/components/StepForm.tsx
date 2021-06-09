import { Grid, TextField } from "@material-ui/core";
import React from "react";

const StepForm: React.FC = () => {
  return (
    <Grid container direction={"column"} style={{padding: 20}}>
      <TextField style={{ marginTop: 10 }} label={"Track Name"} />
      <TextField style={{ marginTop: 10 }} label={"Artist name"} />
      <TextField
        style={{ marginTop: 10 }}
        label={"Track words"}
        multiline
        rows={3}
      />
    </Grid>
  );
};

export default StepForm;
