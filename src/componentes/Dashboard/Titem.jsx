import { IoCloseOutline } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';




const Titem = ({ minutos, tipoT, peso, usu, cal, id }) => {

    let dispatch = useDispatch();
    const entrenamientos = useSelector(state => state.trainigs);
    const userId = useSelector(state => state.userId);
    const tokenL = useSelector(state => state.tLogin);

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
                
                
                const arrayNuevo = entrenamientos.filter(item => item.id !== id)
                
                arrayNuevo.forEach(r => {

                    dispatch({
                        type: 'agregar-training', payload: {
                            id: r.id,
                            minutes: r.minutes,
                            trainning_type: r.trainning_type,
                            user_id: r.user_id,
                            weight: r.weight
                            //calorias:caloriasQuemadas()
                        }
                    })
                    dispatch({ type: 'agregar-cambio', payload: 1 })
                })
                
                
            })
            .catch(error => console.log('error', error));

    }


    return (
        <div>
            <p className="pValores">{id}</p>
            <p className="pValores">{minutos}</p>
            <p className="pValores">{tipoT}</p>
            <p className="pValores">{peso}</p>
            <p className="pValores">{usu}</p>
            <button className="borrarCart col-12 col-md-2" onClick={() => removeItem(id)}><IoCloseOutline className="btnBorrarCart" /></button>
        </div>
    )
}

export default Titem
