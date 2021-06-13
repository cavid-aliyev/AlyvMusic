import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { FileUpload, StepForm, StepWrapper } from "../../components";
import { Button, Grid } from "@material-ui/core";
import { useRouter } from "next/router";
import {useInput} from "../../hooks/useInput";
import axios from "axios";

const Create: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [picture, setPicture] = React.useState(null);
  const [audio, setAudio] = React.useState(null);
  const router = useRouter()
  const name = useInput('')
  const artist = useInput('')
  const text = useInput('')

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep((prev) => prev + 1);
    } else {
      const formData = new FormData()
      formData.append('name', name.value)
      formData.append('text', text.value)
      formData.append('artist', artist.value)
      formData.append('picture', picture)
      formData.append('audio', audio)
      axios.post('http://localhost:5000/tracks', formData)
          .then(resp => router.push('/tracks'))
          .catch(e => console.log(e))
    }
  };

  const back = () => {
    setActiveStep((prev) => prev - 1);
  };
  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && <StepForm name={name} text={text} artist={artist}/>}
        {activeStep === 1 && (
          <FileUpload setFile={setPicture} accept="image/*">
            <Button>Download Image</Button>
          </FileUpload>
        )}
        {activeStep === 2 && (
          <FileUpload setFile={setAudio} accept="audio/*">
            <Button>Download Audio</Button>
          </FileUpload>
        )}
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
