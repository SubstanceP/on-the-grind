import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import ItemRow from '../components/ItemRow';


class Index extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Comfortaa"
            rel="stylesheet"
            key="google-font-comfortaa"
          />
        </Head>
        <Header />
        <ItemRow />
      </div>
    );
  }
}

export default Index;
