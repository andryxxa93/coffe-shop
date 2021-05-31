import React from 'react';
import { withRouter } from 'react-router';
import './card.scss';
import styled, { keyframes } from 'styled-components';
import { fadeInLeft } from 'react-animations';

const fadeInAnimation = keyframes`${fadeInLeft}`;

const BouncyDiv = styled.div`
  animation: 1s ${fadeInAnimation};
`;

const Card = ({image, name, price, country, background = 'white', history, id}) => {
    const onClickHandler = () => {
        history.push(`/our-coffee/${id}`);
    }

    return (
        <BouncyDiv>
            <div onClick={onClickHandler} className={`card card_${background}`}>
                <img src={`./img/${image}`} alt='coffee'/>
                <div className='card__title'>
                    {name}
                </div>
                <div className='card__country'>
                    {country}
                </div>
                <div className='card__price'>
                    {price}
                </div>
            </div>
        </BouncyDiv>
    )
}

export default withRouter(Card);