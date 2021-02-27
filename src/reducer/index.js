const initialState = {
    trainigs: [],
    tRegistro: "",
    tLogin: "",
    userId: 0,
    idEntrenamiento: 0,
    cambio: 0,
    MinutosR: 0,
    MinutosV: 0,
    MinutosP: 0,
    Peso1: 0,
    Peso2: 0,
    altura: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'agregar-training':
            return {
                ...state,
                trainigs: action.payload
            }
        case 'agregar-tokenR':
            return {
                ...state,
                tRegistro: action.payload
            }
        case 'agregar-tokenL':
            return {
                ...state,
                tLogin: action.payload
            }
        case 'agregar-userId':
            return {
                ...state,
                userId: action.payload
            }
        case 'agregar-entrenamientoId':
            return {
                ...state,
                idEntrenamiento: action.payload
            }
        case 'agregar-cambio':
            return {
                ...state,
                cambio: state.cambio + action.payload
            }
        case 'agregar-MinutosR':
            return {
                ...state,
                MinutosR: state.MinutosR + action.payload
            }
        case 'agregar-MinutosV':
            return {
                ...state,
                MinutosV: state.MinutosV + action.payload
            }
        case 'agregar-MinutosP':
            return {
                ...state,
                MinutosP: state.MinutosP + action.payload
            }
        case 'agregar-peso1':
            return {
                ...state,
                Peso1: action.payload
            }
        case 'agregar-peso2':
            return {
                ...state,
                Peso2: action.payload
            }
        case 'agregar-altura':
            return {
                ...state,
                altura: action.payload
            }
        default: return state;
    }
}

export default reducer;



