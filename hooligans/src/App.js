import { Route, Routes } from 'react-router-dom';
import './App.css';
import './sprite.svg';
import './soccer_field.png';
import { Grid } from '@mui/material';
import { Navbar } from './components/Navbar.tsx';
import { Leftbar } from './components/Leftbar.tsx';
import { Home } from './pages/Home.tsx';
import { Bets } from './pages/Bets.tsx';
import { Schedule } from './pages/Schedule.tsx';
import { Live } from './pages/Live.tsx';
import OutlinedCard from './components/Card.tsx';
import { BaseballSubNav } from './components/BaseballSubNav.jsx';
import { SoccerSubNav } from './components/SoccerSubNav.jsx';
import { useState } from 'react';


function App() {
  const [bets, setBets] = useState([]);
  const onAdd = (bet) => {
    const exists = bets.find((b) => {
      if(b.key === bet.key) return true;
      return false;
    })
    if(!exists) setBets([...bets, bet]);
  };
  const onRemove = (bet) => {
    const exists = bets.find((b) => {
      if(b.key === bet.key) return true;
      return false;
    })
    if(exists) {
      setBets(bets.filter((b) => b.key !== bet.key));
    }
  }

  return (
    <div className="App">
      <Navbar />
      <Grid container>
        <Grid item sm={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7}>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/bets" element={<Bets />}></Route>
              <Route path="/live" element={<Live />}></Route>
              <Route path="/schedule" element={<Schedule />}></Route>
              <Route path="/soccer/mls" element={<SoccerSubNav bets={bets} onAdd={onAdd} />}></Route>
              <Route path="/baseball/mlb" element={<BaseballSubNav bets={bets} onAdd={onAdd} />}></Route>
            </Routes>
          </div>
        </Grid>
        <Grid item sm={3}>
          <OutlinedCard bets={bets} onAdd={onAdd} onRemove={onRemove} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
