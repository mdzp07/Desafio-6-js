const montoPesos=document.getElementById('montoPesos');
const monedaSeleccionada=document.getElementById('seleccionador');
const resultado=document.getElementById('resultado');
const boton=document.getElementById('boton');
const urlAPI= "https://mindicador.cl/api/";

let valorUSD="";
let valorEUR="";
let valorUF="";

let res="";

async function apiMonedas (){
    const info= await fetch(urlAPI);
    const datosAPI= await info.json();
    valorUSD=datosAPI.dolar["valor"];
    valorEUR=datosAPI.euro["valor"];
    valorUF=datosAPI.uf["valor"];
}

async function calculo(){
    try{
    await apiMonedas();
    if(monedaSeleccionada.value=="dolar" && montoPesos.value > 0){
        resultado.innerHTML=(montoPesos.value/valorUSD).toFixed(2)+" USD";

    }
    else if(monedaSeleccionada.value=="euro" && montoPesos.value > 0){
        resultado.innerHTML=(montoPesos.value/valorEUR).toFixed(2)+" EUR";

    }
    else if(monedaSeleccionada.value=="uf" && montoPesos.value > 0){
        resultado.innerHTML=(montoPesos.value/valorUF).toFixed(2)+" UF";
    } 
    else {
        alert("Seleccione una moneda válida. \n\* El monto ingresado debe ser mayor a cero");
    }
}
catch{
    alert("Lo sentimos, estamos teniendo problemas, intente de nuevo mas tarde.")
    console.log("Hay un error en el programa")
}
}

boton.addEventListener("click", calculo);