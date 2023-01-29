for (i = 0; i < 10; i++) {
    let action = ["+","-","/","*",];
    let firstNum;
    let secondNum;
    let thirtNum;
    let operator;
    let operator2;
    let result;
    let result2;
    let boolean = true;
    let boolean2 = true;
    let boolean3;
    
      do {
        firstNum = +prompt("Enter first number: ");
    } while (isNaN(firstNum) || firstNum == "");
    
    do {
        operator = prompt ("Enter operation: ");
        for (let i = 0; i < action.length; i++) {
            if (action[i] === operator) {
                boolean = false;
            }
        }
    }while (boolean);
    
    do {
        secondNum = +prompt("Enter second number: ");
    } while (isNaN(secondNum) || secondNum == "");
    
    do {
      operator2 = prompt ("Enter operation2: ");
      for (let x = 0; x < action.length; x++) {
          if (action[i] === operator2 || operator2 === "") {
              boolean2 = false;
          }
      }
    }while (boolean3);
    
    do {
      thirtNum = +prompt("Enter thirt number: ");
    } while (isNaN(thirtNum));
    
    switch (operator) {
        case "+":
          result = firstNum + secondNum;
          break;
        case "-":
            result = firstNum - secondNum;
          break;
        case "/":
            result = firstNum / secondNum;
          break;
        case "*":
            result = firstNum * secondNum;
          break;
    };
    if(!operator2){
      alert(result);

    }else{
      switch (operator2) {
        case "+":
          result2 = result + thirtNum;
          break;
        case "-":
            result2 = result - thirtNum;
          break;
        case "/":
            result2 = result / thirtNum;
          break;
        case "*":
            result2 = result * thirtNum;
          break;
      };
      alert(result2);

    }
 
    }
    
    