import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import React from 'react';

export default function BetCardContent()  {
    return (
        <>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
            <CardContent id = 'bet-card-content'>
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
        </>
    )
};