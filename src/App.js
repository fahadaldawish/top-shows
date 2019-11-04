import React, {Component} from 'react'
// import TopShows from './TopShows';
// import logos from './logos.png';
// import Header from "./Header"
// import Watchlist from './WatchList';
// import About from './About';
// import Contact from './Contact'
// import MyFavorate from './MyFavorate';
import Home from './Home';
// import {BrowserRouter as Router, Switch, Link ,  Route} from 'react-router-dom'
import Logo from './Logo';


class App extends Component {

 render(){
   return(

    <div>     
     {/* <Header />
     <Router>
      <nav className="headers">
        <Link to='/myfavorate'>My Favorate</Link>
        <Link to ='/Watchlist'>My List</Link>
        <Link to = '/'> <img src = {logos} alt="logo" /></Link>
        <Link to='/Contact'>Contact</Link>
        <Link to='/About'>About</Link>
      </nav>
      <div> */}
        <Logo />
        {/* <Home /> */}
      {/* <Switch>
      <Route path='/myfavorate' component={MyFavorate}/>
      <Route path='/Watchlist' component={Watchlist}/>
      <Route path='/' component={Home}/>      
      <Route path='/Contact' component={Contact}/>
      <Route path='/About' component={About}/>
      </Switch>
      </div>
    </Router> */}
    </div>
   )
 }
}

export default App;