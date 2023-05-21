import Show from "./components/Show"
import Create from "./components/create"

function App() {

  return (
    <>
      <div className="container text-center p-3">
        <h1 className="text-primary p-4">CRUD CONTEXT API - REDUCER</h1>
        <div className="card px-4 border-0">
          <Create />
          <Show />
        </div>
      </div>
    </>
  )
}

export default App
