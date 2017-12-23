const initialState = {
    id:null,
    title:'',
}
export default function itemReducer(state=initialState, action) {
    switch (action.type) {
        case 'ITEM_DRAG_START': {
            return {
                ...state,
                id:action.id,
                title:action.title,
            }
        }
        default:
            return state
    }
}