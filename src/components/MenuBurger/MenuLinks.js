import React, { Component } from 'react';
import styled from 'styled-components';
import NavNames from '../../settings/NavNames';
import { colors } from '../../utils/colors';
import { circleInMenu } from '../../settings/circleInMenu';
import media from '../../utils/media';

const MainWrapper = styled.div`
  width: 100%;
  height: 101vh;
  background: #fff;
  position: fixed;
  top: 0;
  right: -100%;
  z-index: 1500;

  transform: translateX(${({visibleMenuLinks}) => visibleMenuLinks ? -100 : 0}%);
  transition: transform .3s;

  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  font-size: 1.4rem;

  ${media.tablet`
    font-size: 1.8rem;
  `}

  ${media.desktop`
    display: none;
  `}
`;


const OneElement = styled.p`
  position: relative;
  margin: 0 0 10vh 10%;
  padding: 0;
  font-size: ${({theme}) => theme.size.m};

  ::after{
    content: '';
    height: 1px;
    position: absolute;
    width: 50vw;
    top: 110%;
    left: 0;
    background: ${({whereWeAreHere}) => whereWeAreHere ? '#FFC107' : 'black'};
  }
`;

const Circle = styled.div`
  border-radius: 50px;
  height: 5vh;
  width: 5vh;
  opacity: .5;
  background: ${colors.yellow};
  position: absolute;
  top: ${({posTop}) => posTop};
  left: ${({posLeft}) => posLeft};
`;

class MenuLinks extends Component{
  toParent = (number) => {
    this.props.clic(number)
  }

  render(){

    const { visibleMenuLinks, whereWeAreHere } = this.props;
    
    return(
      <>
        <MainWrapper visibleMenuLinks={visibleMenuLinks}>
          {
            NavNames.map((element, index) => (
              <OneElement key={`menu${index}`} onClick={() => this.toParent(index)} whereWeAreHere={index + 1 === whereWeAreHere ? true : false}>{element}</OneElement>
            ))
          }
          {
            circleInMenu.map((element, index) => (
              <Circle key={`circleInMenu${index}`} posTop={element.posCirTop} posLeft={element.posCirLeft}/>
            ))
          }
        </MainWrapper>
      </>
    )
  }
};

export default MenuLinks;