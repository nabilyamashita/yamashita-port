const navSlide = () => {
    const burger = document.querySelector (".burger");
    const navLists = documet.querySelector("nav");

    burger.addEventListener("click", () => {
        navLists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
};

navSlide();