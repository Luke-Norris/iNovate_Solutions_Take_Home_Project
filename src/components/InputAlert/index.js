import React from 'react';
import { Alert, AlertTitle } from "@mui/material";

const InputAlert = () => {
  return (
    <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
            Make sure all inputs have the correct <strong>type!</strong>
    </Alert>
  );
};

export default InputAlert;