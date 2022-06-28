import {Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';


export const Leftbar = () => {
    return (
            <Drawer sx={{width: '240px', backgroundColor: '#1976d2', flexShrink: 0,
            [`& .MuiDrawer-paper`]: { color: '#fff',width: '240px', height: '100vh', boxSizing: 'border-box', backgroundColor: '#1976d2', position: 'relative' },}} variant="permanent" anchor="left">
                <Box sx={{ overflow: 'auto' }}>
                    <Divider />
                        <List>
                            <ListItem key= 'Soccer' >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <SportsSoccerIcon sx={{color: '#fff'}}/>
                                    </ListItemIcon>
                                    <ListItemText primary='Soccer' />
                                </ListItemButton>                               
                            </ListItem>
                            <ListItem >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <SportsBaseballIcon sx={{color: '#fff'}}/>
                                    </ListItemIcon>
                                    <ListItemText primary='Baseball'/>
                                </ListItemButton>
                            </ListItem>
                            <ListItem >
                                <ListItemButton>
                                    <ListItemIcon>
                                        <SportsScoreIcon sx={{color: '#fff'}}/>
                                    </ListItemIcon>
                                    <ListItemText primary='F1 Racing' />
                                </ListItemButton>
                            </ListItem>
                            <ListItem >
                                <ListItemButton>
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


