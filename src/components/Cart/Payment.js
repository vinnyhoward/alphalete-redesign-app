import StripeCheckout from 'react-stripe-checkout';
import stripe from '../../../server/stripeKey';
import React, { Component } from 'react'
import axios from 'axios';

export default class Payment extends Component {
constructor() {
  super()
  this.onToken=this.onToken.bind(this);
}

onToken(token) {
  token.card = void 0;
  console.log('token', this.state);
  axios.post('/api/payment', { token, amount: 00, options: this.state} ).then(response => {
    alert('we are in business')
  });
}

  render() {
    return (
      <div>
    <StripeCheckout
      token={this.onToken}
      stripeKey={ stripe }
      amount={00}
    />
      </div>
    )
  }
}
