import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Divider from '../components/UI/Divider/Divider';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import { useSelector } from 'react-redux';
import Section from '../components/Section/Section';

const Item = (props) => {

    const coffeeItem = useSelector(state => state.coffee.find(item => item.id == props.match.params.id))
    return (
        <>
            <Navbar position='left' color='white'/>
            <Section
                color='white'
                size='small'
                background={process.env.PUBLIC_URL + '/img/coffebg.jpg'}
            >
                    <h1>
                        Our Coffee
                    </h1>
            </Section>
            <About>
                    <div className='about__grid'>
                    <div className='about__photo'>
                        <img src={`/img/${coffeeItem.bigImage}`} alt={coffeeItem.name}/>
                    </div>
                        <div>
                        <h2>
                            About it
                        </h2>
                        <Divider color='black'/>
                        <div className='about__info'>
                            <div className='about__text'>
                                <strong>Country:</strong> {coffeeItem.country}
                            </div>
                            <div className='about__text'>
                                <strong>Descriction: </strong>
                                {coffeeItem.description}
                            </div>
                            <div className='about__price'>
                                <strong>
                                    Price:
                                </strong>
                                <span>
                                    {coffeeItem.price}
                                </span>
                            </div>
                        </div>
                        </div>
                    </div>
            </About>
            <Footer>
                <Navbar position='center' color='black'/>
                <Divider color='black'/>
            </Footer>
        </>
    )
}

export default Item