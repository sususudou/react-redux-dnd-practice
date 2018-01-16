import React from 'react';
import {dragStart,dragEnd} from '../../actions/BoxesAction'
import { store } from '../../reducers/index'

export const Item = (props) => {
    return (
        <div 
            className={(!props.example) ? "item" : "example" }
            draggable={!props.example} 
            onDragStart={(event)=>{store.dispatch(dragStart(props.id,props.children))}}
            onDragEnd={(event) => { store.dispatch(dragEnd()) }}>
            <span>{props.children}</span>
        </div>)
    };