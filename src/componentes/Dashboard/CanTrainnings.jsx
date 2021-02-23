import { useSelector } from 'react-redux'



const CanTrainnings = () => {

    const entrenamientos = useSelector(state => state.trainigs);

    return (
        <div>
            <p>Cantidad de entrenamientos :</p>
            <p>{entrenamientos.length}</p>
        </div>
    )
}

export default CanTrainnings
