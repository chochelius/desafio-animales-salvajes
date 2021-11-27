const getDatos = async () => {
    const url = 'http://127.0.0.1:5502/animales.json';
    const respuesta = await fetch(url)
    const {
        animales
    } = await respuesta.json()
    return animales
}
export { getDatos }