const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function pageAnimation() {
  var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function (e){
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})


}





// Select all the heading elements
const headings = document.querySelectorAll('#text1 .heading');

// Select the image container where the image will be displayed
const imageDisplay = document.getElementById('imageDisplay');

// Add event listener to each heading
headings.forEach(heading => {
  heading.addEventListener('click', function() {
    // Remove 'selected' class from all headings
    headings.forEach(h => {
      h.classList.remove('selected');
      h.style.paddingLeft = '0'; // Reset padding for all headings
    });

    // Add 'selected' class to clicked heading
    this.classList.add('selected');
    this.style.paddingLeft = '3vw'; // Add padding to the selected heading

    // Update image based on the data-image attribute
    const image = this.getAttribute('data-image');
    imageDisplay.src = image;
  });
});

// Optional: Default selection on page load
document.querySelector('#h23').classList.add('selected');
document.querySelector('#h23').style.paddingLeft = '3vw'; // Set padding for the default selected heading
imageDisplay.src = document.querySelector('#h23').getAttribute('data-image'); // Set image based on the default heading



function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,

  });
}

swiperAnimation()
pageAnimation()



var menu = document.querySelector("nav h3")
var full = document.querySelector("#full-scr")
var navimg = document.querySelector("nav img")
var flag = 0
menu.addEventListener("click", function(){
  if(flag == 0){

    full.style.top = 0
    navimg.style.opacity = 0
   flag = 1
  }else{
    
    full.style.top = "-100%"
    navimg.style.opacity = 0
   flag = 1
  }
})
























