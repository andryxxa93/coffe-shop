import React from 'react'
import './button.scss';

const Button = ({title, onClick}) => (
    <button onClick={onClick} className='button'>
        {title}
    </button>
)

export default Button;