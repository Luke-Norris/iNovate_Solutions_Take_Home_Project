import React from 'react';
import { Card, CardContent, Typography, CardActions, CardMedia, Button } from '@mui/material';
import pic from './fibonacci.png'
function FibonacciCard() {
    return (
        <Card sx={{ maxWidth: 345,  height:360, boxShadow: '0px 3px 5px 0px rgba(0,0,0,0.5)' }}>
          <CardMedia
            sx={{ height: 140 }}
            image={pic}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Fibbonaci Sequence
            </Typography>
            <Typography variant="body2" color="text.secondary">
            The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding numbers.
            It appears frequently in nature and is used in many mathematical and scientific applications.
            </Typography>
          </CardContent>
          <CardActions>
          <Button size="small" onClick={() => window.location.href = "http://localhost:3000/fibonacci"}>Jump to</Button>
          </CardActions>
        </Card>


      );
};

export default FibonacciCard;