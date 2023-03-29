import React from 'react';
import { Card, CardContent, Typography, CardActions, CardMedia, Button } from '@mui/material';
import pic from './fizzbonacci.jpg'
function FizzbonacciCard() {
    return (
        <Card sx={{ maxWidth: 345,  height:360, boxShadow: '0px 3px 5px 0px rgba(0,0,0,0.5)' }}>
          <CardMedia
            sx={{ height: 140 }}
            image={pic}
            title="Fizzbonacci"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Fizzbonacci
            </Typography>
            <Typography variant="body2" color="text.secondary">
            The Fizzbonacci problem involves printing out the Fibonacci sequence up to a given number n,
            replacing each multiple of 3 with "Fizz", each multiple of 5 with "Buzz", and each multiple of both 3 and 5 with "FizzBuzz".
            </Typography>
          </CardContent>
          <CardActions>
          <Button size="small" onClick={() => window.location.href = "http://localhost:3000/fizzbonacci"}>Jump to</Button>
          </CardActions>
        </Card>


      );
};

export default FizzbonacciCard;