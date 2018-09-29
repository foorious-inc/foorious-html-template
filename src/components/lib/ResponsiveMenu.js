import React, { Component, Fragment } from 'react';

import HamburgerButton from './HamburgerButton';
import Box from './Box';

import "../../../node_modules/animate.css/animate.min.css";

class ResponsiveMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      neverRun: true,
      window: window.innerWidth
    };
    this.BREAKPOINT_WIDTH = 991;
    this.DELAY_ONOPEN = 0;
    this.DELAY_ONCLOSE = 550;

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentWillMount() {
    window.addEventListener("resize", (e) => {
      this.setState({
        window: window.innerWidth
      });
    });
  }

  toggleMenu(e) {
    this.setState({
      open: !this.state.open,
      neverRun: false
    });
  }

  render() {
    return (
      <div>
        {
          this.state.window <= this.BREAKPOINT_WIDTH ? (
            <div>
              <HamburgerButton onClick={this.toggleMenu} delay={this.state.open ? this.DELAY_ONCLOSE : this.DELAY_ONOPEN} />

              <div style={{overflow: 'hidden', position: 'absolute', width: '100%'}}>
                {
                  <div style={{display: this.state.neverRun ? 'none' : 'block'}} className={'animated ' + (this.state.open ? 'bounceInDown' : 'bounceOutUp')}>
                    {this.props.children}
                  </div>
                }
              </div>
            </div>
          ) : (
            <div>
              {this.props.children}
            </div>
          )
        }
      </div>
    );
  }
}

export default ResponsiveMenu;