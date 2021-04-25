import React from 'react';
import Styled from 'styled-components';
import Slider from 'react-slick';
import Card from '../Cards';
import { a } from './DataConfig';

const NavItem = Styled.p`
    margin:0 2%;
    font-size:32px;
    color:${props => (props.isActive ? '#000' : '#949494')};
    font-weight:bold;
    ::after {
    content: '';
    display: block;
    margin: auto;
    width: ${props => (props.isActive ? '100%' : '0')};
    height: 10%;
    border-bottom:  ${props => (props.isActive ? '3px solid #000;' : 'none')};
    transition: width .5s ease;
}
    :hover {
        color:#000;
        cursor:pointer;
    }
`;
const SliderWrapper = Styled(Slider)`
    img{
        display:"";
    }
`;
class FeaturedProduct extends React.Component {
    state = {
      slideIndex: 0,
      updateCount: 0,
    };

    render() {
      const { slideIndex } = this.state;
      const settings = {
        accessibility: false,
        dots: false,
        draggable: false,
        infinite: true,
        speed: 500,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: () => this.setState(state => ({ updateCount: state.updateCount + 1 })),
        beforeChange: (current, next) => this.setState({ slideIndex: next }),
      };
      return (
        <div style={{ paddingTop: '72px' }}>
          <div style={{
            width: '100%', justifyContent: 'center', display: 'inline-flex', marginBottom: '1%',
          }}
          >
            {a && a.map((x, i) => (
              <NavItem
                key={i}
                id={i}
                value={i}
                onClick={e => this.slider.slickGoTo(e.target.id)}
                isActive={slideIndex === i}
              >
                {x.navtitle}
              </NavItem>
            ))}
          </div>

          <SliderWrapper ref={slider => (this.slider = slider)} {...settings}>
            {a && a.map((x, i) => (
              <React.Fragment key={i}>
                <div key={i} id={i} className="row" style={{ margin: '0 auto' }}>
                  {x.colnmsData.map((y, i) => (
                    <div key={i} className={y.length === 1 ? 'col-lg-6 mt-3' : 'col-lg-3 mt-3'}>
                      {y.map((z, i) => (
                          <Card {...z} key={i} />
                        ))}
                    </div>
                  ))}
                </div>
              </React.Fragment>
            ))}
          </SliderWrapper>

        </div>

      );
    }
}

export default FeaturedProduct;
