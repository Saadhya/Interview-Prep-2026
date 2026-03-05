import { Component } from "react"

export class WelcomeClass extends Component{
    state={
        name:'alex',
        age:30
    }
    handleClick=()=>{
        this.setState({
            name:'Krishna'
        })
    }
    // lifecycle methods of components
    componentDidMount(): void {
        // it will do the sideeffect like chaging title or logo on the fly , 
        // run only once
    }
    shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
        // it will check if the component should update or not
        return true;
    }
    componentDidUpdate(): void {
        // after rerender this method will be called
    }
    componentWillUnmount(): void {
        
    }
    componentdidcatch(error: Error, errorInfo: React.ErrorInfo): void {
        
    }
    render(){
        return(
            <div>
                <h1>Welcome {this.state.name}</h1>
                <p>Age: {this.state.age}</p>
                <br/>
                <button onClick={this.handleClick} className="btn ">Update name</button>
            </div>
        )
    }
}