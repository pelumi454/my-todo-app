export const UpdateReducer = (oldState, newState) => {
    return{
        ...oldState , ...newState
    }
}