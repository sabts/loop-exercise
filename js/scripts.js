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
