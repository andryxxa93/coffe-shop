import React from 'react'
import './about.scss';

const About = ({children}) => (
    <div className='about'>
        <div className={"container about__container"}>
            {children}
        </div>
    </div>
)

export default About;