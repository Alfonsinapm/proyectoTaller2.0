import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ShowTbyMinutes = () => {

const minR = useSelector(state => state.MinutosR);
const minV = useSelector(state => state.MinutosV);
const minP = useSelector(state => state.MinutosP);

return (
    <div className="minutos-contenedor">
        <p>Minutos en resistencia</p>
        <p>{minR}</p>
        <p>Minutos en velocidad</p>
        <p>{minV}</p>
        <p>Minutos en potencia</p>
        <p>{minP}</p>
    </div>
)

}
export default ShowTbyMinutes
