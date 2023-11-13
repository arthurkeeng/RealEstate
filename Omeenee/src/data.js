import img1 from "./images/japan.jpg";
import img2 from "./images/artic.jpg";
import img3 from "./images/tokyo.jpg";
import img4 from "./images/paris.jpg";
import img5 from "./images/plains.jpg";
import img6 from "./images/seychelles.jpg";
export const products = [
  {
    id: 0,
    amount: 1,
    category: "shoes",
    inCart: false,
    image: img1,
    name: "jump suit",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In dolores asperiores magnam consequuntur veritatis sit suscipit rerum similique neque animi amet, aspernatur, hic, dolorem cupiditate officia repellendus? Aliquid, reiciendis! Suscipit id praesentium corporis delectus soluta eveniet, sasperiores harum maxime libero.",
    price: 54,
    size: [],
    color: [],
  },
  {
    id: 1,
    amount: 1,
    category: "suits",
    inCart: false,
    image: img2,
    name: "crop top",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In dolores asperiores magnam consequuntur veritatis sit suscipit rerum similique neque animi amet, aspernatur, hic, dolorem cupiditate officia repellendus? Aliquid, reiciendis! Suscipit id praesentium corporis delectus soluta eveniet, sasperiores harum maxime libero.",
    price: 28,

   size : ['S','M','L' , 'XL' , 'XXL' ],
    color: ['red' , 'blue', 'grey'],
  },
  {
    id: 2,
    amount: 1,
    category: "sneakers",
    inCart: false,
    image: img3,
    name: "jean top",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In dolores asperiores magnam consequuntur veritatis sit suscipit rerum similique neque animi amet, aspernatur, hic, dolorem cupiditate officia repellendus? Aliquid, reiciendis! Suscipit id praesentium corporis delectus soluta eveniet, sasperiores harum maxime libero.",
    price: 33,

   size : ['S','M','L' , 'XL' , 'XXL' ],
    color: ['red' , 'blue', 'grey'],
  },
  {
    id: 3,
    amount: 1,
    category: "men",

    inCart: false,
    image: img4,
    name: "jean top",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In dolores asperiores magnam consequuntur veritatis sit suscipit rerum similique neque animi amet, aspernatur, hic, dolorem cupiditate officia repellendus? Aliquid, reiciendis! Suscipit id praesentium corporis delectus soluta eveniet, sasperiores harum maxime libero.",
    price: 33,
  
   size : ['S','M','L' , 'XL' , 'XXL' ],
    color: ['red' , 'blue', 'grey'],
  },
  {
    id: 4,
    amount: 1,
    category: "women",

    inCart: false,
    image: img5,
    name: "jean top",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In dolores asperiores magnam consequuntur veritatis sit suscipit rerum similique neque animi amet, aspernatur, hic, dolorem cupiditate officia repellendus? Aliquid, reiciendis! Suscipit id praesentium corporis delectus soluta eveniet, sasperiores harum maxime libero.",
    price: 33,
   size : ['S','M','L' , 'XL' , 'XXL' ],
    color: ['red' , 'blue', 'grey'],
  },
  {
    id: 5,
    amount: 1,
    category: "hair",

    inCart: false,
    image: img6,
    name: "jean top",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In dolores asperiores magnam consequuntur veritatis sit suscipit rerum similique neque animi amet, aspernatur, hic, dolorem cupiditate officia repellendus? Aliquid, reiciendis! Suscipit id praesentium corporis delectus soluta eveniet, sasperiores harum maxime libero.",
    price: 33,
   size : ['S','M','L' , 'XL' , 'XXL' ],
    color: ['red' , 'blue', 'grey'],
  },
  {
    id: 6,
    amount: 1,
    category: "bags",

    inCart: false,
    image: img1,
    name: "jean top",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In dolores asperiores magnam consequuntur veritatis sit suscipit rerum similique neque animi amet, aspernatur, hic, dolorem cupiditate officia repellendus? Aliquid, reiciendis! Suscipit id praesentium corporis delectus soluta eveniet, sasperiores harum maxime libero.",
    price: 33,
   size : ['S','M','L' , 'XL' , 'XXL' ],
    color: ['red' , 'blue', 'grey'],
  },
  {
    id: 7,
    amount: 1,
    category: "jewelry",

    inCart: false,
    image: img2,
    name: "sneaker shorts",
    description: "sleot sre  sdfre dsmewl te r wrw",
    price: 459,
   size : ['S','M','L' , 'XL' , 'XXL' ],
    color: ['red' , 'blue', 'grey'],
  },
  {
    id: 8,
    amount: 1,
    category: "casuals",

    inCart: false,
    image: img2,
    name: "sneaker shorts",
    description: "sleot sre  sdfre dsmewl te r wrw",
    price: 459,
   size : ['S','M','L' , 'XL' , 'XXL' ],
    color: ['red' , 'blue', 'grey'],
  },
];

export const announcements = [
  {
    id: 0,
    image: img1,
  },
  {
    id: 1,
    image: img2,
  },
  {
    id: 2,
    image: img3,
  },
];

export const category = [
  {
    category :"Men's Clothes" ,
    img: img1,
    name : 'men'
  },
  {
    category :"Women's Clothes" ,
    img: img2,
    name : 'women'
  },
  {
    category :"Sneakers" ,
    img: img3,
    name : 'sneakers'
  },
  {
    category :"Shoes" ,
    img: img4, 
    name : 'shoes'
  },
  {
    category :"Shirts" ,
    img: img5,
    name : 'shirts'
  },
  {
    category :"Casuals" ,
    img: img6,
    name : 'casuals'
  },  {
    category :"Jewelry" ,
    img: img1, 
    name : 'jewelry'
  },  {
    category :"Bags" ,
    img: img1, 
    name : 'bags'
  },{
    category :"Suits" ,
    img: img3, 
    name : 'suits'
  }
   
]
