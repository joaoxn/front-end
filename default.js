updateResizeBased();
window.addEventListener('resize', updateResizeBased);

function updateResizeBased() {
    content = document.querySelector("#content-wrap");
    footer = document.querySelector(".footer");

    elems1by1 = document.querySelectorAll(".ratio1by1");
    elems3by2 = document.querySelectorAll(".ratio3by2");

    const newHeight = computedStyleNumber(footer, "height") + computedStyleNumber(content, "paddingTop") + "px";

    content.style.paddingBottom = newHeight;

    adjustRatioOfElements(elems1by1, 1);
    adjustRatioOfElements(elems3by2, 3/2);
}

function adjustRatioOfElements(elements, ratio) {
    elements.forEach(element => {
        element.style.width = computedStyleNumber(element, "height")*ratio + "px";
    })
}

function computedStyleNumber(element, styleProperty) {
    value = window.getComputedStyle(element)[styleProperty];
    return parseFloat(value.replace(/\.+$/,""));
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
