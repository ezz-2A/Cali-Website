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