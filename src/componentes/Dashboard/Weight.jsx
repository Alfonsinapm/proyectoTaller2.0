import { useSelector, useDispatch } from 'react-redux'

const Weight = () => {
    const entrenamientos = useSelector(state => state.trainigs);
    const peso1 = useSelector(state => state.Peso1);
    const peso2 = useSelector(state => state.Peso2);
    
    let dispatch = useDispatch();

    for (let i = 0; i < entrenamientos.length-1; i++) {

        let p2 = entrenamientos[i].weight;
        let p1 = entrenamientos[i+ 1].weight
        dispatch({ type: 'agregar-peso1', payload: p1 })
        dispatch({ type: 'agregar-peso2', payload: p2 })
    }

    return (
        <div>
            { 
            entrenamientos.length>=1? 
            <div>
            <p>Penúltimo peso: {peso1}</p>
            <p>Último peso: {peso2}</p>
            </div>
            :
            null
            }
        </div>
    )
}

export default Weight
