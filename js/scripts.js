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
const threeDigitSecurityCode () => {


}
threeDigitSecurityCode([4356, 7890, 1234])
