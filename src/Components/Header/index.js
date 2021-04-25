import React, { Component } from 'react';
import styled from 'styled-components/macro';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import logo from '../../assets/svg-logo.svg';

const CustomHeaderWrapper = styled.div`
	margin: 0 auto;
	margin-left: 2%;
    margin-right: 2%;
    padding-left: 24px;
    padding-right: 24px;
    box-sizing: border-box;
    height:100%;
`;

const MainHeaderWraper = styled.div`
    border-bottom: 1px solid #dadada;
    min-height: 65px;
    height:65px;
    z-index: 999;
`;

const HeaderLogo = styled.a`
        top: 20px;
    left: 45%;
`;

class HeaderComponent extends Component {
  render() {
    return (
      <MainHeaderWraper className="position-relative">
        <CustomHeaderWrapper className="d-flex ">
          <HeaderLeft />
          <HeaderLogo className="position-absolute">
            <span>
              <img src={logo} alt="error" />
            </span>
          </HeaderLogo>
          <HeaderRight />
        </CustomHeaderWrapper>
      </MainHeaderWraper>
    );
  }
}

export default HeaderComponent;
