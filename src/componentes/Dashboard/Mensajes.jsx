import { useSelector } from 'react-redux'

const Mensajes = () => {

    const imc = useSelector(state => state.imc);
    
    let mensaje;
    if (imc < 18.5) {
        mensaje='Bajo peso';
      } else if (imc < 25) {
        mensaje='Peso normal';
      } else {
        mensaje='Sobre peso';
      }

    return (
        <div>
            <p>{mensaje}</p>
        </div>
    )
}

export default Mensajes
