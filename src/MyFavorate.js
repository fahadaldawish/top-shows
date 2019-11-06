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
                        <div className="containerFave">

                        <div className="btnCont">

                            <img className="poster" src= {`https://image.tmdb.org/t/p/w200/${fave.poster_path}`}/>
                            <button className='i' onClick={(()=>this.props.removeItem(fave))}>☆</button>
                        </div>
                            <p className="title">{fave.name}</p>
                        </div>
                )
            }
            )
        }
        
        return (
            <div className="containerFave">
            {/* {console.log(this.props)} */}
            {faves}
            <div className="containerFave1">
            <button className="reset" onClick= {(() => this.props.clearList())}>Clear</button>
        </div>
        </div>
    )
    }
}

export default MyFavorate;
