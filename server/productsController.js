module.exports = { 
// =============================================================================
// CART CONTROLLERS
// =============================================================================
addToCart:(req,res) => {
    const db = req.app.get('db');
    const {userid, productid, qty} = req.body;
        console.log('thing',req.body);
        db.get_cart([userid]).then((cart) => {
            if(cart[0]){
             db.check_duplicates([productid, cart[0].id]).then((dup) => {
                if(dup[0]){
                    console.log('HIYA')
                    db.update_quantity([dup[0].qty + 1, dup[0].productid]).then(() => {
                     db.return_cart([cart[0].id]).then((cartItems) => {
                         console.log(cartItems);
                         res.send(cartItems)
                     })
                      
                    })
                } else {
                    db.add_to_cart([productid, cart[0].id, 1]).then(() => {
                        db.return_cart([cart[0].id]).then((cartItems) => {
                            res.send(cartItems)
                        })
                    })
                 }
             })
            } else {
                db.make_order([userid]).then(() => {
                    db.get_cart([userid]).then((cart) => { //could be a problem
                        db.add_to_cart([productid, cart[0].id, 1]).then(() => {

                            db.return_cart([cart[0].id]).then((cartItems) => {
                                res.send(cartItems)
                         })
                    })
                })
            })
        }
    })
},
removeFromCart(req, res ) {
    const db = req.app.get('db');
    db.get_cart([+req.params.userid]).then((order) => {
            db.delete_item([+req.params.id, order[0].id]).then( () => {
                
            db.return_cart((order[0].id)).then((cartItems) => {
                    res.send(cartItems)
            })
        })
    })
},
// =============================================================================
// USER CONTROLLERS
// =============================================================================
checkUser:() => {
        const db = req.app.get('db');
        db.get_cart([1]).then((cart) => {
          if(cart[0]){
            console.log('found cart!')
          } else {
              console.log('not found')
          }      
        })
    },
// =============================================================================
// GENERAL PRODUCT CONTROLLERS
// =============================================================================
getOne: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const { params } = req; 
      dbInstance.get_product([ params.id ])
        .then( products => res.status(200).json( products[0] ) )
        .catch( (err) => {
            res.status(500).send(err)
        } );
    },
getAllProducts: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params } = req; 
        dbInstance.get_all_products()
          .then( products => res.status(200).send( products ) )
          .catch( (err) => {
              res.status(500).send(err)

          } );
      },
getSearchProducts: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params } = req; 
        dbInstance.get_all_products()
          .then( products => {
           const searchedProducts = products.filter( (product) => {
                //   console.log(product.title.toLowerCase().includes(req.query.term.toLowerCase()));
                  return product.title.toLowerCase().includes(req.query.q.toLowerCase())
              })
              res.status(200).send( searchedProducts ) 
            })
          .catch( (err) => {
              res.status(500).send(err)
          } );
      },
// =============================================================================
// MALE CONTROLLERS
// =============================================================================
getAllMale: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params } = req; 
        dbInstance.get_products_male()
          .then( products => res.status(200).send( products ) )
          .catch( (err) => {
              res.status(500).send(err)
          } );
      },
filterMensByAsc: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params } = req; 
        dbInstance.filter_asc_mens()
          .then( products => res.status(200).send( products ) )
          .catch( (err) => {
              res.status(500).send(err)
          } );
      },
filterMensByDesc: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params } = req; 
        dbInstance.filter_desc_mens()
          .then( products => res.status(200).send( products ) )
          .catch( (err) => {
              res.status(500).send(err)
          } );
      },
filterMensByLowHigh: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params } = req; 
        dbInstance.filter_price_low_high()
          .then( products => res.status(200).send( products ) )
          .catch( (err) => {
              res.status(500).send(err)
          } );
      },
filterMensByHighLow: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params } = req; 
        dbInstance.filter_price_high_low()
          .then( products => res.status(200).send( products ) )
          .catch( (err) => {
              res.status(500).send(err)
          } );
      },
// =============================================================================
// FEMALE CONTROLLERS
// =============================================================================
getAllFemale: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params } = req; 
        dbInstance.get_products_female()
          .then( products => res.status(200).send( products ) )
          .catch( (err) => {
              res.status(500).send(err)
          } );
      },
filterWomansByAsc: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params } = req; 
        dbInstance.filter_asc_womans()
          .then( products => res.status(200).send( products ) )
          .catch( (err) => {
              res.status(500).send(err)
          } );
      },
filterWomansByDesc: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params } = req; 
        dbInstance.filter_desc_womans()
          .then( products => res.status(200).send( products ) )
          .catch( (err) => {
              res.status(500).send(err)
          } );
      },
filterWomansByLowHigh: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params } = req; 
        dbInstance.filter_price_low_high_womans()
          .then( products => res.status(200).send( products ) )
          .catch( (err) => {
              res.status(500).send(err)
          } );
      },
filterWomansByHighLow: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params } = req; 
        dbInstance.filter_price_high_low_womans()
          .then( products => res.status(200).send( products ) )
          .catch( (err) => {
              res.status(500).send(err)
          } );
      },
  };
