//1️⃣ Camila está revisando una lista de nombres, (por ejemplo: ['Pedro', 'Ana', 'Luis', 'Elena', 'Sofía']). Debe imprimir cada nombre en mayúsculas, uno por línea.
//PEDRO
//ANA
//LUIS
//ELENA
//SOFÍA
const names = ["Pedro", "Ana", "Luis", "Elena", "Sofía"];
const nameListCheeker = () => {
  for (name of names) {
    console.log(name.toUpperCase());
  }
};
nameListCheeker();

//2️⃣ Bego tiene un array con precios. Debe sumar todos los precios usando un bucle for y mostrar el total.
//Ejemplo entrada: [23, 78, 45]
//Ejemplo salida: Total: 146
const prices = [23, 78, 45];

const priceSumTotal = () => {
  let sumtotal = 0;
  for (let i = 0; i < prices.length; i++) {
    sumtotal = sumtotal + prices[i];//tiene que ir dentro de {  }
  }
  console.log(sumtotal);
};
priceSumTotal();

//3️⃣ Macarena quiere generar tres códigos de seguridad y almacenarlos en un array. Cada código debe ser un número aleatorio entre 1000 y 9999. Usa un bucle for para generar los códigos y luego mostrarlos.
//Ejemplo salida: [4356, 7890, 1234]
const threeDigitSecurityCode = () => {
  const codes = [];
for(let i = 0; i < 3; i++){
  code = Math.floor(Math.random()*9000) + 1000
  codes.push(code)
}
console.log(codes)
}
threeDigitSecurityCode()

//4️⃣ Abby encontró una lista de suministros en un refugio: ['Agua', 'Munición', 'Botiquín', 'Czst']. Debe comprobar si todos los elementos contienen al menos una vocal.
//Ejemplo salida:
//Agua contiene vocales.
//Munición contiene vocales.
//Botiquín contiene vocales.
//Czst no contiene vocales.
const shelterSupplyList = () => {
  const supplyList =  ['Agua', 'Munición', 'Botiquín', 'Czst']
  const vowel = "aeiou"
  for(let i=0; i < supplyList.length; i++){
    if(vowel.includes(supplyList[i])) {
      console.log(`${supplyList[i]} contiene vocales.`)
    } else {
      console.log(`${supplyList[i]} no contiene vocales.`)
    }
  }  
}
shelterSupplyList()

//5️⃣ Bego está calculando precios con descuento. Tiene un array con precios, (por ejemplo [150, 300, 50]). Si el precio es mayor a 100, aplica un 20% de descuento, si no, un 10%. Usa un bucle para mostrar cada precio original, descuento aplicado y precio final.
//Ejemplo salida:
//Precio original: 150 - Descuento aplicado: 30 - Precio final: 120
//Precio original: 300 - Descuento aplicado: 60 - Precio final: 240
//Precio original: 50 - Descuento aplicado: 5 - Precio final: 45
  const discountCalculator = (originalPrices) => {
    for (const price of originalPrices) {
      let discount = price > 100 ? price * 0.2 : price * 0.1;
      const finalPrice = price - discount;
      console.log(`Precio original: ${price} - Descuento aplicado: ${discount} - Precio final: ${finalPrice}`);
    }
  };
  discountCalculator([150, 300, 50]);

//7️⃣ Sabrina quiere verificar cuántos números aleatorios generados entre 1 y 100 son múltiplos de 3. Haz una función que haga esta comprobación con 10 números.
//Ejemplo salida:
//Números generados: [12, 35, 75, 9, 27, 4, 6, 88, 15, 3]
//Múltiplos de 3 encontrados: 7
const multiplesOf3Checker = () =>{
  numbersGenerated = [];
  for(i=0; i < 10; i++){
    const number= Math.floor(Math.random()*100)+1);
    numbersGenerated.push(number);
    
  console.log(`Números generados: ${numbersGenerated}`)}
     if(numbersGenerated[i] %3 === 0){
      console.log(`Múltiplos de 3 encontrados:${numbersGenerated.length}`)
    } else {
      console.log('No se ha encontrado multiplo de 3')
    }
  }
multiplesOf3Checker()