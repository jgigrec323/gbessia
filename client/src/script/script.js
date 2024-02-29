import gsap from "gsap";
const singleActus = document.querySelectorAll(".singleActu");

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".singleActu",
    start: "top center",
    end: "bottom bottom",
    scrub: true,
    markers: true,
  },
});
singleActus.forEach((element) => {
  tl.fom(element, {
    x: 20,
    opacity: 0,
    duration: 1,
  });
});

console.log(singleActus);
