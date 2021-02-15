import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Error from './componentes/General/Error/Error'
import Registro from './componentes/LoginRegistro/Registro'
import Login from './componentes/LoginRegistro/Login'
import DashboardContainer from './componentes/Dashboard/DashboardContainer'
import Home from './componentes/General/Home/Home'
import Header from './componentes/General/Header/Header'
import Footer from "./componentes/General/Footer/Footer";
import reducer from './reducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const store = createStore(reducer)


function App() {
  
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/registro">
          <Registro />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/dashboard">
          <DashboardContainer />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
