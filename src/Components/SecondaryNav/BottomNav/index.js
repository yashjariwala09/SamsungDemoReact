import React from 'react';
import Styled from 'styled-components/macro';

const BottomNavWrapper = Styled.div`
    background:#141414;
`;

const MyUnorderdlist = Styled.ul`
    position:relative;
    list-style-type:none;
    padding: 0 15px;
    margin: 0 2%;
    display: inline-flex;
    font-size: 14px;
    transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);
    transition-duration: 0ms;
    transform: translate(0px, 0px) translateZ(0px)
`;

const ListWrapper = Styled.li`
    color:white;
    height: 35px;
    font-weight: bold;
`;

const MylinkWrapper = Styled.a`
    color:white !important;
    padding: 0 20px;
    line-height: 36px;
    min-height: 35px;
    font-size: 13px;
    display:block;
    text-transform:uppercase;
    :hover{
        text-decoration:none;
    }
`;

const Activediv = Styled.div`
    position:absolute;
    bottom: 0px;
    width: ${props => props.myDivWidth || '79'}px;
    height: 3px;
    background: #0073c3;
    transition:0.3s transform , 0.3s width cubic-bezier(0.1, 0.57, 0.1, 1);
    transform: translate3d(${props => props.translateValue || '20'}px, 0px, 0px)
`;

class BottomNav extends React.Component {
    state={
      CurrenttranslateValue: '20',
      myDivWidth: 80,
    }

    temp = (e) => {
      let { myDivWidth } = this.state;
      myDivWidth = e.target.offsetWidth - 39;
      this.setState({ CurrenttranslateValue: (e.target.offsetLeft + 5), myDivWidth });
    }

    MouseOutEvent = () => {
      this.setState({ CurrenttranslateValue: 20, myDivWidth: 80 });
    }

    render() {
      const { CurrenttranslateValue, myDivWidth } = this.state;
      const { bottomNav = [] } = this.props;
      return (
        <BottomNavWrapper>
          <MyUnorderdlist>
            {bottomNav.map((BottomData, i) => (
              <ListWrapper key={i}>
                <MylinkWrapper href={BottomData.link} onMouseOver={this.temp} onMouseOut={this.MouseOutEvent}>{BottomData.name}</MylinkWrapper>
              </ListWrapper>
            ))}
            <Activediv translateValue={CurrenttranslateValue} myDivWidth={myDivWidth} />
          </MyUnorderdlist>
        </BottomNavWrapper>
      );
    }
}

export default BottomNav;
