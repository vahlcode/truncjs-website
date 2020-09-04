import React, { Component } from "react";

import "./Intro.css";

export class Intro extends Component {
    constructor(props) {
        super(props)
        this.state = {
            draw: props.draw
        }
    }

    componentWillReceiveProps({draw}) {
        this.setState({draw})
    }

    render() {
        const {draw} = this.state
        return(
            <div className={`intro${draw ? " draw" : ""}`}>
                <h5>Trunc JS</h5>
                <h1>
                    A JavaScript plugin for truncating strings.
                </h1>
                <button id="read">
                    <span>Get Started</span>
                </button>
            </div>
        )
    }
}