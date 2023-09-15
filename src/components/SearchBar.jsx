import React, {useState} from 'react'
import {FaSearch} from "react-icons/fa"

function SearchBar() {
  return (
    <div className='inputWrapper'>
        <FaSearch id='searchIcon'/>
        <input placeholder='Search...'/>
    </div>
  )
}

export default SearchBar