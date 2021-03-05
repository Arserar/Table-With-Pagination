import React from 'react';
import './header.scss';

export function Header(props) {

    return (
        <div className = "pagination_table__header">
            <input 
                style={{
                    border: '1px solid #000'
                }}
                type="text" 
                className="input" 
                placeholder="Поиск..."
                onChange={(e) => props.handleSearch(e.target.value)}
            />
        </div>
    );
};