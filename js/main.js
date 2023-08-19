const openModal_1 = document.querySelector('#open')
const openModal_2 = document.querySelector('#open2')
const dialog = document.querySelector('dialog')
const closeModal = dialog.querySelector('svg')

        
openModal_1.onclick = () => dialog.showModal()
openModal_2.onclick = () => dialog.showModal()

closeModal.onclick = () => {
    dialog.close()
}

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('elementh1-show');
    }
    if (change.isIntersecting) {
     change.target.classList.add('about-1-content__text-show');
    }
    if (change.isIntersecting) {
     change.target.classList.add('about-1-content-items-show');
    }
    if (change.isIntersecting) {
     change.target.classList.add('about-1-content-items-2-show');
    }
    if (change.isIntersecting) {
     change.target.classList.add('about-2-content__h2-show');
    }
    if (change.isIntersecting) {
     change.target.classList.add('about-2-content__item1-show');
    }
    if (change.isIntersecting) {
     change.target.classList.add('about-2-content__item2-show');
    }
    if (change.isIntersecting) {
     change.target.classList.add('about-2-content__item3-show');
    }
    if (change.isIntersecting) {
     change.target.classList.add('about-3-content__h2-show');
    }
    if (change.isIntersecting) {
     change.target.classList.add('about-3-content__span-show');
    }
    if (change.isIntersecting) {
     change.target.classList.add('about-3-content__img-show');
    }
  });
}

  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elementh1 = document.querySelectorAll('h1');
  let about1_text = document.querySelectorAll('.about-1-content__text');
  let about1_items = document.querySelectorAll('.about-1-content-items');
  let about1_items_2 = document.querySelectorAll('.about-1-content-items-2');
  let about2_h2 = document.querySelectorAll('.about-2-content__h2');
  let about2_item1 = document.querySelectorAll('.about-2-content__item1');
  let about2_item2 = document.querySelectorAll('.about-2-content__item2');
  let about2_item3 = document.querySelectorAll('.about-2-content__item3');
  let about3_h2 = document.querySelectorAll('.about-3-content__h2');
  let about3_span = document.querySelectorAll('.about-3-content__span');
  let about3_img = document.querySelectorAll('.about-3-content__img');

  for (let elm of elementh1) {
    observer.observe(elm);
  }
  for (let elm of about1_text) {
    observer.observe(elm);
  }
  for (let elm of about1_items) {
    observer.observe(elm);
  }
  for (let elm of about1_items_2) {
    observer.observe(elm);
  }
  for (let elm of about2_h2) {
    observer.observe(elm);
  }
  for (let elm of about2_item1) {
    observer.observe(elm);
  }
  for (let elm of about2_item2) {
    observer.observe(elm);
  }
  for (let elm of about2_item3) {
    observer.observe(elm);
  }
  for (let elm of about3_h2) {
    observer.observe(elm);
  }
  for (let elm of about3_span) {
    observer.observe(elm);
  }
  for (let elm of about3_img) {
    observer.observe(elm);
  }

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    loopedSlides: 0,
    freeMode: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction'
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    slidesPerView: 3,
    // centeredSlides: true
  });