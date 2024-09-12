function MyPromisesRace() {

    //Funcion normal que regresa una promesa pero el resultado se obtiene mas lento.
    function fcnSumarLento(numero) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(numero + 1);
            }, 800);
        });
    };

    //Esta es la manera mas optimizada de definir una funcion pero de tipo arrow que tambien regresa una promesa pero el resultado
    //se obtiene mas rapido.
    let fcnSumarRapido = (numero) => {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(numero + 1);
            }, 300);
        });
    };


    Promise.race([fcnSumarLento(5), fcnSumarRapido(10)])
        .then(respuesta => {
            console.log('Respuestas:', respuesta);
        });



        

    return (
        <>
            <div>
                <h1>
                    Programa de Funciones con Promesas RACE
                </h1>
            </div>

        </>
    );
};
export default MyPromisesRace;