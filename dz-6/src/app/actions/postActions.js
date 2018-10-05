import dispatcher from '../dispatcher';
import {ADD_POST, GET_POSTS, DEL_POST, EDIT_POST} from "../constants/postConstants";
import axios from 'axios';

export function addPost(title, userId, body) {
    dispatcher.dispatch({
        type: ADD_POST,
        payload: {title, userId, body}
    });
}

export function getPosts() {
    axios
        .get('https://jsonplaceholder.typicode.com/posts/')
        .then((response) => {
            dispatcher.dispatch({
                type: GET_POSTS,
                payload: response.data
            });
        });
}

export function delPost(id) {
    dispatcher.dispatch({
        type: DEL_POST,
        payload: id
    });
}

export function editPost(data) {
    dispatcher.dispatch({
        type: EDIT_POST,
        payload: data
    });
}
