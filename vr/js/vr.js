
var vid = document.getElementById("myVideo"); 
function playVid() { 
    vid.play(); 
  } 



$("img").click(function(){
//    $(this).addClass("activ")

   $(this).fadeOut();

   const myTimeout = setTimeout(myGreeting, 1000);
   function myGreeting() {
    $("video").fadeIn();

       playVid()
   }
});





let progress;

setInterval(function(){
  progress = ( vid.currentTime / 10 * 100 ).toFixed(2)
  // console.log(progress)
  if(progress > 100){
    $("#container").fadeOut();
    $(".black").fadeOut();
    // alert("gsldkfl")
}
});




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

