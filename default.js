updateResizeBased();
window.addEventListener('resize', updateResizeBased);

function updateResizeBased() {
    content = document.querySelector("#content-wrap");
    footer = document.querySelector(".footer");
    
    const newHeight = window.getComputedStyle(footer, "height") + window.computedStyleNumber(content, "paddingTop") + "px";
    
    content.style.paddingBottom = newHeight;
}

function computedStyleNumber(element, styleProperty) {
    return parseFloat(window.getComputedStyle(element)[styleProperty].replace(/\D/g, "")[0]);
}
