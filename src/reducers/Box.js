
const initialState = {
    targetItem:{
        id:null,
        title:null,
        prevParentId:null
    },
    targetBox:{
        id:null
    },
    boxes:[]
}
export default function boxReducer(state = initialState, action) {
    switch (action.type) {
        case 'BOX_DRAG_ENTER':{
            if(!state.box.id) return {...state}
            return {
                ...state,
                box:{
                    id:action.box.id,
                    children:[...action.box.children.filter((child)=>{
                        if(child.id!==state.item.id) return child
                    }),{id:state.item.id,title:state.item.title}
                    ],
                },
                children: [...action.box.children.filter((child) => {
                    if (child.id !== state.item.id) return child
                }), { id: state.item.id, title: state.item.title }
                ]
            }
        }
        case 'BOX_DRAG_LEAVE': {
            if(!state.item.id) return {...state}
            return {
                ...state,
                box:{
                    id:action.box.id,
                    children:[...action.box.children]
                }
            }
        }
        case 'SET_DELETE_ITEM':{
            return {
                ...state,
                item:{
                    id:action.item.id,
                    title:action.item.title
                },
            }
        }
        case 'UNSET_DELETE_ITEM':{
            return {
                box:{
                    id:null,
                    children:[]
                },
                item:{
                    id:null,
                    title:null
                }
            }
        }
        default:
            return state
    }
}