import './Dashboard.css'
import AddTraining from './AddTraining'
import TrainingList from './TrainingsList'
import CantTrainnings from './CanTrainnings'

const DashboardContainer = () => {
    return (
        <div className = "dashContainer">
            <h1 className="dashboard-title">Dashboard</h1>
            <AddTraining/>
            <CantTrainnings/>
            <TrainingList/>
        </div>
        
    )
}

export default DashboardContainer
