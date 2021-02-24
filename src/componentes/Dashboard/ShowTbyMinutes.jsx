import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ShowTbyMinutes = () => {

const minR = useSelector(state => state.MinutosR);
const minV = useSelector(state => state.MinutosV);
const minP = useSelector(state => state.MinutosP);

return (
    <div>
        <p>Minutos en resistencia: {minR}</p>
        <p>Minutos en resistencia: {minV}</p>
        <p>Minutos en resistencia: {minP}</p>
    </div>
)

}
export default ShowTbyMinutes
