import React from 'react';
import Styled, { keyframes } from 'styled-components';
import Slider from 'react-slick';
import { Home_Explore_Background1, bg_gradient_top_pc } from '../../assets';
import { exploreData } from './ExploreData';
import left_arrow from '../../assets/left-arrow.png';
import right_arrow from '../../assets/arrow-point-to-right.png';
import circle from '../../assets/circle.png';
import plus from '../../assets/plus.png';
import './discover.css';

const MainDivWrapper = Styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 647px;
    background-size: auto 100%;
    background-position: center;
    background-repeat: no-repeat;
    background:url(${Home_Explore_Background1});
`;
const SpanWrapper = Styled.span`
    height: 150px;
    position: absolute;
    left: 0;
    width: 100%;
    background-size: 10px 100%;
    background-repeat: repeat-x;
    background:url(${bg_gradient_top_pc});
`;
const LinkTitlewrapper = Styled.a`
    color:#000 !important;
    font-size:32px;
    position:absolute;
    text-align:center;
    font-weight:bold;
    width:100%;
    z-index:11
    :hover {
        color:#162d9a !important;
        text-decoration:none;
    }
`;

const FadeInUp = keyframes`
 from {
        transform: translate3d(0,40px,0)
    }

    to {
        transform: translate3d(0,0,0);
        opacity: 1
    }
`;
const Spin = keyframes` 
        from { 
            transform: rotate(0deg); 
        } to { 
            transform: rotate(360deg); 
        }
`;

const SliderWrapper = Styled(Slider)`
    z-index:11;
    top: 6%;
   .slick-slide{
        transition: all 0.7s;
   }
  
    .slick-center {
         transform: scale(1.02);
         .MyCaption{
            animation-name: ${FadeInUp};
            animation-duration: 1s;
            animation-delay: 0.5s;
            animation-fill-mode: both;
         }
         a{
         :hover{
                img{
                    opacity:0.8;
                    transform: scale(1.2);
                }
                .ExWrapper {
                    opacity:1;
                }
                .mySpan{
                        ::after{
                               animation-name: ${Spin};
                               animation-duration: 1s;
                               animation-fill-mode: both;
                        } 
                }
            }
         }
    }
    .slick-slide:not(.slick-center) {
         transform: scale(0.85);
    }
    .slick-dots button{
        ::before{
            font-size:10px;
            color:#fff;
        }
    }
    .slick-dots .slick-active button::before{
        color:#fff!important;
    }
    
`;

const MainSliderWrapper = Styled.div`
    position: relative;
    top: 10%;
    z-index:11;
`;

const MyImageWrapper = Styled.div`
    margin: 0 9%;
    overflow:hidden;
`;

const Arrow = Styled.button`
::before {
    content:'';
    display: block;
    margin: auto;
    width: 14px;
    height: 26px;
    background:url(${props => props.arrow});
    color:#ffff;
    background-size: auto 100%;
    background-position: center;
    background-repeat: no-repeat;
}
`;

const MyCaptionWrapper = Styled.div`
  opacity: 0;
  display:block;
  margin-top:3%;
  text-shadow:1px 1px 10px #666;
`;

const LinkWrapper = Styled.a`
    display: block;
    position: relative;
    overflow: hidden;
`;

const Exploremorediv = Styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0,0,0,0.3);
    opacity: 0;
    transition: 0.8s opacity;
`;

const ExplorerSpan = Styled.span`
    width:106px;
    height:106px;
    display: inline-block;
    background-image: url(${circle});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    ::after {
    display: block;
    width: 100%;
    height: 100%;
    background-image: url(${plus});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    content: '';
    }
`;
const ExplorerTextWrapper = Styled.div`
    font-size:12px;
    letter-spacing: 0.34em;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    text-shadow: 2px 0 8px rgba(0,0,0,0.6), -2px 0 8px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.6), 0 -2px 8px rgba(0,0,0,0.6);
`;
export function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Arrow
      className={className}
      style={{
        ...style, width: '50px', height: '60px', display: 'block', top: '40%', right: '17.5%', zIndex: 22,
      }}
      onClick={onClick}
      arrow={props.arrow}
    />
  );
}

export function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Arrow
      className={className}
      style={{
        ...style, width: '50px', height: '60px', display: 'block', top: '40%', left: '17.5%', zIndex: 22,
      }}
      onClick={onClick}
      arrow={props.arrow}
    />
  );
}
class ExploreWidget extends React.Component {
  render() {
    const settings = {
      // className: 'MyClass',
      centerMode: true,
      centerPadding: '300px',
      adaptiveHeight: true,
      slidesToShow: 1,
      speed: 1000,

      // cssEase: "linear",
      dots: true,
      nextArrow: <SampleNextArrow arrow={right_arrow} />,
      prevArrow: <SamplePrevArrow arrow={left_arrow} />,

    };
    return (
      <div style={{
        width: '100%',
        position: 'relative',
        height: '700px',
      }}
      >
        <div style={{
          position: 'absolute', width: '100%', height: '647px', bottom: 0,
        }}
        >
          <LinkTitlewrapper>Explore # DoWhatYouCant</LinkTitlewrapper>
          <MainSliderWrapper>
            <SliderWrapper {...settings}>
              {
                            exploreData.map((x, i) => (
                              <div key={i}>
                                <div className="slide" key={i}>
                                  <MyImageWrapper>
                                    <LinkWrapper href={x.link}>
                                      <img
                                        key={i}
                                        style={{ transition: 'transform 0.5s,opacity 0.5s', opacity: '1', width: '100%' }}
                                        src={x.imageLink}
                                        alt="error"
                                      />
                                      <Exploremorediv className="ExWrapper">
                                        <div style={{
                                          display: 'flex',
                                          justifyContent: 'center',
                                          height: '100%',
                                          flexDirection: 'column',
                                          textAlign: 'center',
                                          alignItems: 'center',
                                        }}
                                        >
                                          <ExplorerSpan className="mySpan" />
                                          <ExplorerTextWrapper>
                                                    explore more
                                          </ExplorerTextWrapper>
                                        </div>
                                      </Exploremorediv>
                                    </LinkWrapper>
                                  </MyImageWrapper>
                                  <MyCaptionWrapper className="MyCaption">
                                    <h5 style={{ textAlign: 'center', color: 'white', fontSize: '12px' }}>{x.title1}</h5>
                                    <h3 style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>{x.title2}</h3>
                                  </MyCaptionWrapper>
                                </div>
                              </div>
                            ))
                        }
            </SliderWrapper>
          </MainSliderWrapper>
          <MainDivWrapper>
            <SpanWrapper />
          </MainDivWrapper>
        </div>
      </div>
    );
  }
}

export default ExploreWidget;
