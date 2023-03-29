import React from 'react';
import { Grid, Button } from "@mui/material";

function RunButton({ runProgramMsg, runProgram }) {
    return (
        <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item>
                <h2>{runProgramMsg}</h2>
            </Grid>
            <Grid item>
                <Button variant="contained" color="primary" onClick={runProgram}>Run</Button>
            </Grid>
        </Grid>
    );
  }

  export default RunButton;