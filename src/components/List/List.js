import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Card from '../UI/Card/Card';
import './list.scss';

const List = ({filter, divider, selector, cardBackground}) => {

    let coffee = useSelector(state => state.coffee);
    if (selector) {
       coffee = coffee.filter(item => item[selector]);
    }

    const [coffeeArr, setCoffeeArr] = useState(coffee);
    const [filterByCountry, setFilter] = useState('');

    const onSearchHandler = (e) => {
        if (!e.target.value.trim()) {
            setCoffeeArr(coffee)
        }
        const regx =  new RegExp(e.target.value.trim(), 'i');
        setCoffeeArr(() => coffee.filter(item => regx.test(item.name.trim())));
    }

    const filteredByCountry = (e) => {
        const target = e.target;
        const value = target.innerHTML;
        if (filterByCountry !== value) {
            setFilter(value)

            const buttons = document.querySelectorAll('.list__filter-item');
            buttons.forEach(item => item.classList.remove('list__filter-item_active'));

            setCoffeeArr(() => coffee.filter(item => item.country === value))   
        } else {
            setFilter('');
            setCoffeeArr(coffee);
        }
        target.classList.toggle('list__filter-item_active');
    }

    const countries = new Set(coffee.map(item => item.country));
    const countriesArr = [];
    countries.forEach(elem => countriesArr.push(elem))
    let content = coffeeArr.map((item) => <Card
                                            id={item.id}
                                            key={item.id}
                                            background={cardBackground}
                                            name={item.name}
                                            price={item.price}
                                            country={item.country}
                                            image={item.image} />
    )

    if (!coffeeArr.length) {
        content = <h2>
            There is no such coffee. 
        </h2>
    }
    
    return (
        <div className='list'>
            <div className='container list__container'>
                {divider && <div className='list__divider'></div>}
                {filter && <div className='list__filter'>
                    <div className='list__filter-search'>
                        <span>
                            Lookiing for
                        </span>
                        <input onChange={onSearchHandler} placeholder='start typing here...'/>
                    </div>
                    <div className='list__filter-bar'>
                        <span>
                            Or filter
                        </span>
                        <div>
                            {countriesArr.map(country => <button onClick={filteredByCountry} key={country} className='list__filter-item'>
                                    {country}
                                </button>
                            )}
                        </div>
                    </div>
                </div>}
                <div className='list__content'>
                    {content}
                </div>
            </div>
        </div>
    )
}

export default List