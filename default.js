updateResizeBased()
window.addEventListener('resize', updateResizeBased);

function updateResizeBased() {
    content = document.querySelector("#content-wrap")
    footer = document.querySelector(".footer")
    
    content.style.paddingBottom = window.getComputedStyle(footer).height
}