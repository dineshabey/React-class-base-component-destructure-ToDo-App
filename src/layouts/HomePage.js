import React, { Component } from 'react'
import TopNavigation from './common/TopNavigation'
import ToDoList from './homePage/ToDoList'
import NewTaskAdd from '../components/homePage/NewTaskAdd'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <TopNavigation />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div>
                        <h2>ToDo List</h2>
                        <NewTaskAdd />
                        <div style={{ marginTop: '20px' }}>
                            <ToDoList />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
