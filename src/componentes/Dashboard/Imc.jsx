import { useSelector } from 'react-redux'

const Imc = () => {
    const imc = useSelector(state => state.imc);
    
    return (
        <div>
            <p>GRAFICA IMC</p>
            <p>- {imc} - </p>
        </div>
    )
}


export default Imc
