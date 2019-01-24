import IDairy from "../types/IDairy";
import IDairyStore from "../types/IDairyStore";
import INote from "../types/INote";
import INotesList from "../types/INotesList";
import IPost from "../types/IPost";
import IPostsList from "../types/IPostsList";
import IStoreSource from "./IStoreSource";

export default class LocalStoreSource implements IStoreSource {
    private static createInitialState():IDairyStore {
        return {
            selectedPostId: null,
            nextPostId: 1,
            nextNoteId: 1,
            postsList: { },
            notesList: { }
        };
    }

    private static createDeepClone<T>(value:T):T {
        return JSON.parse(JSON.stringify(value));
    }

    private state:IDairyStore;

    public constructor() {
        this.state = LocalStoreSource.createInitialState();
        this.tryLoadState();
    }

    public loadPostsList():IPostsList {
        return LocalStoreSource.createDeepClone(
            this.state.postsList
        );
    }

    public createPost(message:string):IPost {
        const postId = this.state.nextPostId++;
        const post = { id: postId, message };

        this.state.postsList[post.id] = post;
        this.state.notesList[post.id] = { };
        this.trySaveState();

        return LocalStoreSource.createDeepClone(
            post
        );
    }

    public removePost(postId:number):IPost {
        const post = this.state.postsList[postId];

        delete this.state.postsList[postId];
        delete this.state.notesList[postId];
        this.trySaveState();

        return LocalStoreSource.createDeepClone(
            post
        );
    }

    public loadNotesList(postId:number):INotesList {
        this.state.selectedPostId = postId;
        this.trySaveState();

        return LocalStoreSource.createDeepClone(
            this.state.notesList[postId]
        );
    }

    public createNote(postId:number, message:string):INote {
        const noteId = this.state.nextNoteId++;
        const note = { id: noteId, avatar: Math.ceil(0xFFFFFF * Math.random()), message };

        this.state.notesList[postId][note.id] = note;
        this.trySaveState();

        return LocalStoreSource.createDeepClone(
            note
        );
    }

    public removeNote(postId:number, noteId:number):INote {
        const note = this.state.notesList[postId][noteId];

        delete this.state.notesList[postId][noteId];
        this.trySaveState();

        return LocalStoreSource.createDeepClone(
            note
        );
    }

    public loadDairy():IDairy {
        return {
            selectedPostId: this.state.selectedPostId,
            postsList: this.state.postsList,
            notesList: this.state.notesList
        };
    }

    private tryLoadState():void {
        if (localStorage && localStorage.state) {
            this.state = JSON.parse(localStorage.state);
        }
    }

    private trySaveState():void {
        if (localStorage) {
            localStorage.state = JSON.stringify(this.state);
        }
    }
}
