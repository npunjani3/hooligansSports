import { useState, useEffect } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Data from '../assets/mlsStandings.json';


interface StandingData {
    key: number;
    conf: string;
    standing: number;
    team: string;
    mp: number;
    w: number;
    d: number;
    l: number;
    g: string;
    a: number;
    p: number;
}

function createData(
    key: number,
    conf: string,
    standing: number,
    team: string,
    mp: number,
    w: number,
    d: number,
    l: number,
    g: string,
    a: number,
    p: number
): StandingData { 
    return {key, conf, standing, team, mp, w, d, l, g, a, p};
}

const rows: Array<StandingData> = [];
const rows2: Array<StandingData> = [];
const teams = Data[0];


for (let i = 0; i < 28; i++) {
    if(i >13) rows2.push(createData(i,teams[i]["group"],teams[i]["rank"], teams[i]["name"], teams[i]["mp"], teams[i]["w"], teams[i]["d"], teams[i]["l"], teams[i]["gf"].toString()+':'+teams[i]["gl"].toString(), teams[i]["diff"], teams[i]["p"]));
    rows.push(createData(i,teams[i]["group"],teams[i]["rank"], teams[i]["name"], teams[i]["mp"], teams[i]["w"], teams[i]["d"], teams[i]["l"], teams[i]["gf"].toString()+':'+teams[i]["gl"].toString(), teams[i]["diff"], teams[i]["p"]));
}

export const SoccerStandings = () => {
    const [standing, setStanding] = useState([]);
    /*
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/apiFootball/soccer/standings/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => setStanding(response))
        .catch( error => console.log(error))
    }, [])
    //const rows: Array<StandingData> = [];
    //const rows2: Array<StandingData> = [];

    /*
    for (let i = 0; i < 28; i++) {
        if(i >13) rows2.push(createData(i,teams[i]["group"],teams[i]["rank"], teams[i]["name"], teams[i]["mp"], teams[i]["w"], teams[i]["d"], teams[i]["l"], teams[i]["gf"]+':'+teams[i]["gl"], teams[i]["diff"], teams[i]["p"]));
        rows.push(createData(i,teams[i]["group"],teams[i]["rank"], teams[i]["name"], teams[i]["mp"], teams[i]["w"], teams[i]["d"], teams[i]["l"], teams[i]["gf"]+':'+teams[i]["gl"], teams[i]["diff"], teams[i]["p"]));
    }
    */

    return (
        <TableContainer component={Paper} sx={{margin: '30px auto 0px auto', width: 1000, height: '90vh', overflow: 'scroll'}}>
            <Typography variant="h5" component='div'>Soccer Standings</Typography>
            <Table sx={{minWidth: 700}}>
                <TableHead>
                    <TableRow>
                        <TableCell >{Data[0]["league"]["country"]+': '+Data[0]["league"]["league"]} <Typography variant="h6"> Eastern Conference </Typography></TableCell>
                        <TableCell align='right'>MP</TableCell>
                        <TableCell align='right'>W</TableCell>
                        <TableCell align='right'>D</TableCell>
                        <TableCell align='right'>L</TableCell>
                        <TableCell align='right'>G</TableCell>
                        <TableCell align='right'>+/-</TableCell>
                        <TableCell align='right'>P</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.key}>
                            <TableCell component="th" scope="row">
                                {row.standing}. {row.team}
                            </TableCell>
                            <TableCell align='right'>{row.mp}</TableCell>
                            <TableCell align='right'>{row.w}</TableCell>
                            <TableCell align='right'>{row.d}</TableCell>
                            <TableCell align='right'>{row.l}</TableCell>
                            <TableCell align='right'>{row.g}</TableCell>
                            <TableCell align='right'>{row.a}</TableCell>
                            <TableCell align='right'>{row.p}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell colSpan={9}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell >{Data[0]["league"]["country"]+': '+Data[0]["league"]["league"]} <Typography variant="h6"> Western Conference </Typography></TableCell>
                                        <TableCell align='right'>MP</TableCell>
                                        <TableCell align='right'>W</TableCell>
                                        <TableCell align='right'>D</TableCell>
                                        <TableCell align='right'>L</TableCell>
                                        <TableCell align='right'>G</TableCell>
                                        <TableCell align='right'>+/-</TableCell>
                                        <TableCell align='right'>P</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows2.map((row) => (
                                        <TableRow key={row.key}>
                                            <TableCell component="th" scope="row">
                                                {row.standing}. {row.team}
                                            </TableCell>
                                            <TableCell align='right'>{row.mp}</TableCell>
                                            <TableCell align='right'>{row.w}</TableCell>
                                            <TableCell align='right'>{row.d}</TableCell>
                                            <TableCell align='right'>{row.l}</TableCell>
                                            <TableCell align='right'>{row.g}</TableCell>
                                            <TableCell align='right'>{row.a}</TableCell>
                                            <TableCell align='right'>{row.p}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
