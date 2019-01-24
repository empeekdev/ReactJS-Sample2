import * as React from "react";
import "./Panel.css";

interface IPanelProps {
    children?:React.ReactNode;
    title:string;
}

export default function Panel({ title, children }:IPanelProps):JSX.Element {
    return (
        <div className="Panel">
            <div className="title">{ title }</div>
            <div className="body">
                { children }
            </div>
        </div>
    );
}
