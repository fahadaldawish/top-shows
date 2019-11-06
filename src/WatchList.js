import React, {Component} from 'react';

class WatchList extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        let later;
        if (this.props.watchLater.length > 0){
            later = this.props.laters.map((late , index) => {
                    return (
                        <div className='test'>
                            <img className="poster" src= {`https://image.tmdb.org/t/p/w200/${late.poster_path}`}/>
                            <p>{late.name}</p>
                        </div>
                )
            }
        )
    }
        return (
            {later}
    )
}
}

export default WatchList
