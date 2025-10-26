import React from "react";
type Iprops = {
    isLoggedin : boolean;
    defaultprop? :boolean;
};
const ConditionalRendering = (props: Iprops) =>{
    const { isLoggedin,defaultprop = "No val from parent" } = props;
    console.log("defaultprop",defaultprop);

    const checkIfUserHasAccount = (hasAccount: boolean) => {
        if(hasAccount) return <h1> User can login</h1>;
        return <h1> User Need to Register</h1>;
    };
    return (
        <div>{isLoggedin? <h1>yes,login</h1> :checkIfUserHasAccount(false)}</div>
    );
};
 export default  ConditionalRendering;