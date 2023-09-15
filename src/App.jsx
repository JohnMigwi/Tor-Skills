import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'


function App() {
 
  return (
    <div className='App'>
      <div className='searchBarContainer'>
        <SearchBar/>
        <div>QueryResults</div>
      </div>
    </div>
  )
}

export default App
