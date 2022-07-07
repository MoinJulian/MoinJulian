window.onload = () => {
    this.sessionStorage.setItem("username", "MoinJulian");
    this.sessionStorage.setItem("password", "moinjulian");
}

let input = document.getElementsByTagName("input");
let login = document.getElementById("log-in");
let form = document.querySelector("form");
form.onsubmit = () => {return false}
login.onclick = () => {
    if((input[0].value != "") && (input[1].value != "")){

    }else if((input[0].value != "")) {
        input[0].nextElementSibling.textContent = "Username is empty!";
        setTimeout(() =>{
            input[0].nextElementSibling.textContent = "";
        }, 2000);
    }
}