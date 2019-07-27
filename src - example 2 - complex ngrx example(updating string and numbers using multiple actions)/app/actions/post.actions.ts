import { Action } from '@ngrx/store';

// exporting constants that represent actions
export const EDIT_TEXT = '[Post] Edit';
export const UPVOTE = '[Post] Upvote';
export const DOWNVOTE = '[Post] Downvote';
export const RESET = '[Post] Reset';

// EditText is action class that implements Action interface
export class EditText implements Action{
    // 'type' property corresponds to action type defined in above exported constants
    readonly type = EDIT_TEXT;

    // to send data with this action, we need to define constructor that has payload property (here, it is of type string)
    constructor(public payload: string) {}

}

// no constructor needed in below classes as we won't be sending additional data (payload)
export class Upvote implements Action{
    readonly type = UPVOTE;
}
export class Downvote implements Action{
    readonly type = DOWNVOTE;
}
export class Reset implements Action{
    readonly type = RESET;
}

// exporting all actions as single type so that they can be easily handled for strong typing in other files
export type All = Upvote | Downvote | Reset | EditText;