import  * as actionType  from "../actionTypes/actionTypes";
import axios from 'axios';

const createProject = () => {
   return {
    type: actionType.CREATE_PROJECT
   }
}

const fetchUsers = () => {
    return function(dispatch) {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data.map(user => user.id)
                dispatch(createProject(users))
            })
            .catch(error => {
                dispatch(fetchUserFailure(error.message))
            })
    }
}