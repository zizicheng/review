let btns = document.querySelectorAll(".css-sheets-swith button")
console.log(btns);
let styleLink= document.getElementsByTagName("link")[0];
for(let i = 0; i < btns.length; i++) {
    btns[0].onclick = function(eve) {
        styleLink.href = "css/style_1.css";
    };
    btns[1].onclick = function(eve) {
        styleLink.href="css/style_2.css";
    };
    btns[2].onclick = function () {
        styleLink.href="css/style_3.css";
    };
}