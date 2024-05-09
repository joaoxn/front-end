window.addEventListener('resize', updateResizeBased);

function updateResizeBased() {
    content = document.querySelector("#content-wrap")
    footer = document.querySelector(".footer")
    
    content.style.height = footer.style.height
}