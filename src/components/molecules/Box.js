import React, { Component } from 'react';
import {Item} from '../atoms/Item'
import {store} from '../../reducers/index'
import {dragEnter,dragLeave} from '../../actions/BoxesAction'
const draggableWrapperStyle = {
    position: 'relative',
    width: '200px',
    minHeight: '300px',
    display: 'block',
    zIndex: 20,
    border:'1px solid black'
}

export const Box = (props)=>
    <div>
        <div
            className={props.className}
            onDragEnter={(event) => {store.dispatch(dragEnter(event, props))}}
            onDragLeave={(event) => {store.dispatch(dragLeave(event, props))}}
            style={draggableWrapperStyle}>
        <span style={{
            position: 'relative',
            minWidth: '100px',
            minHeight: '16px',
            display: 'inline',
        }}>{props.title}</span>
        <div className="child-list">
            {props.items.map((item)=><Item id={item.id} key={item.id}>{item.title}</Item>)}
        </div>
        </div>
    </div>

