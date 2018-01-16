import React, { Component } from 'react'
import Boxes from '../containers/Boxes'
import {Button} from '../components/atoms/Button'
import {submit} from '../utils/utils'
class App extends Component {
  render() {
    return (
      <div>
        <Boxes boxes={[{
          id:1,
          title:"グループA",
          items: [{id:10,title:"例題1",example:true}]
        }, {
            id: 2,
            title: "グループB",
            items: [{ id: 11, title: "例題2", example: true }]
          },{
            id:3,
            title:"グループC",
            items: [{ id: 12, title: "例題3", example: true }]
          },{
            id:4,
            title:"問題群",
            empty:true,
            items: [{ id: 1, title: "問題A" }, { id: 2, title: "問題B" }, { id: 3, title: "問題C" }]
          }
        ]}>
        <Button click={submit}>
          送信
        </Button>
        </Boxes>
      </div>
    );
  }
}

export default App
