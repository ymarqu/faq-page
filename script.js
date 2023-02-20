const btns = document.querySelectorAll(".btn");
// const answer = document.querySelector(".answer-text");
const question = document.querySelector(".q1");
btns.forEach( btn => {
    btn.addEventListener("click", () => {
        let answer = btn.parentNode.parentNode.nextElementSibling.childNodes[0].nextElementSibling;
        answer.classList.toggle("expand");

 })
});
