import React, { useState } from 'react'

const AllGroups = () => {
    useState(()=>{
        fetch("groups.json")
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
  return (
    <div>
      
    </div>
  )
}

export default AllGroups
