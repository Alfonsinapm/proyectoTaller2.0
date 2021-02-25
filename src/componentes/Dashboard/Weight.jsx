import { useSelector, useDispatch } from 'react-redux'

const Weight = () => {
    const entrenamientos = useSelector(state => state.trainigs);
    const peso1 = useSelector(state => state.Peso1);
    const peso2 = useSelector(state => state.Peso2);
    
    let dispatch = useDispatch();


    for (let i = 0; i < entrenamientos.length; i++) {
        console.log(entrenamientos.length)
        let p1 = i[entrenamientos.length - 1];
        dispatch({ type: 'agregar-peso1', payload: p1 })
        let p2 = i[entrenamientos.length]
        dispatch({ type: 'agregar-peso2', payload: p2 })
    }


    return (
        <div>
            <p>Peso 1: {peso1}</p>
            <p>Peso 2: {peso2}</p>
        </div>
    )
}

export default Weight
