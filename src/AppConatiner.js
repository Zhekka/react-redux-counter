import {connect} from "react-redux";
import {decrementAC, incrementAC} from "./redux/main-reducer";
import App from "./App";


let mapStateToProps = (state) => {
    return {
        counter: state.mainPage.counter
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(incrementAC())
        },
        decrement: () => {
            dispatch(decrementAC())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)