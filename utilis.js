async function handleCall(){
    const response = await fetch( "https://swapi.dev/api/people");
    const data = await response.json();
    const contenedorBromas = document.getElementById("responses");

    if(data.type === "single"){
        contenedorBromas.innerHTML = data.joke;
    }else{
        contenedorBromas.innerHTML = `${data.setup} ${data.delivery}`;
    }
}
//fetch
// utiizando las palabras async await