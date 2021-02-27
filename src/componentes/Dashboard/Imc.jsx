import { useSelector } from 'react-redux'
import { Line } from 'react-chartjs-2'


const Imc = () => {

  //const imc = useSelector(state => state.imc);
  const entrenamientos = useSelector(state => state.trainigs);
  const altura = useSelector(state => state.altura);

  const cacImc = ()=>{
    
    
    entrenamientos.forEach(t=>t.weight/(altura*altura))
  }

  const data = {
    labels: [entrenamientos.map(t=>t.weight/(altura*altura))],
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
        data: entrenamientos.map(t=>t.weight/(altura*altura))
      }
    ]
  };

  return (
    <div className="imc-contenedor">
      <p>GRAFICA IMC</p>

      {entrenamientos.length > 0 ? 
      <Line data={data} /> : 
      <p >Agrega entrenamiento para ver gráfica IMC</p>}


    </div>
  )
}


export default Imc

// {entrenamientos.length !== 0 ? (
//     imc.map((e) => <p >{e}</p>)
// ) : (
//         <p>Cargando...</p>
//     )}