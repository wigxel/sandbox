const projectHolder = document.querySelector(".details-slide-holder");
const slider = document.querySelector(".slide-holder");
const dotHolder = document.querySelector('.dot-holder');


// Carousel Animation

const animateCarousel = () => {
  projectHolder.firstElementChild.classList.add('active')
  slider.firstElementChild.classList.add('active')
  dotHolder.firstElementChild.classList.add('active')
 
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
    projectHolder.append(project);

    // create images 
    const figure = document.createElement('div');
    figure.classList.add('image');
    figure.innerHTML = `
      <img src="${portfolio.picture}" alt="">
    `
    slider.append(figure);

    // create dots
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.setAttribute("onclick", `activateToggle(${portfolio.id})`)
    dotHolder.append(dot)
  })
  
  // Animate the carousel  
  animateCarousel();
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
