import { createContext, useContext, useReducer } from "react";
import { CREATE, UPDATE, DELETE } from "./Actions";
import reducer from "./reducer";

export const AppContext = createContext();

const initialState = {
   students: [
      { id: 1, name: "Nayelli Gayoso Sanchez", age: 21 },
      { id: 2, name: "Daniel Nuñez Rodas", age: 22 },
      { id: 3, name: "Azul Nuñez Gayoso", age: 1 },
      { id: 4, name: "Rocky vladimir Nuñez Gayoso", age: 2 },
   ]
}

export const AppProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState)

   const createStudent = (student) => { dispatch({ type: CREATE, payload: student }) }
   const updateStudent = (student) => { dispatch({ type: UPDATE, payload: student }) }
   const deleteStudent = (id) => { dispatch({ type: DELETE, payload: id }) }


   return (
      <AppContext.Provider value={{
         students: state.students,
         createStudent,
         updateStudent,
         deleteStudent,
         dispatch
      }}>
         {children}
      </AppContext.Provider>
   );
}


export const useAppContext = () => { return useContext(AppContext) }
