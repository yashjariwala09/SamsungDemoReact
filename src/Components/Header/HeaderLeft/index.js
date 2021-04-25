import React, { Component } from 'react';
import styled from 'styled-components/macro';
import HeaderDropDown from '../HeaderDropDown';
import { LeftSectionDropDownData } from '../HeaderDropDown/DropdownConfig';

export const LiWrapper = styled.li`
    display: inline-block;
    position: relative;
    padding: 0 11px;
    color:black;
    font-size:14px;
    font-weight: bold; 
    line-height: 60px;
    height: 60px;
    text-transform:uppercase;
    color: ${props => (props.conditionalActive ? '#162d9a;' : 'black')};
    ::after {
    content: '';
    display: block;
    margin: auto;
    width: ${props => (props.conditionalActive ? '100%' : '0')};
    height: 10%;
    border-bottom:  ${props => (props.conditionalActive ? '4px solid #162d9a;' : 'none')};
    transition: width .5s ease;
}
:hover{
    color:#162d9a;
    cursor:pointer;
}
 
:hover:after {
    width: 100%;
    border-bottom: 4px solid #162d9a;
}
 
`;

export const NavList = styled.ul`
    padding-inline-start: 0px;
    margin: auto;
    float: left;
    height:100%;
    margin-top: 0 !important;
    margin-bottom: 0 !important;
`;

export const LiDivWrapper = styled.div`
    float: left;
    &:hover .headerDiv {
        cursor:default;
        display:${props => props.display || 'block'};
    }
`;

export const SimpleLink = styled.li`
    display: inline-block;
    position: relative;
    padding: 0 11px;
    color:black;
    font-size:14px;
    font-weight: bold; 
    line-height: 60px;
    height: 60px;
    text-transform:uppercase;
    color: ${props => (props.conditionalActive ? '#162d9a;' : 'black')};
    a{
    color:${props => (props.conditionalActive ? '#162d9a;' : 'black')};
    }
    :hover a{
    cursor:pointer;
    color:#162d9a;
    }
    :hover{
    cursor:pointer;
    }
`;

export const LinkSpan = styled.i`
    border: solid ${props => (props.active ? '#162d9a' : 'black')};
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    margin: 0 0 2px 2px;
     transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`;

class HeaderLeft extends Component {
    state = {
      dropdownId: '',
      prevdropdownId: '0',
      display: 'none',
    }

    dropDown=(e, a, b) => {
      const id = e.target.id ? e.target.id : a;
      this.setState({ dropdownId: id, data: id, display: (b ? 'none' : 'block') });
    };

    hideDropDown=(e) => {
      const { dropdownId } = this.state;
      this.setState({ prevdropdownId: dropdownId, dropdownId: '' });
    };

    render() {
      const {
        dropdownId, prevdropdownId, data, display,
      } = this.state;
      return (
        <div style={{ height: '100%' }}>
          <NavList onMouseLeave={this.hideDropDown}>
            <LiDivWrapper display={display}>
              {LeftSectionDropDownData.map((data, index) => (
                (data.link && data.NoDropDown)
                  ? (
                    <SimpleLink key={index} id={data.id} onMouseEnter={e => this.dropDown(e, null, data.NoDropDown)}>
                      <a href={data.link}>
                        {data.category}
                      </a>
                      <LinkSpan active={dropdownId === data.id} />
                    </SimpleLink>
                  ) : (
                    <LiWrapper key={index} id={data.id} onMouseEnter={this.dropDown} conditionalActive={dropdownId === data.id}>
                      {data.category}
                    </LiWrapper>
                  )))}
              <HeaderDropDown
                selectedDropdown={dropdownId}
                prevDropDown={prevdropdownId}
                dropDown={this.dropDown}
                DropDownData={LeftSectionDropDownData}
                data={data}
              />
            </LiDivWrapper>
          </NavList>
        </div>
      );
    }
}

export default HeaderLeft;
