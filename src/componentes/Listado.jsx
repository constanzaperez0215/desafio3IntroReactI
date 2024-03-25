import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

const Listado = ({colaboradores, setColaboradores}) => {
    console.log(colaboradores)

   

  return (
    <>
      <h2>Lista de Colaboradores</h2>
      <Table striped bordered hover size="sm" >
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {colaboradores &&
            colaboradores.map((colaborador)=> (
            <tr key={colaborador.id}>
              <td key={colaborador.id}>{colaborador.id}</td>

              <td key={colaborador.nombre}>{colaborador.nombre}</td>

              <td key={colaborador.correo}>{colaborador.correo}</td>

              <td key={colaborador.edad}>{colaborador.edad}</td>

              <td key={colaborador.cargo}>{colaborador.cargo}</td>

              <td key={colaborador.telefono}>{colaborador.telefono}</td>
            </tr>
          ))}
 
        </tbody>
      </Table>
    </>
  );
}

export default Listado;