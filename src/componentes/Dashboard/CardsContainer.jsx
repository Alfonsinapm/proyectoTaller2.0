import {useSelector} from 'react-redux'
import { useState } from 'react'
import Tarjeta from './TCard'


const TarjetasContenedor = () => {

    const tokenL = useSelector(state=>state.tLogin);
    const [trainings, setTrainings] = useState([]) 

    // version fetch
        // var myHeaders = new Headers();
        // myHeaders.append("Authorization", tokenL);

        // var requestOptions = {
        //     method: 'GET',
        //     headers: myHeaders,
        //     redirect: 'follow'
        // };

        // fetch("https://trainning-rest-api.herokuapp.com/v1/training-types", requestOptions)
        //     .then(response => response.text())
        //     .then(result => {
        //         console.log(result)
        //         setTrainings([result])
        //     })
        //     .catch(error => console.log('error', error));

    
    

    return (
        <div className="tarjetas">
            {trainings.map(trainings => <Tarjeta key={trainings.id} nombre={trainings.nombre}/>)}
        </div>
    )
}

export default TarjetasContenedor;