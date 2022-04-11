const boxUndred = document.querySelector(".row");

for (var i = 1; i < 101; i++) {



    let mincomMul;
    if (i % 15 == 0) {

        mincomMul = "fizzbuzz";
        boxUndred.innerHTML += `<div class="box ${mincomMul}">${mincomMul}</div>`;
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        mincomMul = "fizz";
        boxUndred.innerHTML += `<div class="box ${mincomMul}">${mincomMul}</div>`;
        console.log("Fizz");
    } else if (i % 5 == 0) {
        mincomMul = "buzz"
        boxUndred.innerHTML += `<div class="box ${mincomMul}">${mincomMul}</div>`;
        console.log("Buzz");
    } else {
        console.log(i);
        boxUndred.innerHTML += `<div class="box">${i}</div>`;
    }

}