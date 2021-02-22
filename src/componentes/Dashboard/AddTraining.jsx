import './Dashboard.css'
import {useSelector} from 'react-redux'
import CardsContainer from './CardsContainer'
import { useState, useEffect, useRef } from 'react'

const AddTraining = () => {
    
    const tokenL = useSelector(state => state.tLogin);
    const userId = useSelector(state => state.userId);
    //const [trainings, setTrainings] = useState([])
    const minutoIng = useRef(null)
    const pesoIng = useRef(null)
    //const tipoT = useRef(null)

    const handleAddT = (e) => {
        e.preventDefault();
        let minuto = minutoIng.current.value
        let peso = pesoIng.current.value
        //let tipoT = tipoT.current.value
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "8c78d94def4a029c7620b4aed6462b93");
        
        var raw = {
                "minutes": Number(minuto),
                "trainning_type": Number(31),
                "user_id": Number(2181),
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
                
            }
            )
            .catch((error) => {
                console.log('error', error)
                
            });
            
        
    }



    return (
        
            <form className="agregar" onSubmit={handleAddT} >
                <label className="lblAgregar" htmlFor="txtMinutos">Agregar minutos:</label>
                <input type="number" name="txtMinutos" id="txtMinutos" ref={minutoIng} className="minutos"/>
                <label className="lblAgregar" htmlFor="txtPeso">Agregar peso:</label>
                <input type="number" name="txtPeso" id="txtPeso" ref={pesoIng} className="peso" />
            <CardsContainer/>
            <input type="submit" value="Agregar" className="btnAgregar" />
            </form>
    )
}

export default AddTraining