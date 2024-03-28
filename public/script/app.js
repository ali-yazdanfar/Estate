let navIcon = document.querySelector(".nav-icon");
let nav = document.querySelector(".nav");
let overlay = document.querySelector(".overlay");
let menu = document.querySelectorAll(".menu__item li");
const sections = document.querySelectorAll("section");

// Intersection Observer
const observer = new IntersectionObserver(observerHandler, { threshold: 0.5 });

sections.forEach((section) => {
    observer.observe(section);
});

function observerHandler(allSections) {
    allSections.map((section) => {
        let sectionClassName = section.target.className;
        let sectionMenuItem = document.querySelector(
            `li[data-section=${sectionClassName}]`
        );
        let sectionMenuItemMobile = document.querySelector(
            `.list__item--mobile[data-section=${sectionClassName}]`
        );

        if (section.isIntersecting) {
            sectionMenuItem.classList.add("menu__item--active");
            sectionMenuItemMobile.classList.add("menu__item--active");
        } else {
            sectionMenuItem.classList.remove("menu__item--active");
            sectionMenuItemMobile.classList.remove("menu__item--active");
        }
    });
}

navIcon.addEventListener("click", () => {
    nav.classList.remove("-left-60");
    nav.classList.add("left-0");
    overlay.classList.remove("invisible");
    overlay.classList.remove("opacity-0");
    overlay.classList.add("opacity-100");
    overlay.classList.add("visible");
});

overlay.addEventListener("click", () => {
    nav.classList.remove("left-0");
    nav.classList.add("-left-60");
    overlay.classList.remove("opacity-100");
    overlay.classList.remove("visible");
    overlay.classList.add("invisible");
    overlay.classList.add("opacity-0");
});

var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});

menu.forEach((item) => {
    item.addEventListener("click", (event) => {
        event.preventDefault();

        removeClassName(menu, "menu__item--active");
        item.classList.add("menu__item--active");

        let sectionClass = item.getAttribute("data-section");

        let sectionOffsetTop = document.querySelector(
            `.${sectionClass}`
        ).offsetTop;

        window.scrollTo({
            top: sectionOffsetTop - 130,
            behavior: "smooth",
        });
    });
});

function removeClassName(item, className) {
    item.forEach((item) => {
        item.classList.remove(className);
    });
}
