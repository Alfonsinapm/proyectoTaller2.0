import { useSelector } from 'react-redux'

const Mensajes = () => {
  let mensaje;
  const entrenamientos = useSelector(state => state.trainigs);
  const imc = useSelector(state => state.imc);

  for (let i = 0; i < imc.length; i++) {
    let ultimaIMC = imc[i];
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
