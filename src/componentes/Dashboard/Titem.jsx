import { IoCloseOutline } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { FaUser } from "react-icons/fa";
import { BiTime } from "react-icons/bi";
import { BsTextareaT } from "react-icons/bs";
import { FaBalanceScaleRight } from "react-icons/fa";
import { BiRun } from "react-icons/bi";
import { GiBiceps } from "react-icons/gi";



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
                    //dispatch({ type: 'agregar-cambio', payload: 1 }) 
                })

                //ACTUALIZAR ENTRENAMIENTOS

                const arrayNuevo = entrenamientos.filter(item => item.id !== id)
                dispatch({ type: 'agregar-training', payload: arrayNuevo })
            })
            .catch(error => console.log('error', error));
    }

    return (
        <div>
            <p className="pValores"><BiRun /> {id}</p>
            <p className="pValores"><BiTime /> {minutos}</p>
            <p className="pValores"><BsTextareaT /> {tipoT}</p>
            <p className="pValores"><FaBalanceScaleRight /> {peso}</p>
            <p className="pValores"><FaUser /> {usu}</p>
            <p className="pValores"><GiBiceps/> Calorias {cal}</p>
            <button className="borrarCart" onClick={() => removeItem(id)}><IoCloseOutline className="btnBorrarCart" /></button>

            {/* <table>
                <tbody>
                    <tr><td>ID</td>
                        <td>MINUTOS</td>
                        <td>TIPO ENTRENAMIENTO</td>
                        <td>PESO</td>
                        <td>USUARIO</td>
                        <td>CALORIAS QUEMADAS</td>
                        <td></td>
                    </tr>

                    <tr><td>{id}</td>
                        <td>{minutos}</td>
                        <td>{tipoT}</td>
                        <td>{peso}</td>
                        <td>{usu}</td>
                        <td>{cal}</td>
                        <td><button className="borrarCart" onClick={() => removeItem(id)}><IoCloseOutline className="btnBorrarCart" /></button></td></tr>
                </tbody>
            </table> */}
        </div>
    )
}

export default Titem
