const menus = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./assets/image/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./assets/image/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./assets/image/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./assets/image/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./assets/image/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./assets/image/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./assets/image/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./assets/image/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./assets/image/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "./assets/image/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];


let main = document.querySelector("main")
let all = document.getElementById("all")
let breakfast = document.getElementById("breakfast")
let lunch = document.getElementById("lunch")
let shakes = document.getElementById("shakes")
let dinner = document.getElementById("dinner")

let menu = menus.map((element)=>{
  return `<div class="sm:grid grid-cols-2 sm:gap-6">
  <img class=" border-yellow-600 border-2 bg-red-500" src="${element.img}" alt="">
  <div>
    <div class="flex justify-between  border-b-2 text-xl">
      <h1 class="-indent-96">${element.title} </h1>
      <p class="text-yellow-600">${element.price}
      </p>
    </div>
    <p class="text-xl text-justify">${element.desc}
    </p>
  </div>
</div>`
}).join("")
main.innerHTML = menu


breakfast.addEventListener("click",()=>{
  let breakfastFilter = menus.filter((element)=>{
    return element.category == "breakfast"
  })
  let menu = breakfastFilter.map((element)=>{
    return `<div class="sm:grid grid-cols-2 sm:gap-6">
    <img class=" border-yellow-600 border-2 bg-red-500" src="${element.img}" alt="">
    <div>
      <div class="flex justify-between  border-b-2 text-xl">
        <h1 class="-indent-96">${element.title} </h1>
        <p class="text-yellow-600">${element.price}
        </p>
      </div>
      <p class="text-xl text-justify">${element.desc}
      </p>
    </div>
  </div>`
  }).join("")
  main.innerHTML = menu
})

lunch.addEventListener("click", ()=>{
  let lunchFilter = menus.filter((element)=>{
    return element.category =="lunch"
  })
  let menu = lunchFilter.map((element)=>{
    return `<div class="sm:grid grid-cols-2 sm:gap-6">
    <img class=" border-yellow-600 border-2 bg-red-500" src="${element.img}" alt="">
    <div>
      <div class="flex justify-between  border-b-2 text-xl">
        <h1 class="-indent-96">${element.title} </h1>
        <p class="text-yellow-600">${element.price}
        </p>
      </div>
      <p class="text-xl text-justify">${element.desc}
      </p>
    </div>
  </div>`
  }).join("")
  main.innerHTML = menu
})

shakes.addEventListener("click", ()=>{
  let shakesFilter = menus.filter((element)=>{
    return element.category === "shakes"
  })
  let menu = shakesFilter.map((element)=>{
return`<div class="sm:grid grid-cols-2 sm:gap-6">
<img class=" border-yellow-600 border-2 bg-red-500" src="${element.img}" alt="">
<div>
  <div class="flex justify-between  border-b-2 text-xl">
    <h1 class="-indent-96">${element.title} </h1>
    <p class="text-yellow-600">${element.price}
    </p>
  </div>
  <p class="text-xl text-justify">${element.desc}
  </p>
</div>
</div>`
  }).join("")
  main.innerHTML=menu
})

dinner.addEventListener("click", ()=>{
  let dinnerFilter = menus.filter((element)=>{
    return element.category === "dinner"
  })
  let menu = dinnerFilter.map((element)=>{
    return`<div class="sm:grid grid-cols-2 sm:gap-6">
    <img class=" border-yellow-600 border-2 bg-red-500" src="${element.img}" alt="">
    <div>
      <div class="flex justify-between  border-b-2 text-xl">
        <h1 class="-indent-96">${element.title} </h1>
        <p class="text-yellow-600">${element.price}
        </p>
      </div>
      <p class="text-xl text-justify">${element.desc}
      </p>
    </div>
    </div>`
      }).join("")

      main.innerHTML = menu
})

all.addEventListener("click", ()=>{
  let menu = menus.map((element)=>{
    return`<div class="sm:grid grid-cols-2 sm:gap-6">
    <img class=" border-yellow-600 border-2 bg-red-500" src="${element.img}" alt="">
    <div>
      <div class="flex justify-between  border-b-2 text-xl">
        <h1 class="-indent-96">${element.title} </h1>
        <p class="text-yellow-600">${element.price}
        </p>
      </div>
      <p class="text-xl text-justify">${element.desc}
      </p>
    </div>
    </div>`
      }).join("")

      main.innerHTML = menu
})