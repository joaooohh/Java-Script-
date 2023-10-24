//Defina a valor inicial da contagem regressiva 
let contador = 10; 
// Exiba o valor inicial 
console.log(contador); 
// Crie uma função para atualizar a contagem regressiva 
function atualizarContagem() {
 //Diminua o contador em 1
 contador--; 
 //Exiba o valor atual 
 console.log(contador)
 // Verrifique se a contagem regressiva chegou a zero 
 if (contador === 0) { 
    // Se a contagem regressiva chegou a zero, pare de chegar a função setInterval 
    clearInterval(intervalIs);
    console.log ("Contagem regressiva concluida")
 }
}
const interval = setInterval ( atualizarContagem, 1000);