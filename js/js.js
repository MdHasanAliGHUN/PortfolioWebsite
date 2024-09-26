const sideMenu = document.querySelector("#sideMenu");
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openMenu (){
    sideMenu.style.transform = "translateX(-16rem)"
}
function closeMenu(){
    sideMenu.style.transform = "translateX(16rem)"
}

window.addEventListener("scroll", () => {
    if(scrollY > 50){
        navBar.classList.add("bg-white","bg-opacity-50", "backdrop-blur-lg","shadow-lg");
        navLinks.classList.remove("bg-white","shadow-sm","bg-opacity-50")
    }else{
        navBar.classList.remove("bg-white","bg-opacity-50", "backdrop-blur-lg","shadow-lg")
        navLinks.classList.add("bg-white","shadow-sm","bg-opacity-50")
    }
})


document.getElementById("moon").addEventListener('click', () => {
    const body = document.getElementById("body");
    if (body.style.backgroundColor === "black") {
        // If the background is already black, change it back to white
        body.style.backgroundColor = "white";
        body.style.color = "black";
    } else {
        // Otherwise, change the background to black and text to white
        body.style.backgroundColor = "black";
        body.style.color = "white";
    }
    console.log(body);
});
