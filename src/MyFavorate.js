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
                        <div className="btnCont">

                        <div className='test' >
                            <img className="poster" src= {`https://image.tmdb.org/t/p/w200/${fave.poster_path}`}/>
                            <button className='remove' onClick={(()=>this.props.removeItem(fave))}>remove</button>
                            <p>{fave.name}</p>
                        </div>
                        </div>
                )
            }
            )
        }
        
        return (
            <div>
            <h1>My Favorate</h1>
            {/* {console.log(this.props)} */}
            {faves}
            <button onClick= {(() => this.props.clearList())}>reset</button>
        </div>
    )
    }
}

export default MyFavorate;
