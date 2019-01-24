import * as React from "react";
import * as Redux from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { CreateNote } from "../../actions/NoteActions";
import IStoreSource from "../../store/IStoreSource";
import { createNoteThunk } from "../../thunks/NoteThunks";
import IDairy from "../../types/IDairy";
import "./NotesAddForm.css";

interface INotesAddFormProps {
    dispatch:ThunkDispatch<IDairy, IStoreSource, CreateNote>;
    postId:number;
}

class NotesAddForm extends React.Component<INotesAddFormProps> {
    public inputRef:React.RefObject<HTMLTextAreaElement>;

    public constructor(props:INotesAddFormProps) {
        super(props);
        this.inputRef = React.createRef();
    }

    public render():JSX.Element {
        return (
            <form onKeyDown={ this.handleKeyDown } className="NotesAddForm">
                <div className="avatar" />
                <textarea ref={ this.inputRef } className="message form-control" />
            </form>
        );
    }

    private handleKeyDown = (event:React.KeyboardEvent):void => {
        event.stopPropagation();

        if (event.keyCode !== 13 || !event.ctrlKey) {
            return;
        }

        if (this.inputRef.current != null) {
            const value = this.inputRef.current.value.trim();
            if (value) {
                this.props.dispatch(createNoteThunk(this.props.postId, value));
                this.inputRef.current.value = '';
            }
        }
    };
}

export default Redux.connect(
    (state:IDairy) => {
        return {
            postId: state.selectedPostId
        }
    }
)(
    NotesAddForm
);
