import React, { Component } from 'react';
import { Affix } from 'antd';
import TopNav from './Top';
import BottomNav from './BottomNav';

class SecondaryNav extends Component {
  render() {
      const { Title, Button, bottomNav } =this.props
    return (
      <Affix>
        <div>
          <TopNav Title={Title} Button={Button} />
        </div>
        <div>
          <BottomNav bottomNav={bottomNav} />
        </div>
      </Affix>
    );
  }
}

export default SecondaryNav;
