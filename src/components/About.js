import React, { useEffect, useState } from 'react';
import './About.css';

export default function About () 
{
    return (
        <div className="aboutContainer">
            <h1>ABOUT</h1>
            
            <p>
                Just an simple and rush site for ncov.
            </p>
            <a target="_blank" href="http://nincas.github.io">Github Profile</a>
            <a target="_blank" href="https://github.com/novelcovid/api">Powered By: Novelcovid/api</a>
        </div>
    )
}