// AddNoteButton.tsx

import React from 'react';
import './styles/AddNoteButton.css';

interface AddNoteButtonProps {
    onAddNote: (title: string, content: string) => void; // 매개변수 추가
}

const AddNoteButton: React.FC<AddNoteButtonProps> = ({ onAddNote }) => {
    const handleClick = () => {
        onAddNote('새 노트', '새 노트 내용'); // 매개변수 전달
    };

    return (
        <div className="add-note-button">
            <button onClick={handleClick}>+</button>
        </div>
    );
};

export default AddNoteButton;
