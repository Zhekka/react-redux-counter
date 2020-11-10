const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

let initialState = {
    counter: 0
}


const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT: {
            return {
                ...state, counter: state.counter=state.counter+1
            }
        }
        case DECREMENT: {
            return {
                ...state, counter: state.counter=state.counter-1
            }
        }
        default: {
            return state
        }
    }

}

export const incrementAC = () => ({type:INCREMENT})
export const decrementAC = () => ({type:DECREMENT})


export default mainReducer;