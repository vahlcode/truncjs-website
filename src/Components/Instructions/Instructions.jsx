import React, { Component } from "react";
import "./Instructions.css";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

Prism.highlightAll();

export class Instructions extends Component {
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

        const codeEs = `import truncjs from "truncjs"\n\nconsole.log(truncjs("Hello Ada, finally the rain stopped! Up for a walk?", 0, 10)) // => "Hello Ada..."`
        const codeCJ = `let truncjs = require("truncjs")\n\nconsole.log(truncjs("Hello Ada, finally the rain stopped! Up for a walk?", 0, 10)) // => "Hello Ada..."`
        const codeEsX = `import truncjs from "truncjs"\n\nlet string = "Hello Ada, finally the rain stopped! Up for a walk?"\n\nconsole.log(truncjs(string, 0, 10)) // => "Hello Ada..."`
        const codeCJX = `let truncjs = require("truncjs")\n\nlet string = "Hello Ada, finally the rain stopped! Up for a walk?"\n\nconsole.log(truncjs(string, 0, 10)) // => "Hello Ada..."`
        
        return(
            <div className={`instructions${draw ? " draw" : ""}`}>
                <h2>Quick start</h2>

                <h3>Installation</h3>
                <pre className="line-numbers language-shell">
                    <code className="language-shell">
                        {`npm i truncjs`}
                    </code>
                </pre>

                <h2>Usage</h2>

                <h5>1. Using via ES6 import</h5>
                <pre className="line-numbers language-js">
                    <code className="language-js">
                        {codeEs}
                    </code>
                </pre>

                <h5>2. Using via Common JS reqiure()</h5>
                <pre className="line-numbers language-js">
                    <code className="language-js">
                        {codeCJ}
                    </code>
                </pre>

                <h6>Let's keep the example clean</h6>
                <pre className="line-numbers language-js">
                    <code className="language-js">
                        {codeEsX}
                    </code>
                </pre>
                
                <pre className="line-numbers language-js">
                    <code className="language-js">
                        {codeCJX}
                    </code>
                </pre>

                <h2>Author</h2>
                <a href="https://twitter.com/vahlcode">Valentine Elum</a>
                <a href="https://github.com/vahlcode/truncjs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                </a>
                <h2>License</h2>
                <p>MIT License</p>
            </div>
        )
    }
}