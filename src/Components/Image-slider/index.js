import React from 'react';
import styled from 'styled-components/macro';
import Slider from 'react-slick';
import { SliderData } from './SliderDataConfig';

const SliderMainWrapper = styled.div`
    width:100%;
`;

const Arrow = styled.div`
::before {
    display:none
}
`;

export function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Arrow
      className={className}
      style={{
        ...style, display: 'block', right: '2%', zIndex: 1,
      }}
      onClick={onClick}
    >
      <i className="fa fa-angle-right" style={{ fontSize: '80px', color: '#e6e6e6' }} />
    </Arrow>
  );
}

export function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Arrow
      className={className}
      style={{
        ...style, display: 'block', left: '2%', zIndex: 1,
      }}
      onClick={onClick}
    >
      <i className="fa fa-angle-left" style={{ fontSize: '80px', color: '#e6e6e6' }} />
    </Arrow>
  );
}
class MainSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <SliderMainWrapper>
        <Slider {...settings}>
          {SliderData.map((data, index) => (
            <div key={index}>
              <img src={data.ImageLink} style={{ width: '100%', position: 'relative' }} alt="error" />
              <div style={{
                position: 'absolute', lineHeight: 2, top: data.position.top, left: data.position.left,
              }}
              >
                {data.content.map((content, index2) => {
                  if (content.contentType) {
                    return (
                      <React.Fragment key={index2}>
                        <p
                          key={index2}
                          style={{
                            color: content.style.Color,
                            fontSize: content.style.fontSize,
                            fontWeight: 'bold',
                          }}
                        >
                          {content.text}
                        </p>
                        { content.SubContent && (
                        <span style={{ lineHeight: 0.2 }}>
                          {
                                                  content.SubContent.map((subContent, index3) => (
                                                    <p key={index3} style={{ color: subContent.style.Color, fontSize: subContent.style.fontSize }}>
                                                      {subContent.text}
                                                    </p>
                                                  ))
                                              }

                        </span>
                        ) }
                      </React.Fragment>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          ))}
        </Slider>
      </SliderMainWrapper>
    );
  }
}
export default MainSlider;
