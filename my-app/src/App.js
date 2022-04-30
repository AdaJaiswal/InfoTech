import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Navigation from './Components/Graph';
import Home from './Components/Home';
import Graph from './Components/Graph';
import Contact from './Components/Contact';
import Icon from './Components/Icon';
import { useState,useEffect } from 'react'

function App() {
  const [coind, setcoind] = useState({});
  useEffect(() => {
    fetch('https://rest.coinapi.io/v1/assets/BTC;ETH;DOGE,SHIB?apikey=9A305AA9-095D-4BDC-9FB4-63C77A3FEA89')
    .then(response => response.json())
    .then(data => setcoind(data));
    console.log(coind)
  })
  return (
   <div>
     <Router>
       <Switch>
       <Route exact path="/">
     <Home/>
     </Route>
       <Route exact path="/user">
     <Contact/>
     </Route>
       <Route exact path="/graph">
     <Graph/>
     </Route>
       <Route exact path="/icon">
     <Icon/>
     </Route>

     </Switch>
     </Router>
   </div>
  );
}

export default App;
