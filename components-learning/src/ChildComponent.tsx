function ChildComponent(props: any) {
    return(
    <button onClick={props.onButtonClick}>
        click me to alert parent
    </button>
    );
}
export default ChildComponent