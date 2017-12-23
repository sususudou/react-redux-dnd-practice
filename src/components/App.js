import React, { Component } from 'react'
import Boxes from '../containers/Boxes'
class App extends Component {
  render() {
    return (
      <div>
        <Boxes boxes={[{
          id:1,
          title:"グループA",
          items: [{ id: 1, title: "問題A" }, { id: 2, title: "問題B" }, { id: 3, title: "問題C" }]
        }, {
            id: 2,
            title: "グループB",
            items: []
          }
        ]}>
        </Boxes>
      </div>
    );
  }
}

export default App
