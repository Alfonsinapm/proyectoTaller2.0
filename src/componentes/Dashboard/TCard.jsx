

const Tarjeta = (nombre) => {
    return (
        <div className="tarjeta">
            <input type="checkbox" id="list01" className="checkbox" />
            <label className="checkLabel" htmlFor="list01">{nombre}</label>
        </div>
    )
}

export default Tarjeta