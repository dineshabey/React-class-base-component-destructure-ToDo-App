import React, { Component } from 'react'

export default class SingaleToDoList extends Component {
  render() {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        border: '1px solid green',
        borderRadius: '10px',
        margin: '5px',
        padding: '5px',

      }}>
        {/* <input type={'checkbox'} checked={isCompleted} /> */}
        <input type={'checkbox'}  />
        <p>First Task</p>
        {/* <p style={{ fontWeight: isBold ? 'bold' : '', color: testColor }}>{title}</p> */}
        <button>Delete</button>
      </div>
    )
  }
}
