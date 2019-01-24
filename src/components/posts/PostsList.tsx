import * as Lodash from "lodash";
import * as React from "react";
import IPost from "../../types/IPost";
import IPostsList from "../../types/IPostsList";
import "./PostsList.css";
import PostsListItem from "./PostsListItem";

interface IPostsListProps {
    postsList:IPostsList;
}

export default function PostsList({ postsList }:IPostsListProps):JSX.Element {
    return (
        <div className="PostsList">
            {
                Lodash.values(postsList).reverse().map(
                    (post:IPost) => {
                        return (
                            <PostsListItem key={ post.id } post={ post } />
                        );
                    }
                )
            }
        </div>
    );
}
