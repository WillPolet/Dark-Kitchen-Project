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
    return sentence
}

// export default stringify()

function toggleIcon() {
    var icon = document.getElementById("toggle-icon");

    if (icon.classList.contains("fa-toggle-off")) {
    icon.classList.remove("fa-toggle-off");
    icon.classList.add("fa-toggle-on");
    } else {
    icon.classList.remove("fa-toggle-on");
    icon.classList.add("fa-toggle-off");
    }
}