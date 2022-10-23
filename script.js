const button = document.querySelector("button");
const notificacao = document.querySelector(".notificacao");
const closeIcon = document.querySelector(".close");
const progresso = document.querySelector(".progresso");

button.addEventListener("click", () => {
    notificacao.classList.add("active");
    progresso.classList.add("active");

    setTimeout(() => {
        notificacao.classList.remove("active");
    }, 5500);

    setTimeout(() => {
        progresso.classList.remove("active");
    }, 5800);
});

closeIcon.addEventListener("click", () => {
    notificacao.classList.remove("active");

    setTimeout(() => {
        progresso.classList.remove("active");
    }, 300);
});