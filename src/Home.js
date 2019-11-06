import React, {Component} from 'react';
import TopShows from './TopShows';
import axios from 'axios';
import Show from './Show';
import Fave from './buttons/Fave';
import MyFavorate from './MyFavorate';
import WatchList from './WatchList';

class Home extends Component{
    constructor(props){
        super(props)
        this.state={
          tvShows:[],
        }
      }
     componentDidMount(){
      axios.get("https://api.themoviedb.org/3/tv/top_rated?api_key=909e54fa421fba59bd5bd7f0e5233c58")
       .then(res => {
        //  console.log(res.data.results)
        this.setState({
              tvShows : res.data.results
              
            })
            // console.log(this.state.tvShows);
          })
       .catch(err => {
         console.log(err);
         
       })
    }
 
    render(){

        return(
            <div>

            <div className="container">
            <TopShows   addToFave={this.props.addToFave} watchLater={this.props.watchLater} toppies={this.state.tvShows} 
            funWatch={this.props.funWatch}/>
            {/* <Fave add={this.state.myFavorate} /> */}
            {/* <Show /> */}
            </div>
            </div> 



)
}
}

export default Home;
