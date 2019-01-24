import { Dispatch } from "redux";
import { CreatePost, createPost, RemovePost, removePost } from "../actions/PostActions";
import IStoreSource from "../store/IStoreSource";
import IDairy from "../types/IDairy";

export const createPostThunk = (message:string) => {
    return (dispatch:Dispatch<CreatePost>, getState:() => IDairy, source:IStoreSource):CreatePost => {
        return dispatch(createPost(source.createPost(message)));
    };
};

export const removePostThunk = (postId:number) => {
    return (dispatch:Dispatch<RemovePost>, getState:() => IDairy, source:IStoreSource):RemovePost => {
        return dispatch(removePost(source.removePost(postId)));
    };
};
