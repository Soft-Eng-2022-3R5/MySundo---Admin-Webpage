import React from 'react'
import Logo from '../../imgs/logo.png'
import './Sidebar.css'
import { SidebarData } from '../../Data/Data';
import {UilSignOutAlt} from '@iconscout/react-unicons';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


const Sidebar = () => {
    const [selected, setSelected] = useState(0);
    const navigate = useNavigate();

    function handleClick(){
    navigate("/Login")
    }
  return (
    <div className="Sidebar">
        {/*Logo*/}
        <div className='Logo'>
            <img src = {Logo} alt=''/>
            <span>
                Su<span>n</span>do
            </span>
        </div>
        {/*menue*/}
        <div className="menu">
            {SidebarData.map((item, index)=>{
                return(
                    
                    <div className={selected===index?'menuItem active': 'menuItem'}
                    key ={index}
                    onClick={()=>setSelected(index)}
                    >
                        <item.icon/>
                        <span>
                            {item.heading}
                        </span>
                    
                    </div> 
                
                )
            })}
            <div className="menuItem" onClick={(e) => handleClick()}>
                <UilSignOutAlt/>
            </div>

        </div>
    </div>
  )
}

export default Sidebar;