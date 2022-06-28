import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material';
import { flexbox } from '@mui/system';

export const Navbar = () => {
    return (
        <AppBar position='static'>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography variant='h6' component='div' sx={{ flexgrow: 1 }}>
                    Hooligan's Sportsbook
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit'>Home</Button>
                    <Button color='inherit'>Bets</Button>
                    <Button color='inherit'>Live Game</Button>
                    <Button color='inherit'>Schedule</Button>
                    <Button color='inherit'>Log in</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}