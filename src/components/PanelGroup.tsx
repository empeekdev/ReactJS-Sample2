import * as React from "react";
import "./PanelGroup.css";

interface IPanelGroupProps {
    children?:React.ReactNode;
}

export default function PanelGroup({ children }:IPanelGroupProps):JSX.Element {
    return (
        <div className="PanelGroup">
            { children }
        </div>
    );
}
