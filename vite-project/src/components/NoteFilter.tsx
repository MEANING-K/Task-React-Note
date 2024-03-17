import React, { useState } from 'react';
import './styles/NoteFilter.css';

interface NoteFilterProps {
    tags: string[];
    onFilterChange: (selectedTag: string) => void;
}

const NoteFilter: React.FC<NoteFilterProps> = ({ tags, onFilterChange }) => {
    const [selectedTag, setSelectedTag] = useState('');

    const handleTagChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTag(event.target.value);
        onFilterChange(event.target.value);
    };

    return (
        <div className="note-filter">
            <div className="category-list">
                <h3>MEANING-K</h3>
                {tags.map((tag) => (
                    <button key={tag} value={tag} onClick={() => onFilterChange(tag)}>
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default NoteFilter;
