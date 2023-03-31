function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }

    sum += arr[i];
  }

  const avg = +(sum / arr.length).toFixed(2); // округляем до 2 знаков и преобразуем в число

  return { min, max, avg };
}

function summElementsWorker(...arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenSum += arr[i];
    } else {
      oddSum += arr[i];
    }
  }

  return evenSum - oddSum;
}

function makeWork(arrOfArr, func) {
  const results = [];

  for (let i = 0; i < arrOfArr.length; i++) {
    const arr = arrOfArr[i];
    const result = func(...arr);
    results.push(result);
  }

  return results;
}

// Пример использования
const arrOfArr = [[], [1, 2, 3, 4, 5, 6, 7, 8, 9], [94, 51, 57, 41, 47, 66, 58, 10, 38, 17], [15, 97, 85, 64, 67, 10, 69, 40, 15, 35]];
const results = makeWork(arrOfArr, differenceEvenOddWorker);
console.log(results); // [0, -5, 53, -269]

function averageEvenElementsWorker(...arr) {
  const evenArr = arr.filter(num => num % 2 === 0); // отфильтровать четные элементы
  if (evenArr.length === 0) return 0; // вернуть 0, если нет четных элементов
  const sum = evenArr.reduce((acc, cur) => acc + cur); // вычислить сумму четных элементов
  return sum / evenArr.length; // вернуть среднее значение
}

function makeWork (arrOfArr, func) {

}
