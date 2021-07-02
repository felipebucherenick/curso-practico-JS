//====================================== UTILS =============================================================================
// -- Resolve if the length of a list is even or odd ----------------------
function isEven(list) {
  if (list.length % 2 === 0) {
    return true;
  } else return false;
}
// ===================================== MAIN FUNCTIONS =====================================================================
//-- Calculate de Average of a list ----------------------------------
function calculateAverage(list) {
  const sumList = list.reduce(
    (accumValue = 0, newElement) => accumValue + newElement
  );

  const listAverage = sumList / list.length;
  return listAverage;
}

//-- Calculate de Median of a list ----------------------------------
function calculateMedian(list, percent = 100) {
  const medianList = list.slice();
  medianList.sort((a, b) => a - b);
  const spliceStart = (medianList.length * (100 - percent)) / 100;
  const spliceCount = medianList.length - spliceStart;
  const spliceList = medianList.splice(spliceStart, spliceCount);
  const halfList = parseInt(spliceList.length / 2);
  let listMedian;
  if (isEven(spliceList)) {
    let element1 = spliceList[halfList - 1];
    let element2 = spliceList[halfList];
    listMedian = calculateAverage([element1, element2]);
  } else {
    listMedian = spliceList[halfList];
  }
  return listMedian;
}

//-- Calculate de Mode of a list ----------------------------------
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

// ====================================== MAIN ==============================================================================
console.log(winden);
const windenSalaries = winden.map((person) => person.salary);

const windenSalaryAverage = calculateAverage(windenSalaries);
console.log(windenSalaries);
const windenSalaryMedian = calculateMedian(windenSalaries, 10);
console.log(windenSalaries);
const windenSalaryMode = calculateMode(windenSalaries);
console.log(windenSalaries);

console.log(`El PROMEDIO de los sueldos de Winden es : ${windenSalaryAverage}`);
console.log(`La MEDIANA de los sueldos de Winden es : ${windenSalaryMedian}`);
console.log(`La MODA de los sueldos de Winden es : ${windenSalaryMode}`);
