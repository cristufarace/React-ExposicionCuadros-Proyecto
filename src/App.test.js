import { render, screen } from '@testing-library/react';
import App from './App';
import CuadrosMasInfo from '../src/paginas/CuadrosMasInfo'

test('Test para ver si aparece la palabra descripcion', () => {
  render(<CuadrosMasInfo/>);
  const linkElement = screen.getByText("Descripcion");
  // testing library primero monta el componente app
  // luego,en la segunda linea consulta si existe el tecto Mis obras
  expect(linkElement).toBeInTheDocument();
  // Jest valida la consulta que hace testing-library
});

// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
// algo me falto aca pq no me salio bien la busqueda!!!!!!!
// MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
// describe('Test para ver si aparece la palabra descripcion', ()=> {
//   it('Deberia aparecer la palabra descripcion en algun lugar de app porque estoy renderizando las propiedad del objeto producto', ()=>{
//     const linkElement = screen.getByText("Mis Obras");
//     expect(linkElement).toBeInTheDocument();
//   })
// })
