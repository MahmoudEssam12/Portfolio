// My custom dark mode 
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#darkToggler");

const enableDarkMode = () => {
    // add the class darkmode to the body
    document.body.classList.add("darkmode");
    // add class active to the button
    document.querySelector(".darkmode-btn").classList.add("darkActivated");
    // update darkMode in the localStorage
    localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
    // removing the class darkmode to the body
    document.body.classList.remove("darkmode");
        // remove class active to the button
        document.querySelector(".darkmode-btn").classList.remove("darkActivated");
    // update darkMode in the localStorage
    localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
    enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
})