import React,{Component} from 'react'

class ToWatch extends Component {
   render(){

       return (
           <div>
        <button onClick ={() => {this.props.watchLater(this.state.watchLater)}}>L</button>
    </div>
    )
}
}

export default ToWatch;
