export async function obtenerClientes() {
    const respuesta = await fetch(import.meta.env.VITE_API_URL)
    const resultado = respuesta.json()
    return resultado;
}

export async function obtenerCliente(id) {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    const resultado = respuesta.json()
    return resultado;
}

// Arriba estamos haciendo simplemente un fetch y abajo estamos agregando un nuevo cliente

export async function agregarCliente(datos) {
    try {
const respuesta = await fetch(import.meta.env.VITE_API_URL, {
    method: 'POST',    // el metodo en este caso sera post y hay que definidirlo porq por defecto el metodo de fetch es get
    body: JSON.stringify(datos),    // body son los datos que vamos a enviar al servidor
    headers: {
        'Content-Type': 'application/json'        // Content-Type es el tipo de contenido que se esta enviando
    }
})
await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}

export async function actualizarCliente(id, datos) {
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'PUT',    // el metodo en este caso sera put y hay que definidirlo porq por defecto el metodo de fetch es get
            body: JSON.stringify(datos),    // body son los datos que vamos a enviar al servidor
            headers: {
                'Content-Type': 'application/json'        // Content-Type es el tipo de contenido que se esta enviando
            }
        })
        await respuesta.json()
            } catch (error) {
                console.log(error)
            }
}

export async function eliminarCliente(id){
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'DELETE',    // el metodo en este caso sera delete y hay que definidirlo porq por defecto el metodo de fetch es get
        })
        await respuesta.json()
            } catch (error) {
                console.log(error)
            }
}