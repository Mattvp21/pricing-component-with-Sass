//document.querySelector(".onoffswitch-checkbox").addEventListener("click", unction);
let checkBox = document.querySelector("#myonoffswitch").checked;

function myFunction() {
    document.getElementsByClassName("card__price")[0].innerHTML = "$199.99";
    document.getElementsByClassName("card__price")[1].innerHTML = "$399.99";
    document.getElementsByClassName("card__price-2")[0].innerHTML = "$249.99";
}



if (checkBox == false) {
    myFunction();
}