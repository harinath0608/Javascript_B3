let ChangeText = document.querySelectorAll(".style")
let btn = document.getElementById("btn")

console.log(ChangeText[0])
console.log(ChangeText[1])
console.log(ChangeText[2])


function changeHeading() {

    ChangeText.textContent = "Javascript is the Dynamic Language"
    ChangeText[0].style.color = "blue"
    ChangeText[1].style.color = "blue"
     ChangeText.style.backgroundColor = "red"

}


