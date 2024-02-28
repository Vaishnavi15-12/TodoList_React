import React, { useState } from 'react'

const SingleItem = ({item,removeItem,editItem}) => {

    return (
    <div className='single-item'>
        <input type="checkbox" checked={item.completed} onChange={() => {editItem(item.id)}} />
        {item.completed ? <p style={{textDecoration:'line-through',textTransform:'capitalize'}}>{item.name}</p> : <p style={{textTransform:'capitalize'}}>{item.name}</p> }
        <button className='btn remove-btn' type='button' onClick={() => removeItem(item.id)}>Delete</button>
    </div>
  )
}

export default SingleItem
