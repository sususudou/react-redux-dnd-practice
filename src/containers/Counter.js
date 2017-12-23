import { connect } from 'react-redux'

import Counter from '../components/Counter'
import { increment } from '../actions/CounterAction'

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        h: () => { dispatch(increment()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)