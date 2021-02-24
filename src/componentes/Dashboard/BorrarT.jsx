import { IoCloseOutline } from "react-icons/io5";

const BorrarT = () => {

    const [entIngresados, setTrainings] = useState([])
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
                    arrayT.push({ id: r.id, minutes: r.minutes, trainning_type: r.trainning_type, user_id: r.user_id, weight: r.weight })
                })
                setTrainings(arrayT)

                // dispatch({ type: 'agregar-training', payload:  entIngresados}) 
            })
            .catch(error => console.log('error', error));

    }

    useEffect(() => {
        getTrainingsId()
    }, [])




    return (
        <div>
            <p className="pValores">Minutos: {t.minutes}</p>
            <p className="pValores">Tipo entrenamiento: {t.trainning_type}</p>
            <p className="pValores">Peso: {t.weight}</p>
            <p className="pValores">Usuario: {t.user_id}</p>
            <p className="pValores">calorias: {t.calorias}</p>
            <span><IoCloseOutline /></span>
        </div>
    )
}

export default BorrarT
