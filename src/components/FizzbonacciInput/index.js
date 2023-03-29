import React from 'react';
import { Grid, TextField } from "@mui/material";

function FizzbonacciInput({ input, handleChange1, label1 }) {
    return (
      <Grid container item direction="row" justifyContent="center" spacing={6}>
        <Grid item>
          <TextField label={label1} value={input} onChange={handleChange1} />
        </Grid>
      </Grid>
    );
  }

  export default FizzbonacciInput;