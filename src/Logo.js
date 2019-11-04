import React from 'react'
import logos from './logos.png';
import TopShows from './TopShows';
import MyFavorate from './MyFavorate';
import Watchlist from './WatchList';
import About from './About';
import Contact from './Contact'
import Home from'./Home';
import {BrowserRouter as Router, Switch, Link ,  Route} from 'react-router-dom'



const Logo = () => {
    return (
        
     <Router>
      <nav className="headers">
        <Link className='link' to='/myfavorate'>My Favorate</Link>
        <Link className='link' to ='/watchlist'>My List</Link>
        <Link className='link' to = '/'> <img src = {logos} alt="logo" /></Link>
        <Link className='link' to='/contact'>Contact</Link>
        <Link className='link' to='/about'>About</Link>
      </nav>
      <div>
      <Switch>
      <Route exact path='/' component={Home}/>      
      <Route path='/myfavorate' component={MyFavorate}/>
      <Route path='/watchlist' component={Watchlist}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/about' component={About}/>
      </Switch>
      </div>
    </Router>
    )
}
export default Logo;