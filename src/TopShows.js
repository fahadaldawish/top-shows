import React, {Component} from 'react'
// import show from'./show';

class TopShows extends Component {
    constructor(props){
        super(props)
    }
    render(){
        let topTen;         
        
        if (this.props.toppies.length > 0){
           topTen = this.props.toppies.map((show) =>{ 
               return (<div className="test" key={show.id}>  
               <img src= {`https://image.tmdb.org/t/p/w200/${show.poster_path}`}></img>
                
               </div>);
           })
           console.log(topTen);
        }else{
           topTen = <h1>Loading...</h1>
        }
    
    return (
        <div className='test'>
            {topTen}
            
        </div>
    )
}
}
export default TopShows;
