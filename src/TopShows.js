import React, {Component} from 'react'
import Logo from './Logo';
// import show from'./show';
import Fave from './buttons/Fave'
import ToWatch from './buttons/ToWatch';

class TopShows extends Component {
    constructor(props){
        super(props)
    }
    render(){
        let topTen;         
        
        if (this.props.toppies.length > 0){

           topTen = this.props.toppies.map((show) =>{ 
               return (<div className="test" key={show.id}>  
               
               <div>
               <img className="poster" src= {`https://image.tmdb.org/t/p/w200/${show.poster_path}`}> 
                </img>
              <div className='btn'>
              <button onClick ={() => {this.props.addToFave(this.state.add)}}>F</button>
              <button onClick ={() => {this.props.watchLater(this.state.later)}}>L</button> 
              </div>
               <p className='title'> { show.name } </p>
               </div>
               </div>
               
               );
           })
           
           console.log(topTen);
        }
        else{
           topTen = <h1>Loading...</h1>
        }   
    return (
        <div>
            {/* <Logo /> */}
            {topTen}
            
            
        </div>
        )
    }
}
export default TopShows;
