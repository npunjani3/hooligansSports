import React from "react";
import { AppBar, Tab, Tabs } from '@mui/material';
import { BaseballStandings } from './BaseballStandings.tsx';
import { BaseballOdds } from './BaseballOdds.tsx';

let anchorStyle = {
    textDecoration: "none",
    color: "inherit",
};

export const BaseballSubNav = () => {
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    }
    return (
        <>
            <AppBar position='static'>
                <Tabs value={selectedTab} onChange={handleChange}>
                    <Tab label="Odds" style={anchorStyle}></Tab>
                    <Tab label="Standings" style={anchorStyle}></Tab>
                </Tabs>
            </AppBar>
            {selectedTab === 0 && <BaseballOdds />}
            {selectedTab === 1 && <BaseballStandings />}
        </>
    )
}