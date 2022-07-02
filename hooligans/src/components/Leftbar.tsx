import { useState } from 'react';
import {Box, Collapse, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import { NavLink } from 'react-router-dom';

let anchorStyle = {
    textDecoration: "none",
    color: "inherit",
};

export const Leftbar = () => {
    const [openSoccer, setSoccerOpen] = useState(false);
    

    const handleSoccerClick = () => {
        setSoccerOpen(prevState => ! prevState);
    }

    const [openBaseball, setBaseballOpen] = useState(false);

    const handleBaseballClick = () => {
        setBaseballOpen(prevState => ! prevState);
    }

    const [openBasketball, setBasketballOpen] = useState(false);

    const handleBasketballClick = () => {
        setBasketballOpen(prevState => ! prevState);
    }

    const [openF1, setF1Open] = useState(false);

    const handleF1Click = () => {
        setF1Open(prevState => ! prevState);
    }
    

    return (
            <Drawer sx={{width: '240px', backgroundColor: '#1976d2', flexShrink: 0,
            [`& .MuiDrawer-paper`]: { color: '#fff',width: '240px', height: '100vh', boxSizing: 'border-box', backgroundColor: '#1976d2', position: 'relative' },}} variant="permanent" anchor="left">
                <Box sx={{ overflow: 'auto' }}>
                    <Divider />
                        <List component="nav">
                            <ListItem >
                                <ListItemButton onClick={()=>handleSoccerClick()}>
                                    <ListItemIcon>
                                        <SportsSoccerIcon sx={{color: '#fff'}}/>
                                    </ListItemIcon>
                                    <ListItemText primary='Soccer' />
                                </ListItemButton>                  
                            </ListItem>
                            <Collapse in={openSoccer} timeout="auto" unmountOnExit>
                                <List component = "div" disablePadding>
                                    <NavLink to="/scheduleWidget" style={anchorStyle}>
                                        <ListItemButton sx={{ pl: 4 }}>
                                            <ListItem >
                                                <ListItemText primary="UEFA Champions League" />
                                            </ListItem>
                                        </ListItemButton>
                                    </NavLink>
                                </List>
                            </Collapse>    
                            <ListItem >
                                <ListItemButton onClick={()=>handleBaseballClick()}>
                                    <ListItemIcon>
                                        <SportsBaseballIcon sx={{color: '#fff'}}/>
                                    </ListItemIcon>
                                    <ListItemText primary='Baseball'/>
                                </ListItemButton>
                            </ListItem>
                            <Collapse in={openBaseball} timeout="auto" unmountOnExit>
                                <List component = "div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItem >
                                            <ListItemText primary="MLB" />
                                        </ListItem>
                                    </ListItemButton>
                                </List>
                            </Collapse>
                            <ListItem >
                                <ListItemButton onClick={()=>handleBasketballClick()}>
                                    <ListItemIcon>
                                        <SportsBasketballIcon sx={{color: '#fff'}}/>
                                    </ListItemIcon>
                                    <ListItemText primary='Basketball'/>
                                </ListItemButton>
                            </ListItem>
                            <Collapse in={openBasketball} timeout="auto" unmountOnExit>
                                <List component = "div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItem >
                                            <ListItemText primary="NBA" />
                                        </ListItem>
                                    </ListItemButton>
                                </List>
                            </Collapse>   
                            <ListItem >
                                <ListItemButton onClick={()=>handleF1Click()}>
                                    <ListItemIcon>
                                        <SportsScoreIcon sx={{color: '#fff'}}/>
                                    </ListItemIcon>
                                    <ListItemText primary='F1 Racing' />
                                </ListItemButton>
                            </ListItem>
                            <Collapse in={openF1} timeout="auto" unmountOnExit>
                                <List component = "div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItem >
                                            <ListItemText primary="British GP" />
                                        </ListItem>
                                    </ListItemButton>
                                </List>
                            </Collapse>   
                            <ListItem >
                                <ListItemButton id='volleyball-btn'>
                                    <ListItemIcon>
                                        <SportsVolleyballIcon sx={{color: '#fff'}}/>
                                    </ListItemIcon>
                                    <ListItemText primary='Volleyball' />
                                </ListItemButton>
                            </ListItem>
                        </List>
                </Box>
            </Drawer>
        
    )
}


