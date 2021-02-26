import './Dashboard.css'
import AddTraining from './AddTraining'
import TrainingList from './TrainingsList'
import CantTrainnings from './CanTrainnings'
import ShowTbyMinutes from './ShowTbyMinutes'
import Imc from './Imc'
import Weight from './Weight'
import Mensajes from './Mensajes' 
import MinutesChart from './MinutesChart'   

const DashboardContainer = () => {
    
    return (
        <div className = "dashContainer">
            <h1 className="dashboard-title">Dashboard</h1>
            <AddTraining/>
            <CantTrainnings/>
            <ShowTbyMinutes/>
            {/*<Mensajes/> <Weight/>   */}
            <TrainingList />
            <MinutesChart/>
            <Imc/>
        </div>
    )
}

export default DashboardContainer
