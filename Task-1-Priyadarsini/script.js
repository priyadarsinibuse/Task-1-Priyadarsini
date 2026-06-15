// Buttons click animation

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.08)";
        button.style.transition = "0.3s ease";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });

    button.addEventListener("click", () => {

        button.innerHTML = "✨ Loading...";

        setTimeout(() => {
            button.innerHTML = "✅ Done";
        }, 1200);

    });

});