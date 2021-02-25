import './LogReg.css'
import { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'

const Registro = () => {

    const history = useHistory();
    const [msjErrorReg, setMsjErrorReg] = useState(false)
    const [ErrorAltura, setErrorAltura] = useState(false)

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
        if (altura <= 300) {

            let alturaEnMetros = altura / 100;
            console.log(alturaEnMetros)
            console.log(usu, contra);
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
                        dispatch({ type: 'agregar-altura', payload: alturaEnMetros })
                        
                        history.push('/login');
                    }
                    else {
                        setMsjErrorReg(true)
                    }
                })
                .catch(error => {
                    console.log('error', error)

                });
        } else {
            setErrorAltura(true)
        }

    }

    return (
        <div>
            <h1 className="registro-title">Registro</h1>

            <div className="form-container">
                <form onSubmit={manejoRegistro} className="registro-form">
                    <input type="email" className="registro-input" ref={uIngresado} placeholder="Usuario" required />
                    <input type="text" className="registro-input" ref={contIngresada} placeholder="Contraseña" required />
                    <input type="number" className="registro-input" ref={altIngresada} placeholder="Altura en cm   ej: 180" />
                    <input type="submit" className="btn-registro-login" value="registrarme" required />
                </form>
                {msjErrorReg ? <p className="msjError">No se pudo hacer el registro, intente nuevamente más tarde</p> : null}
                {ErrorAltura ? <p>Debes ingresar la altura en centímetros, ejemplo 165 </p> : null}
            </div>
        </div>
    )
}

export default Registro


