import * as Lodash from "lodash";
import * as React from "react";
import INote from "../../types/INote";
import INotesList from "../../types/INotesList";
import "./NotesList.css";
import NotesListItem from "./NotesListItem";

interface INotesListProps {
    notesList:INotesList;
}

export default class NotesList extends React.Component<INotesListProps> {
    public listRef:React.RefObject<HTMLDivElement>;

    public constructor(props:INotesListProps) {
        super(props);
        this.listRef = React.createRef();
    }

    public render():JSX.Element {
        return (
            <div className="NotesList" ref={ this.listRef }>
                {
                    Lodash.values(this.props.notesList).map(
                        (note:INote) => {
                            return (
                                <NotesListItem key={ note.id } note={ note } />
                            );
                        }
                    )
                }
            </div>
        );
    }

    public componentDidMount() {
        this.scrollListDown();
    }

    public componentDidUpdate() {
        this.scrollListDown();
    }

    private scrollListDown() {
        if (this.listRef.current != null) {
            this.listRef.current.scrollTop = this.listRef.current.scrollHeight;
        }
    }
}
