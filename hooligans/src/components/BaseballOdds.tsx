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
    key: string;
    date: Date;
    home: string;
    away: string;
    outcome: Outcomes[];
}

function createOddsData (
    key: string,
    date: Date,
    home: string,
    away: string,
    outcome: Outcomes[],
): OddsData {
    return {key, date, home, away, outcome};
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

interface bet {
    key: string,
    pick: string,
    event: string,
    odds: number,
    date: string,
    user?: string
}

function createBet (
    key: string,
    pick: string,
    event: string,
    odds: number,
    date: string,
    user?: string
  
  ): bet {
    return {key, pick, event, odds, date, user};
}

export const BaseballOdds = (props) => {
    const { onAdd } = props;
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
        ((Object.keys(odds) as (keyof typeof odds)[]).forEach((key) => {
            const data = odds[key];
            const k = data['id'];
            const date = new Date(data['date']);
            const home = data['home_team'];
            const away = data['away_team'];
            const out: Array<Outcomes>=[];
            for(let i=0; i<2; i++){
                out.push(createOutcomes(data['outcome'][i]['name'], data['outcome'][i]['price']));
            }
            rows.push(createOddsData(k, date, home, away, out));
        }))
    }

    var check = {} as bet; 

    return (
        <Box sx={{ width: '100%', height: '95vh', overflow: 'scroll' }}>
            <h1>Money Line</h1>
            <Stack spacing={2} sx ={{width: '1000px', margin: '0 auto'}}>
                {rows.map((row) => (
                    <Item key={row.key}>
                        <Box component="span" display="inline-flex" sx={{width: 'inherit', justifyContent: 'space-between'}}><Typography  textAlign='left'>{row.home} vs {row.away}</Typography> <Typography textAlign='right'>{row.date.toUTCString()}</Typography></Box>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 0, sm: 0, md: 0 }} sx={{justifyContent: 'space-around'}} >
                            <Item>{row.home} <Button onClick={() => {check = createBet(row.key, row.home, row.home+' @ '+row.away, row.outcome[1].price, new Date().toUTCString()); onAdd(check)}}>{(row.outcome[1].price > 0) && '+'+row.outcome[1].price}{(row.outcome[1].price < 0) && row.outcome[1].price}</Button></Item>
                            <Item>{row.away} <Button onClick={() => {check = createBet(row.key, row.away, row.home+' @ '+row.away, row.outcome[0].price, new Date().toUTCString()); onAdd(check)}}>{(row.outcome[0].price > 0)&& '+'+row.outcome[0].price}{(row.outcome[0].price < 0) && row.outcome[0].price}</Button></Item>
                        </Stack>
                    </Item>
                ))}
            </Stack>
        </Box>
    )
}