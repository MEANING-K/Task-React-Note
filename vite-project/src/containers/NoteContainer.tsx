// NoteContainer.tsx

import React, { useState } from 'react';
import NoteList from '../components/NoteList';
import NoteFilter from '../components/NoteFilter';
import NoteEditor from '../components/NoteEditor';
import NoteSearch from '../components/NoteSearch';
import CategoryHeader from '../components/CategoryHeader';
import AddNoteButton from '../components/AddNoteButton';
import './NoteContainer.css';

interface Note {
    id: number;
    title: string;
    content: string;
    tags: string[];
}

const NoteContainer: React.FC = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [filteredNotes, setFilteredNotes] = useState<Note[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [showEditor, setShowEditor] = useState<boolean>(false);

    // 노트 추가
    const handleAddNote = (title: string, content: string) => {
        const newNote: Note = {
            id: notes.length + 1,
            title,
            content,
            tags: [], // 태그 추가 기능이 있다면 태그도 여기서 처리
        };
        setNotes([...notes, newNote]);
        setShowEditor(false); // 에디터 닫기
    };

    // 노트 필터링
    const handleFilterChange = (selectedTag: string) => {
        setSelectedCategory(selectedTag);
        if (selectedTag === '') {
            setFilteredNotes(notes);
        } else {
            const filtered = notes.filter((note) => note.tags.includes(selectedTag));
            setFilteredNotes(filtered);
        }
    };

    // 노트 검색
    const handleSearch = (query: string) => {
        const filtered = notes.filter(
            (note) => note.title.toLowerCase().includes(query.toLowerCase()) || note.content.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredNotes(filtered);
    };

    // AddNoteButton 클릭 시 NoteEditor 띄우기
    const handleAddNoteClick = () => {
        setShowEditor(true);
    };

    return (
        <div className="note-container">
            <div className="left-panel">
                <NoteFilter tags={['태그1', '태그2', '태그3']} onFilterChange={handleFilterChange} />
            </div>
            <div className="right-panel">
                <CategoryHeader categoryTitle={selectedCategory !== '' ? `카테고리: ${selectedCategory}` : '전체 노트'}>
                    <AddNoteButton onAddNote={handleAddNoteClick} />
                </CategoryHeader>
                <NoteSearch onSearch={handleSearch} />
                <NoteList notes={filteredNotes.length > 0 ? filteredNotes : notes} />
            </div>
            {showEditor && (
                <div className="note-editor-overlay" onClick={() => setShowEditor(false)}>
                    <div className="note-editor-container">
                        <NoteEditor onSaveNote={handleAddNote} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default NoteContainer;
