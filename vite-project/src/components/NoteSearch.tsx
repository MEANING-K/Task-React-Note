import React, { useState } from 'react';
import './styles/NoteSearch.css';

interface NoteSearchProps {
    onSearch: (query: string) => void;
}

const NoteSearch: React.FC<NoteSearchProps> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    return (
        <div className="note-search">
            <input type="text" placeholder="검색어 입력" value={searchQuery} onChange={handleSearchInputChange} />
            <button onClick={handleSearch}>검색</button>
        </div>
    );
};

export default NoteSearch;
