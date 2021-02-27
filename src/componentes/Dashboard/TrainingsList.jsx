import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Titem from './Titem'

const TrainingsList = () => {
    //const [entIngresados, setTrainings] = useState([])
    const tokenL = useSelector(state => state.tLogin);
    const userId = useSelector(state => state.userId);
    const entrenamientos = useSelector(state => state.trainigs);
    const cambio = useSelector(state => state.cambio);
    let dispatch = useDispatch();


    const caloriasQuemadas = (minutos, entrenamientoId) => {
        let calQuemadas;
        if (entrenamientoId === 11) {
            calQuemadas = minutos * 5
        } else if (entrenamientoId === 21) {
            calQuemadas = minutos * 15
        } else {
            calQuemadas = minutos * 20
        }
        return calQuemadas;
    }

    return (
        <div>
            <div className="entren">
                {
                    entrenamientos.length > 0 ?
                        entrenamientos.map(t => (
                            <Titem
                                key={t.id}
                                minutos={t.minutes}
                                tipoT={t.trainning_type}
                                peso={t.weight}
                                usu={t.user_id}
                                cal={caloriasQuemadas(t.minutes, t.trainning_type)}
                                id={t.id}
                            />
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
