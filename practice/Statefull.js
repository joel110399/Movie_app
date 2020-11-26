const { Component } = require("react/cjs/react.production.min")

import React, {Component} from "react";

class Statefull extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hello: "Hola mundo State React"
        }
    }
    render() {
        return(
        <h1>{this.state.hello}</h1>
        )
    }
};

export default Statefull;
