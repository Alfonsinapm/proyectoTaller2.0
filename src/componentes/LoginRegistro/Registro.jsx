import './LogReg.css'
import { useRef, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'

const Registro = () => {

    const history = useHistory();
    const [msjErrorReg, setMsjErrorReg] = useState(false)
    let dispatch = useDispatch()
    const uIngresado = useRef(null)
    const contIngresada = useRef(null)
    const altIngresada = useRef(null)

    //onSubmit

    const manejoRegistro = (e) => {
        e.preventDefault();
        let usu = uIngresado.current.value
        let contra = contIngresada.current.value
        let altura = altIngresada.current.value
        console.log(usu, contra, altura);
        let requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                "username": usu,
                "password": contra,
                "height": Number(altura)
            }),
            redirect: 'follow'
        };

        fetch('https://trainning-rest-api.herokuapp.com/v1/users/register', requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                if (result.status === 200) {
                    dispatch({ type: 'agregar-tokenR', payload: result.user.token })
                    dispatch({ type: 'agregar-userId', payload: result.user.id })
                    history.push('/login');
                }
                else {
                    setMsjErrorReg(true)
                }
            })
            .catch(error => {
                console.log('error', error)

            });


    }

    return (
        <div>
            <h1 className="registro-title">Registro</h1>

            <div className="form-container">
                <form onSubmit={manejoRegistro} className="registro-form">
                    <input type="email" className="registro-input" ref={uIngresado} placeholder="Usuario" required />
                    <input type="text" className="registro-input" ref={contIngresada} placeholder="Contraseña" required />
                    <input type="number" className="registro-input" ref={altIngresada} placeholder="Altura" />
                    <input type="submit" className="btn-registro-login" value="registrarme" required />
                </form>
                {msjErrorReg ? <p className="msjError">No se pudo hacer el registro, intente nuevamente más tarde</p> : null}
            </div>
        </div>
    )
}

export default Registro
