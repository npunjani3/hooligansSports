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


function App() {
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
              <Route path="/soccer/mls" element={<SoccerSubNav />}></Route>
              <Route path="/baseball/mlb" element={<BaseballSubNav />}></Route>
            </Routes>
          </div>
        </Grid>
        <Grid item sm={3}>
          <OutlinedCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
