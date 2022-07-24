import React from "react";
import './navBar.css';
import {Link} from 'react-router-dom'; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


// add container tag if u want it to be blocky, for outer nav

function NavBar(props) {
    return (
        <nav className="relative mx-auto p-1 shadow-xl bg-zinc-800">
            {/* flex container */}
            <div className="flex  items-center justify-between">
                {/* logo */}
                <div className="text-2xl cursor-pointer flex items-center font-poppins text-pearmint p-1 ml-4">
                    <span className="mr-2 p-2">
                    <i class="fa-brands fa-spotify fa-2x"></i>
                    </span>
                    Statify
                </div>

                {props.TokenState && <button className="text-neutral-900 text-lg font-bold py-2 px-4 m-4 bg-pearmint rounded-3xl " onClick={props.LogOut}>Log Out</button>}
                
                {/* <i className="fa-solid fa-house fa-2x hover:text-green-500"></i>

                <i className="fa-solid fa-heart fa-2x hover:text-green-500"></i>

                <i className="fa-solid fa-chart-line fa-2x hover:text-green-500"></i>

                <i className="fa-solid fa-earth-americas fa-2x hover:text-green-500"></i> */}

            </div>
        </nav>
    );
  }
  
  export default NavBar;

//   <div>
//   Home
//   <i class="fa-solid fa-house"></i>
// </div>
// <div>
//   Most Listened
//   <i class="fa-solid fa-heart"></i>
// </div>
// <div>
//   Stats
//   <i class="fa-solid fa-chart-line"></i>
// </div>
// <div>
//   International
//   <i class="fa-solid fa-earth-americas"></i>
// </div>