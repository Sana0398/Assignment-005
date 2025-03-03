let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let fullDate = new Date().toLocaleDateString("en-US", options);
document.getElementById("date-id").innerText = fullDate; 