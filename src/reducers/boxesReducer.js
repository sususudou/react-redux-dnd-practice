const initalState = {
    targetItem:null,
    targetBox:null,
    boxes:[],
    init:false
}
export default function boxesReducer(state = initalState,action){
    switch(action.type){
        case 'INITIALIZE':{
            return {
                ...state,
                boxes:[...action.propsBoxes],
                init:true
            }
        }
        case 'DRAG_START':{
            return {
                ...state,
                targetItem:{
                    id:action.item.id,
                    title:action.item.title
                }
            }
        }
        case 'DRAG_ENTER':{
            let newBoxes = state.boxes.map((box)=>{
                box.dragged = (box.id === action.box.id)
                return box
            })
            return {
                ...state,
                boxes:newBoxes,
                targetBox:{
                    id:action.box.id
                }

            }
        }
        case 'DRAG_END':{
            if(!state.targetItem || !state.targetBox) return {...state,targetBox:null,targetItem:null}
            let newBoxes = state.boxes.map((box)=>{
                let newItems = box.items.filter((item)=>{
                    if(state.targetItem.id!== item.id){return item}
                    else { return false } 
                })
                if(state.targetBox.id === box.id){box.items = [...newItems,{...state.targetItem}]}
                else{box.items=[...newItems]}
                box.dragged=false
                return box
            })
            return {
                ...state,
                targetItem:null,
                boxes:newBoxes
            }
            
        }
        default:
            return state
    }
}