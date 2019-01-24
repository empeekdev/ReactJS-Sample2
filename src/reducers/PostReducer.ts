import * as Lodash from "lodash";
import { NoteActions } from "../actions/NoteActions";
import { PostActions } from "../actions/PostActions";
import { CREATE_POST, REMOVE_POST } from "../constants/ActionTypes";
import IPostsList from "../types/IPostsList";

export default (state:IPostsList, action:PostActions | NoteActions):IPostsList => {
    switch (action.type) {
        case CREATE_POST: {
            return {
                ...state,
                [action.post.id]: action.post
            };
        }

        case REMOVE_POST: {
            return Lodash.omit(
                state,
                [ action.post.id ]
            );
        }

        default: {
            return state || { };
        }
    }
};
