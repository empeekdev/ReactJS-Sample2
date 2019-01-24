import INote from "./INote";

export default interface INotesList {
    [noteId:number]:INote;
}
