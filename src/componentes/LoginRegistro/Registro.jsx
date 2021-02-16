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
        if (performRegistro(usu,contra,altura)!==undefined) {
            console.log(performRegistro(usu,contra,altura))
            history.push('/login');
        } else {
            setMsjErrorReg(true)
        }
    }

    const performRegistro = (usuIng,contraIng,alturaIng) => {
        let bool;
        let raw = JSON.stringify({
            "username": "test@test",
            "password": "aaa",
            "height": 68
        });

        let requestOptions = {
            method: 'POST',
            body: raw,
            redirect: 'follow'
        };

        fetch('https://trainning-rest-api.herokuapp.com/v1/users/register', requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                dispatch = ({ type: 'agregar-tokenR', payload: result.user.token })
                dispatch = ({ type: 'agregar-userId', payload: result.user.id })
                console.log(dispatch)
                bool= true;
            })
            .catch(error => {
                console.log('error', error)
                bool= false;
            });

            return bool;
        
    }
  
    return (
        <div>
            <h1 className="registro-title">Registro</h1>

            <div className="form-container">
                <form onSubmit={manejoRegistro} className="registro-form">
                    <input type="text" className="registro-input" ref={uIngresado} placeholder="Usuario" required />
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
