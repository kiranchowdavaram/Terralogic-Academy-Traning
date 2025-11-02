function MyInput(Props) {
    return (
        <div>
            <label htmlFor={Props.id}>{Props.label}</label>
            <input 
                type={Props.type}
                id={Props.id}
                value={Props.value}
                onChange={Props.onChange}
            />{" "}
        </div>
    )
}

 export default MyInput;