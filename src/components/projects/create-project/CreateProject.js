import React, { useState } from 'react';
import { dispatchCreateProject } from '../../../redux/actions/projectActions'
import { connect } from 'react-redux';

const CreateProject = (props) => {

    const [form, setForm] = useState({
        title: '',
        content: ''
    })

    const handleSubmit = e => {
        e.preventDefault();
        props.createProject(form)
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

const mapDispatchToProps = dispatch => {
    return {
        createProject: (project) => dispatch(dispatchCreateProject(project))
    }
}

export default connect(null, mapDispatchToProps)(CreateProject);
