function min(a, b) {
  // a, b int
  let count = 0;
  for (let i = b; i < a; i++) {
    count += 1;
  }
  console.log(count);
  return count;
  //a - b
}

min(4, 2);
