import React, { Component } from 'react'

export default class NewTaskAdd extends Component {
    render() {
        return (
            <div>
                <input type={'text'} style={{
                    fontSize: '25px', marginRight
                        : '20px'
                }} /><button style={{ backgroundColor: '', padding: '6px' }}>Add New</button>

            </div>
        )
    }
}
