import React from 'react'
import '../CSS/Navigation.css'
function Navigation(props) {
//  var a = props.navTitle;
//   window.onload = function(){
//   var navTitleitle=document.getElementById("dash");
//   console.log(a+"kfhnv")
//       navTitleitle.textContent=props.navTitle;
//   } 
    return (
        <nav>
        <ul>
          <li id="dash">Dashboard</li>
        </ul>
        <ul>
          <li>
            <input type="text" placeholder="Search" />
            <hr id="line" />
          </li>
          <li class="mar"><i class="fas fa-search"></i></li>
          <li class="m"><i class="fas fa-cube"></i></li>
          <li class="m"><i class="fas fa-bell"></i></li>
          <li class="m"><i class="fas fa-user"></i></li>
        </ul>
      </nav>
    )
}

export default Navigation
