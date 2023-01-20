import React from 'react'
import MainDash from '../MainDash/MainDash'
import Sidebar from '../Sidebar/Sidebar'
import './Home.css'

const Home = () => {
  return (
    
    <div className="Home">
        <div className="AppGlass">
            <Sidebar/>
            <MainDash/>
         
        </div>
    </div>




    )
}

export default Home