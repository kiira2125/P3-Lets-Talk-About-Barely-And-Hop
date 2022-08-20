import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function nav(props){
    const {
        pages = [],
        currentPage,
        setCurrentPage,

    }= props;

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(currentPage)} | Brews`;
    } , [currentPage]);

    return (
        <nav className="nav">
            <ul className="nav-list">
                {pages.map(page => (
                    <li key={page} className={page === currentPage ? 'nav-item active' : 'nav-item'} onClick={() => setCurrentPage(page)}>
                        {capitalizeFirstLetter(page)}
                    </li>
                ))}
            </ul>
        </nav>
    );
    
}



export { default } from './Nav.js';