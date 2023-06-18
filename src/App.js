import logo from './logo.svg';
import { Navbar, AboutMe,Hero, Experiences} from './components';
import './App.css';
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar />
        <Hero/>
        <AboutMe/>
        <Experiences/>
      
        
      </Container>
    </div>
  
  );
}

export default App;
