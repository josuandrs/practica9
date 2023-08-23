import './Tarjeta1.css'


function Flecha(props) {
    
    return(

        <div className='card'>
            <div className='face front'>
                <img src={props.urlImagen} />
                <h3>{props.nombre}</h3>
            </div>
                <div className='face back'>
                    <h3>{props.titulo}</h3>
                        <p>{props.texto}</p>
                    <div className='social-icons'>
                        <a href=""><i class='bx bxl-instagram'></i></a>
                        <a href=""><i class='bx bxl-tiktok'></i></a>
                        <a href=""><i class='bx bxl-twitter'></i></a>
                    </div>
            </div>
        </div>
    )
}

export default function Tarjeta1() {
    const jugador=['https://cdn.britannica.com/09/188709-050-03BF34CB/Michael-Jordan.jpg','https://imagenes.elpais.com/resizer/jhKB3qPwFKZwUvdPN2RwRlRInyA=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/LP7IJ47FAHMYOPENPEUSHTBESA.jpg','https://www.sportsillustrated.de/sites/default/files/2022-02/Roger%20Federer%20Backhand.jpg']
  return (
    <div className='contenedor'>
        <div className='head'>
            <h1>Mejores Jugadores de la Historia</h1>
        </div>
        <div className='body'>    
        <Flecha  urlImagen={jugador[0]}  nombre={'Michael Jordan'} titulo={'Michael Jordan'} texto={'Considerado por muchos como el mejor jugador de baloncesto de todos los tiempos. Su carrera llena de éxitos, incluyendo seis campeonatos de la NBA y numerosos premios individuales, lo convierte en una leyenda indiscutible del baloncesto.'} />
        <Flecha  urlImagen={jugador[1]}  nombre={'Diego Maradona'} titulo={'Diego Maradona'} texto={'Legendario futbolista argentino, fue una figura icónica del fútbol mundial. Su vida estuvo marcada por su genialidad en el campo, pero también por sus luchas personales y su impacto cultural, dejando un legado imborrable en la historia del deporte.'} />
        <Flecha  urlImagen={jugador[2]}  nombre={'Roger Federer'} titulo={'Roger Federer'} texto={'Considerado uno de los mejores tenistas de todos los tiempos. Federer ha ganado un total de 20 títulos de Grand Slam, mostrando un juego magistral y una mentalidad ganadora. Su estilo de juego fluido y su carisma lo han convertido en una inspiración para muchos jugadores.'} />
        </div>
    </div>
  )
}
