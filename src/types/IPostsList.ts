import IPost from "./IPost";

export default interface IPostsList {
    [postId:number]:IPost;
}
