import React from 'react';
import styled from 'styled-components';

import { StaticQuery, graphql } from "gatsby";

import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts'; 

import Articles from '../Articles/Articles';

const MainWrapper = styled.div`
  width: 100%;
`;

const H1 = styled.div`
  color: ${colors.yellow};
  font-size: 2rem;
  font-weight: ${fonts.medium};
  margin: 8vh 5% 1%;
`;

const P = styled.p`
  font-weight: ${fonts.regular};
  width: 92%;
  margin: 0 4%;
`;

const CoRobimy = () => (
  <StaticQuery
    query={graphql`
      query{
        inf{
          coRobimies{
            id
            tytul
            wiecej
          }
        }
      }
    `}
    
    render={({inf : {coRobimies}}) => (
      <>
        <MainWrapper className={'sec2'}>
          <H1>{coRobimies[0].tytul}</H1>
          <P>{coRobimies[0].wiecej}</P>
          <Articles></Articles>
        </MainWrapper>
      </>
    )}
  />
)

export default CoRobimy;

