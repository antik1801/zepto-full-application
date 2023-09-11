import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Table = () => {
  const [inputs, setInputs] = useState({});
  const [fonts, setFonts] = useState([])
  const [render, setRender] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http:localhost/projects/zepto-new-server/index.php", inputs)
      .then(function (response) {
        console.log(response.data);
      });
    console.log(inputs);
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({
      ...values,
      [name]: value,
    }));
  };
  const handleDelete = (id) =>{
   
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/api/deleteSingleFont/${id}`)
        .then(data =>{
          if (data.data.deletedCount > 0) 
          {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            setRender(!render);
          }
          console.log(data)
        })
        // console.log('Handle delete')
      }
    })
  }
  useEffect(() => {
    fetch("http://localhost:5000/api/allSingleFonts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setFonts(data);
      });
  }, [render]);
  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <table cellSpacing="10">
          <tbody>
            <tr>
              <th>
                {" "}
                <label>Name: </label>
              </th>
              <td>
                {" "}
                <input
                  name="name"
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                {" "}
                <label>Email: </label>
              </th>
              <td>
                {" "}
                <input
                  name="email"
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>mobile: </label>
              </th>
              <td>
                {" "}
                <input
                  name="mobile"
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>Font: </label>
              </th>
              <td>
                {" "}
                <input name="font" type="file" className="file-input w-full max-w-xs" onChange={handleChange}/>
              </td>
            </tr>
            <tr>
              <th></th>
              <td colSpan="2" align="right">
                {" "}
                <button type="submit" className="btn btn-primary mt-2">
                  Save
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form> */}
      <form onSubmit={handleSubmit}>
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
                  <button onClick={()=>handleDelete(font._id)} className="btn btn-xs btn-primary">Delete</button>
                </td>
              </tr> )
              }
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
};

export default Table;
