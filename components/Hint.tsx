import React from 'react';
import {Modal, Backdrop, Fade} from '@material-ui/core';

const styles = {
  hint: {
    display: 'flex',
    justifyContent: 'center',
    height: '70px',
  },
  hintBox: {
    fontFamily: 'Comfortaa, sans-serif',
    backgroundColor: '#e8f6f7',
    fontSize: '12px',
    border: 'none',
    borderRadius: '7px',
    padding: '3px',
    opacity: 0.98,
    width: '100%',
    textAlign: 'center' as 'center',
  },
};

type Props = {
  open: boolean;
  handleClose: () => void;
};
type State = {};

export default class Hint extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const {open, handleClose} = this.props;
    return (
      <div>
        <Modal
          style={styles.hint}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 400,
          }}>
          <Fade in={open} style={styles.hintBox}>
            <div>
              <p>Swipe to see next item.</p>
              <p>Tap and hold to zoom.</p>
            </div>
          </Fade>
        </Modal>
      </div>
    );
  }
}
