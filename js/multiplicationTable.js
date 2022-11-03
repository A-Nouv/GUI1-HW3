/*
Anderson Nouv
Created: 10/29/22
File: multiplicationTable.js
*/ 


// Display error message if min or max values are not compliant
/*
    Known issues: with AND without the parseInt(), some number combinations would not
    work EX) 2 and 10 for the min and max values. 
    With parseInt(), it stops my error messages from appearing.
    Without parseInt(), my error messages appear
*/

/* Display error messages if user doesn't input min/max values correctly */ 
function errorMessage() {
    var minCol = parseInt(document.getElementById("minColumn").value);
    var maxCol = parseInt(document.getElementById("maxColumn").value);
    var minRow = parseInt(document.getElementById("minRow").value);
    var maxRow = parseInt(document.getElementById("maxRow").value);
    
    var error1 = document.getElementById("minColError");
    var error2 = document.getElementById("maxColError");
    var error3 = document.getElementById("minRowError");
    var error4 = document.getElementById("maxRowError");

    var errorConfirm = false;

    if (isNaN(minCol)) {
        
        // Change content, set console.log(s) for debuggingg. as well as set errorConfirm to true
        error1.textContent = "Minimum value must be greater than or equal to -50 and less than or equal to 50";
        console.log("error1: NaN minCol");
        console.log(minCol);
        errorConfirm = true;
    }
    else if (minCol < -50 || minCol > 50) {

        // Change content, set console.log(s) for debuggingg. as well as set errorConfirm to true
        error1.textContent = "Minimum value must be greater than or equal to -50 and less than or equal to 50";
        console.log("error1: Invalid minCol");
        console.log(minCol);
        errorConfirm = true;
    }
    else {

        // No error messages to display
        error1.textContent = "";
    }

    if (isNaN(maxCol)) {
        
        // Change content, set console.log(s) for debuggingg. as well as set errorConfirm to true
        error2.textContent = "Maximum value must be greater than or equal to the Minimum Column value and less than or equal to 50";
        console.log("error2: NaN maxCol");
        console.log(maxCol);
        errorConfirm = true;
    }
    else if ((maxCol < minCol || (minCol < -50 || minCol > 50)) || maxCol > 50) {

        // Change content, set console.log(s) for debuggingg. as well as set errorConfirm to true
        error2.textContent = "Maximum value must be greater than or equal to the Minimum Column value and less than or equal to 50";
        console.log("error2: Invalid maxCol");
        console.log("Min Col Value:");
        console.log(minCol);
        console.log("Max Col Value:");
        console.log(maxCol);
        errorConfirm = true;
    }
    else {

        // No error messages to display
        error2.textContent = "";
    }

    if (isNaN(minRow)) {
        
        // Change content, set console.log(s) for debuggingg. as well as set errorConfirm to true
        error3.textContent = "Minimum value must be greater than or equal to -50 and less than or equal to 50";
        console.log("error3: NaN minRow");
        console.log(minRow);
        errorConfirm = true;
    }
    else if (minRow < -50 || minRow > 50) {

        // Change content, set console.log(s) for debuggingg. as well as set errorConfirm to true
        error3.textContent = "Minimum value must be greater than or equal to -50 and less than or equal to 50";
        console.log("error3: Invalid minRow");
        console.log(minRow);
        errorConfirm = true;
    }
    else {

        // No error messages to display
        error3.textContent = "";
    }

    if (isNaN(maxRow)) {
        
        // Change content and color of content
        error4.textContent = "Maximum value must be greater than or equal to the Minimum Row value and less than or equal to 50";
        console.log("error4: NaN maxRow");
        console.log(maxRow);
        errorConfirm = true;
    }
    else if ((maxRow < minRow || (minRow < -50 || minRow > 50)) || maxRow > 50) {

        // Change content and color of content
        error4.textContent = "Maximum value must be greater than or equal to the Minimum Row value and less than or equal to 50";
        console.log("error4: Invalid maxRow");
        console.log("Min Row Value:");
        console.log(minRow);
        console.log("Max Row Value:");
        console.log(maxRow);
        errorConfirm = true;
    }
    else {

        // No error messages to display
        error4.textContent = "";
    }

    return errorConfirm;
}

// Multiply the minCol to maxCol values with the minRow to maxRow values 
// and create table
function multiply() {
    var minCol = document.getElementById("minColumn").value;
    var maxCol = document.getElementById("maxColumn").value;
    var minRow = document.getElementById("minRow").value;
    var maxRow = document.getElementById("maxRow").value;

    var table = document.getElementById("myTable");
    var output = "";

    // If the user puts invalid values after already creating a table,
    // the current table on screen will stay up until user fixes input(s)
    if (errorMessage() ==  true) {
        return;
    }

    // Makes the top row of table listing the user's min to max row values 
    for (var x = 0; x < 1; x++) {
        output += "<tr>";
        output += "<th>&times;</th>";
        for (var y = minRow; y <= maxRow; y++) {
            output += "<th>" + y + "</th>";
        }
        output += "</tr>";
    }

    // Makes the cells with output of multiplying
    for (var i = minCol; i <= maxCol; i++) {
        output += "<tr>";
        
        // Listing the next col value of the user's inpuut values before doing
        // multiplication
        output += "<th>" + i + "</th>";
        for (var j = minRow; j <= maxRow; j++) {
            
            output += "<td>" + (i * j) + "</td>";
        }
        output += "</tr>";
    }
    table.innerHTML = output;
}