import React from 'react'
import logos from './logos.png';
// import TopShows from './TopShows';
import MyFavorate from './MyFavorate';
// import Watchlist from './WatchList';
// import About from './About';
// import Contact from './Contact'
import Home from'./Home';
import {BrowserRouter as Router, Switch, Link ,  Route} from 'react-router-dom'



const Logo = () => {
    return (
        
     <Router>
      <nav className="headers">
        <Link to='/myfavorate'>My Favorate</Link>
        <Link to ='/Watchlist'>My List</Link>
        <Link to = '/'> <img src = {logos} alt="logo" /></Link>
        <Link to='/Contact'>Contact</Link>
        <Link to='/About'>About</Link>
      </nav>
      <div>
      <Switch>
      <Route exact path='/' component={Home}/>      
      <Route path='/myfavorate' component={MyFavorate}/>
      {/* <Route path='/Watchlist' component={Watchlist}/> */}
      {/* <Route path='/Contact' component={Contact}/>
      <Route path='/About' component={About}/> */}
      </Switch>
      </div>
    </Router>
    )
}

export default Logo;