
import './App.css'
import Formulario from './componentes/Formulario'
import Listado from "./componentes/Listado"
import { BaseColaboradores } from './componentes/BaseColaboradores'
import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const App = () => {

  const [colaboradores, setColaboradores] = useState(BaseColaboradores)

  return (
    <>
<Container>
      <Row>
        <Col md={9}>
          <Listado colaboradores={colaboradores} />
        </Col>
        <Col md={3}>
          <Formulario colaboradores={colaboradores} setColaboradores={setColaboradores}/>
        </Col>
      </Row>
    </Container>

    </>
  )
}

export default App
