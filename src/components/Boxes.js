import React, { Component } from 'react';
import { Box } from '../components/molecules/Box'
import { store } from '../reducers/index'
import { initialize } from '../actions/BoxesAction'

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
                     id={box.id} empty={box.empty} key={box.id} title={box.title} items={box.items} />
                )}
                {this.props.children}
            </div>
        );
    }
}
