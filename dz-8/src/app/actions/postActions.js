import {ADD_POST, GET_POSTS, DELETE_POST, GET_USER_POSTS, SET_USER_ID} from "../constants/postConstants";
import axios from 'axios';

export function addPost(title, userId, body) {
    var headers = {'Content-Type': 'application/json'};
    var data = {'text': title};
    console.log(JSON.stringify(data));
    return {
        type: ADD_POST,
        payload: axios.post('http://localhost:8080/notes',
          data,
          //JSON.stringify(data)
          //{headers: headers}
        )
    };
}

export function getPosts() {
    return {
        type: GET_POSTS,
        //payload: axios.get('https://jsonplaceholder.typicode.com/posts/')
        payload: axios.get('http://localhost:8080/notes')
    };
}

export function getUserPosts(userId) {
    return {
        type: GET_USER_POSTS,
        payload: axios.get('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
    };
}

export function deletePost(idPost) {
    return {
        type: DELETE_POST,
        payload: idPost
    }
}

export function setUserId(userId) {
    return {
        type: SET_USER_ID,
        payload: userId
    }
}
