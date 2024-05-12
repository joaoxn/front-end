updateResizeBased();
window.addEventListener('resize', updateResizeBased);

function updateResizeBased() {
    content = document.querySelector("#content-wrap");
    footer = document.querySelector(".footer");

    const newHeight = window.computedStyleNumber(footer, "height") + window.computedStyleNumber(content, "paddingTop") + "px";

    content.style.paddingBottom = newHeight;
}

function computedStyleNumber(element, styleProperty) {
    return parseFloat(window.getComputedStyle(element)[styleProperty].replace(/\D/g, ""));
}

document.querySelector("#appearance-switch").addEventListener("click", () => {
    if (document.documentElement.classList.contains("light")) {
        document.documentElement.classList.remove("light")
        document.documentElement.classList.add("dark")
    } else if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark")
        document.documentElement.classList.add("light")
    } else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.add("light")
        }
    }
})
