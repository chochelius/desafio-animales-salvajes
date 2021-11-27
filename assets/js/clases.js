import {
    Animal
} from "./animal.js";


class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido, id) {
        super(nombre, edad, img, comentarios, sonido, id)
    }
    rugir(sonido) {
        return sonido
    }
};

class Lobo extends Animal {
	constructor(nombre, edad, img, comentarios, sonido) {
		super(nombre, edad, img, comentarios, sonido);
	}
	aullar() {
		sonido.src = `./assets/sounds/${this.getSonido}`;
		sonido.play();
	}
};

class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido, id) {
        super(nombre, edad, img, comentarios, sonido, id)
    }
    gruñir(sonido) {
        return sonido
    }

}

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido, id) {
        super(nombre, edad, img, comentarios, sonido, id)
    }
    sisear(sonido) {
        return sonido
    }
};

class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido, id) {
        super(nombre, edad, img, comentarios, sonido, id)
    }
    chillar(sonido) {
        return sonido
    }
};

export { Leon, Lobo, Oso, Serpiente, Aguila };