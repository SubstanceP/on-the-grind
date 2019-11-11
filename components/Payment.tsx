// @ts-check
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Hidden from '@material-ui/core/Hidden';
import PaypalExpressBtn from 'react-paypal-express-checkout';

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
    backgroundColor: '#e8f6f7',
  },
  rootMobile: {
    display: 'flex' as 'flex',
    alignItems: 'center' as 'center',
    flexDirection: 'column' as 'column',
    padding: '15px',
    backgroundColor: '#e8f6f7',
  },
  divider: {
    width: '5px',
    height: '100%',
    backgroundColor: 'black',
    margin: '30px',
  },
  paypal: {
    width: '160px',
    display: 'flex',
    justifyContent: 'center',
  },
  dividerMobile: {
    width: '5px',
    height: '100%',
    backgroundColor: 'black',
    margin: '30px',
  },
  paypalMobile: {
    width: '160px',
    display: 'flex',
    justifyContent: 'center',
    padding: '5px',
  },
  stripe: {
    color: 'white',
    backgroundColor: '#4f694f',
    border: 'none',
    borderRadius: '7px',
    padding: '20px',
    cursor: 'pointer',
    fontFamily: 'Comfortaa, sans-serif',
  },
  paypalSpecific: {
    size: 'small',
    color: 'gold',
    shape: 'pill',
    label: 'checkout',
  },
};

type Props = {
  hidePayment: () => void;
  showPayment: () => void;
};
type State = {};

export default class Payment extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  onToken = (token: any) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  };

  render() {
    const client = {
      sandbox: 'YOUR-SANDBOX-APP-ID' as 'YOUR-SANDBOX-APP-ID',
      production: 'YOUR-PRODUCTION-APP-ID' as 'YOUR-PRODUCTION-APP-ID',
    };

    return (
      <div
        onMouseLeave={this.props.hidePayment}
        onMouseEnter={this.props.showPayment}>
        <Hidden xsDown>
          <div style={styles.root}>
            <div style={styles.paypal}>
              <StripeCheckout
                allowRememberMe={false}
                token={this.onToken}
                stripeKey="pk_test_BXumiCFN2EJETGHnEhpnQr7T00OJnVoKga">
                <button style={styles.stripe} className="btn btn-primary">
                  Pay With Card
                </button>
              </StripeCheckout>
            </div>
            <div style={styles.paypal}>
              <PaypalExpressBtn
                style={styles.paypalSpecific}
                client={client}
                currency={'USD'}
                total={1.0}
              />
            </div>
          </div>
        </Hidden>
        <Hidden smUp>
          <div style={styles.rootMobile}>
            <div style={styles.paypalMobile}>
              <StripeCheckout
                allowRememberMe={false}
                token={this.onToken}
                stripeKey="pk_test_BXumiCFN2EJETGHnEhpnQr7T00OJnVoKga">
                <button style={styles.stripe} className="btn btn-primary">
                  Pay With Card
                </button>
              </StripeCheckout>
            </div>
            <div style={styles.paypalMobile}>
              <PaypalExpressBtn
                style={styles.paypalSpecific}
                client={client}
                currency={'USD'}
                total={1.0}
              />
            </div>
          </div>
        </Hidden>
      </div>
    );
  }
}
