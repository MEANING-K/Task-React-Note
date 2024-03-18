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
            {notes.length > 0 ? (
                <>
                    <ul>
                        {notes.map((note) => (
                            <li key={note.id}>
                                <h3>{note.title}</h3>
                                <p>{note.content}</p>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <h2>노트가 없습니다.</h2>
            )}
        </div>
    );
};

export default NoteList;
