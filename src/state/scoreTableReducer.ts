
const ADD_PLAYER = 'ADD_PLAYER';


export const addPlayerAction = (name: string, surname: string, score: number) => {
    return {
        type: ADD_PLAYER,
        payload: {
            name,
            surname,
            score,
        }
    }
}


const initialState = {
    players: [
        { name: '', surname: '', score: 0 },
        ]
}



export const scoreTableReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_PLAYER: {
            return {
                ...state,
                players: [...state.players, {
                    name: action.payload.name,
                    surname: action.payload.surname,
                    score: action.payload.score,
                }]
            }
        }
        default:
            return state;
    }

}