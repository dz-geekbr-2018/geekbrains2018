import * as ConstantPosts from '../constants/postConstants';
import merge from 'lodash/merge';

export function postsReducer(state = {posts: [], is_loading: false, userId: 0, forceReload: false}, action) {
    switch (action.type) {
        case ConstantPosts.GET_POSTS_PENDING: {
            state = {...state, is_loading: true}; //Вариант 1
            //Object.assign(state, {is_loading: true}); //Вариант 2

            //state = state.is_loading = true; //Неверно
            break;
        }
        case ConstantPosts.GET_POSTS_FULFILLED: {
            state = {...state, is_loading: false, posts: action.payload.data};
            break;
        }
        case ConstantPosts.GET_POSTS_REJECTED: {
            state = {...state, is_loading: false, error_message: action.payload.message};
            break;
        }
        case ConstantPosts.ADD_POST: {
            state = {
                ...state,
                is_loading: true,
                posts: [...state.posts, action.payload]
            };
            break;
        }
        case ConstantPosts.ADD_POST_FULFILLED: {
            state = {
                ...state,
                is_loading: false,
                forceReload: Math.random()
            };
            break;
        }
        case ConstantPosts.DELETE_POST: {
            let index = null;
            state.posts.forEach((value, i) => {
                if(parseInt(value.id) === parseInt(action.payload)){
                    index = i;
                }
            });

            if(index !== null)
            {
                state = merge({}, state);
                state.posts.splice(index, 1);
            }
            break;
        }
        case ConstantPosts.GET_USER_POSTS_PENDING: {
            state = {...state, is_loading: true};
            break;
        }
        case ConstantPosts.GET_USER_POSTS_FULFILLED: {
            state = {...state, is_loading: false, posts: action.payload.data};
            break;
        }
        case ConstantPosts.SET_USER_ID: {
            state = (state.userId === action.payload)?{...state, userId: 0}:{...state, userId: action.payload};
            break;
        }
    }
    return state;
}
