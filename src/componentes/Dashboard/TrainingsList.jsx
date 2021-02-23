import {IoCloseOutline} from "react-icons/io5";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TrainingsList = () => {
    const [entIngresados, setTrainings] = useState([])
    const tokenL = useSelector(state => state.tLogin);
    const userId = useSelector(state => state.userId);
    const entrenamientos = useSelector(state => state.trainigs);
    let dispatch = useDispatch();

    

    return (
        <div>
            <div className="tarjetas">
                {
                    entrenamientos.length > 0 ?
                        entrenamientos.map(t => (
                            <div key={t.id} className="trainingList">
                                <p className="pValores">Minutos: {t.minutes}</p>
                                <p className="pValores">Tipo entrenamiento: {t.trainning_type}</p>
                                <p className="pValores">Peso: {t.weight}</p>
                                <p className="pValores">Usuario: {t.user_id}</p>
                                <p className="pValores">calorias: {t.calorias}</p>
                                <span><IoCloseOutline/></span>
                            </div>
                        )
                        )
                        :
                        <p>No tenes entrenamientos todavia</p>
                }
            </div >


        </div>
    )
}

export default TrainingsList
