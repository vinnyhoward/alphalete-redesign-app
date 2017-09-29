module.exports = { 
  
    getOne: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const { params } = req; 
      dbInstance.get_product([ params.id ])
        .then( products => res.status(200).send( products[0] ) )
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

    getAllFemale: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params } = req; 
        dbInstance.get_products_female()
          .then( products => res.status(200).send( products ) )
          .catch( (err) => {
              res.status(500).send(err)
          } );
      },
  };

