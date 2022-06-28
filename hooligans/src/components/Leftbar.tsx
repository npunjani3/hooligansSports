import { useState } from 'react';
import {Box, Collapse, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';


export const Leftbar = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
      };

    return (
            <Drawer sx={{width: '240px', backgroundColor: '#1976d2', flexShrink: 0,
            [`& .MuiDrawer-paper`]: { color: '#fff',width: '240px', height: '100vh', boxSizing: 'border-box', backgroundColor: '#1976d2', position: 'relative' },}} variant="permanent" anchor="left">
                <Box sx={{ overflow: 'auto' }}>
                    <Divider />
                        <List component="nav">
                            <ListItem >
                                <ListItemButton onClick={handleClick}>
                                    <ListItemIcon>
                                        <SportsSoccerIcon sx={{color: '#fff'}}/>
                                    </ListItemIcon>
                                    <ListItemText primary='Soccer' />
                                </ListItemButton>                  
                            </ListItem>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component = "div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItem >
                                            <ListItemText primary="UEFA Champions League" />
                                        </ListItem>
                                    </ListItemButton>
                                </List>
                            </Collapse>    
                            <ListItem >
                                <ListItemButton onClick={handleClick}>
                                    <ListItemIcon>
                                        <SportsBaseballIcon sx={{color: '#fff'}}/>
                                    </ListItemIcon>
                                    <ListItemText primary='Baseball'/>
                                </ListItemButton>
                            </ListItem>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <List component = "div" disablePadding>
                                    <ListItemButton sx={{ pl: 4 }}>
                                        <ListItem >
                                            <ListItemText primary="MLB" />
                                        </ListItem>
                                    </ListItemButton>
                                </List>
                            </Collapse>    
                            <ListItem >
                                <ListItemButton id='f1-btn'>
                                    <ListItemIcon>
                                        <SportsScoreIcon sx={{color: '#fff'}}/>
                                    </ListItemIcon>
                                    <ListItemText primary='F1 Racing' />
                                </ListItemButton>
                            </ListItem>
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


