import { SELECT_POST } from "../constants/ActionTypes";
import INotesList from "../types/INotesList";

export interface SelectPost {
    type:SELECT_POST;
    notesList:INotesList;
    postId:number;
}

export const selectPost = (postId:number, notesList:INotesList):SelectPost => {
    return {
        type: SELECT_POST,
        notesList,
        postId
    };
};

export type DairyActions = (
    SelectPost
);
