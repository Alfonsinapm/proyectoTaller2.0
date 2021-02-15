import './Dashboard.css'
import {useSelector} from 'react-redux'
import CardsContainer from './CardsContainer'


const AddTraining = () => {
    
    return (
        
            <div className="agregar">
                <label className="lblAgregar" htmlFor="txtAgregar">Agregar:</label>
                <input type="text" name="txtAgregar" id="txtAgregar" className="minutos" placeholder="Minutos" />
                <input type="button" value="Agregar" className="btnAgregar" />
            
            <CardsContainer/>
            </div>
    )
}

export default AddTraining