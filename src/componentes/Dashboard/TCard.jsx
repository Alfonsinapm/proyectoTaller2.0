import './Dashboard.css'

const TCard = ({nombre,completado}) => {


const cambiar = (e)=>{
    completado=!completado
    console.log(completado)
}

    return (
        <div className="tarjeta">
            <input 
            type="checkbox" 
            id="list01" 
            className="checkbox" 
            onChange={cambiar} 
            chequed={completado.toString()} />
            <label className="checkLabel" htmlFor="list01">{nombre}</label>
        </div>
    )
}

export default TCard