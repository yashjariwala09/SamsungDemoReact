import React from 'react';
import Styled from 'styled-components/macro';


const TitleWrapper = Styled.div`
    display: block;
    color: #ffffff;
    font-weight: bold;
    line-height: 50px;
    font-size: 20px;
    // margin : 0 auto;
    float :left;
`;

const ButtonWrapper = Styled.div`
    float:right;
`;

const MyButton = Styled.a`
    display:inline-block;
    color: ${props => props.MyButtonColor || 'black'}!important;
    text-transform:uppercase;
    font-weight: bold;
    font-size:  14px;
    width: 170px;
    height: 50px;
    line-height: 50px;
    background:${props => props.MyButtonBackground || 'white'}!important;
    padding: 0 10px;
    text-align: center;
    vertical-align: middle;
    box-sizing: border-box;
    margin-left: 5px;
    :hover {
        text-decoration:none;
    }
`;

class TopNav extends React.Component {
  render() {
    const { Title, Button = [] } = this.props;
    return (
      <div style={{
        background: '#202425', margin: '0 auto', display: 'flow-root', maxHeight: '50px',
      }}
      >
        <div style={{ margin: '0 2%', padding: '0 32px' }}>
          <TitleWrapper>
            {Title}
          </TitleWrapper>
          <ButtonWrapper>
            {Button.map((ButtonData, i) => (
              <MyButton key={i} href={ButtonData.link} MyButtonColor="white" MyButtonBackground="#0074c2">
                {ButtonData.name}
              </MyButton>
            ))}
          </ButtonWrapper>
        </div>
      </div>
    );
  }
}
export default TopNav;
