import { AppBar, Toolbar, Typography, Stack, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';


let anchorStyle = {
    textDecoration: "none",
    color: "inherit",
};

export const Navbar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    const { user } = useAuth0<{ name: string }>();
    let button = <Button color='inherit' onClick={() => loginWithRedirect()}>Log in</Button>;
    if (isAuthenticated) {
        button = <Button color='inherit' onClick={() => logout()}>Log out</Button>;
    }
    return (
        <AppBar position='static'>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography variant='h6' component='div' sx={{ flexgrow: 1 }}>
                    Hooligan's Sportsbook
                </Typography>
                <Stack direction='row' spacing={2}>
                    <NavLink to="/" style={anchorStyle}>
                        <Button color='inherit'>Home</Button>
                    </NavLink>
                    <NavLink to="/bets" style={anchorStyle}>
                        <Button color='inherit'>Bets</Button>
                    </NavLink>
                    <NavLink to="/live" style={anchorStyle}>
                        <Button color='inherit'>Live Game</Button>
                    </NavLink>
                    <NavLink to="/schedule" style={anchorStyle}>
                        <Button color='inherit'>Schedule</Button>
                    </NavLink>
                    {button}
                </Stack>
            </Toolbar>
        </AppBar>
    )
}