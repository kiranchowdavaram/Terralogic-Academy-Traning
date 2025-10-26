import React from "react";

function Button(props:{name:string}) {
    const {name} = props;
    return (
        <button style={{backgroundColor:'blue',color:'white',padding:'10px',border:'none',borderRadius:'50%',width:'100px',height:'100px',margin:'5px'}}>
            {name}-click me
        </button>
    );
}
export default Button;

