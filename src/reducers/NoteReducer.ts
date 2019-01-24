import * as Lodash from "lodash";
import { SelectPost } from "../actions/DairyActions";
import { NoteActions } from "../actions/NoteActions";
import { PostActions } from "../actions/PostActions";
import { CREATE_NOTE, CREATE_POST, REMOVE_NOTE, REMOVE_POST, SELECT_POST } from "../constants/ActionTypes";
import IPostNotesList from "../types/IPostNotesList";

export default (state:IPostNotesList, action:PostActions | NoteActions | SelectPost):IPostNotesList => {
    switch (action.type) {
        case CREATE_POST: {
            return {
                ...state,
                [action.post.id]: { }
            };
        }

        case REMOVE_POST: {
            return Lodash.omit(
                state,
                [ action.post.id ]
            );
        }

        case CREATE_NOTE: {
            return {
                ...state,
                [action.postId]: {
                    ...state[action.postId],
                    [action.note.id]: action.note
                }
            };
        }

        case REMOVE_NOTE: {
            return {
                ...state,
                [action.postId]: Lodash.omit(
                    state[action.postId],
                    [ action.note.id ]
                )
            };
        }

        case SELECT_POST: {
            return {
                ...state,
                [action.postId]: action.notesList
            };
        }

        default: {
            return state || { };
        }
    }
};