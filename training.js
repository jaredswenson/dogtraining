setTimeout(function() {
    modal.style.display = "block";
}, 3000);


// Modal
var modal = document.getElementById('myModal');

// Close
var span = document.getElementsByClassName("close")[0];


// Close Button
span.onclick = function() {
    modal.style.display = "none";
}

// Close outside of modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
