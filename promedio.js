const list1 = [100, 200, 300, 400, 100000000];
const list2 = [23, 48, 14, 39, 12, 5, 7, 98, 45, 67, 33];
const list3 = [
  1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6, 2, 2, 3, 4, 4,
  4, 4, 4, 4, 4, 5, 7, 7, 8, 9, 9,
];

function calculateAverage(list) {
  /* let sumList = 0;

  for (let i = 0; i < list.length; i++) {
    sumList += list[i];
  } */
  const sumList = list.reduce(
    (accumValue = 0, newElement) => accumValue + newElement
  );

  const listAverage = sumList / list.length;
  return listAverage;
}

function isEven(list) {
  if (list.length % 2 === 0) {
    return true;
  } else return false;
}

function calculateMedian(list) {
  list.sort((a, b) => a - b);
  const halfList = parseInt(list.length / 2);
  let listMedian;
  if (isEven(list)) {
    let element1 = list[halfList - 1];
    let element2 = list[halfList];
    listMedian = calculateAverage([element1, element2]);
  } else {
    listMedian = list[halfList];
  }
  return listMedian;
}

function calculateMode(list) {
  const listObject = {};
  list.map((element) => {
    if (listObject[element]) {
      listObject[element] += 1;
    } else {
      listObject[element] = 1;
    }
  });
  const listArray = Object.entries(listObject).sort((a, b) => a[1] - b[1]);
  const listMode = listArray[listArray.length - 1];
  return listMode[0];
}

console.log(`Lista 1 : ${list1}`);
console.log(`Lista 2 : ${list2}`);
console.log(`Lista 3 : ${list3}`);

const average = calculateAverage(list2);
const median = calculateMedian(list2);
const mode = calculateMode(list3);
console.log(
  `El Promedio de la lista 2 es : ${average} y la Mediana es : ${median}`
);
console.log(`La Moda de la lista 3 es : ${mode}`);
