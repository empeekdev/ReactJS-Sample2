import { CREATE_NOTE, REMOVE_NOTE } from "../constants/ActionTypes";
import INote from "../types/INote";

export interface CreateNote {
    type:CREATE_NOTE;
    postId:number;
    note:INote;
}

export const createNote = (postId:number, note:INote):CreateNote => {
    return {
        type: CREATE_NOTE,
        postId,
        note
    };
};

export interface RemoveNote {
    type:REMOVE_NOTE;
    postId:number;
    note:INote;
}

export const removeNote = (postId:number, note:INote):RemoveNote => {
    return {
        type: REMOVE_NOTE,
        postId,
        note
    };
};

export type NoteActions = (
    CreateNote |
    RemoveNote
);
