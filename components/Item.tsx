// @ts-ignore
import React from 'react';
import Fade from '@material-ui/core/Fade';
import ReactImageMagnify from 'react-image-magnify';

const zoomDuration = 150;

type Props = {
  swipeDisabled: () => void;
  swipeEnabled: () => void;
  article: any;
  fingerMoving: any;
};

type State = {
  width: number;
  inMagnify: boolean;
};

class Item extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      width: 0,
      inMagnify: false,
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({width: window.innerWidth});
  };

  getImageDimension() {
    const {width} = this.state;
    switch (true) {
      // case width < 380:
      //   return width;
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

  swipeDisabled = () => {
    this.setState({
      inMagnify: true,
    });
    this.props.swipeDisabled();
  };

  swipeTimer = setTimeout(() => null, 0);

  touchStart = () => {
    this.swipeTimer = setTimeout(() => this.swipeDisabled(), zoomDuration);
  };

  touchEnd = () => {
    clearTimeout(this.swipeTimer);
    this.props.swipeEnabled();
    this.setState({
      inMagnify: false,
    });
  };

  render() {
    const {article} = this.props;
    const width = this.getImageDimension();
    let rootStyle = {
      minHeight: this.getImageDimension() + 'px',
    };
    if (this.state.width < 600) {
      rootStyle = {
        minHeight: this.getImageDimension() + 'px',
      };
    }
    const itemStyle = {
      width: this.getImageDimension() + 'px',
    };
    const smallImage = {
      alt: '',
      width: width,
      height: width,
      src: article,
    };
    const largeImage = {
      src: article,
      width: width * 1.7,
      height: width * 1.7,
    };
    const inMagnify = this.state.inMagnify && !this.props.fingerMoving;
    return (
      <div style={rootStyle}>
        <Fade in={true} timeout={400}>
          <div
            onTouchStart={this.touchStart}
            onTouchEnd={this.touchEnd}
            onMouseEnter={this.touchStart}
            onMouseLeave={this.touchEnd}>
            {inMagnify ? (
              <ReactImageMagnify
                imageStyle={{display: 'none'}}
                enlargedImagePosition="over"
                smallImage={smallImage}
                largeImage={largeImage}
              />
            ) : (
              <ReactImageMagnify
                pressDuration={zoomDuration}
                imageStyle={itemStyle}
                enlargedImagePosition="over"
                enlargedImageContainerDimensions={{width: '60%', height: '60%'}}
                smallImage={smallImage}
                largeImage={largeImage}
              />
            )}
          </div>
        </Fade>
      </div>
    );
  }
}

export default Item;
