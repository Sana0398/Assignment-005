function changeTheme() {
    const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500", "bg-pink-500"];
    const body = document.body;

    // Remove previous color classes
    body.classList.remove(...colors);

    // Select a random color and apply it
    const randomColor = colors[Math.floor(Math.random() % colors.length)];
    body.classList.add(randomColor);
}
