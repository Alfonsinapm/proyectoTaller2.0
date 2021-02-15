import './Dashboard.css'
import AddTraining from './AddTraining'

const DashboardContainer = () => {
    return (
        <div className = "dashContainer">
            <h1 className="dashboard-title">Dashboard</h1>
            <AddTraining/>
        </div>
        
    )
}

export default DashboardContainer
