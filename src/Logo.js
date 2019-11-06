import React, {Component} from 'react'
import logos from './logos.png';
import TopShows from './TopShows';
import MyFavorate from './MyFavorate';
import WatchList from './WatchList';
import About from './About';
import Contact from './Contact'
import Home from'./Home';
import Show from './Show';
import {BrowserRouter as HashRouter, Switch, Link ,  Route} from 'react-router-dom'


class Logo extends Component {
  constructor(props){
    super()
    this.state={
      myFavorate: [],
      watchLater:[]
    }
  }
  addToFave = (show) => {
    let myFavorate =[]
    const showIndex = myFavorate.indexOf(show)
        if (showIndex !== -1){
          myFavorate = [...this.state.myFavorate]
        }
        else{
          myFavorate = [...this.state.myFavorate, show]
       
    }
    this.setState({myFavorate})
    // console.log(myFavorate) 
   }
   
   
    funWatch = (show) => {
      let watchLater =[...this.state.watchLater]
      const laterIndex = watchLater.indexOf(show)
      if(laterIndex !== -1){
          watchLater.splice(laterIndex,1)
          this.setState({watchLater:watchLater})
      }
      else{
          watchLater=[...watchLater, show]
          // console.log(myFavorate)
          // this.state.myFavorate.push(show)
          // this.setState({myFavorate:myFavorate})
      }
      this.setState({watchLater: watchLater})
      // console.log(watchLater)  
    }

      removeItem = (show) => {
        console.log(show);
        
        let myFavorate = [...this.state.myFavorate]
        const showIndex = myFavorate.indexOf(show)

        myFavorate.splice(showIndex,1)
        console.log(myFavorate);
        
        this.setState({myFavorate})

      }
        clearList =  () => {
          this.setState({
            myFavorate : []
          })
        }

  
  render(){

    return (
      <HashRouter basename="/">

    
      <nav className="headers">
        <Link className='link' to='/myfavorate'>My Favorate</Link>
        <Link className='link' to ='/watchlist'>My List</Link>
        <Link className='link' to = '/'> <img src = {logos} alt="logo" /></Link>
        <Link className='link' to='/contact'>Contact</Link>
        <Link className='link' to='/about'>About</Link>
        <Link className='link' to='/show'>Show</Link>
      </nav>
      <Switch>
      <Route exact path='/' render={(...props)=><Home addToFave={this.addToFave} myFavorate={this.state.myFavorate} 
      funWatch={this.funWatch} watchLater={this.state.watchLater}/>}/>      
      <Route path='/myfavorate' render={(...props)=><MyFavorate myFavorate={this.state.myFavorate} 
      removeItem={this.removeItem} clearList={this.clearList}/>}/>
      <Route path='/watchlist' render={(...props)=><WatchList watchLater={this.state.watchLater}/>}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/about' component={About}/>
      <Route path='/show' component={Show}/>
      </Switch>
      </HashRouter>
    )
  }
}
export default Logo;