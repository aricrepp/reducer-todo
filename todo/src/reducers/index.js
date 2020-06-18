
export const initialState = [
    { 
        item: 'Learn about reducers',
        completed: false,
        id: Date.now()
    }
]

export const ifCompleted = (state, action) => {
    switch (action.type) {
        case "SUBMIT":
            return {...state, item: action.payload, complete: false, id: Date.now()}
        case "IS_COMPLETED":
            return {...state, completed: !state.completed }
        default:
            return state;
    }
}
