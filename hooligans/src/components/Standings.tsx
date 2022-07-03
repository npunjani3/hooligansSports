import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';


function createData(
    standing: number,
    team: string,
    mp: number,
    w: number,
    d: number,
    l: number,
    g: string,
    a: number,
    p: number
) { 
    return {standing, team, mp, w, d, l, g, a, p};
}

const rows = [
    createData(1, 'Manchester City', 38, 29, 6, 3,'99:26', 73, 93)
];

export const Standings = () => {
    return (
        <TableContainer component={Paper} sx={{marginTop: 2, marginRight: 5}}>
            <Typography variant="h4" component='div'>Standings</Typography>
            <Table sx={{minWidth: 700}}>
                <TableHead>
                    <TableRow>
                        <TableCell >World: UEFA Champions League</TableCell>
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
                        <TableRow key={row.standing}>
                            <TableCell component="th" scope="row">
                                {row.standing} {row.team}
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
        </TableContainer>
    );
}
