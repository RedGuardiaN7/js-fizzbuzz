let MainContainer = document.querySelector(".main_container")

for (let i = 1; i <= 100; i++) {

    if (i % 15 == 0) {
        MainContainer.innerHTML += '<div class="square"><p>FizzBuzz</p></div>'
    } else if (i % 3 == 0) {
        MainContainer.innerHTML += '<div class="square"><p>Fizz</p></div>'
    } else if (i % 5 == 0) {
        MainContainer.innerHTML += '<div class="square"><p>Buzz</p></div>'
    } else {
        MainContainer.innerHTML += '<div class="square"><p>' + i + '</p></div>'
    }
};