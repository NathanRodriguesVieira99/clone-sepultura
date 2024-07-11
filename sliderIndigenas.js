const slider = document.querySelector('.slider');
let slideIndex = 0;

function nextSlide(){
    slideIndex++;
    if(slideIndex >= slider.children.length){
        slideIndex = 0;
    }
    updateSlidePosition();
}

function updateSlidePosition(){
    const slideWidth =slider.clientWidth;
    slider.style.transform=`translateX(-${slideIndex * slideWidth}px)`;

}

setInterval(nextSlide,6000);