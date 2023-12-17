function revString(){
    let str1 = document.getElementById('strVal').value;

    if(str1 == ''){
        document.getElementById('showResult').style.background = "purple";

        document.getElementById('showResult').style.color = "white";

        document.getElementById('showResult').innerText = `Sorry! Input string not found.`;
    }
    else{
        const reverseStr = [...str1].reverse().join("");

        document.getElementById('showResult').innerText = `Result  = ${reverseStr}`;

        document.getElementById('showResult').style.background = "darkgreen";

        document.getElementById('showResult').style.color = "white";
    }

}