import React, { Component } from 'react';

import Hamburger from 'react-hamburger-menu';

class HamburgerButton extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      open: false
    };
    this.ANIMATION_DURATION = 250;
  }
  
  handleClick(e) {
    window.setTimeout(() => {
      this.setState({open: !this.state.open});
    }, this.props.delay ? this.props.delay : 0);

    if (this.props.onClick !== undefined) {
      this.props.onClick(e, this.ANIMATION_DURATION);
    }
  }
  
  render() {
    const style = {
      overflow: 'visible',
      cursor: 'pointer',
      WebkitTapHighlightColor: "rgba(0,0,0,0)",       // disable touch highlighting on devices
    }
    
    return (
      <Hamburger
        isOpen={this.state.open}
        menuClicked={this.handleClick.bind(this)}
        width={24}
        height={15}
        strokeWidth={3}
        rotate={0}
        color='black'
        borderRadius={0}
        animationDuration={0.25}
      />
    );
  }
}

export default HamburgerButton;