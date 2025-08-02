let button = document.getElementById("but");

button.addEventListener("click", function sub() {
    alert("Test drive has been successfully booked");

    let userData = {
        mr: document.getElementById("mr").value,
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        cars: document.getElementById("cars").value,
        city: document.getElementById("city").value
    };

    console.log(userData); 
    localStorage.setItem("userData", JSON.stringify(userData));
    document.location = 'result.html'; 
});

