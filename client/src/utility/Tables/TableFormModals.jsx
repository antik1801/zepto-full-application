import React, { useEffect, useState } from 'react'

const TableFormModals = ({handleSelect, fonts, setFonts}) => {
    
    const [addFonts, setAddFonts] = useState([])
    useEffect(()=>{ 
        fetch("http://localhost:5000/api/allSingleFonts")
        .then(res => res.json())
        .then(data => setFonts(data))
    },[])
    useState(()=>{
        fetch("groups.json")
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    },[])
    
  return (
    <div>
      <div className="overflow-x-auto">
          <table className="table text-center ">
            {/* head */}
            <thead>
              <tr>
                <th>Fonts</th>
                <th>Preview</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                fonts.map(font=><tr key={font._id} className="bg-base-200">
                <td>{font.fontName}</td>
                <td>{font.preview}</td>
                <td>
                  <button onClick={(e)=>handleSelect(font,e)} className="btn btn-xs btn-primary">Select</button>
                </td>
              </tr> )
              }
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default TableFormModals
