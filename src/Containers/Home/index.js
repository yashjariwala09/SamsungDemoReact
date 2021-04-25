import React from 'react';
import styled from 'styled-components/macro'
import ImageSlider from '../../Components/Image-slider';
import FeaturedProduct from '../../Components/FeturedProduct'
import EventWidget from '../../Components/Events';
import ExploreWidget from '../../Components/Explore';
import SearchBox from '../../Components/Search';
// import CenterMode from '../../Components/temp'
const MaindivWraper = styled.div`
    margin:0 3%;
`;

class HomeContainer extends React.Component {
    render(){
        return(
            <MaindivWraper >
                <ImageSlider/>
                <EventWidget/>
                <FeaturedProduct/>
                <ExploreWidget/>
                <div style={{margin:"7% 0 7% 0",textAlign:"center"}}>
                    <h2 style={{fontWeight:"bold",color:"#000",fontSize:"32px",marginBottom: "2%"}}>Can we help find anything?</h2>
                    <SearchBox choice={1} />
                </div>
            </MaindivWraper>
        );
    }
}
export default HomeContainer;