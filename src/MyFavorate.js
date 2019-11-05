import React, {Component} from 'react';

class MyFavorate extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        let faves;
        if (this.props.myFavorate.length > 0){
            faves = this.props.myFavorate.map((fave , index) => {
                    return (
                        <div className='test'>
                            <img className="poster" src= {`https://image.tmdb.org/t/p/w200/${fave.poster_path}`}/>
                            <p>{fave.name}</p>
                        </div>
                )
            }
        )
    }
        
    return (
        <div>
            <h1>My Favorate</h1>
            {console.log(this.props)}
            {faves}
        </div>
    )
    }
}

export default MyFavorate;
