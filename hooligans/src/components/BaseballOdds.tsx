import { useState, useEffect } from 'react';
import axios from "axios";
import { Box, Button, Paper, Stack, styled, Typography } from '@mui/material';

interface Outcomes {
    name: string;
    price: number;
}

function createOutcomes(
    name: string,
    price: number
): Outcomes {
    return {name, price};
}

interface OddsData {
    home: string;
    away: string;
    outcome: Outcomes[];
}

function createOddsData (
    home: string,
    away: string,
    outcome: Outcomes[],
): OddsData {
    return {home, away, outcome};
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '100%',
    height: '100%',
  }));

export const BaseballOdds = () => {
    const[odds, setOdds] = useState([]);
    const [error, setError] : [string, (error: string) => void] = useState("");

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/apiFootball/baseball/odds/",{
            headers: {
                "Content-Type": "application/json"
            }
        }).then((resp) => {
            setOdds(resp.data);
        }).catch(error => {
            setError(error);
        });
    }, [])

    if(error) console.log(error);
    const rows: Array<OddsData>=[];
    if(odds) {
        console.log(odds);
        ((Object.keys(odds) as (keyof typeof odds)[]).forEach((key) => {
            const data = odds[key];
            const home = data['home_team'];
            const away = data['away_team'];
            const out: Array<Outcomes>=[];
            for(let i=0; i<2; i++){
                out.push(createOutcomes(data['outcome'][i]['name'], data['outcome'][i]['price']));
            }
            rows.push(createOddsData(home, away, out));
        }))
    }

    return (
        <Box sx={{ width: '100%', height: '95vh', overflow: 'scroll' }}>
            <h1>Money Line</h1>
            <Stack spacing={2}>
                {rows.map((row) => (
                    <Item>
                        <Typography textAlign='left'>{row.home} vs {row.away}</Typography>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 0, sm: 0, md: 0 }} sx={{justifyContent: 'space-around'}}>
                            <Item>{row.home} <Button>{row.outcome[1].price}</Button></Item>
                            <Item>{row.away} <Button>{row.outcome[0].price}</Button></Item>
                        </Stack>
                    </Item>
                ))}
            </Stack>
        </Box>
    )
}