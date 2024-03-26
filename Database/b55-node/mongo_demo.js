db.products.insertMany([{
    "name": " iPhone 15 (128 GB)",
    "poster": "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UY218_.jpg",
    "price": "₹77,900 ",
    "rating": 3,
    "summary": "DYNAMIC ISLAND COMES TO IPHONE 15 — Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else. You can see who’s calling, track your next ride, check your flight status, and so much more."
},
{
    "name": "iPhone 15 Pro (128 GB) ",
    "poster": "https://m.media-amazon.com/images/I/81SigpJN1KL._AC_UY218_.jpg",
    "price": "₹1,34,900 ",
    "rating": 3.5,
    "summary": " iPhone 15 Pro has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that’s tougher than any smartphone glass. And it’s splash, water, and dust resistant."
},
{
    "name": "Samsung Galaxy S23 5G (256GB Storage) ",
    "poster": "https://m.media-amazon.com/images/I/51L8W6d-DNL._AC_UY218_.jpg",
    "price": "₹65,320",
    "rating": 4.7,
    "summary": "FASTEST MOBILE PROCESSOR AVAILABLE: Whether you’re working hard, playing hard or doing both at the same time, smoothly switch between apps with our fastest processor ever."
},
{
    "name": "Samsung Galaxy S23 Ultra 5G (256GB Storage) ",
    "poster": "https://m.media-amazon.com/images/I/51hqXIAVXAL._AC_UY218_.jpg",
    "price": "₹1,00,000",
    "rating": 5.0,
    "summary": "Create crystal-clear content worth sharing with Galaxy S23 Ultra’s 200MP camera — the highest camera resolution on a phone; Whether you’re posting or printing, Galaxy S23 Ultra always does the moment justice."
},
{
    "name": "Apple AirPods Pro (2nd Generation) ​​​​​​​ ",
    "poster": "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY218_.jpg",
    "price": "₹20,999 ",
    "rating": 4.8,
    "summary": "Active Noise Cancellation reduces unwanted background noise.Adaptive Transparency lets outside sounds in while reducing loud environmental noise.Personalised Spatial Audio with dynamic head tracking places sound all around you."
},
{
    "name": " Apple Watch Series 9 [GPS + Cellular 41mm] ",
    "poster": "https://m.media-amazon.com/images/I/81I70qV6cOL._AC_UY218_.jpg",
    "price": "₹75,900 ",
    "rating": 4.9,
    "summary": "Smartwatch with Gold Stainless steel Case with Gold Milanese Loop One Size. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant"
},
{
    "name": " Samsung Galaxy Watch5 Bluetooth (44 mm, Sapphire, Compatible with Android only)",
    "poster": "https://m.media-amazon.com/images/I/61aVQDazNHL._SX679_.jpg",
    "price": "₹22,999",
    "rating": 4.5,
    "summary": "Analysis (BIA Measurement): Monitor everything from body fat percentage (BIA) to skeletal muscle weight. All the feedback you need to track your progress."
},
{
    "name": "SAMSUNG Galaxy Buds2 Pro True Wireless Bluetooth Earbud Headphones - White",
    "poster": "https://m.media-amazon.com/images/I/51m4LnFz84L._SX466_.jpg",
    "price": "₹27,141",
    "rating": 4.3,
    "summary": "Reduce unwanted noise with Galaxy Buds2 Pro; They use Intelligent Active Noise Cancellation* to quiet even the loudest outside sounds; Tune in to what matters most without being bothered by distracting sounds around you"
},
{
    "name": "Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm",
    "poster": "https://m.media-amazon.com/images/I/71vFKBpKakL._SX679_.jpg",
    "price": "₹84,990",
    "rating": 5.0,
    "summary": "Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power."
},
{
    "name": "Samsung Galaxy Book2 Pro 360 Intel 12th Gen i7 EvoTM 33.78 cm (13.3)",
    "poster": "https://m.media-amazon.com/images/I/71iBfI3rAYL._SX679_.jpg",
    "price": "₹1,10,790",
    "rating": 4.9,
    "summary": " 12th Generation Intel EVOTM Core i7-1260P processor (2.1 GHz up to 4.6 GHz 18 MB L3 Cache) | Memory: 16 GB LPDDR5 Memory (On BD 16 GB) | Storage: 512 GB NVMe SSD"
}
])

db.products.find()

db.product.find().pretty()

> db.products.find({"name" : " iPhone 15 (128 GB)"}).pretty()

> db.products.find({rating: {$gt:4.5}}).pretty()

// projection => include &exclude any feilds

// inclusion =1

db.products.find({},{name:1,price:1}).pretty() // all name and price you get

//exclusion =0
db.products.find({},{name:0,price:0}).pretty() // all product detaile excluding price and name


db.products.find({},{name:0,price:1}).pretty()
//"errmsg" : "Cannot do inclusion on field price in exclusion projection",

db.products.find({},{name:1,price:0}).pretty()
// cannot do exclusion with inclusion projection


// only  we can perfor exclusion and inclusion in combination with object id , othet than that not possible(we have to either include or exclude)
db.products.find({},{_id:0 , name:1,price:1}).pretty()


// sorting
  //asc=1
  db.products.find({},{ name:1,price:1}).sort({rating:1}).pretty()

   //desc= -1
   db.products.find({},{ name:1,price:1}).sort({rating:-1}).pretty()

// limit
db.products.find({}).sort({rating:1}).limit(5).pretty()
//skip
db.products.find({}).sort({rating:1}).limit(5).skip(2).pretty() // skips 0,1,2


///TASK
//find all products with rate greater than 4
> db.products.find({rating: {$gt:4.5}}).pretty()

//fond all product with the price less  than or equal to  50,000 
        db.products.find({price:{$regex:/^₹[0-4]?[0-9],[0-9]{3}$|^₹50,000$/}}).pretty()

        //regex 


 //find all producsts with name conataining "samsung"
 db.products.find({name:{$regex:/samsung/i}}).pretty()

 // i here is get case insesitive

 db.products.find({name:{$regex:/SAMSUNG/i}})// here name comes strictly of capital letters

 // find all products sorted by price 
 db.products.find({}).sort({price:1}).pretty()

  
 // find the cheapest product
 db.products.find({}).sort({rating:1}).limit(1).pretty()

 // find all products ssummary contain camera
 db.products.find({name:{$regex:/camera/i}}).pretty()// here name comes strictly of capital letters

 //IN
 db.products.find ({name:{$in:[/^samsung/,/^Apple/]}}).pretty()db.product.updateMany({},{$set{category:"electronics"}})

 //Update
 db.products.updateMany({},{$set:{category:"electronics"}})
 //update with condition
 db.products.updateOne({"name":"iPhone 15 (128 GB)"},{$set: {category:"mobile"}})

 // delete all products with rating >4.5
 db.products.deleteMany({rating: {$gt:4.9}})

 //dlete one documennt
 db.product.deleteOne({rating:{$gt:4.5}})