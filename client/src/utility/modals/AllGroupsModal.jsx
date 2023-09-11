import React from 'react'
import TableFormModals from '../Tables/TableFormModals'

const AllGroupsModal = () => {
  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
       All Groups
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default AllGroupsModal

