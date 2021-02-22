    let checkBox = document.querySelector("#myonoffswitch");


    checkBox.addEventListener('change',function myFunction() {

    if (checkBox.checked) {
        document.getElementsByClassName("card__price")[0].innerHTML = "<span class='card__price--dollar'>$</span>19.99";
        document.getElementsByClassName("card__price")[1].innerHTML = "<span class='card__price--dollar'>$</span>39.99";
        document.getElementsByClassName("card__price-2")[0].innerHTML = "<span class='card__price--dollar'>$</span>24.99";
    } else {
        document.getElementsByClassName("card__price")[0].innerHTML = "<span class='card__price--dollar'>$</span>199.99";
        document.getElementsByClassName("card__price")[1].innerHTML = "<span class='card__price--dollar'>$</span>399.99";
        document.getElementsByClassName("card__price-2")[0].innerHTML = "<span class='card__price--dollar'>$</span>249.99";
    }

})
