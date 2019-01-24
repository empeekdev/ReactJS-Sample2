import { Dispatch } from "redux";
import { createNote, CreateNote, removeNote, RemoveNote } from "../actions/NoteActions";
import IStoreSource from "../store/IStoreSource";
import IDairy from "../types/IDairy";

export const createNoteThunk = (postId:number, message:string) => {
    return (dispatch:Dispatch<CreateNote>, getState:() => IDairy, source:IStoreSource):CreateNote => {
        return dispatch(createNote(postId, source.createNote(postId, message)));
    };
};

export const removeNoteThunk = (postId:number, noteId:number) => {
    return (dispatch:Dispatch<RemoveNote>, getState:() => IDairy, source:IStoreSource):RemoveNote => {
        return dispatch(removeNote(postId, source.removeNote(postId, noteId)));
    };
};
