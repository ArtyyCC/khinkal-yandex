let buttonArray = [
    "#sad", "#happy", "#gambling", "#rainbow", "#Georgian", "#Turkish", "#stars"
]


buttonArray.forEach((element) => {
    const button = document.querySelector(element)
    button.addEventListener("click", async () => {
        try {
            const response = await fetch("http://localhost:3000/search", {
                method: "POST",
                body: JSON.stringify(button.value)
            })
            const data = await response.json()
            const imageWrapper = document.getElementById("imageWrapper")
            imageWrapper.innerHTML = `<img src="${data.img}">`
        } catch (error) {
            console.log(error)
        }
    })
})



const selectedAll = document.querySelectorAll(".selector-wrapper");

selectedAll.forEach((selected) => {
    const optionsContainer = selected.previousElementSibling;

    const optionsList = optionsContainer.querySelectorAll(".option");

    selected.addEventListener("click", () => {
        let arrow = selected.parentNode.querySelector(".arrow");

        if (optionsContainer.classList.contains("active")) {
            optionsContainer.classList.remove("active");

            arrow.classList.add("rotated");
        } else {
            let currentActive = document.querySelector(".options-container.active");

            if (currentActive) {
                currentActive.classList.remove("active");
                let anotherArrow = currentActive.parentNode.querySelector(".arrow");

                anotherArrow.classList.add("rotated");
            }

            arrow.classList.remove("rotated");
            optionsContainer.classList.add("active");
        }
    });

    optionsList.forEach((o) => {
        o.addEventListener("click", () => {
            selected.querySelector(".selected").innerHTML = o.querySelector(
                "label"
            ).innerHTML;
            optionsContainer.classList.remove("active");

            let arrow = selected.parentNode.querySelector(".arrow");
            arrow.classList.add("rotated");
        });
    });
});

window.addEventListener("click", function (e) {
    if (e.target.closest(".select-box") === null) {
        closeDropdown();
    }
});

function closeDropdown() {
    const selectedAll = document.querySelectorAll(".selector-wrapper");

    selectedAll.forEach((selected) => {
        const optionsContainer = selected.previousElementSibling;
        let arrow = selected.parentNode.querySelector(".arrow");

        optionsContainer.classList.remove("active");
        arrow.classList.add("rotated");
    });
}

