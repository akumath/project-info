import  * as actionType  from "../actionTypes/actionTypes";
import axios from 'axios';

const createProject = (project) => {
   return {
    type: actionType.CREATE_PROJECT,
    project
   }
}

const createProjectError = (err) => {
    return {
        type: actionType.CREATE_PROJECT_ERROR,
        err
    }
}

export const dispatchCreateProject = (project, { getFirebase, getFirestore }) => {
    console.log(project)
    return function(dispatch) {
        // make asyn call
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'test',
            authorLastName: 'test',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch(createProject(project))
        }).catch((err) => {
            dispatch(createProjectError(err))
        })
    }
}