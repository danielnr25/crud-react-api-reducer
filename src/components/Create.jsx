import { useState } from "react"
import { AppContext, useAppContext } from "../context/AppContext"


const Create = () => {

   const { createStudent } = useAppContext(AppContext)

   const [name, setName] = useState('')
   const [age, setAge] = useState('')

   const handleSubmit = (e) =>{
      e.preventDefault()
      createStudent({id: Date.now(), name, age})
      setName('')
      setAge('')
   }

   const handleName = (e) =>{
      setName(e.target.value)
   }

   const handleAge = (e) =>{
      setAge(e.target.value)
   }

   return (
      <form onSubmit={handleSubmit}>
         <div className="form-floating mb-3">
            <input 
               value={name}
               onChange={handleName}
               type="text" 
               className="form-control"
               placeholder="Ingrese su Nombre" />
            <label>Nombre</label>
         </div>
         <div className="form-floating">
            <input 
               value={age}
               onChange={handleAge}
               type="number" 
               className="form-control"
               placeholder="Ingrese su edad" />
            <label>Edad</label>
         </div>

         <div className="d-grid mt-2">
            <button type="submit" className="btn btn-primary ">
               <i className="fa-solid fa-circle-plus fa-2x"></i>
            </button>
         </div>
      </form>
   )
}

export default Create