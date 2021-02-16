import './Dashboard.css'
import {useSelector} from 'react-redux'
import CardsContainer from './CardsContainer'
import { useState, useEffect, useRef } from 'react'

const AddTraining = () => {
    
    const tokenL = useSelector(state => state.tLogin);
    //const [trainings, setTrainings] = useState([])
    const minutoIng = useRef(null)
    const pesoIng = useRef(null)
    const tipoT = useRef(null)

    const postNewT = (minuto,peso,tipo) => {
        let bool;
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "c16bddb82725371dd8f8c4a305eb13ed");
        
        var raw = JSON.stringify({
                "minutes": 15,
                "trainning_type": 1,
                "user_id": 31,
                "weight": 10
        });
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,

            redirect: 'follow'
        };
        fetch("https://trainning-rest-api.herokuapp.com/v1/users/login", requestOptions)
            .then(response => response.json())
            .then((result) => {
                console.log(result)
                bool = true;
            }
            )
            .catch((error) => {
                console.log('error', error)
                bool = false;
            });
            console.log(bool)
        return bool;
    }

    const handleAddT = ()=>{
        let minuto = minutoIng.current.value
        let peso = pesoIng.current.value
        let tipoT = tipoT.current.value
        postNewT(minuto, peso,tipoT )
    }


    return (
        
            <form className="agregar" onSubmit={handleAddT} >
                <label className="lblAgregar" htmlFor="txtMinutos">Agregar minutos:</label>
                <input type="number" name="txtMinutos" id="txtMinutos" ref={minutoIng} className="minutos"/>
                <label className="lblAgregar" htmlFor="txtPeso">Agregar peso:</label>
                <input type="number" name="txtPeso" id="txtPeso" ref={pesoIng} className="peso" />
            <CardsContainer/>
            <input type="button" value="Agregar" className="btnAgregar" />
            </form>
    )
}

export default AddTraining