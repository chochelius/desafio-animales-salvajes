import { getDatos } from "./consulta.js";
import { Aguila, Leon, Lobo, Oso, Serpiente } from "./clases.js";


const seleccionAnimal = document.getElementById('animal')
const seleccionAnimalEdad = document.getElementById('edad')
const comentarioAnimal = document.getElementById('comentarios')
const botonagregar = document.getElementById('btnRegistrar')
const audio = document.getElementById('player')
const animalesTabla = document.getElementById('Animales')


const grupoAnimales = []


botonagregar.addEventListener('click', async (e) => {
    e.preventDefault()
    const animals = await getDatos();

    const animal = animals.find((animales) => {
        return animales.name === seleccionAnimal.value
    });
    const imagen = (function () {
        return ` <img class="card-img-top" src="./assets/imgs/${animal.imagen}" alt=""> `
    })();
    const sonidoAnimal = (function () {
        return `src='.assets/sounds/${animal.sonido}'`
    })();
    let nuevoid = `id-${Date.now()}`
    const idanimal = nuevoid;
    let animalesNuevo;

    if (seleccionAnimal.value == 'Leon') {
        animalesNuevo = new Leon(
            seleccionAnimal.value,
            seleccionAnimalEdad.value,
            imagen,
            comentarioAnimal.value,
            sonidoAnimal,
            idanimal
        );
    } else if (seleccionAnimal.value == 'Lobo') {
        animalesNuevo = new Lobo(
            seleccionAnimal.value,
            seleccionAnimalEdad.value,
            imagen,
            comentarioAnimal.value,
            sonidoAnimal,
            idanimal
        );
    } else if (seleccionAnimal.value == 'Oso') {
        animalesNuevo = new Oso(
            seleccionAnimal.value,
            seleccionAnimalEdad.value,
            imagen,
            comentarioAnimal.value,
            sonidoAnimal,
            idanimal
        );
    } else if (seleccionAnimal.value == 'Serpiente') {
        animalesNuevo = new Serpiente(
            seleccionAnimal.value,
            seleccionAnimalEdad.value,
            imagen,
            comentarioAnimal.value,
            sonidoAnimal,
            idanimal
        );
    } else if (seleccionAnimal.value == 'Aguila') {
        animalesNuevo = new Aguila(
            seleccionAnimal.value,
            seleccionAnimalEdad.value,
            imagen,
            comentarioAnimal.value,
            sonidoAnimal,
            idanimal
        );
    }
    grupoAnimales.push(animalesNuevo)
    console.log(grupoAnimales)
    console.log(idanimal)
    const mostarAnimales = () => {
        animalesTabla.textContent = "";
        grupoAnimales.forEach((animal) => {
            animalesTabla.innerHTML += `
                 <div class="card ms-2 col-md-3 mb-3">
                    ${animal.img}
                    <button id="btnAudio" class="btn btn-outline-danger  bg-transparent ">🔈</button>
                </div>
          `;
        });
    };
    mostarAnimales()
});

//no me funcionan los sonidos :( 