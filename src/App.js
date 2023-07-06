import { AboutMe,Hero,Skills,Contact,Experiences, Projects} from './components';
import './App.css';

function App() {
  return (
    <div className="App">
        <Hero/>
        <AboutMe/>
        <Experiences/>
        <Skills/>
        <Projects/>
        <Contact/>
    </div>
  
  );
}

export default App;
