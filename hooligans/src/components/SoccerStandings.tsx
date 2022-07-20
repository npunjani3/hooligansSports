import { useState, useEffect } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import axios from "axios";


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

function createStandingData(
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

// interface LeagueData {
//     country: string;
//     league: string;
//     season: number;
//     flag: string;
//     logo: string;
// }

// // function createLeagueData (
// //     country: string,
// //     league: string,
// //     season: number,
// //     flag: string,
// //     logo: string,
// // ): LeagueData {
// //     return {country, league, season, flag, logo};
// // }


 


export const SoccerStandings = () => {
    const[standing, setStanding] = useState([]);
    const [error, setError] : [string, (error: string) => void] = useState("");
     
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/apiFootball/soccer/standings/",{
            headers: {
                "Content-Type": "application/json"
            }
        }).then((resp) => {
            setStanding(resp.data);
        }).catch(error => {
            setError(error);
        });
    }, [])

    if(error) console.log(error);

    const ld = standing['league'];
    const teams = [];


    const rows: Array<StandingData> = [];
    const rows2: Array<StandingData> = [];

    if(ld){
        for (let i = 0; i < 28; i++) {
            teams.push(standing[i]);
            if(i >13) rows2.push(createStandingData(i,teams[i]["group"],teams[i]["rank"], teams[i]["name"], teams[i]["mp"], teams[i]["w"], teams[i]["d"], teams[i]["l"], teams[i]["gf"]+':'+teams[i]["gl"], teams[i]["diff"], teams[i]["p"]));
            if(i < 13) rows.push(createStandingData(i,teams[i]["group"],teams[i]["rank"], teams[i]["name"], teams[i]["mp"], teams[i]["w"], teams[i]["d"], teams[i]["l"], teams[i]["gf"]+':'+teams[i]["gl"], teams[i]["diff"], teams[i]["p"]));
        }
    }
    

    return (
        <TableContainer component={Paper} sx={{margin: '30px auto 0px auto', width: '100%', height: '90vh', overflow: 'scroll'}}>
            <Typography variant="h5" component='div'>Soccer Standings</Typography>
            <Table sx={{minWidth: 700}}>
                <TableHead>
                    <TableRow>
                        <TableCell >{ ld && ld["country"]}{ld && ': '+ld["league"]} <Typography variant="h6"> Eastern Conference </Typography></TableCell>
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
                                        <TableCell >{ ld && ld["country"]}{ld && ': '+ld["league"]} <Typography variant="h6"> Western Conference </Typography></TableCell>
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
