// @ts-check
import React from 'react';
import {Hidden, Divider as UIDivider} from '@material-ui/core';

const styles = {
  root: {
    width: '100%',
  },
  divider: {
    width: '100%',
    backgroundColor: 'black',
    height: '5px',
  },
  // vertDivider: {
  //   backgroundColor: 'black',
  //   height: '100%',
  // },
};

type Props = {};
type State = {};

class Divider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    // const {horizontal} = this.props;
    return (
      <div style={styles.root}>
        <Hidden smUp>
          <UIDivider
            style={Object.assign({}, styles.divider, {height: '2px'})}
          />
        </Hidden>
        <Hidden mdUp xsDown>
          <UIDivider
            style={Object.assign({}, styles.divider, {height: '3px'})}
          />
        </Hidden>
        <Hidden lgUp smDown>
          <UIDivider
            style={Object.assign({}, styles.divider, {height: '4px'})}
          />
        </Hidden>
        <Hidden xlUp mdDown>
          <UIDivider
            style={Object.assign({}, styles.divider, {height: '5px'})}
          />
        </Hidden>
        <Hidden lgDown>
          <UIDivider
            style={Object.assign({}, styles.divider, {height: '6px'})}
          />
        </Hidden>
      </div>
    );
  }
}

export default Divider;
