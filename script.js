/ Criando a função
function calcularDesconto(precoOriginal, porcentagemDesconto) {
    let valorDoDesconto = (precoOriginal * porcentagemDesconto) / 100;
    let precoFinal = precoOriginal - valorDoDesconto;
    
    return precoFinal;
}

// Usando a função na prática:
// Um produto de R$ 100 com 15% de desconto
let resultado = calcularDesconto(100, 15);

console.log("O preço com desconto é: R$ " + resultado); 
// Vai mostrar: O preço com desconto é: R$ 85
💡 Entendendo as partes da função:
function: É a palavra-chave que avisa o JavaScript: "Ei, vou criar uma função aqui!"

calcularDesconto: É o nome que escolhemos para a função (você pode inventar o nome que quiser).

(precoOriginal, porcentagemDesconto): São os parâmetros (ou os dados que a função precisa receber para trabalhar).

return: É a resposta da função. Ela faz a conta e "devolve" o resultado final para você.

Que tipo de função você está tentando criar para o seu projeto? Se me der mais detalhes, posso fazer uma exatamente do jeito que você precisa!vs

