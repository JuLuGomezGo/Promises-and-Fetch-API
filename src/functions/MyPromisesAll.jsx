function MyPromisesAll() {

    //Funcion normal que regresa una promesa pero el resultado se obtiene mas lento.
    function fcnSumarLento(numero) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(numero + 1);
            }, 800);
        });
    };

    //Manera mas optimizada de definir una funcion pero de tipo arrow que tambien regresa una promesa pero el resultado
    //se obtiene mas rapido.
    let fcnSumarRapido = (numero) => {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(numero + 1);
            }, 300);
        });
    };

    //Llamado normal de la funcion sumar lento y su promesa.
    // fcnSumarLento(5)
    //     .then(respuesta => {
    //         console.log('Respuesta Lenta:', respuesta);
    //     });
    // //Llamado normal de la funcion sumar rapido y su promesa.
    // fcnSumarRapido(10)
    //     .then(respuesta => {
    //         console.log('Respuesta Rapida:', respuesta);
    //     });
    //Llamado de las 2 funciones y sus respectivas promesas al mismo tiempo.
    // Promise.all([fcnSumarLento(5), fcnSumarRapido(10)])
    // .then(respuestas =>{
    //    console.log('Respuestas:', respuestas);
    // });
    let arregloVarios = [fcnSumarLento(5),
                         fcnSumarRapido(10),
                         true,
                         '¡Hola Mundo!'
                        ];
    //Llamado de las 2 funciones y sus respectivas promesas al mismo tiempo.
    Promise.all(arregloVarios)
        .then(respuestas => {
            console.log('Respuestas:', respuestas);
        })
        .catch(error => {
            console.log("Error en todas las promesas: ", error);
        });

    return (
        <>
            <div>
                <h1>
                    Programa de Funciones con Promesas ALL
                </h1>
            </div>

        </>
    );
};


export default MyPromisesAll;