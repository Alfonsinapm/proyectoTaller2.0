import { useSelector } from 'react-redux'

const Mensajes = () => {
  let mensaje;
  const entrenamientos = useSelector(state => state.trainigs);
  const imc = useSelector(state => state.imc);

  for (let i = imc.length; i = imc.length; i++) {
    let ultimaIMC = i;
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
      <p>{mensaje}</p>
    </div>
  )
}

export default Mensajes
