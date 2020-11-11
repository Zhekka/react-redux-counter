const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const ZERO_VALUE = 'ZERO_VALUE'

let initialState = {
    counter: 0
}


const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT: {
            return {
                ...state, counter: state.counter = state.counter + 1
            }
        }
        case DECREMENT: {
            return {
                ...state, counter: state.counter = state.counter - 1
            }
        }
        case ZERO_VALUE: {
            return {
                ...state, counter: state.counter = state.counter - state.counter
            }
        }
        default: {
            return state
        }
    }

}

export const incrementAC = () => ({type: INCREMENT})
export const decrementAC = () => ({type: DECREMENT})
export const zeroValueAC = () => ({type: ZERO_VALUE})


export default mainReducer;