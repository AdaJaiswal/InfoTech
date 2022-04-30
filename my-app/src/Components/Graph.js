import React from 'react'
import Navigation from './Navigation'
import styles from '../CSS/Graph.css'
import Option from '../Components/Option'

function Graph() {
    return (
        <div className='parentGraph'>
            <Option prId="Table List"/>
            <div className="containerGraph">
            <Navigation navTitle="Table List"/>
<div className="analyseGraph">
 <ul>
  <li>
      <p>CURRENT PRICE</p>
      <p>$5000</p>
      <p><i class="fas fa-arrow-up"></i> 3.8%</p>
      <p>Update in 2 min</p>
  </li>
  <li><i class="far fa-chart-bar"></i></li>
 </ul>
 <ul>
  <li>
      <p>CURRENT PRICE</p>
      <p>$5000</p>
      <p><i class="fas fa-arrow-up"></i> 3.8%</p>
      <p>Update in 2 min</p>
  </li>
  <li><i class="far fa-chart-bar"></i></li>
 </ul>
 <ul>
  <li>
      <p>CURRENT PRICE</p>
      <p>$5000</p>
      <p><i class="fas fa-arrow-up"></i> 3.8%</p>
      <p>Update in 2 min</p>
  </li>
  <li><i class="far fa-chart-bar"></i></li>
 </ul>
 <ul>
  <li>
      <p>CURRENT PRICE</p>
      <p>$5000</p>
      <p><i class="fas fa-arrow-up"></i> 3.8%</p>
      <p>Update in 2 min</p>
  </li>
  <li><i class="far fa-chart-bar"></i></li>
 </ul>
</div>
<div className="graphGraph">
    <ul>
        <li>SHARES OWN</li>
        <li>22 Jan 2022</li>
        <hr />
        <li><i class="fas fa-chart-pie"></i></li>
        <li>Available now : 20</li>
    </ul>
    <ul id="Graph2">
        <li>
            <p>Price</p>
            <p>
                <button>Week</button>
                <button>Month</button>
            </p>
        </li>
        <li>BitCoin</li>
        <hr />
        <li><i class="far fa-chart-bar"></i></li>
    </ul>
</div>
<div className="tableGraph">
    <ul>
        <li>
        <p>Price tags</p>
        <p>See all</p>
        </li>
        <hr />

        <li>
            <p>PAGE NAME</p>
            <p>VISITOR</p>
            <p>CLICK</p>
            <p>NEW USER</p>
        </li>
        <hr />
        <li>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, earum?</p>
            <p>VISITOR</p>
            <p>CLICK</p>
            <p>NEW USER</p>
        </li>
        <hr />
        <li>
            <p>PAGE NAME</p>
            <p>VISITOR</p>
            <p>CLICK</p>
            <p>NEW USER</p>
        </li>
        <hr />
        <li>
            <p>PAGE NAME</p>
            <p>VISITOR</p>
            <p>CLICK</p>
            <p>NEW USER</p>
        </li>
        <hr />
        <li>
            <p>PAGE NAME</p>
            <p>VISITOR</p>
            <p>CLICK</p>
            <p>NEW USER</p>
        </li>
        <hr />
        <li>
            <p>PAGE NAME</p>
            <p>VISITOR</p>
            <p>CLICK</p>
            <p>NEW USER</p>
        </li>

    </ul>
    <ul>
        <li>
        <p>Price tags</p>
        <p>See all</p>
        </li>
        <hr />

        <li>
            <p>PAGE NAME</p>
            <p>VISITOR</p>
            <p>CLICK</p>
        </li>
        <hr />
        <li>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, earum?</p>
            <p>VISITOR</p>
            <p>CLICK</p>
        </li>
        <hr />
        <li>
            <p>PAGE NAME</p>
            <p>VISITOR</p>
            <p>CLICK</p>
        </li>
        <hr />
        <li>
            <p>PAGE NAME</p>
            <p>VISITOR</p>
            <p>CLICK</p>
        </li>
        <hr />
        <li>
            <p>PAGE NAME</p>
            <p>VISITOR</p>
            <p>CLICK</p>
        </li>
        <hr />
        <li>
            <p>PAGE NAME</p>
            <p>VISITOR</p>
            <p>CLICK</p>
        </li>

    </ul>
</div>
            </div>

        </div>
    )
}

export default Graph
