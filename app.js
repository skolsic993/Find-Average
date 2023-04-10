function average1(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total / arr.length;
}

function average2(arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }

  return total / arr.length;
}

const avg = average2([0, 50]);

console.log(avg);
