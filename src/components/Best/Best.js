import React from 'react'
import Card from '../UI/Card/Card'
import './best.scss';
import { useSelector } from 'react-redux';

const Best = props => {

    const coffee = useSelector(state => state.coffee);
    const bestCoffee = coffee.filter(item => item.best);

    return (
        <div className='best'>
        <h2>
            Our best
        </h2>
        <div className='best__cards'>
            {bestCoffee.map(item => <Card
                                        id={item.id}
                                        key={item.name}
                                        background='transparent'
                                        name={item.name}
                                        price={item.price}
                                        image={item.image} />
            )}
        </div>
    </div>
    )
}

export default Best