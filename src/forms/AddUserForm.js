import React, { useState } from 'react'

const AddUserForm = (props) => {
    const initialFormState = { id: null, name: '', username: '' }
    const [user, setUser] = useState(initialFormState)

    const handleInputChange = event => {
        
    }

        return (
            <form
                onSubmit={event => {
                    event.preventDefault()
                    if (!user.name || !user.username) return

                    props.addUser(user)
                    setUser(initialFormState)
                }}
            >
                <label>Book</label>
                <input 
                    type="text" 
                    name="book" 
                    value={user.book}
                    onChange={handleInputChange}
                />
                <label>Author</label>
                <input 
                    type="text" 
                    name="author" 
                    value={user.author}
                    onChange={handleInputChange}
                />
                <label>Date</label>
                <input
                    type="date"
                    name="date"
                    value={user.date}
                    onChange={handleInputChange}
                />
                <button>Add New Book</button>
            </form>
    )
}

export default AddUserForm