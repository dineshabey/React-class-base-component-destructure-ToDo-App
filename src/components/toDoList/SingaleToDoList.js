import React, { Component } from 'react'
import ToDoTitle from './singaleToDo/ToDoTitle'

export default class SingaleToDoList extends Component {
  render() {
    const { testColor, title, isBold, isCompleted } = this.props
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        border: '1px solid green',
        borderRadius: '10px',
        margin: '5px',
        padding: '5px',

      }}>
        <input onChange={() => { }} type={'checkbox'} checked={isCompleted} />
        <ToDoTitle testColor={testColor} title={title} isBold={isBold} />
        <button>Delete</button>
      </div>
    )
  }
}
