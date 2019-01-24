import * as React from "react";
import "./Sidebar.css";

interface ISidebarProps {
    description:string;
    title:string;
}

export default function Sidebar({ title, description }:ISidebarProps):JSX.Element {
    return (
        <div className="Sidebar">
            <div className="title">{ title }</div>
            <div className="description">{ description }</div>
        </div>
    );
}
