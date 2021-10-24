function myFunction(event){
    var elements = document.querySelector(".active");
    if(elements !== null){
        elements.classList.remove("active");
    }
    event.target.classList.add('active');
}
