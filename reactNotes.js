import axios from 'axios';

export const getUsers = (n, callback) => {
  axios.get(`https://swapi.co/api/people/${n}`, users => {
    callback(users)
    console.log(users);
  })
}

import React, { Component } from 'react';

class MainComponent extends Component {
  constructor() {
    super()
    this.state={
      eventName: 'React Event',
      users: {}
    }
  }

  componentDidMount(){
    getUsers(6, users => {
      this.setState({
        users
      })
    })
  }
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default MainComponent;

// SELECT * FROM PRODUCTS;

// INSERT INTO products(title, gender, image1, image2, image3, category, descriptiontitle, description, color, collection, size, price)
// VALUES
// ('DISTRESSED SHORT SLEEVE', 'MALE', 'https://image.ibb.co/dQ3pZH/distressed_grey.jpg', 'https://image.ibb.co/mWE7Mx/distressed_grey1.jpg', 'https://image.ibb.co/gPHSMx/distressed_grey2.jpg', 'tops' 'Blending in is overrated anyway.', 'Stay bold in Alphalete’s latest addition to the Lifestyle Range. The Distressed Crewneck takes incredibly soft terry fleece and adds edgy distressing details throughout for a laidback, worn-in look. Tailored to offer a slim, flattering profile, with a contemporary color palette available for the discerning tastemaker. It feels like your favorite T-shirt, because that’s what it’s meant to be.', 'DARK GREY', null, , null, 28.00),
// ('DISTRESSED SHORT SLEEVE', 'MALE', 'https://image.ibb.co/dnhu1x/distressed_light_grey.jpg', 'https://image.ibb.co/kib7oc/distressed_light_grey1.jpg', 'https://image.ibb.co/nctbgx/distressed_light_grey2.jpg', 'tops' 'Blending in is overrated anyway.', 'Stay bold in Alphalete’s latest addition to the Lifestyle Range. The Distressed Crewneck takes incredibly soft terry fleece and adds edgy distressing details throughout for a laidback, worn-in look. Tailored to offer a slim, flattering profile, with a contemporary color palette available for the discerning tastemaker. It feels like your favorite T-shirt, because that’s what it’s meant to be.', 'LIGHT GREY', null, , null, 28.00),
// ('DISTRESSED SHORT SLEEVE', 'MALE', 'https://image.ibb.co/jhoyuH/distressed_pink.jpg', 'https://image.ibb.co/cjWwgx/distressed_pink1.jpg', 'https://image.ibb.co/jfobgx/distressed_pink2.jpg', 'tops' 'Blending in is overrated anyway.', 'Stay bold in Alphalete’s latest addition to the Lifestyle Range. The Distressed Crewneck takes incredibly soft terry fleece and adds edgy distressing details throughout for a laidback, worn-in look. Tailored to offer a slim, flattering profile, with a contemporary color palette available for the discerning tastemaker. It feels like your favorite T-shirt, because that’s what it’s meant to be.', 'WITHERED ROSE', null, , null, 28.00),
// ('DISTRESSED SHORT SLEEVE', 'MALE', 'hhttps://image.ibb.co/nv5ddc/distressed_biege.jpg', 'https://image.ibb.co/muA3uH/distressed_biege1.jpg', 'https://image.ibb.co/bUasoc/distressed_biege2.jpg', 'tops' 'Blending in is overrated anyway.', 'Stay bold in Alphalete’s latest addition to the Lifestyle Range. The Distressed Crewneck takes incredibly soft terry fleece and adds edgy distressing details throughout for a laidback, worn-in look. Tailored to offer a slim, flattering profile, with a contemporary color palette available for the discerning tastemaker. It feels like your favorite T-shirt, because that’s what it’s meant to be.', 'TAUPE', null, , null, 28.00)