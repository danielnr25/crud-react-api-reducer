import { useState } from "react";
import { AppContext, useAppContext } from "../context/AppContext"
import Edit from "./edit"

const Show = () => {

   const { students, deleteStudent } = useAppContext(AppContext)

   const [rowData, setRowData] = useState({});

   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);

   const handleShow = (student) => {
      setRowData(student)
      setShow(true)
   };

   return (
      <>
         <table className="table table-striped mt-5">
            <thead className="bg-dark text-white">
               <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Edad</th>
                  <th scope="col">Acciones</th>
               </tr>
            </thead>
            <tbody>
               {students.map((student) => (
                  <tr key={student.id}>
                     <th>{student.name}</th>
                     <td>{student.age}</td>
                     <td>
                        <div className="btn-group">
                           <button onClick={() => handleShow(student)} className="btn btn-info"> <i className="fa-regular fa-pen-to-square"></i> </button>
                           <button onClick={() => deleteStudent(student.id) } className="btn btn-danger"> <i className="fa-regular fa-trash-can"></i> </button>
                        </div>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>

         <Edit show={show} onClose={handleClose} rowData={rowData} />
      </>
   )
}

export default Show