import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Divider from '../components/UI/Divider/Divider';
import About from '../components/About/About';
import List from '../components/List/List';
import Footer from '../components/Footer/Footer';
import Section from '../components/Section/Section';

const Coffee = (props) => {

    return (
        <>
            <Navbar position='left' color='white'/>
            <Section
                color='white'
                size='small'
                background={process.env.PUBLIC_URL + 'img/coffebg.jpg'}
            >
                    <h1>
                        Our Coffee
                    </h1>
            </Section>
            <About>
                    <div className='about__grid'>
                    <div className='about__photo'>
                        <img src='./img/woman.png' alt='woman'/>
                    </div>
                    <div>
                    <h2>
                            About our beans
                        </h2>
                        <Divider color='black'/>
                        <div>
                            <span className='about__text'>
                                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            </span>
                            <span className='about__text'>
                                Afraid at highly months do things on at. Situation recommend objection  do intention
                                so questions.
                                <span>
                                    As greatly removed calling pleased improve an. Last ask him cold feel
                                    met spot shy want. Children me laughing we prospect answered followed. At it went
                                    is song that held help face.
                                </span>
                            </span>
                        </div>
                    </div>
                    </div>
            </About>
            <List
                divider
                filter
            />
            <Footer>
                <Navbar position='center' color='black'/>
                <Divider color='black'/>
            </Footer>
        </>
    )
}

export default Coffee