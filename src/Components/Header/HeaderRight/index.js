import React, { Component } from 'react';
import styled from 'styled-components/macro';
import HeaderDropDown from '../HeaderDropDown';
import { RightSectionDropDownData } from '../HeaderDropDown/DropdownConfig';
import {
  NavList, LiDivWrapper, SimpleLink, LiWrapper, LinkSpan,
} from '../HeaderLeft';
// import Search from '../../Search/index';

const NewLiDivWrapper = styled(LiDivWrapper)`
    float:right;
`;

const NewNavList = styled(NavList)`
    float:right;
`;

class HeaderRight extends Component {
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
        <div className="ml-auto">
          <NewNavList onMouseLeave={this.hideDropDown}>
            <NewLiDivWrapper display={display}>
              {RightSectionDropDownData.map((data, index) => (
                (data.link && data.NoDropDown)
                  ? (
                    <SimpleLink key={index} id={data.id} onMouseEnter={e => this.dropDown(e, null, data.NoDropDown)}>
                      <a href={data.link}>
                        {data.category}
                      </a>
                      <LinkSpan display={dropdownId === data.id ? 'true' : 'false'} />
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
                DropDownData={RightSectionDropDownData}
                data={data}
              />
            </NewLiDivWrapper>
          </NewNavList>
          {/* <ul> */}
          {/* <li> */}
          {/* <Search choice={2} /> */}
          {/* </li> */}
          {/* </ul> */}
        </div>
      );
    }
}

export default HeaderRight;
