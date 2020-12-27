
const ADD_PLAYER = 'ADD_PLAYER';


export const addPlayerAction = () => {
    return {
        type: ADD_PLAYER,
        payload: {
            name: 's0',
        }
    }
}


const initialState = {
    players: [
        { name: 'Sylwek', surname: 'Iwanowski', score: 10 },
        {name: 'Sylwek2', surname: 'Iwanowski2', score: 20},
    ]
}



export const scoreTableReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_PLAYER: {
            return {
                ...state,
                players: [...state.players, {
                    name: action.payload.name,
                    surname: action.payload.name,
                    score: action.payload.name,
                }]
            }
        }
        default:
            return state;
    }

}