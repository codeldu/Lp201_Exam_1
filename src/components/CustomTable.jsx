import React from 'react'

export const CustomTable = ({children}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Year</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
               {children}
            </tbody>
        </table>
    )
}
