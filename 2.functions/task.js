function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	sum = arr.reduce(
		(accumulator, currentValue) => accumulator + currentValue, sum);
	let avg = parseFloat((sum / arr.length).toFixed(2));
	max = Math.max.apply(max, arr);
	min = Math.min.apply(min, arr);
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	let sum = 0;
	sum = arr.reduce(
		(sum, currentValue) => sum + currentValue, sum);
	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (!arr.length) {
		return 0;
	} else {
		let max = Math.max.apply(arr[0], arr);
		let min = Math.min.apply(arr[0], arr);
		return max - min;
	}
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	if (!arr.length) {
		return 0;
	} else {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 === 0) {
				sumEvenElement += arr[i];
			} else {
				sumOddElement += arr[i];
			}
		}
		return sumEvenElement - sumOddElement;
	}
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	if (!arr.length) {
		return 0;
	} else {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 === 0) {
				sumEvenElement += arr[i];
				countEvenElement++;
			}
		}
		return sumEvenElement / countEvenElement;
	}
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const max = func(...arrOfArr[i]);
		if (max > maxWorkerResult) {
			maxWorkerResult = max;
		}
	}
	return maxWorkerResult;
}


