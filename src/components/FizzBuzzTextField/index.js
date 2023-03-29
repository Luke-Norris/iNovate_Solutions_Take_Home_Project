import React from 'react';
import { Grid, TextField } from "@mui/material";

function FizzBuzzTextField({ fizz, buzz, handleChange4, handleChange5 }) {
    return (
      <Grid container item direction="row" justifyContent="center" spacing={6}>
        <Grid item>
          <TextField label="Divisor-1 Word" value={fizz} onChange={handleChange4} />
        </Grid>
        <Grid item>
          <TextField label="Divisor-2 Word" value={buzz} onChange={handleChange5} />
        </Grid>
      </Grid>
    );
  }

  export default FizzBuzzTextField;