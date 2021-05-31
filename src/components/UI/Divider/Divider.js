import React from 'react'
import './divider.scss'

const Divider = ({color}) => {
    return (
        <div className={'divider'}>
            <div className={`divider__line divider__line_${color}`}></div>
            <img src={`/img/beans-fill-${color}.png`} alt='beans'/>
            <div className={`divider__line divider__line_${color}`}></div>
        </div>
    )
}

export default Divider;