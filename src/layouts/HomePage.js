import React, { Component } from 'react'
import TopNavigation from './common/TopNavigation'
import ToDoList from './homePage/ToDoList'
import NewTaskAdd from '../components/homePage/NewTaskAdd'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <TopNavigation />
                <NewTaskAdd/>
                <ToDoList/>
            </div>
        )
    }
}
