const speakers = [
  {
    id: '0',
    image: './images/amos.jpeg',
    name: 'Amos Wekesa',
    job: 'Tourist expert and CEO Great Lakes Safaris',
    description: 'Amos is an expert in the tourism industry with over 20 yers of experience in the tourism sector',
  },
  {
    id: '1',
    image: './images/pauline.jpeg',
    name: 'Pauline Nahamya',
    job: 'MD Africa One Tours and Travel',
    description: 'With over 10 years experience in the tourism sector, she has set the pace in the hospitality sector',
  },
  {
    id: '2',
    image: './images/micheal.jpeg',
    name: 'Dr.Micheal Nsereko',
    job: 'Professor of Tourism,MUK',
    description: "Dr. Micheal is a professor of tourism at Uganda's oldest university, MUK. His expertise is around wild life tourism",
  },
  {
    id: '3',
    image: './images/kizito.jpeg',
    name: 'Prof Balyejusa Kizito',
    job: 'Professor of Tourism and hospitality at UCU',
    description: 'She is a professor of tourism and hospitality at UCU',
  },
  {
    id: '4',
    image: './images/mutagamba.jpg',
    name: 'Maria Mutagamba',
    job: 'Minister of Tourism',
    description: 'She is the minister of tourism in Uganda and has over 20 years experience offering leadership in tourism',
  },
  {
    id: '5',
    image: './images/lily.jpeg',
    name: 'Lily Ajarova',
    job: 'CEO, Uganda Tourism Board',
    description: 'She is an expert in the tourism sector with over 20 years experience. She has been at the forefront of many campaigns for selling Uganda to the outside world',
  },
];

const createSpeaker = () => {
  const addSpeaker = document.querySelector('#speakers');
  speakers.forEach((speaker) => {
    addSpeaker.insertAdjacentHTML('beforeend',
      `
        <li id="0" class="item">
            <div class="speaker-img-div"><img class="speaker-img" src="${speaker.image}" alt=""></div>
            <div class="speaker-details">
              <p class="name">${speaker.name}</p>
              <p class="work">${speaker.job}</p>
              <div class="div-item"></div>
              <p class="work-description">${speaker.description}</p>
            </div>
          </li>
      `);
  });
};

document.addEventListener('DOMContentLoaded', () => {
createSpeaker();
});

// Mobile menu
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-button');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

document.querySelectorAll('.navigate').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  mobileMenu.classList.remove('active');
}));

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  hamburger.classList.remove('active');
});