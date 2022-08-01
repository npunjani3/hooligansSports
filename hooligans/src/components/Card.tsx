import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import BetCardContent from './BetCardContent.jsx';
import BetContent from './BetContent.jsx';
import { Button } from '@mui/material';

export const card = (
  <React.Fragment>
    <BetCardContent />
  </React.Fragment>
);

interface bet {
  key: string;
  pick: string;
  event: string;
  odds: number;
  date: string;
  user?: string;
}

export default function OutlinedCard(props) {
  const { bets, onRemove } = props;

  return (
    <Box sx={{ minWidth: 275, width: '400px', marginTop: 2, marginLeft: '40px' }}>
      <Card id='bet-card' variant="outlined">
          {bets.length === 0 && <BetCardContent />}
          {bets.length !== 0 && bets.map((bet: bet) => (<BetContent bet={bet} key={bet.key} onRemove={onRemove} betType='MoneyLine'/>))}
          {bets.length !== 0 && <Button>Submit Bet</Button>}
      </Card>
    </Box>
  );
}

// key={bet.key} pick={bet.pick} event={bet.event} odds={bet.odds}