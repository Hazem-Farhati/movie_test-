import React, { useState } from 'react'

const Item = ({source,title="No Title",desc,children}) => {
    const [show,setShow]=useState(false)
  return (
    <div className='item'>
        <img onClick={()=>setShow(!show)} src={source}/>
        <h3>{title}</h3>
       {show ? <p>{desc}</p> : null}
       {children}
    </div>
  )
}

export default Item