import React from "react";
import { AppBar, Tab, Tabs } from '@mui/material';
import { SoccerStandings } from './SoccerStandings.tsx';
import { SoccerOdds } from './SoccerOdds.tsx';

let anchorStyle = {
    textDecoration: "none",
    color: "inherit",
};

export const SoccerSubNav = (props) => {
    const { bets, onAdd } = props;
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    }
    return (
        <>
            <AppBar position='static' sx={{boxShadow: 0}}>
                <Tabs value={selectedTab} onChange={handleChange}>
                    <Tab label="Odds" style={anchorStyle}></Tab>
                    <Tab label="Standings" style={anchorStyle}></Tab>
                </Tabs>
            </AppBar>
            {selectedTab === 0 && <SoccerOdds bets={bets} onAdd={onAdd} />}
            {selectedTab === 1 && <SoccerStandings />}
        </>
    )
}