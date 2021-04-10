import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
            <h1>Coming Soon!</h1>
            <h2>How to receive Dogecoin tips</h2>
            <ol>
                <li>Open a Dogecoin wallet</li>
                <li>Pre-print a card/paper with your Dogecoin QR code or address. <a href="#">Create one now</a></li>
                <li>Drop off card wherever you see a Dogecoin tip sign</li>
                <li>etc.</li>
            </ol>
            <h2>How to give Dogecoin tips</h2>
            <ol>
                <li>Display a Dogecoin tip sign</li>
                <li>If you receive a Dogecoin card from a delivery service, send your tip</li>
                <li>etc.</li>
            </ol>
        <img src={"./dogecoin.jpg"} />
      </div>
    );
  }
}
