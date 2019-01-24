import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Dairy from "./components/Dairy";
import "./index.css";
import LocalStoreSource from "./store/LocalStoreSource";
import Store from "./store/Store";

ReactDOM.render(
    <Provider store={ Store(new LocalStoreSource()) }><Dairy /></Provider>,
    document.querySelector<HTMLElement>("#root")
);
