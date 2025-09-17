let menutag = document.querySelector("#menutag");
let menulist = document.querySelector(".fixed");
let cross = document.querySelector(".fixed span i");

menutag.addEventListener("click", function () {
    gsap.to(menulist, {
        right: 0,
        duration: 0.8,
        onStart: () => {
            menulist.style.display = "block";
        }
    });
});

cross.addEventListener("click", function () {
    gsap.to(menulist, {
        right: "-70%",
        duration: 0.8,
        onComplete: () => {
            menulist.style.display = "none";
        }
    });
});
