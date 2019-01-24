import { Dispatch } from "redux";
import { SelectPost, selectPost } from "../actions/DairyActions";
import IStoreSource from "../store/IStoreSource";
import IDairy from "../types/IDairy";

export const selectPostThunk = (postId:number) => {
    return (dispatch:Dispatch<SelectPost>, getState:() => IDairy, source:IStoreSource):SelectPost => {
        return dispatch(selectPost(postId, source.loadNotesList(postId)));
    };
};
