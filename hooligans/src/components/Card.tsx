import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const card = (
  <React.Fragment>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Place Your Bets
      </Typography>
      <Typography variant="h5" component="div">
        Bets
      </Typography>
      <br />
      <Typography variant="body2">
        Select picks to then see the different types of bets available, including Singles, Parlays, Teasers, Round Robins and more.
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275, width: '400px', marginTop: 2, marginLeft: '40px' }}>
      <Card id='bet-card' variant="outlined">{card}</Card>
    </Box>
  );
}