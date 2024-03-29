import './App.css';
import React, {useState}  from 'react'
import NavBar from './Component/NavBar';
import News from './Component/News';
import {
  
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=>  {
 const apiKey=process.env.REACT_APP_API
const[progress,setProgress]=useState(0)
  return (
    <div>
      <Router>
      <NavBar fixed="top" />
      <LoadingBar
        height={3}
        color='#f11946'
        progress={setProgress}
      />
      <Routes>
      <Route exact path="/NewsApp" element={<News setProgress={setProgress} apiKey={apiKey}  key="general" country="in" category="general"/>}/>  
      <Route exact path="/home" element={<News setProgress={setProgress} apiKey={apiKey}  key="general" country="in" category="general"/>}/>
      <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey}  key="business" country="in" category="business"/>}/>
      <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey}  key="entertainment" country="in" category="entertainment"/>}/>
      <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  key="health" country="in" category="health"/>}/>
      <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey}  key="science" country="in" category="science"/>}/>
      <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  key="sports" country="in" category="sports"/>}/>
      <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  key="technology" country="in" category="technology"/>}/>
      </Routes>
      </Router>
    </div>
  )
}

export default App


  


