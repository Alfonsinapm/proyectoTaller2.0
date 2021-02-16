import './LogReg.css'
import { useRef, useState } from 'react'
import React from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

const Login = () => {

    const tokenR = useSelector(state => state.tRegistro);
    const history = useHistory();
    const [msjErrorLog, setMsjErrorLog] = useState(false)
    let dispatch = useDispatch()

    const uLogin = useRef(null)
    const contLogin = useRef(null)

    const performLogin = (usuI, contraI) => {
        let bool;
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "4f58a93277106f859b6011e5ef327640");
        
        var raw = JSON.stringify({
            "username": "test@test",
            "password": "aaa"
        });
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("https://trainning-rest-api.herokuapp.com/v1/users/login", requestOptions)
            .then(response => response.json())
            .then((result) => {
                console.log(result)
                dispatch = ({ type: 'agregar-tokenL', payload: result.token })
                console.log(dispatch)
                bool = true;
            }
            )
            .catch((error) => {
                console.log('error', error)
                bool = false;
            });
            console.log(bool)
        return bool;
    }

    const handleLogin = (e) => {
        e.preventDefault();
        let usu = uLogin.current.value;
        let contra = contLogin.current.value;
        if (performLogin(usu, contra)) {
            console.log(performLogin(usu, contra)!==undefined)
            history.push('/dashboard');
        } else {
            setMsjErrorLog(true)
        }
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