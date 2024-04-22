const questoes = document.querySelectorAll(".questao");
const nextButtons = document.querySelectorAll(".next-btn");
const resultContainer = document.getElementById("result-container");
const scoreDisplay = document.getElementById("score");

let indiceAtual = 0;
let score = 0;

nextButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    questoes[indiceAtual].classList.add("oculto");
    indiceAtual++;

    if (indiceAtual < questoes.length) {
      questoes[indiceAtual].classList.remove("oculto");
    } else {
      showResult();
    }
  });
});

function showResult() {
  const q1Resposta = document.querySelector('input[name="q1"]:checked');
  const q2Resposta = document.querySelector('input[name="q2"]:checked');
  const q3Resposta = document.querySelector('input[name="q3"]:checked');
  const q4Resposta = document.querySelector('input[name="q4"]:checked');
  const q5Resposta = document.querySelector('input[name="q5"]:checked');
  const q6Resposta = document.querySelector('input[name="q6"]:checked');
  const q7Resposta = document.querySelector('input[name="q7"]:checked');
  const q8Resposta = document.querySelector('input[name="q8"]:checked');
  const q9Resposta = document.querySelector('input[name="q9"]:checked');
  const q10Resposta = document.querySelector('input[name="q10"]:checked');

  if (q1Resposta && q1Resposta.value === "c") {
    score++;
  }

  if (q2Resposta && q2Resposta.value === "a") {
    score++;
  }
  if (q3Resposta && q3Resposta.value === "c") {
    score++;
  }
  if (q4Resposta && q4Resposta.value === "b") {
    score++;
  }
  if (q5Resposta && q5Resposta.value === "c") {
    score++;
  }
  if (q6Resposta && q6Resposta.value === "a") {
    score++;
  }

  if (q7Resposta && q7Resposta.value === "c") {
    score++;
  }
  if (q8Resposta && q8Resposta.value === "b") {
    score++;
  }
  if (q9Resposta && q9Resposta.value === "b") {
    score++;
  }
  if (q10Resposta && q10Resposta.value === "c") {
    score++;
  }

  resultContainer.classList.remove("oculto");
  scoreDisplay.textContent = `Sua pontuação é ${score} de 10.`;
}
