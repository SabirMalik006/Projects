{/* <input type="text" id="name" placeholder="Enter Your Name" required>
<input type="number" id="rollNumber" placeholder="Enter Your Roll Number" required>
<button id="submitButton">Submit</button> */}


document.getElementById("submitButton").addEventListener("click", function () {
    // Get values of the inputs
    var name = document.getElementById("name").value;
    var rollNumber = document.getElementById("name").value;

    // Check if fields are empty
    if (name === "" || rollNumber === "") {
        alert("Please fill out both fields.");
    } else {
        // If both fields are filled, redirect to grade.html
        window.location.href = "grade.html";
    }
});

