const findString = (str) => {
  // create the bew arr from input str
  let newArr = str.split(" ");

  
  // check the 1 letter of each word
  for (let i = 1; i < newArr.length; i++) {


    newArr[0][0] = newArr[0][0].toLowerCase();
    newArr[i][0] = newArr[i][0].toUpperCase(); 



  }
  // change it

  // use the join method to return a str

  return;
};

findString("My name is");
