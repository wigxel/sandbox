// if i click on the next/prev button it moves the slide
// to a certain index
const projectSlideHolder = document.querySelector(".details-slide-holder");
const toggle = document.querySelector(".dot-holder");


function moveSlide(index) {
    // by translateX the parents
    const pos = index * 400
    const infoPos = index * 210
    const declaration = `translateX(-${pos}px)`
    const infoTranslate = `translateY(-${infoPos}px)`
    
    slider.style.transform = declaration;
    [...slider.children].forEach(child => {
        child.classList.remove('active');
    })
    slider.children[index].classList.add('active');

    projectSlideHolder.style.transform = infoTranslate;
    [...projectSlideHolder.children].forEach(child => {
        child.classList.remove('active');
    })
    projectSlideHolder.children[index].classList.add('active');

    // change active class for dots
    [...toggle.children].forEach(child => {
        child.classList.remove('active');
    })
    toggle.children[index].classList.add('active');

    console.log(index)
}

let num = 0;

// const getSlideNum = () => (slider.children.length - 1);
const getSlideNum = () => (projectSlideHolder.children.length )

function increment (i) {
    num += 1
    if (num < (getSlideNum())){
        moveSlide(num);
        console.log(num)
    } else {
        num = getSlideNum()-1
    }
}

function decrement (i) {
    num -= 1 
    if (num >= 0) {
        moveSlide(num)
        console.log(num)
    } else {
        num = 0;
    }

    
}

const activateToggle = (i) => {
    if (i <= projectSlideHolder.children.length - 1) {
        moveSlide(i);
        num = i;
    }
}

// Automate slide

let k = 0
setInterval(() => {
    if (k == projectSlideHolder.children.length - 1) {
        k = 0
        // moveSlide(k)
        
    } else {
        k++
        // moveSlide(k)
    }
}, 3000);