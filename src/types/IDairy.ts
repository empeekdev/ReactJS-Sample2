import IPostNotesList from "./IPostNotesList";
import { IPostSelect } from "./IPostSelect";
import IPostsList from "./IPostsList";

export default interface IDairy {
    selectedPostId:IPostSelect;
    postsList:IPostsList;
    notesList:IPostNotesList;
}
