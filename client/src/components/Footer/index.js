import React from 'react';

function footer(){
    const icons = [
        {
            name: 'github',
            link: "https://github.com"

        },
    ]
    return (
        <footer className="footer">
          {icons.map(icon =>
          (
            <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
          )
            )}
        </footer>
      );
            
}




export { default } from './Footer.js';