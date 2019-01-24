import * as Lodash from "lodash";
import * as React from "react";
import * as Redux from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { SelectPost } from "../../actions/DairyActions";
import { RemovePost } from "../../actions/PostActions";
import IStoreSource from "../../store/IStoreSource";
import { selectPostThunk } from "../../thunks/DairyThunks";
import { removePostThunk } from "../../thunks/PostThunks";
import IDairy from "../../types/IDairy";
import IPost from "../../types/IPost";
import "./PostsListItem.css";

interface IPostsListItemOwnProps {
    post:IPost;
}

interface IPostsListItemProps extends IPostsListItemOwnProps {
    dispatch:ThunkDispatch<IDairy, IStoreSource, RemovePost | SelectPost>;
    isSelected:boolean;
    notesNum:number;
}

class PostsListItem extends React.Component<IPostsListItemProps> {
    public render():JSX.Element {
        return (
            <div onClick={ this.handleSelectClick } className="PostsListItem">
                { this.props.isSelected ? <div className="active" /> : null }
                <div className="title"><div className="title-wrap">#{ this.props.post.id } - { this.props.post.message }</div> <span className="badge badge-info">{ this.props.notesNum }</span></div>
                <button onClick={ this.handleRemoveClick } className="btn btn-outline-danger">Delete</button>
            </div>
        );
    }

    private handleRemoveClick = (event:React.MouseEvent):void => {
        this.props.dispatch(removePostThunk(this.props.post.id));
        event.stopPropagation();
    };

    private handleSelectClick = (event:React.MouseEvent):void => {
        this.props.dispatch(selectPostThunk(this.props.post.id));
        event.stopPropagation();
    };
}

export default Redux.connect(
    (state:IDairy, props:IPostsListItemOwnProps) => {
        return {
            ...props,
            isSelected: props.post.id === state.selectedPostId,
            notesNum: Lodash.values(state.notesList[props.post.id]).length
        }
    }
)(
    PostsListItem
);
