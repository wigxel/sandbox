const projectHolder = document.querySelector(".project-details");
const imageHolder = document.querySelector(".project-img");

// Carousel Animation

const animateCarousel = () => {
  const descriptionSlides = projectHolder.children;
  const imageSlides = imageHolder.children;
  let index = 0;
  console.log(index)

  setInterval(() => {
    const slide = descriptionSlides[index];
    
    slide.classList.add("active");
    
    
    if (index === 0) {
      let prev = descriptionSlides.length -1;
      let next = 1;
      index++
      descriptionSlides[prev].classList.remove('active');
      descriptionSlides[next].classList.remove('active');
    } else if (index === descriptionSlides.length - 1) {
      let prev = index - 1;
      let next = 0;
      index = 0
      descriptionSlides[prev].classList.remove('active');
      descriptionSlides[next].classList.remove('active');
    } else if (index === 0) {
      let prev = descriptionSlides.length - 1;
      let next = 1;
      index++
      descriptionSlides[prev].classList.remove('active');
      descriptionSlides[next].classList.remove('active');
    } else {
      let prev = index - 1;
      let next = index + 1;
      
      index++
      descriptionSlides[prev].classList.remove('active');
      descriptionSlides[next].classList.remove('active');
    }

    
  }, 4000);

  setInterval(() => {
    const imageSlide = imageSlides[index];
    
    imageSlide.classList.add("active");
    
    
    if (index === 0) {
      let prev = imageSlides.length -1;
      let next = 1;
      index++
      imageSlides[prev].classList.remove('active');
      imageSlides[next].classList.remove('active');
    } else if (index === imageSlides.length - 1) {
      let prev = index - 1;
      let next = 0;
      index = 0
      imageSlides[prev].classList.remove('active');
      imageSlides[next].classList.remove('active');
    } else if (index === 0) {
      let prev = imageSlides.length - 1;
      let next = 1;
      index++
      imageSlides[prev].classList.remove('active');
      imageSlides[next].classList.remove('active');
    } else {
      let prev = index - 1;
      let next = index + 1;
      
      index++
      imageSlides[prev].classList.remove('active');
      imageSlides[next].classList.remove('active');
    }
    
    console.log(index, imageSlide)
  }, 4000);
}


const createProjects = (response) => {
  const projects = response;

  projects.map((portfolio) => {
    const project = document.createElement('div');
    project.classList.add('project');
    project.innerHTML = `
      <h1 class="title">${portfolio.name}</h1>

      <div class="description">
        <p class="header">
          DESCRIPTION
        </p>
        <div class="descript">
          ${portfolio.description.reduce((le, des) => {
           return le += `<p>${des}</p>`
          }, "")}
        </div>
      </div>

      <div class="stack">
        <p class="header">
          frontend
        </p>
        <div class="technologies">
          ${portfolio.technology.reduce((le, des) => {
           return le += `<p>${des}</p>`
          }, "")}
        </div>
      </div>

    `
    projectHolder.append(project)
    return project
  })
  
  console.log(projects[1].description, projectHolder)
  animateCarousel();
}

// adds the list to the DOM
const addToList = (arr, selector) => {
  const listHolder = document.querySelector(selector)
  listHolder.innerHTML = '';
  for (let listEl of arr) {
      listHolder.append(listEl)
  }
}



const fetchProjects = () => {
  const api = "./js/project.json";
  fetch(api)
  .then(res => res.json())
  .then(response => {
    createProjects(response);
  })
}

fetchProjects();
