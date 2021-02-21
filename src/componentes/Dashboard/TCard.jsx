import './Dashboard.css'

const TCard = ({nombre,completado,id}) => {


const cambiar = (e)=>{
    completado=!completado
    console.log(completado,id)

}

    return (
        <div className="tarjeta">
            <input 
            type="checkbox" 
            id={id} 
            className="checkbox" 
            onChange={cambiar} 
            chequed={completado.toString()} 
           />
            <label className="checkLabel" htmlFor="list01">{nombre}</label>

        </div>
    )
}

export default TCard