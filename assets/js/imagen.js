import { getDatos } from "./consulta.js";


const seleccionAnimal = document.getElementById('animal')
const preview = document.getElementById('preview')


seleccionAnimal.addEventListener('change', async () => {
    const animals = await getDatos();
    const animal = animals.find((animales) => {
        return animales.name === seleccionAnimal.value
    });
    const imagen = (function () {
        return `<img class='card-img' style=" height: 200px;" src="./assets/imgs/${animal.imagen}" alt="">`
    })();

    const agregar = () => {
        preview.innerHTML = `${imagen}`
    }
    agregar()
})