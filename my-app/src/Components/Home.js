import React from 'react'
import styles from '../CSS/home.css'
import Navigation from '../Components/Navigation'
import Option from '../Components/Option'
function Home() {

  
 
    return (
        <div className="parent">
          <Option prId={"Dashboard"}/>
        <div className="container">
         <Navigation/>
          <p className="color">Popular Cryptos - Future of technology</p>
  
          <div className="Top">
            <div className="details">
              <ul className="DetU1">
                <li>
                  <i className="fab fa-ethereum"></i>
                  <li>
                    <p>Used Space</p>
                    <p>49/50</p>
                    <p>GB</p>
                  </li>
                </li>
                <hr />
                <li>
                 
                </li>
              </ul>
              <ul className="DetU1 DetU1a">
                <li>
                  <i className="fab fa-bitcoin"></i>
                  <li>
                    <p>Used Space</p>
                    <p>49/50</p>
                    <p>GB</p>
                  </li>
                </li>
                <hr />
                <li>
                  Get more space
                </li>
              </ul>
            </div>
            <div className="report">
              <ul className="reportU1">
                <li>
                  <p>Tasks:</p>
                  <p><i className="fas fa-bug"></i>Bugs</p>
                  <p><i className="fas fa-code"></i>Website</p>
                  <p><i className="fas fa-cloud-upload-alt"></i>Server</p>
                </li>
                <li>
                  <p> Sign contract for "What are conference organizers afraid of?"</p>
                  <hr />
                  <p> Lines From Great Russian Literature? Or E-mails From My Boss?</p>
                  <hr />
                  <p> Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit</p>
                  <hr />
                  <p> Create 4 Invisible User Experiences you Never Knew About</p>
  
                </li>
              </ul>
            </div>
  
          </div>
          <p className="color">Blockchain - Secure your data</p>
          <div className="blockchain">
            <div>
            <ul>
              <li>What to build ?</li>
              <li>Lorem ipsum dolor sit amet consectetur </li>
              <li>Lorem ipsum dolor sit amet consectetur adip </li>
              <li>Lorem ipsum dolor sit amet consecte</li>
              <li id="exp">Explore</li>
            </ul>
            <i className="fas fa-layer-group image"></i>
            </div>
            <div id="sec">
            <ul>
              <li>What to build ?</li>
              <li>Lorem ipsum dolor sit amet consectetur </li>
              <li>Lorem ipsum dolor sit amet consectetur adip </li>
              <li>Lorem ipsum dolor sit amet consecte</li>
              <li id="exp">Explore</li>
            </ul>
            <i className="fas fa-layer-group image"></i>
            </div>
           
        
          </div>
          <p className="color">Technology - Build Your Own Way</p>

          <div className="ThreeBoxes">
              <ul>
                <li><i className="fab fa-bitcoin"></i></li>
                <li><p>BITCOIN BUILT</p>
                <p>Argon is built on top of the most popular open source toolkit for developing with HTML, CSS, and JS.</p></li>
                <li><button>Open</button></li>
              </ul>
              <ul>
                <li> <i className="fab fa-ethereum"></i></li>
                <li><p>BITCOIN BUILT</p>
                <p>Argon is built on top of the most popular open source toolkit for developing with HTML, CSS, and JS.</p></li>
                <li><button>Open</button></li>
              </ul>
              <ul>
                <li><i className="fab fa-bitcoin"></i></li>
                <li><p>BITCOIN BUILT</p>
                <p>Argon is built on top of the most popular open source toolkit for developing with HTML, CSS, and JS.</p></li>
                <li><button>Open</button></li>
              </ul>
              
             
              
          </div>
        </div>
      </div>
    )
}

export default Home
