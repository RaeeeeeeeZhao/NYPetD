// Snapshot of the NYPetD MongoDB collections (Cafes, Groomer, Parks, Vet)
const DEMO_PLACES = [
 {
  "_id": "69ddbb87519927aba684d226",
  "id": 7,
  "name": "Carnegie Diner & Cafe",
  "borough": "Midtown",
  "price": "20-30",
  "phone": "2126641001",
  "freeWifi": false,
  "rating": 4.5,
  "outdoorSeating": true,
  "address": "205 W 57th St, New York, NY 10019",
  "petPolicy": "Allowed",
  "specialFeatures": null,
  "officialWebsite": "https://carnegiediner.com/",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9804449,
    40.7659259
   ]
  },
  "imageURL": "https://images.getbento.com/accounts/12c3c7150f27b05c1d7e6f1e78a00474/media/images/4852CarnegieChristmasFull-18.jpg?w=5400&fit=max&auto=compress,format&cs=origin",
  "category": "Cafe"
 },
 {
  "_id": "69ddbb87519927aba684d22d",
  "id": 14,
  "name": "Blank Street",
  "borough": "Upper West",
  "price": "1-10",
  "phone": null,
  "freeWifi": true,
  "rating": 4.8,
  "outdoorSeating": false,
  "address": "2461 Broadway, New York, NY 10025",
  "petPolicy": "Allowed",
  "specialFeatures": "Provide Dog treats.",
  "officialWebsite": "https://app.blankstreet.com/",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.973981,
    40.7914757
   ]
  },
  "imageURL": "https://s3-media0.fl.yelpcdn.com/bphoto/wB-K-4HhK_CEA7RNEqGdQw/o.jpg",
  "category": "Cafe"
 },
 {
  "_id": "69ddbb87519927aba684d229",
  "id": 10,
  "name": "Barking Dog Restaurant",
  "borough": "Upper East",
  "price": "20-30",
  "phone": "2128311800",
  "freeWifi": false,
  "rating": 4.2,
  "outdoorSeating": true,
  "address": "1678 3rd Ave, New York, NY 10128",
  "petPolicy": "Allowed",
  "specialFeatures": "Pet menu & Outdoor pet fountain.",
  "officialWebsite": "https://barkingdognyc.com/",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9503761,
    40.784065
   ]
  },
  "imageURL": "https://static.spotapps.co/website_images/ab_websites/47922_website/location_2_new.jpg",
  "category": "Cafe"
 },
 {
  "_id": "69ddbb87519927aba684d227",
  "id": 8,
  "name": "Sip and Co",
  "borough": "Midtown",
  "price": "10-20",
  "phone": "5169602283",
  "freeWifi": true,
  "rating": 4.5,
  "outdoorSeating": true,
  "address": "41 W 58th St, New York, NY 10019",
  "petPolicy": "Allowed",
  "specialFeatures": "Offer dog treats & pet polariod wall.",
  "officialWebsite": "http://sipandco.co/",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9758983,
    40.7648247
   ]
  },
  "imageURL": "https://images.squarespace-cdn.com/content/v1/630edc9de95f862bc726089a/2f868cb4-c5f2-44f9-a5b1-ace0197911b9/Sip%26Co+%286+of+26%29.JPG?format=2500w",
  "category": "Cafe"
 },
 {
  "_id": "69ddbb87519927aba684d22c",
  "id": 13,
  "name": "Park Cafe",
  "borough": "Upper West",
  "price": "1-10",
  "phone": "5167490697",
  "freeWifi": true,
  "rating": 4.8,
  "outdoorSeating": true,
  "address": "153 Manhattan Ave, New York, NY 10025",
  "petPolicy": "Allowed",
  "specialFeatures": null,
  "officialWebsite": "https://www.grubhub.com/",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9610681,
    40.7994859
   ]
  },
  "imageURL": "https://s3-media0.fl.yelpcdn.com/bphoto/y9Ot6ZFQ6gipIso9lId66w/348s.jpg",
  "category": "Cafe"
 },
 {
  "_id": "69ddbb87519927aba684d220",
  "id": 1,
  "name": "% Arabica",
  "borough": "Brooklyn",
  "price": "1-10",
  "phone": "7188652551",
  "freeWifi": true,
  "rating": 4.4,
  "outdoorSeating": true,
  "address": "20 Old Fulton St, Brooklyn, NY 11201",
  "petPolicy": "Allowed",
  "specialFeatures": null,
  "officialWebsite": "https://arabicacoffeeus.com/",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9941382,
    40.7025978
   ]
  },
  "imageURL": "https://arabicacoffeeus.com/cdn/shop/files/hp-location-feature.jpg?v=1721088198&width=1500",
  "category": "Cafe"
 },
 {
  "_id": "69ddbb87519927aba684d228",
  "id": 9,
  "name": "Chateau le Woof",
  "borough": "Queens",
  "price": "10-20",
  "phone": "7186269663",
  "freeWifi": true,
  "rating": 4.6,
  "outdoorSeating": false,
  "address": "31-01 Vernon Blvd, Astoria, NY 11106",
  "petPolicy": "Allowed",
  "specialFeatures": "Also sell dog-related products & grooming services.",
  "officialWebsite": "https://www.chateaulewoof.com/",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9346029,
    40.7701895
   ]
  },
  "imageURL": "https://www.chateaulewoof.com/cdn/shop/files/close_up_le_woof_1512x.jpg?v=1762886231",
  "category": "Cafe"
 },
 {
  "_id": "69ddbb87519927aba684d221",
  "id": 2,
  "name": "BEEPUBLIC",
  "borough": "Brooklyn",
  "price": "10-20",
  "phone": null,
  "freeWifi": true,
  "rating": 4.6,
  "outdoorSeating": true,
  "address": "181 Front St, Brooklyn, NY 11201",
  "petPolicy": "Allowed",
  "specialFeatures": null,
  "officialWebsite": "http://beepublic.com/",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9859841,
    40.7025544
   ]
  },
  "imageURL": "https://img1.wsimg.com/isteam/stock/105065/:/rs=w:2320",
  "category": "Cafe"
 },
 {
  "_id": "69ddbb87519927aba684d22e",
  "id": 15,
  "name": "Artisan Cafe",
  "borough": "Upper West",
  "price": "1-10",
  "phone": null,
  "freeWifi": true,
  "rating": 4.8,
  "outdoorSeating": true,
  "address": "608 Amsterdam Ave, New York, NY 10024",
  "petPolicy": "Outdoor only",
  "specialFeatures": null,
  "officialWebsite": null,
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9736118,
    40.7899242
   ]
  },
  "imageURL": "https://s3-media0.fl.yelpcdn.com/bphoto/hIPozwfgHqNy_kQ7mDFZow/o.jpg",
  "category": "Cafe"
 },
 {
  "_id": "69ddbb87519927aba684d222",
  "id": 3,
  "name": "Urban Backyard",
  "borough": "Downtown",
  "price": "1-10",
  "phone": "6466929957",
  "freeWifi": false,
  "rating": 4.8,
  "outdoorSeating": true,
  "address": "180 Mulberry St, New York, NY 10012",
  "petPolicy": "Allowed",
  "specialFeatures": "Outdoor pet-friendly seating",
  "officialWebsite": "http://www.urbanbackyardnyc.com/",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9965293,
    40.7207909
   ]
  },
  "imageURL": "https://images.squarespace-cdn.com/content/v1/5edaf010f96c3956a9022210/1cdbc83d-4c1a-4de0-bccc-ee6b876184cd/UB2022-inside.jpg",
  "category": "Cafe"
 },
 {
  "_id": "69ddbb87519927aba684d22b",
  "id": 12,
  "name": "Green Lane Coffee",
  "borough": "Upper East",
  "price": "1-10",
  "phone": "6465901406",
  "freeWifi": false,
  "rating": 4.7,
  "outdoorSeating": true,
  "address": "1582 1st Ave, New York, NY 10028",
  "petPolicy": "Outdoor only",
  "specialFeatures": null,
  "officialWebsite": "https://www.greenlane.coffee/",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9508397,
    40.7744114
   ]
  },
  "imageURL": "https://images.squarespace-cdn.com/content/v1/67813f5b461ae56f0dec42db/fbd56308-e175-4afd-a236-b2d914c0c32d/230426_EP_SH01_004.jpg",
  "category": "Cafe"
 },
 {
  "_id": "69ddbb87519927aba684d223",
  "id": 4,
  "name": "The Grey Dog",
  "borough": "Downtown",
  "price": "20-30",
  "phone": "2129661060",
  "freeWifi": false,
  "rating": 4.4,
  "outdoorSeating": true,
  "address": "244 Mulberry St, New York, NY 10012",
  "petPolicy": "Allowed",
  "specialFeatures": "Chain store",
  "officialWebsite": "https://www.thegreydog.com/",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.995683,
    40.7229558
   ]
  },
  "imageURL": "https://images.getbento.com/accounts/89316af9a381ceb78a2c5fa75b7b7831/media/images/4653559987basic_lockup_Grey_Dog.png",
  "category": "Cafe"
 },
 {
  "_id": "69ddbb87519927aba684d225",
  "id": 6,
  "name": "Boris & Horton",
  "borough": "Downtown",
  "price": "10-20",
  "phone": "2125108986",
  "freeWifi": true,
  "rating": 4.6,
  "outdoorSeating": true,
  "address": "195 Avenue A, New York, NY 10009",
  "petPolicy": "Allowed",
  "specialFeatures": "NYC's first fully dog-friendly cafe.",
  "officialWebsite": "https://www.borisandhorton.com/",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9814002,
    40.7292335
   ]
  },
  "imageURL": "https://images.squarespace-cdn.com/content/v1/67bf88ad7b32ad08b6a1d9c5/b2f417c9-6c20-4f9d-a90e-1ad540f8cf68/1000015480.jpg?format=2500w",
  "category": "Cafe"
 },
 {
  "_id": "69ddbb87519927aba684d224",
  "id": 5,
  "name": "787 Coffee",
  "borough": "Downtown",
  "price": "1-10",
  "phone": "6466492937",
  "freeWifi": false,
  "rating": 4.9,
  "outdoorSeating": true,
  "address": "256 W 15th St, New York, NY 10011",
  "petPolicy": "Allowed",
  "specialFeatures": "Chain store",
  "officialWebsite": "http://787coffee.com/",
  "location": {
   "type": "Point",
   "coordinates": [
    -74.0015772,
    40.7400241
   ]
  },
  "imageURL": "https://images.squarespace-cdn.com/content/v1/6256e7c9ffcbf452d1da5e6d/fce5bd65-d5dd-4535-806d-46b64f1c7cd8/787+coffee+logo+cafe+de+puerto+rico.png?format=1500w",
  "category": "Cafe"
 },
 {
  "_id": "69ddbb87519927aba684d22a",
  "id": 11,
  "name": "Madame Bonte Cafe",
  "borough": "Upper East",
  "price": "10-20",
  "phone": "9174095555",
  "freeWifi": true,
  "rating": 4.4,
  "outdoorSeating": true,
  "address": "318 E 84th St, New York, NY 10028",
  "petPolicy": "Outdoor only",
  "specialFeatures": null,
  "officialWebsite": "http://www.madamebonte.com/",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9519175,
    40.7759965
   ]
  },
  "iamgeURL": "https://www.madamebonte.com/hubfs/9F1F141E-19F2-445F-A698-D1AC5D286C8C.jpg",
  "category": "Cafe"
 },
 {
  "_id": "69dfe8b4bcdfad2f00169708",
  "id": 2,
  "name": "Zen Animals: Clean + Holistic Pet Spa",
  "borough": "Brooklyn",
  "phone": 7189750950,
  "rating": 4.2,
  "address": "233 Malcolm X Blvd, Brooklyn, NY 11233",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9292636,
    40.6848032
   ]
  },
  "imageURL": "https://images.squarespace-cdn.com/content/v1/65ece082448a9a2ac503d473/34ae7630-b1a9-4529-98b0-5fc9832b9e6c/4d088026-9ca8-4a23-9095-3bb0573abf12.jpg?format=2500w",
  "specialFeatures": "Also provide pet borading service",
  "officialWebsite": "http://www.zenanimals.love/",
  "category": "Groomer"
 },
 {
  "_id": "69dfe8b4bcdfad2f0016970b",
  "id": 5,
  "name": "Grooming 4 Less",
  "borough": "Downtown",
  "phone": 6464318043,
  "rating": 4.9,
  "address": "50 Gouverneur St, New York, NY 10002",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.983541,
    40.7123349
   ]
  },
  "imageURL": "https://grooming4less.com/ws/alt-imgs/w1600/88dd8371d4b81abad466648500f40246.webp",
  "specialFeatures": null,
  "officialWebsite": "http://www.grooming4less.com/",
  "category": "Groomer"
 },
 {
  "_id": "69dfe8b4bcdfad2f00169709",
  "id": 3,
  "name": "Unleashed Spa Pet Grooming",
  "borough": "Downtown",
  "phone": 2125339300,
  "rating": 4.8,
  "address": "218 Avenue B, New York, NY 10009",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9785942,
    40.7289625
   ]
  },
  "imageURL": "https://unleashedspa.com/wp-content/uploads/2021/07/IMG_2031-1152x1536.jpeg",
  "specialFeatures": null,
  "officialWebsite": "http://www.unleashedspa.com/",
  "category": "Groomer"
 },
 {
  "_id": "69dfe8b4bcdfad2f0016970d",
  "id": 7,
  "name": "Now You're Clean - West Village",
  "borough": "Midtown",
  "phone": 3322572376,
  "rating": 4.9,
  "address": "113 W 10th St, New York, NY 10011",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9993576,
    40.7349239
   ]
  },
  "imageURL": "https://s3-media0.fl.yelpcdn.com/bphoto/76tTYiGRCCyOV70dNn7FhQ/o.jpg",
  "specialFeatures": "Also provide self-serve facilities",
  "officialWebsite": "http://www.nowyoureclean.com/",
  "category": "Groomer"
 },
 {
  "_id": "69dfe8b4bcdfad2f0016970a",
  "id": 4,
  "name": "Furry N' Fabulous Lower East Side",
  "borough": "Downtown",
  "phone": 9294971740,
  "rating": 4.6,
  "address": "153 1/2 Stanton St, New York, NY 10002",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9851067,
    40.7202446
   ]
  },
  "imageURL": "https://7bd0e36f95f8f1db06e5.cdn6.editmysite.com/uploads/b/7bd0e36f95f8f1db06e5af9102321df41a2569a3b0842c296305ac54757d0fca/2026-03-25_21-10-18_1774487437.png?width=2400&dpr=2",
  "specialFeatures": "Also provide daycare service",
  "officialWebsite": "https://www.furrynfab.com/",
  "category": "Groomer"
 },
 {
  "_id": "69dfe8b4bcdfad2f0016970c",
  "id": 6,
  "name": "Lucky Paws Pet Grooming",
  "borough": "Midtown",
  "phone": 2129245300,
  "rating": 4.1,
  "address": "168 9th Ave, New York, NY 10011",
  "location": {
   "type": "Point",
   "coordinates": [
    -74.0023458,
    40.7447907
   ]
  },
  "imageURL": "https://luckypawsusa.com/wp-content/uploads/2025/11/smalllogo.png",
  "specialFeatures": null,
  "officialWebsite": "https://luckypawsusa.com/",
  "category": "Groomer"
 },
 {
  "_id": "69dfe8b4bcdfad2f00169707",
  "id": 1,
  "name": "Brooklyn Pet Spa Pet Grooming Brooklyn",
  "borough": "Brooklyn",
  "phone": 7187680293,
  "rating": 4.6,
  "address": "317 Flatbush Ave, Brooklyn, NY 11217",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9729784,
    40.678216
   ]
  },
  "imageURL": "https://brooklynpetspa.com/wp-content/uploads/2024/02/Dog-Daycare-in-Brooklyn-5.jpg",
  "specialFeatures": "Also provide pet borading service",
  "officialWebsite": "https://brooklynpetspa.com/dog-grooming-in-brooklyn-haircuts-nails/",
  "category": "Groomer"
 },
 {
  "_id": "69dfe8b4bcdfad2f0016970e",
  "id": 8,
  "name": "Central Park Pet Spa",
  "borough": "Midtown",
  "phone": 2127997799,
  "rating": 4.4,
  "address": "160 W 72nd St, New York, NY 10023",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.981033,
    40.7780771
   ]
  },
  "imageURL": "https://centralparkpetspa.com/wp-content/uploads/2022/01/FOTO-GGG-1536x1524.jpg",
  "specialFeatures": null,
  "officialWebsite": "http://centralparkpetspa.com/",
  "category": "Groomer"
 },
 {
  "_id": "69dfecb8bcdfad2f0016971a",
  "id": 13,
  "name": "Petco Grooming",
  "borough": "Upper West",
  "phone": 2128771270,
  "rating": 4,
  "address": "2475 Broadway, New York, NY 10025",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9740586,
    40.792091
   ]
  },
  "imageURL": "https://dyn.mktgcdn.com/p/xm0oDt3S9_RPIo5X2yC3qTOP6vQSfh4HyoYX8_8hhcA/width=1920,height=1534",
  "specialFeatures": "Chain Store with multiple locations",
  "officialWebsite": "https://stores.petco.com/ny/newyork/full-service-grooming-newyork-ny-1750.html",
  "category": "Groomer"
 },
 {
  "_id": "69dfecb8bcdfad2f00169717",
  "id": 10,
  "name": "Astoria Holistic Pets Spa",
  "borough": "Queens",
  "phone": 3475868820,
  "rating": 4.8,
  "address": "22-75 27th St, Astoria, NY 11105",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.91501835513934,
    40.77636929442283
   ]
  },
  "imageURL": "https://s3-media0.fl.yelpcdn.com/bphoto/CqRJBHAcTVd04leVbAk2nw/o.jpg",
  "specialFeatures": null,
  "officialWebsite": "https://squareup.com/appointments/book/5a0fee53-d0c3-4094-8f37-9b963e39a513/QT85H4NAB8WRH/services",
  "category": "Groomer"
 },
 {
  "_id": "69dfecb8bcdfad2f00169719",
  "id": 12,
  "name": "Doggy Stylez Grooming",
  "borough": "Upper East",
  "phone": 2129964000,
  "rating": 4.5,
  "address": "356 E 87th St, New York, NY 10128",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9498077,
    40.7778498
   ]
  },
  "imageURL": "https://www.doggystylezny.com/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-12-at-8.54.55-PM-1.jpeg",
  "specialFeatures": null,
  "officialWebsite": "http://www.doggystylezny.com/",
  "category": "Groomer"
 },
 {
  "_id": "69dfecb8bcdfad2f0016971c",
  "id": 15,
  "name": "Biscuits & Bath",
  "borough": "Upper West",
  "phone": 6467860973,
  "rating": 4.3,
  "address": "265 W 87th St, New York, NY 10024",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9763855,
    40.7893884
   ]
  },
  "imageURL": "https://s3-media0.fl.yelpcdn.com/bphoto/k33AElSqojkhzIkZEQlLXw/o.jpg",
  "specialFeatures": "Also provide day/night care & dog training service",
  "officialWebsite": "https://www.biscuitsandbath.com/",
  "category": "Groomer"
 },
 {
  "_id": "69dfecb8bcdfad2f00169716",
  "id": 9,
  "name": "Dalila’s Pet Grooming",
  "borough": "Queens",
  "phone": 7186447072,
  "rating": 4.8,
  "address": "90-12 37th Ave, Jackson Heights, NY 11372",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.87631734566001,
    40.750558987330145
   ]
  },
  "imageURL": "https://img1.wsimg.com/isteam/ip/0777ee20-5d40-48f0-841c-3c6a05c0f5ad/blob-a2ebfbb.png/:/cr=t:5.57%25,l:0%25,w:100%25,h:88.85%25/rs=w:1200,h:1600,cg:true",
  "specialFeatures": "Also provide pet grooming training",
  "officialWebsite": "https://doggroomersinqueens.com/",
  "category": "Groomer"
 },
 {
  "_id": "69dfecb8bcdfad2f0016971b",
  "id": 14,
  "name": "Rapawzel Dog Grooming & Day Care",
  "borough": "Upper West",
  "phone": 2127297033,
  "rating": 5,
  "address": "211 W 80th St, New York, NY 10024",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9784505,
    40.7843209
   ]
  },
  "imageURL": "https://e67qa7zdtxz.exactdn.com/wp-content/uploads/2024/10/img_4838-e1714614215411-768x393.webp?strip=all",
  "specialFeatures": "Also provide daycare service",
  "officialWebsite": "https://rapawzeldoggroomer.com/our-locations/",
  "category": "Groomer"
 },
 {
  "_id": "69dfecb8bcdfad2f00169718",
  "id": 11,
  "name": "Dog Salon My One and Only",
  "borough": "Upper East",
  "phone": 6463253518,
  "rating": 5,
  "address": "313 E 95th St, New York, NY 10128",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9465495,
    40.7833791
   ]
  },
  "imageURL": "https://33866d3f0d064b272e52.cdn6.editmysite.com/uploads/b/33866d3f0d064b272e5260c6721de55a397d45a087911d733518dcac902156d1/NY-300_white-w3800_cropped_1745793629.jpg?width=2400&optimize=medium&height=480&fit=cover&dpr=2",
  "specialFeatures": "Also provide self-serve facilities",
  "officialWebsite": "http://myoneandonlyny.com/",
  "category": "Groomer"
 },
 {
  "_id": "69ddbef4519927aba684d23f",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9939761,
    40.7017691
   ]
  },
  "id": 2,
  "imageURL": "https://www.nycgovparks.org/photo_gallery/full_size/18957.jpg",
  "name": "Hillside Dog Park",
  "borough": "Brooklyn",
  "phone": "2126399675",
  "rating": 4.6,
  "address": "Vine St, Brooklyn, NY 11201",
  "type": "Run",
  "specialFeatures": null,
  "officialWebsite": "http://www.nycgovparks.org/parks/hillside-park",
  "category": "Park"
 },
 {
  "_id": "69ddbef4519927aba684d241",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9653627,
    40.7827725
   ]
  },
  "id": 4,
  "imageURL": "https://d2wsrtli9cxkek.cloudfront.net/media/images/HarlemMeer_20220716_03330_RT.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=1237.5&q=80&w=2475&s=472e58443f3e28a38b2dc0d9bd995398",
  "name": "Central Park Off-Leash Area",
  "borough": "Central Park",
  "phone": null,
  "rating": null,
  "address": "Central Park",
  "type": "Off-Leash",
  "specialFeatures": "23 different dog-friendly zones",
  "officialWebsite": "https://assets.centralparknyc.org/pdfs/about/Dog_Owner_Guide_to_Central_Park.pdf",
  "category": "Park"
 },
 {
  "_id": "69ddbef4519927aba684d243",
  "location": {
   "type": "Point",
   "coordinates": [
    -74.0120291,
    40.7161054
   ]
  },
  "id": 6,
  "imageURL": "https://hudsonriverpark.org/app/uploads/2013/08/Dog-Parks-HRPK-Tribeca-5-1440x960.jpg",
  "name": "Tribeca Dog Run",
  "borough": "Downtown",
  "phone": "2126399675",
  "rating": 3.7,
  "address": "114 Warren St, New York, NY 10007",
  "type": "Run",
  "specialFeatures": null,
  "officialWebsite": "https://www.nycgovparks.org/parks/tribeca-dog-run",
  "category": "Park"
 },
 {
  "_id": "69ddbef4519927aba684d23e",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9987398,
    40.6930841
   ]
  },
  "id": 1,
  "imageURL": "https://images.squarespace-cdn.com/content/v1/5059120ec4aa9ddf8e9ab4ad/1682e19f-67f5-4f95-acc2-e25635b434cd/20250220_174622.jpg?format=2500w",
  "name": "Willowtown Community Dog Run",
  "borough": "Brooklyn",
  "phone": "6174609149",
  "rating": 3.8,
  "address": "48 Columbia Pl, Brooklyn, NY 11201",
  "type": "Run",
  "specialFeatures": null,
  "officialWebsite": "http://www.willowtown.org/dog-run",
  "category": "Park"
 },
 {
  "_id": "69ddbef4519927aba684d244",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9987108,
    40.7303852
   ]
  },
  "id": 7,
  "imageURL": "https://www.washingtonsqpark.org/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fp1z99up5%2Fproduction%2F4b236426eca631e19e5b25771df0362f7ced7066-4096x2304.jpg&w=3840&q=75",
  "name": "Washington Square Park Dog Run",
  "borough": "Downtown",
  "phone": null,
  "rating": 4.2,
  "address": "52 Washington Square S, New York, NY 10012",
  "type": "Run",
  "specialFeatures": null,
  "officialWebsite": "http://wspdogrun.org/",
  "category": "Park"
 },
 {
  "_id": "69ddbef4519927aba684d246",
  "id": 9,
  "location": {
   "type": "Point",
   "coordinates": [
    -74.0075418762621,
    40.74890653681937
   ]
  },
  "imageURL": "https://hudsonriverpark.org/app/uploads/2012/03/941A3701-Chelsea-Waterside-Dog-Park-2880px-1440x960.jpg",
  "name": "Chelsea Waterside Dog Park",
  "borough": "Midtown",
  "phone": "2126272020",
  "rating": 4.5,
  "address": "11th Ave & W23rd Street, New York, NY 10011",
  "type": "Run",
  "specialFeatures": "Climbing facilities",
  "officialWebsite": "https://www.hudsonriverpark.org/explore-the-park/activities/chelsea-waterside-dog-park",
  "category": "Park"
 },
 {
  "_id": "69ddbef4519927aba684d248",
  "id": 11,
  "location": {
   "type": "Point",
   "coordinates": [
    -73.7751249278242,
    40.726149071502306
   ]
  },
  "imageURL": "https://www.nycgovparks.org/photo_gallery/full_size/23029.jpg",
  "name": "Cunningham Park Dog Run",
  "borough": "Queens",
  "phone": "2126399675",
  "rating": 4.3,
  "address": "193rd St &, Radnor Rd, Fresh Meadows, NY 11366",
  "type": "Run",
  "specialFeatures": null,
  "officialWebsite": "https://www.nycgovparks.org/parks/cunningham-park/facilities/dogareas",
  "category": "Park"
 },
 {
  "_id": "69ddbef4519927aba684d24a",
  "id": 13,
  "location": {
   "type": "Point",
   "coordinates": [
    -73.97133393216478,
    40.802623870442446
   ]
  },
  "imageULR": "https://riversideparknyc.org/wp-content/uploads/2025/02/a1-DR-105-e1738874587649.jpg",
  "name": "105th Street Dog Run",
  "borough": "Upper West",
  "phone": "2128703070",
  "rating": 4.4,
  "address": "Riverside Dr &, W 105th St, New York, NY 10025",
  "type": "Run",
  "specialFeatures": null,
  "officialWebsite": "https://riversideparknyc.org/place_categories/dog-runs/",
  "category": "Park"
 },
 {
  "_id": "69ddbef4519927aba684d24c",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.945,
    40.7736
   ]
  },
  "id": 15,
  "imageURL": "https://www.nycgovparks.org/photo_gallery/full_size/26332.jpg",
  "name": "Carl Schurz Park Dog Runs",
  "borough": "Upper East",
  "phone": "2126399675",
  "rating": 4.7,
  "address": "Carl Schurz Park, New York, NY 10028",
  "type": "Run",
  "specialFeatures": null,
  "officialWebsite": "https://www.nycgovparks.org/parks/M081/facilities/dogareas",
  "category": "Park"
 },
 {
  "_id": "69ddbef4519927aba684d245",
  "location": {
   "type": "Point",
   "coordinates": [
    -74.9048849,
    42.1747191
   ]
  },
  "id": 8,
  "imageURL": "https://www.nycgovparks.org/photo_gallery/full_size/26417.jpg",
  "name": "Bellevue South Park Dog Run",
  "borough": "Midtown",
  "phone": null,
  "rating": 4,
  "address": "Unnamed Rd, New York, NY 10016",
  "type": "Run",
  "specialFeatures": "Splash Pad",
  "officialWebsite": "https://www.nycgovparks.org/parks/bellevue-south-park/facilities/dogareas",
  "category": "Park"
 },
 {
  "_id": "69ddbef4519927aba684d249",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9579133,
    40.7592031
   ]
  },
  "id": 12,
  "imageURL": "https://www.nycgovparks.org/photo_gallery/full_size/26377.jpg",
  "name": "Andrew Haswell Green Park",
  "borough": "Upper East",
  "phone": "2126399675",
  "rating": 4.7,
  "address": "E. 60th St. &, FDR Dr, New York, NY 10022",
  "type": "Run",
  "specialFeatures": null,
  "officialWebsite": "https://www.nycgovparks.org/parks/andrew-haswell-green-park",
  "category": "Park"
 },
 {
  "_id": "69ddbef4519927aba684d24b",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.984992,
    40.7853083
   ]
  },
  "id": 14,
  "imageURL": "https://riversideparknyc.org/wp-content/uploads/2025/01/DR-72nd-Lower-Level-scaled.jpg",
  "name": "Riverside Park South Dog Run",
  "borough": "Upper West",
  "phone": "2126399675",
  "rating": 4.7,
  "address": "Hudson River Greenway, New York, NY 10069",
  "type": "Run",
  "specialFeatures": null,
  "officialWebsite": "http://wspdogrun.org/",
  "category": "Park"
 },
 {
  "_id": "69ddbef4519927aba684d240",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9915155,
    40.698052
   ]
  },
  "id": 3,
  "imageURL": "https://www.nycgovparks.org/photo_gallery/full_size/10303.jpg",
  "name": "Brooklyn War Memorial Off-Leash Area",
  "borough": "Brooklyn",
  "phone": "2126399675",
  "rating": 4.4,
  "address": "195 Cadman Plz W, Brooklyn, NY 11201",
  "type": "Off-Leash",
  "specialFeatures": null,
  "officialWebsite": "https://www.nycgovparks.org/parks/cadman-plaza-park-and-brooklyn-war-memorial/monuments/177",
  "category": "Park"
 },
 {
  "_id": "69ddbef4519927aba684d247",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9099437,
    40.7878553
   ]
  },
  "id": 10,
  "imageURL": "https://www.nycgovparks.org/photo_gallery/full_size/24993.jpg",
  "name": "Astoria Park Off-Leash Area",
  "borough": "Queens",
  "phone": "2126399675",
  "rating": 4.7,
  "address": "19 19th St, Astoria, NY 11105",
  "type": "Off-Leash",
  "specialFeatures": null,
  "officialWebsite": "https://www.nycgovparks.org/parks/astoria-park/",
  "category": "Park"
 },
 {
  "_id": "69ddbef4519927aba684d242",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9833411,
    40.7283111
   ]
  },
  "id": 5,
  "imageURL": "https://images.squarespace-cdn.com/content/v1/5313d3e9e4b0d7a86d52896e/82e4dc20-469d-43bd-9217-3380639bb00e/IMG_4784.crop-web.jpg?format=2500w",
  "name": "Tompkins Square Dog Run",
  "borough": "Downtown",
  "phone": "2126399675",
  "rating": 4.6,
  "address": "E 10th St, New York, NY 10009",
  "type": "Run",
  "specialFeatures": null,
  "officialWebsite": "http://www.tompkinssquaredogrun.com/",
  "category": "Park"
 },
 {
  "_id": "69ddc030519927aba684d26a",
  "id": 15,
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9724231,
    40.7908954
   ]
  },
  "imageURL": "https://brilliantvets.com/wp-content/uploads/2024/01/Brilliant-Vet.jpg",
  "name": "Brilliant Veterinary Care",
  "borough": "Upper West",
  "phone": "2123655160",
  "rating": 4.8,
  "address": "641 Amsterdam Ave, New York, NY 10025",
  "open24h": false,
  "specialFeatures": "Do not open on Saturdays",
  "officialWebsite": "https://brilliantvets.com/",
  "category": "Vet"
 },
 {
  "_id": "69ddc030519927aba684d261",
  "id": 6,
  "location": {
   "type": "Point",
   "coordinates": [
    -73.995926,
    40.746614
   ]
  },
  "imageURL": "https://westchelseavet.com/wp-content/uploads/2022/01/tour-7-500x288-1.jpg",
  "name": "West Chelsea Veterinary",
  "borough": "Midtown",
  "phone": "2126452767",
  "rating": 4.8,
  "address": "248 W 26th St, New York, NY 10001",
  "open24h": false,
  "specialFeatures": "Do not open on Sundays",
  "officialWebsite": "https://westchelseavet.com/",
  "category": "Vet"
 },
 {
  "_id": "69ddc030519927aba684d25c",
  "id": 1,
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9844329,
    40.6805319
   ]
  },
  "imageURL": "https://bluepearlvet.com/wp-content/uploads/2022/11/BluePearl-Veterinary-Hospital-Midtown-NY-Banner.jpg",
  "name": "BluePearl Pet Hospital",
  "borough": "Brooklyn",
  "phone": "7185960099",
  "rating": 3.8,
  "address": "190 3rd Ave, Brooklyn, NY 11217",
  "open24h": true,
  "specialFeatures": "Chain Hospital with multiple locations",
  "officialWebsite": "https://bluepearlvet.com/hospital/brooklyn-ny/?utm_source=maps&utm_medium=google&utm_campaign=gbp",
  "category": "Vet"
 },
 {
  "_id": "69ddc030519927aba684d25d",
  "id": 2,
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9605218,
    40.7212463
   ]
  },
  "imageURL": "https://static.wixstatic.com/media/a1991a_23c65346071a4919b36a8965360627b4~mv2.jpg/v1/fill/w_1198,h_1112,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/WILLIAMSBURG_EXTERIOR_2_edited.jpg",
  "name": "VEG ER for Pets",
  "borough": "Brooklyn",
  "phone": "9174236444",
  "rating": 4.7,
  "address": "87 Kent Ave, Brooklyn, NY 11249",
  "open24h": true,
  "specialFeatures": "Chain Emergency Hospital with multiple locations",
  "officialWebsite": "https://www.veg.com/locations/new-york/williamsburg?utm_source=organic_google&utm_medium=gbp_link&utm_campaign=locations_page&utm_content=williamsburg",
  "category": "Vet"
 },
 {
  "_id": "69ddc030519927aba684d25f",
  "id": 4,
  "location": {
   "type": "Point",
   "coordinates": [
    -74.0056985,
    40.716937
   ]
  },
  "iamgeURL": "https://worthstreetvet.com/wp-content/uploads/2023/01/FranciscoDiPolo.jpg",
  "name": "Worth Street Veterinary Center",
  "borough": "Downtown",
  "phone": "2122576900",
  "rating": 4.8,
  "address": "77 Worth St, New York, NY 10013",
  "open24h": false,
  "specialFeatures": "Do not open on Sundays",
  "officialWebsite": "https://worthstreetvet.com/",
  "category": "Vet"
 },
 {
  "_id": "69ddc030519927aba684d260",
  "id": 5,
  "location": {
   "type": "Point",
   "coordinates": [
    -74.0001719,
    40.7421911
   ]
  },
  "imageURL": "https://heartofchelsea.com/wp-content/uploads/2023/05/tech-with-cat-by-kennels.jpeg",
  "name": "Heart of Chelsea Veterinary Group - chelsea",
  "borough": "Midtown",
  "phone": "2129246116",
  "rating": 4.4,
  "address": "257 W 18th St, New York, NY 10011",
  "open24h": false,
  "specialFeatures": "Chain Hospital with multiple locations",
  "officialWebsite": "https://heartofchelsea.com/chelsea/",
  "category": "Vet"
 },
 {
  "_id": "69ddc030519927aba684d25e",
  "id": 3,
  "location": {
   "type": "Point",
   "coordinates": [
    -74.0068323,
    40.727644
   ]
  },
  "imageURL": "https://www.purepawsvet.com/wp-content/uploads/2026/03/Pure-Paws-Veterinary-Care-of-Hudson-Square.jpg",
  "name": "Pure Paws Veterinary Care of Hudson Square",
  "borough": "Downtown",
  "phone": "2122034187",
  "rating": 4.9,
  "address": "350 Hudson St, New York, NY 10014",
  "open24h": false,
  "specialFeatures": "Do not open on weekends",
  "officialWebsite": "https://www.purepawsvet.com/hudson-square-ny/",
  "category": "Vet"
 },
 {
  "_id": "69ddc030519927aba684d262",
  "id": 7,
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9962727,
    40.7384625
   ]
  },
  "imageURL": "https://bondvet.com/static/47d8a862187c68f9a8b8df294af41975/d2b9b/google-reviews-bg.webp",
  "name": "Bond Vet - Chelsea",
  "borough": "Midtown",
  "phone": "2125184667",
  "rating": 4.6,
  "address": "555 6th Ave, New York, NY 10011",
  "open24h": false,
  "specialFeatures": "Chain Hospital with multiple locations",
  "officialWebsite": "https://bondvet.com/c/chelsea-animal-hospital?utm_source=google&utm_medium=organic&utm_campaign=gbp-listing&utm_content=chelsea",
  "category": "Vet"
 },
 {
  "_id": "69ddc030519927aba684d263",
  "id": 8,
  "location": {
   "type": "Point",
   "coordinates": [
    -74.0049697,
    40.7372829
   ]
  },
  "imageURL": "https://images.ctfassets.net/rt5zmd3ipxai/2hDzIL3bhK4foEj3ZiKvD/fc189a65080b1cd112a013a07aff48d0/Terry_Li_-_WV_AnimalHospital_2016_teeth.jpg?fit=fill&fm=webp&h=960&w=1564&q=72",
  "name": "West Village Veterinary Hospital",
  "borough": "Midtown",
  "phone": "2126337400",
  "rating": 4.8,
  "address": "75 8th Ave, New York, NY 10014",
  "open24h": false,
  "specialFeatures": null,
  "officialWebsite": "https://www.westvillagevets.com/?utm_source=gmb&utm_medium=organic&y_source=1_MTE2Njg3NjgtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
  "category": "Vet"
 },
 {
  "_id": "69ddc030519927aba684d265",
  "id": 10,
  "location": {
   "type": "Point",
   "coordinates": [
    -73.8964646,
    40.7807197
   ]
  },
  "imageURL": "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1186,h=984,fit=crop/mP4PboxrqxiJbg2L/sy-meP56VJz4Guo1xBv.jpg",
  "name": "Queens Low Cost Veterinary Center",
  "borough": "Queens",
  "phone": "7186852332",
  "rating": 4,
  "address": "28-27 Steinway St, Astoria, NY 11103",
  "open24h": false,
  "specialFeatures": "Do not open on Sundays",
  "officialWebsite": "http://queensvet.online/",
  "category": "Vet"
 },
 {
  "_id": "69ddc030519927aba684d267",
  "id": 12,
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9456852,
    40.7800543
   ]
  },
  "imageURL": "https://www.aspca.org/sites/default/files/styles/latest_story_465x458/public/field/image/blog/202648_ndfad_thumb.jpg?itok=2LbvDSr2",
  "name": "ASPCA Animal Hospital",
  "borough": "Upper East",
  "phone": "8446927722",
  "rating": 4.4,
  "address": "424 E 92nd St, New York, NY 10128",
  "open24h": false,
  "specialFeatures": "Do not open on weekends",
  "officialWebsite": "http://www.aspca.org/nyc/aspca-animal-hospital",
  "category": "Vet"
 },
 {
  "_id": "69ddc030519927aba684d269",
  "id": 14,
  "imageURL": "https://newyorkcathospital.com/uploads/SiteAssets/1085/images/about/tour1.jpg",
  "location": {
   "type": "Point",
   "coordinates": [
    -73.98852953216603,
    40.77695448599336
   ]
  },
  "name": "New York Cat Hospital",
  "borough": "Upper West",
  "phone": "2125356369",
  "rating": 4.8,
  "address": "143 Freedom Place @66 Street, New York, NY 10069",
  "open24h": false,
  "specialFeatures": "Cats Only",
  "officialWebsite": "https://newyorkcathospital.com/",
  "category": "Vet"
 },
 {
  "_id": "69ddc030519927aba684d264",
  "id": 9,
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9085423,
    40.7203896
   ]
  },
  "imageURL": "https://static.wixstatic.com/media/56470fbc04954ebfb386f4a0048e8346.jpg/v1/fill/w_2560,h_2252,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/56470fbc04954ebfb386f4a0048e8346.jpg",
  "name": "Maspeth Animal Hospital",
  "borough": "Queens",
  "phone": "7188999200",
  "rating": 4.7,
  "address": "71-08 Grand Ave, Maspeth, NY 11378",
  "open24h": false,
  "specialFeatures": null,
  "officialWebsite": "http://www.maspethanimalhospital.net/",
  "category": "Vet"
 },
 {
  "_id": "69ddc030519927aba684d268",
  "id": 13,
  "location": {
   "type": "Point",
   "coordinates": [
    -73.9580456,
    40.7600642
   ]
  },
  "imageURL": "https://www.amcny.org/wp-content/uploads/2025/12/24-7-Emergency-Veterinarians-at-AMC-aspect-ratio-536-324.jpg",
  "name": "The Schwarzman Animal Medical Center",
  "borough": "Upper West",
  "phone": "2128388100",
  "rating": 3.8,
  "address": "510 E 62nd St, New York, NY 10065",
  "open24h": true,
  "specialFeatures": "Large Scale with various equiptments",
  "officialWebsite": "https://www.amcny.org/",
  "category": "Vet"
 },
 {
  "_id": "69ddc030519927aba684d266",
  "id": 11,
  "location": {
   "type": "Point",
   "coordinates": [
    -73.960929,
    40.769127
   ]
  },
  "imageURL": "https://images.ctfassets.net/82d3r48zq721/0jQu9HNariO1PzrTeJCpw/a76ffb6013e95cf302efd5dbe2e796b8/SmallDoor_UpperEastSide_NY_LocationPage_01_1920x1280_RGB.webp?w=640&q=90",
  "name": "Small Door Veterinary - Upper East Side",
  "borough": "Upper East",
  "phone": "2123009892",
  "rating": 4.5,
  "address": "1231 3rd Ave, New York, NY 10021",
  "open24h": false,
  "specialFeatures": "Chain Hospital with multiple locations",
  "officialWebsite": "https://www.smalldoorvet.com/locations/upper-east-side",
  "category": "Vet"
 }
];
