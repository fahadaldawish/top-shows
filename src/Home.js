import React, {Component} from 'react';
import TopShows from './TopShows';
import axios from 'axios';
import Show from './Show';
import Fave from './buttons/Fave';
import MyFavorate from './MyFavorate';

class Home extends Component{
    constructor(props){
        super(props)
        this.state={
          tvShows:[],
          myFavorate : []
        }
      }
     componentDidMount(){
      axios.get("https://api.themoviedb.org/3/tv/top_rated?api_key=909e54fa421fba59bd5bd7f0e5233c58")
       .then(res => {
        //  console.log(res.data.results)
        this.setState({
              tvShows : res.data.results
              
            })
            console.log(this.state.tvShows);
          })
       .catch(err => {
         console.log(err);
         
       })
    }
     addToFave = (show) => {
      const myFavorate = [...this.state.myFavorate]
      const showIndex = myFavorate.indexOf(show)
      if(showIndex !== 0){
        myFavorate.splice(showIndex,1)
      }
      else{
      myFavorate.push(show);
      }
      this.setState({myFavorate})
    }
    render(){

        return(
            <div>

            <div className="container">
            <TopShows toppies={this.state.tvShows} />
            {/* <Fave add={this.state.myFavorate} /> */}
            {/* <Show /> */}
            </div>
            <MyFavorate add = {this.addToFave} />
            </div> 



)
}
}

export default Home;
