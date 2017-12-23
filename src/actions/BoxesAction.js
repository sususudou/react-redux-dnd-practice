export const DRAG_ENTER = 'DRAG_ENTER'
export const DRAG_LEAVE = 'DRAG_LEAVE'
export const DRAG_START = 'DRAG_START'
export const DRAG_END   = 'DRAG_END'
export const INITIALIZE = 'INITIALIZE'


export const dragEnter = (event, props) => {
    return {
        type: DRAG_ENTER,
        box: {
            id: props.id
        },
    }
}

export const dragLeave = (event, props) => {
    return {
        type: DRAG_LEAVE,
        box: {
            id: props.id,
            children: props.children
        }
    }
}

export const dragStart = (key,name)=>{
    return{
        type:DRAG_START,
        item:{
            id:key,
            title:name
        }
    }
}

export const dragEnd = ()=>{
    return{
        type:DRAG_END
    }
}
export const initialize = (boxes) =>{
    return {
        type:INITIALIZE,
        propsBoxes:boxes
    }
}