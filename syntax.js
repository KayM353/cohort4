//define attributes / variables

    //number

    // isNumber
    // input Number 
    // output Number 

        isNum:(num) => {
            return num +3 
        
        };

    //string

    // isString 
    // input String
    // output String

        isString: (str) => {
            return str + "time"

        };

    //boolean

        isTrue: (age) => {
            if (age>=20) return true;
            return false

        };

    //array

        updateArray: (num) => {
            let arr = [70,0,70]
            arr [1] = num
            return arr;

        };

    
    //dictionary / objects

        updateObject: (type) => {
            var vehicle = {
                brand: "Ford",
                model: type,
                fuel: "gas",


            }
                return vehicle.model;
        };


    //undefined

        isUndefined: () => {
            var x; 
            if (typeof x === "undefined") {
                txt= "x is undefined";
            
            } else {
                txt = "x is defined";
            }

        };


    // sample if / else 
    // name isEven
    // input number
    // output number

        isEven: (num) => {
            if (num %3 === 0) {return true};
            { return false};

        };
//functions

    //parameters
        isPar: (num) => {
            var x = num;
            return num;
            
        };
    //returns


//arrays

    //add to the front

        frontArray: (num) => {
            var arr1 = [2,3,4,5];
            arr1.unshift(num);
            return arr1;
        
        };
        
    //add to the end

    backArray: (num) => {
        var arr = [1,2,3,4]
        arr.push (num); 
        return arr;

    }

        //update values

        updateArr: (num) => {
            var fruits = ["Apple", "Mango", "Kiwi", "Pineapple"]
            fruits[num]= "Kiwi";
            return fruits;
            
        };


//loops 
      
    //for

    isLoop: (num) => {
        for (let i=0; i<5; i++) {
            num = num +i;
            
        }; 
        return num

    };

    
    //for/in
    
        inLoop: (y) => {
            var txt  = "";
            var x;

        }; 

    //do while

        doWhile: (num) => {
            let i = 0; 
            do {num = num +i;
            i ++;
        }
        while (i < 6);
        return num; 

        }; 

   //forEach (with array and function)

//Objects / Dictionaries
   //declare object
   // lookup key to retrieve value
   


   