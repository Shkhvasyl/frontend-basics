
let isFirstElementHighlighted = false;
let isSecondElementHighlighted = false;

document.addEventListener("DOMContentLoaded", () => {

    const targetElementFirst = document.getElementById("element1");
    
    const targetElementSecond = document.querySelector("li.element2");

    function toggleHighlight(element, isHighlighted, initialClass) {
        if (isHighlighted) {
            element.classList.remove("highlight1", "highlight2");
            element.classList.add(initialClass);
        } else {
            element.classList.remove("highlight1", "highlight2");
            element.classList.add(initialClass === "highlight1" ? "highlight2" : "highlight1");
        }
    }


    targetElementFirst.addEventListener("click", () => {
        toggleHighlight(targetElementFirst, isFirstElementHighlighted, "highlight1");
        isFirstElementHighlighted = !isFirstElementHighlighted;
    });

    targetElementSecond.addEventListener("click", () => {
        toggleHighlight(targetElementSecond, isSecondElementHighlighted, "highlight2");
        isSecondElementHighlighted = !isSecondElementHighlighted;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    let kyivImage = document.getElementById("kyivImage");
    const addImageButton = document.getElementById("addImage");
    const increaseSizeButton = document.getElementById("increaseSize");
    const decreaseSizeButton = document.getElementById("decreaseSize");
    const removeImageButton = document.getElementById("removeImage");

    addImageButton.addEventListener("click", () => {
        if (!document.getElementById("kyivImage")) {
            const newImage = document.createElement("img");
            newImage.src = "Kyiv.jpg";
            newImage.alt = "Фото Києва";
            newImage.id = "kyivImage";
            newImage.style.width = "100%";
            newImage.style.maxWidth = "600px";
            document.querySelector("a").appendChild(newImage);
            kyivImage = document.getElementById("kyivImage");
        }
    });

    increaseSizeButton.addEventListener("click", () => {
        if (kyivImage) {
            let currentWidth = kyivImage.clientWidth;
            kyivImage.style.maxWidth = `${currentWidth + 50}px`;
        }
    });

    decreaseSizeButton.addEventListener("click", () => {
        if (kyivImage) {
            let currentWidth = kyivImage.clientWidth;
            kyivImage.style.maxWidth = `${Math.max(currentWidth - 50, 50)}px`;
        }
    });

    removeImageButton.addEventListener("click", () => {
        if (kyivImage) {
            kyivImage.remove();
        }
    });
});