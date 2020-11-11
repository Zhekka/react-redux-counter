import {connect} from "react-redux";
import {decrementAC, incrementAC, zeroValueAC} from "./redux/main-reducer";
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
        },
        zeroValue:()=>{
            dispatch(zeroValueAC())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)