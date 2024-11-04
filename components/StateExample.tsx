'use client'

import React, { Component } from "react";

interface StateExampleProps {
    message: string;
}

interface StateExampleData
{
    greeting: string;
}

class StateExample extends Component<StateExampleProps, StateExampleData> {
    constructor(props : StateExampleProps) {
        super(props);

        // Set initial state
        this.state = {
            greeting:
                "Click the button to receive a greeting!",
        };

        // Binding this keyword
        this.updateState = this.updateState.bind(this);
    }

    updateState() {
        // Changing state
        this.setState({
            greeting: "sandboxcoder welcomes you !!",
        });
    }

    render() {
        return (
            <div>
                <h2>Greetings {this.props.message} Portal</h2>
                <p>{this.state.greeting}</p>

                {/* Set click handler */}
                <button onClick={this.updateState}>
                    Click me!
                </button>
            </div>
        );
    }
}

export default StateExample;
