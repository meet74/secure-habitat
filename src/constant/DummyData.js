export const TYPES = {
    bunglow:"bunglow",
    house:"house",
    apartment:"apartment"
}

export const dummyData = [
    {
        image:require("../../assets/images/demo-1.jpg"),
        address:"411, Victoria s",
        city:"Kitchener, N2E",
        price:"450,000",
        rating:4.8,
        "type": TYPES.bunglow
    },
    {
        image:require("../../assets/images/demo-2.jpg"),
        address:"45, Wellington s",
        city:"Kitchener, N2E",
        price:"230,000",
        rating:4.3,
        "type": TYPES.apartment
    },

    {
        image:require("../../assets/images/demo-3.jpg"),
        address:"22, Huron road",
        city:"Kitchener, N2R",
        price:"550,000",
        rating:4.4,
        "type": TYPES.bunglow
    },

]

export const dummyCities = [
    {
      name: "Toronto",
      fullname:"Toronto, ON"
    },
    {
      name: "Vancouver",
      fullname:"Calgary, AB"
    },
    {
      name: "Halifax",
      fullname:"Halifax, NS"
    },
    {
      name: "Montreal",
      fullname:"Montreal, QC"
    },
  
  ];
  
  export const dummyListData = {
    props: [
      {
        "id": "1",
        "address": "123 Main Street",
        "city": "Toronto",
        "description": "Spacious modern house located in the heart of Toronto. Perfect for families or those who love to entertain. Close to schools, parks, and amenities. This beautiful house features high ceilings, large windows, and a spacious backyard. Amenities include a gourmet kitchen, hardwood floors, and a private garage.",
        "image": "https://images.livemint.com/img/2022/10/08/1600x900/Canada-House-johnson-U6Q6zVDgmSs_1665213509965_1665213519096_1665213519096.jpg",
        "price": "1500000",
        "title": "Modern House in Toronto",
        "type": "house",
        "owner": "John Doe",
        "amenities": ["Gourmet kitchen", "Hardwood floors", "Private garage", "Large backyard"]
      },
      {
        "id": "2",
        "address": "456 Elm Street",
        "city": "Toronto",
        "description": "Beautiful family home with a large backyard. Ideal for families looking for a quiet neighborhood with easy access to transportation and shopping. This cozy home features spacious rooms, a fully equipped kitchen, and a landscaped garden. Amenities include a fireplace, patio, and attached garage.",
        "image": "https://storeys.com/media-library/red-brick-houses-in-toronto.jpg?id=45134480&width=1245&height=700&quality=90&coordinates=0%2C0%2C0%2C0",
        "price": "1200000",
        "title": "Cozy Family Home",
        "type": "house",
        "owner": "Jane Smith",
        "amenities": ["Fireplace", "Patio", "Attached garage", "Landscaped garden"]
      },
      {
        "id": "3",
        "address": "789 Oak Street",
        "city": "Toronto",
        "description": "Stunning luxury apartment with panoramic views of the city. This modern apartment is perfect for urban professionals seeking upscale living. Features include floor-to-ceiling windows, a spacious balcony, and top-of-the-line appliances. Building amenities include a fitness center, rooftop pool, and concierge service.",
        "image": "https://torontolife.com/wp-content/uploads/2020/07/DSC_2119-1044x783.jpg",
        "price": "2000000",
        "title": "Downtown Luxury Apartment",
        "type": "apartment",
        "owner": "Emily Johnson",
        "amenities": ["Floor-to-ceiling windows", "Spacious balcony", "Fitness center", "Rooftop pool", "Concierge service"]
      },
      {
        "id": "4",
        "address": "1011 Maple Avenue",
        "city": "Toronto",
        "description": "Modern Condo near Waterfront. This sleek condo offers contemporary living in a prime location. Features include an open-concept layout, designer finishes, and stunning views of the waterfront. Building amenities include a gym, party room, and 24-hour security.",
        "image": "https://img.huffingtonpost.com/asset/5cd64da02100005800c4c3e9.jpeg?ops=scalefit_720_noupscale&format=webp",
        "price": "1700000",
        "title": "Modern Condo near Waterfront",
        "type": "apartment",
        "owner": "Michael Brown",
        "amenities": ["Open-concept layout", "Designer finishes", "Waterfront views", "Gym", "Party room", "24-hour security"]
      },
      {
        "id": "5",
        "address": "1314 Pine Road",
        "city": "Toronto",
        "description": "Scenic Bungalow with Mountain View. Escape the city and embrace nature in this charming bungalow. Features include a cozy fireplace, wrap-around porch, and stunning mountain views. Perfect for outdoor enthusiasts and nature lovers.",
        "image": "https://cdna.artstation.com/p/assets/images/images/015/674/428/large/adrian-parkinson-02-web.jpg?1549212133",
        "price": "2800000",
        "title": "Scenic Bungalow with Mountain View",
        "type": "bungalow",
        "owner": "Sarah Wilson",
        "amenities": ["Cozy fireplace", "Wrap-around porch", "Mountain views"]
      },
      {
        "id": "6",
        "address": "1516 Cedar Lane",
        "city": "Toronto",
        "description": "Rustic Bungalow Retreat. Experience serenity in this rustic bungalow surrounded by nature. Features include exposed wooden beams, a stone fireplace, and a tranquil garden. Perfect for those seeking a peaceful retreat.",
        "image": "https://www.thehousedesigners.com/images/plans/01/AMD/bulk/8739/2164f-jorgenson-design-dev-amda-5998-edited_1_m.webp",
        "price": "2100000",
        "title": "Rustic Bungalow Retreat",
        "type": "bungalow",
        "owner": "David Anderson",
        "amenities": ["Exposed wooden beams", "Stone fireplace", "Tranquil garden"]
      },
      {
        "id": "7",
        "address": "789 Granville Street",
        "city": "Vancouver",
        "description": "Modern House in Vancouver. This contemporary house offers sleek design and luxurious amenities. Features include floor-to-ceiling windows, a gourmet kitchen, and a private backyard oasis. Perfect for those seeking modern living in the heart of the city.",
        "image": "https://cdna.artstation.com/p/assets/images/images/015/674/428/large/adrian-parkinson-02-web.jpg?1549212133",
        "price": "1600000",
        "title": "Modern House in Vancouver",
        "type": "house",
        "owner": "Jessica Smith",
        "amenities": ["Floor-to-ceiling windows", "Gourmet kitchen", "Private backyard oasis"]
      },
      {
        "id": "8",
        "address": "1011 Robson Avenue",
        "city": "Vancouver",
        "description": "Spacious Family Home in Vancouver. This spacious family home offers ample living space and a backyard for outdoor enjoyment. Features include a cozy fireplace, hardwood floors, and a large master suite. Perfect for growing families.",
        "image": "https://www.thehousedesigners.com/images/plans/01/AMD/bulk/8739/2164f-jorgenson-design-dev-amda-5998-edited_1_m.webp",
        "price": "1300000",
        "title": "Spacious Family Home in Vancouver",
        "type": "house",
        "owner": "Daniel Brown",
        "amenities": ["Cozy fireplace", "Hardwood floors", "Large master suite"]
      },
      {
        "id": "9",
        "address": "1213 Burrard Street",
        "city": "Vancouver",
        "description": "Downtown Luxury Apartment in Vancouver. Live in luxury in this stunning downtown apartment. Features include high-end finishes, modern appliances, and breathtaking city views. Building amenities include a fitness center, rooftop pool, and concierge service.",
        "image": "https://images.unsplash.com/photo-1577915589428-13e8f1d5c552?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhbmFkYSUyMGhvdXNlfGVufDB8fDB8fHww",
        "price": "2200000",
        "title": "Downtown Luxury Apartment in Vancouver",
        "type": "apartment",
        "owner": "Rachel Johnson",
        "amenities": ["High-end finishes", "Modern appliances", "City views", "Fitness center", "Rooftop pool", "Concierge service"]
      },
      {
        "id": "10",
        "address": "1415 Cambie Street",
        "city": "Vancouver",
        "description": "Modern Studio Apartment in Vancouver. Live in style in this sleek studio apartment. Features include an open-concept layout, designer fixtures, and a private balcony. Building amenities include a gym, lounge, and rooftop terrace.",
        "image": "https://st3.depositphotos.com/1625039/12819/i/950/depositphotos_128193770-stock-photo-luxury-house-in-canada.jpg",
        "price": "1500000",
        "title": "Modern Studio Apartment in Vancouver",
        "type": "apartment",
        "owner": "Andrew Wilson",
        "amenities": ["Open-concept layout", "Designer fixtures", "Private balcony", "Gym", "Lounge", "Rooftop terrace"]
      },
      {
        "id": "11",
        "address": "1617 Granville Loop",
        "city": "Vancouver",
        "description": "Scenic Bungalow with City View in Vancouver. This charming bungalow offers stunning views of the city skyline. Features include a spacious deck, cozy fireplace, and a beautifully landscaped garden. Ideal for those seeking tranquility with a touch of urban living.",
        "image": "https://3.bp.blogspot.com/_-rpqMA-o0AY/TOnoK7lqAJI/AAAAAAAABaU/VSoeJ16RXYs/s1600/Typical-Canadian-House.bmp",
        "price": "2900000",
        "title": "Scenic Bungalow with City View in Vancouver",
        "type": "bungalow",
        "owner": "Emily Roberts",
        "amenities": ["Spacious deck", "Cozy fireplace", "Landscaped garden"]
      },
      {
        "id": "12",
        "address": "1819 Robson Road",
        "city": "Vancouver",
        "description": "Rustic Waterfront Bungalow in Vancouver. Escape to this rustic waterfront bungalow nestled along the shoreline. Features include panoramic views of the ocean, a private dock, and a spacious outdoor patio. Perfect for nature lovers and outdoor enthusiasts.",
        "image": "https://s3.amazonaws.com/homelink/media/images/listingsrescale_stage/610_385/5833a9f51e246_958_508.JPG",
        "price": "2200000",
        "title": "Rustic Waterfront Bungalow in Vancouver",
        "type": "bungalow",
        "owner": "Michael Thompson",
        "amenities": ["Panoramic ocean views", "Private dock", "Outdoor patio"]
      },
      {
        "id": "13",
        "address": "2122 Saint Catherine Street",
        "city": "Montreal",
        "description": "Historic Mansion in Montreal. Step back in time with this historic mansion located in the heart of Montreal. Features include grand architecture, ornate detailing, and expansive grounds. Ideal for those with a passion for history and luxury living.",
        "image": "https://storeys.com/media-library/mortgage-stress-test.png?id=34014142&width=1245&height=700&quality=90&coordinates=0%2C31%2C0%2C31",
        "price": "1700000",
        "title": "Historic Mansion in Montreal",
        "type": "house",
        "owner": "Sophia Lee",
        "amenities": ["Grand architecture", "Ornate detailing", "Expansive grounds"]
      },
      {
        "id": "14",
        "address": "2324 Rue Sherbrooke",
        "city": "Montreal",
        "description": "Renovated Townhouse in Montreal. Experience modern living in this renovated townhouse in Montreal. Features include an open-concept layout, high-end finishes, and a private rooftop terrace. Perfect for urban dwellers seeking style and sophistication.",
        "image": "https://thumbs.dreamstime.com/b/luxury-house-beautiful-landscaping-two-car-garage-sunny-day-home-exterior-77903638.jpg",
        "price": "1400000",
        "title": "Renovated Townhouse in Montreal",
        "type": "house",
        "owner": "Matthew Harris",
        "amenities": ["Open-concept layout", "High-end finishes", "Private rooftop terrace"]
      },
      {
        "id": "15",
        "address": "2526 Boulevard René-Lévesque",
        "city": "Montreal",
        "description": "Luxury Apartment in Old Montreal. Indulge in luxury living with this exquisite apartment situated in the historic district of Old Montreal. Features include high ceilings, floor-to-ceiling windows, and a private balcony overlooking the cobblestone streets. Perfect for those seeking elegance and sophistication.",
        "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "price": "2600000",
        "title": "Luxury Apartment in Old Montreal",
        "type": "apartment",
        "owner": "Olivia Anderson",
        "amenities": ["High ceilings", "Floor-to-ceiling windows", "Private balcony"]
      },
      {
        "id": "16",
        "address": "2728 Rue de la Montagne",
        "city": "Montreal",
        "description": "Modern Loft in Plateau Mont-Royal. Experience urban living at its finest with this modern loft located in the vibrant Plateau Mont-Royal neighborhood. Features include an open-concept layout, exposed brick walls, and a rooftop terrace with panoramic city views. Ideal for those with a flair for contemporary design.",
        "image": "https://img.huffingtonpost.com/asset/5cd64da02100005800c4c3e9.jpeg?ops=scalefit_720_noupscale&format=webp",
        "price": "1800000",
        "title": "Modern Loft in Plateau Mont-Royal",
        "type": "apartment",
        "owner": "Daniel White",
        "amenities": ["Open-concept layout", "Exposed brick walls", "Rooftop terrace"]
      },
      {
        "id": "17",
        "address": "2930 Avenue du Musée",
        "city": "Montreal",
        "description": "Riverside Bungalow Retreat in Montreal. Escape to this charming riverside bungalow nestled along the banks of the St. Lawrence River. Features include a spacious deck, panoramic views, and direct access to the water. Perfect for nature lovers and outdoor enthusiasts.",
        "image": "https://img.huffingtonpost.com/asset/5cd64da02100005800c4c3e9.jpeg?ops=scalefit_720_noupscale&format=webp",
        "price": "3000000",
        "title": "Riverside Bungalow Retreat in Montreal",
        "type": "bungalow",
        "owner": "Sophie Martin",
        "amenities": ["Spacious deck", "Panoramic views", "Direct water access"]
      },
      {
        "id": "18",
        "address": "3132 Rue Saint-Paul",
        "city": "Montreal",
        "description": "Secluded Forest Bungalow in Montreal. Find serenity in this secluded forest bungalow tucked away in the heart of nature. Features include a cozy fireplace, expansive windows, and a wraparound deck surrounded by lush greenery. Ideal for those seeking peace and tranquility.",
        "image": "https://blog.renovationfind.com/wp-content/uploads/2023/12/photo-1501638758338-a7c69c3189b8-1.jpg",
        "price": "2300000",
        "title": "Secluded Forest Bungalow in Montreal",
        "type": "bungalow",
        "owner": "Liam Wilson",
        "amenities": ["Cozy fireplace", "Expansive windows", "Wraparound deck"]
      },
      {
        "id": "19",
        "address": "123 Oceanview Avenue",
        "city": "Halifax",
        "description": "Oceanview Paradise. Embrace coastal living with this stunning oceanfront property boasting breathtaking views of the Atlantic Ocean. Features include a private beach, spacious deck, and luxurious amenities. Perfect for those seeking a seaside escape.",
        "image": "https://vr-windows.com/wp-content/uploads/2022/01/prepare-windows-for-winter.jpg",
        "price": "2800000",
        "title": "Oceanview Paradise",
        "type": "house",
        "owner": "Emma Johnson",
        "amenities": ["Private beach", "Spacious deck", "Luxurious amenities"]
      },
      {
        "id": "20",
        "address": "456 Forest Road",
        "city": "Halifax",
        "description": "Forest Retreat. Retreat to nature with this charming forest hideaway nestled amidst towering trees and lush greenery. Features include a cozy cabin, scenic trails, and a tranquil pond. Ideal for outdoor enthusiasts and nature lovers.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZNlnJeZ5mnE9ErMijve1plYynaA-uHYclDg&usqp=CAU",
        "price": "2000000",
        "title": "Forest Retreat",
        "type": "house",
        "owner": "Noah Smith",
        "amenities": ["Cozy cabin", "Scenic trails", "Tranquil pond"]
      },
      {
        "id": "21",
        "address": "789 Downtown Street",
        "city": "Halifax",
        "description": "Downtown Luxury Living. Experience the best of urban living with this stylish apartment located in the heart of downtown Halifax. Features include modern amenities, breathtaking city views, and convenient access to shops and restaurants.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBuZi5EIe_uSz_yUXPDx36t3E1iNIj7TEAng&usqp=CAU",
        "price": "1700000",
        "title": "Downtown Luxury Living",
        "type": "apartment",
        "owner": "Ava Brown",
        "amenities": ["Modern amenities", "City views", "Convenient access"]
      },
      {
        "id": "22",
        "address": "1011 Harbourview Drive",
        "city": "Halifax",
        "description": "Harbourfront Haven. Enjoy waterfront living with this stunning property situated along the Halifax Harbour. Features include a private dock, panoramic views, and spacious outdoor living areas. Perfect for those seeking a coastal lifestyle.",
        "image": "https://www.thespruce.com/thmb/KulDXc3fS5E_1ssZaXFKBzP7IhU=/2048x1365/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-126658106-5a2e1b4f8e1b6e00372788b2.jpg",
        "price": "3200000",
        "title": "Harbourfront Haven",
        "type": "house",
        "owner": "William Taylor",
        "amenities": ["Private dock", "Panoramic views", "Outdoor living areas"]
      },
      {
        "id": "23",
        "address": "1213 Spring Garden Road",
        "city": "Halifax",
        "description": "Urban Oasis. Escape the hustle and bustle with this peaceful oasis located in the heart of Halifax. Features include a lush garden, serene courtyard, and modern amenities. Perfect for those seeking tranquility in the city.",
        "image": "https://www.thespruce.com/thmb/eCpU1GmFv96v2oM-mjjfvxszpsU=/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-126658106-5a2e1b4f8e1b6e00372788b2.jpg",
        "price": "1900000",
        "title": "Urban Oasis",
        "type": "house",
        "owner": "Charlotte Clark",
        "amenities": ["Lush garden", "Serene courtyard", "Modern amenities"]
      },
      {
        "id": "24",
        "address": "1415 Waterfront Avenue",
        "city": "Halifax",
        "description": "Waterfront Escape. Retreat to this stunning waterfront property boasting panoramic views of the ocean. Features include a private beach, expansive deck, and luxurious accommodations. Perfect for those seeking a luxurious coastal retreat.",
        "image": "https://www.thespruce.com/thmb/QKzL1-WdxY9bZ6VhCVc5U2hjCQU=/2048x1365/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1160021958-cb35a72770ab4d4d93a4fc7f8ae91bb1.jpg",
        "price": "3500000",
        "title": "Waterfront Escape",
        "type": "house",
        "owner": "Liam Robinson",
        "amenities": ["Private beach", "Expansive deck", "Luxurious accommodations"]
      },
      {
        "id": "25",
        "address": "1617 Lakeside Drive",
        "city": "Halifax",
        "description": "Lakefront Retreat. Experience lakeside living with this charming retreat nestled along the shores of Lake Banook. Features include a private dock, scenic views, and cozy interiors. Perfect for those seeking a peaceful getaway.",
        "image": "https://www.thespruce.com/thmb/S2UQtrVDLKjq0pG5rbAxgQjM9M8=/2048x1365/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-865873440-5ab8cfaa119fa800370f6f8f.jpg",
        "price": "2800000",
        "title": "Lakefront Retreat",
        "type": "house",
        "owner": "Isabella Young",
        "amenities": ["Private dock", "Scenic views", "Cozy interiors"]
      },
      {
        "id": "26",
        "address": "1819 Maple Street",
        "city": "Toronto",
        "description": "Luxury Penthouse in Toronto. Elevate your lifestyle with this luxurious penthouse boasting panoramic views of the city skyline. Features include high-end finishes, expansive living spaces, and a private rooftop terrace. Perfect for those with discerning taste.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdm1utVw5ohxI4hbE4Vcx-rDqGfXcZWW47XQ&usqp=CAU",
        "price": "4500000",
        "title": "Luxury Penthouse in Toronto",
        "type": "apartment",
        "owner": "Sophia Rodriguez",
        "amenities": ["High-end finishes", "Expansive living spaces", "Private rooftop terrace"]
      },
      {
        "id": "27",
        "address": "2122 Queen Street",
        "city": "Toronto",
        "description": "Chic Condo in Yorkville. Embrace modern living with this chic condo located in the upscale neighborhood of Yorkville. Features include sleek finishes, designer appliances, and access to world-class amenities. Ideal for those seeking luxury and convenience.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqKjQo1Z6b2ZmStADQajld5m7s_NY0Bv_3vA&usqp=CAU",
        "price": "2200000",
        "title": "Chic Condo in Yorkville",
        "type": "apartment",
        "owner": "Ethan Martinez",
        "amenities": ["Sleek finishes", "Designer appliances", "World-class amenities"]
      },
      {
        "id": "28",
        "address": "2324 King Street",
        "city": "Toronto",
        "description": "Modern Townhouse in Liberty Village. Live in style with this modern townhouse located in the vibrant community of Liberty Village. Features include an open-concept layout, high ceilings, and a private rooftop terrace with skyline views. Perfect for urban dwellers seeking sophistication.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9x68HwTqjFBnmR3jwNX7uI7ZmmsBpRDBHFg&usqp=CAU",
        "price": "2600000",
        "title": "Modern Townhouse in Liberty Village",
        "type": "house",
        "owner": "Amelia Carter",
        "amenities": ["Open-concept layout", "High ceilings", "Private rooftop terrace"]
      },
      {
        "id": "29",
        "address": "2526 Bay Street",
        "city": "Toronto",
        "description": "Luxury Mansion in Rosedale. Live like royalty with this luxurious mansion located in the prestigious neighborhood of Rosedale. Features include grand interiors, opulent finishes, and meticulously landscaped grounds. Perfect for those with a taste for the finer things in life.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYIbZyMYF-3-WrFc2s1Xx07BBZZl13E3Wug&usqp=CAU",
        "price": "8000000",
        "title": "Luxury Mansion in Rosedale",
        "type": "house",
        "owner": "Lucas Thompson",
        "amenities": ["Grand interiors", "Opulent finishes", "Landscaped grounds"]
      },
      {
        "id": "30",
        "address": "2628 Dundas Street",
        "city": "Toronto",
        "description": "Contemporary Condo in Downtown Toronto. Experience downtown living at its finest with this contemporary condo located in the heart of Toronto. Features include floor-to-ceiling windows, sleek finishes, and access to premium amenities. Ideal for those seeking a cosmopolitan lifestyle.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpqS0yNDxxU_1eQbJQqyWLKtyCjstugj6oQ&usqp=CAU",
        "price": "1900000",
        "title": "Contemporary Condo in Downtown Toronto",
        "type": "apartment",
        "owner": "Ella Green",
        "amenities": ["Floor-to-ceiling windows", "Sleek finishes", "Premium amenities"]
      }
    ]
  };
  

//   export const dummyListData = {
//     props:[
//         {
//             "address": "123 Main Street",
//             "city": "Toronto",
//             "description": "Spacious modern house located in the heart of Toronto.",
//             "image": "https://example.com/toronto/house1.jpg",
//             "price": "1500000",
//             "title": "Modern House in Toronto",
//             "type": "house"
//           },
//           {
//             "address": "456 Elm Street",
//             "city": "Toronto",
//             "description": "Beautiful family home with a large backyard.",
//             "image": "https://example.com/toronto/house2.jpg",
//             "price": "1200000",
//             "title": "Cozy Family Home",
//             "type": "house"
//           },
//           {
//             "address": "789 Oak Street",
//             "city": "Toronto",
//             "description": "Stunning luxury apartment with panoramic views of the city.",
//             "image": "https://example.com/toronto/apartment1.jpg",
//             "price": "2000000",
//             "title": "Downtown Luxury Apartment",
//             "type": "apartment"
//           },
//           {
//             "address": "1011 Maple Avenue",
//             "city": "Toronto",
//             "description": "Modern Condo near Waterfront.",
//             "image": "https://example.com/toronto/apartment2.jpg",
//             "price": "1700000",
//             "title": "Modern Condo near Waterfront",
//             "type": "apartment"
//           },
//           {
//             "address": "1314 Pine Road",
//             "city": "Toronto",
//             "description": "Scenic Bungalow with Mountain View.",
//             "image": "https://example.com/toronto/bungalow1.jpg",
//             "price": "2800000",
//             "title": "Scenic Bungalow with Mountain View",
//             "type": "bungalow"
//           },
//           {
//             "address": "1516 Cedar Lane",
//             "city": "Toronto",
//             "description": "Rustic Bungalow Retreat.",
//             "image": "https://example.com/toronto/bungalow2.jpg",
//             "price": "2100000",
//             "title": "Rustic Bungalow Retreat",
//             "type": "bungalow"
//           },
//           {
//             "address": "789 Granville Street",
//             "city": "Vancouver",
//             "description": "Modern House in Vancouver.",
//             "image": "https://example.com/vancouver/house1.jpg",
//             "price": "1600000",
//             "title": "Modern House in Vancouver",
//             "type": "house"
//           },
//           {
//             "address": "1011 Robson Avenue",
//             "city": "Vancouver",
//             "description": "Spacious Family Home in Vancouver.",
//             "image": "https://example.com/vancouver/house2.jpg",
//             "price": "1300000",
//             "title": "Spacious Family Home in Vancouver",
//             "type": "house"
//           },
//           {
//             "address": "1213 Burrard Street",
//             "city": "Vancouver",
//             "description": "Downtown Luxury Apartment in Vancouver.",
//             "image": "https://example.com/vancouver/apartment1.jpg",
//             "price": "2200000",
//             "title": "Downtown Luxury Apartment in Vancouver",
//             "type": "apartment"
//           },
//           {
//             "address": "1415 Cambie Street",
//             "city": "Vancouver",
//             "description": "Modern Studio Apartment in Vancouver.",
//             "image": "https://example.com/vancouver/apartment2.jpg",
//             "price": "1500000",
//             "title": "Modern Studio Apartment in Vancouver",
//             "type": "apartment"
//           },
//           {
//             "address": "1617 Granville Loop",
//             "city": "Vancouver",
//             "description": "Scenic Bungalow with City View in Vancouver.",
//             "image": "https://example.com/vancouver/bungalow1.jpg",
//             "price": "2900000",
//             "title": "Scenic Bungalow with City View in Vancouver",
//             "type": "bungalow"
//           },
//           {
//             "address": "1819 Robson Road",
//             "city": "Vancouver",
//             "description": "Rustic Waterfront Bungalow in Vancouver.",
//             "image": "https://example.com/vancouver/bungalow2.jpg",
//             "price": "2200000",
//             "title": "Rustic Waterfront Bungalow in Vancouver",
//             "type": "bungalow"
//           },
//           {
//             "address": "2122 Saint Catherine Street",
//             "city": "Montreal",
//             "description": "Historic Mansion in Montreal.",
//             "image": "https://example.com/montreal/house1.jpg",
//             "price": "1700000",
//             "title": "Historic Mansion in Montreal",
//             "type": "house"
//           },
//           {
//             "address": "2324 Rue Sherbrooke",
//             "city": "Montreal",
//             "description": "Renovated Townhouse in Montreal.",
//             "image": "https://example.com/montreal/house2.jpg",
//             "price": "1400000",
//             "title": "Renovated Townhouse in Montreal",
//             "type": "house"
//           },
//           {
//             "address": "2526 Boulevard René-Lévesque",
//             "city": "Montreal",
//             "description": "Luxury Apartment in Old Montreal.",
//             "image": "https://example.com/montreal/apartment1.jpg",
//             "price": "2300000",
//             "title": "Luxury Apartment in Old Montreal",
//             "type": "apartment"
//           },
//           {
//             "address": "2728 Rue de la Montagne",
//             "city": "Montreal",
//             "description": "Modern Loft in Plateau Mont-Royal.",
//             "image": "https://example.com/montreal/apartment2.jpg",
//             "price": "1600000",
//             "title": "Modern Loft in Plateau Mont-Royal",
//             "type": "apartment"
//           },
//           {
//             "address": "2930 Avenue du Musée",
//             "city": "Montreal",
//             "description": "Riverside Bungalow Retreat in Montreal.",
//             "image": "https://example.com/montreal/bungalow1.jpg",
//             "price": "3000000",
//             "title": "Riverside Bungalow Retreat in Montreal",
//             "type": "bungalow"
//           },
//           {
//             "address": "3132 Rue Saint-Paul",
//             "city": "Montreal",
//             "description": "Secluded Forest Bungalow in Montreal.",
//             "image": "https://example.com/montreal/bungalow2.jpg",
//             "price": "2300000",
//             "title": "Secluded Forest Bungalow in Montreal",
//             "type": "bungalow"
//           },
//           {
//             "address": "123 Oceanview Avenue",
//             "city": "Halifax",
//             "description": "Beautiful house with stunning ocean views.",
//             "image": "https://example.com/halifax/house1.jpg",
//             "price": "2000000",
//             "title": "Oceanview Paradise",
//             "type": "house"
//           },
//           {
//             "address": "456 Forest Road",
//             "city": "Halifax",
//             "description": "Cozy house nestled in a quiet forest setting.",
//             "image": "https://example.com/halifax/house2.jpg",
//             "price": "1500000",
//             "title": "Forest Retreat",
//             "type": "house"
//           },
//           {
//             "address": "789 Downtown Street",
//             "city": "Halifax",
//             "description": "Modern apartment in the heart of downtown.",
//             "image": "https://example.com/halifax/apartment1.jpg",
//             "price": "1800000",
//             "title": "Downtown Luxury Living",
//             "type": "apartment"
//           },
//           {
//             "address": "101 Seaside Avenue",
//             "city": "Halifax",
//             "description": "Chic apartment with breathtaking seaside views.",
//             "image": "https://example.com/halifax/apartment2.jpg",
//             "price": "2200000",
//             "title": "Seaside Serenity",
//             "type": "apartment"
//           },
//           {
//             "address": "321 Lakeview Lane",
//             "city": "Halifax",
//             "description": "Quaint bungalow overlooking a tranquil lake.",
//             "image": "https://example.com/halifax/bungalow1.jpg",
//             "price": "1700000",
//             "title": "Lakeside Haven",
//             "type": "bungalow"
//           },
//           {
//             "address": "654 Mountainview Road",
//             "city": "Halifax",
//             "description": "Rustic bungalow nestled in the mountains.",
//             "image": "https://example.com/halifax/bungalow2.jpg",
//             "price": "1900000",
//             "title": "Mountain Retreat",
//             "type": "bungalow"
//           },
//           {
//             "address": "789 Hillcrest Drive",
//             "city": "Calgary",
//             "description": "Luxurious house with panoramic city views.",
//             "image": "https://example.com/calgary/house1.jpg",
//             "price": "2500000",
//             "title": "Cityscape Manor",
//             "type": "house"
//           },
//           {
//             "address": "456 Meadow Lane",
//             "city": "Calgary",
//             "description": "Spacious house surrounded by lush meadows.",
//             "image": "https://example.com/calgary/house2.jpg",
//             "price": "2200000",
//             "title": "Meadowview Retreat",
//             "type": "house"
//           },
//           {
//             "address": "101 Downtown Boulevard",
//             "city": "Calgary",
//             "description": "Modern apartment in the bustling downtown core.",
//             "image": "https://example.com/calgary/apartment1.jpg",
//             "price": "2000000",
//             "title": "Urban Oasis",
//             "type": "apartment"
//           },
//           {
//             "address": "789 Skyline Avenue",
//             "city": "Calgary",
//             "description": "Sky-high apartment with breathtaking skyline views.",
//             "image": "https://example.com/calgary/apartment2.jpg",
//             "price": "1800000",
//             "title": "Skyline Heights",
//             "type": "apartment"
//           },
//           {
//             "address": "321 Riverfront Road",
//             "city": "Calgary",
//             "description": "Charming bungalow along the riverfront.",
//             "image": "https://example.com/calgary/bungalow1.jpg",
//             "price": "1900000",
//             "title": "Riverside Retreat",
//             "type": "bungalow"
//           },
//           {
//             "address": "654 Hilltop Terrace",
//             "city": "Calgary",
//             "description": "Hilltop bungalow with panoramic mountain views.",
//             "image": "https://example.com/calgary/bungalow2.jpg",
//             "price": "2100000",
//             "title": "Mountainview Sanctuary",
//             "type": "bungalow"
//           }
//       ]
//   }