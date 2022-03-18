import React, { useState } from 'react'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm' 

const App = () => {
  const usersData = [
    { id: 1, book: 'True Believer', author: 'Abraham Reisman', date: '01/01/2022'},
    { id: 2, book: 'Storm and Siege', author: 'Leigh Bardugo', date: '01/31/2022'},
    { id: 3, book: 'The Afghanistan Papers', author: 'Craig Whitlock', date: '03/01/2022'},
  ]

const [users, setUsers] = useState(usersData)

//Add User
const addUser = (user) => {
  user.id = users.length + 1
  setUsers([...users, user])
}

//Delete User
const deleteUser = (id) => {
  setEditing(false)
  setUsers(users.filter((user) => user.id !== id))
}

//Edit User
const [editing, setEditing] = useState(false)
const initialFormState = { id: null, book: '', author: '', date: ''}
const [currentUser, setCurrentUser] = useState(initialFormState)
const editRow = (user) => {
  setEditing(true)

  setCurrentUser({ id: user.id, book: user.book, author: user.author, date: user.date})
}
const updateUser = (id, updatedUser) => {
  setEditing(false)

  setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
}

//JSX
  return (
    <div className="container">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Maven+Pro&family=Source+Code+Pro:wght@300&display=swap');
      </style>
      <h1>Reading List</h1>
      <div className="flex-column">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit Title</h2>
              <EditUserForm 
                setEditing = {setEditing}
                currentUser = {currentUser}
                updateUser= {updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add Book</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>Book List</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  )
}

export default App