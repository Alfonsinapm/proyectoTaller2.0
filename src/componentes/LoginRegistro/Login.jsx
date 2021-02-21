import './LogReg.css'
import { useRef, useState } from 'react'
import React from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

const Login = () => {

    const tokenR = "4f58a93277106f859b6011e5ef327640"//useSelector(state => state.tRegistro);
    const history = useHistory();
    const [msjErrorLog, setMsjErrorLog] = useState(false)
    let dispatch = useDispatch()

    const uLogin = useRef(null)
    const contLogin = useRef(null)

    const handleLogin = (e) => {
        e.preventDefault();
        let usu = uLogin.current.value;
        let contra = contLogin.current.value;
        
        var myHeaders = new Headers();
        myHeaders.append("Authorization",tokenR);
        // "username": "test@test",
        // "password": "aaa"
        console.log(tokenR)
        var raw = {
            "username": usu,
            "password": contra
        };
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(raw),
            redirect: 'follow'
        };
        fetch("https://trainning-rest-api.herokuapp.com/v1/users/login", requestOptions)
            .then(response => response.json() )
            .then((result) => {
                console.log(result)
                dispatch = ({ type: 'agregar-tokenL', payload: result.token })
                history.push('/dashboard');
            }
            )
            .catch((error) => {
                console.log('error', error)
                setMsjErrorLog(true)
            });
        
    }


    return (
        <div>
            <h1 className="login-title">Login</h1>
            <div className="form-container">
                <form onSubmit={handleLogin} className="registro-form">
                    <input type="text" className="registro-input" ref={uLogin} placeholder="Usuario" required />
                    <input type="text" className="registro-input" ref={contLogin} placeholder="Contraseña" required />
                    <input type="submit" className="btn-registro-login" value="login" />
                </form>
                {msjErrorLog ? <p className="msjError">Hubo un problema al iniciar sesion, intente mas tarde</p> : null}
            </div>
        </div>
    )
}

export default Login