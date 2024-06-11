//Lista della spesa con ciclo while

//creo array lista spesa
const spesa = ["pane", "latte", "uova", "farina", "sale", "olio"];

//seleziono ul in pagina
const ulLista = document.querySelector("ul");

//indice per ciclo while
let indice = 0;

//ciclo while
while (indice < spesa.length) {

    //creo i li da inserire in ul
    let aggiungoLi = `<li>${spesa[indice]}</li>`;

    //incremento ad ogni cilo il valore di indice
    indice++;

    //stampo i li in ul
    ulLista.innerHTML += aggiungoLi;
}
