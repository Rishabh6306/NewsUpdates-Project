import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const APIKEY = process.env.REACT_APP_OUR_API;
  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <LoadingBar color="red" height={3} progress={progress} />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<News setprogress={setProgress} key="general" pageSize="20" category="general" country="In" APIKEY={APIKEY} />}/>
        <Route exact path="/business" element={<News setprogress={setProgress} key="business" pageSize="20" category="business" country="In" APIKEY={APIKEY} />}/>
        <Route exact path="/entertainment" element={<News setprogress={setProgress} key="entertainment" pageSize="20" category="entertainment" country="In" APIKEY={APIKEY} />}/>
        <Route exact path="/health" element={<News setprogress={setProgress} key="health" pageSize="20" category="health" country="In" APIKEY={APIKEY} />}/>
        <Route exact path="/science" element={<News setprogress={setProgress} key="science" pageSize="20" category="science" country="In" APIKEY={APIKEY} />}/>
        <Route exact path="/technology" element={<News setprogress={setProgress} key="technology" pageSize="20" category="technology" country="In" APIKEY={APIKEY} />}/>
        <Route exact path="/sports" element={<News setprogress={setProgress} key="sports" pageSize="20" category="sports" country="In" APIKEY={APIKEY} />}/>
      </Routes>
    </Router>
  );
}

export default App;
