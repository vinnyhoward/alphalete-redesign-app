users
id
firstname
lastname
email
password

Line items
Product_ID
orderID
ID
qty

orders
id
shipname
billingname
phonenumber
total
date
userid
status


  // componentDidMount() {
  //   axios.get(`/api/getproduct/${this.props.match.params.id}`).then(res => {
  //     this.setState({
  //       product: res.data
  //     })
  //   })
  // }

CREATE TABLE products
-- (
-- productid SERIAL PRIMARY KEY,
-- title VARCHAR(255),
-- gender VARCHAR(255),
-- image1 TEXT,
-- image2 TEXT,
-- image3 TEXT,
-- image4 TEXT,
-- category VARCHAR(255),
-- descriptiontitle VARCHAR(255),
-- description TEXT,
-- color VARCHAR(255),
-- collection TEXT,
-- size VARCHAR(255),
-- qty INTEGER,
-- price FLOAT
-- )

-- INSERT INTO products
-- (
-- title,
-- gender,
-- image1,
-- image2,
-- image3,
-- category,
-- descriptiontitle,
-- description,
-- color,
-- price
-- )
-- VALUES
-- (
-- 'PANELED JOGGERS V3',
-- 'MALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7048_1024x1024.jpg?v=1506720429',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7047_1024x1024.jpg?v=1506720429',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7049_1024x1024.jpg?v=1506720429',
-- 'joggers',
-- 'Look no further.',
-- 'The all-day, every-day jogger is back with improvements all around. Now in its third generation, our famous joggers have a new, streamlined fit, and are built to withstand everything from workouts to your daily life. A cotton/polyester blend that increases softness is coupled with a silicone wash effect that leaves these joggers with an unbelievably satisfying feeling. Finishing touches include new reinforced zippers on the right and back pocket, signature drawstrings, and our Badge Logo finished in a 3D rubber print. If you’ve been searching for new daily joggers, you’ve just found them.',
-- 'BLACK',
-- 48.00
-- ),
-- (
-- 'PANELED JOGGERS V3',
-- 'MALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7040_1024x1024.jpg?v=1506720517',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7039_1024x1024.jpg?v=1506720517',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7041_1024x1024.jpg?v=1506720517',
-- 'joggers',
-- 'Look no further.',
-- 'The all-day, every-day jogger is back with improvements all around. Now in its third generation, our famous joggers have a new, streamlined fit, and are built to withstand everything from workouts to your daily life. A cotton/polyester blend that increases softness is coupled with a silicone wash effect that leaves these joggers with an unbelievably satisfying feeling. Finishing touches include new reinforced zippers on the right and back pocket, signature drawstrings, and our Badge Logo finished in a 3D rubber print. If you’ve been searching for new daily joggers, you’ve just found them.',
-- 'MUSHROOM',
-- 48.00
-- ),
-- (
-- 'PANELED JOGGERS V3',
-- 'MALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7053_1024x1024.jpg?v=1506720619',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7051_1024x1024.jpg?v=1506720619',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7054_1024x1024.jpg?v=1506720619',
-- 'joggers',
-- 'Look no further.',
-- 'The all-day, every-day jogger is back with improvements all around. Now in its third generation, our famous joggers have a new, streamlined fit, and are built to withstand everything from workouts to your daily life. A cotton/polyester blend that increases softness is coupled with a silicone wash effect that leaves these joggers with an unbelievably satisfying feeling. Finishing touches include new reinforced zippers on the right and back pocket, signature drawstrings, and our Badge Logo finished in a 3D rubber print. If you’ve been searching for new daily joggers, you’ve just found them.',
-- 'WINE',
-- 48.00
-- ),
-- (
-- 'PANELED JOGGERS V3',
-- 'MALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7044_1024x1024.jpg?v=1506720464',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7043_1024x1024.jpg?v=1506720464',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7045_1024x1024.jpg?v=1506720464',
-- 'joggers',
-- 'Look no further.',
-- 'The all-day, every-day jogger is back with improvements all around. Now in its third generation, our famous joggers have a new, streamlined fit, and are built to withstand everything from workouts to your daily life. A cotton/polyester blend that increases softness is coupled with a silicone wash effect that leaves these joggers with an unbelievably satisfying feeling. Finishing touches include new reinforced zippers on the right and back pocket, signature drawstrings, and our Badge Logo finished in a 3D rubber print. If you’ve been searching for new daily joggers, you’ve just found them.',
-- 'COOL GREY',
-- 48.00
-- ),
-- (
-- 'HEX TEE',
-- 'MALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7077_1024x1024.jpg?v=1506719712',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7074_1024x1024.jpg?v=1506719712',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7071_1024x1024.jpg?v=1506719712',
-- 'tops',
-- 'Six times cooler than your average shirt.',
-- 'All-new. All-Alphalete. The Hex Tee is among the first to feature our Lifestyle Blend — a fabric formula that works to keep you unbelievably comfortable, all while delivering the performance and durability you expect from Alphalete. With an ultra-svelte design and fitted sleeves, the Hex Tee will always be a simple and flattering choice. Consistent with the latest in our Lifestyle Range, a simple sewn-in label features the Alphalete Script Logo across the back.',
-- 'BLACK',
-- 28.00
-- ),
-- (
-- 'ROLLED MUSCLE TEE',
-- 'MALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7079_1024x1024.jpg?v=1506720697',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7080_1024x1024.jpg?v=1506720698',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7081_1024x1024.jpg?v=1506720699',
-- 'tops',
-- 'Roll up in style.',
-- 'Keep things simple with the Rolled Muscle Tee. This uncomplicated top features our incredible Alphalete Lifestyle Blend — our own formula for creating ultimate comfort and durability — along with rolled sleeves for an arm-centric look. A scoop bottom makes an appearance here, differentiated with side slits for further style and flexibility. The cherry on top is the Alphalete Script Logo, which you’ll find across the upper back in a simple, sewn-in black label.',
-- 'BLACK',
-- 28.00
-- ),
-- (
-- 'LIFESTYLE CUTOFF',
-- 'MALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7061_1024x1024.jpg?v=1506720005',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7062_1024x1024.jpg?v=1506720005',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7063_1024x1024.jpg?v=1506720006',
-- 'tops',
-- 'What freedom feels like.',
-- 'Head for where it’s hot in the street-ready Lifestyle Cutoff. Featuring our new Alphalete Lifestyle Blend, this sleeveless shirt employs cotton, elastane, viscose and acrylic to strengthen the qualities that matter most in any top — structure, softness, durability, and stretchability. That means the Lifestyle Cutoff is just as comfortable in the street as it is in the gym. Our Script Logo makes an appearance in a sewn-in label across the upper back for a sophisticated finish.',
-- 'BLACK',
-- 28.00
-- ),
-- (
-- 'ROLLED MUSCLE TEE - WHITE',
-- 'MALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7089_1024x1024.jpg?v=1506720872',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7090_1024x1024.jpg?v=1506720873',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7091_1024x1024.jpg?v=1506720874',
-- 'tops',
-- 'Roll up in style.',
-- 'Keep things simple with the Rolled Muscle Tee. This uncomplicated top features our incredible Alphalete Lifestyle Blend — our own formula for creating ultimate comfort and durability — along with rolled sleeves for an arm-centric look. A scoop bottom makes an appearance here, differentiated with side slits for further style and flexibility. The cherry on top is the Alphalete Script Logo, which you’ll find across the upper back in a simple, sewn-in black label.',
-- 'WHITE',
-- 28.00
-- ),
-- (
-- 'HEX TEE',
-- 'MALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7085_1024x1024.jpg?v=1506719967',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7086_1024x1024.jpg?v=1506719968',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7088_1024x1024.jpg?v=1506719969',
-- 'tops',
-- 'Six times cooler than your average shirt.',
-- 'All-new. All-Alphalete. The Hex Tee is among the first to feature our Lifestyle Blend — a fabric formula that works to keep you unbelievably comfortable, all while delivering the performance and durability you expect from Alphalete. With an ultra-svelte design and fitted sleeves, the Hex Tee will always be a simple and flattering choice. Consistent with the latest in our Lifestyle Range, a simple sewn-in label features the Alphalete Script Logo across the back.',
-- 'WHITE',
-- 28.00
-- ),
-- (
-- 'PANELED JOGGERS V3',
-- 'MALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7082_1024x1024.jpg?v=1506720179',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7083_1024x1024.jpg?v=1506720180',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7084_1024x1024.jpg?v=1506720180',
-- 'tops',
-- 'What freedom feels like.',
-- 'Head for where it’s hot in the street-ready Lifestyle Cutoff. Featuring our new Alphalete Lifestyle Blend, this sleeveless shirt employs cotton, elastane, viscose and acrylic to strengthen the qualities that matter most in any top — structure, softness, durability, and stretchability. That means the Lifestyle Cutoff is just as comfortable in the street as it is in the gym. Our Script Logo makes an appearance in a sewn-in label across the upper back for a sophisticated finish.',
-- 'WHITE',
-- 28.00
-- ),
-- (
-- 'HEX TEE',
-- 'MALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7110_1024x1024.jpg?v=1506719747',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7113_1024x1024.jpg?v=1506719748',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/DSC_2084_1024x1024.jpg?v=1506719748',
-- 'tops',
-- 'Six times cooler than your average shirt.',
-- 'All-new. All-Alphalete. The Hex Tee is among the first to feature our Lifestyle Blend — a fabric formula that works to keep you unbelievably comfortable, all while delivering the performance and durability you expect from Alphalete. With an ultra-svelte design and fitted sleeves, the Hex Tee will always be a simple and flattering choice. Consistent with the latest in our Lifestyle Range, a simple sewn-in label features the Alphalete Script Logo across the back.',
-- 'OLIVE',
-- 28.00
-- ),
-- (
-- 'ROLLED MUSCLE TEE',
-- 'MALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7114_1024x1024.jpg?v=1506720721',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7115_1024x1024.jpg?v=1506720722',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7116_1024x1024.jpg?v=1506720722',
-- 'tops',
-- 'Roll up in style.',
-- 'Keep things simple with the Rolled Muscle Tee. This uncomplicated top features our incredible Alphalete Lifestyle Blend — our own formula for creating ultimate comfort and durability — along with rolled sleeves for an arm-centric look. A scoop bottom makes an appearance here, differentiated with side slits for further style and flexibility. The cherry on top is the Alphalete Script Logo, which you’ll find across the upper back in a simple, sewn-in black label.',
-- 'OLIVE',
-- 28.00
-- ),
-- (
-- 'LIFESTYLE CUTOFF',
-- 'MALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7107_1024x1024.jpg?v=1506720026',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7108_1024x1024.jpg?v=1506720027',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7109_1024x1024.jpg?v=1506720027',
-- 'tops',
-- 'What freedom feels like.',
-- 'Head for where it’s hot in the street-ready Lifestyle Cutoff. Featuring our new Alphalete Lifestyle Blend, this sleeveless shirt employs cotton, elastane, viscose and acrylic to strengthen the qualities that matter most in any top — structure, softness, durability, and stretchability. That means the Lifestyle Cutoff is just as comfortable in the street as it is in the gym. Our Script Logo makes an appearance in a sewn-in label across the upper back for a sophisticated finish.',
-- 'OLIVE',
-- 28.00
-- ),
-- (
-- 'HEX TEE',
-- 'MALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7098_1024x1024.jpg?v=1506719937',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7100_1024x1024.jpg?v=1506719938',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7101_1024x1024.jpg?v=1506719938',
-- 'tops',
-- 'Six times cooler than your average shirt.',
-- 'All-new. All-Alphalete. The Hex Tee is among the first to feature our Lifestyle Blend — a fabric formula that works to keep you unbelievably comfortable, all while delivering the performance and durability you expect from Alphalete. With an ultra-svelte design and fitted sleeves, the Hex Tee will always be a simple and flattering choice. Consistent with the latest in our Lifestyle Range, a simple sewn-in label features the Alphalete Script Logo across the back.',
-- 'TAN',
-- 28.00
-- ),
-- (
-- 'ROLLED MUSCLE TEE',
-- 'MALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7103_1024x1024.jpg?v=1506720846',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7104_1024x1024.jpg?v=1506720847',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7106_1024x1024.jpg?v=1506720848',
-- 'tops',
-- 'Roll up in style.',
-- 'Keep things simple with the Rolled Muscle Tee. This uncomplicated top features our incredible Alphalete Lifestyle Blend — our own formula for creating ultimate comfort and durability — along with rolled sleeves for an arm-centric look. A scoop bottom makes an appearance here, differentiated with side slits for further style and flexibility. The cherry on top is the Alphalete Script Logo, which you’ll find across the upper back in a simple, sewn-in black label.',
-- 'TAN',
-- 28.00
-- ),
-- (
-- 'LIFESTYLE CUTOFF',
-- 'MALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7094_1024x1024.jpg?v=1506720369',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7096_1024x1024.jpg?v=1506720369',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7097_1024x1024.jpg?v=1506720370',
-- 'tops',
-- 'What freedom feels like.',
-- 'Head for where it’s hot in the street-ready Lifestyle Cutoff. Featuring our new Alphalete Lifestyle Blend, this sleeveless shirt employs cotton, elastane, viscose and acrylic to strengthen the qualities that matter most in any top — structure, softness, durability, and stretchability. That means the Lifestyle Cutoff is just as comfortable in the street as it is in the gym. Our Script Logo makes an appearance in a sewn-in label across the upper back for a sophisticated finish.',
-- 'TAN',
-- 28.00
-- ),
-- (
-- 'HEX TEE',
-- 'MALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7123_1024x1024.jpg?v=1506719913',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7125_1024x1024.jpg?v=1506719913',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7127_1024x1024.jpg?v=1506719914',
-- 'tops',
-- 'Six times cooler than your average shirt.',
-- 'All-new. All-Alphalete. The Hex Tee is among the first to feature our Lifestyle Blend — a fabric formula that works to keep you unbelievably comfortable, all while delivering the performance and durability you expect from Alphalete. With an ultra-svelte design and fitted sleeves, the Hex Tee will always be a simple and flattering choice. Consistent with the latest in our Lifestyle Range, a simple sewn-in label features the Alphalete Script Logo across the back.',
-- 'REEF WATERS',
-- 28.00
-- ),
-- (
-- 'ROLLED MUSCLE TEE',
-- 'MALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7128_1024x1024.jpg?v=1506720777',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7130_1024x1024.jpg?v=1506720778',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7131_1024x1024.jpg?v=1506720779',
-- 'tops',
-- 'Roll up in style.',
-- 'Keep things simple with the Rolled Muscle Tee. This uncomplicated top features our incredible Alphalete Lifestyle Blend — our own formula for creating ultimate comfort and durability — along with rolled sleeves for an arm-centric look. A scoop bottom makes an appearance here, differentiated with side slits for further style and flexibility. The cherry on top is the Alphalete Script Logo, which you’ll find across the upper back in a simple, sewn-in black label.',
-- 'REEF WATERS',
-- 28.00
-- ),
-- (
-- 'LIFESTYLE CUTOFF',
-- 'MALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7118_1024x1024.jpg?v=1506720079',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7119_1024x1024.jpg?v=1506720080',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7120_1024x1024.jpg?v=1506720080',
-- 'tops',
-- 'What freedom feels like.',
-- 'Head for where it’s hot in the street-ready Lifestyle Cutoff. Featuring our new Alphalete Lifestyle Blend, this sleeveless shirt employs cotton, elastane, viscose and acrylic to strengthen the qualities that matter most in any top — structure, softness, durability, and stretchability. That means the Lifestyle Cutoff is just as comfortable in the street as it is in the gym. Our Script Logo makes an appearance in a sewn-in label across the upper back for a sophisticated finish.',
-- 'REEF WATERS',
-- 28.00
-- ),
-- (
-- 'HEX TEE',
-- 'MALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7142-2_1024x1024.jpg?v=1506778529',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7144-2_1024x1024.jpg?v=1506778529',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I7143-2_1024x1024.jpg?v=1506778529',
-- 'tops',
-- 'Six times cooler than your average shirt.',
-- 'All-new. All-Alphalete. The Hex Tee is among the first to feature our Lifestyle Blend — a fabric formula that works to keep you unbelievably comfortable, all while delivering the performance and durability you expect from Alphalete. With an ultra-svelte design and fitted sleeves, the Hex Tee will always be a simple and flattering choice. Consistent with the latest in our Lifestyle Range, a simple sewn-in label features the Alphalete Script Logo across the back.',
-- 'PINK',
-- 28.00
-- ),
-- (
-- 'WOMENS SEAMLESS LONG SLEEVE V-NECK',
-- 'FEMALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8952_1024x1024.jpg?v=1499971762',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8953_1024x1024.jpg?v=1499971764',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8954_1024x1024.jpg?v=1499971768',
-- 'tops',
-- 'Designed for what matters.',
-- 'A simple design with amazing results. This long-sleeve top is incredibly lightweight, offers full-length sleeves and a stylish V-neck for effortless style combined with athletic performance. With four beautiful colors to choose from, every decision is the right one.',
-- 'BLACK',
-- 38.00
-- ),
-- (
-- 'WOMENS SEAMLESS LONG SLEEVE V-NECK',
-- 'FEMALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8943_1024x1024.jpg?v=1499971800',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8942_1024x1024.jpg?v=1499971804',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8940_1024x1024.jpg?v=1499971806',
-- 'tops',
-- 'Designed for what matters.',
-- 'A simple design with amazing results. This long-sleeve top is incredibly lightweight, offers full-length sleeves and a stylish V-neck for effortless style combined with athletic performance. With four beautiful colors to choose from, every decision is the right one.',
-- 'COOL GREY',
-- 38.00
-- ),
-- (
-- 'WOMENS SEAMLESS LONG SLEEVE V-NECK',
-- 'FEMALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8952_1024x1024.jpg?v=1499971762',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8953_1024x1024.jpg?v=1499971764',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8954_1024x1024.jpg?v=1499971768',
-- 'tops',
-- 'Designed for what matters.',
-- 'A simple design with amazing results. This long-sleeve top is incredibly lightweight, offers full-length sleeves and a stylish V-neck for effortless style combined with athletic performance. With four beautiful colors to choose from, every decision is the right one.',
-- 'BLACK',
-- 38.00
-- ),
-- (
-- 'WOMENS SEAMLESS LONG SLEEVE V-NECK',
-- 'FEMALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8944_1024x1024.jpg?v=1499971855',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8945_1024x1024.jpg?v=1499971859',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8946_1024x1024.jpg?v=1499971861',
-- 'tops',
-- 'Designed for what matters.',
-- 'A simple design with amazing results. This long-sleeve top is incredibly lightweight, offers full-length sleeves and a stylish V-neck for effortless style combined with athletic performance. With four beautiful colors to choose from, every decision is the right one.',
-- 'MINT',
-- 38.00
-- ),
-- (
-- 'WOMENS SEAMLESS LONG SLEEVE V-NECK',
-- 'FEMALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8932_1024x1024.jpg?v=1499971891',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8933_1024x1024.jpg?v=1499971894',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8934_1024x1024.jpg?v=1499971897',
-- 'tops',
-- 'Designed for what matters.',
-- 'A simple design with amazing results. This long-sleeve top is incredibly lightweight, offers full-length sleeves and a stylish V-neck for effortless style combined with athletic performance. With four beautiful colors to choose from, every decision is the right one.',
-- 'RASPBERRY',
-- 38.00
-- ),
-- (
-- 'WOMENS REVIVAL LEGGINGS',
-- 'FEMALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A9107_1024x1024.jpg?v=1498275040',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A9103_1024x1024.jpg?v=1498275040',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A9104_1024x1024.jpg?v=1498275040',
-- 'leggings',
-- 'From the ground-up.',
-- 'We’ve reimagined the traditional legging and infused it with some Alphalete innovation. With the Revival Leggings, we’ve introduced our famous panelling detail across the quads to increase range of motion, while thick, heavy-duty stitching aids to increase overall resilience to the elements. The high-waisted design flatters your natural physique and is ideal for daily wear, whether athletic or casual.',
-- 'BLACK',
-- 58.00
-- ),
-- (
-- 'WOMENS REVIVAL LEGGINGS',
-- 'FEMALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A9092_480x480.jpg?v=1498275075',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A9090_480x480.jpg?v=1498275075',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A9086_480x480.jpg?v=1498275075',
-- 'leggings',
-- 'From the ground-up.',
-- 'We’ve reimagined the traditional legging and infused it with some Alphalete innovation. With the Revival Leggings, we’ve introduced our famous panelling detail across the quads to increase range of motion, while thick, heavy-duty stitching aids to increase overall resilience to the elements. The high-waisted design flatters your natural physique and is ideal for daily wear, whether athletic or casual.',
-- 'BLUE',
-- 58.00
-- ),
-- (
-- 'WOMENS REVIVAL LEGGINGS',
-- 'FEMALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A9101_1024x1024.jpg?v=1498275061',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A9102_1024x1024.jpg?v=1498275061',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A9098_1024x1024.jpg?v=1498275061',
-- 'tops',
-- 'From the ground-up.',
-- 'We’ve reimagined the traditional legging and infused it with some Alphalete innovation. With the Revival Leggings, we’ve introduced our famous panelling detail across the quads to increase range of motion, while thick, heavy-duty stitching aids to increase overall resilience to the elements. The high-waisted design flatters your natural physique and is ideal for daily wear, whether athletic or casual.',
-- 'BURGUNDY',
-- 58.00
-- ),
-- (
-- 'WOMENS REVIVAL LEGGINGS' ,
-- 'FEMALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8952_1024x1024.jpg?v=1499971762',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8953_1024x1024.jpg?v=1499971764',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8954_1024x1024.jpg?v=1499971768',
-- 'tops',
-- 'From the ground-up.',
-- 'We’ve reimagined the traditional legging and infused it with some Alphalete innovation. With the Revival Leggings, we’ve introduced our famous panelling detail across the quads to increase range of motion, while thick, heavy-duty stitching aids to increase overall resilience to the elements. The high-waisted design flatters your natural physique and is ideal for daily wear, whether athletic or casual.',
-- 'OLIVE',
-- 58.00
-- ),
-- (
-- 'WOMENS REVIVAL SHORTS',
-- 'FEMALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8824_1024x1024.jpg?v=1498275111',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8821_1024x1024.jpg?v=1498275111',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8822_1024x1024.jpg?v=1498275111',
-- 'shorts',
-- 'Sometimes less is more.',
-- 'When the temperature’s gone up, opt for the Revival Shorts — the hotter-day counterpart to our namesake leggings. Designed to have a similarly flattering cut, you’ll find the same high-waist design here, as well as an all-new curved hem designed to flatter your natural shape and accentuate your physique. Ultra-stretchy and ready for action — take them for a spin and we guarantee youll never want to wear anything else to the gym.',
-- 'BLACK',
-- 38.00
-- ),
-- (
-- 'WOMENS REVIVAL SHORTS',
-- 'FEMALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8816_1024x1024.jpg?v=1498275146',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8812_1024x1024.jpg?v=1498275146',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8813_1024x1024.jpg?v=1498275146',
-- 'shorts',
-- 'Sometimes less is more.',
-- 'When the temperature’s gone up, opt for the Revival Shorts — the hotter-day counterpart to our namesake leggings. Designed to have a similarly flattering cut, you’ll find the same high-waist design here, as well as an all-new curved hem designed to flatter your natural shape and accentuate your physique. Ultra-stretchy and ready for action — take them for a spin and we guarantee youll never want to wear anything else to the gym.',
-- 'BLUE',
-- 38.00
-- ),
-- (
-- 'WOMENS REVIVAL SHORTS',
-- 'FEMALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8804_1024x1024.jpg?v=1498275136',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8799_1024x1024.jpg?v=1498275136',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8800_1024x1024.jpg?v=1498275136',
-- 'shorts',
-- 'Sometimes less is more.',
-- 'When the temperature’s gone up, opt for the Revival Shorts — the hotter-day counterpart to our namesake leggings. Designed to have a similarly flattering cut, you’ll find the same high-waist design here, as well as an all-new curved hem designed to flatter your natural shape and accentuate your physique. Ultra-stretchy and ready for action — take them for a spin and we guarantee youll never want to wear anything else to the gym.',
-- 'BURGUNDY',
-- 38.00
-- ),
-- (
-- 'WOMENS REVIVAL SHORTS',
-- 'FEMALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8795_1024x1024.jpg?v=1498275163',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8791_1024x1024.jpg?v=1498275163',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8794_1024x1024.jpg?v=1498275163',
-- 'shorts',
-- 'Sometimes less is more.',
-- 'When the temperature’s gone up, opt for the Revival Shorts — the hotter-day counterpart to our namesake leggings. Designed to have a similarly flattering cut, you’ll find the same high-waist design here, as well as an all-new curved hem designed to flatter your natural shape and accentuate your physique. Ultra-stretchy and ready for action — take them for a spin and we guarantee youll never want to wear anything else to the gym.',
-- 'OLIVE',
-- 38.00
-- ),
-- (
-- 'WOMENS REVIVAL SHORTS',
-- 'FEMALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8808_1024x1024.jpg?v=1498275174',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8805_1024x1024.jpg?v=1498275174',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8806_1024x1024.jpg?v=1498275174',
-- 'shorts',
-- 'Sometimes less is more.',
-- 'When the temperature’s gone up, opt for the Revival Shorts — the hotter-day counterpart to our namesake leggings. Designed to have a similarly flattering cut, you’ll find the same high-waist design here, as well as an all-new curved hem designed to flatter your natural shape and accentuate your physique. Ultra-stretchy and ready for action — take them for a spin and we guarantee youll never want to wear anything else to the gym.',
-- 'ROSE PINK',
-- 38.00
-- ),
-- (
-- 'WOMENS SCOOP NECK TEE',
-- 'FEMALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/black_1_1024x1024.jpg?v=1495168921',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/black_2_1024x1024.jpg?v=1495168926',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/black_3_1024x1024.jpg?v=1495168931',
-- 'shorts',
-- 'Believe us — you’ll want to scoop this up.',
-- 'We’ve brought our Lifestyle Range to our Women’s lineup with an Alphalete classic — the Scoop Neck Shirt. Tailored and cut for the feminine physique, we’ve kept all the elements that have made the Scoop Neck such a hit with each iteration. The modern, lengthened design offers full coverage, while our stretchy, durable blend gets busy weathering whatever activity your day (or night) throws at you. Subtle branding is the icing on the cake. This is the beginning of the Women’s Lifestyle Range — pure athleisure.',
-- 'BLACK',
-- 20.00
-- ),
-- (
-- 'WOMENS SCOOP NECK TEE',
-- 'FEMALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A0235_1024x1024.jpg?v=1495169199',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A0231_1024x1024.jpg?v=1495169199',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A0233_1024x1024.jpg?v=1495169199',
-- 'shorts',
-- 'Believe us — you’ll want to scoop this up.',
-- 'We’ve brought our Lifestyle Range to our Women’s lineup with an Alphalete classic — the Scoop Neck Shirt. Tailored and cut for the feminine physique, we’ve kept all the elements that have made the Scoop Neck such a hit with each iteration. The modern, lengthened design offers full coverage, while our stretchy, durable blend gets busy weathering whatever activity your day (or night) throws at you. Subtle branding is the icing on the cake. This is the beginning of the Women’s Lifestyle Range — pure athleisure.',
-- 'WHITE',
-- 20.00
-- ),
-- (
-- 'WOMENS SCOOP NECK TEE',
-- 'FEMALE',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A0213_1024x1024.jpg?v=1495169151',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A0212_1024x1024.jpg?v=1495169151',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A0215_1024x1024.jpg?v=1495169151',
-- 'shorts',
-- 'Believe us — you’ll want to scoop this up.',
-- 'We’ve brought our Lifestyle Range to our Women’s lineup with an Alphalete classic — the Scoop Neck Shirt. Tailored and cut for the feminine physique, we’ve kept all the elements that have made the Scoop Neck such a hit with each iteration. The modern, lengthened design offers full coverage, while our stretchy, durable blend gets busy weathering whatever activity your day (or night) throws at you. Subtle branding is the icing on the cake. This is the beginning of the Women’s Lifestyle Range — pure athleisure.',
-- 'PURPLE',
-- 20.00
-- )

-- INSERT INTO products
-- (
-- title,
-- image1,
-- image2,
-- image3,
-- category,
-- descriptiontitle,
-- description,
-- color,
-- price
-- )
-- VALUES
-- (
-- 'MENS UNDERWEAR',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/lightgrey_1024x1024.jpg?v=1503246786',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/lightgrey2_1024x1024.jpg?v=1503246786',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/lightgrey3_1024x1024.jpg?v=1503246787',
-- 'accessories',
-- 'The low-rise trunk that’s a cut-above.',
-- 'Body-defining, ultra-smooth, and supremely comfortable. Give your underwear drawer a much needed refresh with our new Men’s Trunks. A low-rise fit keeps things modern, while a luxuriously soft poly/elastane blend is used to enhance stretch and retain shape. Stock up on the ultimate microfiber trunk and experience something uniquely different.',
-- 'WHITE',
-- 12.00
-- ),
-- (
-- 'MENS UNDERWEAR',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I4698_1024x1024.jpg?v=1503113469',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I4697_1024x1024.jpg?v=1503113469',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I4699_1024x1024.jpg?v=1503113469',
-- 'accessories',
-- 'The low-rise trunk that’s a cut-above.',
-- 'Body-defining, ultra-smooth, and supremely comfortable. Give your underwear drawer a much needed refresh with our new Men’s Trunks. A low-rise fit keeps things modern, while a luxuriously soft poly/elastane blend is used to enhance stretch and retain shape. Stock up on the ultimate microfiber trunk and experience something uniquely different.',
-- 'CHARCOAL',
-- 12.00
-- ),
-- (
-- 'MENS UNDERWEAR',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/stormgrey_1024x1024.jpg?v=1503246823',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/stormgrey2_1024x1024.jpg?v=1503246824',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/stormgrey3_1024x1024.jpg?v=1503246824',
-- 'accessories',
-- 'The low-rise trunk that’s a cut-above.',
-- 'Body-defining, ultra-smooth, and supremely comfortable. Give your underwear drawer a much needed refresh with our new Men’s Trunks. A low-rise fit keeps things modern, while a luxuriously soft poly/elastane blend is used to enhance stretch and retain shape. Stock up on the ultimate microfiber trunk and experience something uniquely different.',
-- 'STORM GREY',
-- 12.00
-- ),
-- (
-- 'MENS UNDERWEAR',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I4692_480x480.jpg?v=1503113513',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I4691_1024x1024.jpg?v=1503113513',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I4693_1024x1024.jpg?v=1503113513',
-- 'accessories',
-- 'The low-rise trunk that’s a cut-above.',
-- 'Body-defining, ultra-smooth, and supremely comfortable. Give your underwear drawer a much needed refresh with our new Men’s Trunks. A low-rise fit keeps things modern, while a luxuriously soft poly/elastane blend is used to enhance stretch and retain shape. Stock up on the ultimate microfiber trunk and experience something uniquely different.',
-- 'NAVY',
-- 12.00
-- ),
-- (
-- 'MENS UNDERWEAR',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/lightgrey_1024x1024.jpg?v=1503246786',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/lightgrey2_1024x1024.jpg?v=1503246786',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/lightgrey3_1024x1024.jpg?v=1503246787',
-- 'accessories',
-- 'The low-rise trunk that’s a cut-above.',
-- 'Body-defining, ultra-smooth, and supremely comfortable. Give your underwear drawer a much needed refresh with our new Men’s Trunks. A low-rise fit keeps things modern, while a luxuriously soft poly/elastane blend is used to enhance stretch and retain shape. Stock up on the ultimate microfiber trunk and experience something uniquely different.',
-- 'BLACK',
-- 12.00
-- ),
-- (
-- 'MENS UNDERWEAR',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I4704_1024x1024.jpg?v=1503113451',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I4703_1024x1024.jpg?v=1503113451',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I4705_1024x1024.jpg?v=1503113451',
-- 'accessories',
-- 'The low-rise trunk that’s a cut-above.',
-- 'Body-defining, ultra-smooth, and supremely comfortable. Give your underwear drawer a much needed refresh with our new Men’s Trunks. A low-rise fit keeps things modern, while a luxuriously soft poly/elastane blend is used to enhance stretch and retain shape. Stock up on the ultimate microfiber trunk and experience something uniquely different.',
-- 'BLUE SLATE',
-- 12.00
-- ),
-- (
-- 'MENS UNDERWEAR',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I4695_480x480.jpg?v=1503113742',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I4694_1024x1024.jpg?v=1503113742',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/B6I4696_1024x1024.jpg?v=1503113742',
-- 'accessories',
-- 'The low-rise trunk that’s a cut-above.',
-- 'Body-defining, ultra-smooth, and supremely comfortable. Give your underwear drawer a much needed refresh with our new Men’s Trunks. A low-rise fit keeps things modern, while a luxuriously soft poly/elastane blend is used to enhance stretch and retain shape. Stock up on the ultimate microfiber trunk and experience something uniquely different.',
-- 'BLUE SLATE',
-- 12.00
-- ),
-- (
-- 'UMORO ONE V3 — BLACK/GOLD (ALPHALETE LIMITED EDITION)',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A4882_1024x1024.jpg?v=1500524054',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A4883_1024x1024.jpg?v=1500524058',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A4885_1024x1024.jpg?v=1500524062',
-- 'accessories',
-- 'Add a scoop of Alphalete.',
-- 'Up to 50 grams (or one heaping scoop) of storage makes the Umoro One your ultimate supplement companion. Keep your beverage separate from your supplements with a leakproof compartment, and combine when ready at the simple touch of a button. The most versatile shaker on the market gets an all-new look with our signature colors and Alphalete Limited Edition branding.',
-- 'BLACK',
-- 9.00
-- ),
-- (
-- 'LIFESTYLE HAT',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8707_1024x1024.jpg?v=1498274732',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8706_1024x1024.jpg?v=1498274732',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8705_1024x1024.jpg?v=1498274732',
-- 'accessories',
-- 'Keep it cool.',
-- 'Top off your outfit with this streetwear essential. Lightweight and designed with a soft, suedelike feel and minimalist design. An adjustable strap with a high-quality',
-- 'TAN',
-- 9.00
-- ),
-- (
-- 'LIFESTYLE HAT',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8700_480x480.jpg?v=1498274716',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8695_480x480.jpg?v=1498274716',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8696_480x480.jpg?v=1498274716',
-- 'accessories',
-- 'Keep it cool.',
-- 'Top off your outfit with this streetwear essential. Lightweight and designed with a soft, suedelike feel and minimalist design. An adjustable strap with a high-quality',
-- 'OLIVE',
-- 9.00
-- ),
-- (
-- 'LIFESTYLE HAT',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8721_1024x1024.jpg?v=1498274705',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8711_1024x1024.jpg?v=1498274705',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8713_1024x1024.jpg?v=1498274705',
-- 'accessories',
-- 'Keep it cool.',
-- 'Top off your outfit with this streetwear essential. Lightweight and designed with a soft, suedelike feel and minimalist design. An adjustable strap with a high-quality',
-- 'BURGUNDY',
-- 9.00
-- ),
-- (
-- 'LIFESTYLE HAT',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8715_1024x1024.jpg?v=1498149402',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8716_1024x1024.jpg?v=1498149404',
-- 'https://cdn.shopify.com/s/files/1/0667/0133/products/U8A8715_1024x1024.jpg?v=1498149402',
-- 'accessories',
-- 'Keep it cool.',
-- 'Top off your outfit with this streetwear essential. Lightweight and designed with a soft, suedelike feel and minimalist design. An adjustable strap with a high-quality',
-- 'SEAFOAM',
-- 9.00
-- )









render() {
    const womansClothing = this.props.products.map((e, i) => {
      return (
        <div key={i} className='product'>
        <img className='img' src={e.image1} alt=" " />
        <div className='caption-container'>
        <h1 className='product-title'>{e.title}</h1>
        <p className='product-color'>{e.color}</p>
        <p className='product-price'>${e.price}</p>
        <button className='cart-button'>ADD TO CART</button>
        </div>
        </div>

      )
    })
    
        return (
          <div> 
            <div className="dropdown">
            <button className="dropbtn">SORT BY</button>
            <div className="dropdown-content">
            <a onClick={ this.getWomansAsc }>Alphabetically, A-Z</a>
            <a onClick={ this.getWomansDesc }>Alphabetically, Z-A</a>
            <a onClick={ this.getWomansLowHigh }>Price, low to high</a>
            <a onClick={ this.getWomansHighLow }>Price, high to low</a>
            </div>
            </div>
  
          <div className ='product-container'>
            
            { womansClothing }
           
          </div>
          </div>
        )
      }
    
    };

    function mapStateToProps(state) { 
      return {
        products: state.products 
      }
    }

    export default connect(mapStateToProps, { getAllWomansProducts, getWomansAsc, getWomansDesc, getWomansLowHigh, getWomansHighLow  })(Womans);


    <div className='Filter-Align'>
            <DropDownMenu
              style={{
              width: '240px',
              height: '50px',
              margin: '0 auto',
    }}
              className='DropDown' value={this.state.value} onChange={this.handleChange} openImmediately={false}>
            <MenuItem value={1} onClick={ this.getWomansAsc } primaryText="Alphabetically, A-Z" />
            <MenuItem value={2} onClick={ this.getWomansDesc } primaryText="Alphabetically, Z-A" />
            <MenuItem value={3} onClick={ this.getWomansLowHigh } primaryText="Price, low to high" />
            <MenuItem value={4} onClick={ this.getWomansHighLow } primaryText="Price, high to low"  />
              </DropDownMenu>
            </div>


            SQL

            -get_cart-

            SELECT * 
            FROM orders 
            WHERE userid = $1 and status = 'false';

            -check_duplicates-

            SELECT *
            FROM line_items
            WHERE product_id = $1 AND order_id = $2;

            -update_quantity-

            UPDATE line_items
            SET qty = $1
            WHERE product_id = $2

            -return_cart-

            SELECT *
            FROM line_items
            JOIN products on line_items.product_id = products=id
            WHERE order_id = $1

            -add_to_cart-

            INSERT INTO line_items
            (product_id, order_id, qty)
            VALUES
            ($1, $2, 1)

           - make_order-

            INSERT INTO orders
            (userid, status)
            VALUES
            ($1, false)
        
users
id
firstname
lastname
email
password

line_items
product_id 
order_id 
id
qty 

orders
id
shipname
billingname
phonenumber
total
date
userid x
status 

DROP DOWN MENU FOR FILTER
// import DropDownMenu from 'material-ui/DropDownMenu';
// import MenuItem from 'material-ui/MenuItem';

<!-- <DropDownMenu
              style={{
              width: '240px',
              height: '50px',
              margin: '0 auto',
    }}
              className='DropDown' value={this.state.value} onChange={this.handleChange} openImmediately={false}>
            <MenuItem value={1} onClick={ this.getWomansAsc } primaryText="Alphabetically, A-Z" />
            <MenuItem value={2} onClick={ this.getWomansDesc } primaryText="Alphabetically, Z-A" />
            <MenuItem value={3} onClick={ this.getWomansLowHigh } primaryText="Price, low to high" />
            <MenuItem value={4} onClick={ this.getWomansHighLow } primaryText="Price, high to low"  />
 </DropDownMenu> -->
