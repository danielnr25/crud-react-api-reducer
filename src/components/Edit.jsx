import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { AppContext, useAppContext } from '../context/AppContext';
import { useEffect, useState } from 'react';

const Edit = ({ show, onClose, rowData }) => {

  const { updateStudent } = useAppContext(AppContext)
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    age: ''
  })


  const handleOnChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateStudent(formData)
    onClose()
  }

  useEffect(() => {
    setFormData(rowData)
  }, [rowData])


  const { name, age } = rowData

  return (
    <>

      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modificar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              defaultValue={name}
              onChange={(e) => handleOnChange('name', e.target.value)}
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Edad</Form.Label>
            <Form.Control
              defaultValue={age}
              onChange={(e) => handleOnChange('age', e.target.value)}
              type="number"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Modificar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Edit