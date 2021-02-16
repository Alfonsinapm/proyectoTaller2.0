const initialState = {
    trainigs: [],
    cantidad: 0,
    tRegistro: "",
    tLogin: "",
    userId: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'agregar-training':
            return {
                ...state,
                trainings: [...state.trainigs, action.payload]
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
        default: return state;
    }
}

export default reducer;