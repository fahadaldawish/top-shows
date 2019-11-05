import React, {Component} from 'react'
import logos from './logos.png';
import TopShows from './TopShows';
import MyFavorate from './MyFavorate';
import Watchlist from './WatchList';
import About from './About';
import Contact from './Contact'
import Home from'./Home';
import Show from './Show';
import {BrowserRouter as Router, Switch, Link ,  Route} from 'react-router-dom'


class Logo extends Component {
  constructor(props){
    super()
    this.state={
      myFavorate: []
    }
  }
  addToFave = (show) => {
    let myFavorate =[...this.state.myFavorate]
    const showIndex = myFavorate.indexOf(show)
    if(showIndex !== -1){
        myFavorate.splice(showIndex,1)
        this.setState({myFavorate:myFavorate})
    }
    else{
        myFavorate=[...myFavorate, show]
        // console.log(myFavorate)
        // this.state.myFavorate.push(show)
        // this.setState({myFavorate:myFavorate})
    }
    this.setState({myFavorate: myFavorate})
    console.log(myFavorate)  }

  render(){

    return (
      
      <Router>
      <nav className="headers">
        <Link className='link' to='/myfavorate'>My Favorate</Link>
        <Link className='link' to ='/watchlist'>My List</Link>
        <Link className='link' to = '/'> <img src = {logos} alt="logo" /></Link>
        <Link className='link' to='/contact'>Contact</Link>
        <Link className='link' to='/about'>About</Link>
        <Link className='link' to='/show'>Show</Link>
      </nav>
      <div>
      <Switch>
      <Route exact path='/' render={(...props)=><Home addToFave={this.addToFave} myFavorate={this.state.myFavorate}/>}/>      
      <Route path='/myfavorate' render={(...props)=><MyFavorate myFavorate={this.state.myFavorate}/>}/>
      <Route path='/watchlist' component={Watchlist}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/about' component={About}/>
      <Route path='/show' component={Show}/>
      </Switch>
      </div>
    </Router>
    )
  }
}
export default Logo;