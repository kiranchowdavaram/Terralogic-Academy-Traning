import React from 'react';

const Card = (props:{name:string,age:number,course:string,company:string})=>{
    const {name,age,course,company} = props
    return (
        <div style={{border:'2px solid black',borderRadius:'5px',padding:'20px',margin:'5px',width:'150px',textAlign:'left',color:'burlywood',background:'#0e4b4ecc'}}>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Course: {course}</p>
            <p>Company: {company}</p>
        </div>
    )
}
export default Card;