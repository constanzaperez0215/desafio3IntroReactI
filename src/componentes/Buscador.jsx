import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Buscador = ({buscar, colaboradores, setColaboradores, setBuscar}) => {
  
  const buscarColaborador = (e) => setBuscar(e.target.value)


  let filtrados = colaboradores.filter((colaborador) =>{
    return(
      colaborador.nombre.toLowerCase().includes(buscar.toLowerCase()) || colaborador.correo.toLowerCase().includes(buscar.toLowerCase()) || colaborador.edad.toLowerCase().includes(buscar.toLowerCase()) || colaborador.cargo.toLowerCase().includes(buscar.toLowerCase()) || colaborador.telefono.toLowerCase().includes(buscar.toLowerCase())
    )
  })

  console.log(filtrados)

  return (
    <Form>
    <Row>
      <Col md={5}>
        <Form.Control
          type="text"
          placeholder="Busca un colaborador"
          className=" mr-sm-2"
          onChange={buscarColaborador}
          value={buscar}
        />
      </Col>
    </Row>
  </Form>
  )
}

export default Buscador