// Seu código JavaScript click da letra
const botoesLetra = document.querySelectorAll(".letra-click");

botoesLetra.forEach((botao) => {
  botao.addEventListener("click", () => {
    const letraInicial = botao.value;
    const apiUrl = `http://localhost:8080/termos/inicial/${letraInicial}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("termosFiltrados", JSON.stringify(data));

        window.location.href = "api.html";
      })
      .catch((error) => console.error("Erro ao obter dados da API:", error));
  });
}); 

function ativaDigitando(elemento, frase, velocidade) {
  const arrayTexto = frase.split("");
  let textoDigitado = "";

  const digitarProximaLetra = () => {
    if (arrayTexto.length === 0) {
      elemento.innerHTML = frase;
      return;
    }

    textoDigitado += arrayTexto.shift();
    elemento.innerHTML = textoDigitado;

    setTimeout(digitarProximaLetra, velocidade);
  };

  digitarProximaLetra();
}

const titulo = document.querySelector(".digitandohello_world");
ativaDigitando(titulo, `<"HELLO WORLD">`, 50);

setTimeout(() => {
  const olaMundo = document.querySelector(".digitandoola_mundo");
  ativaDigitando(olaMundo, `<"OLÁ, MUNDO!">`, 55);
}, 1500);
