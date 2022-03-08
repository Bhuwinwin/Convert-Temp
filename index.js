var btn = document.getElementById("btn").onclick = function() {

    //import HTML to Js
    var C = document.getElementById("C").value;
    var F = document.getElementById("F").value;
    var K = document.getElementById("K").value;
    let resultC = document.getElementById("resultC");
    let resultF = document.getElementById("resultF");
    let resultK = document.getElementById("resultK");


    C = Number(C);
    F = Number(F);
    K = Number(K);

    console.log(C);
    console.log(F);
    console.log(K);

    //func C
    function CtoF() {
        F = C * (9 / 5) + 32;
        console.log(resultF);
    }
    function CtoK() {
        K = C + 273.15;
        console.log(resultK);
    }

    //func F
    function FtoC() {
        C = (F - 32) * 5 / 9;
        console.log(resultC);
    }
    function FtoK() {
        K = (F-32) * 5 / 9 + 273.15;
        console.log(resultK);
    }

    //func K
    function KtoC() {
        C = K - 273.15;
        console.log(resultC);
    }
    function KtoF() {
        F = (K - 273.15) * 5 / 9 + 32;
        console.log(resultF);
    }

    //if else
    if (F === 0 && K === 0) {
        CtoF();
        CtoK();
        resultC.innerHTML = C + " C"
        resultF.innerHTML = F + " F";
        resultK.innerHTML = K + " K";
    }
    if (C === 0 && K === 0) {
        FtoC();
        FtoK();
        resultF.innerHTML = F + " F"
        resultK.innerHTML = K + " K";
        resultC.innerHTML = C + " C";
    }
    if (F === 0 && C === 0) {
        KtoC();
        KtoF();
        resultK.innerHTML = K + " K"
        resultC.innerHTML = C + " C";
        resultF.innerHTML = F + " F";
    }
    if (F > 0 && C > 0 && K > 0) {
        console.log("Error")
    }
    

}