const pokemonNames = ['Pikachu', 'Charizard', 'Mewtwo', 'Giratina', 'Porygon-Z'];

let formulario = document.getElementById("quizForm");

// mapa de pontuações por pergunta
const mapaPorPergunta = [
  // Pergunta 1
  { op1: [2,3,1,1,2], op2: [1,3,2,2,1], op3: [1,1,3,2,3] },
  // Pergunta 2
  { op1: [3,2,1,1,2], op2: [1,1,3,2,3], op3: [1,2,2,3,1] },
  // Pergunta 3
  { op1: [3,2,1,1,1], op2: [2,3,1,1,1], op3: [1,1,3,2,3] },
  // Pergunta 4
  { op1: [3,2,1,1,1], op2: [1,3,2,2,1], op3: [1,1,2,3,3] },
  // Pergunta 5
  { op1: [3,1,1,1,2], op2: [1,3,2,2,1], op3: [1,1,2,2,3] },
  // Pergunta 6
  { op1: [3,2,1,1,1], op2: [2,3,2,1,1], op3: [1,1,3,3,2] },
  // Pergunta 7
  { op1: [3,1,1,1,2], op2: [1,3,1,2,1], op3: [1,1,3,3,3] },
  // Pergunta 8
  { op1: [3,2,1,1,2], op2: [2,3,2,1,1], op3: [1,1,3,2,3] },
  // Pergunta 9
  { op1: [3,2,1,1,2], op2: [1,3,2,2,1], op3: [1,1,3,3,3] },
  // Pergunta 10
  { op1: [3,2,1,1,1], op2: [2,3,2,1,1], op3: [1,1,3,2,3] }
];


formulario.addEventListener("submit", function(e) {
    e.preventDefault(); // impede o reload da página
    console.log("Form foi enviado, mas a página não recarregou!");

    let pontuacao = [0,0,0,0,0]; // 5 pokemons 'Pikachu', 'Charizard', 'Mewtwo', 'Giratina', 'Porygon-Z'

    // Aqui capituramos as resposta e colocamos dentro de um aray
    let respostas = [];
    for (let i = 1; i <= 10; i++) {
        let selecionado = document.querySelector(`input[name="q${i}"]:checked`);
        if (selecionado) {
            respostas.push(selecionado.value);
        }

    const pontos = mapaPorPergunta[i - 1][selecionado.value];// i-1 é para localizar a posição correta da pergunta na matrir e selecionado value é para selecionar o array que foi escolhido de acordo com a escolha
    console.log(pontos);

        for (let j = 0; j < pontos.length; j++) {
        pontuacao[j] += pontos[j];
        }//aqui fazemos a soma das pontuações por posição por resposta, ou seja, se o usuario escolheu op1(5,2,3,1,4) então na posição "j(0,1,2,3,4)" esse valor será incrementado


    
    }

    let maior = 0;
    let vencedorLocal = 0;

    for (let i = 0; i < pontuacao.length; i++) {
        if (pontuacao[i] > maior) {
        maior = pontuacao[i];
        vencedorIndex = i; // guarda a posição do maior
        }
    }

    console.log(pontuacao);//essa é a soma de cada pontuação
    console.log(respostas); // mostra todas as escolhas do usuário em array
    console.log(vencedorLocal);// mostra o indicie da maior pontuação
    console.log(maior);//mostra a maior pontuação

    switch (vencedorIndex) {
        case 0:
            console.log("Você é o Pikachu!");
            break;
        case 1:
            console.log("Você é o Charizard!");
            break;
        case 2:
            console.log("Você é o Mewtwo!");
            break;
        case 3:
            console.log("Você é o Giratina!");
            break;
        case 4:
            console.log("Você é o Porygon-Z!");
            break;
        default:
            console.log("Erro: nenhum Pokémon encontrado.");
    }
});


/*
    let tipo = document.getElementById("combustivel").value;//Puxa o valor de combustivel pelo id do select la do html, é necessario colocar o .value para pegar o valor e não toda a tag
    console.log(tipo);

    let precoPorLitro;

    switch(tipo){
        case "gasolina":
        precoPorLitro = precoGasolina;
        break;
        case "etanol":
        precoPorLitro = precoEtanol;
        break;
        case "disel":
        precoPorLitro = precoDisel;
        break;
        
    }// Aqui o switch pega o valor que esta em tipo e realiza uma ação de acordo com o valor, a ação, no caso, é atribuir um valor constante dentro da variavel que não é constante
    console.log(precoPorLitro);
    
    console.log(tipo);
    if(tipo == 1){
        document.getElementById("resultado").textContent = "Escolha uma opção";
        console.log("if ta funcionando")
        return
    }

  

    let litros= document.getElementById("litros").value;
    calculaAbastecimento(precoPorLitro, litros);

    */
