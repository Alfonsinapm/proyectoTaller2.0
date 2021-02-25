import './Dashboard.css'
import AddTraining from './AddTraining'
import TrainingList from './TrainingsList'
import CantTrainnings from './CanTrainnings'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ShowTbyMinutes from './ShowTbyMinutes'
import Imc from './Imc'
import Weight from './Weight'
import Mensajes from './Mensajes' 
import MinutesChart from './MinutesChart'   

const DashboardContainer = () => {
    const [entIngresados, setTrainings] = useState([])
    const tokenL = useSelector(state => state.tLogin);
    const userId = useSelector(state => state.userId);
    const entrenamientos = useSelector(state => state.trainigs);
    let dispatch = useDispatch();

    const MR = (useSelector(state => state.MinutosR));

   

    return (
        <div className = "dashContainer">
            <h1 className="dashboard-title">Dashboard</h1>
            
            <AddTraining/>
            <CantTrainnings/>
            <ShowTbyMinutes/>
            {/*<Mensajes/> */}<TrainingList />
            <MinutesChart/>
            <Imc/>
            <Weight/>
            
        </div>
        
    )
}

export default DashboardContainer
