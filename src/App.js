import { AboutMe,Hero, Experiences} from './components';
import './App.css';
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
        <Hero/>
        <AboutMe/>
        <Experiences/>
    </div>
  
  );
}

export default App;
