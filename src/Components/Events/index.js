import React from 'react';
import EventCard from '../Cards/Card2';
import { EventData } from './EventData';
import Styled from 'styled-components';

const WidgetTitle = Styled.h2`
    padding: 72px 0px 0px;
    text-align:center;  
    font-size:32px;
    font-weight:bold;
    color:#000;
    margin:0;
`;
class EventWidget extends  React.Component{
    render(){
        return(
            <div>
                <WidgetTitle>Discover the Galaxy</WidgetTitle>
                <div className="row">
                {
                    EventData.map((x,i)=>{
                        return <EventCard className="col-lg-4 mt-3" key={i} {...x}/>;
                    })
                }
                </div>
            </div>
        )
    }
}

export default  EventWidget;