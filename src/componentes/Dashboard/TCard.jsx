import './Dashboard.css'
import { useDispatch,  } from 'react-redux'
import {useEffect} from 'react'

const TCard = ({ nombre, id,completado} ) => {

    let dispatch = useDispatch()

    const setTid = ()=>{
        dispatch({ type: 'agregar-entrenamientoId', payload: id })
    }

    return (
        <div className="tarjeta">
            <input
                type="checkbox"
                id={id}
                className="checkbox"
                onClick={setTid}
                chequed={completado.toString()}
            />
            <label className="checkLabel" htmlFor={id}>{nombre}</label>

        </div>
    )
}

export default TCard