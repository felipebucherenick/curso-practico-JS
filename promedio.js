const list1 = [100, 200, 300, 400, 100000000];

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

const average = calculateAverage(list1);
const median = calculateMedian(list1);

console.log(`El Promedio es : ${average} y la Mediana es : ${median}`);
