import React from 'react'
import './section.scss';

const Section = ({children, background, size, color}) => (
    <div
        style={{backgroundImage:`url(${background})`}}
        className={`section section_${size} section_${color}`}>
        <div className='container section__content'>
            {children}
        </div>
    </div>
)

export default Section;