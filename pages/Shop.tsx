import React from 'react';
import Head from 'next/head';
import Swipe from 'react-easy-swipe';

import {Hidden, Collapse} from '@material-ui/core';
import {Header, Item, Payment, Divider, Hint} from '../components';
import {DownArrow, hoodie, shirt, sweatshirt, landscape} from '../static';

const maxTouchScreenWidth = 1100;

const styles = {
  root: {
    // display: 'flex',
    // alignItems: 'center',
    // flexDirection: 'column',
    // height: '100vh',
    margin: '-8px',
  },
  hero: {},
  content: {
    display: 'flex' as 'flex',
    justifyContent: 'center' as 'center',
    alignItems: 'center' as 'center',
    flexDirection: 'row' as 'row',
    position: 'relative' as 'relative',
    width: '100%' as '100%',
  },
  mobileContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '20px',
    position: 'absolute',
    bottom: '0',
    width: '100%',
  },
  downArrow: {
    width: '4vw',
    rot: '270',
  },
  rightArrow: {
    width: '4vw',
    transform: `rotate(270deg) `,
    paddingRight: '15px',
  },
  leftArrow: {
    width: '4vw',
    transform: `rotate(90deg) `,
    paddingLeft: '15px',
  },
  upArrow: {
    width: '4vw',
    transform: `rotate(180deg)`,
  },
  paymentText: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyNow: {
    padding: '10px',
    fontSize: '20px',
    fontFamily: 'Comfortaa, sans-serif',
  },
  paymentPanel: {
    backgroundColor: '#e8f6f7',
  },
};

type Props = {};
type State = {
  itemIndex: number;
  showPayment: boolean;
  items: any[];
  width: number;
  swipeDisabled: boolean;
  fingerMoving: boolean;
  modalOpen: boolean;
};

export default class Shop extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      itemIndex: 0,
      showPayment: false,
      items: [shirt, sweatshirt, hoodie],
      width: 0,
      swipeDisabled: false,
      fingerMoving: false,
      modalOpen: true,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({width: window.innerWidth});
  }

  next = () => {
    if (this.state.swipeDisabled) {
      return;
    }
    const {items} = this.state;
    let {itemIndex} = this.state;

    if (itemIndex >= items.length - 1) {
      itemIndex = 0;
    } else {
      itemIndex++;
    }

    this.setState({
      itemIndex,
    });
  };

  last = () => {
    if (this.state.swipeDisabled) {
      return;
    }
    const {items} = this.state;
    let {itemIndex} = this.state;

    if (itemIndex <= 0) {
      itemIndex = items.length - 1;
    } else {
      itemIndex--;
    }

    this.setState({
      itemIndex,
    });
  };

  swipeDisabled = () => {
    this.setState({
      swipeDisabled: true,
    });
  };

  swipeEnabled = () => {
    this.setState({
      swipeDisabled: false,
    });
    this.setState({
      fingerMoving: false,
    });
  };

  onSwipeMove = (position: any) => {
    // finger moving tells mobile small item not to disappear when a finger
    // is dragged slightly (since the magnified won't pop up in this case)
    if (Math.abs(position.x) > 10 || Math.abs(position.y) > 10) {
      this.setState({
        fingerMoving: true,
      });
    }
  };

  showPayment = () => {
    if (this.state.width < maxTouchScreenWidth) {
      return;
    }
    this.setState({
      showPayment: true,
    });
  };

  hidePayment = () => {
    if (this.state.width < maxTouchScreenWidth) {
      return;
    }
    this.setState({
      showPayment: false,
    });
  };

  togglePayment = () => {
    const {showPayment} = this.state;
    this.setState({
      showPayment: !showPayment,
    });
  };

  handleClose = () => {
    this.setState({
      modalOpen: false,
    });
  };

  getHeroDimension() {
    const {width} = this.state;
    switch (true) {
      case width < 600:
        return width;
      case width < 960:
        return 450;
      case width < 1280:
        return 600;
      case width < 1920:
        return 700;
      default:
        return 800;
    }
  }

  render() {
    const {items, itemIndex, showPayment, modalOpen} = this.state;
    return (
      <div style={styles.root}>
        <Swipe
          onSwipeLeft={this.next}
          onSwipeRight={this.last}
          onSwipeMove={this.onSwipeMove}
          allowMouseEvents={false}>
          <Head>
            <link
              href="https://fonts.googleapis.com/css?family=Comfortaa"
              rel="stylesheet"
              key="google-font-comfortaa"
            />
          </Head>
          <Header />
          <img
            style={{
              height: this.getHeroDimension() + 'px',
              position: 'absolute',
              opacity: 0.9,
              objectFit: 'cover',
              width: '100%',
            }}
            src={landscape}
          />
          <Hidden smUp>
            <Hint open={modalOpen} handleClose={this.handleClose} />
          </Hidden>
          <div style={styles.content}>
            <Hidden xsDown>
              <img
                src={DownArrow}
                style={styles.leftArrow}
                onClick={this.last}
              />
            </Hidden>
            {items.map(
              (item, i) =>
                i == itemIndex && (
                  <Item
                    fingerMoving={this.state.fingerMoving}
                    article={item}
                    swipeDisabled={this.swipeDisabled}
                    swipeEnabled={this.swipeEnabled}
                  />
                )
            )}
            <Hidden xsDown>
              <img
                src={DownArrow}
                style={styles.rightArrow}
                onClick={this.next}
              />
            </Hidden>
          </div>
          <Divider />
          <div
            style={styles.paymentPanel}
            onMouseLeave={this.hidePayment}
            onMouseEnter={this.showPayment}
            onClick={this.togglePayment}>
            <div style={styles.paymentText}>
              <span style={styles.buyNow}>Buy </span>
              {showPayment ? (
                <img src={DownArrow} style={styles.upArrow} />
              ) : (
                <img src={DownArrow} style={styles.downArrow} />
              )}
              <span style={styles.buyNow}> Now</span>
            </div>
          </div>
          <Collapse in={showPayment}>
            <Payment
              hidePayment={this.hidePayment}
              showPayment={this.showPayment}
            />
          </Collapse>
          <Divider />
        </Swipe>
        {/* <div style={{backgroundColor: 'grey', height: '100%'}}></div> */}
      </div>
    );
  }
}
