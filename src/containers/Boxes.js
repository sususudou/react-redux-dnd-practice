import { connect } from 'react-redux'
import Boxes from '../components/Boxes'
import { initialize } from '../actions/BoxesAction';

const mapStateToProps = (state, props) => {
    return (state.boxesReducer.init) ? state.boxesReducer : props
}

const mapDispatchToProps = dispatch => {
    return {
        initialize:(boxes)=>{dispatch(initialize(boxes))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Boxes)