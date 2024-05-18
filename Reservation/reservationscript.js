

document.addEventListener("DOMContentLoaded", async () => {
    var form = document.getElementById("myForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var formData = new FormData(form);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                window.location.href = "thankyou.html";
            } else {
                console.error('Form submission failed:', xhr);
            }
        };
        xhr.send(formData);
    });
})