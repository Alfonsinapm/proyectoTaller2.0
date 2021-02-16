import './Dashboard.css'
import {useSelector} from 'react-redux'
import CardsContainer from './CardsContainer'


const AddTraining = () => {
    
    return (
        
            <div className="agregar">
                <label className="lblAgregar" htmlFor="txtMinutos">Agregar minutos:</label>
                <input type="text" name="txtMinutos" id="txtMinutos" className="minutos"/>
                <label className="lblAgregar" htmlFor="txtPeso">Agregar peso:</label>
                <input type="number" name="txtPeso" id="txtPeso" className="peso" />
            <CardsContainer/>
            <input type="button" value="Agregar" className="btnAgregar" />
            </div>
    )
}

export default AddTraining