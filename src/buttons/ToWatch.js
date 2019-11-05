import React,{Component} from 'react'

class ToWatch extends Component {
   render(){

       return (
           <div>
        <button onClick ={() => {this.props.watchLater(this.state.later)}}>L</button>
    </div>
    )
}
}

export default ToWatch;
