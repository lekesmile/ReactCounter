import React, { Component } from 'react'

export default class Counter extends Component {

    state = {
        number: 0
    }

    handleIncrease = () => {
        this.setState(
            { number: this.state.number + 1 }
        )
    }
    handleDecrease = () => {
        if (this.state.number > 0) {
            this.setState(
                { number: this.state.number - 1 }
            )
        }
    }

    handleReset = () => {
        this.setState(
            { number: this.state.number * 0 }
        )
    }

    render() {
        return (
            <div className="container m-5 ">
                <div className={this.state.number % 2 === 0 ? "pad even" : "pad odd"} >

                    <p className="numb">{this.state.number}</p>
                </div>

                <div className="row d-flex justify-content-center">
                    <button className="btn btn-primary m-3" onClick={this.handleIncrease}>Increase</button>
                    <button className="btn btn-success m-3" onClick={this.handleDecrease}>Decrease</button>
                    <button className="btn btn-danger m-3" onClick={this.handleReset}>reset</button>
                </div>
            </div>
        )
    }
}

