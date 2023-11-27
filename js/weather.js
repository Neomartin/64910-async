const KEY = `45a75d3ff81ec473ba7a63887c4c3648`

const lat = '30.064385'
const lon = '31.233401'

const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}&units=metric`

axios.get(URL)
        .then(respuesta => {
            console.log(respuesta.data)
        })
        .catch(error => console.log(error))  

// - Pintar los datos en la card de clima
// - Activar el buscador por ciudades
// - Geolocation de JS


// fetch(URL, { method: 'GET' })
//     .then(resp => resp.json())
//     .then(clima => {
//         console.log(clima)
//     })
//     .catch(error => console.log(error));

