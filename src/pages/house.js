import React from 'react';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Divider from '../components/UI/Divider/Divider';
import Button from '../components/UI/Button/Button';
import Section from '../components/Section/Section';
import List from '../components/List/List';


const House = (props) => {

    const onClickHandler = () => {
        return props.history.push('/our-coffee')
    }

    return (
       <>
            <Navbar position='left' color='white'/>
            <Section
                color='white'
                size='big'
                background={process.env.PUBLIC_URL + 'img/homebg.jpg'}
            >
                <h1>
                    Everything You Love About Coffee
                </h1>
                <Divider color='white'/>
                <div className='section__text'>
                    <span>
                        We makes every day full of energy and taste
                    </span>
                    <span>
                        Want to try our beans?
                    </span>
                </div>
                <Button title={'More'} onClick={onClickHandler}/>
            </Section>
            <About>
                <div>
                    <h2>
                        About Us
                    </h2>
                    <Divider color='black'/>
                    <div>
                        <div className='about__text'>
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. <span> At it went is song that held help face.</span>
                        </div>
                        <div className='about__text'>
                            Now residence dashwoods she excellent you. Shade being under his bed her, Much    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.
                        </div>
                    </div>
                </div>
            </About>
            <Section 
                color='black'
                size='small'
                background={process.env.PUBLIC_URL + 'img/best-bg.jpg'}
            >
                <h2>
                    Our best
                </h2>
                <List
                    cardBackground='transparent'
                    selector='best'
                />
            </Section>
            <Footer>
                <Navbar position='center' color='black'/>
                <Divider color='black'/>
            </Footer>
       </>
   )
}

export default House;