import React from 'react';
import Styled from 'styled-components/macro';

const CardWrapper = Styled.div`
    :hover .EventImg img{
        transform: scale(1.1);
    }
    :hover p {
        font-weight:bold;
    }
`;

const ButtonWrapper = Styled.button`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    display: block;
    width: 100%;
    z-index: 11;
    text-align: center;
    border:0;
    background:transparent;
    ::after {
        
        display: inline-block;
        width: 123px;
        height: 123px;
        background:url(${props=>props.buttonImage||"none"});
        transition: background 1s ease-in-out;
        background-size: 100% auto;
        content: '';
    }
    
    :hover :after {
    background:URL(${props=>props.buttonHoverImage||"none"});
    }
`;


const LinkWrapper = Styled.a`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    display: block;
    width: 100%;
    z-index: 11;
    text-align: center;
    border:0;
    background:transparent;
    
`;

const ImageWrapper = Styled.div`
    overflow:hidden;
    img{
    transition: 1s transform;
    }
`;

const DescrptionWrapper = Styled.p`
    position: absolute;
    bottom: 20px;
    bottom: 1.38889vw;
    right: 0;
    left: 0;
    padding: 0px 10px;
    font-size: 18px;
    font-weight: normal;
    text-align: center;
    z-index: 10;
    margin-bottom:0;
    color:#fff;
    color: #fff;
    text-shadow: 0 0 10px #555, 0 0 5px #333;
`;
class EventCard extends React.Component{
    render(){
        const { isButton, ImageLink, buttonImage, className, buttonHoverImage, pageLink, description } = this.props;
        return(
            <CardWrapper className={className} >
                <DescrptionWrapper>{description}</DescrptionWrapper>
                <ImageWrapper className="EventImg">
                    <img src={ImageLink} alt="error"/>
                </ImageWrapper>
                <div>
                    {
                        isButton ? <ButtonWrapper buttonImage={buttonImage} buttonHoverImage={buttonHoverImage} />:
                            <LinkWrapper href={pageLink}></LinkWrapper>
                    }
                </div>
            </CardWrapper>
        )
    }
}

export default EventCard;