import { connect } from 'react-redux'
import GroupChild from '../components/GroupChild'
import GroupParent from '../components/GroupParent'
import { handleDrag,unhandleDrag } from '../actions/GroupChildAction'
import { handleDragEnter, handleDragLeave } from'../actions/GroupParentAction'

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        handleDrag:(event) => { dispatch(handleDrag(event))},
        unhandleDrag: (event) => { dispatch(unhandleDrag(event)) },
        handleDragEnter: (event) => { dispatch(handleDragEnter(event)) },
        handleDragLeave: (event) => { dispatch(handleDragLeave(event)) }
    }
}
export let MixedGroupChild = connect(mapStateToProps, mapDispatchToProps)(GroupChild)
export let MixedGroupParent = connect(mapStateToProps, mapDispatchToProps)(GroupParent)
