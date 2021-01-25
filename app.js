// local reviews data
const reviews = [
  {
    id: 1,
    name: "onochie ifedebe",
    job: "Software Engineer",
    img: "./facepicture.jpg",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, quod. Animi error nobis similique impedit asperiores autem dolorem qui alias cum. Porro in impedit explicabo!.",
  },
  {
    id: 2,
    name: "susan smith",
    job: "ux designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 3,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 4,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 5,
    name: "bill anderson",
    job: "Data Scientist",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent= item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener('click', function(){
  currentItem++;
  if (currentItem > reviews.length -1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener('click', function(){
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
})

randBtn.addEventListener('click', function(){
  currentItem = Math.floor(Math.random()*reviews.length);
  showPerson(currentItem);
})