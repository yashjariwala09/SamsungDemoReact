import React from 'react';
import styled from 'styled-components/macro';

const HeaderDropDownWrapper = styled.div`
    display: ${props => (props.display ? props.display : 'none')};
    height: 50px;
    margin-top: 5px;
    border-bottom: 1px solid #dadada;
    // border-top: 1px solid #dadada;
    // padding-bottom:25px;
    position: absolute;
    background-color:white;
    :hover{
    cursor:pointer;
    }
    width:100%;
    min-height: 350px;
    left: 0;
    z-index: 900;
    // flex:1;
`;

// width: 25%;
// margin-top: 31px;
// padding-right: 6.115%;
export const SingleColumn = styled.div`
    float:left;
    width: ${props => (props.MyWidth ? '50%' : '25%')};
    margin-top: 31px;
    padding-right: 6.115%;
`;

export const ColumnWrapper = styled.div`
    flex:3;
    height:100%;
    float:left;
`;

export const MainDropdownWrapper = styled.div`
    height:100%;
    display:flex;
    margin-left: ${props => (props.MyMargin ? '0' : '4%')};
    margin-right: ${props => (props.MyMargin ? '0' : '4%')};
    padding-left: ${props => (props.MyMargin ? '0' : '24px')};
    padding-right: ${props => (props.MyMargin ? '0' : '24px')};
    padding-bottom: ${props => (props.MyMargin ? '0' : '10px')};
    flex:1
`;

export const CategoryHeader = styled.p`
    margin-bottom: 10px;
    font-size: 16px;
    color: #000;
    font-weight:bold;
    text-transform:uppercase;
`;
export const SubCategory = styled.a`
    line-height: ${props => (props.background ? '999px' : '20px')};
    display: inline-block;
    overflow: hidden;
    font-size: 14px;
    color: #000;
    width: ${props => (props.background ? '30px' : 'auto')};
    height: ${props => (props.background ? '30px' : 'auto')};
    transition: color 0s;
    background-image:url(${props => props.background || 'transparent'});
    background-size: 100%;
    :hover{
        // filter: brightness(0.2) sepia(1) hue-rotate(180deg) saturate(5);
        background-image:url(${props => props.hoverImage || 'transparent'});
        color: #1428a0;
        text-decoration: underline;
    }
`;
export const SubCategoryWrapper = styled.div`
    margin-bottom: 7px;
`;

// const
const BannerWrapper = styled.div`
    flex:1;
    height:100%;
    overflow: hidden;
    position: relative;
    float: right;
    // width: 280px;
    margin-top: 8px;
    padding-bottom: 8px;
`;
const BannerHeaderWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    padding: 0 12px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
`;

const ImageTitleWrapeer = styled.div`
max-height: 44px;
    padding-top: 6px;
    color: #000;
    font-size: 20px;
    font-weight: bold;
    line-height: 22px;
    display: block;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;`;

const SpanWraper = styled.span`
    display: inline-block;
    min-width: 94px;
    height: 22px;
    padding: 0 13px;
    border: 1px solid #000;
    -webkit-border-radius: 11px;
    border-radius: 11px;
    color: #000;
    font-size: 9px;
    font-weight: bold;
    line-height: 22px;
    text-transform: uppercase;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: background .3s, color .3s;
    transition: background .3s, color .3s;
`;
const ImageOver = styled.a`
    :hover .learnMoreWrapper {
        background-color:black;
        color:white;
    }
`;

export default class HeaderDropDown extends React.PureComponent {
  render() {
    const {
      selectedDropdown, prevDropDown, data, DropDownData,
    } = this.props;
    const subCategory = DropDownData.find(d => d.id === data) || {};
    console.log('render called');
    const componentId = selectedDropdown || prevDropDown;
    return (
      <HeaderDropDownWrapper
        className="headerDiv"
        id={componentId}
        onMouseOver={e => this.props.dropDown(e, componentId)}
      >
        <MainDropdownWrapper>
          <ColumnWrapper>
            {subCategory.columns && subCategory.columns.map((column, index) => (
              <React.Fragment key={index}>
                <SingleColumn key={index}>
                  <CategoryHeader>{column.header}</CategoryHeader>
                  <div>
                    {column.content.map((dd, i) => (
                      <SubCategoryWrapper key={i}>
                        <SubCategory href={dd.link}>{dd.name}</SubCategory>
                      </SubCategoryWrapper>
                    ))}
                  </div>
                </SingleColumn>
                {/* <div></div> */}
              </React.Fragment>
            ))}
          </ColumnWrapper>
          {subCategory && subCategory.promotionBanner && (
          <BannerWrapper>
            <ImageOver href={subCategory.promotionBanner && subCategory.promotionBanner.link
              ? subCategory.promotionBanner.link : ''}
            >
              <figure>
                <img
                  style={{ display: 'block', margin: 'auto' }}
                  src={subCategory.promotionBanner && subCategory.promotionBanner.imageLink
                    ? subCategory.promotionBanner.imageLink : ''}
                  alt={subCategory.promotionBanner && subCategory.promotionBanner.alt
                    ? subCategory.promotionBanner.alt : 'Error'}
                />
              </figure>
              <BannerHeaderWrapper>
                <div style={{ paddingTop: '25px', textAlign: 'center' }}>
                  <ImageTitleWrapeer>
                    {subCategory.promotionBanner && subCategory.promotionBanner.name
                      ? subCategory.promotionBanner.name : ''}
                  </ImageTitleWrapeer>
                </div>
                <div style={{ paddingTop: '13px', textAlign: 'center' }}>
                  <SpanWraper className="learnMoreWrapper">Learn More</SpanWraper>
                </div>
              </BannerHeaderWrapper>
            </ImageOver>
          </BannerWrapper>
          )}
        </MainDropdownWrapper>
      </HeaderDropDownWrapper>
    );
  }
}
