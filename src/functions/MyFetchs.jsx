function MyFetchsAPIs() {
    var request = new XMLHttpRequest();

    console.log("¡Hola Mundo!");
    var request = new XMLHttpRequest();
    request.open('GET', 'https://reqres.in/api/users', true );
    request.send(null);
    request.onreadystatechange = function( state ){
        if (request.readyState === 4) {
            //FIC: la respuesta obtiene un string.
            var resp = request.response;
            //FIC: ahora transformamos la cadena en formato
            var respObj = JSON.parse(resp);
            //FIC: enviamos el resultado a la consola.
            //FIC: obtenemos solo la pagina actual.
            console.log( respObj.page);
            //FIC: obtenemos solo la data de los usuarios.
            console.log( respObj.data);
            console.log( respObj );
        }
       
    }



    
    return (
        <>
            <div>
                <h1>
                    Programa para FETCH APIs
                </h1>
            </div>
       
        </>
    );
};
export default MyFetchsAPIs;