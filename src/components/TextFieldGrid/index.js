import React from 'react';
import { Grid, TextField } from "@mui/material";

function TextFieldGrid({ input, handleChange1, divisor1, handleChange2, divisor2, handleChange3, label1, label2, label3 }) {
    return (
      <Grid container item direction="row" justifyContent="center" spacing={6}>
        <Grid item>
          <TextField label={label1} value={input} onChange={handleChange1} />
        </Grid>
        <Grid item>
          <TextField label={label2} value={divisor1} onChange={handleChange2} />
        </Grid>
        <Grid item>
          <TextField label={label3} value={divisor2} onChange={handleChange3} />
        </Grid>
      </Grid>
    );
  }

  export default TextFieldGrid;