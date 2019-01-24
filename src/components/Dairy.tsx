import * as React from "react";
import * as Redux from "react-redux";
import IDairy from "../types/IDairy";
import "./Dairy.css";
import NotesAddForm from "./notes/NotesAddForm";
import NotesList from "./notes/NotesList";
import Panel from "./Panel";
import PanelGroup from "./PanelGroup";
import PostsAddForm from "./posts/PostsAddForm";
import PostsList from "./posts/PostsList";
import Sidebar from "./Sidebar";

class Dairy extends React.Component<IDairy> {
    public render():JSX.Element {
        return (
            <div className="Dairy">
                <Sidebar title="Dairy App" description="Comment with no sense" />
                <PanelGroup>
                    <Panel title="Items">
                        <PostsAddForm />
                        <PostsList postsList={ this.props.postsList } />
                    </Panel>
                    {
                        (this.props.selectedPostId !== null) ? (
                            <Panel title={ "Comments #" + this.props.selectedPostId }>
                                <NotesList notesList={ this.props.notesList[this.props.selectedPostId] } />
                                <NotesAddForm />
                            </Panel>
                        ) : (
                            null
                        )
                    }
                </PanelGroup>
            </div>
        );
    }
}

export default Redux.connect(
    (state:IDairy):IDairy => state
)(
    Dairy
);
