import React, { Component } from 'react'
import SingaleToDoList from '../../components/toDoList/SingaleToDoList'
// import { getValue } from '@testing-library/user-event/dist/utils';

export default class ToDoList extends Component {
    render() {
        let { toDoListData, isBold, title, isCompleted, testColor } = this.props;
        return (
            <div>
                {
                    toDoListData.map((val, key) => {
                        return (<SingaleToDoList key={key} isBold={val.isBold} title={val.title} isCompleted={val.isCompleted} testColor={val.testColor} />)
                    })
                }
            </div>
        )
    }
}
