import './Dashboard.css'
import AddTraining from './AddTraining'
import TrainingList from './TrainingsList'
import CantTrainnings from './CanTrainnings'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


    

const DashboardContainer = () => {
    const [entIngresados, setTrainings] = useState([])
    const tokenL = useSelector(state => state.tLogin);
    const userId = useSelector(state => state.userId);
    const entrenamientos = useSelector(state => state.trainigs);
    let dispatch = useDispatch();




    return (
        <div className = "dashContainer">
            <h1 className="dashboard-title">Dashboard</h1>
            <AddTraining/>
            <CantTrainnings/>
            <TrainingList />
        </div>
        
    )
}

export default DashboardContainer
