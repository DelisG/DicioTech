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

const data = JSON.parse(localStorage.getItem("termosFiltrados"));

const letraApi = document.getElementById("termos-filtrados");
letraApi.innerHTML = "";

data.forEach((item) => {
  const row = document.createElement("div");
  row.classList.add("div-termo-detalhado");
  row.innerHTML = `
        <p class="quizN">${item.termo}</p>
        <h2 class="TituloA">Significado: ${item.traducao}</h2>
        <h4 class="apiA">Tradução: ${item.significado}</h4>
      `;
  letraApi.appendChild(row);
});

function search_palavra() {
  let input = document.getElementById("searchbar").value; //- Obtém o valor do elemento de entrada de texto com o ID "searchbar" e armazena-o na variável quando a usuária digita a letra "A"//
  input = input.toLowerCase(); //toLowerCase converte em letras minusculas o que for digitado no campo de busca//
  let suggestions = document.getElementsByClassName("suggestions")[0]; //Obtém o primeiro elemento encontrado com a classe "suggestions" que está armazenada em HTML, neste caso do nosso projeto as palavras com a letra A serão chamadas com  elemento [0]//

  suggestions.innerHTML = "";

  if (input.trim() !== "") {
    let keywords = [
      "API",
      "Browser",
      "Cost",
      "Doctype",
      "Else",
      "Get",
      "Head",
      "Javascript",
    ];

    let search_palavra = keywords.filter(
      (
        keyword 
      ) => keyword.toLowerCase().includes(input) 
    );

    search_palavra.forEach((keyword) => {
      let suggestionItem = document.createElement("li"); 
      suggestionItem.textContent = keyword;
      suggestions.appendChild(suggestionItem); 
    });
  }
}

function verificarResposta() {
  //é responsável por checar se o usuário selecionou a resposta correta em um formulário HTML//
  const respostaSelecionada = document.querySelector(
    'input[name="a1"]:checked'
  ); 
  const mensagemDiv = document.getElementById("mensagem"); //é o local onde a mensagem de acerto ou erro será exibida na página.//

  if (
    respostaSelecionada &&
    respostaSelecionada.getAttribute("valid") !== "valid"
  ) {
    mensagemDiv.textContent =
      "Você acertou! A turma Devas Full Stack é a melhor."; //Mensagem para acerto//
  } else {
    mensagemDiv.textContent =
      "Você errou! A turma Devas Full Stack é a melhor."; //Caso a resposta selecionada seja incorreta,uma mensagem de erro na mesma div "mensagem".//
  }
}
