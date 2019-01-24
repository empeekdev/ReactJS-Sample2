import * as React from "react";
import INote from "../../types/INote";
import "./NotesListItem.css";

interface INotesListItemProps {
    note:INote;
}

export default function NotesListItem({ note }:INotesListItemProps):JSX.Element {
    let color = note.avatar.toString(16);
    if (color.length < 6) {
        color = '0'.repeat(6 - color.length) + color;
    }

    return (
        <div className="NotesListItem">
            <div className="avatar" style={{ backgroundColor: '#' + color }} />
            <div className="message"
                dangerouslySetInnerHTML={{ __html: note.message.replace(/\n/gi, '<br />') }}
            />
        </div>
    );
}
