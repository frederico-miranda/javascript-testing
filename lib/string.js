export
function reverseString(string){
    let strReverse="";
    for (let i=string.length-1; i>=0; i--){
        strReverse += string[i];
    }
    return strReverse;
}

export
function capitalize(string){
    let capital= string.split('');
    if (capital.length>0){
       capital[0] = capital[0].toUpperCase();
       return capital.join('');
    }
    else{
        return "";
    }
  }

