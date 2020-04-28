const initialState = {
    name:'Nome Inicial',
    contador:0,
    sobrenome:'Sobrenome Inicial',
    mais10:10
};

const UsuarioReducer = (state = initialState, action) => {
    switch(action.type){
        case'SET_NAME':
        return {...state, name:action.payload.name}
        break;
        case'INCREMENT_CONTADOR':
        let newContador = state.contador + 1
        return {...state, contador:newContador}
        break;
        case'INCREMENT_MAISDEZ':
        let newContagem = state.mais10 + 10
        return {...state, mais10:newContagem}
        case'SET_SOBRENOME':
        return {...state, sobrenome:action.payload.sobrenome}
        break;

    }
    return state
}

export default UsuarioReducer;