import React, { Component } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import {
  S10_feature, S10_left, S10_middle, S10_right,
} from '../assets';
import { FigureWrapper } from '../Containers/FeaturePage';

export default class CenterMode extends Component {
    state = {
      display: true,
      width: 600,
    };

    render() {
      return (
      <ParallaxProvider >
        <FigureWrapper className="container auto">
           <Parallax className="First" y={[ '3500px' ,'-10000px']} >
          <figure>
            <img src={S10_left} />
          </figure>
           </Parallax>
            <Parallax className="Second"  y={[ '3700px' ,'-3500px']}>
          <figure
          >
            <img src={S10_middle} />
          </figure>
            </Parallax>
               <Parallax className="Third"  y={[ '-1100px' ,'3500px']} >
          <figure>
            <img src={S10_right} />
          </figure>
           </Parallax>
        </FigureWrapper>
       </ParallaxProvider>
      );
    }
}
