import IDairy from "./IDairy";

export default interface IDairyStore extends IDairy {
    nextPostId:number;
    nextNoteId:number;
}
