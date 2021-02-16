import { useSelector} from 'react-redux'
import { useState, useEffect } from 'react'
import TCard from './TCard'


const CardsContainer = () => {

    const tokenL = useSelector(state => state.tLogin);
    const [trainings, setTrainings] = useState([])
    

    const getTrainings = () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "371038aefd1bf33f6bc375ea1b8f7309");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://trainning-rest-api.herokuapp.com/v1/training-types", requestOptions)
            .then(response => response.json())
            .then(result => {
                let arrayT = []
                result.forEach(r => {
                    arrayT.push({ id: r.id, name: r.name })
                })
                setTrainings(arrayT)
            })
            .catch(error => console.log('error', error));
    }

useEffect(() => {
    getTrainings()
}, [TCard])


return (
    <div className="tarjetas">
        {trainings.map(t =>(
            <TCard
                key={t.id}
                nombre={t.name}
            />)
        )
        }
    </div>
)
}

export default CardsContainer;

