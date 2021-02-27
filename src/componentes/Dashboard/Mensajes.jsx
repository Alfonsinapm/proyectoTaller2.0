import { useSelector } from 'react-redux'

const Mensajes = () => {
  let mensaje;
  const entrenamientos = useSelector(state => state.trainigs);
  const altura = useSelector(state => state.altura);

  for (let i = 0; i < entrenamientos.length; i++) {

    let ultimaIMC = (entrenamientos[i].weight)/(altura*altura);
    
    if (ultimaIMC < 18.5) {
      mensaje = 'Bajo peso';
    } else if (ultimaIMC < 25) {
      mensaje = 'Peso normal';
    } else {
      mensaje = 'Sobre peso';
    }
  }





  return (
    <div>
      {entrenamientos.length>0?<p>{mensaje}</p>:<p>Agrega entrenamientos para conocer tu estado de salud</p>}
      
    </div>
  )
}

export default Mensajes
