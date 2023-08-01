import React from 'react'

export default function ToDoTitle({testColor,title,isBold}) {
    return (
        <div>
            <p style={{ fontWeight: isBold ? 'bold' : '', color: testColor }}>{title}</p>

        </div>
    )
}
