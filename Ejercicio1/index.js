/*  //?Objeto MATH
    utiliza la nomenclatura del punto 

    Propiedades:
        Math.E - Math.PI

    Metodos:
        Math.abs(x)  devuelve el valor absoluto de x, (un numero positivo)    
        Math.ceil(x)  devuelve el entero mas grande mayor o igual que un numero
        Math.floor(x)   devuelve el entero mas pequeño menor o igual que un numero 
        Math.pow(x, y)  devuelve la potencia de x elevado a y       
        Math.random(x)  devuelve un numero pseudoaleatorio entre 0 y 1 
        Math.round(x)  devuel el valor de un numero redondeado al entero mas cercano
        Math.sign(x)  devuelve un 1 con signo +/-

            Formula para elegir un numero random entre limites
                Math.random() * (max - min) + min;
    //?Arrays
        0.34 propiedad   .lenght
        
            Metodos
                normalmente devuelven los metodos de eliminacion devuelven el valor para guardarlo

        1.44     Array.isArray(var)
        3.00    .shift()   -  .pop()    //eliminar elementos
        5.20    .push()   -  .unshift() //agregar elementos
        8.42    .indexOf('var')         //devuelve la posicion del elemento
        9.58    .lastIndexOf()          //devuelve la posicion del elemento contando desde atras   
        10.51   .reverse()              //cambia de direccion el array
        10.56   .join('.')              //agrega caracteres o espacios entre elementos

        13.41   .splice()               //elimina elementos parametros(a,b,valor) b es opcional, indica cuantos elimina, valor indica que se va a reemplazar se puede agregar varios valores

        19.54   .slice()                //extrae elementos para guardarlos en algun sitio, parametros(a,b) de donde hasta donde



*/
/* Tabla de multiplicar
function tablaDeMultiplicar(numTabla, finT) {
    console.log("La tabla del",numTabla);
    for(let i=0; i<=finT; i++){
        console.log(`${i} * ${numTabla} es igual a ${i*numTabla}`);
    }
}
tablaDeMultiplicar(2,10);
console.log(u.constructor.name);
*/

/*
let num=1;

console.log(isNaN(num));

if(!isNaN(num)){
    console.log('hola');
}*/

/*
let cantNum = parseInt(prompt('Cuantos numeros vas a ingresar?'));
let numrs=[];
for (let i=0; i < cantNum; i++) {
    numrs[i] = parseInt(prompt(`Ingrese el numero ${i+1}`));    
}

for (let i=0; i < cantNum; i++){

    if(numrs[i]%2==0){
        console.log(`${numrs[i]} es un numero par`);
    }else{
        console.log(`${numrs[i]} es un numero inpar`);
    }
}*/

/* //*? Objeto
const persona = {
    nombre: 'aldahir',
    edad: 20,
    vdd: false,
    hijos: ['juan', 'maria', 'pepe']
}
for (const key in persona) {
    console.log(persona[key]);
}
*/

/* //*?Clases
class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;

        this.datos = `hola ${nombre} ${apellido}, tienes ${edad} años`;
    }

    saludar(){
        return `hola ${this.nombre}, como estas?`
    }
}

const persona1 = new Persona('aldahir', 'zamora', 20);


console.log(persona1.saludar());
*/

console.log("");
console.log("");


class Libro{
    constructor(titulo, autor, anio, genero){
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.genero = genero;
    }

    getAuthor(){
        return this.autor;
    }

    getGenero(){
        return this.genero;
    }

    getTitulo(){
        return this.titulo;
    }

    getAnio(){
        return this.anio;
    }

    infoLb(){
        return `
                Libro: ${this.titulo}
                Autor: ${this.autor}
                Año: ${this.anio}
                Genero: ${this.genero}`;
    }
}

let books =[];

while (books.length < 2) {
    let nombreLb = prompt('Ingrese nombre del libro');
    let autorLb = prompt('Ingrese autor del libro');
    let anioLb = prompt('Ingrese año del libro');
    let generoLb = prompt('Ingrese genero del libro').toLocaleLowerCase();

    if(nombreLb!='' && 
    autorLb!='' && 
    anioLb.length == 4 && 
    !isNaN(anioLb) && 
    (generoLb=='aventura' || generoLb=='terror' || generoLb=='fantasia')){
        books.push(new Libro(nombreLb, autorLb, anioLb, generoLb));

    }else{
         console.log('Ingreso mal un dato, vuelva a ingresar todos correctamente');
        //alert('Ingreso mal un dato, vuelva a ingresar todos correctamente');
    }
}

const mostrarLibros=() =>{
    let aux;
    for(let i=0; i<books.length; i++){
        aux = books[i].infoLb();
        console.log(aux);
        console.log('');
    }
}

const autoresOrdenados=() =>{
    let autores = [];
    console.log('Autores en orden: ');
    for (const item of books) {
        autores.push(item.getAuthor());
    }
    autores.sort();
    for (const item of autores) {
        console.log(item);
    }
}

const generoPorLibro=() =>{
    let genero = prompt('Ingresa el genero');
    for (const item of books) {
        if(item.getGenero() == genero){
            console.log(`El libro "${item.getTitulo()}" pertenece a ${item.getAuthor()} estrenada en el año${item.getAnio()}, con genero de ${item.getGenero()}`);
        }else{
            console.log('error');
        }
    }
}

mostrarLibros();
autoresOrdenados();
generoPorLibro();








