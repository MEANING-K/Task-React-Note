import React, { useState, useEffect } from 'react';
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

    useEffect(() => {
        const timer = setTimeout(() => {
            handleSearch();
        }, 300); // 0.3초 이후에 검색을 수행합니다.

        return () => clearTimeout(timer);
    }, [searchQuery]);

    return (
        <div className="note-search">
            <input type="text" placeholder="검색어 입력" value={searchQuery} onChange={handleSearchInputChange} />
        </div>
    );
};

export default NoteSearch;
