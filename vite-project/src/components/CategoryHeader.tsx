import React from 'react';
import './styles/CategoryHeader.css';

interface CategoryHeaderProps {
    categoryTitle: string;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ categoryTitle, children }) => {
    return (
        <div className="category-header">
            <div className="header-content">
                <h2>{categoryTitle}</h2>
                {children}
            </div>
        </div>
    );
};

export default CategoryHeader;
