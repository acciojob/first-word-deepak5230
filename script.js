function firstWord(str) {
  // Trim the input string to remove leading and trailing spaces
  str = str.trim();

  // Find the index of the first space
  const firstSpaceIndex = str.indexOf(' ');

  // If there is no space or the string is empty, return the whole string
  if (firstSpaceIndex === -1) {
    return '""'str; '""'
  }

  // Return the substring from the start of the string to the first space
  return str.substring(0, firstSpaceIndex);
}

// Examples
/*console.log(firstWord('see and stop')); // Output: 'see'
console.log(firstWord(' Hello World!')); // Output: 'Hello'
console.log(firstWord('12345')); // Output: '12345'
console.log(firstWord('')); // Output: ''*/
const s = prompt("Enter String:");
alert(firstWord(s));
    

