const textC = document.getElementsByClassName("text-cali");
const nums = document.querySelectorAll(".nums .num");
const all_2 = document.querySelectorAll(".all-2");
let about = document.getElementById("About_us")



const myTimeout = setTimeout(myGreeting, 1000);
        function myGreeting() {

                $("#loogo").addClass("loogo1")
                const myTimeout = setTimeout(myGreeting, 2500);
        function myGreeting() {

         $("#loogo").removeClass("loogo1")
         
        }
         
        }




$("#loogo").hover(function(){

   $("#loogo").addClass("loogo1")



        const myTimeout = setTimeout(myGreeting, 2500);
        function myGreeting() {

         $("#loogo").removeClass("loogo1")
         
        }
});




$(document).ready(function(){
        $(".an-vr").hover(function(){
          $(".an-vr-t").css("margin-left", "1px");
          }, function(){
          $(".an-vr-t").css("margin-left", "110%");
        });
});






let started = false;








function startCount(el){
        let goal = el.dataset.goal;
        let count = setInterval(() => {
                el.textContent++;
                if(el.textContent == goal)
                clearInterval(count);
        },1500 / goal);
}





window.onscroll = function () {
        if(window.scrollY >= PRODUCTS.offsetTop) {
        //   alert("sdfghpo")
                $(".all-2").addClass("animat");
        }
        else{
                $(".all-2").removeClass("animat");
        }
        if(window.scrollY >= about.offsetTop) {
                if(!started) {
                        startCount(document.querySelectorAll(".nums .num")[0]);
                        startCount(document.querySelectorAll(".nums .num2")[0]);
                        startCount(document.querySelectorAll(".nums .num3")[0]);
                }
                started = true;
        }

        if(window.scrollY >100){
                $(".nav").addClass("nav2");
                numpr()
        }
        else{
               
                $(".nav").removeClass("nav2");

         }
}





$(".image-1").click(function(){
        $(".container-1").removeClass("h");
        $(".container-2").addClass("h");
        $(".image-2").removeClass("h");
        $(".image-1").addClass("h");
        
});


$(".image-2").click(function(){
        $(".container-3").removeClass("h");
        $(".container-1").addClass("h");
        $(".image-3").removeClass("h");
        $(".image-2").addClass("h");

});

$(".image-3").click(function(){
        $(".container-2").removeClass("h");
        $(".container-3").addClass("h");
        $(".image-1").removeClass("h");
        $(".image-3").addClass("h");

});


let hover = false;

$(".all-2").hover(function(){
         hover = true;

        if(hover = true){
                $(".all").addClass("animat2");
                hover = false;
        }
        else{
                $(".all").removeClass("animat2");
        }
        
       
});




const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
//     let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);



$("button").click(function(){
        $("button").removeClass("btn-activ");

        $(this).addClass("btn-activ");
});


$(".Egypt-btn").click(function(){
        $(".Saudi").fadeOut(300);
        $(".Jordan").fadeOut(300);

        $(".Egypt").fadeIn(300);
        
});



$(".Jordan-btn").click(function(){
        $(".Saudi").fadeOut(300);
        $(".Egypt").fadeOut(300);

        $(".Jordan").fadeIn(300);
        
});



$(".Saudi-btn").click(function(){
        $(".Jordan").fadeOut(300);
        $(".Egypt").fadeOut(300);

        $(".Saudi").fadeIn(300);
        
});