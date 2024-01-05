import React from 'react'

const ListComp = ({first, sec, third}) => {
  return (
    <div className='list-comp'>
        <p>{first}</p>
        <p>{sec}<span style={{marginLeft:'10px', color:'black !important'}}>{third}</span></p>
    </div>
  )
}

export default ListComp