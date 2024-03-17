import React from 'react';
import './styles/NoteList.css';

interface Note {
    id: number;
    title: string;
    content: string;
}

interface NoteListProps {
    notes: Note[];
}

const NoteList: React.FC<NoteListProps> = ({ notes }) => {
    return (
        <div className="note-list">
            <h2>노트 목록</h2>
            <ul>
                {notes.map((note) => (
                    <li key={note.id}>
                        <h3>{note.title}</h3>
                        <p>{note.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NoteList;
