import React, { useState } from "react";
import TableFormModals from "../Tables/TableFormModals";

const GroupModals = () => {
  const [selectedFonts,setSelectedFonts] = useState([])
  const [groupname, setGroupName] = useState("")
  const [fonts, setFonts] = useState([])
  const handleGroupDetails = (e) =>{
    e.preventDefault()
    console.log(e)
  }
  const handleSelect = (font,e) =>{
      
    console.log(font)
  }

  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Add Groups
      </button>
      <form onSubmit={handleGroupDetails}>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Group Name</h3>
        
          <input type="text" placeholder="Group name" className="input w-full max-w-xs" />
          <TableFormModals handleSelect={handleSelect} fonts={fonts} setFonts={setFonts} />

          <div className="modal-action">
            <div>
              {/* if there is a button in form, it will close the modal */}
              <button type="submit" className="btn">Close</button>
            </div>
          </div>
        </div>
      </dialog>
      </form>
    </div>
  );
};

export default GroupModals;
