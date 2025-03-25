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
    sumtotal = sumtotal + prices[i]; //tiene que ir dentro de {  }
  }
  console.log(sumtotal);
};
priceSumTotal();

//3️⃣ Macarena quiere generar tres códigos de seguridad y almacenarlos en un array. Cada código debe ser un número aleatorio entre 1000 y 9999. Usa un bucle for para generar los códigos y luego mostrarlos.
//Ejemplo salida: [4356, 7890, 1234]
const threeDigitSecurityCode = () => {
  const codes = [];
  for (let i = 0; i < 3; i++) {
    code = Math.floor(Math.random() * (9999 + 1000));
    codes.push(code);
  }
  console.log(codes);
};
threeDigitSecurityCode();

//4️⃣ Abby encontró una lista de suministros en un refugio: ['Agua', 'Munición', 'Botiquín', 'Czst']. Debe comprobar si todos los elementos contienen al menos una vocal.
//Ejemplo salida:
//Agua contiene vocales.
//Munición contiene vocales.
//Botiquín contiene vocales.
//Czst no contiene vocales.
const shelterSupplyList = () => {
  const supplyList = ["Agua", "Munición", "Botiquín", "Czst"];
  const vowel = "aeiou";
  for (const supply of supplyList) {
    let hasvowel = false;
    for (const letter of supplyList)
      if (vowel.includes(supplyList)) {
        hasvowel = true;
        {
          console.log(`${supplyList} contiene vocales.`);
        }
        {
          console.log(`${supplyList} no contiene vocales.`);
        }
      }
  }
};
shelterSupplyList();

//5️⃣ Bego está calculando precios con descuento. Tiene un array con precios, (por ejemplo [150, 300, 50]). Si el precio es mayor a 100, aplica un 20% de descuento, si no, un 10%. Usa un bucle para mostrar cada precio original, descuento aplicado y precio final.
//Ejemplo salida:
//Precio original: 150 - Descuento aplicado: 30 - Precio final: 120
//Precio original: 300 - Descuento aplicado: 60 - Precio final: 240
//Precio original: 50 - Descuento aplicado: 5 - Precio final: 45
const discountCalculator = originalPrices => {
  for (const price of originalPrices) {
    const discount = price > 100 ? price * 0.2 : price * 0.1;
    const finalPrice = price - discount;
    console.log(
      `Precio original: ${price} - Descuento aplicado: ${discount} - Precio final: ${finalPrice}`
    );
  }
};
discountCalculator([150, 300, 50]);

//7️⃣ Sabrina quiere verificar cuántos números aleatorios generados entre 1 y 100 son múltiplos de 3. Haz una función que haga esta comprobación con 10 números.
//Ejemplo salida:
//Números generados: [12, 35, 75, 9, 27, 4, 6, 88, 15, 3]
//Múltiplos de 3 encontrados: 7
const multiplesOf3Checker = () => {
  numbersGenerated = [];
  multiplesOf3 = 0;

  for (let i = 0; i < 10; i++) {
    const number = Math.floor(Math.random() * 100) + 1;
    numbersGenerated.push(number);

    if (number % 3 === 0) {
      multiplesOf3 = multiplesOf3 + 1;
    }
  }
  console.log(`Números generados: ${numbersGenerated}`); //colocar de ultimo el log para que no me haga una cadena de numeros alealtorios
  console.log(`Múltiplos de 3 encontrados: ${multiplesOf3}`);
};
multiplesOf3Checker();

//8️⃣ Macarena tiene un array con tres nombres y debe crear un array nuevo con las iniciales de cada nombre en mayúsculas usando un bucle.
//Ejemplo entrada: ['Pedro', 'Ana', 'Luis']
//Ejemplo salida: ['P', 'A', 'L']
const namesInitals = names => {
  const initials = [];
  for (i = 0; i < names.length; i++) initials.push(names[i][0].toUpperCase());

  console.log(initials);
};
namesInitals(["Pedro", "Ana", "Luis"]);

//9️⃣ Abby está revisando mensajes cifrados. Tiene un array con palabras (cantidad y palabras a tu elección) que deben invertirse y mostrarse en minúsculas. Usa un bucle para procesarlas todas. Investiga sobre las funciones split(), reverse() y join()
//Ejemplo entrada: ['FUEGO', 'REFUGIO', 'SUMINISTROS']
//Ejemplo salida: ['oguef', 'oiguref', 'sotsinimus']
const cheekingCodedMessages = () => {
  const codeMessages = ["FUEGO", "REFUGIO", "SUMINISTROS"];
  const reverseMessages = [];
  for (const message of codeMessages) {
    const reverseMessage = message.toLowerCase().split("").reverse().join("");
    reverseMessages.push(reverseMessage);
    console.log(reverseMessage);
  }
};
cheekingCodedMessages();

//🔟 Camila quiere generar un código de acceso combinando letras aleatorias y números. Usa un bucle para crear un string aleatorio de 6 caracteres sacados de 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.
//Ejemplo salida: 'A3P9K8'
const generateALoginCode = () => {
  const alphabetandNumbers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomCode = [];
  for (let i = 0; i < 6; i++) {
    const randomCombination = Math.floor(
      Math.random() * alphabetandNumbers.length
    );
    randomCode.push(alphabetandNumbers[randomCombination]);
  }
  console.log(randomCode.join(""));
};
generateALoginCode();

//1️⃣1️⃣ Macarena quiere crear un sistema que genere combinaciones de nombres y apellidos. Tiene dos arrays: ['Juan', 'Ana', 'Luis'] y ['Pérez', 'Martínez', 'García']. Debe generar todos los nombres posibles combinando uno de cada array.
//Ejemplo salida:
//Juan Pérez
//Juan Martínez
//Juan García
//Ana Pérez
//Ana Martínez
//Ana García
//Luis Pérez
//Luis Martínez
//Luis García
const nameCombinationSystem = () => {
  const names = ["Juan", "Ana", "Luis"];
  const lastnames = ["Pérez", "Martínez", "García"];
  for (let i = 0; i < names.length; i++) {
    for (let j = 0; j < lastnames.length; j++) {
      console.log(`${names[i]} ${lastnames[j]}`);
    }
  }
};
nameCombinationSystem();

//1️⃣2️⃣ Abby quiere comprobar si al menos uno de los números generados aleatoriamente entre 1 y 100 es divisible por 5. Genera 5 números y muestra si se cumple la condición.
//Ejemplo salida:
//Números generados: [23, 45, 67, 12, 90]
//Números divisibles por 5 encontrados: [45, 90]
const randoNumberMultipleof5 = () => {
  const randomNumberGenerated = [];
  let multiplesOf5 = 0;

  for (let i = 0; i < 5; i++) {
    const numbers = Math.floor(Math.random() * 100) + 1;
    randomNumberGenerated.push(numbers);

    if (numbers % 5 === 0) {
      multiplesOf5 = multiplesOf5 + 1;
    }
  }
  console.log(`Números generados:${randomNumberGenerated}`);
  console.log(`Números divisibles por 5 encontrados:${multiplesOf5}`);
};
randoNumberMultipleof5();

//1️⃣3️⃣ Camila tiene un array con nombres y quiere mostrar sólo aquellos que tienen más de 4 letras.
//Ejemplo entrada: ['Pedro', 'Ana', 'Luis', 'Elena', 'Sofía']
//Ejemplo salida: ['Pedro', 'Elena', 'Sofía']
const nameLength4letter = () => {
  const names = ["Pedro", "Ana", "Luis", "Elena", "Sofía"];
  for (let name of names) {
    if (name.length > 4) {
      console.log(name);
    }
  }
};
nameLength4letter();

//1️⃣4️⃣ Bego tiene un array con tres palabras y quiere mostrar todas las combinaciones posibles de esas palabras usando dos palabras a la vez y cuyas combinaciones no repitan la palabra.
//Ejemplo entrada: ['Sol', 'Luna', 'Estrella']
//Ejemplo salida:
//Sol Luna
//Sol Estrella
//Luna Sol
//Luna Estrella
//Estrella Sol
//Estrella Luna
const threeWordCombination = () => {
  const words = ["Sol", "Luna", "Estrella"];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; i--)
      console.log(`${words[i]} ${words[j]}`);
  }
};
threeWordCombination;

//1️⃣5️⃣ Sabrina quiere generar un nombre de usuario aleatorio combinando una consonante, una vocal y un número aleatorio entre 1 y 99. Debe hacerlo 5 veces y mostrar los resultados.
//Ejemplo salida: ['MA87', 'RO56', 'LE23', 'FI99', 'PU12']
const randomUserNames = () => {
  const vowels = "AEIOU";
  const consonats = "BCDFGHJKLMNÑPQRSTVXZWY";
  let numbers = [];

  for (let i = 0; i < 5; i++) {
    const randomConsonat = Math.floor(Math.random() * consonats.length);
    const randomVowel = Math.floor(Math.random() * vowels.length);

    const randomnumbers = Math.floor(Math.random() * 99) + 1;
    numbers.push(randomnumbers);
  }
  console.log(`${randomConsonat}${randomVowel}${numbers}`);
};
randomUserNames();

//1️⃣6️⃣ Abby tiene problemas con las tablas de multiplicar, quiere hacer 2 funciones que reciban un número y le impriman la tabla de multiplicar de ese número desde hasta el 10 una en orden descendente y otra en orden ascendente.
//Ejemplo entrada: 4
//Ejemplo salida función descendente:
//4 x 10 = 40
//4 x 9 = 36
//4 x 8 = 32
//4 x 7 = 28
//4 x 6 = 24
//4 x 5 = 20
//4 x 4 = 16
//4 x 3 = 12
//4 x 2 = 8
//4 x 1 = 4
//4 x 0 = 0
//Ejemplo salida función ascendente:
//4 x 0 = 0
//4 x 1 = 4
//4 x 2 = 8
//4 x 3 = 12
//4 x 4 = 16
//4 x 5 = 20
//4 x 6 = 24
//4 x 7 = 28
//4 x 8 = 32
//4 x 9 = 36
//4 x 10 = 40
