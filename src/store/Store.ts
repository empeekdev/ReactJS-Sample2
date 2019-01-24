import * as Redux from "redux"
import Thunk from "redux-thunk";
import DairyReducer from "../reducers/DairyReducer";
import NoteReducer from "../reducers/NoteReducer";
import PostReducer from "../reducers/PostReducer";
import IDairy from "../types/IDairy";
import IStoreSource from "./IStoreSource";

export default (store:IStoreSource):Redux.Store<IDairy> => {
    return Redux.applyMiddleware(
        Thunk.withExtraArgument(store)
    )(
        Redux.createStore
    )(
        Redux.combineReducers({
            selectedPostId: DairyReducer,
            postsList: PostReducer,
            notesList: NoteReducer
        }),
        store.loadDairy()
    );
};
