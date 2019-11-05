import React,{Component} from 'react';

class Fave extends Component {
    render(){

        return (
            
                <div>
                    <button onClick ={() => {this.props.addToFave(this.state.add)}}>F</button>
                </div>
            )
        }
}

export default Fave;
