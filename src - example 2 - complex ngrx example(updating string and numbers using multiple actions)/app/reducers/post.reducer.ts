import * as PostActions from '../actions/post.actions';
import { Post } from '../models/post.model';

// define action type that corresponds to one of the action types exported from post.actions.ts file
export type Action = PostActions.All; //

// Default app state
const defaultState: Post = {
    text: 'Hello, I am the default post',
    likes: 0
}

// Helper function to create new state  (since we don't directly mutate original state for state immutability principle in redux)
const newState = (state, newData) => {
    return Object.assign({}, state, newData); // assignment will happen from right to left
}

// Reducer function
export function postReducer (state: Post = defaultState, action: Action) {

    console.log(action.type, state);

    switch(action.type) {
        case PostActions.EDIT_TEXT:
            return newState(state, { text: action.payload });
        
        case PostActions.UPVOTE:
            return newState(state, { likes: state.likes + 1});
    
        case PostActions.DOWNVOTE:
            return newState(state, { likes: state.likes - 1});
        
        case PostActions.RESET: 
            return defaultState;
        
        default:
            return state;
    }
}

