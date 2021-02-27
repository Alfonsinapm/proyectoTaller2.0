import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux'


const MinutesChart = () => {

    const MinutosR = useSelector(state => state.MinutosR);
    const MinutosV = useSelector(state => state.MinutosV);
    const MinutosP = useSelector(state => state.MinutosP);
    const entrenamientos = useSelector(state => state.trainigs);

    const data = {
        labels: [
            'Resistencia',
            'Velocidad',
            'Potencia'
        ],
        datasets: [{
            data: [MinutosR, MinutosV, MinutosP],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ]
        }]
    };

    return (
        <div className="grafica-minutos">
            
            {entrenamientos.length>0?<Doughnut data={data} />:<p>Agrega entrenamientos para ver grafica</p>}
        </div>
    )
}

export default MinutesChart
