import React from 'react'
import ProjectSummary from '../project-summary/ProjectSummary';
import { connect } from 'react-redux';

const ProjectList = (props) => {
    const { projects} = props;
    console.log(projects)
    return (
        <div className="project-list section">
            { projects && projects.map(project => (
                <ProjectSummary key={project.id} project={project}/>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        projects: state.project.projects
    }
} 

export default connect(mapStateToProps, null)(ProjectList);
