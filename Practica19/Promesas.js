
function consultarBaseDeDatos() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let exito = true;

            if (exito) {
                resolve("Consulta realizada correctamente.");
            } else {
                reject("Error al consultar la Base de datos.");
            }

        }, 3000);

    });
}

consultarBaseDeDatos()
    .then((respuesta) => {
        console.log(respuesta);
    })
    .catch((error) => {
        console.log(error);
    });

async function consultarBD() {
    try {
        let respuesta = await consultarBaseDeDatos();
        console.log(respuesta);
    } catch(error) {
        console.log(error);
    }
}

consultarBD();