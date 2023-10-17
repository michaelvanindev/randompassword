"use strict";

const getRandomNumber = max => {
	let random = null;
	if (!isNaN(max)) {
		random = Math.random();             // value >= 0.0 and < 1.0
		random = Math.floor(random * max);  // value is an integer between 0 and max - 1
		random = random + 1;                // value is an integer between 1 and max
	}
	return random;
};

$(document).ready( () => {

    $("#generate").click( () => {

        $("#password").val( "" ); // clear previous entry

        const num = parseInt($("#num").val());

        if (!isNaN(num)) {
            let password = "";
            const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            const lowerCase = "abcdefghijklmnopqrstuvwxyz"
            const numbers = "0123456789"
            const symbols = "!@#$%^&*()_"
            
            let chars = "";

            if ($("#uppercase").is(":checked")) {
                chars += upperCase;
            }
            if ($("#lowercase").is(":checked")) {
                chars += lowerCase;
            }
            if ($("#numbers").is(":checked")) {
                chars += numbers;
            }
            if ($("#symbols").is(":checked")) {
                chars += symbols;
            }
            console.log(chars);

            for(let i = 0; i < num; i++) {
                const randomIndex = getRandomNumber(chars.length);
                password += chars.charAt(randomIndex);
            }
            $("#password").val(password);
        } else {
            alert("Please enter a valid number");
        }
    }); // end click()
    
    $("#clear").click( () => {
        $("#num").val( "" );
        $("#password").val( "" );
        $("#num").focus();
    }); // end click()
    
    // set focus on initial load
    $("#num").focus();
}); // end ready()