import React, { Component } from 'react';
import styled from 'styled-components';

import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';

import media from '../../utils/media';

const MainWrapper = styled.div`
  height: 7vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 2000;

  ::before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: #fff;

    opacity: ${({visibleMenu}) => visibleMenu ? 1 : 0};
    transition: opacity .3s;
    opacity: ${({a}) => a ? 0 : null};
  }
`;

const Wrapper = styled.div`
  width: 32px;
  height: 24px;
  position: relative;

  z-index: 3000;
`;

const OneElement = styled.div`
  width: 100%;
  height: 4px;
  background: black;
  border-radius: 50px;

  :first-child{
    transform: translateY(${({a}) => a ? 10 : 0}px) rotate(${({a}) => a ? 45 : 0}deg);
    margin-bottom: 6px;
  } 

  :nth-child(2){
    margin-bottom: 6px;
    opacity: ${({a}) => a ? 0 : 1};
  }

  :nth-child(3){
    transform: translateY(${({a}) => a ? -10 : 0}px) rotate(${({a}) => a ? -45 : 0}deg);
  }
  
  transition: transform .2s;
`;

const H1 = styled.h1`
  position: relative;
  color: ${colors.yellow};
  font-size: 1.7rem;
  font-weight: ${fonts.medium}; 
  z-index: 2000;
  margin-right: 10%;


  ${media.tablet`
    margin-right: 45%;
  `}
  
  transition: transform .2s .3s;
  transform: translateX(${({visibleMenu}) => visibleMenu ? 0 : -200}%);
  transform: translateX(${({a}) => a ? 0 : null}%);
`;

const B = styled.b`
  font-weight: ${fonts.bold};
`;

class MenuBurger extends Component{
  changeVisibleMenu = () => {
    if(this.props.visibleMenuLinks === false){
      this.setState({visibleMenuLinks: true});
      this.toParentVisibleLinks(true);
      this.toParent(true);
    }  else {
      this.setState({visibleMenuLinks: false});
      this.toParentVisibleLinks(false);
      this.toParent(false);
    }
  }

  toParent = (a) => {
    this.props.Parent(a);
  }

  toParentVisibleLinks = (a) => {
    this.props.VisibleToParent(a);
  }

  render(){

    const { visibleMenu, visibleMenuLinks } = this.props;

    return(
      <>
        <MainWrapper visibleMenu={visibleMenu} a={visibleMenuLinks} >
          <H1 visibleMenu={visibleMenu} a={visibleMenuLinks}><B>Kółko </B>informatyczne</H1>
          <Wrapper onClick={() => this.changeVisibleMenu()} >
            <OneElement a={visibleMenuLinks}/>
            <OneElement a={visibleMenuLinks}/>
            <OneElement a={visibleMenuLinks}/>
          </Wrapper>
        </MainWrapper>
      </>
    )
  }
 
}

export default MenuBurger;