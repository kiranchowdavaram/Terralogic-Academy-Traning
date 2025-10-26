function WelcomeMessage(props:any) {
    const isLoggedin = props.isLoggedin;

    if(isLoggedin) {
        return <h1>Welcome back!</h1>;
    }
    return<h1>Please log in</h1>;
}
//A more common way using a ternary operator inside JSX:
 export function Greeting(props:any) {
    return (
        <div>
            {props.isLoggedin ? (props.isAuthorized? <h1> you are authorized</h1>: <h1>you are not allowed</h1>):(<h1>Please log in</h1>)}
        </div>
    );
}

export default WelcomeMessage
