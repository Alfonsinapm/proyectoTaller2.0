import { useSelector } from 'react-redux'



const CanTrainnings = () => {

    const entrenamientos = useSelector(state => state.trainigs);

    return (
        <div className="cantE-contenedor">
            <p>{entrenamientos.length}</p>
            <p>Entrenamientos</p>
        </div>
    )
}

export default CanTrainnings
