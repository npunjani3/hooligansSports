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
                data-key="e386996591e1b9fa16b8a98cdf9d193c"
                data-league="2"
                data-team=""
                data-season="2021"
                data-theme="false"
                data-show-errors="false"
                data-show-logos="true"
                className="wg_loader">
            </div>
            { loaded ? 'loaded' : 'not loaded' }
        </div>    
    );
}