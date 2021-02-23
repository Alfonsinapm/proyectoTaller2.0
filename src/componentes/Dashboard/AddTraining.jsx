import './Dashboard.css'
import { useSelector, useDispatch } from 'react-redux'
import CardsContainer from './CardsContainer'
import { useRef } from 'react'

const AddTraining = () => {

    const tokenL = useSelector(state => state.tLogin);
    const userId = useSelector(state => state.userId);
    const entrenamientoId = useSelector(state => state.idEntrenamiento);
    let dispatch = useDispatch();

    const minutoIng = useRef(null);
    const pesoIng = useRef(null);

    const handleAddT = (e) => {
        e.preventDefault();
        let minuto = minutoIng.current.value;
        let peso = pesoIng.current.value;

        const caloriasQuemadas = (entrenamientoId) => {
            let calQuemadas;
            if (entrenamientoId === 11) {
                 calQuemadas = minuto * 5
            } else if (entrenamientoId === 21) {
                 calQuemadas = minuto * 15
            } else {
                 calQuemadas = minuto * 20
            }
            return calQuemadas;
        }

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
                dispatch({ type: 'agregar-training', payload: { 
                    minutes: minuto, 
                    trainning_type: entrenamientoId, 
                    user_id: userId, 
                    weight: peso, 
                    calorias:caloriasQuemadas(entrenamientoId)} })
            }
            )
            .catch((error) => {
                console.log('error', error);
            });
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