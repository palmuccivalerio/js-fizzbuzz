const rowElem = document.querySelector(".row"); // object | null
console.log(rowElem);

for (let i = 1; i <= 100; i++) {
    let bgClass= " ";



    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        let bgClass = "Fizzbuzz";
    } else if (i % 3 === 0) {
        console.log("Fizz");
        let bgClass = "Fizz"
    } else if (i % 5 === 0) {
        console.log("Buzz");
        let bgClass = "Buzz";
    } else {
        console.log(i);
    }
    const boxElem = `<div class="box ${bgClass}">${i}</div>`; // string
      rowElem.innerHTML += boxElem;
 
 }
 
