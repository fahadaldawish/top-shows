import React, {Component} from 'react';
import TopShows from './TopShows';
import axios from 'axios';

class Home extends Component{
    constructor(props){
        super(props)
        this.state={
          tvShows:[]
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
    render(){

        return(
            <div className="container">
            <TopShows toppies={this.state.tvShows} />
            </div> 



)
}
}

export default Home;