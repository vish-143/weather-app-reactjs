import React from 'react'

const ListComp = ({first, sec, third}) => {
  return (
    <div className='list-comp'>
        <p>{first}</p>
        <p>{sec}</p>
        {
          third && <p style={{marginLeft:'10px', color:'black !important'}}>{third}</p>
        }
    </div>
  )
}

export default ListComp