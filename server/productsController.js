module.exports = { 
  
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
                  console.log(product.title.toLowerCase().includes(req.query.term.toLowerCase()));
                  return product.title.toLowerCase().includes(req.query.term.toLowerCase())
              })
              res.status(200).send( searchedProducts ) 
            
            })
          .catch( (err) => {
              res.status(500).send(err)
              
          } );
      },


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
