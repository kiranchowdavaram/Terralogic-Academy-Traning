import React from 'react'

const ListUsage = () => {
    const items=[
        {id:1,name:'sai',age:10},
        {id:2,name:'jb',age:20},
        {id:3,name:'kiran',age:25}
    ]
  return (
    <>
        <ul>
        {items.map(item=>(
            <li key={item.id}>{item.name}{item.age}</li>
        ))}
    </ul>
    </>
  )
}

export default ListUsage