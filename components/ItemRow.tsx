import React from 'react';

import {shirt, hoodie, sweatshirt} from '../static';

const styles = {
  item: {
      flexBasis: 'calc(33% - 20px)',
  },
  itemImage: {
      width: '100%',
  }
}


type Props = {
};

type State = {
};

class ItemRow extends React.Component<Props, State> {

  render() {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
        <div style={styles.item}>
          <img style={styles.itemImage} src={shirt} />
        </div>
        <div style={styles.item}>
          <img style={styles.itemImage} src={hoodie} />
        </div>
        <div style={styles.item}>
          <img style={styles.itemImage} src={sweatshirt} />
        </div>
      </div>
    );
  }
}

export default ItemRow;
