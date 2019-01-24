import IDairy from "../types/IDairy";
import INote from "../types/INote";
import INotesList from "../types/INotesList";
import IPost from "../types/IPost";
import IPostsList from "../types/IPostsList";

export default interface IStoreSource {
    loadPostsList():IPostsList;
    createPost(message:string):IPost;
    removePost(postId:number):IPost;

    loadNotesList(postId:number):INotesList;
    createNote(postId:number, message:string):INote;
    removeNote(postId:number, noteId:number):INote;

    loadDairy():IDairy;
}
