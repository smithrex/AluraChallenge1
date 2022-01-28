function ENCRYPT(){
    const txt = document.getElementById('txtINPUT').value;
    if (checkTXT(txt)==true){
        document.getElementById("txtOUTPUT").
        value = txt.replace(/e/gi, 'enter').
        replace(/i/gi, 'imes').
        replace(/a/gi, 'ai').replace(/o/gi, 'ober').
        replace(/u/gi, 'ufat');
        document.getElementById("txtINPUT").value="";
    }        
}

function DECRYPT(){
    const txt= document.getElementById ("txtINPUT").value;
    if(checkTXT(txt)==true){
        document.getElementById("txtOUTPUT").
        value = txt.replace(/ai/gi, 'a').
        replace(/enter/gi, 'e').replace(/imes/gi, 'i').
        replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
        document.getElementById("txtINPUT").value="";
    }
}

function checkTXT(txt) {
    if ((/[A-Z]/.test(txt)) || (/[0-9]/.test(txt)) || (/[~@#$%^&*()_+|}{[\]\\\/><áéíóúàèìòù']/.test(txt))) {
        document.getElementById("txtOUTPUT").value = "Intente nuevamente. Su mensaje contiene posiblemente palabras con mayúsculas y/o acentos";
        return false;
    } else if (txt == "") {
        return false;
    } else {
        return true;
    }
}

function COPY(){
    const txtCOPY = document.getElementById("txtOUTPUT");  
    txtCOPY.select();
    document.execCommand("copy");
    document.getElementById("txtOUTPUT").value="Mensaje Copiado";
    setTimeout(() => { document.getElementById("txtOUTPUT").value=""; }, 500);
}
