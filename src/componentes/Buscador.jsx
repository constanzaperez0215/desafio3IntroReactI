import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Buscador = ({colaboradores, setColaboradores,search, setSearch}) => {


  const buscarColaborador = (e) => {
    let value = e.target.value
    setSearch(value)

   let filtrados = colaboradores.filter((colaborador) =>{
     if(
       colaborador.nombre.toLowerCase().includes(value.toLowerCase()) ||
       colaborador.correo.toLowerCase().includes(value.toLowerCase()) ||
       colaborador.edad.toLowerCase().includes(value.toLowerCase()) ||
       colaborador.cargo.toLowerCase().includes(value.toLowerCase()) ||
       colaborador.telefono.toLowerCase().includes(value.toLowerCase())
     )
     return(colaboradores)
   })


 if(filtrados.length === ""){
    setColaboradores(colaboradores)
   }else
    setColaboradores(filtrados)
  }


  return (
    <Form>
    <Row>
      <Col md={5}>
        <Form.Control
          type="text"
          placeholder="Busca un colaborador"
          className=" mr-sm-2"
          onChange={buscarColaborador}
          value={search}
        />
      </Col>
    </Row>
  </Form>
  )
}

export default Buscador