import { useSelector } from 'react-redux'
import { Line } from 'react-chartjs-2'


const Imc = () => {

    const imc = useSelector(state => state.imc);
    const entrenamientos = useSelector(state => state.trainigs);
console.log(imc);
    const data = {
        labels: [imc.map(i => i.imc)],
        datasets: [
          {
            label: 'IMC',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: imc.forEach(i => i.imc)
          }
        ]
      };

    return (
        <div>
            <p>GRAFICA IMC</p>
            
            {entrenamientos.length>0? <Line data={data} />: <p >Agrega entrenamiento para ver gráfica IMC</p>}
            

        </div>
    )
}


export default Imc

// {entrenamientos.length !== 0 ? (
//     imc.map((e) => <p >{e}</p>)
// ) : (
//         <p>Cargando...</p>
//     )}