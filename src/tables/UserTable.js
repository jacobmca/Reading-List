import React from 'react' 

const UserTable = (props) => (
    <table>
        <thead>
            <tr>
                <th>Book</th>
                <th>Author</th>
                <th>Date</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.users.length > 0 ? (
                props.users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.book}</td>
                        <td>{user.author}</td>
                        <td>{user.date}</td>
                        <td>
                            <button 
                                onClick={() => props.editRow(user)}
                                className="button muted-button"
                                >
                                    Edit
                                </button>
                            <button 
                                onClick={() => props.deleteUser(user.id)} 
                                className="button muted-button"
                                >
                                    Delete
                                </button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>No users</td>
                </tr>
            )}
        </tbody>
    </table>
)

export default UserTable