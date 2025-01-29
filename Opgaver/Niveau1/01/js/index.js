let Btn = document.querySelector("#my-button") 
let colorBtn = document.querySelector(".my-button__green")

Btn.addEventListener("click", function(event){
    console.log(event.target);
    event.target.classList.toggle("my-button__green");
    

})