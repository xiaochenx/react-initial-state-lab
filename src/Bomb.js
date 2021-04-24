// your Bomb code here!
import React, { Component } from 'react'

export default class Bomb extends Component {
    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    bombMessage = () => {
        if (this.state.secondsLeft === 0){
            return <h3>Boom!</h3>
        }else{
        return <p>{this.state.secondsLeft} seconds left before I go boom!</p>
        }
    }


    render() {
        return (
            <div>
             
                  {this.bombMessage()}
                
            </div>
        )
    }
}
