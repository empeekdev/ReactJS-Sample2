import * as React from "react";
import * as Redux from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { CreatePost } from "../../actions/PostActions";
import IStoreSource from "../../store/IStoreSource";
import { createPostThunk } from "../../thunks/PostThunks";
import IDairy from "../../types/IDairy";
import "./PostsAddForm.css";

interface IPostsAddFormProps {
    dispatch:ThunkDispatch<IDairy, IStoreSource, CreatePost>;
}

class PostsAddForm extends React.Component<IPostsAddFormProps> {
    public inputRef:React.RefObject<HTMLInputElement>;

    public constructor(props:IPostsAddFormProps) {
        super(props);
        this.inputRef = React.createRef();
    }

    public render():JSX.Element {
        return (
            <form onSubmit={ this.handleSubmit } className="PostsAddForm">
                <input ref={ this.inputRef } type="text" className="form-control" placeholder="Type name here" autoComplete="off" />
                <button className="btn btn-info">Add new</button>
            </form>
        );
    }

    private handleSubmit = (event:React.FormEvent):void => {
        event.preventDefault();

        if (this.inputRef.current != null) {
            const value = this.inputRef.current.value.trim();
            if (value) {
                this.props.dispatch(createPostThunk(value));
                this.inputRef.current.value = '';
            }
        }
    };
}

export default Redux.connect()(
    PostsAddForm
);
