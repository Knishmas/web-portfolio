import React, { useState, useEffect } from 'react';
import { AboutMe, Hero, Skills, Contact, Experiences, Projects } from './components';
import { ScaleLoader

} from 'react-spinners';

import './App.css';

function App() {
  const [loadingInProgress, setLoadingInProgress] = useState(true);

  useEffect(() => {
    window.onload = () => {
      setLoadingInProgress(false);
    };
  }, []);

  return (
    <div className="App">
      {loadingInProgress ? (
        <div className="loading-container">
          <ScaleLoader
          color="#36d7b7"
          height={70}
          margin={4}
          radius={4}
          width={8}
        />
        </div>
      ) : (
        <>
          <Hero />
          <AboutMe />
          <Experiences />
          <Skills />
          <Projects />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
