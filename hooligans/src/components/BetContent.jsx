import React, { useState, useEffect } from 'react';
import ClearIcon from '@mui/icons-material/Clear';

export default function BetContent(props) {
    const { bet, onRemove, betType} = props;
    const [value, setValue]= useState(0);

    function plusOdds(odds, amount) {
        return ((odds/100 + 1) * amount).toFixed(2);
    };

    function minusOdds (odds, amount) {
        return (((100/odds * -1) + 1) * amount).toFixed(2); 
    };

    function calcOdds(odds, amount) {
        amount = parseInt(amount, 10);
        if(odds > 0) return plusOdds(odds, amount);
        else return minusOdds(odds, amount);
    };

    useEffect(()=>{
        if (value > 0) {
            const amount = parseInt(value, 10);
            console.log(calcOdds(bet.odds, amount));
        }
    })
    
    return (
        <>
            <div style={{ display: 'flex', flexGrow: 1,  flexBasis: 0, justifyContent: 'space-between', padding: 16}}>
            {<ClearIcon onClick={() => onRemove(bet)}/>}
                <div className='textWrapper' style={{display: 'flex', flexDirection: 'column', textAlign: 'left'}}>
                    <div style={{fontWeight: 'bold'}}>{bet.pick}</div>
                    <div style={{fontSize: '11px'}}>
                        <div>{betType}</div>
                        <div>{bet.event}</div>
                    </div>
                </div>
                <div>
                    <div className='oddsWager' style={{display: 'flex', margin: 'auto 0'}}>
                        <div>{bet.odds > 0 && '+'+bet.odds} {bet.odds < 0 && bet.odds}</div>
                        <div>
                            <div style={{display: 'flex', flexDirection: 'row',  justifyContent: 'flex-end', paddingLeft: '12px'}}>
                            <div>$</div>
                            <div><input onChange={e => setValue(e.target.value)} type='number' style={{width: '60px'}}></input></div>
                            </div>
                        </div>
                    </div>
                    <div className="payout">
                        <span>Payout: {calcOdds(bet.odds, value)}</span>
                    </div>
                </div>
                
            </div>
        </>
    );
}