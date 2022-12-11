import { Form, useNavigate, useLoaderData, useActionData, redirect } from "react-router-dom"
import { obtenerCliente, actualizarCliente } from "../data/clientes"
import Formulario from "../components/Formulario"
import Error from "../components/Error"

export async function loader({ params }) {
    const cliente = await obtenerCliente(params.clienteId)
    if (Object.values(cliente).length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'El Cliente no Existe'
            // Con este throw creamos nuestra respuesta en caso que haya un error, y se detendra la ejecución sessionStorage, mostrara el cliente encontrado.
        })
    }
    return cliente
}

export async function action({ request, params }) {
    const formData = await request.formData()

    const datos = Object.fromEntries(formData) // datos son los datos ingresados por los usuarios

    const email = formData.get('email')

    // Validación
    const errores = []
    if (Object.values(datos).includes('')) {
        errores.push('Todos los campos son obligatorios')
    }

    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    // Este codigo nos ayuda a validar por si solo quer un email ingresado tenga el formato adecuado
    if (!regex.test(email)) {
        // .test es un recurso de react para validaciones.
        // En este caso se esta evaluando si el email introducido tiene un formato valido y si no lo tiene e ejecuta el if. 
        errores.push('El Email no es válido')
    }

    // Retornar datos si hay errores
    if (Object.keys(errores).length) {
        return errores
    }

    // Actualizar cliente
    await actualizarCliente(params.clienteId, datos)   // id viene de params y cliente viene del placeholder pasado por props en el componente main.jsx path.../:cliente

    return redirect('/')   // como los action deben retornar algo retornamos redirect que es un hook de react-router-dom que redirecciona a la pagina que le indiquemos. se usa en actions y en loaders
}

function EditarCliente() {

    const navigate = useNavigate()
    const cliente = useLoaderData()
    const errores = useActionData()

    return (
        <div>
            <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
            <p className='mt-3'>A continuación podras modificar los datos de un cliente</p>

            <div className='flex justify-end'>
                <button className='bg-blue-800 text-white px-3 py-1 font-bold uppercase' onClick={() => navigate(-1)}>
                    Volver
                </button>
            </div>

            <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>

                {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error> )}

                <Form method='post' noValidate>
                    {/* el form tiene un noValidate para quitar la validación de email que trae html y acceder a las declaraciones de errores que nosotros planteemos. */}
                    {/* En este caso como no usaremos la funcion handlesubmit asociada al form como acostumbrabamos, importaremos el hook de react-router-dom Form que incluye estas funciones, es por esto que el form no es una etiqueta <form></form> sino un componente <Form /> */}
                    <Formulario
                        cliente={cliente}
                    />

                    <input type="submit" className='mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg' value='guardar cambios' />

                </Form>
            </div>
        </div>
    )
}

export default EditarCliente