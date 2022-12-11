import { useLoaderData } from "react-router-dom"
import Cliente from "../components/Cliente";
import { obtenerClientes } from "../data/clientes";// obtenerClientes es una funcion que importamos desde clientes.jsx. La importación lleva los corchetes porq es una funcion de "export" es decir, nombrada.


export function loader() {
const clientes = obtenerClientes()
// Esta funcion daba un error y esto era porque los loaders siempre tienen que retornar algo, es por ellos que se retorna un objeto vacio a continuación
return clientes
}
// loader es como un useEffect, es una forma de agregar state a la app o consultar una API para ver como se importa 

function Index() {

  const clientes = useLoaderData();
  // useLoaderData se usa para acceder a lo que hay en el loader es por esto que asi se muestran los clientes en nuestro dom
  return (
    <div>
      <h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
      <p className='mt-3'>Administra tus Clientes</p>

      {clientes.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Cliente</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>

          <tbody>
          {clientes.map(cliente => (    
           <Cliente 
           cliente={cliente}
           key={cliente.id}
           />
           ))}
          </tbody>

        </table>
      ) : (
        <p className="text-center mt-10">No hay Clienes</p>
      )}

    </div>
  )
}

export default Index