import TrainingsUser from './TrainingsUser'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const TrainingsList = () => {
    const [entIngresados, setTrainings] = useState([])
    const tokenL = useSelector(state => state.tLogin);
    const userId = useSelector(state => state.userId);
    const entrenamientos = useSelector(state => state.trainigs);
    let dispatch = useDispatch();

    const getTrainingsId = () => {

        var myHeaders = new Headers();
        myHeaders.append("Authorization", String(tokenL));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`https://trainning-rest-api.herokuapp.com/v1/users/${userId}/trainings`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                let arrayT = []
                result.forEach(r => {
                    arrayT.push({ id: r.id, minutes: r.minutes, trainning_type: r.trainning_type, user_id: r.user_id, weight: r.weight, })
                    
                    // dispatch( { type: 'agregar-training',  
                    // payload: {
                    //     id: r.id, 
                    //     minutes: r.minutes, 
                    //     trainning_type: r.trainning_type, 
                    //     user_id: r.user_id, 
                    //     weight: r.weight,  } })
                })
                
                setTrainings(arrayT)
                dispatch({ type: 'agregar-training', payload: { entIngresados}})
            })
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        getTrainingsId()
    }, [entrenamientos])

    return (
        <div>
            <div className="tarjetas">
                {
                    entIngresados.length > 0 ?
                    entIngresados.map(t => (
                            <TrainingsUser
                                key={t.id}
                                id={t.id}
                                minutes={t.minutes}
                                trainning_type={t.trainning_type}
                                weight={t.weight}
                                user_id={t.user_id}

                            />)
                        )
                        :
                        <p>No tenes entrenamientos todavia {entrenamientos.length}</p>
                }
            </div>
            
        </div>
    )
}

export default TrainingsList
