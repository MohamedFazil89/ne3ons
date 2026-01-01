import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import AllProjects from './components/pages/AllProjects';
import LoadingScreen from './components/common/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <Routes>
        <Route path="/" element={<Home startAnimation={!isLoading} />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </>
  )
}

export default App
