import React from "react";
import ReactDOM from "react-dom";

import Stateless from './src/components/Component.jsx'

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state={

        }
    }

    render() {
        return(<Stateless/>)
    }
}

ReactDOM.render(<Index />, document.getElementById("index"));