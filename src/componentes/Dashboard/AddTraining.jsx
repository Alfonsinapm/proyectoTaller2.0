import './Dashboard.css'
import { useSelector, useDispatch } from 'react-redux'
import CardsContainer from './CardsContainer'
import { useRef } from 'react'

const AddTraining = () => {

    const tokenL = useSelector(state => state.tLogin);
    const userId = useSelector(state => state.userId);
    const entrenamientoId = useSelector(state => state.idEntrenamiento);
    const entrenamientos = useSelector(state => state.trainigs);
    const MR = Number(useSelector(state => state.MinutosR));
    let dispatch = useDispatch();

    const minutoIng = useRef(null);
    const pesoIng = useRef(null);

    const handleAddT = (e) => {
        e.preventDefault();
        let minuto = minutoIng.current.value;
        let peso = pesoIng.current.value;

        var myHeaders = new Headers();
        myHeaders.append("Authorization", String(tokenL));

        var raw = {
            "minutes": Number(minuto),
            "trainning_type": Number(entrenamientoId),
            "user_id": Number(userId),
            "weight": Number(peso)
        };
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(raw),
            redirect: 'follow'
        };

        fetch("https:trainning-rest-api.herokuapp.com/v1/trainings", requestOptions)
            .then(response => response.json())
            .then((result) => {
                console.log(result)

                if (entrenamientoId === 11) {
                    dispatch({ type: 'agregar-MinutosR', payload: Number(minuto) })
                }
                else if (entrenamientoId === 21) {
                    dispatch({ type: 'agregar-MinutosV', payload: Number(minuto) })
                }
                else {
                    dispatch({ type: 'agregar-MinutosP', payload: Number(minuto) })
                }

            })
            .catch((error) => {
                console.log('error', error);
            });
        dispatch({ type: 'agregar-cambio', payload: 1 })
    }

    return (
        <form className="agregar" onSubmit={handleAddT} >
            <label className="lblAgregar" htmlFor="txtMinutos">Agregar minutos:</label>
            <input type="number" name="txtMinutos" id="txtMinutos" ref={minutoIng} className="minutos" required />
            <label className="lblAgregar" htmlFor="txtPeso">Agregar peso:</label>
            <input type="number" name="txtPeso" id="txtPeso" ref={pesoIng} className="peso" required />
            <CardsContainer />
            <input type="submit" value="Agregar" className="btnAgregar" />
        </form>
    )
}

export default AddTraining