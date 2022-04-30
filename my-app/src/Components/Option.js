import React,{Component}  from 'react'
import '../CSS/options.css'
function Option(props) {
  window.onload = function(){
  var getOpt=document.getElementsByClassName("opt");
  // getOpt[0].id="activate";
  for(var i=0;i<getOpt.length;i++){
    console.log(props.prId)
    if(getOpt[i].textContent===props.prId){
      getOpt[i].id="activate";
      
    }
    
  }
};
    return (
        <div className="option">
        <ul>

          <li className="head">
            <i className="fab fa-ethereum"></i>
            {/* <i className="fab fa-bitcoin"></i> */}
            CRYPTO WORLD</li>
          <hr />
          <li className="opt">
          <a href="/">
            <i className="fas fa-cube"></i>Dashboard
            </a></li>
          <li className="opt">
              <a href="/user">
              <i className="fas fa-user"></i>Contact Us
              </a>
              </li>
          <li className="opt">
          <a href="/graph">
            <i className="far fa-clipboard"></i>Table List
            </a></li>

          <li className="opt">
          <a href="/graph">
            <i className="fas fa-layer-group"></i>Topography
            </a></li>
          <li className="opt">
          <a href="/icon">
            <i className="fab fa-google-wallet"></i>Icon
            </a></li>
          <li className="opt"><i className="fas fa-map-marker-alt"></i>Maps</li>
          <li className="opt"><i className="fas fa-bell"></i>Notification</li>
          <li className="opt"><i className="fas fa-book-reader"></i>Read</li>
          <li><i className="fas fa-upload"></i>UPGRADE</li>
        </ul>
        
      </div>
    )
}

export default Option
