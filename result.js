window.addEventListener("DOMContentLoaded", () => {
    let third = document.getElementById("third");
    let userData = localStorage.getItem("userData");

    if (userData) {
        userData = JSON.parse(userData); // Convert from string to object

        // Create HTML to display the user data
        third.innerHTML = `
            <h3>booked</h3>
            <p><strong></strong> ${userData.mr}</p>
            <p><strong>First Name:</strong> ${userData.firstname}</p>
            <p><strong>Last Name:</strong> ${userData.lastname}</p>
            <p><strong>Email:</strong> ${userData.email}</p>
            <p><strong>Phone Number:</strong> ${userData.number}</p>
            <p><strong>Car:</strong> ${userData.cars}</p>
            <p><strong>City:</strong> ${userData.city}</p>
        `;

        localStorage.removeItem("userData");

    } else {
        third.innerHTML = `<p>No user data found.</p>`;
    }
});
