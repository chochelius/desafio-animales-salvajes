export class Animal {
    constructor(nombre, edad, img, comentarios, sonido, id) {
        this.nombre = nombre;
        this.edad = edad;
        this.img = img;
        this.comentarios = comentarios;
        this.sonido = sonido;
        this.id = id;
    }
    //GETTER
    get getNombre() {
        this.nombre = nombre;
    }
    get getEdad() {
        this.edad = edad;
    }
    get getImg() {
        this.img = img;
    }
    get getComentario() {
        this.comentarios = comentarios;
    }
    get getSonido() {
        this.sonido = sonido;
    }
    get getId() {
        this.id = id;
    }
    //SETTER
    set setNombre(nombre) {
        this.nombre = nombre;
    }
    set setEdad(edad) {
        this.edad = edad;
    }
    set setImg(img) {
        this.img = img;
    }
    set setComentario(comentarios) {
        this.comentarios = comentarios;
    }
    set setSonido(sonido) {
        this.sonido = sonido;
    }
    set setId(id) {
        this.id = id;
    }
}