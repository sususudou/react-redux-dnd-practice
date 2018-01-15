import React, { Component } from 'react';
import { Box } from '../components/molecules/Box'
import { store } from '../reducers/index'
import { initialize } from '../actions/BoxesAction'
const draggableWrapperStyle = {
    position: 'relative',
    width: '200px',
    minHeight: '300px',
    display: 'block',
    zIndex: 20,
    backgroundColor: 'gray',
    border: '1px solid black'
}

export default class Boxes extends Component {
    componentDidMount(){
        store.dispatch(initialize(this.props.boxes))
    }
    render() {
        return (
            <div className="box-wrapper">
                {this.props.boxes.map((box)=>
                    <Box 
                     className={(box.dragged) ? "box dragged" : "box"}
                     id={box.id} key={box.id} title={box.title} items={box.items} />
                )}
            </div>
        );
    }
}
