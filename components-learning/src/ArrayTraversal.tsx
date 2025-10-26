import React from "react";

const ArrayTraversal = () => {
    const items : undefined | any[] =[1,2,3];
    return (
        <div>
            <ol>
                {items?.map(item=>(
                    <li>{item*2}</li>
                ))}
            </ol>
        </div>
    )
}
export default ArrayTraversal