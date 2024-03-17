// NoteEditor.tsx

import React, { useState } from 'react';
import './styles/NoteEditor.css';

interface NoteEditorProps {
    onSaveNote: (title: string, content: string) => void;
}

const NoteEditor: React.FC<NoteEditorProps> = ({ onSaveNote }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value);
    };

    const handleSaveNote = () => {
        onSaveNote(title, content);
        setTitle('');
        setContent('');
    };

    const handleClickInside = (event: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        event.stopPropagation();
    };

    return (
        <div className="note-editor" onClick={handleClickInside}>
            <input
                type="text"
                placeholder="제목"
                value={title}
                onChange={handleTitleChange}
                onClick={handleClickInside}
            />
            <textarea
                placeholder="내용"
                value={content}
                onChange={handleContentChange}
                onClick={handleClickInside}
            />
            <button onClick={handleSaveNote}>저장</button>
        </div>
    );
};

export default NoteEditor;
