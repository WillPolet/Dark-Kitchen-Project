export const stringify = (a) => {
    a = a.trim()
    var strArray = a.split(" ");
    for (let i = 0 ; i < strArray.length ; i ++){
        if (strArray[i] == strArray[i+1]){
            delete strArray[i]
        }
        if (strArray[i] == " " && strArray[i+1] == ","){
            delete strArray[i]
        }
    }
    var tab = strArray.filter(elm => elm)
    var sentence = tab.join("")
    var strArray2 = sentence.split("")
    for (let j = 0 ; j < strArray2.length ; j++){
        if (strArray2[j] === "'"){
            delete strArray2[j]
        }
    }
    var tab2 = strArray2.filter(elm => elm)
    var sentence = tab2.join("")
    return sentence
}

// export default stringify()