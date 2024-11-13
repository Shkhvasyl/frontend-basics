function validateForm() {
    const nameRegex = /^[А-ЯІЇЄҐа-яіїєґ]{3,20}\s[А-ЯІЇЄҐа-яіїєґ]\.[А-ЯІЇЄҐа-яіїєґ]\.$/;
    const variantRegex = /^\d{1,2}$/;
    const groupRegex = /^[А-ЯІЇЄҐа-яіїєґ]{2}-\d{2}$/;
    const phoneRegex = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
    const idCardRegex = /^[А-ЯІЇЄҐа-яіїєґ]{2}\s№\d{6}$/;

    const name = document.getElementById("name");
    const variant = document.getElementById("variant");
    const group = document.getElementById("group");
    const phone = document.getElementById("phone");
    const idCard = document.getElementById("idCard");

    let valid = true;
    if (!nameRegex.test(name.value)) {
        name.classList.add("error");
        valid = false;
    } else {
        name.classList.remove("error");
    }

    if (!variantRegex.test(variant.value)) {
        variant.classList.add("error");
        valid = false;
    } else {
        variant.classList.remove("error");
    }

    if (!groupRegex.test(group.value)) {
        group.classList.add("error");
        valid = false;
    } else {
        group.classList.remove("error");
    }

    if (!phoneRegex.test(phone.value)) {
        phone.classList.add("error");
        valid = false;
    } else {
        phone.classList.remove("error");
    }

    if (!idCardRegex.test(idCard.value)) {
        idCard.classList.add("error");
        valid = false;
    } else {
        idCard.classList.remove("error");
    }
    if (valid) {
        alert(
            `Введена інформація:\n` +
            `ПІБ: ${name.value}\n` +
            `Варіант: ${variant.value}\n` +
            `Група: ${group.value}\n` +
            `Телефон: ${phone.value}\n` +
            `ID-картка: ${idCard.value}`
        );
    } else {
        alert("Будь ласка, виправте виділені поля.");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const table = document.getElementById("numberTable");
    const colorPicker = document.getElementById("colorPicker");
    const variant = 6;
    let number = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 6; j++) {
            const cell = document.createElement("td");
            cell.textContent = number;
            if(number==variant)
            {
                cell.addEventListener("mouseover", (event) => {
                        event.target.style.backgroundColor = getRandomColor();
                });
                cell.addEventListener("click", (event) => {
                        event.target.style.backgroundColor = colorPicker.value;
                });
                cell.addEventListener("dblclick", (event) => {
                    changeRectangleColor(event.target);
                });

            }
            row.appendChild(cell);
            number++;
        }
        table.appendChild(row);
    }

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    function changeRectangleColor(startCell) {
        const startRow = startCell.parentElement.rowIndex;
        const startCol = startCell.cellIndex;
        const rectangleColor = colorPicker.value;
        for (let i = startRow; i < 6; i++) {
            for (let j = startCol; j < 6; j++) {
                const cell = table.rows[i].cells[j];
                cell.style.backgroundColor = rectangleColor;
            }
        }
    }

  
});
