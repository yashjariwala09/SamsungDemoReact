import React, { Component } from 'react';
import Styled from 'styled-components/macro';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import SecondaryNav from '../../Components/SecondaryNav';
import {
  S10_feature, S10_left, S10_middle, S10_right,
} from '../../assets';
import { S10Data } from './SecondaryNavData';
import Temp from '../../Components/temp';

export const FigureWrapper = Styled.div`
    overflow: visible;
    z-index: 0;
    position: static;
    width: 1200px;
    height: 1400px;
    margin: 0 auto;
    transform: scale(1, 1) translate3d(0px, 0px, 0px);
    .First{
    bottom: 150%;
    left: 0;
    position: absolute;
    height: auto;
    }
    
    .Second{
        top: 50%;
        left: 326px;
        position: absolute;
        height: auto;
    }
    
    .Third{
        right: 0;
        bottom: 150%;
        position: absolute;
        height: auto;
    }
`;

const MyFigure = Styled.figure`
    transform:translate3d(0px, 0px, 0px);
    position: absolute;
    height: auto;  
  img{
        width: auto;
  }
`;
class FeaturePage extends Component {
  componentDidMount() {
      // debugger;
    window.addEventListener('scroll', () => {
      const leftItem = document.getElementById('item0');
      const rightItem = document.getElementById('item1');
      leftItem.style.transform = `translate3d(0px, ${window.pageYOffset}px, 0px);`;
      rightItem.style.transform = `translate3d(0px, ${window.pageYOffset}px, 0px);`;
    });
  }

  render() {
    return (
      <div>
        <SecondaryNav {...S10Data} />
        <div><img src={S10_feature} width="100%" alt="error" /></div>
        <section style={{
          position: 'relative', overflow: 'hidden', zIndex: '1', background: 'black',
        }}
        >
          <article style={{
            margin: '0 auto',
            position: 'relative',
            left: '0',
            right: '0',
            top: '0',
            bottom: '0',
            height: 2000,
          }}
          >
            {/* <Temp/> */}
            <FigureWrapper className="container auto">
              <MyFigure className="First" id="item0">
                <img src={S10_left} />
              </MyFigure>
              <MyFigure className="Second" id="item1">
                <img src={S10_middle} />
              </MyFigure>
              <MyFigure className="Third">
                <img src={S10_right} />
              </MyFigure>
            </FigureWrapper>
          </article>
        </section>
      </div>
    );
  }
}

export default FeaturePage;
