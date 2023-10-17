var PLanguages = ["C++", "JavaScript", "C#", "Python"];

        // Accessing array elements
        console.log(PLanguages[0]); // Output: C++
        console.log(PLanguages[3]); // Output: Python

        // Adding elements to the array
        PLanguages.push("Java");

        console.log(PLanguages); // Output:["C++", "JavaScript", "C#", "Python"] 

        // Removing elements from the array from index 1  by number  2 
        PLanguages.splice(1, 2);
        console.log(PLanguages); // Output: ["C++", "Python", "Java"]

        // Date Object Example
        var CurrentDate = new Date();
        console.log(CurrentDate); // Output: Wed Oct 13 2023 12:00:00 GMT+0000 (Coordinated Universal Time)

        // Accessing Date Object properties
        console.log(CurrentDate.getFullYear()); // Output: 2023
        console.log(CurrentDate.getMonth()+1); // Output: 10  
        console.log(CurrentDate.getDay()); // Output: 13 (Current Day of the month)

        // Loop Example
        var numbers = [1, 2, 3, 4, 5];

        // For loop
        console.log("For loop:");
        for (var i = 0; i < numbers.length; i++) {
            console.log(numbers[i]);
        }

        // While loop
        console.log("While loop:");
        var j = 0;
        while (j < numbers.length) {
            console.log(numbers[j]);
            j++;
        }

        // For...of loop
        console.log("For...of loop:");
        for (var number of numbers) {
            console.log(number);
        }