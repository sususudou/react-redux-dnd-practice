import { connect } from 'react-redux'
import Boxes from '../components/Boxes'
import { initialize,dragStart } from '../actions/BoxesAction';
const mapStateToProps = (state, props) => {
    console.log(state)
    return (state.boxesReducer.init) ? state.boxesReducer : props
}

const mapDispatchToProps = dispatch => {
    return {
        initialize:(boxes)=>{dispatch(initialize(boxes))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Boxes)