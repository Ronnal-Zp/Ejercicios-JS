

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








