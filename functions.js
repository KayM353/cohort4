
const functions = {
    
    size: (num) => {
        if (num < 10) return "small";
        if (num < 20) return "medium";
        
        return "large";
    },

    add: (num1, num2) => {
        return num1 + num2;
    },

    subtract: (num1, num2) => {
        return num1 - num2;
    },
    
    multiply: (num1, num2) => {
        return num1 * num2;
    },

    divide: (num1, num2) => {
        return num1 / num2
    },

    



    // function isEven(n) {
    //     if (n == 0)
    //       return true;
    //     else if (n == 1)
    //       return false;
    //     else if (n < 0)
    //       return isEven(-n);
    //     else
    //       return isEven(n - 2);
      // }

      
}

export default functions;
