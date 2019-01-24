import { DairyActions } from "../actions/DairyActions";
import { RemovePost } from "../actions/PostActions";
import { REMOVE_POST, SELECT_POST } from "../constants/ActionTypes";
import { IPostSelect } from "../types/IPostSelect";

export default (state:IPostSelect, action:DairyActions | RemovePost):IPostSelect => {
    switch (action.type) {
        case SELECT_POST: {
            return action.postId;
        }

        case REMOVE_POST: {
            if (action.post.id === state) {
                return null;
            }

            return state;
        }

        default: {
            return state || null;
        }
    }
};
