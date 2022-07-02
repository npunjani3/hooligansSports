import React, { useEffect, useState } from 'react';
import LoadWidget from './LoadWidget.js';

export const ScheduleWidget = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        LoadWidget (() => {
            setLoaded(true);
        });
        
    });

    return (
        <div id="holder">
            <div id="wg-api-football-standings"
                data-host="v3.football.api-sports.io"
                data-key=""
                data-league="2"
                data-team=""
                data-season="2021"
                data-theme="false"
                data-show-errors="true"
                data-show-logos="true"
                className="wg_loader">
            </div>
            { loaded ? 'loaded' : 'not loaded' }
        </div>    
    );
}