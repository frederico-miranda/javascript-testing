function reverseString(string){
    let strReverse="";
    for (let i=string.length-1; i>0; i--){
        strReverse += string[i];
    }
    return strReverse;
}


module.exports =reverseString;