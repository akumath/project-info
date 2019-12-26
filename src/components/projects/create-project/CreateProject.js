import React, { useState } from 'react';

export const CreateProject = () => {

    const [form, setForm] = useState({
        title: '',
        content: ''
    })

    const handleSubmit = e => {
        e.preventDefault();
    }

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.id] : e.target.value
        })
    }
    return (
        <div className="container">
            <form className="white" onSubmit={handleSubmit}>
                <h5 className="grey-text text-darken-3">Create a New Project</h5>
                <div className="input-field">
                    <input type="text" id='title' onChange={handleChange} />
                    <label htmlFor="title">Project Title</label>
                </div>
                <div className="input-field">
                    <textarea id="content" className="materialize-textarea" onChange={handleChange}></textarea>
                    <label htmlFor="content">Project Content</label>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1">Create</button>
                </div>
            </form>
      </div>
    )
}
