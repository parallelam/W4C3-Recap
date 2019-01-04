//W4C3 Recap Notes:
// Differ between alert (dialogue box with message), prompt (dialogu box that allows for user input of information), confirm (dialogue box for "Ok" or "Cancel")
// Conditionals: simplistic if/else statements; incorporate booleans primarily.
    //ex: if (confirmSushi) {
    //    alert("You lke "+ sushiType + "!");
    // } else if (confirmGingerTea);

// Arrays are a type of variable that are collections. Collections can be made up of strings, numbers, booleans, other arrays, objects, anything.
    // Each element of an array is marked by an index. Indexes always start with 0.
    //ex: var diceNumbers = [1, 2, 3, 4, 5, 6];

// For loops are critical in programming. We use for loops to run repeated blocks of code over a set period. 
    // Each for loop is composed of a: variable declaration or counter, a loop condition and an iteration.
        //ex: var veggies = ["carrtos", "peas," lettuce"];
        // for (var i = 0; i < vegetables.length; i++) {
            // console.log("I love " + vegetables[i]);}

// Class Live Examples:
    var namesArr = ["Sophie", "George", "Waldo", "Stephen", "Henry"]; // Global scope variable.
    // Function to check if string exists within an array: 
//        function checkIfExists(keyword) { // Function created to check for a speicifc keyword.
//            var found = false;
//            for (var i = 0; i < names.length; i++) { // For loop to scan the entirety of the array for keyword.
//                if (names[i] === keyword) {
//                    found = true;
//                }
//                return found;               
//            }
//        }
//        var result1 = checkIfExists("Waldo");
//        console.log(result1);
//        var result2 = checkIfExists("James");
//        console.log(result2);
//        var result3 = names.includes("Waldo");
//        console.log(result3); // Will return true as string "Waldo" is confirmed to be included in the array.
//        var result4 = names.indexOf("Waldo");
//        console.log(result4); // Will return 2 as that is the index value of string "Waldo" in the array.
//        var result5 = names.indexOf("James");
//        console.log(result5); // Will return -1 since "James" does not exist in array and therefore does not have an index value.
    
    // Function to filter arrays:
        function filterArray(arrayName, letter) {
            var result = [];
            for (var i = 0; i < arrayName.length; i++) {
                if (arrayName[i].charAt(0).toLowerCase() === letter.toLowerCase()) {
                    result.push(arrayName[i]);
                }
            } return result;
        }
        var filteredArray = filterArray(namesArr, 's');
        console.log(filteredArray); // Returns "Sophie" and "Stephen" as they both begin with "s" in the array.

        var newArray = namesArr.filter(function(name){
            if (name === "Sophie"){
                return name;
            }
        });

        var x = 5;
        var y = x; // Primitive types. Variable assignment are based on real value.
        var pets = ["cat", "dog", "rabbit"];
        var pets2 = pets; // Variable assignment is based on reference. 
        pets2.push("giraffe");
        var pets2 = [...pets]; // This method prevents variables from pointing to the same place; ie the same source of memory.
