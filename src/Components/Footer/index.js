import React from 'react';
import Styled from 'styled-components/macro';
import {
  SingleColumn, ColumnWrapper, CategoryHeader, SubCategory, SubCategoryWrapper,
  MainDropdownWrapper,
} from '../Header/HeaderDropDown/index';
import { footerdata, SocialIcon, bottomHeaderdata } from './FooterData';

const FoooterWrapper = Styled.div`
    min-height: calc(600px - 100px);
    // background:black;
`;

const MyArticle = Styled.article`
    column-count: ${props => (props.length ? '2' : '1')};
`;

class FooterComponent extends React.Component {
  render() {
    return (
      <FoooterWrapper>
        <div style={{
          height: 'auto',
          padding: '65px 118px 38px',
          background: '#f7f7f7',
        }}
        >
          <MainDropdownWrapper MyMargin>
            <ColumnWrapper>
              {footerdata && footerdata.map((x, i) => (
                <SingleColumn MyWidth={x.content.length > 6} key={i}>
                  <CategoryHeader>{x.header}</CategoryHeader>
                  <div>
                    <MyArticle length={x.content.length > 6}>
                      {x.content.map((dd, i) => (
                        <SubCategoryWrapper key={i}>
                          <SubCategory href={dd.link}>{dd.name}</SubCategory>
                        </SubCategoryWrapper>
                      ))}
                    </MyArticle>
                  </div>
                </SingleColumn>
              ))}
              <SingleColumn>
                <CategoryHeader>{SocialIcon.header}</CategoryHeader>
                <div style={{ display: 'inline-flex' }}>
                  {SocialIcon.content.map((dd, i) => (
                    <SubCategoryWrapper key={i} style={{ margin: '0 18px 18px 0' }}>
                      <SubCategory href={dd.link} background={dd.name} hoverImage={dd.nameHover}>{dd.name1}</SubCategory>
                    </SubCategoryWrapper>
                  ))}
                </div>
              </SingleColumn>
            </ColumnWrapper>
          </MainDropdownWrapper>
        </div>
        <div style={{ padding: '17px 118px 3px', height: 'auto', background: '#363636' }}>
          <div
            style={{
              // marginLeft: '4%',
              // marginRight: '4%',
              // paddingLeft: '24px',
              // paddingRight: '24px',
            }}
          >
            <div>
              {bottomHeaderdata.map((data, index) => (
                <span style={{
                  marginRight: '20px',
                  marginBottom: '10px',
                }}
                  key={index}
                >
                  <SubCategory href={data.link} style={{ color: 'white' }}>{data.name}</SubCategory>
                </span>
              ))}
            </div>
            <p style={{
              fontSize: '11px',
              fontWeight: 'normal',
              color: '#a6a6a6',
              lineHeight: '1.75',
              wordBreak: 'break-word',
            }}
            >
                  Samsung India encourages its customers for e-waste recycling.
              <br />
                  Please call 1800 40 SAMSUNG (7267864) or
              {' '}
              <a href="/" style={{ textTransform: 'uppercase', color: '#a6a6a6', textDecoration: 'underline' }}>click here</a>
              {' '}
                  for more details.
            </p>
            <p style={{
              fontSize: '11px',
              fontWeight: 'normal',
              color: '#a6a6a6',
              lineHeight: '1.75',
              wordBreak: 'break-word',
            }}
            >
                  This website is best viewed using Microsoft Internet Explorer 9 or higher, and/or latest version of Google Chrome and Mozilla Firefox browsers.
            </p>
          </div>
        </div>
      </FoooterWrapper>
    );
  }
}

export default FooterComponent;
