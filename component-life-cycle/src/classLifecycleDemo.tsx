import React,{ Component }from "react";
type IState = {
    count:number;
};
type IProps = {};
class LifecycleDemo extends Component<IProps,IState>{
    constructor(props: IProps) {
        super(props);
        this.state = { count: 0};
        console.log("constructor: component is being created");
    }
    static getDerivedStateFromProps(props:any,state:any){
        console.log("getDerivedStateFromProps: sync state with props if needed")
        return null;
    }

    componentDidMount():void {
        console.log("componentDidMount:component mounted to DOM")
    }
    shouldComponentUpdate(nextprops:any,nextstate:any){
        console.log("shouldComponentUpdate:","yes");
        return true;
    }

    getSnapshotBeforeUpdate(prevprops: any, prevstate: any) {
        console.log("getSnapshotBeforeUpdate: just before DOM is updated");
        return null;
    }

componentDidUpdate(prevprops: any,prevstate: any, snapshot:any){
    console.log("ComponentDidUpdate: Component updated");
}
componentWillUnmount() {
    console.log ("ComponentWillUnmount: Component is being removed");
}

increment = () => {
    this.setState({ count: this.state.count + 1});
};

render() {
    console.log("Render:Rendering component");
    return (
        <div>
            <h2>Lifecycle Demo Component</h2>
            <p>Count: {this.state.count}</p>
            <button onClick={this.increment}>Increment</button>
        </div>
    );
}
}

export default LifecycleDemo