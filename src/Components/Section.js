// contentsList만들기

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const Container = styled.div`
  :not(:last-child) {
  margin-bottom:50px;
  }
`;

const Title = styled.span`
  font-size: 16px;
  font-weight:600;
`;

const Grid = styled.div`
  margin-top:25px;
  display:grid;
  grid-template-columns:repeat(auto-fill, 125px);
  grid-gap:25px;
`;

const Section  = ({title, children}) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
    {/*title은 부모의 title prop을 받아오지만*/}
    {/*여기서 children은 부모의 props가 아닌 부모의 본 section컴포넌트 태그사이의 data?를 그대로 받아온다!*/}
  </Container>

);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Section