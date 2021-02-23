

const TrainingsUser = ({ id, minutes, trainning_type, weight, user_id }) => {
    return (
        <div className="trainingList">

            <table>
                <tbody>
                    <tr>
                        <td>{id}</td>
                        <td>{minutes}</td>
                        <td>{trainning_type}</td>
                        <td>{weight}</td>
                        <td>{user_id}</td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}

export default TrainingsUser
