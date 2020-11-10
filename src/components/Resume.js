 
import React from 'react';
import pdf from './assets/resume.pdf'; 

const Resume = () => (
    <div>
        <h3>Resume</h3>
        <a href={pdf} download>Click to download Resume</a>
        
    </div> 
);

export default Resume; 