import React, { useState, useEffect } from 'react'

const EditUserForm = (props) => {
    const [user, setUser] = useState(props.currentUser)

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    return (
        <form
            onSubmit = {(event) => {
                event.preventDefault()

                props.updateUser(user.id, user)
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
                type="text"
                name="date"
                value={user.date}
                onChange={handleInputChange}
            />
            <button>Update Entry</button>
            <button
                onClick={() => props.setEditing(false)}
                className="button muted-button"
            >
                Cancel
            </button>
        </form>
    )
}

export default EditUserForm