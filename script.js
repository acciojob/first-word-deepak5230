function firstWord(str) {

    let str1 = str.split(" "); 
    return '"' + str1[0] + '"';
}
const s = prompt("Enter String:");
alert(firstWord(s));


