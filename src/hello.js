
'use strict'
import React, { Component } from 'react'
import ReactDOM from "react-dom"

import './hello.less'
import tt from '../asset/TT.png'
class ReactDemo extends Component {
    render() {
        return (
            <div className="container">
                <h1>this is ReactDemos1112</h1>
                <img src={tt}></img>
            </div>
        )
    }
}

ReactDOM.render(<ReactDemo />,document.querySelector('#root'));

