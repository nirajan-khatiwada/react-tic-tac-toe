import React from 'react'

const Log = ({turns}) => {
  return (
    <ol id="log">
            {turns.map((data,index)=>{
              const {square,activeplayer}=data;
              const {row,column}=square;
              return <li key={index}>Player {activeplayer} select {row}{column}</li>
            })}
    </ol>
  )
}

export default Log