var text;
text = document.getElementById("buttonRead");
text.innerHTML = "Read More";
text.addEventListener("click", function () {
    if (text.textContent == "Read More") {
        text.innerHTML = "Read Less";
    } else {
        text.innerHTML = "Read More";
    }
})