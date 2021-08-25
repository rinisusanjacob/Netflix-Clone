import React from 'react'
import NavBar from './components/NavBar/NavBar'
import './App.css'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'
import {orginals,comedy,action,romance,horror,documentaries,trending} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      
      <RowPost url={orginals} title='Netflix Orginals'/>
      <RowPost url={trending} title='Trending' isSmall/>
      <RowPost url={comedy} title='Comedy' isSmall/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={romance} title='Romance' isSmall/>
      <RowPost url={horror} title='Horror' isSmall/>
      <RowPost url={documentaries} title='Documentaries' isSmall/>
    
      
    </div>
  );
}

export default App;
