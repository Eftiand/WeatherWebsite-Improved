
import React from 'react'

export const Search = ({callback}) => {
  return (
    <>
        <input type="text" onChange={(e) => callback(e.target.value)} placeholder="Search City"/>
    </>
  )
}
