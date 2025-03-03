function changeTheme() {
    const colors = ["bg-red-200","bg-red-500", "bg-blue-200","bg-blue-500", "bg-green-500","bg-yellow-200", "bg-yellow-500", "bg-purple-500", "bg-pink-500"];
    const body = document.body;
    body.classList.remove(...colors);
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.classList.add(randomColor);
}
