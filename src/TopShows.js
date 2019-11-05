import React, {Component} from 'react'
import Logo from './Logo';
// import show from'./show';
import Fave from './buttons/Fave'
import ToWatch from './buttons/ToWatch';
import PrintMo from './PrintMo';

class TopShows extends Component {
    constructor(props){
        super(props)
        this.state={
            myFavorate : [],
            later :[]
          }
    }

 
    render(){
        let topTen;         
        
        if (this.props.toppies.length > 0){

           topTen = this.props.toppies.map((show,index) =>{ 
               return (<PrintMo show={show} key={index} add={(e)=>{this.props.addToFave(show)}}/>);
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
