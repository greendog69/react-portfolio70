import React from 'react';
import pdf from './assets/resume.pdf'; 

const Footer = () => (
    <footer className="text-center center-block bg-light">
        <a href="https://www.github.com/"target="_blank"><i className="fa fa-github fa-2x social"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href={pdf} target="_blank"title="view my resume"><i className="fa fa-stack-overflow fa-2x social"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://linkedin.com/"target="_blank"><i className="fa fa-linkedin-square fa-2x social"></i></a>
    </footer> 
);

export default Footer; 