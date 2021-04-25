import React from 'react';
import Styled from 'styled-components/macro';

const MainCardWrapper = Styled.div`
    width:${props => props.width || ''};
    height:${props => (props.dual ? '46%' : '')};
    transition: box-shadow 0.4s ease-in-out ,background-color 0.4s ease-in-out,all 1s ease, .48s transform linear ;
    background-color:#f7f7f7;
    :hover {
        background-color:#fff;
        box-shadow:2px 0.917em 1.94em 0.04em rgba(0,0,0,0.25);  
      }
`;
const CardWrapper = Styled.a`
    width:${props => props.width || ''};
    height:${props => (props.dual ? '46%' : '')};  
    color:#000;
     //transition: box-shadow 0.4s ease-in-out ,background-color 0.4s ease-in-out,all 1s ease, .48s transform linear ;
    background-color:#f7f7f7;
    :hover {
        color:#000;
        text-decoration: none;
        cursor:pointer;
        // background-color:#fff;
        // box-shadow:2px 0.917em 1.94em 0.04em rgba(0,0,0,0.25);  
        }
      
      ${(props) => {
    if (props.dual) {
      return '&:hover .Myimg2 {opacity:1;} &:hover .Myimg1 {opacity:0;}';
    }
    return ':hover .xyz{transform: scale(1.1);}';
  }}; 
    .singleimage{
        position:absolute;
        bottom: 10%;
        width: 100%;
        text-align: center;
        line-height: 50px;
    }
 
    .singleimage .myText {
        font-size:28px;
    }
    .multipleimage{
        text-align: center;
         line-height: 35px;
    }
   
   :hover .product-btn {
        transform: translate(0px,-20px) !important;
        opacity:1 !important;
   }
   
   .Myimg2 {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
   }
`;

const ImageWrapper = Styled.div`
    width:100%;
    // max-height:${props => (props.dual ? '188px' : '100%')};
    transition: .48s transform linear ;
    position:relative;
`;

const MyImage = Styled.span`
    width:100%;
    height:100%;
    padding: ${props => (props.dual ? '10%' : '0')};
    display:${props => (props.display ? 'block' : 'block')};
    opacity:${props => (props.display ? '1' : '0')};
    transition: .45s opacity ease-in-out;
`;

const TextWrapper = Styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    padding-bottom: 20px;
`;

const ButtonWrapper = Styled.button`
        border-radius: 25px !important;
        padding: 8px 25px !important;
        transition: transform .70s,opacity .70s !important;
        opacity:0 !important;
        border:1px solid #555 !important;
        color:#555 !important;
        font-weight:bold !important;
        text-transform:uppercase !important;
        font-size:14px !important;
        :hover {
           color:#fff !important;
           background-color:#555 !important;
        }
`;

class Card extends React.Component {
  render() {
    const { imageLink, text, buttonText } = this.props;
    return (
      <MainCardWrapper style={{ marginBottom: '31px' }} dual={imageLink.length === 2}>
        <CardWrapper
          title={buttonText}
          href="#"
          style={{ marginBottom: '31px' }}
          dual={imageLink.length === 2}
        >
          <ImageWrapper className="xyz" dual={imageLink.length === 2}>
            {imageLink.map((x, i) => (i === 1
              ? (
                <MyImage key={i} className="Myimg2 temp" dual={imageLink.length === 2}>
                  <img style={{width:'100%'}} src={x} alt="error" />
                </MyImage>
              )
              : (
                <MyImage key={i} className="Myimg1 temp" dual={imageLink.length === 2} display="true">
                  <img style={{width:'100%'}} src={x} alt="error" />
                </MyImage>
              )
            ))}

          </ImageWrapper>
          <div className={imageLink.length === 1 ? 'singleimage' : 'multipleimage'}>
            <TextWrapper className="myText">{text}</TextWrapper>
            <ButtonWrapper type="button" className="btn product-btn btn-outline-secondary">{buttonText}</ButtonWrapper>
          </div>
        </CardWrapper>
      </MainCardWrapper>
    );
  }
}

export default Card;
