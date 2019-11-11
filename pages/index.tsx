import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';

const styles = {
  root: {
    display: 'flex' as 'flex',
    alignItems: 'center' as 'center',
    flexDirection: 'column' as 'column',
    height: '100vh',
    margin: '-8px',
  },
};

class Index extends React.Component {
  render() {
    return (
      <div style={styles.root}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Comfortaa"
            rel="stylesheet"
            key="google-font-comfortaa"
          />
        </Head>
        <Header />
      </div>
    );
  }
}

export default Index;
