
import './App.css'
import Formulario from './componentes/Formulario'
import Listado from "./componentes/Listado"
import { BaseColaboradores } from './componentes/BaseColaboradores'
import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from './componentes/Alert'
import Buscador from './componentes/Buscador'


const App = () => {

  const [colaboradores, setColaboradores] = useState(BaseColaboradores)
  const [alert, setAlert] = useState({ error: "", msj: "", color: "" })
  const[search, setSearch]= useState("")

  console.log(setSearch)

  return (
    <Container>
      <Row>
        <Col md={9}>
          <Buscador search={search} setSearch={setSearch} colaboradores={colaboradores} setColaboradores={setColaboradores} />
          <Listado colaboradores={colaboradores} search={search} setColaboradores={setColaboradores} />
        </Col>
        <Col md={3}>
          <Formulario setAlert={setAlert} colaboradores={colaboradores} setColaboradores={setColaboradores} />
          {alert.msj && <Alert color={alert.color}>{alert.msj}</Alert>}
        </Col>
      </Row>
    </Container>
  )
}

export default App
