const { Component } = require("react")

export class Counter extends Component{

    constructor(props){
        super(props)
        this.state= {
            count:0
        };
    }

    incrementCount(){

        this.setState({count:this.state.count+1})
    }


    render(){

        return(
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={()=>this.incrementCount()}>Increment</button>
            </div>
        );
    }
}