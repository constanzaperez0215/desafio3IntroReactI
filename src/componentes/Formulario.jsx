import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';



const Formulario= ({colaboradores, setColaboradores, setAlert}) => {

  const [nuevoColaborador, setNuevoColaborador] = useState({
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono:''
  })


  const capturaForm = (e) => {
    const {name, value} = e.target
    setNuevoColaborador({...nuevoColaborador,[name]:value})
  }

  const enviarFormulario = (e) => {
    e.preventDefault()
    if(nuevoColaborador.nombre==="" || nuevoColaborador.correo==="" || nuevoColaborador.edad==="" || nuevoColaborador.cargo==="" || nuevoColaborador.telefono===""){
      setAlert({
        error: true,
        msj: "Completa los campos vacios",
        color: "danger"
      })
      return
    }

    setAlert({error:false, msj: "Colaborador agregado!", color:"success"})


    const colaborador_id = {...nuevoColaborador, id: Date.now()}
    setColaboradores([...colaboradores, colaborador_id])
    setNuevoColaborador({
      nombre: '',
      correo: '',
      edad: '',
      cargo: '',
      telefono:''
    })
  }


  console.log(colaboradores)
  console.log(nuevoColaborador)

  return (

    <Form onSubmit={enviarFormulario}>
      <h2>Agregar Colaborador</h2>
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Control
        type="text"
        placeholder="Nombre del Colaborador"
        value={nuevoColaborador.nombre}
        onChange={capturaForm}
        name="nombre"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Control
        type="email"
        placeholder="Email del Colaborador"
        value={nuevoColaborador.correo}
        onChange={capturaForm}
        name='correo'
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="edad">
        <Form.Control
        type="number"
        placeholder="Edad del Colaborador"
        value={nuevoColaborador.edad}
        onChange={capturaForm}
        name='edad'
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="cargo">
        <Form.Control
        type="text"
        placeholder="Cargo del Colaborador"
        value={nuevoColaborador.cargo}
        onChange={capturaForm}
        name='cargo'
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="telefono">
        <Form.Control
        type="number"
         placeholder="Teléfono del Colaborador"
         value={nuevoColaborador.telefono}
         onChange={capturaForm}
         name='telefono'
          />
      </Form.Group>

      <Button variant="primary" type='submit' onClick={enviarFormulario}>
        Agregar
      </Button>
    </Form>
  );
}

export default Formulario