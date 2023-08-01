import React, { Component } from 'react'
import TopNavigation from './common/TopNavigation'
import ToDoList from './homePage/ToDoList'
import NewTaskAdd from '../components/homePage/NewTaskAdd'

const toDoListData1 = [
    {
        title: 'First item',
        isCompleted: true,
    },
    {
        title: 'Second item',
        isCompleted: false,
    },
    {
        title: 'Third item',
        isCompleted: false,
    },
]
const toDoListData2 = [
    {
        title: 'AWS',
        isCompleted: true,
    },
    {
        title: 'AZUSE',
        isCompleted: true,
    },
    {
        title: 'DOCKER',
        isCompleted: true,
    },
    {
        title: 'KUBERNET',
        isCompleted: false,
    },
]


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
                            {/* <ToDoList /> */}
                            {<ToDoList toDoListData={toDoListData1} isBold={true} testColor='red' />}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
