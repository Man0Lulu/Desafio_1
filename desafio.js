function calculo(numero) {
    let soma = 0;
  
    for (let i = 1; i < numero; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        soma += i;
      }
    }
  
    return soma;
  }
  
  console.log(calculo(10)); // Deve retornar 23
  console.log(calculo(11)); // Deve retornar 33
  