// if i click on the next/prev button it moves the slide
// to a certain index
const slider = document.querySelector(".slide-holder")

function moveSlide(index) {
    // by translateX the parents
    const pos = index * 400
    const declaration = `translateX(-${pos}px)`
    
    slider.style.transform = declaration;
    [...slider.children].forEach(child => {
        child.classList.remove('active');
    })
    slider.children[index].classList.add('active');
}

let num = 0;

const getSlideNum = () => (slider.children.length - 1)

function increment () {
    if (num < (getSlideNum()))
        moveSlide(++num);
}

function decrement () {
    if (num > 0)
        moveSlide(--num)
}
