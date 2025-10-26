import React ,{Component} from "react";
import First from "./classfirst";
import Second from "./classsecond";
class ClassApp extends  Component {
    render(){
        return(
            <div>
                <h1>My Class Component</h1>
                <First />
                <Second />
            </div>
        )
    }   
}


export default ClassApp;