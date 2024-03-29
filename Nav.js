import React, { useEffect, useState } from 'react';
import './Nav.css';
function Nav() {
    const[show,handleshow]=useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleshow(true);
            }
            else handleshow(false);
        });
    return ()=>{window.removeEventListener("scroll");};},
    []);
    
    
    return (
    <div className={`nav ${show && "nav__black"}`}>
        <image className='nav__log' src='https://images-wixmp-ed30aB6b8c4ca887773594c2.wixmp.com/f/12c'
        alt='Netflix Logo'/>

        <image className='nav__avator' src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b79E'
        alt='Avator Logo'/>
    </div>
  )
}

export default Nav;