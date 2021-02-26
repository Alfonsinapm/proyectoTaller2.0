import { IoCloseOutline } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';

const Titem = ({ minutos, tipoT, peso, usu, cal, id }) => {

    let dispatch = useDispatch();
    const entrenamientos = useSelector(state => state.trainigs);
    const userId = useSelector(state => state.userId);
    const tokenL = useSelector(state => state.tLogin);
    const imc = useSelector(state => state.imc);

    const removeItem = (id) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", String(tokenL));

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`https://trainning-rest-api.herokuapp.com/v1/users/${userId}/trainings/${id}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result)
                //RESTAR MINUTOS BORRADOS
                entrenamientos.forEach(e => {
                    if (e.id === id) {
                        if (e.trainning_type === 11) {
                            dispatch({ type: 'agregar-MinutosR', payload: Number(-minutos) })
                        }
                        else if (e.trainning_type === 21) {
                            dispatch({ type: 'agregar-MinutosV', payload: Number(-minutos) })
                        }
                        else {
                            dispatch({ type: 'agregar-MinutosP', payload: Number(-minutos) })
                        }
                    }
                    //DISPARAR CAMBIO QUE VUELVA A RENDERIZAR ENTRENAMIENTOS
                    dispatch({ type: 'agregar-cambio', payload: 1 }) 
                })

                //ACTUALIZAR IMC
                
                let arrayImcNuevo = imc.filter(i => i.idT !== id)
                dispatch({type: 'agregar-imc', payload: arrayImcNuevo})
                

                //ACTUALIZAR ENTRENAMIENTOS
                
                const arrayNuevo = entrenamientos.filter(item => item.id !== id)
                arrayNuevo.forEach(r => {
                   
                    dispatch({
                        type: 'agregar-training', payload: {
                            id: r.id,
                            minutes: r.minutes,
                            trainning_type: r.trainning_type,
                            user_id: r.user_id,
                            weight: r.weight,
                        }
                    })
                })
            })
            .catch(error => console.log('error', error));
        
    }

    return (
        <div>
            <p className="pValores">ID: {id}</p>
            <p className="pValores">MINUTOS: {minutos}</p>
            <p className="pValores">TIPO ENTRENAMIENTO: {tipoT}</p>
            <p className="pValores">PESO: {peso}</p>
            <p className="pValores">USUARIO: {usu}</p>
            <p className="pValores">CALORIAS QUEMADAS: {cal}</p>
            <button className="borrarCart" onClick={() => removeItem(id)}><IoCloseOutline className="btnBorrarCart" /></button>
               
        </div>
    )
}

export default Titem
