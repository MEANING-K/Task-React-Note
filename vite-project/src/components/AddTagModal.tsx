import React from 'react';
import ReactDOM from 'react-dom';
import './styles/AddTagModal.css';

interface AddTagModalProps {
    onTagSelect: (tag: string) => void;
}

const AddTagModal: React.FC<AddTagModalProps> = ({ onTagSelect }) => {
    const handleCustomTagSubmit = () => {
        const customTag = prompt("새로운 태그를 입력하세요:");
        if (customTag) {
            onTagSelect(customTag);
        }
    };

    return ReactDOM.createPortal(
        <div className="add-tag-modal">
            <h3>태그 추가</h3>
            <button onClick={handleCustomTagSubmit}>직접 생성한 태그</button>
        </div>,
        document.body
    );
};

export default AddTagModal;