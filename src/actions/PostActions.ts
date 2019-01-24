import { CREATE_POST, REMOVE_POST } from "../constants/ActionTypes";
import IPost from "../types/IPost";

export interface CreatePost {
    type:CREATE_POST;
    post:IPost;
}

export const createPost = (post:IPost):CreatePost => {
    return {
        type: CREATE_POST,
        post
    };
};

export interface RemovePost {
    type:REMOVE_POST;
    post:IPost;
}

export const removePost = (post:IPost):RemovePost => {
    return {
        type: REMOVE_POST,
        post
    };
};

export type PostActions = (
    CreatePost |
    RemovePost
);
