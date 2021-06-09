import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { StepForm, StepWrapper } from "../../components";
import { Button, Grid } from "@material-ui/core";

const Create: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const back = () => {
    setActiveStep((prev) => prev - 1);
  };
  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && <StepForm />}
        {activeStep === 1 && <h1>Step 1</h1>}
        {activeStep === 2 && <h1>Step 2</h1>}
      </StepWrapper>
      <Grid container justifyContent="space-between">
        <Button disabled={activeStep === 0} onClick={back}>
          Back
        </Button>
        <Button onClick={next}>Next</Button>
      </Grid>
    </MainLayout>
  );
};

export default Create;
