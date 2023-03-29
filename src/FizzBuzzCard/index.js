import React from 'react';
import { Card, CardContent, Typography, CardActions, CardMedia, Button } from '@mui/material';
import pic from '../media/fizzbuzz.png'
function FizzBuzzCard() {
    return (
        <Card sx={{ maxWidth: 345, height:360, boxShadow: '0px 3px 5px 0px rgba(0,0,0,0.5)' }}>
          <CardMedia
            sx={{ height: 140 }}
            image={pic}
            title="FizzBuzz"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              FizzBuzz
            </Typography>
            <Typography variant="body2" color="text.secondary">
            FizzBuzz is a coding exercise where the program has to print numbers from 1 to n,
            replacing multiples of 3 with "Fizz", multiples of 5 with "Buzz", and multiples of both with "FizzBuzz".
            </Typography>
          </CardContent>
          <br/>
          <CardActions>
            <Button size="small" onClick={() => window.location.href = "http://localhost:3000/fizzbuzz"}>Jump to</Button>
          </CardActions>
        </Card>


      );
};

export default FizzBuzzCard;