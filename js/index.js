let sidebar = document.getElementById("sidebar");
let img = document.getElementsByTagName("img");
let btn = document.getElementById("bars");
btn.addEventListener('click', () => {
    sidebar.classList.toggle(".show");
})