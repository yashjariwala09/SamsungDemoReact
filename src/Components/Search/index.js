import React from 'react';
import Styled from 'styled-components/macro';

const InputWrapper = Styled.input`
    border: 0px;
    right:15px;
    width: 85%;
    padding: 0 3% 0 3%;
    font-size: "20px";
    opacity:${props=>props.open?"1":"0"};
    transition:opacity 1s ease-out;
    // display: none;
`;

// const SearchWrapper = Styled.div`
//      border-bottom: ${props=>props.open?"2px solid":"0px solid"};
//      margin: "0 auto";
//      width: ${props=>props.open?"60%":"0%"};
//      transition:border-bottom 1s ease,width 1s ease;
// `;

const InputMainWraper = Styled.div`
    max-width:350px;
    opacity:${props=>props.open?"1":"0"};
    width:${props=>props.open?"100%":"0%"};
    // width:100%;
    z-index:${props=>props.open?"9999":"0"};
    transition:width 2s ease-out,z-index 2s ease-out;
`
const InputMainInnerdiv = Styled.div`
     display:flex;
     width:100%;${props=>props.open?"100%":"0%"};
     transition:width 2s ease-out;
     border-bottom: 2px solid; 
`
class SearchBox extends React.Component{
    state={
        open:false
    }
    openSearch=(e)=>{
        this.setState({open:true});
        e.target.blur();
    }
    closeSearch=()=>{
        // this.setState({open:false})

    }
    componentDidUpdate() {
        let b = document.getElementById("SearchBox");
        b.focus();
    }
    render(){
        const { open } = this.state;
        const { choice } = this.props;
        switch(choice)
        {
            case 1:return(
            <div style={{width:"100%",lineHeight:"2.52"}}>
                <div style={{borderBottom: "2px solid",
                    margin: "0 auto",
                    width: "60%"}}>
                    <input type="text" style={{border:"0px",width: "95%",padding: "0 0 0 3%",fontSize:"20px"}} placeholder="Galaxy S10"/>
                    <button style={{borderWidth:0,background:"transparent",width: " 5%"}}><i className="fa fa-search"></i></button>
                </div>
            </div>);
            case 2:return(
                <div style={{}}>
                    {/*<SearchWrapper open={open}>*/}
                    <div style={{
                        position:"relative",
                        marginBottom:"25px",
                        overflow:"visible",
                        height:"100%"
                    }}>
                        <button style={{borderWidth:0,background:"transparent",float:"right",zIndex:"10",position:"absolute",top:"0",right:"0"
                            ,
                            // display:!open?"block":"none"
                        }} onClick={this.openSearch}>
                            <i className="fa fa-search"></i></button>
                        <InputMainWraper open={open} style={{position:"absolute",top:"0",right:"0",background:"white"}}>
                            <InputMainInnerdiv open={open}>
                            <InputWrapper open={open} style={{
                                // float:"left"

                            }} id="SearchBox" type="text" placeholder="Galaxy S10" onBlur={this.closeSearch} />
                            <button style={{
                                top:"0",right:"0",
                                position:"absolute",
                                borderWidth:0,background:"transparent",width:"15%",float:"right"}} onClick={this.openSearch}><i className="fa fa-search" style={{float:"right"}}></i></button>
                            </InputMainInnerdiv>
                        </InputMainWraper>
                    </div>
                {/*</SearchWrapper>*/}
                </div>
            );
            default:return null;
        }

    }
}

export default SearchBox;