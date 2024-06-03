function firstWord(s) {

    // Check if the string is empty
    if (!s) {
        return "";
    }
    
    // Find the position of the first space
    const spaceIndex = s.indexOf(' ');
    
    // If there's no space, return the entire string
    if (spaceIndex === -1) {
        return s;
    }
    
    // Otherwise, return the substring up to the first space
    return s.substring(0, spaceIndex);
}

// Test cases

	//console.log(str)
	
	


// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
